import FadeIn from "./FadeIn";
import TechBadge from "./TechBadge";
import { TECH_CATEGORIES } from "../data/techStack";
import { useTranslation } from "react-i18next";

/** Full, grouped technology-stack grid — used standalone on the Technologies page (page hero already carries the heading/subtitle). */
export default function TechEcosystem() {
  const { t } = useTranslation();

  return (
    <section style={{ background: "#faf8f5", padding: "100px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          {TECH_CATEGORIES.map((cat, ci) => (
            <FadeIn key={cat.key} delay={ci * 100}>
              <div>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#0e633d",
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                    marginBottom: 16,
                  }}
                >
                  {t(`technologies.categories.${cat.key}`)}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      className="hover-card-sm"
                      style={{ transition: "transform 0.25s ease, box-shadow 0.25s ease" }}
                    >
                      <TechBadge name={item.name} mark={item.mark} color={item.color} />
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
