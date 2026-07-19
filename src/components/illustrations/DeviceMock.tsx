import PanelFrame from "./PanelFrame";
import Icon from "../Icon";

interface DeviceMockProps {
  accent: string;
  icon: React.ComponentProps<typeof Icon>["name"];
  eyebrow: string;
  badge: { value: string; label: string };
}

/** Browser + phone frame illustration — used for Mobile & Web Development. */
export default function DeviceMock({
  accent,
  icon,
  eyebrow,
  badge,
}: Readonly<DeviceMockProps>) {
  return (
    <PanelFrame
      accent={accent}
      icon={icon}
      eyebrow={eyebrow}
      badges={[
        { value: badge.value, label: badge.label, corner: "br", tone: "gold" },
      ]}
    >
      <div style={{ display: "flex", alignItems: "flex-end", gap: 18 }}>
        {/* Browser window */}
        <div
          style={{
            flex: 1,
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(239,230,216,0.12)",
            borderRadius: 12,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 5,
              padding: "9px 12px",
              borderBottom: "1px solid rgba(239,230,216,0.1)",
            }}
          >
            {["#e05252", "#e0b552", "#52c97e"].map((c) => (
              <span
                key={c}
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: c,
                  opacity: 0.8,
                }}
              />
            ))}
          </div>
          <div style={{ padding: 16 }}>
            <div
              style={{
                height: 10,
                width: "70%",
                borderRadius: 4,
                background: `${accent}55`,
                marginBottom: 10,
              }}
            />
            <div
              style={{
                height: 7,
                width: "90%",
                borderRadius: 4,
                background: "rgba(239,230,216,0.15)",
                marginBottom: 7,
              }}
            />
            <div
              style={{
                height: 7,
                width: "60%",
                borderRadius: 4,
                background: "rgba(239,230,216,0.15)",
                marginBottom: 16,
              }}
            />
            <div style={{ display: "flex", gap: 8 }}>
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: 34,
                    borderRadius: 8,
                    background: "rgba(255,255,255,0.06)",
                    border: `1px solid ${accent}30`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Phone frame */}
        <div
          style={{
            width: 74,
            height: 148,
            borderRadius: 16,
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(239,230,216,0.16)",
            padding: 8,
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 9,
              background: `linear-gradient(160deg, ${accent}33, transparent)`,
              padding: 10,
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
          >
            <div
              style={{
                height: 6,
                width: "60%",
                borderRadius: 3,
                background: "rgba(239,230,216,0.3)",
              }}
            />
            <div
              style={{
                flex: 1,
                borderRadius: 6,
                background: "rgba(255,255,255,0.08)",
                marginTop: 4,
              }}
            />
            <div
              style={{
                height: 18,
                borderRadius: 5,
                background: "#c8a84b",
              }}
            />
          </div>
        </div>
      </div>
    </PanelFrame>
  );
}
