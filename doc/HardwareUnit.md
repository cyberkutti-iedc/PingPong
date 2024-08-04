# Ping Pong Hardware Unit Documentation
```markdown

## Overview

The **PingPong Hardware Unit** utilizes an ESP8266 microcontroller to fetch and display data from the PingPong server. You can choose between using a TFT LCD display or a 16x2 I2C LCD display.

## Components

1. **ESP8266 NodeMCU**
2. **TFT LCD Display** or **16x2 I2C LCD Display**
3. **Wiring Components** (e.g., jumper wires, resistors)

## Setup Instructions

### 1. Clone the Repository

First, clone the PingPong repository to your local machine:

```bash
git clone https://github.com/cyberkutti-iedc/PingPong.git
```

### 2. Navigate to the Hardware Directory

Go to the directory containing the hardware unit code:

```bash
cd PingPong/Hardware
```

### 3. Install Required Libraries

Make sure to install the necessary libraries for your chosen display:

- **For TFT LCD Display:**
  - TFT_eSPI
  - ArduinoJson

- **For 16x2 I2C LCD Display:**
  - LiquidCrystal_I2C
  - ArduinoJson

You can install these libraries through the Arduino Library Manager or manually download them from the Arduino library repository.

### 4. Upload the Code

Open the appropriate `.ino` file for your display choice in the Arduino IDE:

- **For TFT LCD Display:** `tft_display.ino`
- **For 16x2 I2C LCD Display:** `lcd_display.ino`

#### Upload to ESP8266

1. **Connect your ESP8266 NodeMCU to your computer via USB.**
2. **Select the appropriate board and port** in the Arduino IDE.
3. **Click "Upload"** to flash the code onto the ESP8266.

### 5. Power Up and Connect

1. **Power the ESP8266 NodeMCU:**
   Connect it to a suitable power source. 

2. **Connect the Display:**
   - **For TFT LCD Display:**
     Follow the wiring diagram specific to your TFT model.

   - **For 16x2 I2C LCD Display:**
     Connect the I2C pins (SDA and SCL) to the corresponding pins on the ESP8266.

3. **Ensure WiFi Connection:**
   Verify that the ESP8266 is connected to your WiFi network.

## Configuration

### Display Choice

1. **TFT LCD Display:**
   - Ensure the TFT library is correctly installed.
   - Update the code to match your TFT display’s pin configuration if necessary.

2. **16x2 I2C LCD Display:**
   - Ensure the LiquidCrystal_I2C library is correctly installed.
   - Adjust the I2C address and display dimensions in the code if needed.

### Server Configuration

Update the server URL in the code to point to your PingPong server:

```cpp
const char* serverUrl = "http://localhost:8080/user-info";
```

## Usage

1. **Monitor the Display:**
   The display will show user data fetched from the PingPong server, updated every 20 minutes.

2. **View Data:**
   Check the display to view details like user name, followers, and following.

## Troubleshooting

- **No Display Output:**
  Ensure all wiring connections are secure and correct. Verify that the display is powered.

- **WiFi Connectivity Issues:**
  Check your WiFi credentials and network status. Make sure the ESP8266 is connected to the correct network.

- **Library Errors:**
  Verify that all required libraries are installed and up to date.

## Additional Resources

- [ESP8266 Documentation](https://www.esp8266.com/)
- [TFT_eSPI Library](https://github.com/Bodmer/TFT_eSPI)
- [LiquidCrystal_I2C Library](https://github.com/fdebrabander/Arduino-LiquidCrystal-I2C-library)
- [GitHub Repository](https://github.com/cyberkutti-iedc/PingPong/tree/main/Hardware)

## Badges

[![Hardware Status](https://img.shields.io/badge/status-active-brightgreen)](https://github.com/cyberkutti-iedc/PingPong)
[![License](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/licenses/MIT)

---

Feel free to reach out if you have any issues or need further assistance with the hardware setup!
```

### Key Features:
- **Overview**: Provides a high-level description of the hardware unit.
- **Components**: Lists the required components.
- **Setup Instructions**: Detailed steps for setup, including cloning the repository, installing libraries, uploading code, and connecting components.
- **Configuration**: Instructions for configuring the display and server URL.
- **Usage**: How to use the hardware unit.
- **Troubleshooting**: Common issues and solutions.
- **Additional Resources**: Links to relevant documentation and libraries.
- **Badges**: Status and license badges for visual indication.
