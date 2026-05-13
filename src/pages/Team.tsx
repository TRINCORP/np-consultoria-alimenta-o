import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Team3DCarousel from "@/components/Team3DCarousel";
import { teamMembers } from "@/data/teamMembers";
import SEO from "@/components/SEO";
import { CheckCircle2, Star } from "lucide-react";

const professionals = [
  "Nutricionistas",
  "Médicos Veterinários",
  "Psicólogos",
  "Chefs de Cozinha",
  "Consultores de Recursos Humanos",
  "Especialistas em Gestão de Estoque",
  "Especialistas em Prevenção de Perdas",
];

const Team = () => {
  return (
    <>
      <SEO
        title="Nossa Equipe — NP Consultoria e NP Rotulagem"
        description="Equipe multidisciplinar da NP Consultoria: nutricionistas, médicos veterinários, chefs de cozinha, consultores de RH e especialistas em segurança alimentar. Experiência prática e conhecimento técnico para o setor alimentício em Indaiatuba e região de Campinas."
        keywords="equipe NP Consultoria, nutricionistas Indaiatuba, consultores alimentares, especialistas segurança alimentar, médico veterinário alimentos, chef de cozinha consultor, gestão estoque alimentação, prevenção perdas restaurante"
      />
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Team3DCarousel members={teamMembers} />

          {/* ── Texto SEO / Apresentação da equipe ── */}
          <section className="bg-[#FAF9F7] py-16 lg:py-24">
            <div className="max-w-[900px] mx-auto px-6 sm:px-12 lg:px-16">

              {/* Intro */}
              <div className="mb-12">
                <span className="block text-[11px] font-semibold tracking-[0.32em] uppercase text-[hsl(20_35%_58%)] mb-4">
                  Quem somos
                </span>
                <h2 className="font-playfair font-bold text-[hsl(210_15%_10%)] leading-[1.1] mb-6"
                  style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
                  Na NP Consultoria e NP Rotulagem, acreditamos que excelência exige{" "}
                  <em className="italic text-[hsl(20_35%_55%)]">conhecimento técnico aliado à experiência prática</em>.
                </h2>
                <p className="text-[hsl(210_10%_42%)] text-base leading-relaxed">
                  Nossa equipe é formada por consultores qualificados e especializados, preparados para atuar
                  de forma estratégica em todas as áreas que impactam o setor alimentício.
                </p>
              </div>

              {/* Profissionais */}
              <div className="bg-white rounded-[1.5rem] border border-[hsl(20_35%_70%/0.18)] p-8 lg:p-10 mb-10">
                <p className="text-[hsl(210_10%_42%)] text-sm font-medium uppercase tracking-widest mb-6 text-center">
                  Contamos com profissionais multidisciplinares, incluindo
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {professionals.map((p) => (
                    <div key={p} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[hsl(20_38%_55%)] flex-shrink-0" strokeWidth={2} />
                      <span className="text-[hsl(210_15%_18%)] text-sm font-medium">{p}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Texto complementar */}
              <div className="space-y-5 text-[hsl(210_10%_42%)] text-base leading-relaxed mb-12">
                <p>
                  Essa estrutura permite que nossa atuação vá além da adequação sanitária. Trabalhamos o
                  negócio de forma completa — desde{" "}
                  <strong className="text-[hsl(210_15%_15%)] font-semibold">segurança dos alimentos, organização operacional e rotulagem</strong>,
                  até desenvolvimento de equipe, liderança e gestão estratégica.
                </p>
                <p>
                  Unimos técnica, gestão e comportamento humano para entregar soluções aplicáveis,
                  eficientes e sustentáveis.
                </p>
              </div>

              {/* Diferencial NP */}
              <div className="relative rounded-[1.5rem] overflow-hidden p-8 lg:p-10"
                style={{ background: "linear-gradient(135deg, #1C1A18, #252220)" }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at top, hsl(20 35% 62% / 0.15), transparent 65%)" }} />
                <div className="relative z-10 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[hsl(20_35%_62%/0.15)] flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5 text-[hsl(20_45%_68%)]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="block text-[11px] font-semibold tracking-[0.28em] uppercase text-[hsl(20_45%_65%)] mb-2">
                      Diferencial NP
                    </span>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Nosso trabalho integra{" "}
                      <strong className="text-white font-semibold">conhecimento técnico, visão estratégica e experiência prática de mercado</strong>,
                      garantindo resultados reais para empresas do setor alimentício.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Team;
