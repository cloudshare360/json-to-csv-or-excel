# 06 - NDJSON / JSON Lines

## Pattern

Each line is a separate JSON object.

## Example JSON

```json
{"id":1,"event":"login"}
{"id":2,"event":"logout"}
```

## Typical CSV Output

```csv
id,event
1,login
2,logout
```

## Notes

- Common in logs and data exports.
- Easier to stream than a single large JSON array.
- Each line becomes one row.

