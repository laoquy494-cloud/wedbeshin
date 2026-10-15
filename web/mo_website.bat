@echo off
chcp 65001 >nul
title Shin Bot Documentation
cd /d "%~dp0"

echo ====================================================
echo    KHOI CHAY WEBSITE TRUNG TAM LENH SHIN BOT
echo ====================================================

:: Kiem tra neu port 8088 da co tien trinh LISTENING
netstat -ano | findstr ":8088 " | findstr "LISTENING" >nul
if %errorlevel% neq 0 (
    echo [*] Dang khoi dong Web Server noi bo tren cong 8088...
    start "" /b python -m http.server 8088
    timeout /t 1 >nul
)

:: Kiem tra neu port 8088 da san sang sau khi bat
netstat -ano | findstr ":8088 " | findstr "LISTENING" >nul
if %errorlevel% equ 0 (
    echo [OK] Dang mo http://localhost:8088 tren trinh duyet...
    start "" "http://localhost:8088"
) else (
    echo [OK] Dang mo truc tiep index.html tren trinh duyet...
    start "" "%~dp0index.html"
)

echo ====================================================
echo [OK] Website da duoc mo thanh cong!
echo ====================================================
timeout /t 2 >nul
