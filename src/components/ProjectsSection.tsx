import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import FadeIn from "./FadeIn";
import HoverCard from "./HoverCard";

/**
 * Completed Projects + Investment Opportunities, merged into a single tabbed
 * experience. Entries below are realistic placeholder examples for visual
 * presentation only — replace with real project data (or wire to a CMS) when
 * available.
 */
type IconKey =
  | "renewable"
  | "realEstate"
  | "tech"
  | "agriculture"
  | "water"
  | "logistics";

const TILE: Record<IconKey, { gradient: string; icon: React.ReactNode }> = {
  renewable: {
    gradient: "linear-gradient(145deg, #b8860b, #c8a84b)",
    icon: (
      <path d="M12 3v2m0 14v2m9-9h-2M5 12H3m14.4-6.4l-1.4 1.4M7 17l-1.4 1.4m0-12.8L7 7m10 10l1.4 1.4M12 8a4 4 0 100 8 4 4 0 000-8z" />
    ),
  },
  realEstate: {
    gradient: "linear-gradient(145deg, #0a4a2e, #0e633d)",
    icon: <path d="M3 11l9-8 9 8M5 10v10h14V10M9 20v-6h6v6" />,
  },
  tech: {
    gradient: "linear-gradient(145deg, #0e633d, #1a8050)",
    icon: (
      <path d="M9 3H5a2 2 0 00-2 2v4m18 0V5a2 2 0 00-2-2h-4m0 18h4a2 2 0 002-2v-4M3 15v4a2 2 0 002 2h4m2-9l3 3-3 3m-4-6l-3 3 3 3" />
    ),
  },
  agriculture: {
    gradient: "linear-gradient(145deg, #2ea866, #6fc98f)",
    icon: <path d="M12 2C8 6 6 9 6 13a6 6 0 0012 0c0-4-2-7-6-11zM12 22v-9" />,
  },
  water: {
    gradient: "linear-gradient(145deg, #0a4a2e, #2ea866)",
    icon: <path d="M12 2s7 8 7 13a7 7 0 01-14 0c0-5 7-13 7-13z" />,
  },
  logistics: {
    gradient: "linear-gradient(145deg, #0e633d, #0a4a2e)",
    icon: (
      <path d="M3 17h13V7H3v10zM16 10h3l3 3v4h-6v-7zM6.5 20a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM17.5 20a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    ),
  },
};

type ProjectCard = {
  title: string;
  category: string;
  status: string;
  excerpt: string;
  iconKey: IconKey;
};

const PROJECTS: ProjectCard[] = [
  {
    title: "محطة طاقة شمسية — المنطقة الشرقية",
    category: "الطاقة المتجددة",
    status: "مكتمل",
    excerpt: "محطة إنتاج طاقة شمسية بقدرة إنتاجية عالية لدعم شبكة الطاقة النظيفة.",
    iconKey: "renewable",
  },
  {
    title: "مجمع سكني مستدام — الخبر",
    category: "التطوير العقاري المستدام",
    status: "مكتمل",
    excerpt: "تطوير مجمع سكني يعتمد معايير كفاءة الطاقة والاستدامة البيئية.",
    iconKey: "realEstate",
  },
  {
    title: "منصة رقمية لإدارة الاستثمارات",
    category: "التقنية والابتكار",
    status: "مكتمل",
    excerpt: "حل تقني متكامل لإدارة ومتابعة المحافظ الاستثمارية بكفاءة أعلى.",
    iconKey: "tech",
  },
  {
    title: "مشروع الزراعة الذكية — القصيم",
    category: "الزراعة الذكية",
    status: "مكتمل",
    excerpt: "تبني تقنيات زراعية حديثة لترشيد استهلاك المياه ورفع الإنتاجية.",
    iconKey: "agriculture",
  },
];

const OPPORTUNITIES: ProjectCard[] = [
  {
    title: "توسعة محطة تحلية مياه",
    category: "إدارة المياه",
    status: "الفرص متاحة",
    excerpt: "فرصة استثمارية في توسعة قدرة تحلية وإعادة استخدام المياه.",
    iconKey: "water",
  },
  {
    title: "مركز لوجستي متكامل",
    category: "الخدمات اللوجستية المستدامة",
    status: "قيد الدراسة",
    excerpt: "تطوير مركز لوجستي يعتمد حلولاً صديقة للبيئة لسلاسل الإمداد.",
    iconKey: "logistics",
  },
  {
    title: "حديقة طاقة رياح",
    category: "الطاقة المتجددة",
    status: "الفرص متاحة",
    excerpt: "فرصة استثمارية في مشروع لتوليد الطاقة من الرياح.",
    iconKey: "renewable",
  },
  {
    title: "مبنى مكتبي بمعايير الاستدامة",
    category: "التطوير العقاري المستدام",
    status: "قيد الدراسة",
    excerpt: "فرصة لتطوير مبنى مكتبي حاصل على معايير اعتماد بيئي عالية.",
    iconKey: "realEstate",
  },
];

export default function ProjectsSection() {
  const { t } = useTranslation();
  const [tab, setTab] = useState<"completed" | "opportunities">("completed");
  const items = tab === "completed" ? PROJECTS : OPPORTUNITIES;

  return (
    <section
      id="projects"
      style={{ background: "#fff", padding: "120px 48px" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2
              style={{
                fontSize: 44,
                fontWeight: 800,
                color: "#0a1f14",
                marginBottom: 18,
              }}
            >
              {tab === "completed" ? t("projects.title") : t("opportunities.title")}
            </h2>
            <p
              style={{
                color: "#5a7062",
                fontSize: 16,
                lineHeight: 1.8,
                maxWidth: 620,
                margin: "0 auto",
              }}
            >
              {tab === "completed" ? t("projects.body") : t("opportunities.body")}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={60}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 48,
            }}
          >
            <div
              style={{
                display: "inline-flex",
                gap: 4,
                padding: 4,
                borderRadius: 50,
                background: "#faf8f5",
                border: "1.5px solid #ede5d9",
              }}
            >
              {(["completed", "opportunities"] as const).map((key) => (
                <button
                  key={key}
                  onClick={() => setTab(key)}
                  style={{
                    padding: "11px 28px",
                    borderRadius: 50,
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    fontSize: 13.5,
                    fontWeight: 700,
                    letterSpacing: 0.3,
                    transition: "all 0.25s",
                    background: tab === key ? "#0e633d" : "transparent",
                    color: tab === key ? "#efe6d8" : "#5a7062",
                  }}
                >
                  {key === "completed" ? t("projects.title") : t("opportunities.title")}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        {items.length === 0 ? (
          <FadeIn delay={100}>
            <div
              style={{
                background: "#faf8f5",
                border: "1.5px dashed #ddd0be",
                borderRadius: 24,
                padding: "56px 40px",
                textAlign: "center",
              }}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9aaa9e"
                strokeWidth="1.5"
                style={{ margin: "0 auto 18px" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 21h18M5 21V7l7-4 7 4v14M9 9h1m4 0h1m-6 4h1m4 0h1m-6 4h1m4 0h1"
                />
              </svg>
              <h3
                style={{
                  fontFamily: "'cairo', serif",
                  fontSize: 20,
                  fontWeight: 800,
                  color: "#0a1f14",
                  marginBottom: 10,
                }}
              >
                {t("projects.emptyTitle")}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "#8a988c",
                  maxWidth: 420,
                  margin: "0 auto",
                }}
              >
                {t("projects.emptyBody")}
              </p>
            </div>
          </FadeIn>
        ) : (
          <div
            className="grid-3-cols"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
            }}
          >
            {items.map((p, idx) => (
              <FadeIn key={p.title} delay={idx * 70}>
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
                      height: 130,
                      background: TILE[p.iconKey].gradient,
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
                    <span
                      style={{
                        position: "absolute",
                        top: 14,
                        insetInlineStart: 14,
                        background: "rgba(10,31,20,0.35)",
                        color: "#efe6d8",
                        fontSize: 11.5,
                        fontWeight: 700,
                        padding: "6px 14px",
                        borderRadius: 50,
                        backdropFilter: "blur(6px)",
                      }}
                    >
                      {p.status}
                    </span>
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
                      {TILE[p.iconKey].icon}
                    </svg>
                  </div>
                  <div style={{ padding: "24px 26px 28px" }}>
                    <div
                      style={{
                        fontSize: 11.5,
                        fontWeight: 700,
                        color: "#0e633d",
                        letterSpacing: 0.5,
                        marginBottom: 10,
                        textTransform: "uppercase",
                      }}
                    >
                      {p.category}
                    </div>
                    <h3
                      style={{
                        fontFamily: "'cairo', serif",
                        fontSize: 18,
                        fontWeight: 800,
                        color: "#0a1f14",
                        marginBottom: 10,
                      }}
                    >
                      {p.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 13.5,
                        color: "#6b7c6e",
                        lineHeight: 1.75,
                      }}
                    >
                      {p.excerpt}
                    </p>
                  </div>
                </HoverCard>
              </FadeIn>
            ))}
          </div>
        )}

        {tab === "opportunities" && (
          <FadeIn delay={200}>
            <div style={{ textAlign: "center", marginTop: 48 }}>
              <Link
                to="/contact"
                style={{
                  display: "inline-flex",
                  background: "#0e633d",
                  color: "#efe6d8",
                  padding: "13px 30px",
                  borderRadius: 50,
                  fontWeight: 700,
                  fontSize: 13.5,
                }}
              >
                {t("opportunities.requestBtn")}
              </Link>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
