import { useState } from "react";
import { useTranslation } from "react-i18next";
import FadeIn from "./FadeIn";
import Icon from "./Icon";

interface Step {
  title: string;
  desc: string;
}

const ICONS: React.ComponentProps<typeof Icon>["name"][] = [
  "search", "target", "layers", "code", "rocket", "headset",
];

/** Six-step "How We Work" timeline with a hover-reveal description on each node. */
export default function ProcessSection() {
  const { t } = useTranslation();
  const steps = t("process.steps", { returnObjects: true }) as Step[];
  const [active, setActive] = useState<number | null>(null);

  return (
    <section style={{ background: "#efe6d8", padding: "120px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <div className="eyebrow" style={{ display: "flex", justifyContent: "center" }}>
              {t("process.badge")}
            </div>
            <h2 style={{ fontSize: 50, fontWeight: 800, color: "#0a1f14", marginBottom: 18 }}>
              {t("process.title")}
            </h2>
            <p style={{ color: "#5a7062", fontSize: 17, lineHeight: 1.75, maxWidth: 560, margin: "0 auto" }}>
              {t("process.subtitle")}
            </p>
          </div>
        </FadeIn>

        <div
          className="grid-6-col"
          style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 20, position: "relative" }}
        >
          <div
            style={{
              position: "absolute",
              top: 40,
              left: "8%",
              right: "8%",
              height: 2,
              background: "linear-gradient(90deg, #0e633d, #c8a84b, #0e633d)",
              zIndex: 0,
            }}
          />

          {steps.map((s, idx) => (
            <FadeIn key={s.title} delay={idx * 80}>
              <div
                style={{ textAlign: "center", position: "relative", zIndex: 1, cursor: "pointer" }}
                onMouseEnter={() => setActive(idx)}
                onMouseLeave={() => setActive(null)}
              >
                <div
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    margin: "0 auto 20px",
                    background: idx % 2 === 0 ? "#0e633d" : "#c8a84b",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: idx % 2 === 0 ? "#efe6d8" : "#0a1f14",
                    boxShadow: `0 12px 40px ${idx % 2 === 0 ? "rgba(14,99,61,0.3)" : "rgba(200,168,75,0.35)"}`,
                    border: "4px solid #efe6d8",
                    transition: "transform 0.3s ease",
                    transform: active === idx ? "scale(1.1)" : "scale(1)",
                  }}
                >
                  <Icon name={ICONS[idx]} size={28} />
                </div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 11, fontWeight: 700, color: "#c8a84b", letterSpacing: 2, marginBottom: 8 }}>
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 800, color: "#0a1f14", marginBottom: 10 }}>
                  {s.title}
                </h4>
                <p
                  style={{
                    fontSize: 12.5,
                    color: active === idx ? "#2d3d32" : "#6b7c6e",
                    lineHeight: 1.6,
                    transition: "color 0.3s ease",
                  }}
                >
                  {s.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
