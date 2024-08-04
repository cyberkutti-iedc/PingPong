
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

## Installation

To install these dependencies, use the following command:

```bash
npm install

## How to configure
Instructions for setting up project
## How to Run
Instructions for running


Happy coding with PingPong Notifier! 🚀
