import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ShieldCheck, ClipboardList, Building, Factory, GraduationCap, Utensils, ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    title: "Consultoria em Vigilância Sanitária para Restaurantes",
    subtitle: "Adequação sanitária completa",
    description: "Auxílio completo para adequar o seu restaurante às normas da vigilância sanitária, desde o diagnóstico inicial até a obtenção do alvará sanitário.",
    deliverables: [
      "Visita técnica e diagnóstico in loco",
      "Plano de ação com cronograma",
      "Acompanhamento em vistorias da vigilância",
      "Obtenção do alvará sanitário",
    ],
  },
  {
    icon: ClipboardList,
    title: "Manual de Boas Práticas e POP",
    subtitle: "Documentação obrigatória para vigilância sanitária",
    description: "Elaboração do Manual de Boas Práticas e dos Procedimentos Operacionais Padrão (POP) exigidos pela vigilância sanitária, personalizados para o seu negócio.",
    deliverables: [
      "Manual de Boas Práticas personalizado",
      "POPs de manipulação de alimentos",
      "Documentação conforme ANVISA",
      "Treinamento da equipe sobre os procedimentos",
    ],
  },
  {
    icon: Building,
    title: "Adequação Sanitária para Cozinhas Industriais",
    subtitle: "Conformidade para operações de grande escala",
    description: "Diagnóstico e adequação das instalações, processos e documentação de cozinhas industriais às normas vigentes da ANVISA e vigilância sanitária municipal.",
    deliverables: [
      "Diagnóstico técnico completo",
      "Adequação de instalações e processos",
      "Documentação obrigatória atualizada",
      "Monitoramento contínuo de conformidade",
    ],
  },
  {
    icon: Factory,
    title: "Consultoria para Indústria Alimentícia",
    subtitle: "Abertura, regularização e manutenção",
    description: "Apoio técnico para abertura, regularização e manutenção de fábricas e indústrias de alimentos junto aos órgãos competentes. Licença sanitária e registro de produtos.",
    deliverables: [
      "Projeto e layout conforme legislação",
      "Licença sanitária para indústria",
      "Registro de produtos na ANVISA",
      "Acompanhamento em fiscalizações",
    ],
  },
  {
    icon: GraduationCap,
    title: "Treinamento de Manipuladores de Alimentos",
    subtitle: "Capacitação prática com certificado",
    description: "Capacitação prática e teórica para equipes de cozinha e manipuladores de alimentos, com certificado e material didático inclusos. Atendemos em Indaiatuba e região.",
    deliverables: [
      "Curso de boas práticas de manipulação",
      "Material didático completo",
      "Certificado de conclusão",
      "Avaliação e acompanhamento pós-treinamento",
    ],
  },
  {
    icon: Utensils,
    title: "Consultoria para Abertura de Restaurante",
    subtitle: "Do projeto à inauguração",
    description: "Acompanhamento completo desde o projeto até a inauguração: layout, fluxo de produção, documentação sanitária, treinamento da equipe e liberação do alvará.",
    deliverables: [
      "Projeto de layout e fluxo operacional",
      "Documentação sanitária completa",
      "Treinamento inicial da equipe",
      "Acompanhamento até liberação do alvará",
    ],
  },
];

const ServicesGrid = () => {
  const containerRef = useScrollReveal();

  return (
    <section ref={containerRef} id="services-grid" className="bg-gradient-to-b from-muted/30 via-background to-background py-20 md:py-28 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.03),transparent_50%)]" />
      <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16 md:mb-20">
          <div>
            <span className="scroll-reveal-left inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Nossos Serviços
            </span>
            <h2 className="scroll-reveal-blur stagger-1 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Soluções Completas em{" "}
              <span className="text-gradient italic font-playfair">Segurança Alimentar e Vigilância Sanitária</span>
            </h2>
          </div>
          <div className="flex items-center">
            <p className="scroll-reveal-right stagger-2 text-base lg:text-lg text-muted-foreground leading-relaxed">
              A NP Consultoria Alimentar oferece serviços especializados em adequação sanitária, 
              rotulagem nutricional, manual de boas práticas e consultoria para restaurantes, 
              cozinhas industriais, indústrias e produtores artesanais em Indaiatuba e região.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className={`scroll-reveal-left stagger-${Math.min(index + 3, 8)} group relative rounded-2xl bg-card/50 backdrop-blur-sm border border-border/30 overflow-hidden
                  hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500`}
              >
                {/* Icon header */}
                <div className="p-6 md:p-8 pb-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold mb-1 text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-xs text-primary/70 font-medium mb-3">{service.subtitle}</p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                {/* Deliverables */}
                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <ul className="space-y-2 mb-5">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary/60 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="rounded-full border-border/50 hover:border-primary hover:bg-primary/5 transition-all duration-300 group/btn"
                  >
                    Solicitar Orçamento
                    <ArrowRight className="ml-1 w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
