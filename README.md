#  Apple Web — Official iPhone Experience

> **Brief Project Summary**:  
> `apple-web` is a pixel-perfect, responsive web recreation of the official **Apple iPhone** flagship landing and product experience ([apple.com/iphone](https://www.apple.com/iphone)). Built with **React 19**, **Vite**, and high-performance **Vanilla CSS**, it delivers Apple's iconic typography, frosted-glass blurs, smooth scroll choreographies, and interactive product showcases.

---

## 📌 About This Project

This project focuses on the **desktop & web browser experience** of the Apple ecosystem. It replicates the exact visual polish, micro-interactions, and design language of Apple's flagship product marketing website:

* **What it does**: Showcases the iPhone 14, iPhone 14 Pro, iPhone 13, and iPhone SE lineups alongside MagSafe accessories, Apple One bundles, and trade-in calculators.
* **Architecture**: Component-driven architecture built without bloated CSS frameworks—using pure Vanilla CSS custom properties (variables), native `backdrop-filter` frosted glass effects, and keyframe animations for 60fps fluidity.
* **Responsive Design**: Adapts gracefully across mobile, tablet, laptop, and ultra-wide desktop viewports.

---

## ✨ Key Features & Highlights

1. **Global Frosted Navigation (`Navbar.jsx`)**:
   * Translucent backdrop (`backdrop-filter: blur(20px) saturate(180%)`).
   * Dynamic elevation and blur deepening on page scroll.
   * Real-time shopping bag counter with tactile spring pop badge.
   * Collapsible mobile drawer navigation.

2. **Chapter Subnav Ribbon (`ChapterNav.jsx`)**:
   * Horizontal slider featuring iconic Apple silhouettes (iPhone 14 Pro, iPhone 14, iPhone 13, iPhone SE, Compare, AirPods, AirTag, Accessories, Apple Card).
   * Elevated hover states with subtle micro-scaling.

3. **Flagship Hero Sections**:
   * **iPhone 14 ("Wonderfull.")**: Arc display of 6 vibrant finishes with interactive finish selectors and gentle floating animation.
   * **iPhone 14 Pro ("Pro. Beyond.")**: Dramatic dark-themed section with Deep Purple, Space Black, Silver, and Gold finishes with shimmering metallic typography.
   * **iPhone SE ("Love the power. Love the value.")**: Minimalist showcase of Apple's compact powerhouse.

4. **Interactive Comparison Matrix (`CompareSection.jsx`)**:
   * 4-device side-by-side spec comparison (iPhone 14 Pro, iPhone 14, iPhone 13, iPhone SE).
   * Real-time color swatch selection updating device images with smooth crossfades.
   * In-depth spec breakdown: Dynamic Island vs. Notch, Emergency SOS via satellite, Camera system, Photonic Engine, Battery life, Chips, and Biometrics.

5. **"A Guided Tour" Video Modal (`GuidedTour.jsx` & `VideoModal.jsx`)**:
   * Interactive video player with radar wave play button.

6. **Interactive Trade-In Estimator (`TradeIn.jsx`)**:
   * Live trade-in calculator allowing users to select their current iPhone model to see instant savings.

7. **Ecosystem & Services Highlights**:
   * **MagSafe & Audio (`MagSafeShowcase.jsx`)**: MagSafe cases, wallets, chargers, AirTag, and AirPods family.
   * **Why Apple (`WhyApple.jsx`)**: Bento grid showcasing carrier deals, 0% APR financing, 2-hour delivery, and Specialist support.
   * **Apple One (`AppleOneServices.jsx`)**: Integrated bundle cards for Apple TV+, Music, Arcade, iCloud+, Fitness+, and News+.
   * **Global Footer (`Footer.jsx`)**: Complete numbered legal disclaimers, breadcrumb navigation, and 5-column directory.

---

## 📂 Folder Structure

```text
apple-web/
├── public/                     # Static public assets (favicons, icons)
├── src/
│   ├── assets/                 # Images, SVGs, and brand graphics
│   ├── components/             # 16 Modular React UI components
│   │   ├── Navbar.jsx          # Apple frosted glass navigation bar
│   │   ├── ChapterNav.jsx      # Sub-navigation ribbon with device silhouettes
│   │   ├── HeroYellow.jsx      # iPhone 14 flagship showcase
│   │   ├── HeroPro.jsx         # iPhone 14 Pro dark hero
│   │   ├── HeroSE.jsx          # iPhone SE compact hero
│   │   ├── GuidedTour.jsx      # Video tour banner with radar button
│   │   ├── VideoModal.jsx      # Accessible YouTube video modal overlay
│   │   ├── CompareSection.jsx  # 4-column interactive spec comparison table
│   │   ├── TradeIn.jsx         # Interactive trade-in calculator
│   │   ├── WhyApple.jsx        # Bento grid with carrier offers & financing
│   │   ├── MagSafeShowcase.jsx # MagSafe accessories & AirPods audio cards
│   │   ├── ValuePropsBar.jsx   # Delivery, pickup, specialist value propositions
│   │   ├── AppleOneServices.jsx# Apple One entertainment & cloud services
│   │   └── Footer.jsx          # Numbered disclaimers & 5-column directory
│   ├── data/
│   │   └── appleData.js        # Structured specs, models, finishes, & pricing
│   ├── App.jsx                 # Main layout, scroll observer, tab title cycler
│   ├── App.css                 # Unified Apple design system & animation keyframes
│   ├── index.css               # Global CSS reset & typography imports
│   └── main.jsx                # React DOM entry point
├── index.html                  # HTML entry point with Apple favicon & metadata
├── package.json                # Project dependencies and npm scripts
└── vite.config.js              # Vite build and development configuration
```

---

## 🛠️ Tech Stack

* **Core**: React 19, JavaScript (ES Modules)
* **Build Tool**: Vite 8 (instant HMR and optimized production bundles)
* **Styling**: Vanilla CSS with custom properties (CSS variables), Flexbox, CSS Grid, and custom keyframes
* **Icons**: Custom Apple SF-style SVG paths & Lucide React

---

## 🚀 Getting Started

### 1. Installation
```bash
cd apple-web
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build & Preview
```bash
npm run build
npm run preview
```

---

## 🌐 Deployment
This project is configured for continuous deployment on **Vercel** connected to the GitHub repository:  
[https://github.com/Sushanth666/APPLE-UI-WEB-Recreated](https://github.com/Sushanth666/APPLE-UI-WEB-Recreated)
