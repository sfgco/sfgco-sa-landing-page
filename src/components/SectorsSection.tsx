import { useTranslation } from "react-i18next";
import FadeIn from "./FadeIn";
import HoverCard from "./HoverCard";

const SECTORS: { key: string; gradient: string; icon: React.ReactNode }[] = [
  {
    key: "renewable",
    gradient: "linear-gradient(145deg, #b8860b, #c8a84b)",
    icon: (
      <path d="M12 3v2m0 14v2m9-9h-2M5 12H3m14.4-6.4l-1.4 1.4M7 17l-1.4 1.4m0-12.8L7 7m10 10l1.4 1.4M12 8a4 4 0 100 8 4 4 0 000-8z" />
    ),
  },
  {
    key: "environment",
    gradient: "linear-gradient(145deg, #1a8050, #2ea866)",
    icon: (
      <path d="M12 22c-4.4-1.2-8-5.6-8-11 0-3 1.4-5.6 3.6-7.3C9.2 2.3 10.6 2 12 2s2.8.3 4.4 1.7C18.6 5.4 20 8 20 11c0 5.4-3.6 9.8-8 11zM12 22V8" />
    ),
  },
  {
    key: "realEstate",
    gradient: "linear-gradient(145deg, #0a4a2e, #0e633d)",
    icon: <path d="M3 11l9-8 9 8M5 10v10h14V10M9 20v-6h6v6" />,
  },
  {
    key: "tech",
    gradient: "linear-gradient(145deg, #0e633d, #1a8050)",
    icon: (
      <path d="M9 3H5a2 2 0 00-2 2v4m18 0V5a2 2 0 00-2-2h-4m0 18h4a2 2 0 002-2v-4M3 15v4a2 2 0 002 2h4m2-9l3 3-3 3m-4-6l-3 3 3 3" />
    ),
  },
  {
    key: "agriculture",
    gradient: "linear-gradient(145deg, #2ea866, #6fc98f)",
    icon: <path d="M12 2C8 6 6 9 6 13a6 6 0 0012 0c0-4-2-7-6-11zM12 22v-9" />,
  },
  {
    key: "water",
    gradient: "linear-gradient(145deg, #0a4a2e, #2ea866)",
    icon: <path d="M12 2s7 8 7 13a7 7 0 01-14 0c0-5 7-13 7-13z" />,
  },
  {
    key: "recycling",
    gradient: "linear-gradient(145deg, #b8860b, #e8cc7a)",
    icon: (
      <path d="M7 19H4.8a2 2 0 01-1.7-3l3-5m10 8h3.1a2 2 0 001.7-3l-1.5-2.6M14 5.4l1.5 2.6m-9-4L8 6.5 5 8m14.5.5L17 5.6l-3.5.3M9.5 19.5L12 21l2.5-1.5" />
    ),
  },
  {
    key: "logistics",
    gradient: "linear-gradient(145deg, #0e633d, #0a4a2e)",
    icon: (
      <path d="M3 17h13V7H3v10zM16 10h3l3 3v4h-6v-7zM6.5 20a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM17.5 20a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    ),
  },
];

/** Investment Sectors — 8 visual icon cards. */
export default function SectorsSection() {
  const { t } = useTranslation();

  return (
    <section id="sectors" style={{ background: "#fff", padding: "120px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <h2 style={{ fontSize: 44, fontWeight: 800, color: "#0a1f14" }}>
              {t("sectors.title")}
            </h2>
          </div>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
            gap: 24,
          }}
        >
          {SECTORS.map((s, idx) => (
            <FadeIn key={s.key} delay={idx * 60}>
              <HoverCard
                style={{
                  borderRadius: 22,
                  overflow: "hidden",
                  background: "#faf8f5",
                  border: "1.5px solid #ede5d9",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    height: 110,
                    background: s.gradient,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      width: 160,
                      height: 160,
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.08)",
                      top: -60,
                      insetInlineEnd: -40,
                    }}
                  />
                  <svg
                    width="38"
                    height="38"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {s.icon}
                  </svg>
                </div>
                <div style={{ padding: "24px 26px 28px" }}>
                  <h3
                    style={{
                      fontFamily: "'cairo', serif",
                      fontSize: 19,
                      fontWeight: 800,
                      color: "#0a1f14",
                      marginBottom: 10,
                    }}
                  >
                    {t(`sectors.items.${s.key}.title`)}
                  </h3>
                  <p
                    style={{
                      fontSize: 13.5,
                      color: "#6b7c6e",
                      lineHeight: 1.75,
                    }}
                  >
                    {t(`sectors.items.${s.key}.desc`)}
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
