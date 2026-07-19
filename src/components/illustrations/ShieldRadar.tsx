import PanelFrame from "./PanelFrame";
import Icon from "../Icon";

interface ShieldRadarProps {
  accent: string;
  icon: React.ComponentProps<typeof Icon>["name"];
  eyebrow: string;
  stats: { label: string; value: string }[];
  badge: { value: string; label: string };
}

/** Radar-sweep + shield illustration — the darker Cybersecurity treatment. */
export default function ShieldRadar({
  accent,
  icon,
  eyebrow,
  stats,
  badge,
}: Readonly<ShieldRadarProps>) {
  return (
    <PanelFrame
      accent={accent}
      icon={icon}
      eyebrow={eyebrow}
      dark
      badges={[
        { value: badge.value, label: badge.label, corner: "br", tone: "gold" },
      ]}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 24,
          marginBottom: 22,
        }}
      >
        <div style={{ position: "relative", width: 140, height: 140, flexShrink: 0 }}>
          <svg viewBox="0 0 140 140" width="140" height="140">
            <circle cx="70" cy="70" r="62" stroke={`${accent}30`} strokeWidth="1" fill="none" />
            <circle cx="70" cy="70" r="42" stroke={`${accent}40`} strokeWidth="1" fill="none" />
            <circle cx="70" cy="70" r="22" stroke={`${accent}50`} strokeWidth="1" fill="none" />
            <line x1="70" y1="8" x2="70" y2="132" stroke={`${accent}22`} strokeWidth="1" />
            <line x1="8" y1="70" x2="132" y2="70" stroke={`${accent}22`} strokeWidth="1" />
            <g style={{ transformOrigin: "70px 70px", animation: "spinSlow 5s linear infinite" }}>
              <path d="M70 70 L70 8 A62 62 0 0 1 118 38 Z" fill={`${accent}25`} />
            </g>
            <circle cx="96" cy="46" r="3.5" fill="#c8a84b" />
            <circle cx="48" cy="92" r="3" fill="#c8a84b" opacity="0.7" />
          </svg>
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: "50%",
                background: "rgba(200,168,75,0.15)",
                border: "1px solid #c8a84b",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#c8a84b",
              }}
            >
              <Icon name="shieldCheck" size={17} />
            </div>
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
          {stats.map((s) => (
            <div key={s.label}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "rgba(239,230,216,0.7)", fontSize: 12.5 }}>
                  {s.label}
                </span>
                <span style={{ color: "#fff", fontSize: 12.5, fontWeight: 700 }}>
                  {s.value}
                </span>
              </div>
              <div
                style={{
                  height: 4,
                  borderRadius: 50,
                  background: "rgba(255,255,255,0.08)",
                  marginTop: 5,
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 50,
                    background: `${accent}70`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </PanelFrame>
  );
}
