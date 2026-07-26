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
  },
  {
    icon: Search,
    number: "02",
    category: "Vigilância Sanitária",
    title: "Adequação Sanitária Completa",
    description: "Do diagnóstico técnico à obtenção do alvará sanitário. Eliminamos riscos de autuações e interdições.",
    tags: ["Diagnóstico", "Plano corretivo", "Alvará"],
  },
  {
    icon: GraduationCap,
    number: "03",
    category: "Capacitação Certificada",
    title: "Treinamento de Manipuladores",
    description: "Capacitação teórica e prática com certificado para equipes de cozinha. Higiene, controle de temperatura e conduta profissional.",
    tags: ["Certificado", "Boas práticas"],
  },
  {
    icon: Tag,
    number: "04",
    category: "Conformidade ANVISA",
    title: "Rotulagem Nutricional",
    description: "Tabelas nutricionais e rótulos em total conformidade com as normas da ANVISA. Precisão, clareza e legalidade em cada produto.",
    tags: ["Tabela nutricional", "Alergênicos"],
  },
  {
    icon: ClipboardList,
    number: "05",
    category: "Eficiência Operacional",
    title: "Redução de Perdas",
    description: "Estratégias para diminuir perdas operacionais e aumentar a rentabilidade com controle de estoque e padronização.",
    tags: ["Controle PVPS", "Padronização"],
  },
  {
    icon: Factory,
    number: "06",
    category: "Indústria Alimentícia",
    title: "Consultoria para Indústria",
    description: "Apoio técnico completo para abertura, regularização e manutenção de fábricas de alimentos. Da licença sanitária ao registro ANVISA.",
    tags: ["Licença sanitária", "Registro ANVISA"],
  },
  {
    icon: BarChart3,
    number: "07",
    category: "Auditoria Técnica",
    title: "Auditoria de Rótulos",
    description: "Análise de rótulos existentes, identificação de não conformidades e regularização antes de notificações.",
    tags: ["Auditoria preventiva", "Conformidade"],
  },
  {
    icon: Building2,
    number: "08",
    category: "Gestão de Pessoas",
    title: "Liderança e Equipe",
    description: "Equipes organizadas com avaliação de desempenho, regulamento interno e desenvolvimento de líderes.",
    tags: ["Liderança", "Processos internos"],
  },
];

/* ── Linha editorial de serviço ── */
const Row = ({ s, idx, visible }: { s: typeof services[0]; idx: number; visible: boolean }) => {
  const Icon = s.icon;
  return (
    <div
      className={`group relative grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start
        px-5 py-7 sm:px-7 sm:py-8 lg:px-9 lg:py-9
        border-t border-white/[0.07] first:border-t-0
        transition-all duration-500
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${idx * 70}ms` }}
    >
      {/* Preenchimento no hover */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "linear-gradient(90deg, hsl(20 35% 62% / 0.10), transparent 65%)" }}
      />
      {/* Filete de acento */}
      <span
        aria-hidden
        className="absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 group-hover:scale-y-100
          transition-transform duration-500 bg-[hsl(20_45%_68%)]"
      />

      {/* Número + ícone */}
      <div className="relative z-10 lg:col-span-2 flex items-center gap-4">
        <span className="font-playfair font-bold text-3xl sm:text-4xl text-white/15
          group-hover:text-[hsl(20_45%_68%)] transition-colors duration-500">
          {s.number}
        </span>
        <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0
          bg-[hsl(20_35%_62%/0.1)] border border-[hsl(20_35%_62%/0.16)]
          group-hover:bg-[hsl(20_35%_62%/0.2)] group-hover:-rotate-3 transition-all duration-500">
          <Icon className="w-5 h-5 text-[hsl(20_45%_70%)]" strokeWidth={1.5} />
        </div>
      </div>

      {/* Categoria + título */}
      <div className="relative z-10 lg:col-span-4">
        <span className="block text-[10px] font-semibold tracking-[0.24em] uppercase text-[hsl(20_45%_68%)] mb-2">
          {s.category}
        </span>
        <h3 className="font-playfair font-bold text-white leading-snug text-xl sm:text-2xl
          group-hover:text-[hsl(20_45%_78%)] transition-colors duration-500">
          {s.title}
        </h3>
      </div>

      {/* Descrição + tags */}
      <div className="relative z-10 lg:col-span-5">
        <p className="text-white/45 leading-relaxed text-sm sm:text-[15px]">{s.description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {s.tags.map((tag) => (
            <span key={tag} className="text-[11px] font-medium px-3 py-1.5 rounded-full
              bg-white/[0.05] text-white/40
              group-hover:bg-[hsl(20_35%_62%/0.12)] group-hover:text-[hsl(20_45%_70%)]
              transition-all duration-500">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Seta */}
      <div className="relative z-10 lg:col-span-1 flex lg:justify-end">
        <span className="w-10 h-10 rounded-full grid place-items-center
          border border-white/10 text-white/30
          group-hover:border-[hsl(20_35%_62%)] group-hover:text-[hsl(20_45%_70%)]
          group-hover:translate-x-1 transition-all duration-500">
          <ArrowRight className="w-4 h-4" />
        </span>
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

        {/* ── Lista editorial de serviços ── */}
        <div
          ref={gridRef}
          className="overflow-hidden rounded-[2rem] bg-[#1C1A18]
            shadow-[0_40px_80px_hsl(210_15%_12%/0.18)]"
        >
          {services.map((s, i) => (
            <Row key={i} s={s} idx={i} visible={gridInView} />
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
