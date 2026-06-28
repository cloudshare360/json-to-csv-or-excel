# 03 - Array Fields

## Pattern

Objects contain array values that do not fit naturally into one Excel column.

## Example JSON

```json
[
  {
    "id": 1,
    "name": "Alice",
    "skills": ["Python", "SQL"]
  }
]
```

## Typical CSV Output

```csv
id,name,skills
1,Alice,"Python; SQL"
```

## Notes

- Arrays are often joined into a single cell.
- Another option is to expand them into separate rows.
- The right approach depends on whether the array is informational or relational.

