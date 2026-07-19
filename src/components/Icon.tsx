const PATHS: Record<string, React.ReactNode> = {
  cloud: (
    <path d="M7 18h10a4 4 0 0 0 .6-7.96 5.5 5.5 0 0 0-10.6 1.7A3.5 3.5 0 0 0 7 18Z" />
  ),
  database: (
    <>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v12c0 1.66 3.13 3 7 3s7-1.34 7-3V6" />
      <path d="M5 12c0 1.66 3.13 3 7 3s7-1.34 7-3" />
    </>
  ),
  devices: (
    <>
      <rect x="2.5" y="5" width="14" height="10" rx="1.5" />
      <path d="M6 19h6" />
      <rect x="16.5" y="8" width="5" height="9" rx="1.2" />
      <path d="M18.5 15.2h1" />
    </>
  ),
  brain: (
    <path d="M9 4.5a2.5 2.5 0 0 0-2.5 2.5v.2A2.5 2.5 0 0 0 5 9.5a2.5 2.5 0 0 0 1 4.7 2.5 2.5 0 0 0 2.7 3.6A2.5 2.5 0 0 0 11.2 20V6.7A2.2 2.2 0 0 0 9 4.5Zm6 0a2.5 2.5 0 0 1 2.5 2.5v.2A2.5 2.5 0 0 1 19 9.5a2.5 2.5 0 0 1-1 4.7 2.5 2.5 0 0 1-2.7 3.6A2.5 2.5 0 0 1 12.8 20V6.7A2.2 2.2 0 0 1 15 4.5Z" />
  ),
  link: (
    <>
      <path d="M9.5 14.5 14.5 9.5" />
      <path d="M8.5 16.5 6 19a3.5 3.5 0 0 1-5-5l2.5-2.5" />
      <path d="M15.5 7.5 18 5a3.5 3.5 0 1 1 5 5l-2.5 2.5" />
    </>
  ),
  shield: (
    <path d="M12 3 4.5 5.8v5.4c0 4.7 3.2 8.9 7.5 10 4.3-1.1 7.5-5.3 7.5-10V5.8L12 3Z" />
  ),
  shieldCheck: (
    <>
      <path d="M12 3 4.5 5.8v5.4c0 4.7 3.2 8.9 7.5 10 4.3-1.1 7.5-5.3 7.5-10V5.8L12 3Z" />
      <path d="M9 12.2l2 2 4-4.2" />
    </>
  ),
  grid: (
    <>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1" />
    </>
  ),
  landmark: (
    <>
      <path d="M3 21h18" />
      <path d="M4 21V10M9 21V10M15 21V10M20 21V10" />
      <path d="M2.5 10 12 4l9.5 6Z" />
    </>
  ),
  heart: (
    <path d="M12 20.5S3.5 15.4 3.5 9.4a4.4 4.4 0 0 1 8-2.5 4.4 4.4 0 0 1 8 2.5c0 6-8.5 11.1-8.5 11.1Z" />
  ),
  bag: (
    <>
      <rect x="3.5" y="7.5" width="17" height="13" rx="2" />
      <path d="M8 7.5V6a4 4 0 0 1 8 0v1.5" />
    </>
  ),
  truck: (
    <>
      <rect x="1.5" y="7" width="12" height="9" rx="1" />
      <path d="M13.5 10.5H17l3.5 3v2.5h-3" />
      <circle cx="6" cy="18" r="1.6" />
      <circle cx="16.5" cy="18" r="1.6" />
    </>
  ),
  factory: (
    <>
      <path d="M3 21V11l5 3.5V11l5 3.5V9l6 3v9Z" />
      <path d="M7 21v-4M12 21v-4M17 21v-4" />
    </>
  ),
  cap: (
    <>
      <path d="M2 9.5 12 5l10 4.5-10 4.5-10-4.5Z" />
      <path d="M6 11.6v4.4c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-4.4" />
    </>
  ),
  bank: (
    <>
      <path d="M3 10 12 4l9 6" />
      <path d="M4.5 10v9M9 10v9M15 10v9M19.5 10v9" />
      <path d="M2.5 19h19" />
    </>
  ),
  rocket: (
    <>
      <path d="M13.5 3.5c3.5.5 6 3 6.5 6.5-2.3 1-4.6 1.9-7 3.5-1.6-2.4-2.5-4.7-3.5-7 1.9-1.6 2.9-2.6 4-3Z" />
      <path d="M9.5 13.5 4 15l1.5-5.5" />
      <path d="M10.5 15.5 9 20.5l-2-2 2-3" />
      <circle cx="14.5" cy="8.5" r="1.3" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.3" />
      <path d="M2.8 19c.6-3 3-5 6.2-5s5.6 2 6.2 5" />
      <path d="M15.5 5.2a3.3 3.3 0 0 1 0 6.4" />
      <path d="M17.2 14.3c2.6.4 4.6 2.2 5 4.7" />
    </>
  ),
  sparkles: (
    <>
      <path d="M11 3.5 12.3 8l4.2 1.5-4.2 1.5L11 15.5 9.7 11 5.5 9.5 9.7 8Z" />
      <path d="M18 14.5 18.7 17l2.3.8-2.3.8-.7 2.4-.7-2.4-2.3-.8 2.3-.8Z" />
    </>
  ),
  lock: (
    <>
      <rect x="4.5" y="10.5" width="15" height="10" rx="2" />
      <path d="M7.5 10.5V7a4.5 4.5 0 0 1 9 0v3.5" />
    </>
  ),
  zap: <path d="M12.5 3 5 13.5h5.5L11 21l7.5-10.5H13Z" />,
  handshake: (
    <>
      <path d="M2.5 12.5 6 9l3 2.3 3.3-3 3 2 3.2-2.5" />
      <path d="M2.5 12.5 6.3 18l3-1.7 1.7 2 3-1.7 1.7 1.7 3.3-3-3.7-6" />
    </>
  ),
  refresh: (
    <>
      <path d="M20 11a8 8 0 0 0-14.6-4.4M4 13a8 8 0 0 0 14.6 4.4" />
      <path d="M5 3.5V7h3.5M19 20.5V17h-3.5" />
    </>
  ),
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m20 20-4.4-4.4" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3 2.5 8l9.5 5 9.5-5Z" />
      <path d="m2.5 13 9.5 5 9.5-5" />
      <path d="m2.5 18 9.5 5 9.5-5" />
    </>
  ),
  code: <path d="m9 8-5 4.5L9 17M15 8l5 4.5L15 17M13.5 5.5l-3 13" />,
  headset: (
    <>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <rect x="3" y="13" width="4" height="6" rx="1.4" />
      <rect x="17" y="13" width="4" height="6" rx="1.4" />
      <path d="M19 19.5v.5a3 3 0 0 1-3 3h-3.5" />
    </>
  ),
  check: <path d="M4.5 12.5 9.5 17.5 19.5 6.5" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  mail: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="2" />
      <path d="m3 6.5 9 6.5 9-6.5" />
    </>
  ),
  phone: (
    <path d="M6.6 4.5h3.2l1.5 3.8-2 1.6a12.4 12.4 0 0 0 5.3 5.3l1.6-2 3.8 1.5v3.2c0 1-.8 1.7-1.8 1.6-6.8-.6-12.3-6.1-12.9-12.9-.1-1 .7-1.8 1.6-1.8Z" />
  ),
  pin: (
    <>
      <path d="M12 21s-6.5-5.7-6.5-11A6.5 6.5 0 0 1 18.5 10c0 5.3-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.3" />
    </>
  ),
  quote: <path d="M6.5 8.5c-2 1-3 2.9-3 5.2 0 2 1.4 3.5 3.2 3.5 1.7 0 3-1.3 3-3 0-1.6-1.1-2.8-2.6-3 .2-1.4 1.2-2.6 2.6-3.2Zm10.3 0c-2 1-3 2.9-3 5.2 0 2 1.4 3.5 3.2 3.5 1.7 0 3-1.3 3-3 0-1.6-1.1-2.8-2.6-3 .2-1.4 1.2-2.6 2.6-3.2Z" />,
  server: (
    <>
      <rect x="3" y="4" width="18" height="6.5" rx="1.5" />
      <rect x="3" y="13.5" width="18" height="6.5" rx="1.5" />
      <path d="M7 7.2h.01M7 16.7h.01" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.5 2.4 3.8 5.3 3.8 8.5s-1.3 6.1-3.8 8.5c-2.5-2.4-3.8-5.3-3.8-8.5S9.5 5.9 12 3.5Z" />
    </>
  ),
};

interface IconProps {
  name: keyof typeof PATHS;
  size?: number;
  color?: string;
  strokeWidth?: number;
}

/** Shared line-icon set — every icon in the site should come from here, never emoji. */
export default function Icon({
  name,
  size = 22,
  color = "currentColor",
  strokeWidth = 1.7,
}: Readonly<IconProps>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name] ?? PATHS.grid}
    </svg>
  );
}
