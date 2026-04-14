import { useTranslation } from "react-i18next";
import FadeIn from "../components/FadeIn";
import InvestmentOpportunities from "../components/InvestmentOpportunities";
import TechAISection from "../components/TechAISection";
import FeaturedProjects from "../components/FeaturedProjects";
import CTASection from "../components/CTASection";

export default function Investments() {
  const { t } = useTranslation();

  return (
    <>
      <title>{t("pages.investments.title")} | SFGCO</title>
      <meta name="description" content={t("pages.investments.metaDesc")} />

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
              "radial-gradient(circle, rgba(14,99,61,0.15), transparent 65%)",
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
            {t("pages.investments.badge")}
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
            {t("pages.investments.title")}
          </h1>
          <p
            style={{
              fontSize: 18,
              color: "rgba(239,230,216,0.7)",
              maxWidth: 560,
              margin: "0 auto",
            }}
          >
            {t("pages.investments.subtitle")}
          </p>
        </FadeIn>
      </section>

      <InvestmentOpportunities />
      <TechAISection />
      <FeaturedProjects />
      <CTASection />
    </>
  );
}
