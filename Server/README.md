# Server

This is a simple server application that fetches data from the GitHub API and provides various endpoints to retrieve information such as trending repositories, user information, notifications, and more.

## Requirements

- Node.js (version 14 or later)
- npm (Node Package Manager)

## Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/cyberkutti-iedc/PingPong
    cd PingPong
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Create a `.env` file** in the root directory of the project and add the following environment variables:
    ```plaintext
    GITHUB_API_TOKEN=your_github_api_token
    GITHUB_USERNAME=your_github_username
    ```

    - `GITHUB_API_TOKEN`: A personal access token from GitHub with appropriate permissions.
    - `GITHUB_USERNAME`: Your GitHub username.

## Usage

### Start the Server

- To start the server in production mode:
    ```sh
    npm start
    ```

- To start the server in development mode (with automatic restarts on code changes):
    ```sh
    npm run dev
    ```

### Available Endpoints

1. **Get Topics**:
    ```http
    GET /topics
    ```
    Returns a static list of topics.

2. **Get Trending Repositories**:
    ```http
    GET /trending
    ```
    Returns a list of trending repositories.

3. **Get Customized Trending Repositories**:
    ```http
    GET /custom-trending?topics=topic1,topic2
    ```
    Returns a list of trending repositories based on specified topics.

4. **Get GitHub Notifications**:
    ```http
    GET /github-notifications
    ```
    Returns combined GitHub data including invitations, repositories, starred repositories, notifications, and received events.

5. **Get User Information**:
    ```http
    GET /user-info
    ```
    Returns GitHub user information.

6. **Get Following List**:
    ```http
    GET /user-following
    ```
    Returns a list of users the authenticated user is following.

7. **Get Followers List**:
    ```http
    GET /user-followers
    ```
    Returns a list of users following the authenticated user.


