# pip / Python Library

## Approach

Use Python to join array values before calling `to_csv()`.

## Input

`../sample.json`

## Expected CSV

```csv
id,name,skills
1,Alice,"Python; SQL"
```

## Notes

- `pandas` does not automatically flatten arrays into multiple columns.
- You usually pre-process arrays before export.
