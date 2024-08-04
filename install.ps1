# Navigate to Client Directory and Install Dependencies
Set-Location -Path "PingPong\Client"
Write-Output "Installing client-side dependencies..."
npm install

# Navigate to Server Directory and Install Dependencies
Set-Location -Path "..\Server"
Write-Output "Installing server-side dependencies..."
npm install

# Go back to the root directory
Set-Location -Path ".."
Write-Output "Installation complete."
