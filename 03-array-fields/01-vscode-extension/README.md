# VS Code Extension

## Approach

Use a JSON-to-CSV extension and join array values into a single cell before exporting.

## Input

`../sample.json`

## Expected CSV

```csv
id,name,skills
1,Alice,"Python; SQL"
```

## Notes

- Arrays often need custom handling.
- The join separator can vary by tool.
