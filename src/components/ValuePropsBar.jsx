import React from 'react';

export default function ValuePropsBar() {
  return (
    <section className="value-props-section">
      <div className="apple-container">
        <div className="value-props-grid">
          {/* 1. Fast, free delivery */}
          <div className="value-prop-item">
            <div className="prop-icon-box">
              <svg
                width="42"
                height="42"
                viewBox="0 0 44 44"
                fill="none"
                stroke="#1d1d1f"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 6 L37 15 L22 24 L7 15 Z" />
                <path d="M7 15 V28.5 L22 37.5 V24" />
                <path d="M37 15 V28.5 L22 37.5" />
                <path d="M29.5 10.5 L14.5 19.5" />
              </svg>
            </div>
            <h4 className="prop-title">Fast, free delivery</h4>
            <p className="prop-desc">
              Or pick up available items at<br />an Apple Store.
            </p>
            <a href="#delivery" className="prop-link">
              Learn more
            </a>
          </div>

          {/* 2. Pay monthly at 0% APR */}
          <div className="value-prop-item">
            <div className="prop-icon-box">
              <svg
                width="42"
                height="42"
                viewBox="0 0 44 44"
                fill="none"
                stroke="#1d1d1f"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="22" cy="22" r="16.5" />
                <path d="M22 12.5 V31.5" />
                <path d="M25.5 17.5 C25.5 17.5 24.5 15.5 22 15.5 C19 15.5 18 17.2 18 18.8 C18 22 26 21 26 24.8 C26 27.5 24 28.5 22 28.5 C19 28.5 18 26.8 18 26.8" />
              </svg>
            </div>
            <h4 className="prop-title">Pay monthly at 0% APR</h4>
            <p className="prop-desc">
              You can pay over time when<br />
              you choose to check out with<br />
              Apple Card Monthly<br />
              Installments.**
            </p>
            <a href="#financing" className="prop-link">
              Learn more
            </a>
          </div>

          {/* 3. Get help buying */}
          <div className="value-prop-item">
            <div className="prop-icon-box">
              <svg
                width="42"
                height="42"
                viewBox="0 0 44 44"
                fill="none"
                stroke="#1d1d1f"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="16" cy="14" r="4.5" />
                <circle cx="28" cy="14" r="4.5" />
                <path d="M7 33 C7 26.5 11 24.5 16 24.5 C21 24.5 25 26.5 25 33 H7 Z" />
                <path d="M24 26 C25.5 24.8 27 24.5 28 24.5 C33 24.5 37 26.5 37 33 H25" />
              </svg>
            </div>
            <h4 className="prop-title">Get help buying</h4>
            <p className="prop-desc">
              Have a question? Call a<br />
              Specialist or chat online.<br />
              Call 1-800-MY-APPLE.
            </p>
            <a href="#specialist" className="prop-link">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
