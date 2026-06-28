import { promises as fs } from "node:fs";
import path from "node:path";

function usage() {
  console.log("Usage: node scripts/json-to-csv.mjs <input-json> <output-csv>");
}

function isPlainObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function flattenObject(value, prefix = "", target = {}) {
  for (const [key, entry] of Object.entries(value)) {
    const nextKey = prefix ? `${prefix}.${key}` : key;
    if (Array.isArray(entry)) {
      if (entry.length === 0) {
        target[nextKey] = "";
        continue;
      }

      const primitivesOnly = entry.every((item) => !isPlainObject(item) && !Array.isArray(item));
      if (primitivesOnly) {
        target[nextKey] = entry.join("; ");
        continue;
      }

      const objectItems = entry.filter(isPlainObject);
      if (objectItems.length > 0) {
        // Preserve repeated child records so they can be expanded into rows.
        target.__childRows = target.__childRows || [];
        target.__childRows.push({ key: nextKey, items: objectItems });
        continue;
      }

      target[nextKey] = JSON.stringify(entry);
      continue;
    }

    if (isPlainObject(entry)) {
      flattenObject(entry, nextKey, target);
      continue;
    }

    target[nextKey] = entry;
  }

  return target;
}

function expandRows(rows) {
  const output = [];

  for (const row of rows) {
    const flattened = flattenObject(row);
    const childRows = flattened.__childRows || [];
    delete flattened.__childRows;

    if (childRows.length === 0) {
      output.push(flattened);
      continue;
    }

    let pending = [flattened];
    for (const child of childRows) {
      const nextPending = [];
      // Duplicate parent data across every child row before merging fields.
      for (const base of pending) {
        for (const item of child.items) {
          const childFlat = flattenObject(item);
          delete childFlat.__childRows;
          nextPending.push({ ...base, ...childFlat });
        }
      }
      pending = nextPending;
    }

    output.push(...pending);
  }

  return output;
}

function toCsv(rows) {
  const columns = [...new Set(rows.flatMap((row) => Object.keys(row)))];
  const escapeCell = (value) => {
    if (value === null || value === undefined) return "";
    const text = String(value);
    if (/[",\n\r]/.test(text)) {
      return `"${text.replace(/"/g, '""')}"`;
    }
    return text;
  };

  const header = columns.join(",");
  const body = rows.map((row) => columns.map((column) => escapeCell(row[column])).join(","));
  return [header, ...body].join("\n");
}

const [, , inputPath, outputPath] = process.argv;

if (!inputPath || !outputPath) {
  usage();
  process.exit(1);
}

const raw = await fs.readFile(inputPath, "utf8");
// NDJSON is treated as one JSON object per line.
const parsed = inputPath.endsWith(".ndjson")
  ? raw
      .split(/\r?\n/)
      .filter(Boolean)
      .map((line) => JSON.parse(line))
  : JSON.parse(raw);

const rows = Array.isArray(parsed) ? parsed : [parsed];
const csv = toCsv(expandRows(rows));

await fs.mkdir(path.dirname(outputPath), { recursive: true });
await fs.writeFile(outputPath, csv + "\n", "utf8");
console.log(`Wrote ${outputPath}`);
