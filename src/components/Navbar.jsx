import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bagCount, setBagCount] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Store', href: '#' },
    { name: 'Mac', href: '#' },
    { name: 'iPad', href: '#' },
    { name: 'iPhone', href: '#', active: true },
    { name: 'Watch', href: '#' },
    { name: 'AirPods', href: '#' },
    { name: 'TV & Home', href: '#' },
    { name: 'Entertainment', href: '#' },
    { name: 'Accessories', href: '#' },
    { name: 'Support', href: '#' },
  ];

  return (
    <header className={`apple-global-nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-container-998">
        {/* Apple Official Logo SVG */}
        <a href="#" className="nav-item-link nav-logo-link" aria-label="Apple">
          <svg height="44" viewBox="0 0 14 44" width="14" fill="currentColor">
            <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.2892 3.66 3.66 0 0 0 -2.3445 1.2084 3.2621 3.2621 0 0 0 -.8779 2.1585 1.4188 1.4188 0 0 0 .031.2892 3.869 3.869 0 0 0 2.3755-1.1469z" />
          </svg>
        </a>

        {/* Global Links */}
        {navLinks.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={`nav-item-link nav-text-link ${item.active ? 'link-current' : ''}`}
          >
            {item.name}
          </a>
        ))}

        {/* Search Icon */}
        <button className="nav-item-link nav-action-btn" aria-label="Search">
          <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="6.5" cy="6.5" r="4.5" />
            <line x1="10" y1="10" x2="14" y2="14" strokeLinecap="round" />
          </svg>
        </button>

        {/* Shopping Bag Icon */}
        <button
          className="nav-item-link nav-action-btn bag-btn"
          aria-label="Shopping Bag"
          onClick={() => setBagCount((prev) => (prev === 0 ? 1 : 0))}
        >
          <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 5V3.5A2.5 2.5 0 0 1 6.5 1h3A2.5 2.5 0 0 1 12 3.5V5" strokeLinecap="round" />
            <rect x="2.5" y="4.5" width="11" height="10" rx="1.5" />
          </svg>
          {bagCount > 0 && <span className="bag-badge">{bagCount}</span>}
        </button>

        {/* Mobile Menu Toggle Button */}
        <button
          className="mobile-toggle-btn"
          aria-label="Toggle Navigation"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <div className="mobile-search-bar">
            <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="6.5" cy="6.5" r="4.5" />
              <line x1="10" y1="10" x2="14" y2="14" strokeLinecap="round" />
            </svg>
            <input type="text" placeholder="Search apple.com" />
          </div>
          <div className="mobile-nav-list">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="mobile-nav-item"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
