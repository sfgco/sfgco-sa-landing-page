import type { ReactNode } from "react";
import Icon from "../Icon";

interface Badge {
  value: string;
  label: string;
  corner: "tl" | "tr" | "bl" | "br";
  tone?: "gold" | "dark";
}

interface PanelFrameProps {
  accent: string;
  icon: React.ComponentProps<typeof Icon>["name"];
  eyebrow: string;
  badges?: Badge[];
  children: ReactNode;
  dark?: boolean;
}

const CORNER_STYLE: Record<Badge["corner"], React.CSSProperties> = {
  tl: { top: -18, left: -18 },
  tr: { top: -18, right: -18 },
  bl: { bottom: -18, left: -18 },
  br: { bottom: -18, right: -18 },
};

/** Shared "dark glass dashboard" card used by every service/case-study illustration for a consistent premium visual language. */
export default function PanelFrame({
  accent,
  icon,
  eyebrow,
  badges = [],
  children,
  dark = true,
}: Readonly<PanelFrameProps>) {
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          background: dark
            ? "linear-gradient(160deg, #0b2d1e 0%, #0a1f14 100%)"
            : "linear-gradient(160deg, #123d29 0%, #0b2d1e 100%)",
          border: "1px solid rgba(239,230,216,0.1)",
          borderRadius: 26,
          padding: 32,
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 30px 70px rgba(6,15,8,0.35)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background: `linear-gradient(90deg, ${accent} 0%, #c8a84b 100%)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 260,
            height: 260,
            borderRadius: "50%",
            top: -100,
            right: -100,
            background: `radial-gradient(circle, ${accent}22 0%, transparent 65%)`,
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 26,
            position: "relative",
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 12,
              background: `${accent}20`,
              border: `1px solid ${accent}45`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: accent,
              flexShrink: 0,
            }}
          >
            <Icon name={icon} size={20} />
          </div>
          <span
            style={{
              color: "rgba(239,230,216,0.6)",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            {eyebrow}
          </span>
        </div>

        <div style={{ position: "relative" }}>{children}</div>
      </div>

      {badges.map((b) => (
        <div
          key={b.label}
          style={{
            position: "absolute",
            ...CORNER_STYLE[b.corner],
            background: b.tone === "dark" ? "rgba(10,31,20,0.92)" : "#c8a84b",
            border:
              b.tone === "dark" ? "1px solid rgba(239,230,216,0.14)" : "none",
            backdropFilter: b.tone === "dark" ? "blur(12px)" : undefined,
            color: b.tone === "dark" ? "#fff" : "#0a1f14",
            borderRadius: 16,
            padding: "12px 18px",
            boxShadow:
              b.tone === "dark"
                ? "0 14px 40px rgba(0,0,0,0.32)"
                : "0 14px 40px rgba(200,168,75,0.4)",
            zIndex: 2,
          }}
        >
          <div
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 800,
              fontSize: 20,
              lineHeight: 1,
            }}
          >
            {b.value}
          </div>
          <div
            style={{
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: 1.2,
              marginTop: 4,
              opacity: 0.85,
              textTransform: "uppercase",
            }}
          >
            {b.label}
          </div>
        </div>
      ))}
    </div>
  );
}
