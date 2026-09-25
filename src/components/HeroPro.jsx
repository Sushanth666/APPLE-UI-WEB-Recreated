import React from 'react';

export default function HeroPro() {
  return (
    <section id="14pro" className="hero-section hero-pro-figma">
      <div className="apple-container hero-content-center">
        {/* Eyebrow */}
        <span className="hero-pro-lockup">iPhone 14 Pro</span>

        {/* Headline */}
        <h2 className="hero-pro-headline">Pro. Beyond.</h2>

        {/* Pricing Subhead */}
        <p className="hero-pro-subhead">
          From $999 or $41.62/mo. for 24 mo. before trade-in2
        </p>

        {/* Actions: Buy pill & Learn more link */}
        <div className="hero-pro-actions">
          <a href="#compare" className="apple-btn-primary pro-buy-btn">
            Buy
          </a>
          <a href="#compare" className="pro-learn-link">
            Learn more
          </a>
        </div>

        {/* 4 iPhone 14 Pro Models Showcase from Figma */}
        <div className="hero-pro-image-wrapper">
          <img
            src="/images/iphone-14-pro-phones.png"
            alt="iPhone 14 Pro in Space Black, Silver, Gold, and Deep Purple"
            className="hero-pro-phones-img"
          />
        </div>
      </div>
    </section>
  );
}
