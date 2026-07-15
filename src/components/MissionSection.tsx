import { useTranslation } from "react-i18next";
import FadeIn from "./FadeIn";

/** Mission — standalone full-page section. */
export default function MissionSection() {
  const { t } = useTranslation();

  return (
    <section style={{ background: "#fff", padding: "120px 48px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
        <FadeIn>
          <div
            style={{
              background: "#faf8f5",
              border: "1.5px solid #ede5d9",
              borderRadius: 28,
              padding: "64px 56px",
              boxShadow: "0 4px 24px rgba(14,99,61,0.08)",
            }}
          >
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 18,
                background: "rgba(14,99,61,0.08)",
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
                stroke="#0e633d"
                strokeWidth="1.8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z"
                />
              </svg>
            </div>
            <h1
              style={{
                fontFamily: "'cairo', serif",
                fontSize: 38,
                fontWeight: 800,
                color: "#0a1f14",
                marginBottom: 24,
              }}
            >
              {t("visionMission.missionTitle")}
            </h1>
            <p style={{ fontSize: 19, lineHeight: 1.95, color: "#5a7062" }}>
              {t("visionMission.missionBody")}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
