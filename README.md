
![gitnotion](https://github.com/user-attachments/assets/079fdd2e-ba20-4a5b-9801-58448e81d8b9)




# Ping Pong

Welcome to the **PingPong Notifier** ecosystem! This tool enhances your GitHub experience by integrating notifications, data visualization, and real-time updates across various platforms. The PingPong system includes a website, server, Chrome extension, and NodeMCU hardware unit, each designed to deliver a seamless user experience.

## 🌐 Website

The **PingPong Notifier** website is your central hub for accessing and interacting with all features. It provides a clean, user-friendly interface with the following capabilities:

- **View Recent Notifications:** Instant updates on GitHub activities such as issues, pull requests, and more.
- **Explore Trending Topics:** Browse and search for trending repositories based on popular topics.
- **Customize Notifications:** Tailor notifications to your preferences and interests.
- **Manage GitHub Account:** Link and manage GitHub accounts to sync notifications and data.

The website is optimized for both desktop and mobile devices, ensuring accessibility anytime, anywhere.

## 💻 Server

The **PingPong Notifier** server is powered by Node.js with Express and handles data requests through various API endpoints:

- **API Endpoints:** Access endpoints like `/user-info`, `/topics`, and `/github-notifications` to fetch GitHub data and trending topics.
- **Data Aggregation:** Combine information from multiple GitHub endpoints to provide comprehensive notifications.
- **Error Handling:** Robust error management ensures accurate data and proper notifications of any issues.

The server guarantees efficient data processing and high performance.

## 🧩 Chrome Extension

The **PingPong Notifier** Chrome extension integrates directly into your browser for easy access to GitHub notifications:

- **User Input:** Enter your GitHub username to fetch and display notifications within the browser.
- **Notification Display:** View recent notifications in a clean, intuitive interface.
- **Real-Time Updates:** Receive real-time updates on new notifications.

Enhance your browsing experience by staying updated with GitHub activities directly from your browser.

## 📡 NodeMCU Hardware Unit

The **PingPong Notifier** hardware unit uses NodeMCU to display GitHub information on an LCD or TFT display:

- **Data Fetching:** Connects to Wi-Fi and fetches data from the PingPong server via HTTP requests.
- **Display Options:** Choose between an LCD 16x2 I2C display or a TFT display to view data.
- **Automated Updates:** Updates displayed information every 20 minutes.

This hardware unit provides a tangible, interactive way to monitor GitHub activities.

## 📚 Documentation

For detailed documentation on setup, configuration, and usage, refer to the following resources:

- [Website Documentation](doc/Website.md)
- [Server API Documentation](doc/Server.md)
- [Chrome Extension Guide](doc/ChromeExtension.md)
- [NodeMCU Hardware Instructions](doc/HardwareUnit.md)

---
## Team members
1. [SREERAJ V RAJESH](https://github.com/cyberkutti-iedc)
2. [RAHAN MICHAEL JUDES](https://github.com/gitmwon)
3. [EDWIN RAFFY](https://github.com/EduEdwin24)
4. [Sarath Murukan](https://github.com/SarathSNMIMT)
   
## Link to product walkthrough
[link to video](Link Here)

## How It Works

## 1. Server

**Role:** The server is the central component that collects, processes, and provides user data.

**Technology:**
- **Express:** A web application framework for Node.js that simplifies building server-side applications.
- **Node.js:** A JavaScript runtime used to build the server-side application.
- **Nodemon:** A utility that automatically restarts the server when code changes are detected.
- **RESTful GitHub API:** Provides access to user data from GitHub in a standardized format.

**Functionality:**

1. **Data Collection:** The server fetches user data from GitHub using the GitHub RESTful API. This data typically includes profile information such as name, username, follower count, and following count.
2. **API Endpoint:** The server exposes an API endpoint (e.g., `http://localhost:8080/user-info`) that serves the user data in JSON format.
3. **Data Format:** The data is structured in JSON format to be easily consumed by client applications. Key fields include `name`, `user`, `followers`, and `following`.

## 2. Client Website

**Role:** The client website provides a graphical user interface for users to view the data.

**Technology:**
- **Vue.js:** A progressive JavaScript framework used for building the user interface.
- **CSS:** Cascading Style Sheets used for styling the website.
- **Tailwind CSS:** A utility-first CSS framework that enables rapid and responsive design.

**Functionality:**

1. **Data Fetching:** The Vue.js application retrieves data from the server’s API endpoint.
2. **Data Display:** The fetched data is displayed on the website using Vue.js’s reactive components. This ensures that the website automatically updates when new data is received.
3. **User Interface:** Tailwind CSS is used to style the website, creating a modern and user-friendly interface with responsive design elements.

## 3. Chrome Extension

**Role:** The Chrome extension provides a convenient way to access the data directly from the browser.

**Technology:**
- **HTML:** Used for the structure of the extension's user interface.
- **CSS:** Used for styling the extension.
- **JavaScript:** Handles the logic for fetching and displaying data.

**Functionality:**

1. **Data Fetching:** The extension sends requests to the server’s API endpoint to retrieve the latest user data.
2. **Display Data:** The data is displayed within the extension’s popup or content area, making it easily accessible to users without navigating away from their current page.
3. **User Interface:** The extension's UI is designed using HTML and CSS to be simple and functional, providing quick access to the data.

## 4. Hardware Unit

**Role:** The hardware unit displays the fetched data on a physical screen and periodically updates it.

**Technology:**
- **ESP8266 (NodeMCU):** A microcontroller with built-in WiFi used for connecting to the internet and handling data display.
- **LCD 16x2 I2C or TFT LCD Display:** Two types of displays can be used to show the data.

**Functionality:**

1. **WiFi Connection:** The ESP8266 connects to a WiFi network using the provided credentials.
2. **Data Fetching:** It periodically sends requests to the server’s API endpoint to get the latest user data.
3. **Display Data:** Depending on the display used:
   - **LCD 16x2 I2C:** Displays data in a simple text format on a 16x2 character screen.
   - **TFT LCD Display:** Provides a more graphical presentation of the data with various text sizes and colors for a more detailed view.

---

# Libraries and Tools Used

## Client-Side Libraries

### Dependencies

- **`animate.css`**: ^4.1.1  
  Provides a collection of cross-browser CSS animations for adding animations to web projects.

- **`axios`**: ^1.7.3  
  A promise-based HTTP client for making HTTP requests in the browser and Node.js.

- **`vue`**: ^3.4.29  
  A progressive JavaScript framework for building user interfaces.

- **`vue-router`**: ^4.4.2  
  The official router for Vue.js, enabling navigation and routing within Vue.js applications.

### Development Dependencies

- **`@vitejs/plugin-vue`**: ^5.0.5  
  Vite plugin for handling `.vue` files.

- **`@vitejs/plugin-vue-jsx`**: ^4.0.0  
  Adds JSX support for Vue.js components in Vite.

- **`autoprefixer`**: ^10.4.20  
  A PostCSS plugin that automatically adds vendor prefixes to CSS rules.

- **`eslint`**: ^8.57.0  
  Linting utility for identifying and fixing problems in JavaScript code.

- **`eslint-plugin-vue`**: ^9.23.0  
  ESLint plugin for linting Vue.js files.

- **`postcss`**: ^8.4.40  
  Tool for transforming CSS with JavaScript plugins.

- **`tailwindcss`**: ^3.4.7  
  Utility-first CSS framework for rapid design customization.

- **`vite`**: ^5.3.1  
  Modern build tool and development server offering fast hot module replacement (HMR) and optimized production builds.

## Server-Side Libraries

### Dependencies

- **`@octokit/core`**: ^6.1.2  
  GitHub's official library for interacting with the GitHub API.

- **`cors`**: ^2.8.5  
  Middleware to enable Cross-Origin Resource Sharing (CORS) in Express applications.

- **`dotenv`**: ^16.4.5  
  Loads environment variables from a `.env` file into `process.env`.

- **`express`**: ^4.19.2  
  A minimal and flexible Node.js web application framework.

- **`node-fetch`**: ^3.3.2  
  A lightweight module that brings `window.fetch` to Node.js.

- **`nodemon`**: ^3.1.4  
  A tool that helps develop Node.js applications by automatically restarting the server when file changes are detected.

### Scripts

- **`start`**: Runs the server with `node server.js`.

- **`dev`**: Runs the server with `nodemon server.js` for development.

## Chrome Extension Libraries

### Files

- **`HTML`**  
  Structure and layout of the Chrome extension's user interface.

- **`CSS`**  
  Styling for the Chrome extension's user interface.

- **`JS`**  
  JavaScript for adding interactivity and functionality to the Chrome extension.

- **`JSON`**  
  Configuration and data files used by the Chrome extension.

## Hardware Unit Libraries

### Libraries Used

- **`ESP8266WiFi`**  
  Manages the WiFi connections on the ESP8266 module.

- **`ESP8266HTTPClient`**  
  Facilitates HTTP requests and responses on the ESP8266.

- **`ArduinoJson`**  
  A library for parsing and generating JSON data on Arduino-compatible platforms.

- **`Wire`**  
  I2C communication library for interfacing with I2C devices.

### Display Options

- **`TFT_eSPI`**  
  Library for controlling TFT LCD displays with the ESP8266.

- **`LiquidCrystal_I2C`**  
  Library for interfacing with 16x2 I2C LCD displays.

---

# Installation Guide

## Installation

To set up the project and install dependencies, you have multiple options. Choose the one that best fits your needs.

### Option 1: Use the Provided Scripts

You can use the provided script files to automate the installation process. Choose the script based on your operating system:

#### For Windows

1. **Command Prompt (.cmd):**
   - Save the following script as `install.cmd`.
   - Double-click the file or run it from Command Prompt.

   ```cmd
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
   ```

2. **PowerShell (.ps1):**
   - Save the following script as `install.ps1`.
   - Open PowerShell and navigate to the directory where the file is saved.
   - Run the script using `.\install.ps1`.

   ```powershell
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
   ```

#### For Linux or macOS

1. **Shell Script (.sh):**
   - Save the following script as `install.sh`.
   - Open a terminal and navigate to the directory where the file is saved.
   - Make the script executable with `chmod +x install.sh`.
   - Run the script using `./install.sh`.

   ```bash
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
   ```

### Option 2: Manual Installation

If you prefer to manually install the dependencies:

1. **Navigate to the Client Directory:**
   ```bash
   cd PingPong/Client
   ```

2. **Install Client-Side Dependencies:**
   ```bash
   npm install
   ```

3. **Navigate to the Server Directory:**
   ```bash
   cd ../Server
   ```

4. **Install Server-Side Dependencies:**
   ```bash
   npm install
   ```

## Chrome Extension Installation

To install the Chrome extension, follow these steps:

1. **Open Chrome or Brave Browser.**
2. **Navigate to `chrome://extensions/`** or **`brave://extensions/`**.
3. **Enable "Developer mode"** by toggling the switch in the top-right corner.
4. **Click on "Load unpacked".**
5. **Select the directory** where the Chrome extension files (`manifest.json`, `background.js`, etc.) are located.
6. **The extension should now be installed** and visible in the list of extensions.

## NodeMCU Hardware Setup

To set up the NodeMCU/ESP8266 hardware unit, follow these steps:

### 1. **Install the Code**

1. **Open the Arduino IDE**.
2. **Select the NodeMCU board** from the Tools > Board menu.
3. **Install the ESP8266 board package** if not already installed (Tools > Board > Boards Manager > Search for "esp8266" and install it).
4. **Open the provided `.ino` file** and upload it to the NodeMCU.

### 2. **Connect the Hardware**

1. **Connect the NodeMCU** to your computer using a USB cable.
2. **Ensure the display module** (LCD 16x2 I2C or TFT LCD) is connected to the NodeMCU:
   - **LCD 16x2 I2C**: Connect the SDA and SCL pins to the corresponding pins on the NodeMCU.
   - **TFT LCD**: Connect the necessary pins as per the TFT display's documentation.
3. **Verify the wiring**:
   - For **LCD 16x2 I2C**, ensure VCC and GND are properly connected.
   - For **TFT LCD**, follow the specific wiring instructions provided with the TFT display.

### 3. **Power On the NodeMCU**

- **Power the NodeMCU** through the USB connection, and it should start running the uploaded code.

By following these steps, you'll have the project set up and running on your local environment, browser, and hardware.

---

## How to configure
Instructions for setting up project

## Configuring the Client

To configure the client side of the project, follow these steps:

### 1. **API Endpoint Configuration**

1. **Navigate to the Client Directory:**
   ```bash
   cd PingPong/Client
   ```

2. **Edit the Vue.js Configuration:**
   - Open the configuration file where the API endpoint is defined (e.g., `src/api.js` or `src/config.js`).
   - Update the API endpoint URL to match your server's address. For example:

     ```javascript
     // Example: src/api.js
     export const API_URL = 'http://localhost:8080/user-info'; // Update to your server URL
     ```

3. **Save Changes** and proceed to use the updated API endpoint.

### 2. **Styling Configuration**

1. **Edit Tailwind CSS Configuration:**
   - Open the Tailwind configuration file (`tailwind.config.js`).
   - Customize the colors, fonts, or any other Tailwind settings as needed.

     ```javascript
     // Example: tailwind.config.js
     module.exports = {
       theme: {
         extend: {
           colors: {
             primary: '#1D4ED8',
             secondary: '#FBBF24',
           },
         },
       },
     }
     ```

2. **Edit CSS Files:**
   - Modify any additional CSS files in the `src/assets` directory to style components as desired.

## Configuring the Server

To configure the server side of the project, follow these steps:

### 1. **Environment Variables**

1. **Create a `.env` File:**
   - In the `Server` directory, create a `.env` file if it doesn't already exist.

2. **Set Environment Variables:**
   - Add the necessary environment variables to the `.env` file. For example:

     ```env
     GITHUB_API_TOKEN=YOUR GITHUB API TOKEN
     GITHUB_USERNAME=YOUR GITHUB USERNAME

     ```

   - Ensure you replace `YOUR GITHUB API TOKEN` with a valid GitHub token if needed.

### 2. **Update Server Configuration**

1. **Edit the Server Configuration:**
   - Open the `server.js` file and configure any necessary settings such as ports or API endpoints.

   - Example to set up the server port:

     ```javascript
     // Example: server.js
     const PORT = process.env.PORT || 8080;
     ```

2. **Save Changes** and ensure the server is configured as needed.

## Configuring the Chrome Extension

To configure the Chrome extension, follow these steps:

### 1. **Update Manifest File**

1. **Open `manifest.json`:**
   - Located in the extension's directory.

2. **Modify Configuration:**
   - Update the `permissions`, `background`, `content_scripts`, and other fields as needed. For example:

     ```json
     {
       "manifest_version": 3,
       "name": "PingPong Extension",
       "version": "1.0",
       "permissions": ["storage", "activeTab"],
       "background": {
         "service_worker": "background.js"
       },
       "action": {
         "default_popup": "popup.html"
       },
       "icons": {
         "48": "icons/icon.png"
       }
     }
     ```

3. **Save Changes** and prepare for installation.

## Configuring NodeMCU Hardware Unit

To configure the NodeMCU/ESP8266 hardware unit, follow these steps:

### 1. **Update the Arduino Sketch**

1. **Open the Arduino IDE:**
   - Load the `.ino` file provided for the NodeMCU/ESP8266.

2. **Modify WiFi Credentials:**
   - Update the WiFi credentials with your network information:

     ```cpp
     // Example: WiFi credentials
     const char* ssid = "your_SSID";
     const char* password = "your_PASSWORD";
     ```

3. **Choose Display Type:**
   - Uncomment the appropriate display type based on whether you're using an LCD or TFT display.

### 2. **Upload the Code**

1. **Select the Board:**
   - Choose "NodeMCU" from the Tools > Board menu in the Arduino IDE.

2. **Upload the Sketch:**
   - Click the upload button to transfer the code to the NodeMCU.

### 3. **Connect the Hardware**

1. **Connect the NodeMCU to Your Computer:**
   - Use a USB cable to connect the NodeMCU.

2. **Wire the Display Module:**
   - For **LCD 16x2 I2C**, connect the SDA and SCL pins to the corresponding pins on the NodeMCU.
   - For **TFT LCD**, follow the wiring instructions specific to the TFT display.

3. **Power On the NodeMCU:**
   - Ensure the NodeMCU is powered on and the display should start functioning according to the uploaded code.

By following these configuration steps, you will set up and customize the client, server, Chrome extension, and NodeMCU hardware to fit your specific requirements.

---
## How to Run
```markdown

## Automatic Startup Scripts

To run the project automatically on system startup, use the appropriate script for your operating system. You can download the scripts from the following links:

- **Windows:**
  - [Batch Script (`start-dev.bat`)](./start-dev.bat)
  - [PowerShell Script (`start-dev.ps1`)](./start-dev.ps1)

- **Linux/macOS:**
  - [Shell Script (`start-dev.sh`)](./start-dev.sh)

### Instructions

1. **Windows:**
   - **Batch Script (`start-dev.bat`):**
     - Download the batch file and place it in your startup folder.
     - Access the startup folder by pressing `Win + R`, typing `shell:startup`, and pressing Enter.
   - **PowerShell Script (`start-dev.ps1`):**
     - Download the PowerShell script.
     - Open PowerShell as Administrator and execute the script to add it to startup.

2. **Linux/macOS:**
   - **Shell Script (`start-dev.sh`):**
     - Download the shell script and make it executable:
       ```bash
       chmod +x /path/to/start-dev.sh
       ```
     - Add it to your startup applications using your system's method (e.g., `~/.bashrc` for Linux or `launchd` for macOS).

## Manual Running

If you prefer to run the client and server manually, follow these steps:

1. **Open Terminal or Command Prompt:**

2. **Navigate to Server Directory and Run:**
   ```bash
   cd /path/to/server
   npm run dev
   ```

3. **Open a New Terminal or Command Prompt Window:**

4. **Navigate to Client Directory and Run:**
   ```bash
   cd /path/to/client
   npm run dev
   ```

## Chrome Extension

1. **Install the Extension:**
   - Open Chrome or Brave.
   - Go to `chrome://extensions/`.
   - Enable "Developer mode" by toggling the switch in the top right corner.
   - Click "Load unpacked" and select the extension directory.

2. **Activate the Extension:**
   - Ensure the extension is enabled by checking the toggle in the extensions page.

## NodeMCU Hardware Unit

1. **Power On the NodeMCU:**
   - Connect the NodeMCU to a power source using a USB cable.

2. **Ensure Network Connectivity:**
   - Verify that the NodeMCU and your computer/server are connected to the same Wi-Fi network.

3. **Start the Server:**
   - Ensure that the server is running and accessible.

4. **Verify Functionality:**
   - Check the NodeMCU’s display to confirm it is working as expected and displaying the correct data.
---
Happy coding with PingPong Notifier! 🚀

