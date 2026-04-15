import { useTranslation } from "react-i18next";
import FadeIn from "./FadeIn";

const aiCapabilities = [
  { key: "llm", icon: "🧠" },
  { key: "vision", icon: "👁️" },
  { key: "nlp", icon: "💬" },
  { key: "automation", icon: "⚙️" },
  { key: "prediction", icon: "📈" },
  { key: "robotics", icon: "🦾" },
];

export default function TechAIDeepSection() {
  const { t } = useTranslation();

  return (
    <section
      style={{
        background: "linear-gradient(180deg, #060f08 0%, #081a10 100%)",
        padding: "100px 48px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          height: 800,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(46,168,102,0.05), transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
        {/* Section header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
            marginBottom: 80,
          }}
          className="ai-header-grid"
        >
          <FadeIn>
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(46,168,102,0.12)",
                  border: "1px solid rgba(46,168,102,0.25)",
                  borderRadius: 50,
                  padding: "6px 16px",
                  marginBottom: 24,
                }}
              >
                <span style={{ fontSize: 14 }}>🤖</span>
                <span
                  style={{
                    color: "#2ea866",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                  }}
                >
                  {t("tech.ai.badge")}
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
                {t("tech.ai.title")}
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: "rgba(239,230,216,0.65)",
                  lineHeight: 1.8,
                  marginBottom: 24,
                }}
              >
                {t("tech.ai.desc1")}
              </p>
              <p
                style={{
                  fontSize: 16,
                  color: "rgba(239,230,216,0.65)",
                  lineHeight: 1.8,
                }}
              >
                {t("tech.ai.desc2")}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            {/* AI stat card */}
            <div
              style={{
                background: "linear-gradient(145deg, #0d2a1a, #0f3020)",
                border: "1px solid rgba(46,168,102,0.2)",
                borderRadius: 24,
                padding: "44px 36px",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 24,
                  marginBottom: 36,
                }}
              >
                {[
                  { val: "$1.8T", label: t("tech.ai.stat1") },
                  { val: "40%", label: t("tech.ai.stat2") },
                  { val: "300M+", label: t("tech.ai.stat3") },
                  { val: "87%", label: t("tech.ai.stat4") },
                ].map((s) => (
                  <div
                    key={s.label}
                    style={{
                      background: "rgba(46,168,102,0.07)",
                      borderRadius: 12,
                      padding: "20px 16px",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 30,
                        fontWeight: 800,
                        color: "#2ea866",
                        marginBottom: 6,
                      }}
                    >
                      {s.val}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        color: "rgba(239,230,216,0.55)",
                        lineHeight: 1.4,
                      }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
              <div
                style={{
                  borderTop: "1px solid rgba(46,168,102,0.15)",
                  paddingTop: 24,
                  fontSize: 13,
                  color: "rgba(239,230,216,0.5)",
                  textAlign: "center",
                  lineHeight: 1.5,
                }}
              >
                {t("tech.ai.statsNote")}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Capability cards */}
        <FadeIn delay={200}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 20,
            }}
            className="ai-caps-grid"
          >
            {aiCapabilities.map((cap, i) => (
              <div
                key={cap.key}
                className="hover-card-sm"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(46,168,102,0.12)",
                  borderRadius: 16,
                  padding: "28px 24px",
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                  animationDelay: `${i * 60}ms`,
                }}
              >
                <div
                  style={{
                    fontSize: 24,
                    lineHeight: 1,
                    marginTop: 2,
                    flexShrink: 0,
                  }}
                >
                  {cap.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#fff",
                      marginBottom: 6,
                    }}
                  >
                    {t(`tech.ai.cap.${cap.key}.title`)}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "rgba(239,230,216,0.55)",
                      lineHeight: 1.6,
                    }}
                  >
                    {t(`tech.ai.cap.${cap.key}.desc`)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .ai-header-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .ai-caps-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .ai-caps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
