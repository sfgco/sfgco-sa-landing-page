import { useTranslation } from "react-i18next";
import FadeIn from "./FadeIn";

/** Mission — a sub-section embedded within the About page. */
export default function MissionSection() {
  const { t } = useTranslation();

  return (
    <div id="mission" style={{ maxWidth: 900, margin: "0 auto" }}>
      <FadeIn>
        <div
          style={{
            background: "#faf8f5",
            border: "1.5px solid #ede5d9",
            borderRadius: 28,
            padding: "64px 56px",
            boxShadow: "0 4px 24px rgba(14,99,61,0.08)",
            textAlign: "center",
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
          <h2
            style={{
              fontFamily: "'cairo', serif",
              fontSize: 34,
              fontWeight: 800,
              color: "#0a1f14",
              marginBottom: 20,
            }}
          >
            {t("visionMission.missionTitle")}
          </h2>
          <p style={{ fontSize: 17.5, lineHeight: 1.95, color: "#5a7062" }}>
            {t("visionMission.missionBody")}
          </p>
        </div>
      </FadeIn>
    </div>
  );
}
