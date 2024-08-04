# Ping Pong Chrome Extension Documentation
```markdown
## Overview

The **PingPong Chrome Extension** allows users to interact with the PingPong system directly from their browser. This guide will walk you through the installation and usage of the extension on Chrome or Brave browsers.

## Installation

### Download the Extension

1. **Clone the Repository:**
   Clone the PingPong repository to your local machine if you haven’t already:

   ```bash
   git clone https://github.com/cyberkutti-iedc/PingPong.git
   ```

2. **Navigate to the Extension Directory:**
   Go to the Chrome extension directory:

   ```bash
   cd PingPong/ChromeExtension
   ```

### Load the Extension in Chrome or Brave

1. **Open Chrome or Brave:**
   Launch your Chrome or Brave browser.

2. **Access the Extensions Page:**
   - For Chrome: Go to `chrome://extensions/`
   - For Brave: Go to `brave://extensions/`

3. **Enable Developer Mode:**
   Toggle the "Developer mode" switch on the top right corner of the Extensions page.

4. **Load the Unpacked Extension:**
   Click the "Load unpacked" button and select the `PingPong/ChromeExtension` directory. This will load the extension into your browser.

5. **Verify Installation:**
   The PingPong extension icon should appear in your browser's toolbar. You can click this icon to access the extension's features.

## Configuration

1. **API Endpoint:**
   Ensure that the extension is configured to interact with the correct server endpoint. You may need to update the extension's JavaScript file to point to your server's URL.

   Open the `background.js` or `content.js` file in the extension directory and look for the API URL configuration. Update it if necessary:

   ```js
   const apiUrl = 'http://localhost:8080/user-info';
   ```

2. **Permissions:**
   The extension requires permissions to access the server and manipulate browser tabs. Ensure these permissions are granted in the `manifest.json` file:

   ```json
   {
     "manifest_version": 2,
     "name": "PingPong Extension",
     "version": "1.0",
     "permissions": [
       "tabs",
       "http://localhost:8080/*"
     ],
     ...
   }
   ```

## Usage

1. **Access the Extension:**
   Click the PingPong extension icon in your browser's toolbar to open the extension's popup.

2. **Interact with the Extension:**
   Use the extension’s interface to fetch and display data from the PingPong server. The extension will show information such as user stats or other relevant data.

## Troubleshooting

- **Extension Not Loading:**
  Ensure that the directory path selected during the "Load unpacked" step is correct and contains all necessary files.

- **API Errors:**
  Check the console for any errors related to API requests. Make sure the server is running and accessible from the browser.

- **Permissions Issues:**
  Verify that the `manifest.json` file includes all required permissions and that the server URL is correctly specified.

## Additional Resources

- [Chrome Extension Documentation](https://developer.chrome.com/docs/extensions/)
- [Brave Browser Extensions](https://brave.com/extensions/)
- [Manifest File Format](https://developer.chrome.com/docs/extensions/mv2/manifest/)
- [GitHub Repository](https://github.com/cyberkutti-iedc/PingPong/tree/main/ChromeExtension)

## Badges

[![Extension Status](https://img.shields.io/badge/status-active-brightgreen)](https://github.com/cyberkutti-iedc/PingPong)
[![License](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/licenses/MIT)
