import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HeroServices from "@/components/HeroServices";
import IntroAnimation from "@/components/IntroAnimation";
import PhilosophySection from "@/components/PhilosophySection";
import FoodServicesSection from "@/components/FoodServicesSection";
import ServicesGrid from "@/components/ServicesGrid";
import ClientsSection from "@/components/ClientsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import FloatingIcons from "@/components/FloatingIcons";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import WhyChooseUs from "@/components/WhyChooseUs";
import StatsSection from "@/components/StatsSection";
import PremiumCTA from "@/components/PremiumCTA";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    // Verifica se já viu a intro nesta sessão
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");
    if (hasSeenIntro) {
      setShowIntro(false);
      setIntroComplete(true);
    }
  }, []);

  const handleIntroComplete = () => {
    sessionStorage.setItem("hasSeenIntro", "true");
    setIntroComplete(true);
  };

  return (
    <>
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      <SEO 
        title="Consultoria em Alimentação e Nutrição"
        description="Transforme a qualidade alimentar em resultados com a NP Consultoria. Desenvolvemos soluções em serviços de alimentação, garantindo segurança alimentar e conformidade regulamentar."
        keywords="consultoria alimentar, nutrição empresarial, segurança alimentar, rotulagem nutricional, qualidade alimentar, serviços de alimentação, consultoria nutricional Brasil"
      />
      <FloatingIcons />
      <div className="min-h-screen bg-background">
        <Header />
        <Hero />
        <div id="services">
          <HeroServices />
        </div>
        <StatsSection />
        <PhilosophySection />
        <WhyChooseUs />
        <FoodServicesSection />
        <ServicesGrid />
        <ClientsSection />
        <TestimonialsSection />
        <FAQSection />
        <PremiumCTA />
        <Footer />
      </div>
    </>
  );
};

export default Index;
