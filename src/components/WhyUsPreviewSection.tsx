import { useTranslation } from "react-i18next";
import FadeIn from "./FadeIn";
import HoverCard from "./HoverCard";

const KEYS = [
  "expertise",
  "innovative",
  "sustainability",
  "risk",
  "longterm",
  "governance",
];

const ICONS: Record<string, React.ReactNode> = {
  expertise: (
    <path d="M12 2l2.6 5.9 6.4.6-4.8 4.3 1.4 6.2L12 15.9 6.4 19l1.4-6.2-4.8-4.3 6.4-.6z" />
  ),
  innovative: (
    <path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.6 10.8c.5.4.8 1 .8 1.7v.5h5.6v-.5c0-.7.3-1.3.8-1.7A6 6 0 0012 3z" />
  ),
  sustainability: (
    <path d="M12 22c-4.4-1.2-8-5.6-8-11 0-3 1.4-5.6 3.6-7.3C9.2 2.3 10.6 2 12 2s2.8.3 4.4 1.7C18.6 5.4 20 8 20 11c0 5.4-3.6 9.8-8 11z" />
  ),
  risk: (
    <path d="M12 2l8 4v6c0 5-3.4 8.7-8 10-4.6-1.3-8-5-8-10V6l8-4zM9 12l2 2 4-4" />
  ),
  longterm: (
    <path d="M8 12a3 3 0 100-6 3 3 0 000 6zM16 12a3 3 0 100-6 3 3 0 000 6zM3 20c0-3 2.5-5 5-5s5 2 5 5M11 20c0-3 2.5-5 5-5s5 2 5 5" />
  ),
  governance: (
    <path d="M2.5 12S6 5 12 5s9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7zM12 15a3 3 0 100-6 3 3 0 000 6z" />
  ),
};

/** Homepage "لماذا نحن؟" section — icon-left cards, the sole canonical version of this content. */
export default function WhyUsPreviewSection() {
  const { t } = useTranslation();

  return (
    <section style={{ background: "#efe6d8", padding: "110px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <h2 style={{ fontSize: 40, fontWeight: 800, color: "#0a1f14" }}>
              {t("whyUs.title")}
            </h2>
          </div>
        </FadeIn>

        <div
          className="grid-2-cols"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 22,
          }}
        >
          {KEYS.map((key, idx) => (
            <FadeIn key={key} delay={idx * 60}>
              <HoverCard
                variant="sm"
                className="whyus-card"
                style={{
                  background: "#fff",
                  borderRadius: 20,
                  padding: 28,
                  height: "100%",
                  border: "1.5px solid #ede5d9",
                  boxShadow: "0 4px 20px rgba(14,99,61,0.06)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 20,
                }}
              >
                <div
                  className="whyus-icon"
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "rgba(14,99,61,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "transform 0.3s ease",
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0e633d"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {ICONS[key]}
                  </svg>
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "'cairo', serif",
                      fontSize: 18,
                      fontWeight: 800,
                      color: "#0a1f14",
                      marginBottom: 8,
                    }}
                  >
                    {t(`whyUs.items.${key}.title`)}
                  </h3>
                  <p
                    style={{
                      fontSize: 13.5,
                      lineHeight: 1.8,
                      color: "#6b7c6e",
                    }}
                  >
                    {t(`whyUs.items.${key}.desc`)}
                  </p>
                </div>
              </HoverCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
