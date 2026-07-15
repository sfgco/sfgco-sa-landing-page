import { useTranslation } from "react-i18next";
import FadeIn from "./FadeIn";
import HoverCard from "./HoverCard";

const ICONS: Record<string, React.ReactNode> = {
  sustainability: (
    <path d="M12 22c-4.4-1.2-8-5.6-8-11 0-3 1.4-5.6 3.6-7.3C9.2 2.3 10.6 2 12 2s2.8.3 4.4 1.7C18.6 5.4 20 8 20 11c0 5.4-3.6 9.8-8 11z" />
  ),
  transparency: (
    <path d="M2.5 12S6 5 12 5s9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7zM12 15a3 3 0 100-6 3 3 0 000 6z" />
  ),
  innovation: (
    <path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.6 10.8c.5.4.8 1 .8 1.7v.5h5.6v-.5c0-.7.3-1.3.8-1.7A6 6 0 0012 3z" />
  ),
  responsibility: (
    <path d="M12 2l8 4v6c0 5-3.4 8.7-8 10-4.6-1.3-8-5-8-10V6l8-4z" />
  ),
  professionalism: (
    <path d="M4 7h16M6 7V5a2 2 0 012-2h8a2 2 0 012 2v2M4 7v11a2 2 0 002 2h12a2 2 0 002-2V7M4 7l1 4h14l1-4" />
  ),
  partnership: (
    <path d="M8 12a3 3 0 100-6 3 3 0 000 6zM16 12a3 3 0 100-6 3 3 0 000 6zM3 20c0-3 2.5-5 5-5s5 2 5 5M11 20c0-3 2.5-5 5-5s5 2 5 5" />
  ),
  excellence: (
    <path d="M12 2l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 16l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 2z" />
  ),
};

const KEYS = [
  "sustainability",
  "transparency",
  "innovation",
  "responsibility",
  "professionalism",
  "partnership",
  "excellence",
];

/** Values — 7 icon cards in a responsive grid. */
export default function ValuesSection() {
  const { t } = useTranslation();

  return (
    <section id="values" style={{ background: "#fff", padding: "120px 48px" }}>
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
              {t("values.badge")}
            </div>
            <h2 style={{ fontSize: 44, fontWeight: 800, color: "#0a1f14" }}>
              {t("values.title")}
            </h2>
          </div>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
            gap: 20,
          }}
        >
          {KEYS.map((key, idx) => (
            <FadeIn key={key} delay={idx * 60}>
              <HoverCard
                variant="sm"
                style={{
                  background: "#faf8f5",
                  border: "1.5px solid #ede5d9",
                  borderRadius: 20,
                  padding: "32px 20px",
                  textAlign: "center",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    width: 54,
                    height: 54,
                    borderRadius: "50%",
                    background: "rgba(14,99,61,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 18px",
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0e633d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    {ICONS[key]}
                  </svg>
                </div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 18,
                    fontWeight: 800,
                    color: "#0a1f14",
                  }}
                >
                  {t(`values.items.${key}`)}
                </h3>
              </HoverCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
