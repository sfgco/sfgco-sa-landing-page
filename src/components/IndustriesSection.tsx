import { useTranslation } from "react-i18next";
import FadeIn from "./FadeIn";
import Icon from "./Icon";

const ICONS: React.ComponentProps<typeof Icon>["name"][] = [
  "landmark", "heart", "bag", "truck", "factory", "cap", "bank", "rocket",
];
const ACCENTS = ["#0e633d", "#c8a84b", "#2ea866", "#0a4a2e", "#c8a84b", "#0e633d", "#2ea866", "#c8a84b"];

/** Grid of the 8 industries SFGCO Tech serves, with custom line icons instead of emoji. */
export default function IndustriesSection() {
  const { t } = useTranslation();
  const industries = t("industries.list", { returnObjects: true }) as string[];

  return (
    <section id="industries" style={{ background: "#fff", padding: "120px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="eyebrow" style={{ display: "flex", justifyContent: "center" }}>
              {t("industries.badge")}
            </div>
            <h2 style={{ fontSize: 50, fontWeight: 800, color: "#0a1f14", marginBottom: 18 }}>
              {t("industries.title")}
            </h2>
            <p style={{ color: "#5a7062", fontSize: 17, lineHeight: 1.75, maxWidth: 520, margin: "0 auto" }}>
              {t("industries.subtitle")}
            </p>
          </div>
        </FadeIn>

        <div className="grid-8-col" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          {industries.map((name, idx) => (
            <FadeIn key={name} delay={idx * 50}>
              <div
                className="hover-card-sm"
                style={{
                  background: "#faf8f5",
                  border: "1.5px solid #ede5d9",
                  borderRadius: 20,
                  padding: "32px 20px",
                  textAlign: "center",
                  height: "100%",
                  transition: "border-color 0.3s ease",
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: `${ACCENTS[idx]}16`,
                    color: ACCENTS[idx],
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                  }}
                >
                  <Icon name={ICONS[idx] ?? "grid"} size={24} />
                </div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#0a1f14", lineHeight: 1.3 }}>
                  {name}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
