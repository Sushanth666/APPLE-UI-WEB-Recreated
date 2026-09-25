import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import ChapterNav from './components/ChapterNav';
import RibbonPromo from './components/RibbonPromo';
import HeroYellow from './components/HeroYellow';
import HeroPro from './components/HeroPro';
import HeroSE from './components/HeroSE';
import GuidedTour from './components/GuidedTour';
import CompareSection from './components/CompareSection';
import TradeIn from './components/TradeIn';
import WhyApple from './components/WhyApple';
import MagSafeShowcase from './components/MagSafeShowcase';
import ValuePropsBar from './components/ValuePropsBar';
import IOS16Section from './components/IOS16Section';
import AppleOneServices from './components/AppleOneServices';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const titles = [
      'Apple | Official iPhone Experience',
      'iPhone 14 Pro — Pro. Beyond.',
      'iPhone 14 — Wonderfull.',
      'iPhone SE — Love the power. Love the value.',
      'Trade In — Get up to $650 credit',
    ];
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % titles.length;
      document.title = titles[index];
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  // Apple signature scroll reveal choreography
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const sections = document.querySelectorAll(
      '.hero-section, .guided-tour-section, .compare-section, .ways-to-save-section, .why-apple-section, .featured-accessories-section, .value-props-section, .apple-services-showcase-section, .apple-reveal'
    );
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="apple-page-wrapper">
      {/* 1. Global Navigation Bar */}
      <Navbar />

      <main id="main-content">
        {/* 2. Chapter Subnav Ribbon */}
        <ChapterNav />

        {/* 3. Promo Announcement Ribbon */}
        <RibbonPromo />

        {/* 4. iPhone 14 Hero (Wonderfull.) */}
        <HeroYellow />

        {/* 5. iPhone 14 Pro Hero (Pro. Beyond.) */}
        <HeroPro />

        {/* 6. iPhone SE Hero (Love the power. Love the value.) */}
        <HeroSE />

        {/* 7. Guided Tour Video Section */}
        <GuidedTour />

        {/* 8. Which iPhone is right for you? (Interactive Comparison Grid) */}
        <CompareSection />

        {/* 9. Ways to Save - Trade-In Section */}
        <TradeIn />

        {/* 9. Why Apple is the best place to buy iPhone (Bento Grid) */}
        <WhyApple />

        {/* 10. MagSafe Accessories & AirPods Showcase */}
        <MagSafeShowcase />

        {/* 11. Delivery, Returns & Help Value Propositions */}
        <ValuePropsBar />

        {/* 12. What makes an iPhone an iPhone? (iOS 16 & Switching) */}
        <IOS16Section />

        {/* 13. Apple Services (Apple One) */}
        <AppleOneServices />
      </main>

      {/* 14. Footnotes & 5-Column Directory Footer */}
      <Footer />
    </div>
  );
}

export default App;
