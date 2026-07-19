import PanelFrame from "./PanelFrame";
import Icon from "../Icon";

interface BarPanelProps {
  accent: string;
  icon: React.ComponentProps<typeof Icon>["name"];
  eyebrow: string;
  bars: { label: string; pct: number }[];
  badge: { value: string; label: string };
}

/** Metric-bar dashboard illustration — used for Cloud Infrastructure & Databases. */
export default function BarPanel({
  accent,
  icon,
  eyebrow,
  bars,
  badge,
}: Readonly<BarPanelProps>) {
  return (
    <PanelFrame
      accent={accent}
      icon={icon}
      eyebrow={eyebrow}
      badges={[
        { value: badge.value, label: badge.label, corner: "br", tone: "gold" },
      ]}
    >
      {bars.map((bar, idx) => (
        <div key={bar.label} style={{ marginBottom: idx === bars.length - 1 ? 0 : 18 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 7,
            }}
          >
            <span style={{ color: "rgba(239,230,216,0.75)", fontSize: 13 }}>
              {bar.label}
            </span>
            <span style={{ color: "#fff", fontSize: 13, fontWeight: 700 }}>
              {bar.pct}%
            </span>
          </div>
          <div
            style={{
              background: "rgba(255,255,255,0.08)",
              borderRadius: 50,
              height: 8,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${bar.pct}%`,
                height: "100%",
                background: `linear-gradient(90deg, ${accent}, #c8a84b)`,
                borderRadius: 50,
              }}
            />
          </div>
        </div>
      ))}
    </PanelFrame>
  );
}
