/**
 * Custom abstract illustration for the homepage hero — sun/energy, layered
 * green growth, and an ascending investment curve, built entirely from SVG
 * primitives in the site's existing gold/green palette (no raster imagery).
 */
export default function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 440 440"
      width="100%"
      height="100%"
      style={{ display: "block" }}
    >
      <defs>
        <linearGradient id="hero-sun" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e8cc7a" />
          <stop offset="100%" stopColor="#c8a84b" />
        </linearGradient>
        <linearGradient id="hero-hill-back" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a8050" />
          <stop offset="100%" stopColor="#0a4a2e" />
        </linearGradient>
        <linearGradient id="hero-hill-front" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2ea866" />
          <stop offset="100%" stopColor="#0e633d" />
        </linearGradient>
        <linearGradient id="hero-bar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8cc7a" />
          <stop offset="100%" stopColor="#c8a84b" />
        </linearGradient>
      </defs>

      {/* Sun + radiating rays — renewable energy */}
      <g opacity="0.95">
        <circle cx="330" cy="86" r="34" fill="url(#hero-sun)" />
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * Math.PI) / 4;
          const x1 = 330 + Math.cos(angle) * 48;
          const y1 = 86 + Math.sin(angle) * 48;
          const x2 = 330 + Math.cos(angle) * 62;
          const y2 = 86 + Math.sin(angle) * 62;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#c8a84b"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.6"
            />
          );
        })}
      </g>

      {/* Layered hills — sustainable green growth */}
      <path
        d="M0,260 C70,215 130,290 210,245 C290,200 350,255 440,215 L440,440 L0,440 Z"
        fill="url(#hero-hill-back)"
        opacity="0.55"
      />
      <path
        d="M0,310 C80,270 160,335 240,295 C320,255 380,300 440,270 L440,440 L0,440 Z"
        fill="url(#hero-hill-front)"
        opacity="0.9"
      />

      {/* Ascending growth bars — investment / business growth */}
      <g>
        <rect x="60" y="360" width="26" height="46" rx="6" fill="url(#hero-bar)" opacity="0.85" />
        <rect x="98" y="336" width="26" height="70" rx="6" fill="url(#hero-bar)" opacity="0.9" />
        <rect x="136" y="300" width="26" height="106" rx="6" fill="url(#hero-bar)" />
      </g>

      {/* Leaf accent — innovation / sustainability */}
      <path
        d="M300 330c-30-6-52-30-52-60 0-24 14-42 30-58 16 16 30 34 30 58 0 30-8 50-8 60z"
        fill="none"
        stroke="#efe6d8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.55"
      />
      <path
        d="M278 260v70"
        stroke="#efe6d8"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}
