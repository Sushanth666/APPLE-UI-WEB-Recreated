import React from 'react';

function AppleLogo({ size = 32, className = '' }) {
  const width = Math.round(size * (14 / 18));
  return (
    <svg
      width={width}
      height={size}
      viewBox="0 11 14 18"
      fill="currentColor"
      className={className}
      style={{ display: 'inline-block', verticalAlign: '-0.12em', flexShrink: 0 }}
      aria-hidden="true"
    >
      <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.2892 3.66 3.66 0 0 0 -2.3445 1.2084 3.2621 3.2621 0 0 0 -.8779 2.1585 1.4188 1.4188 0 0 0 .031.2892 3.869 3.869 0 0 0 2.3755-1.1469z" />
    </svg>
  );
}

export default function AppleOneServices() {
  return (
    <section id="services" className="apple-services-showcase-section">
      <div className="apple-services-showcase-container">
        {/* Section Heading */}
        <h2 className="apple-services-section-title">
          Get more out of your iPhone.
        </h2>

        {/* 1. Apple One Banner Card */}
        <div className="services-card apple-one-card">
          <div className="apple-one-media-col">
            <img
              src="/images/apple-one-grid.png"
              alt="Apple One services icons"
              className="apple-one-grid-img"
              loading="lazy"
            />
          </div>
          <div className="apple-one-text-col">
            <div className="apple-service-brand-row apple-one-brand-row">
              <AppleLogo size={54} />
              <span className="apple-one-brand-text">One</span>
            </div>
            <p className="apple-one-headline">
              Bundle up to six Apple services.<br />
              And enjoy more for less.
            </p>
            <div className="apple-service-links-row">
              <a href="#try-one" className="apple-service-link">
                Try it free9
              </a>
              <a href="#learn-one" className="apple-service-link">
                Learn more
              </a>
            </div>
          </div>
        </div>

        {/* 2. Row 1: Apple TV+ (Dark) & Apple Music (Light) */}
        <div className="services-two-cards-grid">
          {/* Left Card: Apple TV+ */}
          <div className="services-card apple-tv-card">
            <div className="service-card-top-content">
              <div className="apple-service-brand-row tv-brand-row">
                <AppleLogo size={36} />
                <span className="apple-tv-brand-text">tv+</span>
              </div>
              <p className="service-card-desc tv-desc">
                Get 3 months of Apple TV+ free<br />
                when you buy an iPhone.10
              </p>
              <div className="apple-service-links-row tv-links">
                <a href="#try-tv" className="apple-service-link tv-link">
                  Try it free
                </a>
                <a href="#learn-tv" className="apple-service-link tv-link">
                  Learn more
                </a>
              </div>
            </div>
            <div className="service-card-bottom-media tv-media">
              <img
                src="/images/apple-tv-shows.jpg"
                alt="Apple TV+ shows"
                className="apple-tv-shows-img"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Card: Apple Music */}
          <div className="services-card apple-music-card">
            <div className="service-card-top-content">
              <div className="apple-service-brand-row music-brand-row">
                <AppleLogo size={36} />
                <span className="apple-music-brand-text">Music</span>
              </div>
              <p className="service-card-desc music-desc">
                Over 100 million songs.<br />
                Start listening for free today.
              </p>
              <div className="apple-service-links-row music-links">
                <a href="#try-music" className="apple-service-link">
                  Try it free11
                </a>
                <a href="#learn-music" className="apple-service-link">
                  Learn more
                </a>
              </div>
            </div>
            <div className="service-card-bottom-media music-media">
              <div className="music-covers-row">
                <img
                  src="/images/music-throwback.jpg"
                  alt="Pure Throwback"
                  className="music-cover-item"
                  loading="lazy"
                />
                <div className="music-cover-item chill-mix-cover">
                  <div className="chill-brand">
                    <AppleLogo size={13} />
                    <span>Music</span>
                  </div>
                  <div className="chill-title">
                    Chill<br />Mix
                  </div>
                </div>
                <img
                  src="/images/music-goodvibes.jpg"
                  alt="Good Vibes Only"
                  className="music-cover-item"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 3. Row 2: Apple News+ (Light) & Apple Arcade (Light) */}
        <div className="services-two-cards-grid">
          {/* Left Card: Apple News+ */}
          <div className="services-card apple-news-card">
            <div className="service-card-top-content">
              <div className="apple-service-brand-row news-brand-row">
                <AppleLogo size={36} />
                <span className="apple-news-brand-text">News+</span>
              </div>
              <p className="service-card-desc news-desc">
                Get 3 months of Apple News+ free<br />
                when you buy an iPhone.12
              </p>
              <div className="apple-service-links-row news-links">
                <a href="#learn-news" className="apple-service-link">
                  Learn more
                </a>
              </div>
            </div>
            <div className="service-card-bottom-media news-media">
              <img
                src="/images/apple-news-magazines.png"
                alt="Apple News+ magazines on iPhone"
                className="apple-news-magazines-img"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Card: Apple Arcade */}
          <div className="services-card apple-arcade-card">
            <div className="service-card-top-content">
              <div className="apple-service-brand-row arcade-brand-row">
                <AppleLogo size={36} />
                <span className="apple-arcade-brand-text">Arcade</span>
              </div>
              <p className="service-card-desc arcade-desc">
                Get 3 months of Apple Arcade<br />
                free when you buy an iPhone.
              </p>
              <div className="apple-service-links-row arcade-links">
                <a href="#try-arcade" className="apple-service-link">
                  Try it free13
                </a>
                <a href="#learn-arcade" className="apple-service-link">
                  Learn more
                </a>
              </div>
            </div>
            <div className="service-card-bottom-media arcade-media">
              <img
                src="/images/apple-arcade-joystick.jpg"
                alt="Apple Arcade joystick"
                className="apple-arcade-joystick-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* 4. Row 3: Apple Fitness+ (Light) & Apple Gift Card (Light) */}
        <div className="services-two-cards-grid">
          {/* Left Card: Apple Fitness+ */}
          <div className="services-card apple-fitness-card">
            <div className="service-card-top-content">
              <div className="apple-service-brand-row fitness-brand-row">
                <AppleLogo size={36} />
                <span className="apple-fitness-brand-text">Fitness+</span>
              </div>
              <p className="service-card-desc fitness-desc">
                Fitness for everyone.<br />
                Now all you need is iPhone.
              </p>
              <div className="apple-service-links-row fitness-links">
                <a href="#learn-fitness" className="apple-service-link">
                  Learn more
                </a>
                <a href="#try-fitness" className="apple-service-link">
                  Try it free14
                </a>
              </div>
            </div>
            <div className="service-card-bottom-media fitness-media">
              <img
                src="/images/apple-fitness-workout.jpg"
                alt="Apple Fitness+ workout on iPhone"
                className="apple-fitness-workout-img"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Card: Apple Gift Card */}
          <div className="services-card apple-giftcard-card">
            <div className="service-card-top-content">
              <div className="apple-service-brand-row giftcard-brand-row">
                <AppleLogo size={36} />
                <span className="apple-giftcard-brand-text">Gift Card</span>
              </div>
              <p className="service-card-desc giftcard-desc">
                For everything and everyone.
              </p>
              <div className="apple-service-links-row giftcard-links">
                <a href="#learn-giftcard" className="apple-service-link">
                  Learn more
                </a>
                <a href="#buy-giftcard" className="apple-service-link">
                  Buy
                </a>
              </div>
            </div>
            <div className="service-card-bottom-media giftcard-media">
              <img
                src="/images/apple-gift-cards.jpg"
                alt="Apple Gift Cards"
                className="apple-gift-cards-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* 5. Row 4: Apple Research app Full-Width Banner Card */}
        <div className="services-card apple-research-card">
          <div className="apple-research-text-col">
            <h3 className="apple-research-headline">
              Introducing<br />
              the Apple<br />
              Research app.
            </h3>
            <p className="apple-research-desc">
              The future of health research is you.
            </p>
            <div className="apple-service-links-row research-links">
              <a href="#learn-research" className="apple-service-link">
                Learn more
              </a>
            </div>
          </div>
          <div className="apple-research-media-col">
            <img
              src="/images/apple-research-iphones.png"
              alt="Apple Research app on three iPhones"
              className="apple-research-iphones-img"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
