import { useState } from "react";
import { useTranslation } from "react-i18next";
import FadeIn from "./FadeIn";

const SECTORS: {
  key: string;
  gradient: string;
  accent: string;
  icon: React.ReactNode;
}[] = [
  {
    key: "renewable",
    gradient: "linear-gradient(145deg, #b8860b, #c8a84b)",
    accent: "#b8860b",
    icon: (
      <path d="M12 3v2m0 14v2m9-9h-2M5 12H3m14.4-6.4l-1.4 1.4M7 17l-1.4 1.4m0-12.8L7 7m10 10l1.4 1.4M12 8a4 4 0 100 8 4 4 0 000-8z" />
    ),
  },
  {
    key: "environment",
    gradient: "linear-gradient(145deg, #1a8050, #2ea866)",
    accent: "#1a8050",
    icon: (
      <path d="M12 22c-4.4-1.2-8-5.6-8-11 0-3 1.4-5.6 3.6-7.3C9.2 2.3 10.6 2 12 2s2.8.3 4.4 1.7C18.6 5.4 20 8 20 11c0 5.4-3.6 9.8-8 11zM12 22V8" />
    ),
  },
  {
    key: "realEstate",
    gradient: "linear-gradient(145deg, #0a4a2e, #0e633d)",
    accent: "#0a4a2e",
    icon: <path d="M3 11l9-8 9 8M5 10v10h14V10M9 20v-6h6v6" />,
  },
  {
    key: "tech",
    gradient: "linear-gradient(145deg, #0e633d, #1a8050)",
    accent: "#0e633d",
    icon: (
      <path d="M9 3H5a2 2 0 00-2 2v4m18 0V5a2 2 0 00-2-2h-4m0 18h4a2 2 0 002-2v-4M3 15v4a2 2 0 002 2h4m2-9l3 3-3 3m-4-6l-3 3 3 3" />
    ),
  },
  {
    key: "agriculture",
    gradient: "linear-gradient(145deg, #2ea866, #6fc98f)",
    accent: "#2ea866",
    icon: <path d="M12 2C8 6 6 9 6 13a6 6 0 0012 0c0-4-2-7-6-11zM12 22v-9" />,
  },
  {
    key: "water",
    gradient: "linear-gradient(145deg, #0a4a2e, #2ea866)",
    accent: "#0a4a2e",
    icon: <path d="M12 2s7 8 7 13a7 7 0 01-14 0c0-5 7-13 7-13z" />,
  },
  {
    key: "recycling",
    gradient: "linear-gradient(145deg, #b8860b, #e8cc7a)",
    accent: "#b8860b",
    icon: (
      <path d="M7 19H4.8a2 2 0 01-1.7-3l3-5m10 8h3.1a2 2 0 001.7-3l-1.5-2.6M14 5.4l1.5 2.6m-9-4L8 6.5 5 8m14.5.5L17 5.6l-3.5.3M9.5 19.5L12 21l2.5-1.5" />
    ),
  },
  {
    key: "logistics",
    gradient: "linear-gradient(145deg, #0e633d, #0a4a2e)",
    accent: "#0e633d",
    icon: (
      <path d="M3 17h13V7H3v10zM16 10h3l3 3v4h-6v-7zM6.5 20a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM17.5 20a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    ),
  },
];

/** Investment Sectors — interactive showcase: a timeline rail + one large illustrated panel. */
export default function SectorsSection() {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const sector = SECTORS[active];

  return (
    <section
      id="sectors"
      style={{ background: "#efe6d8", padding: "120px 48px" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <h2 style={{ fontSize: 44, fontWeight: 800, color: "#0a1f14" }}>
              {t("sectors.title")}
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={80}>
          <div
            className="sectors-showcase"
            style={{
              display: "grid",
              gridTemplateColumns: "0.9fr 2fr",
              gap: 40,
              alignItems: "stretch",
            }}
          >
            {/* Timeline rail */}
            <div
              className="sectors-rail"
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  insetInlineStart: 19,
                  top: 20,
                  bottom: 20,
                  width: 2,
                  background: "#e0d4c0",
                }}
              />
              {SECTORS.map((s, idx) => {
                const isActive = idx === active;
                return (
                  <button
                    key={s.key}
                    onClick={() => setActive(idx)}
                    style={{
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                      padding: "12px 8px",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "start",
                      fontFamily: "inherit",
                    }}
                  >
                    <span
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        background: isActive ? s.gradient : "#fff",
                        border: isActive ? "none" : "1.5px solid #e0d4c0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        position: "relative",
                        transition: "all 0.25s",
                      }}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={isActive ? "#fff" : "#9aaa9e"}
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {s.icon}
                      </svg>
                    </span>
                    <span
                      style={{
                        fontSize: 14.5,
                        fontWeight: isActive ? 800 : 600,
                        color: isActive ? "#0a1f14" : "#8a988c",
                        transition: "all 0.25s",
                      }}
                    >
                      {t(`sectors.items.${s.key}.title`)}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Large illustrated showcase panel */}
            <div
              style={{
                borderRadius: 32,
                background: sector.gradient,
                padding: "56px 56px",
                position: "relative",
                overflow: "hidden",
                minHeight: 440,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                transition: "background 0.4s ease",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: 340,
                  height: 340,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.08)",
                  top: -120,
                  insetInlineEnd: -100,
                }}
              />
              <div
                style={{
                  width: 88,
                  height: 88,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.16)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 32,
                  position: "relative",
                }}
              >
                <svg
                  width="42"
                  height="42"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {sector.icon}
                </svg>
              </div>
              <h3
                style={{
                  fontFamily: "'cairo', serif",
                  fontSize: 32,
                  fontWeight: 800,
                  color: "#fff",
                  marginBottom: 18,
                  position: "relative",
                }}
              >
                {t(`sectors.items.${sector.key}.title`)}
              </h3>
              <p
                style={{
                  fontSize: 17,
                  color: "rgba(255,255,255,0.85)",
                  lineHeight: 1.9,
                  maxWidth: 520,
                  position: "relative",
                }}
              >
                {t(`sectors.items.${sector.key}.desc`)}
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
