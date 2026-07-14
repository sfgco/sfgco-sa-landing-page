import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import IndustriesSection from "../components/IndustriesSection";
import WhySFGCO from "../components/WhySFGCO";
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
      <title>SFGCO Tech | Transforming Ideas into Intelligent Digital Products</title>
      <meta
        name="description"
        content="SFGCO Tech builds AI-powered software, cloud-native platforms, enterprise ERP solutions, mobile applications, and immersive gaming experiences that help businesses innovate, scale, and succeed."
      />
      <meta property="og:url" content="https://sfgco.sa/" />
      <meta
        property="og:title"
        content="SFGCO Tech | Transforming Ideas into Intelligent Digital Products"
      />
      <link rel="canonical" href="https://sfgco.sa/" />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhySFGCO />
      <IndustriesSection />
      <Testimonials />
      <TeamSection />
      <ProcessSection />
      <CTASection />
    </>
  );
}
