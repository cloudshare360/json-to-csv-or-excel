# VS Code Extension

## Approach

Use a VS Code extension that flattens nested JSON into a table before exporting CSV.

## Input

`../sample.json`

## Expected CSV

```csv
id,name,address.city,address.state
1,Alice,Austin,TX
```

## Notes

- Nested fields usually need flattening.
- Dot notation is a common column naming convention.
