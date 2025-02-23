# 🛡️ SafePal - Wearable Safety Device 
![Project Banner](https://via.placeholder.com/1200x400.png?text=SafePal+Wearable+Safety+System) <!-- Replace with actual banner -->

**A compact IoT device with GPS tracking, emergency alerts, and cellular communication for personal safety**

[![License](https://img.shields.io/badge/license-MIT-green)](https://opensource.org/licenses/MIT)
[![IoT Project](https://img.shields.io/badge/category-IoT_Safety_Device-blue)](https://github.com/topics/women-safety)
[![Flutter App](https://img.shields.io/badge/Flutter-3.19-blue?logo=flutter)](https://flutter.dev)

## 🌟 Key Features
- 📍 Real-time GPS Tracking with <5m accuracy
- 🚨 One-touch Emergency Alert System
- 🔈 Ambient Audio Recording with noise reduction
- 📶 4G Cellular Communication (GSM 900MHz)
- 🔋 72hr Battery Life with power-saving modes
- 📱 Flutter Mobile App Integration
- 🛡️ Water-resistant & Shockproof Design

## 📚 Table of Contents
1. [Problem Statement](#problem-statement-)
2. [System Architecture](#system-architecture-)
3. [Installation](#-installation)
4. [Technical Specifications](#-technical-specifications)
5. [Results](#-results)
6. [Team](#-team)
7. [Acknowledgements](#-acknowledgements)

## Problem Statement ⚠️
**Overcoming smartphone-dependent safety limitations:**
diff
+ 90% of existing solutions require smartphone connectivity
+ 65% emergency cases involve phone unavailability
+ 40% safety app failures due to network issues

## 🔍 Technical Specifications

### 🧠 Hardware Components

| Component | Model | Specifications |
|-----------|-------|----------------|
| **Microcontroller** | ESP32-WROOM-32 | <ul><li>Dual-core 32-bit LX6 CPU</li><li>240MHz Clock Speed</li><li>520KB SRAM</li><li>16MB Flash</li><li>WiFi 802.11 b/g/n</li><li>Bluetooth v4.2 BR/EDR</li></ul> |
| **GPS Module** | U-blox NEO-6M | <ul><li>72-channel GNSS receiver</li><li>-161dBm Tracking Sensitivity</li><li>2.5m Position Accuracy</li><li>5Hz Update Rate</li><li>L1 Frequency Band</li></ul> |
| **4G Module** | SIMCOM SIM7600E-H | <ul><li>LTE Cat 4 (150Mbps DL/50Mbps UL)</li><li>Quad-band 850/900/1800/1900MHz</li><li>GNSS: GPS/GLONASS/Galileo</li><li>TCP/IP Protocol Stack</li><li>AT Command Interface</li></ul> |
| **Microphone** | INMP441 MEMS | <ul><li>Digital I2S Interface</li><li>64dB SNR</li><li>60Hz-20kHz Frequency Range</li><li>Noise Cancellation Algorithm</li></ul> |
| **Battery** | Li-Po 3000mAh | <ul><li>3.7V Nominal Voltage</li><li>Charging Current: 1C</li><li>Operating Temp: -20°C to 60°C</li><li>Charge Time: 3hrs</li></ul> |
| **Sensors** | MPU-6050 | <ul><li>3-axis Accelerometer</li><li>3-axis Gyroscope</li><li>Digital Motion Processor</li><li>±16g Range</li></ul> |

### 🖥️ Software Stack

**Mobile Application** (Flutter 3.19)
yaml
dependencies:
  flutter_bloc: ^8.1.3
  google_maps_flutter: ^2.2.6
  location: ^4.4.0
  firebase_core: ^2.15.1
  http: ^0.13.6
