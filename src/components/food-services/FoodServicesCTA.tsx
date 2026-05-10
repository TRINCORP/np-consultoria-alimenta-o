import { useInView } from "react-intersection-observer";
import { ArrowRight, Phone, Mail, Instagram } from "lucide-react";

const WHATSAPP = "5519989750741";

const channels = [
  { icon: Phone,     label: "WhatsApp",   value: "(19) 98975-0741",             href: `https://wa.me/${WHATSAPP}` },
  { icon: Mail,      label: "E-mail",     value: "np.consultoriaalimentcao@gmail.com", href: "mailto:np.consultoriaalimentcao@gmail.com" },
  { icon: Instagram, label: "Instagram",  value: "@np.consultoriaalimentos",    href: "https://www.instagram.com/np.consultoriaalimentos/" },
];

const FoodServicesCTA = () => {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section ref={ref} className="bg-[#FAF9F7] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 lg:px-16">

        {/* ── Main CTA block ── */}
        <div
          className={`relative rounded-[2rem] overflow-hidden
            transition-all duration-[1000ms] ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ background: "linear-gradient(135deg, #1C1A18, #252220)" }}
        >
          {/* Ambient warm glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
            style={{ background: "radial-gradient(ellipse at top, hsl(20 35% 62% / 0.12), transparent 65%)" }} />

          {/* Content */}
          <div className="relative z-10 px-5 sm:px-10 lg:px-20 py-10 sm:py-14 lg:py-20">

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-10">

              {/* Left: text */}
              <div className="w-full lg:max-w-[540px]">
                <span className={`block text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] sm:tracking-[0.32em] uppercase
                  text-[hsl(20_35%_62%)] mb-4 sm:mb-6
                  transition-all duration-700 delay-100 ${inView ? "opacity-100" : "opacity-0"}`}>
                  Consultoria · Indaiatuba e Região
                </span>

                <h2
                  className={`font-playfair font-bold text-white leading-[1.08] mb-4 sm:mb-6
                    transition-all duration-700 delay-150 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                  style={{ fontSize: "clamp(1.7rem, 4vw, 3.6rem)" }}
                >
                  Alvará sanitário, BPF e rotulagem{" "}
                  <em className="italic text-[hsl(20_45%_70%)]">sem complicação</em>.
                </h2>

                <p className={`text-white/45 text-sm leading-relaxed mb-6 sm:mb-10
                  transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                  Solicite um orçamento sem compromisso. Retornamos em até 24h úteis.
                  Atendemos presencialmente em Indaiatuba e toda a região de Campinas.
                </p>

                <div className={`flex flex-wrap gap-3 transition-all duration-700 delay-300
                  ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                  <a
                    href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Olá! Gostaria de solicitar um orçamento sem compromisso.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5
                      bg-[hsl(20_35%_62%)] text-white rounded-full
                      px-6 sm:px-8 py-3.5 sm:py-4 text-sm font-semibold
                      hover:bg-[hsl(20_35%_55%)]
                      hover:shadow-[0_12px_36px_hsl(20_35%_62%/0.45)]
                      hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Solicitar Orçamento
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>

                  <a
                    href="#contato"
                    className="inline-flex items-center gap-2
                      border border-white/20 text-white/65 rounded-full
                      px-6 sm:px-8 py-3.5 sm:py-4 text-sm font-medium
                      hover:border-white/40 hover:text-white
                      transition-all duration-300"
                  >
                    Enviar Mensagem
                  </a>
                </div>
              </div>

              {/* Right: contact channels */}
              <div className={`flex flex-col gap-3 w-full lg:min-w-[260px] lg:max-w-[320px]
                transition-all duration-700 delay-400 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}`}>

                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/30 mb-1">
                  Canais de contato
                </p>

                {channels.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 p-4 rounded-[1rem]
                      border border-white/[0.07] bg-white/[0.04]
                      hover:border-[hsl(20_35%_62%/0.35)] hover:bg-[hsl(20_35%_62%/0.07)]
                      transition-all duration-300"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[hsl(20_35%_62%/0.12)]
                      flex items-center justify-center flex-shrink-0
                      group-hover:bg-[hsl(20_35%_62%/0.22)]
                      transition-colors duration-300">
                      <Icon className="w-4 h-4 text-[hsl(20_45%_68%)]" strokeWidth={1.5} />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[10px] text-white/30 uppercase tracking-wider mb-0.5">{label}</span>
                      <span className="block text-sm font-medium text-white/70 break-all leading-snug
                        group-hover:text-white transition-colors duration-300">
                        {value}
                      </span>
                    </div>
                  </a>
                ))}

                {/* Schedule note */}
                <p className="text-[11px] text-white/25 mt-2 leading-relaxed">
                  Seg–Sex 08h–18h · Sáb 08h–12h
                </p>
              </div>
            </div>
          </div>

          {/* Thin bottom accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px]"
            style={{ background: "linear-gradient(to right, transparent, hsl(20 35% 62% / 0.4), transparent)" }} />
        </div>

      </div>
    </section>
  );
};

export default FoodServicesCTA;
