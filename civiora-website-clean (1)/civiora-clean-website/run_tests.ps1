# Civiora Automated Test Runner (PowerShell)
$Host.UI.RawUI.WindowTitle = "Civiora Website Automated Tests"
Set-Location -Path $PSScriptRoot

Write-Host "===================================================" -ForegroundColor Cyan
Write-Host "      CIVIORA WEBSITE - AUTOMATED TEST SUITE        " -ForegroundColor Yellow
Write-Host "===================================================" -ForegroundColor Cyan
Write-Host "Target: https://civiora-ce87d.web.app" -ForegroundColor Gray
Write-Host "Running Desktop and Mobile tests..." -ForegroundColor Green
Write-Host ""

npx playwright test

Write-Host ""
Write-Host "===================================================" -ForegroundColor Cyan
Write-Host "Opening interactive HTML Report..." -ForegroundColor Yellow
Write-Host "===================================================" -ForegroundColor Cyan

npx playwright show-report playwright-report

