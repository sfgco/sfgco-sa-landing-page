import { useTranslation } from "react-i18next";
import FadeIn from "./FadeIn";
import HoverCard from "./HoverCard";

const SERVICES: { key: string; icon: React.ReactNode; accent: string }[] = [
  {
    key: "direct",
    accent: "#c8a84b",
    icon: <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />,
  },
  {
    key: "portfolio",
    accent: "#0e633d",
    icon: <path d="M3 3v18h18M7 15l4-5 3 3 5-7" />,
  },
  {
    key: "development",
    accent: "#1a8050",
    icon: <path d="M12 2l2.6 5.9 6.4.6-4.8 4.3 1.4 6.2L12 15.9 6.4 19l1.4-6.2-4.8-4.3 6.4-.6z" />,
  },
  {
    key: "advisory",
    accent: "#2ea866",
    icon: <path d="M8 10h8M8 14h5M21 12c0 4.97-4.03 9-9 9-1.5 0-2.9-.37-4.14-1.02L3 21l1.05-3.68A8.96 8.96 0 013 12c0-4.97 4.03-9 9-9s9 4.03 9 9z" />,
  },
  {
    key: "feasibility",
    accent: "#0a4a2e",
    icon: <path d="M9 3h6a2 2 0 012 2v14a2 2 0 01-2 2H9a2 2 0 01-2-2V5a2 2 0 012-2zM9 7h6M9 11h6M9 15h3" />,
  },
  {
    key: "partnerships",
    accent: "#c8a84b",
    icon: <path d="M8 12a3 3 0 100-6 3 3 0 000 6zM16 12a3 3 0 100-6 3 3 0 000 6zM3 20c0-3 2.5-5 5-5s5 2 5 5M11 20c0-3 2.5-5 5-5s5 2 5 5" />,
  },
];

/** Services — one card per service, exact title/description from source content. */
export default function ServicesSection() {
  const { t } = useTranslation();

  return (
    <section id="services" style={{ background: "#fff", padding: "120px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
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
              {t("services.badge")}
            </div>
            <h2 style={{ fontSize: 44, fontWeight: 800, color: "#0a1f14" }}>{t("services.title")}</h2>
          </div>
        </FadeIn>

        <div className="grid-3-cols" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {SERVICES.map((s, idx) => (
            <FadeIn key={s.key} delay={idx * 80}>
              <HoverCard
                style={{
                  background: "#faf8f5",
                  border: "1.5px solid #ede5d9",
                  borderRadius: 22,
                  padding: 32,
                  height: "100%",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, width: 4, height: "100%", background: s.accent, borderRadius: "4px 0 0 4px" }} />
                <div
                  style={{
                    width: 54,
                    height: 54,
                    borderRadius: 14,
                    background: `${s.accent}18`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={s.accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    {s.icon}
                  </svg>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 800, color: "#0a1f14", marginBottom: 12 }}>
                  {t(`services.items.${s.key}.title`)}
                </h3>
                <p style={{ fontSize: 14, color: "#6b7c6e", lineHeight: 1.8 }}>{t(`services.items.${s.key}.desc`)}</p>
              </HoverCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
