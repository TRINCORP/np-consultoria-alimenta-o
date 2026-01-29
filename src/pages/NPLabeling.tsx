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
        title="NP Rotulagem Nutricional"
        description="Rotulagem precisa de alimentos com a NP Rotulagem. Garantimos conformidade regulamentar, informação nutricional precisa e clareza de ingredientes para o seu negócio."
        keywords="rotulagem nutricional, rotulagem alimentos, informação nutricional, conformidade rotulagem, análise nutricional, tabela nutricional"
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
