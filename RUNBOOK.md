# Runbook

This repo contains examples that show how to convert JSON data into Excel-friendly CSV files.

## For Non-Technical Users

1. Open the folder in VS Code.
2. If available, choose `Reopen in Container`.
3. Open one of the sample JSON files.
4. Use one of the documented workflows to produce a CSV file.
5. Open the CSV file in Excel.

## For Node Users

Run:

```bash
npm run convert:npm -- 01-flat-objects/sample.json out/flat.csv
```

## For Python Users

Run:

```bash
python scripts/json-to-csv.py 01-flat-objects/sample.json out/flat.csv
```

## For GitHub Pushes

If `.env` contains `GITHUB_USERNAME` and `GITHUB_PAT`, use the helper script:

```powershell
.\push.ps1
```

## Notes

- The Node script handles the sample shapes in this repo.
- The Python script uses the standard library, so it does not require extra packages.
- The `.devcontainer` folder is available if you want VS Code to open the repo in a ready-made environment.
