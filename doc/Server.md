# Ping Pong Server Documentation
```markdown
## Overview

The **PingPong Server** is a Node.js application that uses Express to create a RESTful API. The server fetches and serves data from GitHub using the GitHub API. This documentation will guide you through setting up and running the server.

## Setup

### Clone the Repository

Start by cloning the repository:

```bash
git clone https://github.com/cyberkutti-iedc/PingPong.git
```

### Navigate to the Server Directory

Change into the server directory:

```bash
cd PingPong/Server
```

### Install Dependencies

Install the required npm packages:

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file in the server directory and add your configuration details:

```env
GITHUB_API_TOKEN=YOUR GITHUB API TOKEN
GITHUB_USERNAME=YOUR GITHUB USERNAME
```

Replace `YOUR GITHUB API TOKEN` with your actual GitHub API token And Replace `YOUR GITHUB USERNAME` with your actual GitHub Username

## Running the Server

### Start the Server

To start the server, use `nodemon` for automatic restarts on file changes:

```bash
npm run dev
```

This command will use `nodemon` to run the `server.js` file and automatically restart the server when changes are detected.

### Access the Server

The server will be running on [http://localhost:8080](http://localhost:8080). You can test the API endpoints using tools like Postman or directly from your client application.

## Configuration

### API Endpoints

The server exposes a RESTful API to interact with GitHub data. Here are some example endpoints:

- **GET `/user-info`**: Fetches user information including name, username, followers, and following.

Ensure that the API endpoint in your client application matches this URL.

## Additional Resources

For more information on the technologies used, refer to the following resources:

- [Express Documentation](https://expressjs.com/) - Official Express documentation
- [Node.js Documentation](https://nodejs.org/en/docs/) - Official Node.js documentation
- [GitHub API Documentation](https://docs.github.com/en/rest) - Official GitHub API documentation
- [Nodemon Documentation](https://nodemon.io/) - Documentation for nodemon

## Badges

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/cyberkutti-iedc/PingPong/actions)
[![License](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/licenses/MIT)
