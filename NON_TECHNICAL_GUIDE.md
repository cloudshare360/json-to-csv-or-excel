# Non-Technical Guide

This guide explains how to turn JSON files into Excel-friendly CSV files without needing to understand the code.

## What You Are Doing

You will take a JSON file and convert it into a CSV file.

CSV files open directly in Excel and look like a table with rows and columns.

## What You Need

- A JSON file
- This project folder
- Excel, or another spreadsheet app that can open CSV files

## Choose One Method

### Option 1: Use the Node command

Use this if you have Node installed.

1. Open a terminal in this folder.
2. Run:

```bash
npm run convert:npm -- 01-flat-objects/sample.json out/flat.csv
```

3. Open `out/flat.csv` in Excel.

### Option 2: Use the Python command

Use this if you have Python installed.

1. Open a terminal in this folder.
2. Run:

```bash
python scripts/json-to-csv.py 01-flat-objects/sample.json out/flat.csv
```

3. Open `out/flat.csv` in Excel.

### Option 3: Use VS Code

Use this if you prefer clicking in the editor.

1. Open the JSON file in VS Code.
2. Install or use a JSON-to-CSV extension.
3. Convert the file to CSV.
4. Save the CSV file.
5. Open the CSV file in Excel.

## Which Sample Should You Use

- Flat objects: `01-flat-objects`
- Nested object fields: `02-nested-object-fields`
- Array fields: `03-array-fields`
- Repeating child records: `04-repeating-child-records`
- Key-value objects: `05-key-value-objects`
- NDJSON / JSON Lines: `06-ndjson-json-lines`
- Mixed optional fields: `07-mixed-optional-fields`

## What To Expect

- Small, simple JSON files usually convert directly.
- Nested JSON may be flattened into columns with names like `address.city`.
- Arrays of text values may be combined into one cell.
- Parent-child data may repeat the parent values across multiple rows.

## If Something Goes Wrong

- If the file does not open, check that you selected the right input file.
- If the CSV looks strange, try a different sample folder that matches your JSON shape.
- If Excel asks about file format, choose CSV.
