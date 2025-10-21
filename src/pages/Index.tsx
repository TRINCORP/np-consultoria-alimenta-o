import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HeroServices from "@/components/HeroServices";
import PhilosophySection from "@/components/PhilosophySection";
import FoodServicesSection from "@/components/FoodServicesSection";
import ServicesGrid from "@/components/ServicesGrid";
import ClientsSection from "@/components/ClientsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import FloatingIcons from "@/components/FloatingIcons";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <>
      <SEO 
        title="Consultoria em Alimentação e Nutrição"
        description="Transforme a qualidade alimentar em resultados com a NP Consultoria. Desenvolvemos soluções em serviços de alimentação, garantindo segurança alimentar e conformidade regulamentar."
        keywords="consultoria alimentar, nutrição empresarial, segurança alimentar, rotulagem nutricional, qualidade alimentar, serviços de alimentação, consultoria nutricional Portugal"
      />
      <FloatingIcons />
      <div className="min-h-screen bg-background">
        <Header />
        <Hero />
        <HeroServices />
        <PhilosophySection />
        <FoodServicesSection />
        <ServicesGrid />
        <ClientsSection />
        <TestimonialsSection />
        <FAQSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
