import Header from "@/components/Header";
import FoodServicesSection from "@/components/FoodServicesSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const FoodServices = () => {
  return (
    <>
      <SEO 
        title="Serviços de Alimentação"
        description="Serviços de consultoria especializados para empresas de alimentação. Otimização de processos, garantia de qualidade e conformidade com os regulamentos de segurança alimentar."
        keywords="consultoria alimentar, otimização cozinha, garantia qualidade, conformidade alimentar, segurança alimentar, inspeção alimentos"
      />
      <div className="min-h-screen bg-background">
        <Header />
        <FoodServicesSection />
        <Footer />
      </div>
    </>
  );
};

export default FoodServices;
