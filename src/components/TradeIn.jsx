import React from 'react';

export default function TradeIn() {
  return (
    <section className="ways-to-save-section" id="ways-to-save">
      {/* Title */}
      <div className="ways-to-save-banner">
        <h2 className="ways-to-save-title">Ways to save on iPhone</h2>
      </div>

      <div className="ways-to-save-grid-container">
        {/* Top Full-Width Card: Trade In */}
        <a
          href="#trade-in"
          className="ways-card-top"
          aria-label="Trade in your current phone for credit toward a new one. Get $200-$600 in credit when you trade in iPhone 11 or higher and upgrade to iPhone 14 or iPhone 14 Pro. Learn more"
        >
          <img
            src="/images/trade-in-banner.png"
            alt="Trade in your current phone for credit toward a new one. Get $200-$600 in credit when you trade in iPhone 11 or higher and upgrade to iPhone 14 or iPhone 14 Pro. Learn more"
            className="ways-card-top-img"
            loading="lazy"
          />
        </a>

        {/* Bottom Row: 2 Side-by-Side Cards */}
        <div className="ways-bottom-cards-row">
          {/* Card 1: Carrier Deals */}
          <a
            href="#carrier-deals"
            className="ways-sub-card"
            aria-label="Save up to $800 with select carrier deals at Apple. Find your deal"
          >
            <img
              src="/images/ways-to-save-carrier.png"
              alt="Save up to $800 with select carrier deals at Apple.8"
              className="ways-sub-card-img"
              loading="lazy"
            />
          </a>

          {/* Card 2: Apple Card */}
          <a
            href="#apple-card"
            className="ways-sub-card"
            aria-label="Get 3% Daily Cash back with Apple Card. Learn more"
          >
            <img
              src="/images/ways-to-save-applecard.png"
              alt="Get 3% Daily Cash back with Apple Card."
              className="ways-sub-card-img"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
