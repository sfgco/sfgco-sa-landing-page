import { useTranslation } from "react-i18next";
import FadeIn from "./FadeIn";
import HoverCard from "./HoverCard";
import Icon from "./Icon";

interface Pillar {
  title: string;
  desc: string;
}

const ICONS: React.ComponentProps<typeof Icon>["name"][] = ["target", "globe", "refresh", "sparkles"];
const ACCENTS = ["#0e633d", "#c8a84b", "#2ea866", "#0a4a2e"];

/** Mission / Vision / Digital Transformation Focus / Why SFGCO Tech — the About page's four pillars. */
export default function MissionVisionGrid() {
  const { t } = useTranslation();
  const pillars = t("about.pillars", { returnObjects: true }) as Pillar[];

  return (
    <section style={{ background: "#fff", padding: "104px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <h2 style={{ fontSize: 34, fontWeight: 800, color: "#0a1f14", textAlign: "center", marginBottom: 56 }}>
            {t("about.pillarsTitle")}
          </h2>
        </FadeIn>
        <div className="grid-4-col" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          {pillars.map((p, idx) => (
            <FadeIn key={p.title} delay={idx * 80}>
              <HoverCard
                variant="sm"
                style={{
                  background: "#faf8f5",
                  border: "1.5px solid #ede5d9",
                  borderRadius: 20,
                  padding: 28,
                  height: "100%",
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: `${ACCENTS[idx]}18`,
                    color: ACCENTS[idx],
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 18,
                  }}
                >
                  <Icon name={ICONS[idx]} size={21} />
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 800, color: "#0a1f14", marginBottom: 10 }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: 13, color: "#6b7c6e", lineHeight: 1.75 }}>{p.desc}</p>
              </HoverCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
