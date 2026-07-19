interface TechBadgeProps {
  name: string;
  mark: string;
  color: string;
  compact?: boolean;
}

/** Icon-tile representation of a technology partner — a letter-mark badge instead of a fetched brand logo or plain text. */
export default function TechBadge({
  name,
  mark,
  color,
  compact = false,
}: Readonly<TechBadgeProps>) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        background: "#fff",
        border: "1.5px solid #ede5d9",
        borderRadius: 16,
        padding: compact ? "10px 16px" : "14px 20px",
        minWidth: compact ? 150 : 190,
      }}
    >
      <div
        style={{
          width: compact ? 34 : 40,
          height: compact ? 34 : 40,
          borderRadius: 10,
          background: `${color}16`,
          color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Playfair Display', serif",
          fontWeight: 800,
          fontSize: compact ? 12 : 13,
          flexShrink: 0,
          letterSpacing: -0.5,
        }}
      >
        {mark}
      </div>
      <span
        style={{
          fontSize: compact ? 12.5 : 13.5,
          fontWeight: 700,
          color: "#0a1f14",
          whiteSpace: "nowrap",
        }}
      >
        {name}
      </span>
    </div>
  );
}
