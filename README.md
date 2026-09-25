#  Apple Web – Official iPhone Experience

A pixel-faithful, responsive recreation of the official **Apple iPhone** flagship landing and product experience page, built with modern **React 19**, **Vite**, and high-performance **Vanilla CSS**.

---

## 📖 Project Overview

**Apple Web** replicates the typography, spacing, fluidity, and aesthetic standards of [apple.com/iphone](https://www.apple.com/iphone). It showcases the iPhone 14, iPhone 14 Pro, iPhone SE, and the MagSafe accessory ecosystem, featuring interactive color selectors, comparison matrices, dynamic video modals, and an Apple-calibrated animation suite.

---

## ✨ Key Features

### 1. Global Navigation (`Navbar.jsx`)
- **Translucent Frosted Glass**: Apple-standard `backdrop-filter: blur(20px) saturate(180%)`.
- **Dynamic Scroll State**: Deepens glass blur and adds boundary elevation as users scroll down.
- **Interactive Bag Badge**: Animated tactile spring bounce (`bagBadgePop`) when items are added to the bag.
- **Responsive Mobile Drawer**: Seamless hamburger overlay navigation on smaller screens.

### 2. Chapter Subnav Ribbon (`ChapterNav.jsx`)
- Horizontal ribbon displaying iconic Apple silhouettes (iPhone 14 Pro, iPhone 14, iPhone 13, iPhone SE, Compare, AirPods, AirTag, Accessories, Apple Card).
- **Floating Hover Animations**: Icons elevate with smooth drop shadows (`transform: translateY(-3px) scale(1.12)`).

### 3. Flagship Hero Showcases
- **iPhone 14 Hero ("Wonderfull.")**:
  - Showcases the high-resolution arc of 6 vibrant finishes.
  - Floating breathing motion (`appleHeroFloat`) simulating weightless suspension.
  - Alternating title gradient shimmer.
- **iPhone 14 Pro Hero ("Pro. Beyond.")**:
  - Dark-mode themed hero featuring Space Black, Silver, Gold, and Deep Purple finishes.
  - Shimmering metallic typography and floating showcase.
- **iPhone SE Hero ("Love the power. Love the value.")**:
  - Clean lockup highlighting the compact profile, A15 Bionic chip, and Home button.

### 4. "A Guided Tour" Video Showcase (`GuidedTour.jsx`)
- NYC Apple tour host banner with an interactive YouTube modal player (`VideoModal.jsx`).
- **Radar Wave Play Button**: Pulsing circular wave effect (`radarWave`) inviting users to watch the film.

### 5. Interactive Comparison Grid (`CompareSection.jsx`)
- **4-Column Spec Matrix**: iPhone 14 Pro, iPhone 14, iPhone 13, and iPhone SE.
- **Real-Time Color Switching**: Color swatches instantly update device images with smooth crossfades (`cmpCrossfade`) and elastic swatch pop animations (`swatchSelectPop`).
- **Comprehensive Specs**: Display sizes, Dynamic Island vs. Notch, Emergency SOS via satellite, Camera systems, Photonic Engine, Battery playback hours, Bionic chips, and Biometrics (Face ID / Touch ID).

### 6. Ways to Save & Bento Grid (`TradeIn.jsx` & `WhyApple.jsx`)
- Interactive Trade-In cards, carrier deals (AT&T, T-Mobile, Verizon), and 3% Daily Cash Apple Card perks.
- Bento cards with smooth zoom (`scale(1.025)`) and hover depth.

### 7. MagSafe & Audio Ecosystem (`MagSafeShowcase.jsx`)
- Dual-card split for MagSafe accessories and AirTag precision finding.
- AirPods family showcase (AirPods Pro 2nd Gen, AirPods Max, AirPods 3rd Gen).

### 8. Value Propositions Bar (`ValuePropsBar.jsx`)
- Fast free delivery, 0% APR monthly installments, and Specialist help.
- Playful spring bounce and Apple Blue color shift on icon hover.

### 9. Apple Services & Footer (`AppleOneServices.jsx` & `Footer.jsx`)
- Apple One showcase (TV+, Music, Fitness+, Arcade, iCloud+, News+).
- Complete numbered legal footnotes, breadcrumb hierarchy, and 5-column directory footer.

---

## 🎬 Apple Animation Suite

- **Scroll-Reveal Choreography**: Native `IntersectionObserver` smoothly slides sections up into view as the user scrolls.
- **Browser Tab Cycling**: Document title automatically cycles through official Apple slogans every 2.8 seconds (` Apple | Official iPhone Experience`, ` iPhone 14 Pro — Pro. Beyond.`, etc.).
- **Tactile Button Springs**: Primary blue buttons compress on click (`scale(0.96)`) and elevate on hover (`scale(1.035)`).
- **Chevron Micro-Slide**: Text links with chevrons slide right by 3px on hover.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: React 19 + Vite 8
- **Styling**: Vanilla CSS Design System (`App.css`, `index.css`)
- **Icons**: Custom Apple SF-style SVG paths & Lucide React
- **Module Structure**:
  ```text
  apple-web/
  ├── src/
  │   ├── assets/             # Branding assets
  │   ├── components/         # 16 modular UI components
  │   │   ├── Navbar.jsx
  │   │   ├── ChapterNav.jsx
  │   │   ├── HeroYellow.jsx
  │   │   ├── HeroPro.jsx
  │   │   ├── HeroSE.jsx
  │   │   ├── GuidedTour.jsx
  │   │   ├── VideoModal.jsx
  │   │   ├── CompareSection.jsx
  │   │   ├── TradeIn.jsx
  │   │   ├── WhyApple.jsx
  │   │   ├── MagSafeShowcase.jsx
  │   │   ├── ValuePropsBar.jsx
  │   │   ├── AppleOneServices.jsx
  │   │   └── Footer.jsx
  │   ├── data/appleData.js   # Structured specs, models, finishes
  │   ├── App.jsx             # Main layout, scroll observer, title interval
  │   ├── App.css             # Unified Apple design system & animation keyframes
  │   └── main.jsx
  ├── index.html              # Apple favicon, viewport configuration
  └── package.json
  ```

---

## 🚀 Running Locally

### Development Server
```bash
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
npm run build
npm run preview
```
