import React from 'react';
import { CHAPTER_NAV_ITEMS } from '../data/appleData';

export default function ChapterNav() {
  const renderIcon = (type) => {
    switch (type) {
      case 'iphone-14-pro':
        return (
          // Dual phone: smaller behind/left, taller in front/right with Dynamic Island
          <svg viewBox="0 0 54 54" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.3">
            {/* Left smaller phone */}
            <rect x="5" y="13" width="20" height="35" rx="4" />
            <line x1="12" y1="15.5" x2="18" y2="15.5" strokeWidth="1.2" strokeLinecap="round" />
            {/* Right taller phone (Pro) with Dynamic Island */}
            <rect x="21" y="5" width="26" height="44" rx="5" fill="#ffffff" />
            <rect x="21" y="5" width="26" height="44" rx="5" />
            {/* Dynamic Island pill */}
            <rect x="29" y="8" width="10" height="2.8" rx="1.4" fill="currentColor" stroke="none" />
          </svg>
        );

      case 'iphone-14':
        return (
          // Dual phone: smaller left, taller right with classic notch
          <svg viewBox="0 0 54 54" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.3">
            {/* Left smaller phone */}
            <rect x="5" y="13" width="20" height="35" rx="4" />
            <path d="M11 13h8v1.5a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V13z" fill="currentColor" stroke="none" />
            {/* Right taller phone with notch */}
            <rect x="21" y="5" width="26" height="44" rx="5" fill="#ffffff" />
            <rect x="21" y="5" width="26" height="44" rx="5" />
            <path d="M29 5h10v2.2a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V5z" fill="currentColor" stroke="none" />
          </svg>
        );

      case 'iphone-13':
        return (
          // Dual phone: smaller left, taller right
          <svg viewBox="0 0 54 54" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.3">
            <rect x="5" y="13" width="20" height="35" rx="4" />
            <path d="M11 13h8v1.5a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V13z" fill="currentColor" stroke="none" />
            <rect x="21" y="7" width="25" height="42" rx="4.5" fill="#ffffff" />
            <rect x="21" y="7" width="25" height="42" rx="4.5" />
            <path d="M29 7h9v2.2a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V7z" fill="currentColor" stroke="none" />
          </svg>
        );

      case 'iphone-se':
        return (
          // Single phone with home button circle at bottom - increased width
          <svg viewBox="0 0 54 54" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.3">
            <rect x="15" y="5" width="24" height="44" rx="4" />
            <line x1="23" y1="8.5" x2="31" y2="8.5" strokeWidth="1.2" strokeLinecap="round" />
            <circle cx="27" cy="43.5" r="3" strokeWidth="1.3" />
          </svg>
        );

      case 'iphone-12':
        return (
          // Single phone with notch - increased width
          <svg viewBox="0 0 54 54" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.3">
            <rect x="15" y="5" width="24" height="44" rx="4" />
            <path d="M22 5h10v2.2a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V5z" fill="currentColor" stroke="none" />
          </svg>
        );

      case 'compare':
        return (
          // Two phones side by side - increased width
          <svg viewBox="0 0 54 54" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.3">
            <rect x="7" y="6" width="18" height="42" rx="4" />
            <rect x="29" y="6" width="18" height="42" rx="4" strokeDasharray="3 2" />
          </svg>
        );

      case 'airpods':
        return (
          <img
            src="/icons/icon-airpods.png"
            alt="AirPods"
            className="chapter-exact-png"
          />
        );

      case 'airtag':
        return (
          <img
            src="/icons/icon-airtag.png"
            alt="AirTag"
            className="chapter-exact-png"
          />
        );

      case 'accessories':
        return (
          <img
            src="/icons/icon-accessories.png"
            alt="Accessories"
            className="chapter-exact-png"
          />
        );

      case 'card':
        return (
          <svg viewBox="0 0 44 44" width="36" height="36" fill="none">
            <rect x="5" y="12" width="34" height="24" rx="3.5" fill="#1d1d1f" />
            <path
              d="M13.5 21.8c-.1.3-.3.5-.5.7-.3.2-.5.1-.7 0-.2-.1-.4-.2-.7-.2-.2 0-.5.1-.7.2-.2.1-.4.2-.6 0-.2-.2-.4-.4-.5-.7-.3-.6-.5-1.3-.5-1.9 0-.8.2-1.4.7-1.9.4-.5.9-.8 1.5-.8.3 0 .6.1.9.2.3.2.5.3.6.3.1 0 .3-.1.6-.3.3-.2.6-.2.8-.2.6 0 1.2.3 1.6.8-.5.3-.8.8-.8 1.5 0 .5.2.9.5 1.3.4.3.8.5 1.3.6-.1.3-.2.7-.4 1.1zm-1.4-5.5c0-.4.1-.8.4-1.1.3-.3.7-.5 1.1-.6v.2c0 .4-.1.8-.4 1.1-.3.3-.7.5-1.1.5v-.1z"
              fill="#ffffff"
            />
          </svg>
        );

      case 'ios16':
        return (
          <img
            src="/icons/icon-ios16.png"
            alt="iOS 16"
            className="chapter-exact-png"
          />
        );

      case 'shop':
        return (
          <img
            src="/icons/icon-shop.png"
            alt="Shop iPhone"
            className="chapter-exact-png"
          />
        );

      default:
        return null;
    }
  };

  return (
    <nav className="chapter-nav-wrapper" aria-label="iPhone Products Navigation">
      <div className="chapter-nav-scroll">
        <ul className="chapter-nav-list">
          {CHAPTER_NAV_ITEMS.map((item) => (
            <li key={item.id} className="chapter-nav-item">
              <a href={`#${item.id}`} className="chapter-link">
                <div className="chapter-icon-box">{renderIcon(item.icon)}</div>
                <span className="chapter-name">{item.name}</span>
                {item.tag && <span className="chapter-badge">{item.tag}</span>}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
