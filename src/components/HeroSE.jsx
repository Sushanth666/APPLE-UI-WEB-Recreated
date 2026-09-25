import React from 'react';

export default function HeroSE() {
  return (
    <section id="se" className="hero-section hero-se-figma">
      <div className="se-figma-container">
        {/* Left: Content Block */}
        <div className="se-figma-content">
          <div className="se-figma-lockup">
            <span className="se-lockup-brand">iPhone</span>
            <span className="se-lockup-badge">SE</span>
          </div>

          <h2 className="se-figma-headline">
            Love the power.<br />Love the price.
          </h2>

          <p className="se-figma-subhead">
            From $429 or $17.87/mo. for 24 mo. before trade-in2
          </p>

          <div className="se-figma-actions">
            <a href="#compare" className="apple-btn-primary se-buy-btn">
              Buy
            </a>
            <a href="#compare" className="se-learn-link">
              Learn more
            </a>
          </div>
        </div>

        {/* Right: 3 Angled iPhone SE Phones from Figma */}
        <div className="se-figma-image-wrapper">
          <img
            src="/images/iphone-se-phones.jpg"
            alt="iPhone SE in (PRODUCT)RED, Starlight, and Midnight"
            className="se-figma-phones-img"
          />
        </div>
      </div>
    </section>
  );
}
