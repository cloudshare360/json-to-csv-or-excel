from __future__ import annotations

import json
import csv
import sys
from pathlib import Path


def is_plain_object(value):
    return isinstance(value, dict)


def flatten_object(value, prefix="", target=None):
    if target is None:
        target = {}

    child_rows = target.setdefault("__childRows", [])

    for key, entry in value.items():
        next_key = f"{prefix}.{key}" if prefix else key

        if isinstance(entry, list):
            if not entry:
                target[next_key] = ""
                continue

            primitives_only = all(not isinstance(item, (dict, list)) for item in entry)
            if primitives_only:
                target[next_key] = "; ".join(map(str, entry))
                continue

            object_items = [item for item in entry if is_plain_object(item)]
            if object_items:
                # Keep repeated child records so they can be expanded later.
                child_rows.append((next_key, object_items))
                continue

            target[next_key] = json.dumps(entry)
            continue

        if isinstance(entry, dict):
            flatten_object(entry, next_key, target)
            continue

        target[next_key] = entry

    return target


def expand_rows(rows):
    output = []

    for row in rows:
        flattened = flatten_object(row)
        child_rows = flattened.pop("__childRows", [])

        if not child_rows:
            output.append(flattened)
            continue

        pending = [flattened]
        for _, items in child_rows:
            next_pending = []
            # Duplicate parent data for every nested child row.
            for base in pending:
                for item in items:
                    child_flat = flatten_object(item)
                    child_flat.pop("__childRows", None)
                    next_pending.append({**base, **child_flat})
            pending = next_pending

        output.extend(pending)

    return output


def load_input(input_path: Path):
    if input_path.suffix.lower() == ".ndjson":
        rows = []
        # NDJSON stores one JSON object per line.
        for line in input_path.read_text(encoding="utf-8").splitlines():
            if line.strip():
                rows.append(json.loads(line))
        return rows

    data = json.loads(input_path.read_text(encoding="utf-8"))
    return data if isinstance(data, list) else [data]


def main() -> int:
    if len(sys.argv) != 3:
        print("Usage: python scripts/json-to-csv.py <input-json> <output-csv>")
        return 1

    input_path = Path(sys.argv[1])
    output_path = Path(sys.argv[2])
    rows = expand_rows(load_input(input_path))

    output_path.parent.mkdir(parents=True, exist_ok=True)
    columns = []
    for row in rows:
        for column in row.keys():
            if column not in columns:
                columns.append(column)

    with output_path.open("w", encoding="utf-8", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=columns, extrasaction="ignore")
        writer.writeheader()
        writer.writerows(rows)

    print(f"Wrote {output_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
