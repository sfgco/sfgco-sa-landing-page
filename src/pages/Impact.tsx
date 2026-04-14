import { useTranslation } from "react-i18next";
import FadeIn from "../components/FadeIn";
import ImpactCounters from "../components/ImpactCounters";
import FeaturedProjects from "../components/FeaturedProjects";
import CTASection from "../components/CTASection";

const IMPACT_STORIES = [
  {
    emoji: "☀️",
    gradient: "linear-gradient(145deg, #b8860b, #c8a84b)",
    title: "Sahara Solar Initiative",
    region: "North Africa",
    sdgs: ["SDG 7", "SDG 13", "SDG 8"],
    body: "500 MW of utility-scale solar powering 400,000 homes across Morocco and Tunisia, offsetting 850,000 tonnes of CO₂ per year — while creating 3,200 local jobs in construction and operations.",
  },
  {
    emoji: "🌳",
    gradient: "linear-gradient(145deg, #1a8050, #2ea866)",
    title: "Amazon Guardian Fund",
    region: "South America",
    sdgs: ["SDG 15", "SDG 13", "SDG 1"],
    body: "2 million hectares of critical rainforest under protection, supporting 80,000 indigenous families, sequestering 15 million tonnes of CO₂ annually through verified REDD+ credits.",
  },
  {
    emoji: "🏙️",
    gradient: "linear-gradient(145deg, #0a4a2e, #0e633d)",
    title: "Singapore Green Quarter",
    region: "Southeast Asia",
    sdgs: ["SDG 11", "SDG 13", "SDG 9"],
    body: "2.4 million m² of net-zero commercial space housing 65,000 occupants, reducing Singapore's commercial sector carbon footprint by 1.2 million tonnes annually.",
  },
];

const SDG_ALIGNMENT = [
  { num: 7, label: "Clean Energy", color: "#f9c300" },
  { num: 8, label: "Decent Work", color: "#a21942" },
  { num: 9, label: "Industry & Infra", color: "#fd6925" },
  { num: 11, label: "Sustainable Cities", color: "#fd9d24" },
  { num: 13, label: "Climate Action", color: "#3f7e44" },
  { num: 15, label: "Life on Land", color: "#56c02b" },
  { num: 17, label: "Partnerships", color: "#19486a" },
];

export default function Impact() {
  const { t } = useTranslation();

  return (
    <>
      <title>{t("pages.impact.title")} | SFGCO</title>
      <meta name="description" content={t("pages.impact.metaDesc")} />

      {/* Page hero */}
      <section
        style={{
          background:
            "linear-gradient(145deg, #060f08 0%, #0a2a16 35%, #0e633d 100%)",
          padding: "160px 48px 100px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 440,
            height: 440,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(200,168,75,0.10), transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: -60,
            width: 320,
            height: 320,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(46,168,102,0.12), transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <FadeIn>
          <div
            style={{
              color: "#c8a84b",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 2.5,
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            {t("pages.impact.badge")}
          </div>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 60,
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.1,
              marginBottom: 20,
              letterSpacing: -1,
            }}
          >
            {t("pages.impact.title")}
          </h1>
          <p
            style={{
              fontSize: 18,
              color: "rgba(239,230,216,0.7)",
              maxWidth: 560,
              margin: "0 auto",
            }}
          >
            {t("pages.impact.subtitle")}
          </p>
        </FadeIn>
      </section>

      {/* Animated counters */}
      <ImpactCounters />

      {/* UN SDG Alignment */}
      <section style={{ background: "#fff", padding: "100px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 60 }}>
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
                {t("pages.impact.sdgLabel")}
              </div>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 42,
                  fontWeight: 800,
                  color: "#0a1f14",
                  marginBottom: 16,
                }}
              >
                {t("pages.impact.sdgTitle")}
              </h2>
              <p
                style={{
                  color: "#5a7062",
                  fontSize: 16,
                  lineHeight: 1.8,
                  maxWidth: 560,
                  margin: "0 auto",
                }}
              >
                {t("pages.impact.sdgSubtitle")}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={80}>
            <div
              style={{
                display: "flex",
                gap: 16,
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {SDG_ALIGNMENT.map((sdg) => (
                <div
                  key={sdg.num}
                  style={{
                    background: sdg.color,
                    borderRadius: 16,
                    padding: "22px 26px",
                    minWidth: 130,
                    textAlign: "center",
                    boxShadow: `0 8px 28px ${sdg.color}44`,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 30,
                      fontWeight: 800,
                      color: "#fff",
                      marginBottom: 6,
                    }}
                  >
                    {sdg.num}
                  </div>
                  <div
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      color: "rgba(255,255,255,0.85)",
                      letterSpacing: 0.5,
                      textTransform: "uppercase",
                    }}
                  >
                    {sdg.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Impact Stories */}
      <section style={{ background: "#f5f0e8", padding: "100px 48px" }}>
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
                {t("pages.impact.storiesLabel")}
              </div>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 42,
                  fontWeight: 800,
                  color: "#0a1f14",
                }}
              >
                {t("pages.impact.storiesTitle")}
              </h2>
            </div>
          </FadeIn>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
            }}
          >
            {IMPACT_STORIES.map((story, idx) => (
              <FadeIn key={story.title} delay={idx * 100}>
                <div
                  style={{
                    background: "#fff",
                    borderRadius: 24,
                    overflow: "hidden",
                    boxShadow: "0 8px 36px rgba(14,99,61,0.07)",
                  }}
                >
                  <div
                    style={{
                      height: 160,
                      background: story.gradient,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span style={{ fontSize: 60 }}>{story.emoji}</span>
                  </div>
                  <div style={{ padding: 28 }}>
                    <div
                      style={{
                        fontSize: 11,
                        color: "#9aaa9e",
                        marginBottom: 8,
                        letterSpacing: 0.5,
                      }}
                    >
                      {story.region}
                    </div>
                    <h3
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 20,
                        fontWeight: 800,
                        color: "#0a1f14",
                        marginBottom: 14,
                      }}
                    >
                      {story.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 14,
                        color: "#6b7c6e",
                        lineHeight: 1.75,
                        marginBottom: 20,
                      }}
                    >
                      {story.body}
                    </p>
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                      {story.sdgs.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            background: "rgba(14,99,61,0.08)",
                            color: "#0e633d",
                            padding: "4px 12px",
                            borderRadius: 50,
                            fontSize: 10,
                            fontWeight: 700,
                            letterSpacing: 0.4,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <FeaturedProjects />
      <CTASection />
    </>
  );
}
