# pip / Python Library

## Approach

Use `pandas` to build a dataframe from the records and export with missing cells left blank.

## Input

`../sample.json`

## Expected CSV

```csv
id,name,email
1,Alice,
2,Bob,bob@example.com
```

## Notes

- `pandas` handles optional fields naturally.
- This is usually the most convenient automation path.
