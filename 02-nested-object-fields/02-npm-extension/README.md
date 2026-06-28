# npm Extension

## Approach

Use `json2csv` or a similar package with flattening enabled.

## Input

`../sample.json`

## Expected CSV

```csv
id,name,address.city,address.state
1,Alice,Austin,TX
```

## Notes

- Most npm converters let you choose a flattening strategy.
- Helpful when nested objects are consistent.
