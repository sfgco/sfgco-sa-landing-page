import { useTranslation } from "react-i18next";
import FadeIn from "./FadeIn";
import HoverCard from "./HoverCard";

/** Strategic Goals — numbered checklist cards. */
export default function StrategicGoalsSection() {
  const { t } = useTranslation();
  const goals = t("goals.items", { returnObjects: true }) as string[];

  return (
    <section
      id="strategic-goals"
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
              {t("goals.badge")}
            </div>
            <h2 style={{ fontSize: 44, fontWeight: 800, color: "#0a1f14" }}>
              {t("goals.title")}
            </h2>
          </div>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 20,
          }}
        >
          {goals.map((goal, idx) => (
            <FadeIn key={goal} delay={idx * 70}>
              <HoverCard
                style={{
                  background: "#fff",
                  borderRadius: 20,
                  padding: "28px 30px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 20,
                  height: "100%",
                  boxShadow: "0 4px 20px rgba(14,99,61,0.06)",
                }}
              >
                <div
                  style={{
                    fontFamily: "'cairo', serif",
                    fontSize: 24,
                    fontWeight: 800,
                    color: "#c8a84b",
                    minWidth: 40,
                  }}
                >
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <p
                  style={{
                    fontSize: 15.5,
                    lineHeight: 1.8,
                    color: "#2d3d32",
                    fontWeight: 500,
                    paddingTop: 4,
                  }}
                >
                  {goal}
                </p>
              </HoverCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
