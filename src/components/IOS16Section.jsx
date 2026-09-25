import React from 'react';

export default function IOS16Section() {
  return (
    <section id="ios16-and-switch" className="what-makes-section">
      <div className="what-makes-container">
        {/* Section Title matching user Image 1 */}
        <h2 className="what-makes-section-title">
          What makes an iPhone an iPhone?
        </h2>

        {/* Card 1: iOS 16 */}
        <div className="what-makes-card ios16-card">
          <div className="what-makes-header">
            <h3 className="what-makes-card-title">iOS 16</h3>
            <p className="what-makes-card-sub">Personal is powerful.</p>
            <a href="#ios16" className="what-makes-link">
              Learn more
            </a>
          </div>
          <div className="what-makes-media">
            <img
              src="/images/ios16-phones.jpg"
              alt="iOS 16 Lock Screens and Features"
              className="what-makes-img"
              loading="lazy"
            />
          </div>
        </div>

        {/* Card 2: Switching to iPhone */}
        <div className="what-makes-card switch-card">
          <div className="what-makes-header">
            <h3 className="what-makes-card-title">
              Switching to iPhone<br />is super simple.
            </h3>
            <a href="#switch" className="what-makes-link">
              Learn more
            </a>
          </div>
          <div className="what-makes-media">
            <img
              src="/images/switch-phones.jpg"
              alt="Switching to iPhone"
              className="what-makes-img switch-img"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
