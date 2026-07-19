import HeroSection from "../components/HeroSection";
import AboutPreview from "../components/AboutPreview";
import ServiceCardGrid from "../components/ServiceCardGrid";
import WhySFGCO from "../components/WhySFGCO";
import TrustedTech from "../components/TrustedTech";
import CTASection from "../components/CTASection";
import FadeIn from "../components/FadeIn";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Icon from "../components/Icon";

/**
 * Home page — kept deliberately short: Hero, brief About, featured services,
 * why-choose-us, a technologies teaser, and one closing CTA. Full depth lives
 * on /about, /services, and /technologies.
 */
export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <title>SFGCO Tech | Cloud, AI & Enterprise Technology</title>
      <meta
        name="description"
        content="SFGCO TECH empowers organizations to accelerate digital transformation through secure cloud infrastructure, AI-powered solutions, enterprise software, cybersecurity, and custom software engineering."
      />
      <meta property="og:url" content="https://sfgco.sa/" />
      <meta property="og:title" content="SFGCO Tech | Cloud, AI & Enterprise Technology" />
      <link rel="canonical" href="https://sfgco.sa/" />

      <HeroSection />
      <AboutPreview />

      <section id="services" style={{ background: "#fff", padding: "104px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <div className="eyebrow" style={{ display: "flex", justifyContent: "center" }}>
                {t("services.badge")}
              </div>
              <h2 style={{ fontSize: 42, fontWeight: 800, color: "#0a1f14", marginBottom: 16 }}>
                {t("services.title")}
              </h2>
              <p style={{ color: "#5a7062", fontSize: 16, lineHeight: 1.75, maxWidth: 600, margin: "0 auto" }}>
                {t("services.subtitle")}
              </p>
            </div>
          </FadeIn>

          <ServiceCardGrid />

          <FadeIn>
            <div style={{ textAlign: "center", marginTop: 48 }}>
              <Link
                to="/services"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  border: "1.5px solid #0e633d",
                  color: "#0e633d",
                  padding: "13px 32px",
                  borderRadius: 50,
                  fontWeight: 700,
                  fontSize: 14,
                }}
              >
                {t("services.viewAllServices")}
                <Icon name="arrow" size={16} strokeWidth={2.5} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <WhySFGCO />
      <TrustedTech />
      <CTASection />
    </>
  );
}
