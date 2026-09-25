import React, { useState } from 'react';
import { IPHONE_MODELS } from '../data/appleData';


/* ── Precise Apple Spec Icons matching user screenshots ── */

const DynamicIslandIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="cmp-icon-svg">
    <path
      d="M7 34V14.5A7.5 7.5 0 0 1 14.5 7H25.5A7.5 7.5 0 0 1 33 14.5V34"
      stroke="#1d1d1f"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x="14.5" y="11.5" width="11" height="4.8" rx="2.4" fill="#1d1d1f" />
  </svg>
);

const SosIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="cmp-icon-svg">
    <circle cx="20" cy="20" r="17" stroke="#1d1d1f" strokeWidth="1.8" />
    <text
      x="20"
      y="24.5"
      textAnchor="middle"
      fontSize="11.5"
      fontWeight="700"
      fill="#1d1d1f"
      fontFamily="-apple-system, SF Pro Text, sans-serif"
    >
      SOS
    </text>
  </svg>
);

const CameraProIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="cmp-icon-svg">
    {/* Top-left Phone Corner Arc */}
    <path
      d="M36 3.5H11A7.5 7.5 0 0 0 3.5 11V36"
      stroke="#1d1d1f"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    {/* Camera Plateau Squircle */}
    <rect
      x="7.5"
      y="7.5"
      width="27"
      height="27"
      rx="7"
      stroke="#1d1d1f"
      strokeWidth="2"
    />
    {/* Three Main Lenses */}
    <circle cx="15" cy="15" r="4.5" fill="#1d1d1f" />
    <circle cx="15" cy="27" r="4.5" fill="#1d1d1f" />
    <circle cx="27" cy="21" r="4.5" fill="#1d1d1f" />
    {/* Flash Dot (top-right) */}
    <circle cx="27" cy="12.5" r="1.8" stroke="#1d1d1f" strokeWidth="1.2" />
    {/* LiDAR / Sensor Dot (bottom-right) */}
    <circle cx="27" cy="29.5" r="1.3" fill="#1d1d1f" />
  </svg>
);

const CameraDualIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="cmp-icon-svg">
    {/* Top-left Phone Corner Arc */}
    <path
      d="M36 3.5H11A7.5 7.5 0 0 0 3.5 11V36"
      stroke="#1d1d1f"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    {/* Camera Plateau Squircle */}
    <rect
      x="7.5"
      y="7.5"
      width="27"
      height="27"
      rx="7"
      stroke="#1d1d1f"
      strokeWidth="2"
    />
    {/* Two Diagonal Lenses */}
    <circle cx="15.5" cy="15.5" r="4.8" fill="#1d1d1f" />
    <circle cx="26.5" cy="26.5" r="4.8" fill="#1d1d1f" />
    {/* Flash Dot (top-right) */}
    <circle cx="26.5" cy="13" r="1.8" stroke="#1d1d1f" strokeWidth="1.2" />
    {/* Mic Dot (bottom-left) */}
    <circle cx="15.5" cy="29" r="1.3" fill="#1d1d1f" />
  </svg>
);

const CameraSingleIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="cmp-icon-svg">
    {/* Top-left Phone Corner Arc */}
    <path
      d="M36 3.5H11A7.5 7.5 0 0 0 3.5 11V36"
      stroke="#1d1d1f"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    {/* Single Camera Lens */}
    <circle cx="14" cy="14" r="3.8" fill="#1d1d1f" />
    {/* Mic Dot */}
    <circle cx="21" cy="14" r="1" fill="#1d1d1f" />
    {/* Flash Ring */}
    <circle cx="27" cy="14" r="2" stroke="#1d1d1f" strokeWidth="1.2" />
  </svg>
);

const ActionModeIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="cmp-icon-svg">
    {/* Outer Ring */}
    <circle cx="20" cy="20" r="17" stroke="#1d1d1f" strokeWidth="2.2" />

    {/* 4 Motion Speed Dashes (Left) */}
    <line x1="13.5" y1="12.5" x2="18.5" y2="12.5" stroke="#1d1d1f" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="9.5" y1="16.5" x2="16" y2="16.5" stroke="#1d1d1f" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="12" y1="20.5" x2="17" y2="20.5" stroke="#1d1d1f" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="9.5" y1="24.5" x2="15" y2="24.5" stroke="#1d1d1f" strokeWidth="2.2" strokeLinecap="round" />

    {/* Runner Head */}
    <circle cx="25.5" cy="12" r="2.3" fill="#1d1d1f" />

    {/* Runner Back Arm */}
    <path
      d="M19 20.5V16c0-.6.4-1 1-1h3"
      stroke="#1d1d1f"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Runner Front Arm */}
    <path
      d="M23 15l3.2 3 4-1.2"
      stroke="#1d1d1f"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Runner Torso & Front Leg */}
    <path
      d="M23 15.5l-1.5 6 3.8 2.8-2.2 4.7"
      stroke="#1d1d1f"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Runner Back Leg */}
    <path
      d="M21.5 21.5l-3.8 3.5-3.2 4"
      stroke="#1d1d1f"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BatteryIcon = () => (
  <svg width="44" height="24" viewBox="0 0 44 24" fill="none" className="cmp-icon-svg">
    {/* Battery Casing */}
    <rect
      x="2"
      y="3"
      width="34"
      height="18"
      rx="5"
      stroke="#1d1d1f"
      strokeWidth="2.2"
    />
    {/* Solid Black Full Battery Fill */}
    <rect
      x="5"
      y="6"
      width="28"
      height="12"
      rx="3"
      fill="#1d1d1f"
    />
    {/* Positive Terminal Nub */}
    <path
      d="M37.5 8.5C39 8.5 40 9.8 40 12s-1 3.5-2.5 3.5"
      fill="#1d1d1f"
    />
  </svg>
);

const ChipIcon = ({ label }) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="cmp-icon-svg">
    <rect x="5" y="5" width="30" height="30" rx="6" stroke="#1d1d1f" strokeWidth="1.6" />
    <text
      x="20"
      y="24.5"
      textAnchor="middle"
      fontSize="12"
      fontWeight="700"
      fill="#1d1d1f"
      fontFamily="-apple-system, sans-serif"
    >
      {label}
    </text>
  </svg>
);

const FaceIDIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="cmp-icon-svg">
    <path d="M7 14 V10 Q7 7 10 7 H14" stroke="#1d1d1f" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M33 14 V10 Q33 7 30 7 H26" stroke="#1d1d1f" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M7 26 V30 Q7 33 10 33 H14" stroke="#1d1d1f" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M33 26 V30 Q33 33 30 33 H26" stroke="#1d1d1f" strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="15" cy="17" r="1.5" fill="#1d1d1f" />
    <circle cx="25" cy="17" r="1.5" fill="#1d1d1f" />
    <path d="M20 18 V23" stroke="#1d1d1f" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M15 26 Q20 30 25 26" stroke="#1d1d1f" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const TouchIDIcon = () => (
  <img
    src="/icons/touchid.png"
    alt="Touch ID"
    className="cmp-icon-svg"
    style={{
      width: '38px',
      height: '38px',
      objectFit: 'contain',
      display: 'inline-block',
      verticalAlign: 'middle',
    }}
  />
);

const FiveGIcon = () => (
  <svg width="48" height="30" viewBox="0 0 48 30" fill="none" className="cmp-icon-svg">
    <text x="24" y="20.5" textAnchor="middle" fontSize="13" fontWeight="700" fill="#1d1d1f" fontFamily="-apple-system, sans-serif">
      5G
    </text>
    <path d="M12 7 Q7 15 12 23" stroke="#1d1d1f" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M7 4 Q0 15 7 26" stroke="#1d1d1f" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M36 7 Q41 15 36 23" stroke="#1d1d1f" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M41 4 Q48 15 41 26" stroke="#1d1d1f" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const Dash = () => <span className="cmp-dash">–</span>;

/* ── Apple-accurate Spec Data matching user screenshots exactly ── */
const COMPARE_DATA = {
  '14pro': {
    display: {
      size: '6.7″ or 6.1″',
      type: 'Super Retina XDR display3',
      promotion: 'ProMotion technology',
      alwaysOn: 'Always-On display',
    },
    island: {
      has: true,
      title: 'Dynamic Island',
      desc: ['A new way to', 'interact with iPhone'],
    },
    sos: {
      satellite: 'Emergency SOS via satellite4',
      emergency: 'Emergency SOS',
      crash: 'Crash Detection5',
    },
    camera: {
      icon: <CameraProIcon />,
      title: 'Pro camera system',
      line1: '48MP Main | Ultra Wide',
      line2: 'Telephoto',
      line3: ['Photonic Engine for incredible', 'detail and color'],
      line4: ['Autofocus on TrueDepth', 'front camera'],
    },
    action: {
      has: true,
      text: ['Action mode smooths out shaky', 'handheld videos'],
    },
    battery: ['Up to 29 hours', 'video playback6'],
    chip: {
      icon: <ChipIcon label="A16" />,
      title: 'A16 Bionic chip',
      sub: null,
    },
    auth: {
      icon: <FaceIDIcon />,
      name: 'Face ID',
    },
    cellular: {
      name: 'Superfast 5G cellular7',
    },
  },

  '14': {
    display: {
      size: '6.7″ or 6.1″',
      type: 'Super Retina XDR display3',
      promotion: null,
      alwaysOn: null,
    },
    island: {
      has: false,
    },
    sos: {
      satellite: 'Emergency SOS via satellite4',
      emergency: 'Emergency SOS',
      crash: 'Crash Detection5',
    },
    camera: {
      icon: <CameraDualIcon />,
      title: 'Advanced dual-camera system',
      line1: '12MP Main | Ultra Wide',
      line2: null,
      line3: ['Photonic Engine for incredible', 'detail and color'],
      line4: ['Autofocus on TrueDepth', 'front camera'],
    },
    action: {
      has: true,
      text: ['Action mode smooths out shaky', 'handheld videos'],
    },
    battery: ['Up to 26 hours', 'video playback6'],
    chip: {
      icon: <ChipIcon label="A15" />,
      title: 'A15 Bionic chip',
      sub: 'with 5-core GPU',
    },
    auth: {
      icon: <FaceIDIcon />,
      name: 'Face ID',
    },
    cellular: {
      name: 'Superfast 5G cellular7',
    },
  },

  '13': {
    display: {
      size: '6.1″ or 5.4″',
      type: 'Super Retina XDR display3',
      promotion: null,
      alwaysOn: null,
    },
    island: {
      has: false,
    },
    sos: {
      satellite: null,
      emergency: 'Emergency SOS',
      crash: null,
    },
    camera: {
      icon: <CameraDualIcon />,
      title: 'Dual-camera system',
      line1: '12MP Main | Ultra Wide',
      line2: null,
      line3: null,
      line4: ['TrueDepth front camera'],
    },
    action: {
      has: false,
    },
    battery: ['Up to 19 hours', 'video playback6'],
    chip: {
      icon: <ChipIcon label="A15" />,
      title: 'A15 Bionic chip',
      sub: 'with 4-core GPU',
    },
    auth: {
      icon: <FaceIDIcon />,
      name: 'Face ID',
    },
    cellular: {
      name: 'Superfast 5G cellular7',
    },
  },

  'se': {
    display: {
      size: '4.7″',
      type: 'Retina HD display',
      promotion: null,
      alwaysOn: null,
    },
    island: {
      has: false,
    },
    sos: {
      satellite: null,
      emergency: 'Emergency SOS',
      crash: null,
    },
    camera: {
      icon: <CameraSingleIcon />,
      title: 'Advanced camera system',
      line1: '12MP Main',
      line2: null,
      line3: null,
      line4: ['Front camera'],
    },
    action: {
      has: false,
    },
    battery: ['Up to 15 hours', 'video playback6'],
    chip: {
      icon: <ChipIcon label="A15" />,
      title: 'A15 Bionic chip',
      sub: 'with 4-core GPU',
    },
    auth: {
      icon: <TouchIDIcon />,
      name: 'Touch ID',
    },
    cellular: {
      name: '5G cellular7',
    },
  },
};

export default function CompareSection() {
  const [selectedColors, setSelectedColors] = useState({
    '14pro': 0,
    '14': 0,
    '13': 0,
    se: 0,
  });

  const handleColorChange = (phoneId, index) => {
    setSelectedColors((prev) => ({ ...prev, [phoneId]: index }));
  };

  return (
    <section id="compare" className="compare-section">
      <div className="compare-wrapper">
        {/* Title */}
        <h2 className="compare-title">Which iPhone is right for you?</h2>

        {/* 4-Column Grid */}
        <div className="compare-scroll-container">
          <div className="compare-table-apple">
            {/* Headers: 4 Columns (Phones, swatches, titles, CTAs) */}
            <div className="cmp-headers-row">
              {IPHONE_MODELS.map((phone) => {
                const activeColorIndex = selectedColors[phone.id] || 0;
                const activeColor = phone.colors[activeColorIndex];

                return (
                  <div key={phone.id} className="cmp-header-col">
                    {/* 1. Original Apple Product Image with Real-Time Color Switching */}
                    <div className="cmp-img-area">
                      <img
                        key={activeColor.img}
                        src={activeColor.img}
                        alt={`${phone.name} ${activeColor.name}`}
                        className="cmp-device-img cmp-img-animated"
                        loading="eager"
                      />
                    </div>

                    {/* 2. Color Swatches */}
                    <div className="cmp-swatches">
                      {phone.colors.map((c, i) => (
                        <button
                          key={c.name}
                          className={`cmp-swatch ${activeColorIndex === i ? 'cmp-swatch-active' : ''}`}
                          style={{ backgroundColor: c.hex }}
                          onClick={() => handleColorChange(phone.id, i)}
                          title={c.name}
                          aria-label={`${phone.name} ${c.name}`}
                        />
                      ))}
                    </div>

                    {/* Active Color Name */}
                    <span className="cmp-color-name">{activeColor.name}</span>

                    {/* 3. Badge */}
                    {phone.badge ? (
                      <span className="cmp-badge">{phone.badge}</span>
                    ) : (
                      <div className="cmp-badge-spacer" />
                    )}

                    {/* 4. Model Name */}
                    {phone.id === 'se' ? (
                      <div className="cmp-name-se">
                        <span className="cmp-name-brand">iPhone</span>
                        <span className="cmp-name-badge-se">SE</span>
                      </div>
                    ) : (
                      <h3 className="cmp-name">{phone.name}</h3>
                    )}

                    {/* Tagline */}
                    <p className="cmp-tagline">{phone.tagline}</p>

                    {/* Price */}
                    <p className="cmp-price">From {phone.startingPrice}</p>

                    {/* Buy & Learn more buttons */}
                    <div className="cmp-actions">
                      <a href="#buy" className="cmp-buy-btn">
                        Buy
                      </a>
                      <a href={`#${phone.id}`} className="cmp-learn-link">
                        Learn more
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Horizontal Divider Line */}
            <div className="cmp-table-divider" />

            {/* ══════════ SPECS ROWS (Equal line alignment across all 4 columns) ══════════ */}

            {/* Row 1: Display */}
            <div className="cmp-spec-row cmp-row-display">
              {IPHONE_MODELS.map((phone) => {
                const spec = COMPARE_DATA[phone.id];
                return (
                  <div key={phone.id} className="cmp-spec-cell">
                    <span className="cmp-spec-headline">{spec.display.size}</span>
                    <span className="cmp-spec-text">{spec.display.type}</span>
                    <span className="cmp-spec-text">
                      {spec.display.promotion || <Dash />}
                    </span>
                    <span className="cmp-spec-text">
                      {spec.display.alwaysOn || <Dash />}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Row 2: Dynamic Island */}
            <div className="cmp-spec-row cmp-row-island">
              {IPHONE_MODELS.map((phone) => {
                const spec = COMPARE_DATA[phone.id];
                return (
                  <div key={phone.id} className="cmp-spec-cell">
                    {spec.island.has ? (
                      <>
                        <div className="cmp-icon-box">
                          <DynamicIslandIcon />
                        </div>
                        <span className="cmp-spec-subbold">{spec.island.title}</span>
                        {spec.island.desc.map((line, i) => (
                          <span key={i} className="cmp-spec-text">
                            {line}
                          </span>
                        ))}
                      </>
                    ) : (
                      <div className="cmp-dash-cell">
                        <Dash />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Row 3: Emergency SOS */}
            <div className="cmp-spec-row cmp-row-sos">
              {IPHONE_MODELS.map((phone) => {
                const spec = COMPARE_DATA[phone.id];
                return (
                  <div key={phone.id} className="cmp-spec-cell">
                    <div className="cmp-icon-box">
                      <SosIcon />
                    </div>
                    <span className="cmp-spec-text">
                      {spec.sos.satellite || <Dash />}
                    </span>
                    <span className="cmp-spec-text">{spec.sos.emergency}</span>
                    <span className="cmp-spec-text">
                      {spec.sos.crash || <Dash />}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Row 4: Camera */}
            <div className="cmp-spec-row cmp-row-camera">
              {IPHONE_MODELS.map((phone) => {
                const spec = COMPARE_DATA[phone.id];
                return (
                  <div key={phone.id} className="cmp-spec-cell">
                    <div className="cmp-icon-box">{spec.camera.icon}</div>
                    <span className="cmp-spec-subbold cmp-camera-title">{spec.camera.title}</span>
                    <span className="cmp-spec-text">{spec.camera.line1}</span>
                    <span className="cmp-spec-text">
                      {spec.camera.line2 || <Dash />}
                    </span>
                    <div className="cmp-photonic-block">
                      {spec.camera.line3 ? (
                        spec.camera.line3.map((line, i) => (
                          <span key={i} className="cmp-spec-text">
                            {line}
                          </span>
                        ))
                      ) : (
                        <span className="cmp-spec-text">
                          <Dash />
                        </span>
                      )}
                    </div>
                    {spec.camera.line4.map((line, i) => (
                      <span key={i} className="cmp-spec-text">
                        {line}
                      </span>
                    ))}
                  </div>
                );
              })}
            </div>

            {/* Row 5: Action Mode */}
            <div className="cmp-spec-row cmp-row-action">
              {IPHONE_MODELS.map((phone) => {
                const spec = COMPARE_DATA[phone.id];
                return (
                  <div key={phone.id} className="cmp-spec-cell">
                    {spec.action.has ? (
                      <>
                        <div className="cmp-icon-box">
                          <ActionModeIcon />
                        </div>
                        {spec.action.text.map((line, i) => (
                          <span key={i} className="cmp-spec-text">
                            {line}
                          </span>
                        ))}
                      </>
                    ) : (
                      <div className="cmp-dash-cell">
                        <Dash />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Row 6: Battery */}
            <div className="cmp-spec-row cmp-row-battery">
              {IPHONE_MODELS.map((phone) => {
                const spec = COMPARE_DATA[phone.id];
                return (
                  <div key={phone.id} className="cmp-spec-cell">
                    <div className="cmp-icon-box">
                      <BatteryIcon />
                    </div>
                    {spec.battery.map((line, i) => (
                      <span key={i} className="cmp-spec-text">
                        {line}
                      </span>
                    ))}
                  </div>
                );
              })}
            </div>

            {/* Row 7: Chip */}
            <div className="cmp-spec-row cmp-row-chip">
              {IPHONE_MODELS.map((phone) => {
                const spec = COMPARE_DATA[phone.id];
                return (
                  <div key={phone.id} className="cmp-spec-cell">
                    <div className="cmp-icon-box">{spec.chip.icon}</div>
                    <span className="cmp-spec-text">{spec.chip.title}</span>
                    <span className="cmp-spec-text">
                      {spec.chip.sub || <span className="cmp-spec-spacer" />}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Row 8: Biometrics (Face ID / Touch ID) */}
            <div className="cmp-spec-row cmp-row-auth">
              {IPHONE_MODELS.map((phone) => {
                const spec = COMPARE_DATA[phone.id];
                return (
                  <div key={phone.id} className="cmp-spec-cell">
                    <div className="cmp-icon-box">{spec.auth.icon}</div>
                    <span className="cmp-spec-text">{spec.auth.name}</span>
                  </div>
                );
              })}
            </div>

            {/* Row 9: 5G Cellular */}
            <div className="cmp-spec-row cmp-row-cellular">
              {IPHONE_MODELS.map((phone) => {
                const spec = COMPARE_DATA[phone.id];
                return (
                  <div key={phone.id} className="cmp-spec-cell">
                    <div className="cmp-icon-box">
                      <FiveGIcon />
                    </div>
                    <span className="cmp-spec-text">{spec.cellular.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Bottom Links Footer matching user screenshot 3 ── */}
        <div className="cmp-bottom-grid">
          <div className="cmp-bottom-cell" />
          <div className="cmp-bottom-cell">
            <a href="#compare" className="cmp-footer-link">
              Compare all iPhone models
            </a>
          </div>
          <div className="cmp-bottom-cell">
            <a href="#shop" className="cmp-footer-link">
              Shop iPhone
            </a>
          </div>
          <div className="cmp-bottom-cell" />
        </div>
      </div>
    </section>
  );
}
