# npm Extension

## Approach

Use `json2csv` or a similar package that builds a merged schema from all objects.

## Input

`../sample.json`

## Expected CSV

```csv
id,name,email
1,Alice,
2,Bob,bob@example.com
```

## Notes

- This is common in real-world exports.
- Fields may vary by record, so schema union matters.
