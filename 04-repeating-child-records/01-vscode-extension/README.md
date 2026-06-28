# VS Code Extension

## Approach

Use a flattening extension or manual transform to repeat the parent fields for each child row.

## Input

`../sample.json`

## Expected CSV

```csv
orderId,customer,product,qty
1001,Alice,Pen,2
1001,Alice,Notebook,1
```

## Notes

- This pattern usually becomes multiple rows.
- Parent data is duplicated across child records.
