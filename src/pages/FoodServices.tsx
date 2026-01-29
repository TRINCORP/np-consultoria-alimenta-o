import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Construction } from "lucide-react";

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
        
        {/* Under Development Section */}
        <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-[#1a1a1a] to-background">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-2xl mx-auto space-y-8">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-6">
                <Construction className="w-12 h-12 text-primary" />
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Página em <span className="text-gradient italic font-playfair">Desenvolvimento</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Estamos a trabalhar para trazer-lhe uma experiência incrível. 
                Esta secção estará disponível em breve.
              </p>
              
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground/60">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span>Em construção</span>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default FoodServices;
