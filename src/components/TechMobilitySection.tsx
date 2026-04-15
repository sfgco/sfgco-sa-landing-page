import { useTranslation } from "react-i18next";
import FadeIn from "./FadeIn";

const mobilityAreas = [
  { key: "ev", icon: "⚡", color: "#4b8ec8", border: "rgba(75,142,200,0.25)" },
  { key: "autonomous", icon: "🚗", color: "#4b8ec8", border: "rgba(75,142,200,0.2)" },
  { key: "smart", icon: "🏙️", color: "#2ea866", border: "rgba(46,168,102,0.2)" },
  { key: "shared", icon: "🔗", color: "#c8a84b", border: "rgba(200,168,75,0.2)" },
  { key: "logistics", icon: "📦", color: "#4b8ec8", border: "rgba(75,142,200,0.2)" },
  { key: "green", icon: "🌱", color: "#2ea866", border: "rgba(46,168,102,0.2)" },
];

export default function TechMobilitySection() {
  const { t } = useTranslation();

  return (
    <section
      style={{
        background: "linear-gradient(180deg, #0a1f14 0%, #060f08 100%)",
        padding: "100px 48px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -80,
          left: -80,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(75,142,200,0.07), transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
        {/* Layout: text left, visual right */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "start",
            marginBottom: 72,
          }}
          className="mobility-header-grid"
        >
          <FadeIn>
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(75,142,200,0.1)",
                  border: "1px solid rgba(75,142,200,0.25)",
                  borderRadius: 50,
                  padding: "6px 16px",
                  marginBottom: 24,
                }}
              >
                <span style={{ fontSize: 14 }}>🚗</span>
                <span
                  style={{
                    color: "#4b8ec8",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                  }}
                >
                  {t("tech.mobility.badge")}
                </span>
              </div>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 46,
                  fontWeight: 800,
                  color: "#fff",
                  lineHeight: 1.15,
                  marginBottom: 24,
                  letterSpacing: -0.5,
                }}
              >
                {t("tech.mobility.title")}
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: "rgba(239,230,216,0.65)",
                  lineHeight: 1.8,
                  marginBottom: 20,
                }}
              >
                {t("tech.mobility.desc1")}
              </p>
              <p
                style={{
                  fontSize: 16,
                  color: "rgba(239,230,216,0.65)",
                  lineHeight: 1.8,
                }}
              >
                {t("tech.mobility.desc2")}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            {/* Mobility market visual */}
            <div
              style={{
                background: "linear-gradient(145deg, #0a1f14, #0d2a1a)",
                border: "1px solid rgba(75,142,200,0.2)",
                borderRadius: 24,
                padding: "36px 32px",
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "rgba(239,230,216,0.5)",
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  marginBottom: 24,
                }}
              >
                {t("tech.mobility.marketLabel")}
              </div>

              {[
                { label: t("tech.mobility.bar1.label"), pct: 78, val: "$2.1T", color: "#4b8ec8" },
                { label: t("tech.mobility.bar2.label"), pct: 61, val: "$890B", color: "#2ea866" },
                { label: t("tech.mobility.bar3.label"), pct: 45, val: "$640B", color: "#c8a84b" },
                { label: t("tech.mobility.bar4.label"), pct: 32, val: "$410B", color: "#4b8ec8" },
              ].map((item) => (
                <div key={item.label} style={{ marginBottom: 20 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: 8,
                    }}
                  >
                    <span
                      style={{ fontSize: 13, color: "rgba(239,230,216,0.7)" }}
                    >
                      {item.label}
                    </span>
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: item.color,
                      }}
                    >
                      {item.val}
                    </span>
                  </div>
                  <div
                    style={{
                      height: 6,
                      background: "rgba(255,255,255,0.06)",
                      borderRadius: 4,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: `${item.pct}%`,
                        background: `linear-gradient(90deg, ${item.color}, ${item.color}88)`,
                        borderRadius: 4,
                      }}
                    />
                  </div>
                </div>
              ))}

              <div
                style={{
                  borderTop: "1px solid rgba(75,142,200,0.12)",
                  paddingTop: 20,
                  marginTop: 8,
                  fontSize: 12,
                  color: "rgba(239,230,216,0.4)",
                }}
              >
                {t("tech.mobility.marketNote")}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Focus areas grid */}
        <FadeIn delay={200}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 20,
            }}
            className="mobility-grid"
          >
            {mobilityAreas.map((area, i) => (
              <div
                key={area.key}
                className="hover-card-sm"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: `1px solid ${area.border}`,
                  borderRadius: 16,
                  padding: "28px 24px",
                  animationDelay: `${i * 60}ms`,
                }}
              >
                <div style={{ fontSize: 28, marginBottom: 16 }}>{area.icon}</div>
                <h4
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: 8,
                  }}
                >
                  {t(`tech.mobility.area.${area.key}.title`)}
                </h4>
                <p
                  style={{
                    fontSize: 13,
                    color: "rgba(239,230,216,0.55)",
                    lineHeight: 1.65,
                  }}
                >
                  {t(`tech.mobility.area.${area.key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .mobility-header-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .mobility-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .mobility-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
