#!/bin/bash

# Navigate to Client Directory and Install Dependencies
cd PingPong/Client || { echo "Client directory not found"; exit 1; }
echo "Installing client-side dependencies..."
npm install

# Navigate to Server Directory and Install Dependencies
cd ../Server || { echo "Server directory not found"; exit 1; }
echo "Installing server-side dependencies..."
npm install

# Go back to the root directory
cd ..
echo "Installation complete."
