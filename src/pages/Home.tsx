import { useTranslation } from "react-i18next";
import HeroSection from "../components/HeroSection";
import PreviewCard from "../components/PreviewCard";
import NewsTeaserSection from "../components/NewsTeaserSection";
import FadeIn from "../components/FadeIn";

/** Truncate real document text for a compact preview card without altering its wording. */
function truncate(text: string, max: number) {
  if (text.length <= max) return text;
  return `${text.slice(0, max).trimEnd()}…`;
}

/**
 * Home — a modern overview page. The full content of every section now lives
 * on its own dedicated route; this page previews each one and links out.
 */
export default function Home() {
  const { t } = useTranslation();
  const readMore = t("common.readMore");

  const serviceTitles = [
    t("services.items.direct.title"),
    t("services.items.portfolio.title"),
    t("services.items.development.title"),
    t("services.items.advisory.title"),
    t("services.items.feasibility.title"),
    t("services.items.partnerships.title"),
  ].join("، ");

  const sectorTitles = [
    t("sectors.items.renewable.title"),
    t("sectors.items.environment.title"),
    t("sectors.items.realEstate.title"),
    t("sectors.items.tech.title"),
    t("sectors.items.agriculture.title"),
    t("sectors.items.water.title"),
    t("sectors.items.recycling.title"),
    t("sectors.items.logistics.title"),
  ].join("، ");

  const valueNames = [
    t("values.items.sustainability"),
    t("values.items.transparency"),
    t("values.items.innovation"),
    t("values.items.responsibility"),
    t("values.items.professionalism"),
    t("values.items.partnership"),
    t("values.items.excellence"),
  ].join("، ");

  const whyUsTitles = [
    t("whyUs.items.expertise.title"),
    t("whyUs.items.innovative.title"),
    t("whyUs.items.sustainability.title"),
    t("whyUs.items.risk.title"),
    t("whyUs.items.longterm.title"),
    t("whyUs.items.governance.title"),
  ].join("، ");

  return (
    <>
      <title>SFGCO | مستقبل الاستدامة الخضراء للاستثمار</title>
      <meta
        name="description"
        content="شركة مستقبل الاستدامة الخضراء للاستثمار (SFGCO) — شركة استثمار سعودية متخصصة في الاستثمار وتطوير المشاريع في القطاعات الاقتصادية المستدامة."
      />
      <meta property="og:url" content="https://sfgco.sa/" />
      <meta property="og:title" content="SFGCO | مستقبل الاستدامة الخضراء للاستثمار" />
      <link rel="canonical" href="https://sfgco.sa/" />

      <HeroSection />

      <section style={{ background: "#fff", padding: "110px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
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
                {t("home.overviewBadge")}
              </div>
              <h2 style={{ fontSize: 40, fontWeight: 800, color: "#0a1f14" }}>{t("home.overviewTitle")}</h2>
            </div>
          </FadeIn>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 22,
            }}
          >
            <FadeIn>
              <PreviewCard
                to="/about"
                eyebrow={t("about.badge")}
                title={t("about.title")}
                ctaLabel={readMore}
                icon={<path d="M3 21h18M5 21V7l7-4 7 4v14M9 9h1m4 0h1m-6 4h1m4 0h1m-6 4h1m4 0h1" />}
              >
                {truncate(t("about.body"), 150)}
              </PreviewCard>
            </FadeIn>

            <FadeIn delay={40}>
              <PreviewCard
                to="/vision"
                eyebrow={t("visionMission.badge")}
                title={t("visionMission.visionTitle")}
                ctaLabel={readMore}
                dark
                icon={
                  <>
                    <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </>
                }
              >
                {t("visionMission.visionBody")}
              </PreviewCard>
            </FadeIn>

            <FadeIn delay={80}>
              <PreviewCard
                to="/mission"
                eyebrow={t("visionMission.badge")}
                title={t("visionMission.missionTitle")}
                ctaLabel={readMore}
                icon={<path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z" />}
              >
                {t("visionMission.missionBody")}
              </PreviewCard>
            </FadeIn>

            <FadeIn delay={0}>
              <PreviewCard
                to="/values"
                eyebrow={t("values.badge")}
                title={t("values.title")}
                ctaLabel={readMore}
                icon={<path d="M12 22c-4.4-1.2-8-5.6-8-11 0-3 1.4-5.6 3.6-7.3C9.2 2.3 10.6 2 12 2s2.8.3 4.4 1.7C18.6 5.4 20 8 20 11c0 5.4-3.6 9.8-8 11z" />}
              >
                {valueNames}
              </PreviewCard>
            </FadeIn>

            <FadeIn delay={40}>
              <PreviewCard
                to="/strategic-goals"
                eyebrow={t("goals.badge")}
                title={t("goals.title")}
                ctaLabel={readMore}
                icon={<path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.6 10.8c.5.4.8 1 .8 1.7v.5h5.6v-.5c0-.7.3-1.3.8-1.7A6 6 0 0012 3z" />}
              >
                {t("goals.items.0")}
              </PreviewCard>
            </FadeIn>

            <FadeIn delay={80}>
              <PreviewCard
                to="/services"
                eyebrow={t("services.badge")}
                title={t("services.title")}
                ctaLabel={readMore}
                dark
                icon={<path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />}
              >
                {serviceTitles}
              </PreviewCard>
            </FadeIn>

            <FadeIn delay={0}>
              <PreviewCard
                to="/investment-sectors"
                eyebrow={t("sectors.badge")}
                title={t("sectors.title")}
                ctaLabel={readMore}
                icon={<path d="M12 3v2m0 14v2m9-9h-2M5 12H3m14.4-6.4l-1.4 1.4M7 17l-1.4 1.4m0-12.8L7 7m10 10l1.4 1.4M12 8a4 4 0 100 8 4 4 0 000-8z" />}
              >
                {sectorTitles}
              </PreviewCard>
            </FadeIn>

            <FadeIn delay={40}>
              <PreviewCard
                to="/why-us"
                eyebrow={t("whyUs.badge")}
                title={t("whyUs.title")}
                ctaLabel={readMore}
                icon={<path d="M12 2l2.6 5.9 6.4.6-4.8 4.3 1.4 6.2L12 15.9 6.4 19l1.4-6.2-4.8-4.3 6.4-.6z" />}
              >
                {whyUsTitles}
              </PreviewCard>
            </FadeIn>

            <FadeIn delay={80}>
              <PreviewCard
                to="/projects"
                eyebrow={t("projects.badge")}
                title={t("projects.title")}
                ctaLabel={readMore}
                dark
                icon={<path d="M3 21h18M5 21V7l7-4 7 4v14M9 9h1m4 0h1m-6 4h1m4 0h1m-6 4h1m4 0h1" />}
              >
                {t("projects.body")}
              </PreviewCard>
            </FadeIn>

            <FadeIn delay={0}>
              <PreviewCard
                to="/opportunities"
                eyebrow={t("opportunities.badge")}
                title={t("opportunities.title")}
                ctaLabel={readMore}
                icon={<path d="M12 8v4l3 3M12 2a10 10 0 100 20 10 10 0 000-20z" />}
              >
                {t("opportunities.body")}
              </PreviewCard>
            </FadeIn>

            <FadeIn delay={40}>
              <PreviewCard
                to="/partners"
                eyebrow={t("partners.badge")}
                title={t("partners.title")}
                ctaLabel={readMore}
                icon={<path d="M8 12a3 3 0 100-6 3 3 0 000 6zM16 12a3 3 0 100-6 3 3 0 000 6zM3 20c0-3 2.5-5 5-5s5 2 5 5M11 20c0-3 2.5-5 5-5s5 2 5 5" />}
              />
            </FadeIn>

            <FadeIn delay={80}>
              <PreviewCard
                to="/contact"
                eyebrow={t("contact.badge")}
                title={t("contact.title")}
                ctaLabel={readMore}
                dark
                icon={<path d="M3 8l9 6 9-6M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1z" />}
              >
                {t("contact.location")}
              </PreviewCard>
            </FadeIn>
          </div>
        </div>
      </section>

      <NewsTeaserSection />
    </>
  );
}
