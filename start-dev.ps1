Write-Output "Starting Ping Pong client and server..."

# Start server
Start-Process -NoNewWindow -FilePath "powershell" -ArgumentList "-NoExit", "cd server; npm run dev"

# Start client
Start-Process -NoNewWindow -FilePath "powershell" -ArgumentList "-NoExit", "cd client; npm run dev"
