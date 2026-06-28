# 01 - Flat Objects

## Pattern

An array of objects where each object has the same simple fields.

## Example JSON

```json
[
  { "id": 1, "name": "Alice", "age": 30 },
  { "id": 2, "name": "Bob", "age": 25 }
]
```

## Typical CSV Output

```csv
id,name,age
1,Alice,30
2,Bob,25
```

## Notes

- This is the easiest JSON shape to convert.
- Each object becomes one row.
- Keys become column headers.

