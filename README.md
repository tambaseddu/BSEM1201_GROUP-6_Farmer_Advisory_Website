# 🌾 Farm Advisory System

A web-based agricultural advisory platform designed to provide farmers with timely information on crop production, livestock management, pest control, weather forecasting, and market prices — all through a responsive, user-friendly interface.

> Developed as a Web Design project at Limkokwing University of Creative Technology, aligned with UN Sustainable Development Goal 2: Zero Hunger.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [How It Works](#how-it-works)
- [Screenshots](#screenshots)
- [Limitations](#limitations)
- [Future Improvements](#future-improvements)
- [License](#license)

---

## Overview

Many farmers lack access to timely agricultural information. Traditional advisory methods are often slow and ineffective, leading to poor farming decisions, low productivity, crop losses, and reduced income.

The **Farm Advisory System** bridges this gap by centralizing agricultural advisory services into a single, accessible web platform — no app download required.

---

## Features

- 🌱 **Crop Advisory** — searchable crop cards with growing recommendations
- 🐄 **Livestock Management** — advice on poultry, goats, sheep, pigs, and cattle
- 🪲 **Pest & Disease Control** — identification, symptoms, treatment, and prevention
- ☁️ **Weather Forecast** — live data via OpenWeatherMap API
- 💰 **Market Prices** — commodity price table (rice, maize, cassava, poultry, livestock)
- 👤 **User Accounts** — registration, login, and profile management
- 📊 **Farmer Dashboard** — personalized access to all advisory services

---

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 |
| Logic | JavaScript (Vanilla) |
| Storage | Browser Local Storage |
| Icons | Font Awesome |
| Weather Data | OpenWeatherMap API |

---

## Project Structure

```
├── index.html          # Homepage
├── about.html          # About the system
├── crops.html          # Crop advisory
├── livestock.html      # Livestock management
├── pests.html          # Pest & disease control
├── weather.html        # Weather forecast
├── market.html         # Market prices
├── contact.html        # Contact form
├── register.html       # User registration
├── login.html          # User login
├── dashboard.html      # Farmer dashboard
├── profile.html        # Profile management
├── css/                # Stylesheets
├── js/                 # JavaScript files
└── data/               # JSON data files (crops, livestock, pests, market)
```

---

## Getting Started

No installation or server required. The system runs entirely in the browser.

1. **Clone the repository**
   ```bash
   git clone https://github.com/tambaseddu/BSEM1201_GROUP-6_FARM_ADVISORY_WEB-DESIGN.git
   ```

2. **Open in your browser**
   ```
   Open index.html in Chrome or any modern browser
   ```

3. **Register an account** on the Register page, then log in to access the full dashboard.

> ⚠️ Weather data requires an internet connection (OpenWeatherMap API).

---

## How It Works

**Authentication**
User details (name, email, phone, farm type, password) are saved to and retrieved from `localStorage`. Sessions persist across page refreshes.

**Advisory Content**
Crop, livestock, pest, and market data are loaded from local JSON files and rendered dynamically as searchable cards or tables using JavaScript.

**Weather**
Users enter a city name; the app sends a request to the OpenWeatherMap API and displays current conditions and forecasts.

---

## Screenshots

_Add screenshots of the homepage, dashboard, and crop advisory page here._

---

## Limitations

- Data is stored in the browser's Local Storage — not shared across devices
- No backend or real database
- Limited security (no password hashing)
- No multi-user/admin support
- Weather feature requires internet access

---

## Future Improvements

- [ ] PostgreSQL database + Node.js backend
- [ ] Admin dashboard
- [ ] Real-time market prices via API
- [ ] SMS notifications for farmers
- [ ] Mobile application (Android/iOS)
- [ ] AI-based farm recommendations
- [ ] Disease detection using Machine Learning

---

## License

This project was developed for academic purposes at **Limkokwing University of Creative Technology** (Group 6 — BSEM1201).
