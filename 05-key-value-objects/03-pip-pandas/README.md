# pip / Python Library

## Approach

Use Python to wrap the object in a list and export with `pandas`.

## Input

`../sample.json`

## Expected CSV

```csv
name,age,city
Alice,30,Austin
```

## Notes

- `pandas` expects tabular records, so a single object is usually wrapped as one record.
- This pattern is easy to automate.
