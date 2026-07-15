import { useTranslation } from "react-i18next";
import FadeIn from "./FadeIn";

const SLOTS = [1, 2, 3, 4, 5];

/**
 * Success Partners — logo-strip carousel.
 * Real partner logos are not yet supplied; renders placeholder slots ready
 * to be swapped for real assets (per the source document: "displayed as a logo strip only").
 */
export default function PartnersSection() {
  const { t } = useTranslation();
  const loop = [...SLOTS, ...SLOTS];

  return (
    <section id="partners" style={{ background: "#efe6d8", padding: "100px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
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
            <h2 style={{ fontSize: 40, fontWeight: 800, color: "#0a1f14" }}>
              {t("partners.title")}
            </h2>
          </div>
        </FadeIn>
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
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#b0bdb2" strokeWidth="1.5">
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
