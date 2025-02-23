# SafePal Web Application Documentation

## Table of Contents
1. [Project Overview](#-project-overview)
2. [System Architecture](#-system-architecture)

---

## 🌍 Project Overview

**SafePal Web** is a responsive dashboard for monitoring wearable safety devices, featuring:
- Real-time GPS tracking visualization
- Device status management
- Historical data access
- User authentication system

**Technology Stack**:
- Frontend: HTML5, CSS3, Vanilla JavaScript
- Mapping: Google Maps JavaScript API
- Storage: Browser sessionStorage
- Build: Zero-dependency vanilla implementation

---

## 🏗 System Architecture

### Data Flow Diagram
```ascii
[User Browser] <-> [Login Page] <-> (sessionStorage)
                    |
                    v
[User Browser] <-> [Dashboard] <-> [Google Maps API]
                    |
                    v
               [Data Export]
```
