# pip / Python Library

## Approach

Use Python to read each line as JSON, build a dataframe, and export CSV.

## Input

`../sample.ndjson`

## Expected CSV

```csv
id,event
1,login
2,logout
```

## Notes

- NDJSON is easy to process in Python.
- This is a strong option for log data.
