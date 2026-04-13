import HeroSection from '../components/HeroSection';
import TrustStrip from '../components/TrustStrip';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ImpactCounters from '../components/ImpactCounters';
import InvestmentOpportunities from '../components/InvestmentOpportunities';
import WhySFGCO from '../components/WhySFGCO';
import FeaturedProjects from '../components/FeaturedProjects';
import Testimonials from '../components/Testimonials';
import TeamSection from '../components/TeamSection';
import ProcessSection from '../components/ProcessSection';
import CTASection from '../components/CTASection';

/**
 * Home page — composes every landing page section in order.
 * Each section is a standalone component that can also be reused on other pages.
 */
export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <AboutSection />
      <ServicesSection />
      <ImpactCounters />
      <InvestmentOpportunities />
      <WhySFGCO />
      <FeaturedProjects />
      <Testimonials />
      <TeamSection />
      <ProcessSection />
      <CTASection />
    </>
  );
}
