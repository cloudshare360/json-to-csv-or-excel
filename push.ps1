param(
  [string]$Remote = "https://github.com/cloudshare360/json-to-csv-or-excel.git",
  [string]$Branch = "main"
)

$ErrorActionPreference = "Stop"

if (Test-Path ".env") {
  Get-Content .env | ForEach-Object {
    if ($_ -match '^(?<k>[A-Za-z_][A-Za-z0-9_]*)=(?<v>.*)$') {
      Set-Item -Path "Env:$($Matches.k)" -Value $Matches.v
    }
  }
}

if (-not $env:GITHUB_USERNAME -or -not $env:GITHUB_PAT) {
  throw "Set GITHUB_USERNAME and GITHUB_PAT in .env before running this script."
}

$authRemote = "https://$($env:GITHUB_USERNAME):$($env:GITHUB_PAT)@github.com/cloudshare360/json-to-csv-or-excel.git"
git push -u $authRemote $Branch
