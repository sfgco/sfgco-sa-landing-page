import { useTranslation } from "react-i18next";
import FadeIn from "./FadeIn";
import HoverCard from "./HoverCard";

const SLOTS = [1, 2, 3, 4, 5];

const PRINCIPLE_KEYS = ["alignment", "growth", "governance"];

const PRINCIPLE_ICONS: Record<string, React.ReactNode> = {
  alignment: (
    <path d="M12 2l2.6 5.9 6.4.6-4.8 4.3 1.4 6.2L12 15.9 6.4 19l1.4-6.2-4.8-4.3 6.4-.6z" />
  ),
  growth: <path d="M3 20h18M6 20V10m6 10V4m6 16v-7" />,
  governance: (
    <path d="M2.5 12S6 5 12 5s9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7zM12 15a3 3 0 100-6 3 3 0 000 6z" />
  ),
};

/**
 * Success Partners — partnership philosophy, principles, and a logo-strip carousel.
 * Real partner logos are not yet supplied; renders placeholder slots ready
 * to be swapped for real assets (per the source document: "displayed as a logo strip only").
 */
export default function PartnersSection() {
  const { t } = useTranslation();
  const loop = [...SLOTS, ...SLOTS];

  return (
    <section
      id="partners"
      style={{ background: "#efe6d8", padding: "120px 48px 100px" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
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
              {t("partners.badge")}
            </div>
            <h2
              style={{
                fontSize: 40,
                fontWeight: 800,
                color: "#0a1f14",
                marginBottom: 24,
              }}
            >
              {t("partners.title")}
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "#5a7062",
                lineHeight: 1.9,
                maxWidth: 680,
                margin: "0 auto",
              }}
            >
              {t("partners.body")}
            </p>
          </div>
        </FadeIn>

        <div
          className="grid-3-cols"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
            marginBottom: 80,
          }}
        >
          {PRINCIPLE_KEYS.map((key, idx) => (
            <FadeIn key={key} delay={idx * 80}>
              <HoverCard
                style={{
                  background: idx === 1 ? "#0e633d" : "#fff",
                  borderRadius: 22,
                  padding: 34,
                  height: "100%",
                  border: idx === 1 ? "none" : "1.5px solid #e0d4c0",
                  boxShadow:
                    idx === 1
                      ? "0 20px 60px rgba(14,99,61,0.25)"
                      : "0 4px 20px rgba(14,99,61,0.06)",
                }}
              >
                <div
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 14,
                    background:
                      idx === 1
                        ? "rgba(200,168,75,0.2)"
                        : "rgba(14,99,61,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 22,
                  }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={idx === 1 ? "#c8a84b" : "#0e633d"}
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {PRINCIPLE_ICONS[key]}
                  </svg>
                </div>
                <h3
                  style={{
                    fontFamily: "'cairo', serif",
                    fontSize: 19,
                    fontWeight: 800,
                    color: idx === 1 ? "#efe6d8" : "#0a1f14",
                    marginBottom: 12,
                  }}
                >
                  {t(`partners.principles.${key}.title`)}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.8,
                    color: idx === 1 ? "rgba(239,230,216,0.75)" : "#6b7c6e",
                  }}
                >
                  {t(`partners.principles.${key}.desc`)}
                </p>
              </HoverCard>
            </FadeIn>
          ))}
        </div>
      </div>

      <FadeIn>
        <div style={{ overflow: "hidden", position: "relative" }}>
          <div
            style={{
              display: "flex",
              gap: 28,
              width: "max-content",
              animation: "marquee 26s linear infinite",
            }}
          >
            {loop.map((n, idx) => (
              <div
                key={`${n}-${idx}`}
                style={{
                  width: 200,
                  height: 96,
                  background: "#fff",
                  border: "1.5px dashed #cfc2a8",
                  borderRadius: 16,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#b0bdb2"
                  strokeWidth="1.5"
                >
                  <rect x="3" y="4" width="18" height="14" rx="2" />
                  <path d="M3 15l5-5 4 4 3-3 6 6" />
                  <circle cx="8" cy="8" r="1.5" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
