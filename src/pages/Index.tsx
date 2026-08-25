import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IntroAnimation from "@/components/IntroAnimation";
import ServiceNavigator from "@/components/ServiceNavigator";
import PhilosophySection from "@/components/PhilosophySection";
import FoodServicesSection from "@/components/FoodServicesSection";
import ClientsSection from "@/components/ClientsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import WhyChooseUs from "@/components/WhyChooseUs";
import StatsSection from "@/components/StatsSection";
import PremiumCTA from "@/components/PremiumCTA";

const Index = () => {
  const [showIntro, setShowIntro] = useState(
    () => !sessionStorage.getItem("hasSeenIntroV2")
  );

  const handleIntroComplete = () => {
    sessionStorage.setItem("hasSeenIntroV2", "true");
    setShowIntro(false);
  };

  return (
    <>
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      <SEO
        title="Consultoria em Segurança Alimentar e Vigilância Sanitária em Indaiatuba"
        description="A NP Consultoria Alimentar é especializada em adequação sanitária, boas práticas, rotulagem nutricional e alvará sanitário para restaurantes, cozinhas industriais e indústrias em Indaiatuba e região."
        keywords="consultoria vigilância sanitária restaurante, consultoria segurança alimentar, adequação sanitária, consultoria Indaiatuba, alvará sanitário, manual de boas práticas, rotulagem nutricional, treinamento manipuladores alimentos, consultoria para abrir restaurante, NP Consultoria" />

      <div className="min-h-screen bg-background">
        <Header />
        <Hero />
        <ServiceNavigator />
        <StatsSection />
        <FoodServicesSection />
        <ClientsSection />
        <PhilosophySection />
        <WhyChooseUs />
        <TestimonialsSection />
        <PremiumCTA />
        <Footer />
      </div>
    </>);

};

export default Index;
