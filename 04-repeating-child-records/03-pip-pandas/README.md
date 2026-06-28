# pip / Python Library

## Approach

Use `pandas` to explode the child array and merge parent fields before export.

## Input

`../sample.json`

## Expected CSV

```csv
orderId,customer,product,qty
1001,Alice,Pen,2
1001,Alice,Notebook,1
```

## Notes

- Python is a strong choice for this pattern.
- `explode()` or manual iteration can build the row-per-child output.
