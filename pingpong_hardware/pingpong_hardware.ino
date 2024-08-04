#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <ArduinoJson.h>
#include <Wire.h>

#ifdef USE_TFT
  #include <TFT_eSPI.h>
#else
  #include <LiquidCrystal_I2C.h>
#endif

// WiFi credentials
const char* ssid = "your_SSID";
const char* password = "your_PASSWORD";

// Server URL
const char* serverUrl = "http://localhost:8080/user-info";

// Interval to fetch data (20 minutes)
const unsigned long fetchInterval = 20 * 60 * 1000;
unsigned long previousMillis = 0;

#ifdef USE_TFT
  // TFT display setup
  TFT_eSPI tft = TFT_eSPI();
  #define TFT_GREY 0x5AEB
#else
  // LCD 16x2 I2C setup
  LiquidCrystal_I2C lcd(0x27, 16, 2); // Change the address to match your LCD
#endif

// Function to fetch GitHub data
void fetchGitHubData() {
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    WiFiClient client; // Create a WiFiClient object
    http.begin(client, serverUrl); // Use the updated begin() method
    int httpCode = http.GET();

    if (httpCode > 0) {
      String payload = http.getString();
      Serial.println(payload);

      StaticJsonDocument<1024> doc;
      DeserializationError error = deserializeJson(doc, payload);

      if (!error) {
        const char* name = doc["name"];
        const char* username = doc["user"];
        int followers = doc["followers"];
        int following = doc["following"];

        displayData(name, username, followers, following);
      } else {
        Serial.print("JSON deserialization error: ");
        Serial.println(error.c_str());
      }
    } else {
      Serial.print("HTTP error code: ");
      Serial.println(httpCode);
    }

    http.end();
  }
}

// Function to display data on the screen
#ifdef USE_TFT
  void displayData(const char* name, const char* username, int followers, int following) {
    tft.fillScreen(TFT_BLACK);

    // Display Header
    tft.setTextColor(TFT_WHITE, TFT_BLACK);
    tft.setTextSize(3);
    tft.setCursor(10, 10);
    tft.println("GitHub Info");

    // Display Name
    tft.setTextColor(TFT_CYAN, TFT_BLACK);
    tft.setTextSize(2);
    tft.setCursor(10, 50);
    tft.print("Name: ");
    tft.setTextColor(TFT_WHITE, TFT_BLACK);
    tft.println(name);

    // Display Username
    tft.setTextColor(TFT_CYAN, TFT_BLACK);
    tft.setTextSize(2);
    tft.setCursor(10, 90);
    tft.print("Username: ");
    tft.setTextColor(TFT_WHITE, TFT_BLACK);
    tft.println(username);

    // Display Followers
    tft.setTextColor(TFT_CYAN, TFT_BLACK);
    tft.setTextSize(2);
    tft.setCursor(10, 130);
    tft.print("Followers: ");
    tft.setTextColor(TFT_WHITE, TFT_BLACK);
    tft.println(followers);

    // Display Following
    tft.setTextColor(TFT_CYAN, TFT_BLACK);
    tft.setTextSize(2);
    tft.setCursor(10, 170);
    tft.print("Following: ");
    tft.setTextColor(TFT_WHITE, TFT_BLACK);
    tft.println(following);

    // Display Footer
    tft.setTextColor(TFT_GREY, TFT_BLACK);
    tft.setTextSize(1);
    tft.setCursor(10, 210);
    tft.println("Updated every 20 mins");
  }
#else
  void displayData(const char* name, const char* username, int followers, int following) {
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print("Name: ");
    lcd.print(name);

    lcd.setCursor(0, 1);
    lcd.print("User: ");
    lcd.print(username);
    delay(2000); // Show for 2 seconds

    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print("Followers: ");
    lcd.print(followers);

    lcd.setCursor(0, 1);
    lcd.print("Following: ");
    lcd.print(following);
    delay(2000); // Show for 2 seconds
  }
#endif

void setup() {
  Serial.begin(115200);

  #ifdef USE_TFT
    tft.init();
    tft.setRotation(1);
    tft.fillScreen(TFT_BLACK);
  #else
    lcd.begin(16, 2); // Initialize LCD with the specified number of columns and rows
    lcd.backlight();
  #endif

  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }

  Serial.println("Connected to WiFi");
}

void loop() {
  unsigned long currentMillis = millis();
  if (currentMillis - previousMillis >= fetchInterval) {
    previousMillis = currentMillis;
    fetchGitHubData();
  }
}
