@echo off
REM Navigate to Client Directory and Install Dependencies
cd PingPong\Client
echo Installing client-side dependencies...
npm install

REM Navigate to Server Directory and Install Dependencies
cd ..\Server
echo Installing server-side dependencies...
npm install

REM Go back to the root directory
cd ..
echo Installation complete.
pause
