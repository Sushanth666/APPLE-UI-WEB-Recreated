import React from 'react';

export default function MagSafeShowcase() {
  return (
    <section id="accessories" className="featured-accessories-section">
      {/* 1. Featured accessories Header */}
      <div className="featured-accessories-header">
        <h2 className="featured-accessories-title">Featured accessories</h2>
      </div>

      <div className="featured-accessories-container">
        {/* Card 1: MagSafe (Text Left, Image Right) */}
        <div className="featured-accessory-card magsafe-card">
          <div className="accessory-text-col">
            <h3 className="accessory-heading">MagSafe</h3>
            <p className="accessory-desc">
              Snap on a magnetic case, wallet, or both. And get faster wireless charging.
            </p>
            <a href="#magsafe-shop" className="accessory-link">
              Shop MagSafe accessories
            </a>
          </div>
          <div className="accessory-media-col">
            <img
              src="/images/magsafe-accessories.jpg"
              alt="MagSafe case, wallet, and charger on iPhone"
              className="magsafe-media-img"
              loading="lazy"
            />
          </div>
        </div>

        {/* Card 2: AirTag (Image Left, Text Right) */}
        <div className="featured-accessory-card airtag-card">
          <div className="accessory-media-col airtag-media-col">
            <img
              src="/images/airtag-accessories.jpg"
              alt="AirTag and colorful key rings"
              className="airtag-media-img"
              loading="lazy"
            />
          </div>
          <div className="accessory-text-col airtag-text-col">
            <h3 className="accessory-heading">AirTag</h3>
            <p className="accessory-desc">
              Attach one to your keys. Put another in your backpack. If they’re misplaced, just use the Find My app.
            </p>
            <div className="accessory-links-row">
              <a href="#buy-airtag" className="accessory-link">
                Buy
              </a>
              <a href="#learn-airtag" className="accessory-link">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Audio / AirPods Family Showcase (Magic runs in the family.) */}
      <div id="airpods" className="airpods-family-container">
        <div className="airpods-family-card">
          <h2 className="airpods-family-title">
            Magic runs<br />in the family.
          </h2>
          <div className="airpods-family-media">
            <img
              src="/images/airpods-family.jpg"
              alt="AirPods Max, AirPods Pro, and AirPods"
              className="airpods-family-img"
              loading="lazy"
            />
          </div>
        </div>

        <div className="accessories-footer-link-wrap">
          <a href="#all-accessories" className="accessories-footer-link">
            Shop all iPhone accessories
          </a>
        </div>
      </div>
    </section>
  );
}
