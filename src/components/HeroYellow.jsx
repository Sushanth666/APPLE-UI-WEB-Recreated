import React from 'react';

export default function HeroYellow() {
  return (
    <section id="14" className="hero-section hero-yellow-figma">
      <div className="apple-container hero-content-center">
        {/* Eyebrow / Tag */}
        <span className="hero-new-tag">New</span>
        
        {/* iPhone 14 Lockup */}
        <span className="hero-iphone-lockup">iPhone 14</span>

        {/* Main Headline */}
        <h1 className="hero-figma-headline">
          Two great sizes.<br />Now with a splash of yellow.
        </h1>

        {/* Pricing Subtitle */}
        <p className="hero-figma-subhead">
          From $799 or $33.29/mo. for 24 mo. before trade-in2
        </p>

        {/* Actions: Buy pill & Learn more link */}
        <div className="hero-figma-actions">
          <a href="#compare" className="apple-btn-primary figma-buy-btn">
            Buy
          </a>
          <a href="#compare" className="figma-learn-link">
            Learn more
          </a>
        </div>

        {/* High-Resolution Arc Image from Figma */}
        <div className="hero-figma-image-wrapper">
          <img
            src="/images/iphone-14-hero-arc.png"
            alt="iPhone 14 in six finishes with splash of yellow"
            className="hero-figma-arc-img"
          />
        </div>
      </div>
    </section>
  );
}
