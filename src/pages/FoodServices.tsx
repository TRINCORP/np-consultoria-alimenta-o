import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FoodServicesHero from "@/components/food-services/FoodServicesHero";
import FoodServicesTimeline from "@/components/food-services/FoodServicesTimeline";
import FoodServicesCTA from "@/components/food-services/FoodServicesCTA";
import FoodServicesSegments from "@/components/food-services/FoodServicesSegments";
import FoodServicesDifferentials from "@/components/food-services/FoodServicesDifferentials";
import FoodServicesMural from "@/components/food-services/FoodServicesMural";

const FoodServices = () => {
  return (
    <>
      <SEO
        title="Consultoria em Serviços de Alimentação | NP Consultoria"
        description="Consultoria especializada em segurança alimentar, boas práticas, redução de desperdícios, gestão de equipe e rotulagem nutricional. Estruture seu negócio para crescer com segurança e profissionalismo."
        keywords="consultoria alimentar, boas práticas alimentação, segurança alimentar, vigilância sanitária, rotulagem nutricional, redução desperdícios, gestão equipe alimentação, treinamento manipuladores, NP Consultoria"
      />
      <div className="min-h-screen">
        <Header />
        <FoodServicesHero />
        <FoodServicesTimeline />
        <FoodServicesMural />
        <FoodServicesSegments />
        <FoodServicesDifferentials />
        <FoodServicesCTA />
        <Footer />
      </div>
    </>
  );
};

export default FoodServices;
