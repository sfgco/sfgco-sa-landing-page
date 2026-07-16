import { useTranslation } from "react-i18next";
import FadeIn from "./FadeIn";

/** Strategic Goals — a vertical numbered timeline list (no card grid), embedded within the About page. */
export default function StrategicGoalsSection() {
  const { t } = useTranslation();
  const goals = t("goals.items", { returnObjects: true }) as string[];

  return (
    <div id="strategic-goals">
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: "#0a1f14" }}>
            {t("goals.title")}
          </h2>
        </div>
      </FadeIn>

      <div style={{ maxWidth: 780, margin: "0 auto", position: "relative" }}>
        <div
          style={{
            position: "absolute",
            insetInlineStart: 23,
            top: 12,
            bottom: 12,
            width: 2,
            background: "#e0d4c0",
          }}
        />
        {goals.map((goal, idx) => (
          <FadeIn key={goal} delay={idx * 70}>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 24,
                paddingBlock: 18,
                position: "relative",
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: "#0e633d",
                  color: "#efe6d8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontFamily: "'cairo', serif",
                  fontSize: 16,
                  fontWeight: 800,
                  position: "relative",
                  boxShadow: "0 4px 16px rgba(14,99,61,0.25)",
                }}
              >
                {String(idx + 1).padStart(2, "0")}
              </div>
              <p
                style={{
                  fontSize: 16.5,
                  lineHeight: 1.85,
                  color: "#2d3d32",
                  fontWeight: 500,
                  paddingTop: 10,
                }}
              >
                {goal}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
