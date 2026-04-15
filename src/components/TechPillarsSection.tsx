import { useTranslation } from "react-i18next";
import FadeIn from "./FadeIn";
import HoverCard from "./HoverCard";

const pillars = [
  {
    icon: "🤖",
    key: "ai",
    color: "#2ea866",
    glow: "rgba(46,168,102,0.15)",
    border: "rgba(46,168,102,0.25)",
  },
  {
    icon: "☁️",
    key: "cloud",
    color: "#c8a84b",
    glow: "rgba(200,168,75,0.15)",
    border: "rgba(200,168,75,0.25)",
  },
  {
    icon: "🚗",
    key: "mobility",
    color: "#4b8ec8",
    glow: "rgba(75,142,200,0.15)",
    border: "rgba(75,142,200,0.25)",
  },
];

export default function TechPillarsSection() {
  const { t } = useTranslation();

  return (
    <section
      style={{
        background: "#060f08",
        padding: "100px 48px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div
              style={{
                color: "#c8a84b",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 2.5,
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              {t("tech.pillars.badge")}
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 48,
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.15,
                marginBottom: 20,
                letterSpacing: -0.5,
              }}
            >
              {t("tech.pillars.title")}
            </h2>
            <p
              style={{
                fontSize: 17,
                color: "rgba(239,230,216,0.65)",
                maxWidth: 560,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              {t("tech.pillars.subtitle")}
            </p>
          </div>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 28,
          }}
          className="tech-pillars-grid"
        >
          {pillars.map((p, i) => (
            <FadeIn key={p.key} delay={i * 120}>
              <HoverCard variant="lg">
                <div
                  style={{
                    background: `linear-gradient(145deg, #0a1f14, #0d2a1a)`,
                    border: `1px solid ${p.border}`,
                    borderRadius: 20,
                    padding: "44px 36px",
                    height: "100%",
                    boxSizing: "border-box",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: -40,
                      right: -40,
                      width: 160,
                      height: 160,
                      borderRadius: "50%",
                      background: `radial-gradient(circle, ${p.glow}, transparent 70%)`,
                      pointerEvents: "none",
                    }}
                  />
                  <div
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: 16,
                      background: `${p.glow}`,
                      border: `1px solid ${p.border}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 30,
                      marginBottom: 24,
                    }}
                  >
                    {p.icon}
                  </div>
                  <div
                    style={{
                      color: p.color,
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: 2,
                      textTransform: "uppercase",
                      marginBottom: 12,
                    }}
                  >
                    {t(`tech.pillars.${p.key}.label`)}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 26,
                      fontWeight: 700,
                      color: "#fff",
                      marginBottom: 16,
                      lineHeight: 1.25,
                    }}
                  >
                    {t(`tech.pillars.${p.key}.title`)}
                  </h3>
                  <p
                    style={{
                      fontSize: 15,
                      color: "rgba(239,230,216,0.65)",
                      lineHeight: 1.75,
                    }}
                  >
                    {t(`tech.pillars.${p.key}.desc`)}
                  </p>
                </div>
              </HoverCard>
            </FadeIn>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .tech-pillars-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
