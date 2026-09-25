import React, { useState } from 'react';
import VideoModal from './VideoModal';

export default function GuidedTour() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="guided-tour-section">
      <div className="apple-container">
        <div className="guided-tour-card">
          <div className="guided-tour-content">
            <span className="tour-eyebrow">A Guided Tour of</span>
            <h2 className="tour-headline">
              iPhone 14 &<br />iPhone 14 Pro
            </h2>
            <button
              className="tour-watch-btn"
              onClick={() => setIsVideoOpen(true)}
              aria-label="Watch the film"
            >
              <span className="tour-play-icon-wrap">
                <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              Watch the film
            </button>
          </div>
          <div className="guided-tour-mobile-media">
            <img
              src="/images/guided-tour-bg.jpg"
              alt="A Guided Tour of iPhone 14 & iPhone 14 Pro"
              className="guided-tour-mobile-img"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </section>
  );
}
