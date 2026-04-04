import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
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
import MarqueeStrip from "@/components/MarqueeStrip";
import CurvedMarquee from "@/components/CurvedMarquee";
import ComparisonSection from "@/components/ComparisonSection";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
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
        title="Consultoria em Segurança Alimentar e Vigilância Sanitária em Indaiatuba"
        description="A NP Consultoria Alimentar é especializada em adequação sanitária, boas práticas, rotulagem nutricional e alvará sanitário para restaurantes, cozinhas industriais e indústrias em Indaiatuba e região."
        keywords="consultoria vigilância sanitária restaurante, consultoria segurança alimentar, adequação sanitária, consultoria Indaiatuba, alvará sanitário, manual de boas práticas, rotulagem nutricional, treinamento manipuladores alimentos, consultoria para abrir restaurante, NP Consultoria" />

      <FloatingIcons />
      <div className="min-h-screen bg-background">
        <Header />

        {/* 1 ── Hero: cinematic NP reveal + rosé intro */}
        <Hero />

        {/* 2 ── FAIXA CURVA ANIMADA (como "IT'S A MATCH(A)" do More Nutrition)
                 Ancora no fundo do hero rosé, texto corre no arco marrom-rosé */}
        <CurvedMarquee />

        {/* 3 ── Stats: 3 números grandes no escuro */}
        <StatsSection />

        {/* 4 ── Marquee flat (claro) entre escuro e branco */}
        <MarqueeStrip variant="light" />

        {/* 5 ── Filosofia da empresa */}
        <PhilosophySection />

        {/* 6 ── Tabela comparativa "Com NP vs Sem NP" */}
        <ComparisonSection />

        {/* 7 ── Por que escolher a NP — statement cards */}
        <WhyChooseUs />

        {/* 8 ── Marquee (escuro) antes dos serviços */}
        <MarqueeStrip variant="dark" />

        {/* 9 ── Serviços */}
        <div id="services">
          <FoodServicesSection />
        </div>
        <ServicesGrid />

        {/* 10 ── Clientes */}
        <ClientsSection />

        {/* 11 ── Depoimentos */}
        <TestimonialsSection />

        {/* 12 ── CTA final */}
        <PremiumCTA />

        <Footer />
      </div>
    </>
  );
};

export default Index;
