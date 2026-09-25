import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function WhyApple() {
  return (
    <section className="why-apple-section" id="why-apple">
      <div className="why-apple-container">
        <div className="why-apple-banner-card">
          <div className="why-apple-content">
            <h2 className="why-apple-title">
              Why Apple is the best<br />place to buy iPhone.
            </h2>
            <p className="why-apple-desc">
              You can choose a payment option that works for you, pay less with a trade-in, connect your new iPhone to your carrier, and get set up quickly. You can also chat with a Specialist anytime.
            </p>
            <a href="#learn-more" className="why-apple-link">
              Learn more <ChevronRight size={14} className="why-apple-chevron" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
