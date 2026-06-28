# 07 - Mixed Optional Fields

## Pattern

Objects share a general structure, but some fields appear only on certain records.

## Example JSON

```json
[
  { "id": 1, "name": "Alice" },
  { "id": 2, "name": "Bob", "email": "bob@example.com" }
]
```

## Typical CSV Output

```csv
id,name,email
1,Alice,
2,Bob,bob@example.com
```

## Notes

- Missing fields become blank cells.
- Column order is usually based on the union of all keys.
- This is common in real-world exports where records are not perfectly uniform.

