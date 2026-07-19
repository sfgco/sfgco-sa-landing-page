import { useTranslation } from "react-i18next";
import FadeIn from "./FadeIn";
import HoverCard from "./HoverCard";
import Icon from "./Icon";

interface CaseItem {
  title: string;
  desc: string;
  tags: string[];
}

const META: { icon: React.ComponentProps<typeof Icon>["name"]; accent: string }[] = [
  { icon: "brain", accent: "#c8a84b" },
  { icon: "grid", accent: "#0a4a2e" },
  { icon: "cloud", accent: "#0e633d" },
  { icon: "devices", accent: "#2ea866" },
  { icon: "shield", accent: "#0b2d1e" },
];

/** Five representative project archetypes — illustrative capability showcases, not fabricated named-client case studies. */
export default function CaseStudies() {
  const { t } = useTranslation();
  const items = t("caseStudies.items", { returnObjects: true }) as CaseItem[];

  return (
    <section style={{ background: "#fff", padding: "120px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="eyebrow" style={{ display: "flex", justifyContent: "center" }}>
              {t("caseStudies.badge")}
            </div>
            <h2 style={{ fontSize: 50, fontWeight: 800, color: "#0a1f14", marginBottom: 18 }}>
              {t("caseStudies.title")}
            </h2>
            <p style={{ color: "#5a7062", fontSize: 17, lineHeight: 1.75, maxWidth: 600, margin: "0 auto" }}>
              {t("caseStudies.subtitle")}
            </p>
          </div>
        </FadeIn>

        <div className="grid-3-col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {items.map((item, idx) => (
            <FadeIn key={item.title} delay={idx * 80}>
              <HoverCard
                variant="lg"
                style={{
                  background: "#faf8f5",
                  border: "1.5px solid #ede5d9",
                  borderRadius: 22,
                  overflow: "hidden",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    height: 5,
                    background: `linear-gradient(90deg, ${META[idx % META.length].accent}, #c8a84b)`,
                  }}
                />
                <div style={{ padding: 30 }}>
                  <div
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: 13,
                      background: `${META[idx % META.length].accent}18`,
                      color: META[idx % META.length].accent,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 20,
                    }}
                  >
                    <Icon name={META[idx % META.length].icon} size={22} />
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 19, fontWeight: 800, color: "#0a1f14", marginBottom: 12 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: 13.5, color: "#6b7c6e", lineHeight: 1.75, marginBottom: 22 }}>
                    {item.desc}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          background: `${META[idx % META.length].accent}14`,
                          color: META[idx % META.length].accent,
                          padding: "5px 12px",
                          borderRadius: 50,
                          fontSize: 10.5,
                          fontWeight: 700,
                          letterSpacing: 0.3,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </HoverCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
