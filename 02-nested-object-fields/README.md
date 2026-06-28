# 02 - Nested Object Fields

## Pattern

Objects contain nested objects that should be flattened into columns.

## Example JSON

```json
[
  {
    "id": 1,
    "name": "Alice",
    "address": { "city": "Austin", "state": "TX" }
  }
]
```

## Typical CSV Output

```csv
id,name,address.city,address.state
1,Alice,Austin,TX
```

## Notes

- Nested fields are commonly flattened with dot notation.
- Useful when you want a single worksheet.
- Deep nesting may require special rules for arrays.

