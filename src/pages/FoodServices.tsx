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
        title="Consultoria Vigilância Sanitária Restaurante e Indústria | Indaiatuba"
        description="Consultoria em vigilância sanitária para restaurante, cozinha industrial e indústria de alimentos em Indaiatuba e região de Campinas. Manual de boas práticas, alvará sanitário, treinamento de manipuladores, rotulagem nutricional ANVISA e adequação sanitária completa."
        keywords="consultoria vigilância sanitária restaurante, como regularizar restaurante na vigilância sanitária, adequação sanitária para restaurante, como passar na vigilância sanitária, manual de boas práticas vigilância sanitária, consultoria segurança alimentar, adequação sanitária para cozinha industrial, consultoria para alvará sanitário, o que a vigilância sanitária exige em restaurante, manual de boas práticas para restaurante, como fazer manual de boas práticas, empresa que faz manual de boas práticas, POP manipulação de alimentos, documentação vigilância sanitária restaurante, manual de boas práticas cozinha industrial, documentos obrigatórios vigilância sanitária, treinamento manipulação de alimentos, curso boas práticas manipulação de alimentos, treinamento vigilância sanitária restaurante, capacitação manipuladores de alimentos, consultoria para restaurante, consultoria alimentar, consultoria para cozinha industrial, consultoria segurança alimentar restaurante, consultoria para abrir restaurante, como abrir fábrica de alimentos, regularizar fábrica de alimentos, licença sanitária indústria de alimentos, consultoria indústria alimentícia, consultoria vigilância sanitária Indaiatuba, rotulagem nutricional Indaiatuba, tabela nutricional Indaiatuba, consultoria segurança alimentar Indaiatuba, manual de boas práticas Indaiatuba, consultoria restaurante Indaiatuba"
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
