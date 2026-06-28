# VS Code Extension

## Approach

Use a JSON Lines or NDJSON-aware VS Code extension, then export the parsed rows as CSV.

## Input

`../sample.ndjson`

## Expected CSV

```csv
id,event
1,login
2,logout
```

## Notes

- Each line is one row.
- This is a common format for logs and export streams.
