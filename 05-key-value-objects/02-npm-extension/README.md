# npm Extension

## Approach

Use `json2csv` or similar to treat the object as a single row of data.

## Input

`../sample.json`

## Expected CSV

```csv
name,age,city
Alice,30,Austin
```

## Notes

- Straightforward if the object has scalar values only.
- Dynamic keys may need normalization first.
