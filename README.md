
![PingPong Notifier](https://github.com/user-attachments/assets/079fdd2e-ba20-4a5b-9801-58448e81d8b9)

# PingPong Notifier

Welcome to the **PingPong Notifier** ecosystem! This tool enhances your GitHub experience with notifications, data visualization, and real-time updates across various platforms. The PingPong system includes a website, server, Chrome extension, and NodeMCU hardware unit.

## 🌐 Website

**PingPong Notifier** website features:

- **View Recent Notifications:** Instant updates on GitHub activities.
- **Explore Trending Topics:** Browse trending repositories by popular topics.
- **Customize Notifications:** Tailor notifications to your preferences.
- **Manage GitHub Account:** Link and manage GitHub accounts.

> The website is optimized for both desktop and mobile devices.

## 💻 Server

**PingPong Notifier** server capabilities:

- **API Endpoints:** Access endpoints like `/user-info`, `/topics`, and `/github-notifications`.
- **Data Aggregation:** Combine information from multiple GitHub endpoints.
- **Error Handling:** Robust error management.

> Powered by Node.js with Express for efficient data processing.

## 🧩 Chrome Extension

**PingPong Notifier** Chrome extension features:

- **User Input:** Enter GitHub username to fetch notifications.
- **Notification Display:** View recent notifications in a clean interface.
- **Real-Time Updates:** Receive real-time notifications.

> Enhances your browsing experience with GitHub updates directly in your browser.

## 📡 NodeMCU Hardware Unit

**PingPong Notifier** hardware unit features:

- **Data Fetching:** Connects to Wi-Fi and fetches data from the server.
- **Display Options:** LCD 16x2 I2C or TFT display options.
- **Automated Updates:** Updates every 20 minutes.

> Provides a tangible way to monitor GitHub activities.

---

## 📚 Documentation

For detailed instructions, refer to these resources:

- [Website Documentation](doc/Website.md)
- [Server API Documentation](doc/Server.md)
- [Chrome Extension Guide](doc/ChromeExtension.md)
- [NodeMCU Hardware Instructions](doc/HardwareUnit.md)

## 👥 Team Members

- [Sreeraj V Rajesh](https://github.com/cyberkutti-iedc)
- [Rahan Michael Judes](https://github.com/gitmwon)
- [Edwin Raffy](https://github.com/EduEdwin24)
- [Sarath Murukan](https://github.com/SarathSNMIMT)

## 🎥 Product Walkthrough

[Watch the product walkthrough video](https://youtu.be/Zjwk74kRIpU?si=jgKsDziQvETHBNSQ)

---

## 🔧 How It Works

### 1. Server

**Role:** Central component for collecting, processing, and providing user data.

**Technology:**
- **Express:** Web application framework for Node.js.
- **Node.js:** JavaScript runtime for server-side applications.
- **Nodemon:** Auto-restart tool for development.
- **RESTful GitHub API:** Standardized format for GitHub data.

**Functionality:**

- **Data Collection:** Fetches user data from GitHub.
- **API Endpoint:** Provides data in JSON format.
- **Data Format:** Includes fields like `name`, `user`, `followers`, `following`.

### 2. Client Website

**Role:** Provides a GUI for viewing data.

**Technology:**
- **Vue.js:** Progressive JavaScript framework.
- **CSS:** Styling for the website.
- **Tailwind CSS:** Utility-first CSS framework.

**Functionality:**

- **Data Fetching:** Retrieves data from server’s API.
- **Data Display:** Uses Vue.js reactive components.
- **User Interface:** Styled with Tailwind CSS.

### 3. Chrome Extension

**Role:** Provides data access directly from the browser.

**Technology:**
- **HTML, CSS, JavaScript:** Handles UI and logic.

**Functionality:**

- **Data Fetching:** Requests data from server’s API.
- **Display Data:** Shows data within the extension.
- **User Interface:** Simple and functional design.

### 4. Hardware Unit

**Role:** Displays data on a physical screen.

**Technology:**
- **ESP8266 (NodeMCU):** Microcontroller with built-in WiFi.
- **LCD 16x2 I2C or TFT LCD Display:** Display options.

**Functionality:**

- **WiFi Connection:** Connects to a network.
- **Data Fetching:** Periodically requests data.
- **Display Data:** Shows data on the connected display.

---

## 📦 Installation Guide

### Option 1: Use the Provided Scripts

Automate the installation process with these scripts:

#### For Windows

- **[Command Prompt (`install.cmd`)](./install.cmd)**
- **[PowerShell (`install.ps1`)](./install.ps1)**

#### For Linux/macOS

- **[Shell Script (`install.sh`)](./install.sh)**

### Option 2: Manual Installation

1. **Navigate to Client Directory:**
   ```bash
   cd PingPong/Client
   ```
2. **Install Client-Side Dependencies:**
   ```bash
   npm install
   ```
3. **Navigate to Server Directory:**
   ```bash
   cd ../Server
   ```
4. **Install Server-Side Dependencies:**
   ```bash
   npm install
   ```

---

## 🚀 How to Run

### Automatic Startup Scripts

To run the project automatically on startup:

- **Windows:**
  - [Batch Script (`start-dev.bat`)](./start-dev.bat)
  - [PowerShell Script (`start-dev.ps1`)](./start-dev.ps1)

- **Linux/macOS:**
  - [Shell Script (`start-dev.sh`)](./start-dev.sh)

### Manual Running

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

### Chrome Extension

1. **Install the Extension:**
   - Go to `chrome://extensions/`.
   - Enable "Developer mode".
   - Click "Load unpacked" and select the extension directory.

2. **Activate the Extension:**
   - Ensure the extension is enabled.

### NodeMCU Hardware Unit

1. **Power On the NodeMCU:**
   - Connect to a power source via USB.

2. **Ensure Network Connectivity:**
   - Ensure the NodeMCU and your server are on the same network.

3. **Start the Server:**
   - Verify the server is running.

4. **Verify Functionality:**
   - Check the NodeMCU’s display for correct data.

---

Happy coding with PingPong Notifier! 🚀

---
