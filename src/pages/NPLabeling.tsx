import Header from "@/components/Header";
import NPLabelingHero from "@/components/NPLabelingHero";
import NPLabelingVideoCard from "@/components/NPLabelingVideoCard";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const NPLabeling = () => {
  return (
    <>
      <SEO 
        title="Rotulagem Nutricional e Tabela Nutricional para Alimentos"
        description="A NP Rotulagem elabora tabelas nutricionais e rótulos conforme ANVISA para produtos artesanais, industriais e para venda em supermercados. Atendemos Indaiatuba e região."
        keywords="tabela nutricional, rotulagem nutricional ANVISA, empresa de rotulagem nutricional, rotulagem para produtos artesanais, rotulagem para vender em mercado, quanto custa fazer tabela nutricional, como registrar produto alimentício, regras ANVISA para vender alimentos, legislação para alimentos artesanais"
      />
      <div className="min-h-screen bg-background">
        <Header />
        <NPLabelingHero />
        <NPLabelingVideoCard />
        <ExperienceSection />
        <Footer />
      </div>
    </>
  );
};

export default NPLabeling;
