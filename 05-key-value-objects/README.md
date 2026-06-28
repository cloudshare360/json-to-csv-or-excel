# 05 - Key-Value Objects

## Pattern

An object whose properties are the data records themselves, rather than an array of rows.

## Example JSON

```json
{
  "name": "Alice",
  "age": 30,
  "city": "Austin"
}
```

## Typical CSV Output

```csv
name,age,city
Alice,30,Austin
```

## Notes

- This is usually converted into a one-row table.
- If the keys are dynamic, they may need normalization first.
- Useful for config-style or metadata JSON.

