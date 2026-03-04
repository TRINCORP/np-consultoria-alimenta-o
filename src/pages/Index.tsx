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
        title="Segurança, Conformidade e Estratégia para o Seu Negócio de Alimentos"
        description="A NP Consultoria e NP Rotulagem oferecem soluções completas para empresas do setor alimentício: segurança sanitária, organização operacional, prevenção de perdas, regularização de produtos e desenvolvimento de rótulos."
        keywords="consultoria alimentar, segurança sanitária, rotulagem nutricional, boas práticas alimentação, regularização de produtos, identidade visual alimentos, prevenção de perdas, conformidade legislação alimentar, NP Consultoria, NP Rotulagem" />
      
      <FloatingIcons />
      <div className="min-h-screen bg-background">
        <Header />
        <Hero />
        <div id="services">
          
        </div>
        <StatsSection />
        <PhilosophySection />
        <WhyChooseUs />
        <FoodServicesSection />
        <ServicesGrid />
        <ClientsSection />
        <TestimonialsSection />
        <PremiumCTA />
        <Footer />
      </div>
    </>);

};

export default Index;