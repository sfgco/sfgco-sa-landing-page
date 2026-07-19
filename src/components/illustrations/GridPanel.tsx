import PanelFrame from "./PanelFrame";
import Icon from "../Icon";

interface GridPanelProps {
  accent: string;
  icon: React.ComponentProps<typeof Icon>["name"];
  eyebrow: string;
  modules: { label: string; icon: React.ComponentProps<typeof Icon>["name"] }[];
  badge: { value: string; label: string };
}

/** Module-grid illustration — used for ERP Solutions. */
export default function GridPanel({
  accent,
  icon,
  eyebrow,
  modules,
  badge,
}: Readonly<GridPanelProps>) {
  return (
    <PanelFrame
      accent={accent}
      icon={icon}
      eyebrow={eyebrow}
      badges={[
        { value: badge.value, label: badge.label, corner: "br", tone: "gold" },
      ]}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 12,
        }}
      >
        {modules.map((m) => (
          <div
            key={m.label}
            style={{
              background: "rgba(255,255,255,0.05)",
              border: `1px solid ${accent}30`,
              borderRadius: 12,
              padding: "16px 10px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 9,
                background: `${accent}20`,
                color: accent,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 10px",
              }}
            >
              <Icon name={m.icon} size={16} />
            </div>
            <div style={{ fontSize: 11, fontWeight: 600, color: "rgba(239,230,216,0.8)" }}>
              {m.label}
            </div>
          </div>
        ))}
      </div>
    </PanelFrame>
  );
}
