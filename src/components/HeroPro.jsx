import React, { useState } from 'react';

export default function HeroPro() {
  const [islandMode, setIslandMode] = useState('music'); // 'music' | 'call' | 'timer'

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

        {/* Interactive Dynamic Island Demo */}
        <div className="hero-dynamic-island-container">
          <div className="island-mode-selector">
            <button
              type="button"
              className={`island-tab-btn ${islandMode === 'music' ? 'active' : ''}`}
              onClick={() => setIslandMode('music')}
            >
              🎵 Now Playing
            </button>
            <button
              type="button"
              className={`island-tab-btn ${islandMode === 'call' ? 'active' : ''}`}
              onClick={() => setIslandMode('call')}
            >
              📞 Incoming Call
            </button>
            <button
              type="button"
              className={`island-tab-btn ${islandMode === 'timer' ? 'active' : ''}`}
              onClick={() => setIslandMode('timer')}
            >
              ⏱️ Timer
            </button>
          </div>

          <div className={`dynamic-island-pill mode-${islandMode}`}>
            {islandMode === 'music' && (
              <div className="island-inner island-music-content">
                <div className="island-album-thumb" />
                <span className="island-track-title">Anti-Hero • Taylor Swift</span>
                <div className="island-equalizer">
                  <span className="eq-bar bar-1" />
                  <span className="eq-bar bar-2" />
                  <span className="eq-bar bar-3" />
                  <span className="eq-bar bar-4" />
                </div>
              </div>
            )}

            {islandMode === 'call' && (
              <div className="island-inner island-call-content">
                <div className="island-caller-avatar">
                  <span className="call-pulse-ring" />
                </div>
                <div className="island-call-info">
                  <span className="caller-name">Craig Federighi</span>
                  <span className="call-status">iPhone</span>
                </div>
                <div className="island-call-actions">
                  <span className="call-btn-decline">✕</span>
                  <span className="call-btn-accept">✓</span>
                </div>
              </div>
            )}

            {islandMode === 'timer' && (
              <div className="island-inner island-timer-content">
                <span className="island-timer-icon">⏳</span>
                <span className="island-timer-text">14:59</span>
                <span className="island-timer-tag">Cooking</span>
              </div>
            )}
          </div>
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
