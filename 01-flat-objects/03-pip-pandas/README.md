# pip / Python Library

## Approach

Use `pandas` with `to_csv()` to convert JSON into CSV, then open the CSV in Excel.

## Input

`../sample.json`

## Expected CSV

```csv
id,name,age
1,Alice,30
2,Bob,25
```

## Notes

- Good for automation and larger files.
- Often the simplest option when you already use Python.
