# JSON to CSV or Excel

This site documents common JSON shapes and the three most practical conversion paths:

- VS Code extension
- npm script
- Python script

It also includes a non-technical runbook and a devcontainer for a ready-made environment.

## Start Here

- Problem statement: JSON is hierarchical, but Excel works best with rows and columns.
- Goal: turn JSON into CSV first, then open the CSV in Excel.
- Common paths: VS Code extension, npm script, or Python script.

## Pattern Library

- [01 - Flat objects](https://github.com/cloudshare360/json-to-csv-or-excel/blob/main/01-flat-objects/README.md)
- [02 - Nested object fields](https://github.com/cloudshare360/json-to-csv-or-excel/blob/main/02-nested-object-fields/README.md)
- [03 - Array fields](https://github.com/cloudshare360/json-to-csv-or-excel/blob/main/03-array-fields/README.md)
- [04 - Repeating child records](https://github.com/cloudshare360/json-to-csv-or-excel/blob/main/04-repeating-child-records/README.md)
- [05 - Key-value objects](https://github.com/cloudshare360/json-to-csv-or-excel/blob/main/05-key-value-objects/README.md)
- [06 - NDJSON / JSON Lines](https://github.com/cloudshare360/json-to-csv-or-excel/blob/main/06-ndjson-json-lines/README.md)
- [07 - Mixed optional fields](https://github.com/cloudshare360/json-to-csv-or-excel/blob/main/07-mixed-optional-fields/README.md)

## Conversion Tools

- [Node converter](https://github.com/cloudshare360/json-to-csv-or-excel/blob/main/scripts/json-to-csv.mjs)
- [Python converter](https://github.com/cloudshare360/json-to-csv-or-excel/blob/main/scripts/json-to-csv.py)
- [Dev container](https://github.com/cloudshare360/json-to-csv-or-excel/blob/main/.devcontainer/devcontainer.json)

## What This Repo Shows

- How to flatten JSON into CSV-friendly rows and columns
- How to handle nested fields, arrays, and parent-child structures
- How to keep instructions clear for non-technical users

## Related Docs

- [Repository README](https://github.com/cloudshare360/json-to-csv-or-excel/blob/main/README.md)
- [Non-technical guide](https://github.com/cloudshare360/json-to-csv-or-excel/blob/main/NON_TECHNICAL_GUIDE.md)
- [Runbook](https://github.com/cloudshare360/json-to-csv-or-excel/blob/main/RUNBOOK.md)
- [Contributing](https://github.com/cloudshare360/json-to-csv-or-excel/blob/main/CONTRIBUTING.md)
