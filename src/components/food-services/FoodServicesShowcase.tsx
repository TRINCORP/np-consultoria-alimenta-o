import { useInView } from "react-intersection-observer";
import {
  ShieldCheck, ClipboardList, GraduationCap,
  Search, Factory, Tag, BarChart3, Building2, ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    number: "01",
    category: "Segurança dos Alimentos",
    title: "Implantação de Boas Práticas",
    description: "Estruturação completa do sistema de BPF conforme legislação sanitária vigente. Cada etapa da sua operação protegida, organizada e em total conformidade.",
    tags: ["Manual BPF", "POP", "Planilhas de controle"],
    featured: true,
  },
  {
    icon: Search,
    number: "02",
    category: "Vigilância Sanitária",
    title: "Adequação Sanitária Completa",
    description: "Do diagnóstico técnico à obtenção do alvará sanitário. Eliminamos riscos de autuações e interdições.",
    tags: ["Diagnóstico", "Plano corretivo", "Alvará"],
    featured: false,
  },
  {
    icon: GraduationCap,
    number: "03",
    category: "Capacitação Certificada",
    title: "Treinamento de Manipuladores",
    description: "Capacitação teórica e prática com certificado para equipes de cozinha. Higiene, controle de temperatura e conduta profissional.",
    tags: ["Certificado", "Boas práticas"],
    featured: false,
  },
  {
    icon: Tag,
    number: "04",
    category: "Conformidade ANVISA",
    title: "Rotulagem Nutricional",
    description: "Tabelas nutricionais e rótulos em total conformidade com as normas da ANVISA. Precisão, clareza e legalidade em cada produto.",
    tags: ["Tabela nutricional", "Alergênicos"],
    featured: false,
  },
  {
    icon: ClipboardList,
    number: "05",
    category: "Eficiência Operacional",
    title: "Redução de Perdas",
    description: "Estratégias para diminuir perdas operacionais e aumentar a rentabilidade com controle de estoque e padronização.",
    tags: ["Controle PVPS", "Padronização"],
    featured: false,
  },
  {
    icon: Factory,
    number: "06",
    category: "Indústria Alimentícia",
    title: "Consultoria para Indústria",
    description: "Apoio técnico completo para abertura, regularização e manutenção de fábricas de alimentos. Da licença sanitária ao registro ANVISA.",
    tags: ["Licença sanitária", "Registro ANVISA"],
    featured: false,
  },
  {
    icon: BarChart3,
    number: "07",
    category: "Auditoria Técnica",
    title: "Auditoria de Rótulos",
    description: "Análise de rótulos existentes, identificação de não conformidades e regularização antes de notificações.",
    tags: ["Auditoria preventiva", "Conformidade"],
    featured: false,
  },
  {
    icon: Building2,
    number: "08",
    category: "Gestão de Pessoas",
    title: "Liderança e Equipe",
    description: "Equipes organizadas com avaliação de desempenho, regulamento interno e desenvolvimento de líderes.",
    tags: ["Liderança", "Processos internos"],
    featured: false,
  },
];

/* ── Individual service card ── */
const Card = ({ s, idx, visible }: { s: typeof services[0]; idx: number; visible: boolean }) => {
  const Icon = s.icon;
  return (
    <div
      className={`group relative rounded-[1.5rem] overflow-hidden
        border border-white/[0.07] bg-white/[0.03]
        ${s.featured ? "md:col-span-2 md:row-span-2" : ""}
        hover:border-[hsl(20_35%_62%/0.4)]
        hover:shadow-[0_24px_56px_hsl(0_0%_0%/0.25)]
        transition-all duration-500
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${idx * 70}ms` }}
    >
      {/* Hover gradient fill */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{ background: "radial-gradient(ellipse at 30% 20%, hsl(20 35% 62% / 0.08), transparent 70%)" }} />

      {/* Shimmer sweep */}
      <div className="absolute inset-0 overflow-hidden rounded-[1.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1000ms] ease-in-out"
          style={{ background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.04) 50%, transparent 60%)" }} />
      </div>

      <div className={`relative z-10 flex flex-col h-full ${s.featured ? "p-9 lg:p-12" : "p-7"}`}>
        {/* Top: number + icon */}
        <div className="flex items-center justify-between mb-auto">
          <span className={`font-playfair font-bold text-white/15 group-hover:text-white/30 transition-colors duration-500
            ${s.featured ? "text-5xl lg:text-6xl" : "text-4xl"}`}>
            {s.number}
          </span>
          <div className={`${s.featured ? "w-14 h-14" : "w-11 h-11"} rounded-2xl flex items-center justify-center
            bg-[hsl(20_35%_62%/0.1)] border border-[hsl(20_35%_62%/0.15)]
            group-hover:bg-[hsl(20_35%_62%/0.2)] group-hover:scale-105 group-hover:-rotate-3
            transition-all duration-500`}>
            <Icon className={`${s.featured ? "w-6 h-6" : "w-5 h-5"} text-[hsl(20_45%_70%)]`} strokeWidth={1.5} />
          </div>
        </div>

        {/* Category pill */}
        <span className="inline-block mt-6 mb-2 text-[10px] font-semibold tracking-[0.25em] uppercase
          text-[hsl(20_45%_68%)] px-3 py-1 rounded-full
          bg-[hsl(20_35%_62%/0.08)] border border-[hsl(20_35%_62%/0.15)]
          w-fit group-hover:bg-[hsl(20_35%_62%/0.15)] transition-colors duration-300">
          {s.category}
        </span>

        {/* Title */}
        <h3 className={`font-playfair font-bold text-white leading-tight mb-3
          group-hover:text-[hsl(20_45%_75%)] transition-colors duration-500
          ${s.featured ? "text-2xl lg:text-3xl" : "text-lg"}`}>
          {s.title}
        </h3>

        {/* Description */}
        <p className={`text-white/45 leading-relaxed mb-5
          ${s.featured ? "text-base max-w-md" : "text-sm"}`}>
          {s.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto mb-4">
          {s.tags.map((tag) => (
            <span key={tag} className="text-[11px] font-medium px-3 py-1.5 rounded-full
              bg-white/[0.05] text-white/40
              group-hover:bg-[hsl(20_35%_62%/0.1)] group-hover:text-[hsl(20_45%_70%)]
              transition-all duration-500">
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom CTA row */}
        <div className="flex items-center gap-2 text-xs font-medium text-white/20
          group-hover:text-[hsl(20_35%_62%)] transition-all duration-500
          pt-3 border-t border-white/[0.06]">
          <span className="tracking-wide">Saiba mais</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
        </div>
      </div>
    </div>
  );
};

const FoodServicesShowcase = () => {
  const { ref: headRef, inView: headInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: gridRef, inView: gridInView } = useInView({ threshold: 0.04, triggerOnce: true });

  return (
    <section id="servicos" className="bg-[#FAF9F7] py-20 lg:py-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 lg:px-16">

        {/* ── Header ── */}
        <div ref={headRef} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20">
          <div>
            <span className={`block text-[11px] font-semibold tracking-[0.32em] uppercase
              text-[hsl(20_35%_58%)] mb-5
              transition-all duration-700 ${headInView ? "opacity-100" : "opacity-0"}`}>
              Nossos Serviços Especializados
            </span>
            <h2
              className={`font-playfair font-bold text-[hsl(210_15%_10%)] leading-[1.08]
                transition-all duration-700 delay-100 ${headInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ fontSize: "clamp(2rem, 4vw, 3.6rem)" }}
            >
              Consultoria que{" "}
              <em className="italic text-[hsl(20_35%_58%)]">protege</em>,<br />
              organiza e transforma.
            </h2>
          </div>

          <p className={`text-[hsl(210_10%_48%)] text-base leading-relaxed max-w-sm
            transition-all duration-700 delay-200 ${headInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            Soluções sob medida em segurança alimentar, adequação sanitária e gestão de qualidade.
          </p>
        </div>

        {/* ── Bento grid ── */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5
            bg-[#1C1A18] rounded-[2rem] p-4 lg:p-5
            shadow-[0_40px_80px_hsl(210_15%_12%/0.18)]"
        >
          {services.map((s, i) => (
            <Card key={i} s={s} idx={i} visible={gridInView} />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div className={`mt-10 flex flex-col sm:flex-row items-center justify-between gap-5
          p-7 rounded-[1.5rem] border border-[hsl(210_10%_88%)] bg-white
          transition-all duration-700 delay-500 ${gridInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="text-[hsl(210_15%_25%)] font-medium text-sm sm:text-base text-center sm:text-left">
            Precisa de uma solução{" "}
            <em className="italic text-[hsl(20_35%_55%)]">personalizada</em>?
            Nossa equipe cria planos sob medida para o seu negócio.
          </p>
          <a
            href={`https://wa.me/5519989750741?text=${encodeURIComponent("Olá! Gostaria de falar com um especialista sobre meu negócio.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 flex-shrink-0
              bg-[hsl(20_35%_62%)] text-white rounded-full
              px-7 py-3.5 text-sm font-semibold
              hover:bg-[hsl(20_35%_55%)]
              hover:shadow-[0_8px_28px_hsl(20_35%_62%/0.4)]
              hover:-translate-y-0.5 transition-all duration-300"
          >
            Falar com Especialista
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FoodServicesShowcase;
