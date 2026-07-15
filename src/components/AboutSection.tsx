import { useTranslation } from "react-i18next";
import FadeIn from "./FadeIn";
import OrgChart from "./OrgChart";

/** About Us — company overview + organizational structure. */
export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      style={{ background: "#efe6d8", padding: "120px 48px" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          className="grid-2-cols"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 88,
            alignItems: "center",
            marginBottom: 100,
          }}
        >
          {/* Visual card */}
          <FadeIn>
            <div style={{ position: "relative" }}>
              <div
                style={{
                  background: "linear-gradient(150deg, #0a2a16, #0e633d)",
                  borderRadius: 28,
                  padding: 48,
                  color: "#fff",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 32px 80px rgba(14,99,61,0.25)",
                  minHeight: 280,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: -60,
                    insetInlineEnd: -60,
                    width: 240,
                    height: 240,
                    borderRadius: "50%",
                    background: "rgba(200,168,75,0.1)",
                    pointerEvents: "none",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: -40,
                    insetInlineStart: -40,
                    width: 180,
                    height: 180,
                    borderRadius: "50%",
                    background: "rgba(239,230,216,0.05)",
                    pointerEvents: "none",
                  }}
                />
                <svg
                  width="46"
                  height="46"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#c8a84b"
                  strokeWidth="1.5"
                  style={{ marginBottom: 22 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 21h18M5 21V7l7-4 7 4v14M9 9h1m4 0h1m-6 4h1m4 0h1m-6 4h1m4 0h1"
                  />
                </svg>
                <div
                  style={{
                    fontFamily: "'cairo', serif",
                    fontSize: 24,
                    fontWeight: 800,
                    color: "#efe6d8",
                    lineHeight: 1.5,
                  }}
                >
                  SFGCO
                </div>
                <div
                  style={{
                    fontSize: 14,
                    color: "rgba(239,230,216,0.65)",
                    marginTop: 8,
                    lineHeight: 1.7,
                  }}
                >
                  {t("hero.badge")}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Text */}
          <FadeIn delay={150}>
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
              {t("about.badge")}
            </div>
            <h2
              style={{
                fontSize: 44,
                fontWeight: 800,
                color: "#0a1f14",
                lineHeight: 1.2,
                marginBottom: 24,
              }}
            >
              {t("about.title")}
            </h2>
            <p style={{ fontSize: 16, color: "#5a7062", lineHeight: 1.9 }}>
              {t("about.body")}
            </p>
          </FadeIn>
        </div>

        {/* Organizational chart */}
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h3
              style={{
                fontFamily: "'cairo', serif",
                fontSize: 28,
                fontWeight: 800,
                color: "#0a1f14",
              }}
            >
              {t("about.orgTitle")}
            </h3>
          </div>
          <div
            style={{
              background: "#fff",
              borderRadius: 24,
              padding: "36px 28px",
              border: "1.5px solid #e0d4c0",
            }}
          >
            <OrgChart />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
