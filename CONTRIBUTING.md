# Contributing

## Scope

This repository documents common JSON-to-CSV and JSON-to-Excel workflows, plus a few runnable examples.

## Before You Change Anything

- Keep the sample folders ordered with two-digit prefixes.
- Prefer updates that keep the documentation easy to follow for non-technical users.
- Do not commit secrets. Keep `.env` local.

## Local Workflow

1. Make your changes.
2. Run the sample conversion scripts if you changed the converters.
3. Check the generated CSV files if you changed the sample inputs.
4. Commit the documentation and code together when the change is related.

## Files You Should Not Commit

- `.env`
- `out/`
- Python bytecode caches

## Questions To Resolve Early

- Whether a JSON structure should be flattened into one table or split across multiple outputs
- Whether arrays should be joined into one cell or expanded into rows
- Whether the target is CSV only or CSV plus Excel
