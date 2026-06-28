# pip / Python Library

## Approach

Use `pandas.json_normalize()` to flatten nested fields, then export to CSV.

## Input

`../sample.json`

## Expected CSV

```csv
id,name,address.city,address.state
1,Alice,Austin,TX
```

## Notes

- `json_normalize()` is a common fit for nested objects.
- Good when you want explicit control over the flattened columns.
