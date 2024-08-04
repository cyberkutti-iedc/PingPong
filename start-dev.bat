@echo off
echo Starting Ping Pong client and server...

REM Start server
start "Server" cmd /c "cd server && npm run dev"

REM Start client
start "Client" cmd /c "cd client && npm run dev"

pause
