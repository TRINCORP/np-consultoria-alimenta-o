import { useInView } from "react-intersection-observer";
import equipeNPHome from "@/assets/equipe_NP_home.jpeg";
import { Search, ClipboardList, TrendingDown, Users, BarChart3, CheckCircle2 } from "lucide-react";

const WHATSAPP_NUMBER = "5519989750741";

const services = [
  {
    icon: Search,
    title: "Diagnóstico Técnico e Operacional",
    desc: "Análise completa da rotina do estabelecimento, identificando falhas, gargalos, riscos sanitários e pontos de desperdício. Elaboramos um plano de ação claro e aplicável.",
  },
  {
    icon: ClipboardList,
    title: "Implantação de Boas Práticas",
    desc: "Organizamos processos conforme a legislação sanitária vigente, garantindo padronização, segurança e tranquilidade em fiscalizações.",
  },
  {
    icon: TrendingDown,
    title: "Redução de Perdas e Desperdícios",
    desc: "Controle de estoque, organização de armazenamento, padronização de produção e monitoramento de validade, impactando diretamente na rentabilidade.",
  },
  {
    icon: Users,
    title: "Gestão de Equipe e Liderança",
    desc: "Estruturamos funções, treinamos líderes e desenvolvemos equipes mais alinhadas, produtivas e comprometidas com os resultados.",
  },
  {
    icon: BarChart3,
    title: "Padronização e Organização",
    desc: "Fichas técnicas, cronogramas de função, check-lists operacionais e rotinas claras que facilitam a gestão diária.",
  },
];

const results = [
  "Operação mais organizada",
  "Redução de retrabalho",
  "Menos desperdício",
  "Maior controle sanitário",
  "Equipe mais produtiva",
  "Melhor desempenho financeiro",
];

const FoodServicesSection = () => {
  const { ref: titleRef, inView: titleInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: textRef, inView: textInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: cardsRef, inView: cardsInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: resultsRef, inView: resultsInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="bg-gradient-to-br from-[#2d2a28] via-[#3d3835] to-[#4a4540] text-white overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(183,166,161,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(214,185,178,0.05),transparent_50%)]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Top section: Image + Intro */}
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full relative z-10 min-h-screen">
        <div className="h-[400px] sm:h-[500px] lg:h-screen overflow-hidden relative group order-2 lg:order-1 lg:sticky lg:top-0">
          <img 
            src={equipeNPHome} 
            alt="Equipe NP Consultoria realizando diagnóstico operacional em cozinha industrial" 
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2d2a28]/60 via-[#2d2a28]/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2d2a28]/40 to-transparent lg:hidden" />
        </div>
        
        <div className="flex items-center px-6 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-20 order-1 lg:order-2">
          <div className="max-w-xl">
            <h2 
              ref={titleRef}
              className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-playfair font-bold mb-6 sm:mb-8 leading-tight transition-all duration-700 ${
                titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Melhorar as{' '}
              <span className="italic text-[#d6b9b2]">Operações de Serviços de Alimentação</span>
              {' '}com uma Consultoria Especializada
            </h2>
            
            <p 
              ref={textRef}
              className={`text-sm sm:text-base lg:text-lg mb-4 text-white/85 leading-relaxed transition-all duration-700 delay-200 ${
                textInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              A melhoria operacional em serviços de alimentação não acontece por acaso. Ela exige <strong className="text-white">método, organização, conhecimento técnico</strong> e gestão eficiente.
            </p>
            <p 
              className={`text-sm sm:text-base lg:text-lg mb-8 text-white/75 leading-relaxed transition-all duration-700 delay-300 ${
                textInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              A NP Consultoria atua diretamente na estruturação e otimização de operações, promovendo segurança dos alimentos, redução de perdas e aumento da eficiência produtiva.
            </p>

            {/* Quick service list preview */}
            <ul className="space-y-3">
              {services.slice(0, 3).map((item, index) => {
                const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
                return (
                  <li 
                    key={index}
                    ref={ref}
                    className={`flex items-start gap-3 group transition-all duration-500 ${
                      inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                    }`}
                    style={{ transitionDelay: `${400 + index * 150}ms` }}
                  >
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-[#d6b9b2] to-[#b7a6a1] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="transition-all duration-300 group-hover:translate-x-1">
                      <h3 className="font-semibold text-white text-sm sm:text-base">{item.title}</h3>
                      <p className="text-white/70 text-xs sm:text-sm">{item.desc}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Full services cards section */}
      <div ref={cardsRef} className="relative z-10 px-6 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <span className={`inline-block px-4 py-2 rounded-full bg-[#d6b9b2]/15 text-[#d6b9b2] text-sm font-medium mb-5 border border-[#d6b9b2]/20 transition-all duration-700 ${
              cardsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              Nossas Áreas de Atuação
            </span>
            <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold transition-all duration-700 delay-100 ${
              cardsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              Como a NP Consultoria{' '}
              <span className="italic text-[#d6b9b2]">transforma</span> sua operação
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`group relative bg-white/[0.04] backdrop-blur-sm border border-[#d6b9b2]/20 rounded-2xl p-6 sm:p-8 cursor-pointer
                    transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:bg-white/[0.08] hover:border-[#d6b9b2]/50
                    ${cardsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  {/* Hover shine effect */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-[#d6b9b2]/10 to-transparent group-hover:left-full transition-all duration-700" />
                  </div>

                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d6b9b2]/20 to-[#b7a6a1]/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Icon className="w-6 h-6 text-[#d6b9b2]" />
                    </div>
                    <h4 className="font-semibold text-white text-base sm:text-lg mb-3">{item.title}</h4>
                    <p className="text-white/65 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Results section */}
      <div ref={resultsRef} className="relative z-10 px-6 sm:px-8 lg:px-16 pb-16 sm:pb-20 lg:pb-28">
        <div className="max-w-4xl mx-auto">
          <div className={`bg-gradient-to-br from-[#d6b9b2]/10 to-[#b7a6a1]/5 border border-[#d6b9b2]/20 rounded-3xl p-8 sm:p-10 lg:p-14 transition-all duration-700 ${
            resultsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h3 className={`text-xl sm:text-2xl lg:text-3xl font-playfair font-bold text-center mb-8 transition-all duration-700 delay-100 ${
              resultsInView ? 'opacity-100' : 'opacity-0'
            }`}>
              O resultado?
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {results.map((result, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 transition-all duration-500 ${
                    resultsInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-[#d6b9b2] flex-shrink-0" />
                  <span className="text-white/90 text-sm sm:text-base">{result}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#d6b9b2]/15 text-center">
              <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-6">
                Uma consultoria especializada não apenas adequa sua empresa às normas. Ela{' '}
                <strong className="text-[#d6b9b2]">estrutura seu negócio para crescer</strong> com segurança, eficiência e profissionalismo.
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre a consultoria para meu estabelecimento.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#d6b9b2] text-[#2d2a28] font-semibold text-sm hover:bg-[#d6b9b2]/90 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Solicitar Diagnóstico Gratuito
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodServicesSection;
