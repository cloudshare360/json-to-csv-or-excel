# npm Extension

## Approach

Use an npm package that reads NDJSON line by line and writes CSV.

## Input

`../sample.ndjson`

## Expected CSV

```csv
id,event
1,login
2,logout
```

## Notes

- Good for streaming or large datasets.
- Often simpler than parsing one big JSON array.
