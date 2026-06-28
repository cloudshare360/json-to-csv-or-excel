# VS Code Extension

## Approach

Use a JSON-to-CSV extension that converts a single object into a one-row table.

## Input

`../sample.json`

## Expected CSV

```csv
name,age,city
Alice,30,Austin
```

## Notes

- This often works without special flattening.
- Good for config-like JSON objects.
