# npm Extension

## Approach

Use `json2csv` plus a custom flattening step to emit one row per child record.

## Input

`../sample.json`

## Expected CSV

```csv
orderId,customer,product,qty
1001,Alice,Pen,2
1001,Alice,Notebook,1
```

## Notes

- This is the most common normalized CSV shape for parent-child data.
- Often easier to analyze in Excel than nested output.
