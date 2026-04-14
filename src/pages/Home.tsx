import HeroSection from "../components/HeroSection";
import TrustStrip from "../components/TrustStrip";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import ImpactCounters from "../components/ImpactCounters";
import InvestmentOpportunities from "../components/InvestmentOpportunities";
import TechAISection from "../components/TechAISection";
import WhySFGCO from "../components/WhySFGCO";
import FeaturedProjects from "../components/FeaturedProjects";
import Testimonials from "../components/Testimonials";
import TeamSection from "../components/TeamSection";
import ProcessSection from "../components/ProcessSection";
import CTASection from "../components/CTASection";

/**
 * Home page — composes every landing page section in order.
 * Each section is a standalone component that can also be reused on other pages.
 */
export default function Home() {
  return (
    <>
      <title>SFGCO | Sustainable Green Investment Company</title>
      <meta
        name="description"
        content="SFGCO pioneers sustainable investment — connecting visionary capital with transformative green projects across 42 countries. $2.4B+ assets managed. Build wealth. Restore the planet."
      />
      <meta property="og:url" content="https://sfgco.sa/" />
      <meta
        property="og:title"
        content="SFGCO | Sustainable Green Investment Company"
      />
      <link rel="canonical" href="https://sfgco.sa/" />
      <HeroSection />
      <TrustStrip />
      <AboutSection />
      <ServicesSection />
      <ImpactCounters />
      <InvestmentOpportunities />
      <TechAISection />
      <WhySFGCO />
      <FeaturedProjects />
      <Testimonials />
      <TeamSection />
      <ProcessSection />
      <CTASection />
    </>
  );
}
