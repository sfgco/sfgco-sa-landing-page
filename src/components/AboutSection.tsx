import { useTranslation } from "react-i18next";
import FadeIn from "./FadeIn";
import OrgChart from "./OrgChart";
import VisionSection from "./VisionSection";
import MissionSection from "./MissionSection";
import ValuesSection from "./ValuesSection";
import StrategicGoalsSection from "./StrategicGoalsSection";

const SECTION_GAP = 130;

/**
 * About Us — the site's single corporate-profile page. Consolidates the
 * intro, Vision, Mission, Values, Org Chart, and Strategic Goals as ordered
 * sub-sections (each previously its own route) so nothing is duplicated
 * across the site. No statistic counters — this page reads as narrative
 * content, not a data dashboard.
 */
export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      style={{ background: "#efe6d8", padding: "120px 48px" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* 1. نبذة عن الشركة */}
        <div style={{ maxWidth: 820, margin: `0 auto ${SECTION_GAP}px` }}>
          <FadeIn>
            <div style={{ textAlign: "center" }}>
              <h1
                style={{
                  fontSize: 46,
                  fontWeight: 800,
                  color: "#0a1f14",
                  lineHeight: 1.2,
                  marginBottom: 28,
                }}
              >
                {t("about.title")}
              </h1>
              <p
                style={{
                  fontSize: 18,
                  color: "#3d4d40",
                  lineHeight: 2,
                  maxWidth: 760,
                  margin: "0 auto",
                }}
              >
                {t("about.body")}
              </p>
            </div>
          </FadeIn>
        </div>

        {/* 2. رؤيتنا */}
        <div style={{ marginBottom: SECTION_GAP }}>
          <SectionMarker index={2} />
          <VisionSection />
        </div>

        {/* 3. رسالتنا */}
        <div style={{ marginBottom: SECTION_GAP }}>
          <SectionMarker index={3} />
          <MissionSection />
        </div>

        {/* 4. قيمنا */}
        <div style={{ marginBottom: SECTION_GAP }}>
          <SectionMarker index={4} />
          <ValuesSection />
        </div>

        {/* 5. الهيكل التنظيمي */}
        <div style={{ marginBottom: SECTION_GAP }}>
          <SectionMarker index={5} />
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <h2
                style={{
                  fontFamily: "'cairo', serif",
                  fontSize: 32,
                  fontWeight: 800,
                  color: "#0a1f14",
                }}
              >
                {t("about.orgTitle")}
              </h2>
            </div>
            <div
              style={{
                background: "#fff",
                borderRadius: 24,
                padding: "36px 28px",
                border: "1.5px solid #e0d4c0",
              }}
            >
              <OrgChart />
            </div>
          </FadeIn>
        </div>

        {/* 6. الأهداف الاستراتيجية */}
        <div>
          <SectionMarker index={6} />
          <StrategicGoalsSection />
        </div>
      </div>
    </section>
  );
}

/** Small numbered marker tying the page's ordered sub-sections together visually. */
function SectionMarker({ index }: Readonly<{ index: number }>) {
  return (
    <FadeIn>
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <span
          style={{
            display: "inline-flex",
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: "#0e633d",
            color: "#efe6d8",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'cairo', serif",
            fontWeight: 800,
            fontSize: 13,
          }}
        >
          {String(index).padStart(2, "0")}
        </span>
      </div>
    </FadeIn>
  );
}
