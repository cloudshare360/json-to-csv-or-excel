# VS Code Extension

## Approach

Use an extension that unions all keys across records before exporting CSV.

## Input

`../sample.json`

## Expected CSV

```csv
id,name,email
1,Alice,
2,Bob,bob@example.com
```

## Notes

- Missing values become blank cells.
- Column order is usually based on the full set of keys.
