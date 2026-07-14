import { useTranslation } from "react-i18next";
import FadeIn from "./FadeIn";
import HoverCard from "./HoverCard";

const REASON_KEYS = ["reason1", "reason2", "reason3", "reason4", "reason5", "reason6"];

const CARDS = [
  {
    icon: "🚀",
    title: "Rapid Delivery",
    sub: "Agile sprint cycles",
    bg: "#0e633d",
    light: true,
  },
  {
    icon: "🔒",
    title: "Secure by Design",
    sub: "Enterprise-grade security",
    bg: "#efe6d8",
    light: false,
  },
  {
    icon: "☁️",
    title: "Cloud-Native",
    sub: "Built to scale",
    bg: "#efe6d8",
    light: false,
  },
  {
    icon: "🤖",
    title: "AI-Powered",
    sub: "Intelligent automation",
    bg: "#0e633d",
    light: true,
  },
  {
    icon: "🌍",
    title: "Cross-Industry Reach",
    sub: "15+ sectors served",
    bg: "#c8a84b",
    light: false,
  },
  {
    icon: "🤝",
    title: "Long-Term Partner",
    sub: "End-to-end support",
    bg: "#f5f1eb",
    light: false,
  },
];

/** Two-column section: numbered reasons on the left, feature cards on the right. */
export default function WhySFGCO() {
  const { t } = useTranslation();

  return (
    <section style={{ background: "#fff", padding: "120px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 88,
            alignItems: "center",
          }}
        >
          <FadeIn>
            <div>
              <div
                style={{
                  color: "#0e633d",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: 2.5,
                  textTransform: "uppercase",
                  marginBottom: 18,
                }}
              >
                {t("whySFGCO.badge")}
              </div>
              <h2
                style={{
                  fontSize: 50,
                  fontWeight: 800,
                  color: "#0a1f14",
                  lineHeight: 1.13,
                  marginBottom: 24,
                }}
              >
                {t("whySFGCO.title1")}
                <br />
                <span style={{ color: "#0e633d" }}>
                  {t("whySFGCO.titleHighlight")}
                </span>
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: "#5a7062",
                  lineHeight: 1.85,
                  marginBottom: 44,
                }}
              >
                {t("whySFGCO.subtitle")}
              </p>

              {REASON_KEYS.map((key, idx) => (
                <div
                  key={key}
                  style={{ display: "flex", gap: 20, marginBottom: 28 }}
                >
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#c8a84b",
                      letterSpacing: 1,
                      minWidth: 26,
                      paddingTop: 3,
                    }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h4
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 17,
                        fontWeight: 700,
                        color: "#0a1f14",
                        marginBottom: 6,
                      }}
                    >
                      {t(`whySFGCO.${key}.title`)}
                    </h4>
                    <p
                      style={{
                        fontSize: 14,
                        color: "#6b7c6e",
                        lineHeight: 1.7,
                      }}
                    >
                      {t(`whySFGCO.${key}.desc`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
              }}
            >
              {CARDS.map((card) => (
                <HoverCard
                  key={card.title}
                  style={{
                    background: card.bg,
                    borderRadius: 20,
                    padding: "28px 24px",
                    cursor: "pointer",
                  }}
                >
                  <div style={{ fontSize: 34, marginBottom: 14 }}>
                    {card.icon}
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: card.light ? "#efe6d8" : "#0a1f14",
                      marginBottom: 5,
                    }}
                  >
                    {card.title}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: card.light ? "rgba(239,230,216,0.65)" : "#9aaa9e",
                    }}
                  >
                    {card.sub}
                  </div>
                </HoverCard>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
