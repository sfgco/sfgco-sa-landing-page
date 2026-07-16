import { useState } from "react";
import { useTranslation } from "react-i18next";
import FadeIn from "./FadeIn";

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
    icon: (
      <path d="M12 2l2.6 5.9 6.4.6-4.8 4.3 1.4 6.2L12 15.9 6.4 19l1.4-6.2-4.8-4.3 6.4-.6z" />
    ),
  },
  {
    key: "advisory",
    accent: "#2ea866",
    icon: (
      <path d="M8 10h8M8 14h5M21 12c0 4.97-4.03 9-9 9-1.5 0-2.9-.37-4.14-1.02L3 21l1.05-3.68A8.96 8.96 0 013 12c0-4.97 4.03-9 9-9s9 4.03 9 9z" />
    ),
  },
  {
    key: "feasibility",
    accent: "#0a4a2e",
    icon: (
      <path d="M9 3h6a2 2 0 012 2v14a2 2 0 01-2 2H9a2 2 0 01-2-2V5a2 2 0 012-2zM9 7h6M9 11h6M9 15h3" />
    ),
  },
  {
    key: "partnerships",
    accent: "#c8a84b",
    icon: (
      <path d="M8 12a3 3 0 100-6 3 3 0 000 6zM16 12a3 3 0 100-6 3 3 0 000 6zM3 20c0-3 2.5-5 5-5s5 2 5 5M11 20c0-3 2.5-5 5-5s5 2 5 5" />
    ),
  },
];

/** Services — a compact single-open accordion, not a long card/row list. */
export default function ServicesSection() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(0);

  return (
    <section
      id="services"
      style={{ background: "#efe6d8", padding: "130px 48px" }}
    >
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <h2 style={{ fontSize: 44, fontWeight: 800, color: "#0a1f14" }}>
              {t("services.title")}
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={60}>
          <div
            style={{
              background: "#fff",
              borderRadius: 24,
              border: "1.5px solid #e0d4c0",
              overflow: "hidden",
              boxShadow: "0 8px 32px rgba(14,99,61,0.06)",
            }}
          >
            {SERVICES.map((s, idx) => {
              const isOpen = open === idx;
              return (
                <div
                  key={s.key}
                  style={{
                    borderBottom:
                      idx < SERVICES.length - 1 ? "1px solid #ede5d9" : "none",
                  }}
                >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : idx)}
                    className="service-accordion-header"
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      gap: 20,
                      padding: "26px 28px",
                      background: isOpen ? "#faf8f5" : "transparent",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "start",
                      fontFamily: "inherit",
                      transition: "background 0.25s",
                    }}
                    aria-expanded={isOpen}
                  >
                    <span
                      style={{
                        width: 46,
                        height: 46,
                        borderRadius: 14,
                        background: `${s.accent}18`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <svg
                        width="21"
                        height="21"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={s.accent}
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {s.icon}
                      </svg>
                    </span>
                    <span
                      style={{
                        flex: 1,
                        fontFamily: "'cairo', serif",
                        fontSize: 18,
                        fontWeight: 800,
                        color: "#0a1f14",
                      }}
                    >
                      {t(`services.items.${s.key}.title`)}
                    </span>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#8a988c"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        flexShrink: 0,
                        transition: "transform 0.3s ease",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                      transition: "grid-template-rows 0.35s ease",
                    }}
                  >
                    <div style={{ overflow: "hidden" }}>
                      <p
                        style={{
                          fontSize: 15.5,
                          color: "#5a7062",
                          lineHeight: 1.9,
                          paddingInlineStart: 94,
                          paddingInlineEnd: 28,
                          paddingBottom: 28,
                        }}
                      >
                        {t(`services.items.${s.key}.desc`)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
