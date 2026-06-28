# json-to-csv-or-excel
# JSON to Excel Conversion

## Problem Statement

Convert JSON data into a format that can be opened and analyzed in Excel, usually by first transforming JSON into CSV.

The main challenge is that JSON is hierarchical, while Excel works best with tabular data. Some JSON structures map directly to rows and columns, while others need flattening, normalization, or splitting across multiple sheets.

## Common Conversion Patterns

The folders in this workspace document the most common JSON shapes and the usual conversion approach for each one.

- `01-flat-objects`
- `02-nested-object-fields`
- `03-array-fields`
- `04-repeating-child-records`
- `05-key-value-objects`
- `06-ndjson-json-lines`
- `07-mixed-optional-fields`

Each folder contains:
- a short description
- a shared sample JSON input
- three numbered subfolders for conversion approaches
- the expected CSV-style output for each approach

The approach subfolders use this naming pattern:

- `01-vscode-extension`
- `02-npm-extension`
- `03-pip-pandas`

## How To Run

- If you want the shortest path, open the sample JSON file, run one of the commands below, and then open the CSV in Excel.
- If you are using VS Code, you can also use a JSON-to-CSV extension and export the result manually.
- If you want a ready-made environment, open the folder in VS Code and choose `Reopen in Container`.

Command options:

- npm path: `npm run convert:npm -- <input-json> <output-csv>`
- Python path: `npm run convert:py -- <input-json> <output-csv>` or `python scripts/json-to-csv.py <input-json> <output-csv>`
- VS Code path: open the sample JSON in VS Code, use a JSON-to-CSV extension, and save the generated CSV

Examples:

```bash
npm run convert:npm -- 01-flat-objects/sample.json out/flat.csv
python scripts/json-to-csv.py 06-ndjson-json-lines/sample.ndjson out/logs.csv
```

The Python converter in this repo uses the standard library, so no extra install is required. If you prefer a `pandas`-based workflow, you can add it later through `pip`.

## Non-Technical Guide

See [NON_TECHNICAL_GUIDE.md](C:/Users/sri/adhoc-tasks/json-excel/NON_TECHNICAL_GUIDE.md) for a step-by-step guide written for non-technical users.

## Dev Container

This repo includes [`.devcontainer/devcontainer.json`](C:/Users/sri/adhoc-tasks/json-excel/.devcontainer/devcontainer.json). In VS Code, open the folder and use `Reopen in Container` to get Node and Python ready to use.
