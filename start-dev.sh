#!/bin/bash
echo "Starting Ping Pong client and server..."

# Start server
(cd server && npm run dev &)

# Start client
(cd client && npm run dev &)

wait
