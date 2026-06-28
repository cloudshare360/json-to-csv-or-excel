# 04 - Repeating Child Records

## Pattern

Parent objects contain child arrays that represent repeated detail rows.

## Example JSON

```json
[
  {
    "orderId": 1001,
    "customer": "Alice",
    "items": [
      { "product": "Pen", "qty": 2 },
      { "product": "Notebook", "qty": 1 }
    ]
  }
]
```

## Typical CSV Output

```csv
orderId,customer,product,qty
1001,Alice,Pen,2
1001,Alice,Notebook,1
```

## Notes

- This pattern usually needs row expansion.
- A single parent record may produce multiple CSV rows.
- Sometimes it is better to split parent and child data into separate sheets.

