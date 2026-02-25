import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Search, ClipboardList, TrendingDown, Users, BarChart3, GraduationCap, Tag } from "lucide-react";
import logoNPCircle from "@/assets/logo-np-circle.png";

interface ServiceCard {
  icon: React.ElementType;
  number: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
}

const services: ServiceCard[] = [
  {
    icon: Search,
    number: "01",
    category: "Conformidade",
    title: "Implantação de Boas Práticas",
    description:
      "Implantação completa conforme a legislação sanitária vigente, garantindo segurança dos alimentos, organização e conformidade com a Vigilância Sanitária.",
    tags: ["Manual de BPF", "POPs", "Treinamento"],
  },
  {
    icon: ClipboardList,
    number: "02",
    category: "Regulatório",
    title: "Adequação para Vigilância Sanitária",
    description:
      "Preparamos seu estabelecimento para inspeções sanitárias, reduzindo riscos de autuações, multas e interdições com plano de ação corretivo.",
    tags: ["Check-list técnico", "Fiscalizações", "Documentação"],
  },
  {
    icon: TrendingDown,
    number: "03",
    category: "Eficiência",
    title: "Prevenção de Perdas e Desperdícios",
    description:
      "Estratégias para diminuir perdas operacionais e aumentar a rentabilidade com controle de estoque, validade e reaproveitamento seguro.",
    tags: ["PVPS", "Controle de estoque", "Análise de perdas"],
  },
  {
    icon: Users,
    number: "04",
    category: "Pessoas",
    title: "Gestão de Equipe e Liderança",
    description:
      "Estruturamos equipes mais organizadas, produtivas e alinhadas com os objetivos da empresa, com avaliação de desempenho e desenvolvimento de líderes.",
    tags: ["Liderança", "Avaliação", "Regulamento interno"],
  },
  {
    icon: GraduationCap,
    number: "05",
    category: "Capacitação",
    title: "Treinamento de Manipuladores",
    description:
      "Capacitação teórica e prática com foco em higiene, conduta profissional, contaminação cruzada, controle de temperatura e atendimento ao cliente.",
    tags: ["Higiene", "Temp. segura", "Atendimento"],
  },
  {
    icon: Tag,
    number: "06",
    category: "Rotulagem",
    title: "Desenvolvimento e Adequação de Rótulos",
    description:
      "Rótulos 100% conforme a legislação da Anvisa, com tabela nutricional, alergênicos, glúten e rotulagem frontal — aliando estética, marketing e legislação.",
    tags: ["Anvisa", "Design", "Identidade visual"],
  },
  {
    icon: BarChart3,
    number: "07",
    category: "Auditoria",
    title: "Revisão Técnica de Rótulos",
    description:
      "Analisamos rótulos existentes, apontamos não conformidades e regularizamos o enquadramento sanitário dos seus produtos antes que gerem multas ou notificações.",
    tags: ["Auditoria", "Enquadramento", "Preventivo"],
  },
];

/* ── Single timeline card row ── */
const TimelineCard = ({ service, index }: { service: ServiceCard; index: number }) => {
  const isLeft = index % 2 === 0;
  const { ref, inView } = useInView({ threshold: 0.25, triggerOnce: true });
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className={`timeline-card-wrap grid items-center mb-16 md:mb-24 relative z-[1]
        ${inView ? "timeline-visible" : ""}
        ${isLeft ? "timeline-left" : "timeline-right"}`}
      style={{
        gridTemplateColumns: "1fr 60px 1fr",
        opacity: inView ? 1 : 0,
        transform: inView
          ? "translateX(0)"
          : isLeft
          ? "translateX(-40px)"
          : "translateX(40px)",
        transition: "opacity .75s cubic-bezier(.16,1,.3,1), transform .75s cubic-bezier(.16,1,.3,1)",
      }}
    >
      {/* Card */}
      <div
        className={`group relative bg-white rounded-[20px] p-8 md:p-10 max-w-[430px] w-full
          border border-border/30 transition-all duration-500 cursor-default
          hover:-translate-y-1.5 hover:shadow-[0_20px_50px_hsl(210_15%_35%/0.18)]
          ${isLeft ? "col-start-1 justify-self-end" : "col-start-3 justify-self-start"}`}
        style={{
          boxShadow: "0 2px 20px hsl(210 15% 35% / 0.05)",
        }}
      >
        {/* Accent bar on hover */}
        <div className="absolute top-0 left-6 right-6 h-[3px] rounded-b bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary-glow))] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

        {/* Shine sweep on hover */}
        <div className="absolute inset-0 rounded-[20px] overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-[hsl(var(--primary)/0.08)] to-transparent transition-[left] duration-700 ease-out group-hover:left-[100%]" />
        </div>

        {/* Card outline animation */}
        <div
          className="absolute inset-0 rounded-[20px] pointer-events-none"
          style={{
            boxShadow: inView
              ? "0 0 0 2px hsl(var(--primary) / 0.12)"
              : "0 0 0 0px transparent",
            transition: "box-shadow 0.8s cubic-bezier(.16,1,.3,1) 0.2s",
          }}
        />

        {/* Arrow connector */}
        {isLeft && (
          <div
            className="hidden md:block absolute top-1/2 -right-[11px] -translate-y-1/2"
            style={{
              width: 0,
              height: 0,
              borderTop: "11px solid transparent",
              borderBottom: "11px solid transparent",
              borderLeft: "11px solid white",
            }}
          />
        )}
        {!isLeft && (
          <div
            className="hidden md:block absolute top-1/2 -left-[11px] -translate-y-1/2"
            style={{
              width: 0,
              height: 0,
              borderTop: "11px solid transparent",
              borderBottom: "11px solid transparent",
              borderRight: "11px solid white",
            }}
          />
        )}

        {/* Icon */}
        <div className="mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[5deg]">
          <Icon className="w-8 h-8 text-[hsl(var(--primary))]" strokeWidth={1.5} />
        </div>

        {/* Number & Category */}
        <p className="text-[0.62rem] tracking-[0.28em] uppercase text-[hsl(var(--primary))] mb-1 font-medium">
          {service.number} — {service.category}
        </p>

        {/* Title */}
        <h3 className="font-playfair text-lg md:text-xl font-bold text-[hsl(210_15%_20%)] mb-3 leading-[1.3]">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-[1.7]">
          {service.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="bg-[hsl(var(--primary-subtle))] text-[hsl(var(--primary-dark))] text-[0.7rem] px-3 py-1 rounded-full tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Node — NP Logo */}
      <div className="col-start-2 flex justify-center items-center z-[3] relative">
        <div
          className="relative w-[36px] h-[36px] rounded-full transition-all duration-[550ms] overflow-hidden"
          style={{
            transitionTimingFunction: "cubic-bezier(.34,1.56,.64,1)",
            boxShadow: inView
              ? "0 0 0 4px hsl(210 15% 50% / 0.15), 0 0 18px hsl(210 15% 50% / 0.25)"
              : "0 0 0 2px hsl(210 10% 80% / 0.3)",
            transform: inView ? "scale(1.15)" : "scale(1)",
            border: "2px solid",
            borderColor: inView ? "hsl(210 15% 55%)" : "hsl(210 10% 85%)",
          }}
        >
          <img
            src={logoNPCircle}
            alt="NP"
            className="w-full h-full object-cover"
            style={{
              opacity: inView ? 1 : 0.4,
              transition: "opacity 0.5s ease",
            }}
          />
        </div>
      </div>

      {/* Empty space on opposite side */}
      <div className={isLeft ? "col-start-3" : "col-start-1"} />
    </div>
  );
};

/* ── Main Component ── */
const FoodServicesTimeline = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const floatingLogoRef = useRef<HTMLDivElement>(null);
  const { ref: headerRef, inView: headerInView } = useInView({ threshold: 0.2, triggerOnce: true });

  /* Animate the vertical line + floating logo on scroll */
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current || !lineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      const totalH = rect.height;

      const scrolled = windowH / 2 - rect.top;
      const progress = Math.min(Math.max(scrolled / totalH, 0), 1);
      lineRef.current.style.height = `${progress * 100}%`;

      // Move floating logo to the tip of the line
      if (floatingLogoRef.current) {
        const yPos = progress * totalH;
        floatingLogoRef.current.style.transform = `translate(-50%, -50%) translateY(${yPos}px)`;
        floatingLogoRef.current.style.opacity = progress > 0.01 && progress < 0.99 ? "1" : "0";
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-[hsl(20_20%_97%)] py-28 md:py-36 relative overflow-hidden">
      {/* Subtle noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-[1120px] mx-auto px-6 relative">
        {/* Section header */}
        <div ref={headerRef} className="text-center mb-20 md:mb-28">
          <p
            className="text-[0.7rem] tracking-[0.35em] uppercase text-[hsl(var(--primary-dark))] mb-4 font-medium"
            style={{
              opacity: headerInView ? 1 : 0,
              transform: headerInView ? "translateY(0)" : "translateY(12px)",
              transition: "all 0.7s ease",
            }}
          >
            O que fazemos
          </p>
          <h2
            className="font-playfair text-3xl md:text-4xl lg:text-[3.2rem] font-bold text-[hsl(210_15%_15%)] leading-[1.15]"
            style={{
              opacity: headerInView ? 1 : 0,
              transform: headerInView ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s ease 0.1s",
            }}
          >
            Soluções para o seu
            <br />
            <span className="text-[hsl(var(--primary))] italic">negócio de alimentação</span>
          </h2>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative timeline-container">
          {/* Vertical line track (background) */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full hidden md:block" style={{ background: "hsl(210 15% 75% / 0.35)" }} />

          {/* Animated progress line */}
          <div
            ref={lineRef}
            className="absolute left-1/2 top-0 -translate-x-1/2 w-[3px] hidden md:block"
            style={{
              height: "0%",
              background: "linear-gradient(to bottom, #6A7B83, #8ba5b0, #D1B6AD)",
              transition: "height 0.05s linear",
              boxShadow: "0 0 8px hsl(210 15% 50% / 0.3)",
            }}
          />

          {/* Floating NP logo that follows the line */}
          <div
            ref={floatingLogoRef}
            className="absolute left-1/2 top-0 z-[5] pointer-events-none hidden md:block"
            style={{
              opacity: 0,
              transform: "translate(-50%, -50%)",
              transition: "opacity 0.3s ease",
            }}
          >
            <div className="w-[28px] h-[28px] rounded-full overflow-hidden shadow-[0_0_12px_hsl(210_15%_50%/0.4)] border-2 border-white/80">
              <img src={logoNPCircle} alt="" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Cards */}
          {services.map((service, index) => (
            <TimelineCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>

      {/* Ring pulse keyframe — injected once */}
      <style>{`
        @keyframes ringPulse {
          0%   { transform: scale(1);   opacity: 1; }
          100% { transform: scale(2.4); opacity: 0; }
        }

        /* Mobile: single column layout */
        @media (max-width: 767px) {
          .timeline-card-wrap {
            grid-template-columns: 48px 1fr !important;
          }
          .timeline-card-wrap > div:nth-child(1) {
            grid-column: 2 !important;
            justify-self: start !important;
          }
          .timeline-card-wrap > div:nth-child(2) {
            grid-column: 1 !important;
            grid-row: 1 !important;
          }
          .timeline-card-wrap > div:nth-child(3) {
            display: none !important;
          }
          .timeline-left,
          .timeline-right {
            transform: translateY(30px) !important;
          }
          .timeline-visible.timeline-left,
          .timeline-visible.timeline-right {
            transform: translateY(0) !important;
          }
          .timeline-container > div:first-of-type {
            left: 24px !important;
            transform: none !important;
          }
          .timeline-container > div:nth-of-type(2) {
            left: 24px !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default FoodServicesTimeline;
