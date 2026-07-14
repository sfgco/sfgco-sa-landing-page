import { useTranslation } from "react-i18next";
import FadeIn from "./FadeIn";

const ICONS = [
  "🏥", "🏛️", "🎓", "🚚", "🛍️", "🏭", "🌾",
  "🏢", "💳", "⚡", "📡", "🌆", "🌱", "🚗",
];

/** Grid of industries the company serves. */
export default function IndustriesSection() {
  const { t } = useTranslation();
  const industries = t("industries.list", { returnObjects: true }) as string[];

  return (
    <section
      id="industries"
      style={{ background: "#efe6d8", padding: "120px 48px" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
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
              {t("industries.badge")}
            </div>
            <h2
              style={{
                fontSize: 50,
                fontWeight: 800,
                color: "#0a1f14",
                marginBottom: 18,
              }}
            >
              {t("industries.title")}
            </h2>
            <p
              style={{
                color: "#5a7062",
                fontSize: 17,
                lineHeight: 1.75,
                maxWidth: 480,
                margin: "0 auto",
              }}
            >
              {t("industries.subtitle")}
            </p>
          </div>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gap: 16,
          }}
        >
          {industries.map((name, idx) => (
            <FadeIn key={name} delay={idx * 40}>
              <div
                style={{
                  background: "#fff",
                  border: "1.5px solid #e0d4c0",
                  borderRadius: 18,
                  padding: "26px 16px",
                  textAlign: "center",
                  height: "100%",
                }}
              >
                <div style={{ fontSize: 32, marginBottom: 12 }}>
                  {ICONS[idx] ?? "💠"}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#0a1f14",
                    lineHeight: 1.3,
                  }}
                >
                  {name}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
