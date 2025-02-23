# 🛡️ SafePal - Wearable Safety Device 

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
- 🛡️ IP67 Water-resistant & Shockproof Design

## 📚 Table of Contents
1. [Problem Statement](#-problem-statement)
2. [Technical Specifications](#-technical-specifications)
3. [System Architecture](#-system-architecture)
4. [Installation](#-installation)
5. [Mobile Application](#-mobile-application)
6. [Results](#-results)
7. [Team](#-team)
8. [Acknowledgements](#-acknowledgements)
9. [License](#-license)

---

## ⚠️ Problem Statement

**Overcoming smartphone-dependent safety limitations:**
- 90% of existing solutions require smartphone connectivity
- 65% emergency cases involve phone unavailability
- 40% safety app failures due to network issues

---

## 🔍 Technical Specifications

### Hardware Components
| Component | Model | Specifications |
|-----------|-------|----------------|
| **Microcontroller** | ESP32-WROOM-32 | - Dual-core 32-bit LX6 CPU<br>- 240MHz Clock Speed<br>- 520KB SRAM<br>- 16MB Flash |
| **GPS Module** | U-blox NEO-6M | - 72-channel GNSS receiver<br>- 2.5m Position Accuracy<br>- 5Hz Update Rate |
| **4G Module** | SIMCOM SIM7600E-H | - LTE Cat 4 (150Mbps DL)<br>- Quad-band 850/900/1800/1900MHz |
| **Power System** | Li-Po 3000mAh | - 72hr runtime<br>- Fast charging support<br>- Overcharge protection |

### Software Stack
**Mobile Application (Flutter 3.19)**
```yaml
dependencies:
  flutter_bloc: ^8.1.3
  google_maps_flutter: ^2.2.6
  location: ^4.4.0
  firebase_core: ^2.15.1
  http: ^0.13.6
```
### System Architecture

                    +---------------------+
                    |   Mobile Application|
                    |   (Flutter/IOS)     |
                    +----------+----------+
                               | HTTPS
                    +----------v----------+
                    |   Firebase Cloud    |
                    |  - Realtime DB      |
                    |  - Cloud Functions  |
                    +----------+----------+
                               | MQTT
                    +----------v----------+
                    |   Wearable Device   |
                    |  - ESP32 Controller |
                    +---------------------+

                  
