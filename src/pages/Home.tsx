import HeroSection from "../components/HeroSection";
import PartnerLogosStrip from "../components/PartnerLogosStrip";
import WhyUsPreviewSection from "../components/WhyUsPreviewSection";

/**
 * Home — a modern overview page. The full content of every section lives on
 * its own dedicated route; this page pitches the company and links out.
 */
export default function Home() {
  return (
    <>
      <title>SFGCO | شركة مستقبل الاستدامة الخضراء للاستثمار</title>
      <meta
        name="description"
        content="شركة  مستقبل الاستدامة الخضراء للاستثمار (SFGCO) — شركة استثمار سعودية متخصصة في الاستثمار وتطوير المشاريع في القطاعات الاقتصادية المستدامة."
      />
      <meta property="og:url" content="https://sfgco.sa/" />
      <meta
        property="og:title"
        content="SFGCO | شركة مستقبل الاستدامة الخضراء للاستثمار"
      />
      <link rel="canonical" href="https://sfgco.sa/" />

      <HeroSection />
      <WhyUsPreviewSection />
      <PartnerLogosStrip />
    </>
  );
}
