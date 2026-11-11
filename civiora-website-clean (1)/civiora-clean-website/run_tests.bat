@echo off
setlocal
cd /d "%~dp0"
title Civiora Website Automated Tests

echo ===================================================
echo       CIVIORA WEBSITE - AUTOMATED TEST SUITE        
echo ===================================================
echo Target: https://civiora-ce87d.web.app (or custom CIVIORA_BASE_URL)
echo Running Desktop and Mobile tests...
echo.

call npx playwright test

echo.
echo ===================================================
echo Tests finished. Opening interactive HTML Report...
echo ===================================================

call npx playwright show-report playwright-report

pause

