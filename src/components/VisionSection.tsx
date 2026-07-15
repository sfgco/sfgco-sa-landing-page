import { useTranslation } from "react-i18next";
import FadeIn from "./FadeIn";

/** Vision — standalone full-page section. */
export default function VisionSection() {
  const { t } = useTranslation();

  return (
    <section style={{ background: "#efe6d8", padding: "120px 48px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
        <FadeIn>
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
            {t("visionMission.badge")}
          </div>

          <div
            style={{
              background: "linear-gradient(150deg, #0a2a16, #0e633d)",
              borderRadius: 28,
              padding: "64px 56px",
              boxShadow: "0 32px 80px rgba(14,99,61,0.22)",
              position: "relative",
              overflow: "hidden",
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
                width: 64,
                height: 64,
                borderRadius: 18,
                background: "rgba(200,168,75,0.14)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 28px",
              }}
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#c8a84b"
                strokeWidth="1.8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h1
              style={{
                fontFamily: "'cairo', serif",
                fontSize: 38,
                fontWeight: 800,
                color: "#efe6d8",
                marginBottom: 24,
              }}
            >
              {t("visionMission.visionTitle")}
            </h1>
            <p
              style={{
                fontSize: 19,
                lineHeight: 1.95,
                color: "rgba(239,230,216,0.85)",
              }}
            >
              {t("visionMission.visionBody")}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
