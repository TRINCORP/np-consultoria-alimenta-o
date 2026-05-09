import equipeNP from "@/assets/equipe_np.jpg";
import { useInView } from "react-intersection-observer";
import { ShieldCheck, LayoutGrid, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Segurança",
    desc: "Alimentos seguros, processos controlados e total conformidade com a legislação sanitária.",
  },
  {
    icon: LayoutGrid,
    title: "Organização",
    desc: "Operações estruturadas, rotinas padronizadas e gestão eficiente de cada detalhe.",
  },
  {
    icon: TrendingUp,
    title: "Crescimento",
    desc: "Marcas preparadas para crescer com credibilidade, responsabilidade e posicionamento.",
  },
];

const PhilosophySection = () => {
  const { ref: topRef, inView: topInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: pillarsRef, inView: pillarsInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="bg-[#FAF9F7] py-20 lg:py-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 lg:px-16">

        {/* ── Top split: image + statement ── */}
        <div ref={topRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 lg:mb-28">

          {/* Image */}
          <div className={`relative transition-all duration-[1000ms] ${topInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>

            {/* Foto sem recorte — proporção natural */}
            <div className="relative rounded-[2rem] overflow-hidden
              w-full max-w-[460px] mx-auto lg:max-w-none
              shadow-[0_32px_64px_hsl(210_15%_12%/0.12)]">
              <img
                src={equipeNP}
                alt="Equipe NP Consultoria — nutricionistas e consultoras especializadas em segurança alimentar, vigilância sanitária e boas práticas, Indaiatuba e região de Campinas"
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>

            {/* Quote abaixo da foto — fundo sólido para leitura perfeita */}
            <div className="mt-4 max-w-[460px] mx-auto lg:max-w-none
              bg-white rounded-[1.25rem] px-5 py-4
              border border-[hsl(20_35%_70%/0.2)]
              shadow-[0_8px_24px_hsl(20_35%_60%/0.08)]">
              <p className="font-playfair italic text-[hsl(210_15%_14%)] text-sm leading-snug">
                "Transformamos operações alimentícias em referências de qualidade e segurança."
              </p>
              <span className="mt-2 block text-[11px] font-semibold tracking-[0.2em] uppercase text-[hsl(20_38%_55%)]">
                — NP Consultoria · Indaiatuba
              </span>
            </div>

            {/* Floating accent dot */}
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full
              bg-[hsl(20_35%_70%/0.15)] border border-[hsl(20_35%_70%/0.2)] hidden lg:block" />
          </div>

          {/* Statement */}
          <div className={`transition-all duration-[1000ms] delay-200 ${topInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <span className="inline-block text-[11px] font-semibold tracking-[0.32em] uppercase
              text-[hsl(20_35%_58%)] mb-6">
              Nossa filosofia
            </span>

            <h2 className="font-playfair font-bold text-[hsl(210_15%_10%)] leading-[1.08] mb-8"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.6rem)" }}>
              Segurança alimentar{" "}
              <em className="italic text-[hsl(20_35%_58%)]">é um compromisso</em>,
              <br />não uma obrigação.
            </h2>

            <div className="space-y-5 text-[hsl(210_10%_45%)] text-base leading-relaxed">
              <p>
                Na NP, acreditamos que a segurança dos alimentos vai além da legislação.
                É um <strong className="text-[hsl(210_15%_18%)] font-semibold">compromisso com a vida,
                com a marca e com a sustentabilidade do negócio.</strong>
              </p>
              <p>
                Atuamos de forma preventiva e estratégica — onde organização, gestão eficiente
                e conformidade caminham juntas para transformar operações em referências de qualidade.
              </p>
            </div>

            {/* Thin rule */}
            <div className="my-8 h-px bg-[hsl(20_35%_70%/0.2)]" />

            <p className="font-playfair italic text-[hsl(20_35%_52%)] text-lg leading-snug">
              "Mais do que adequar empresas às normas,<br />
              desenvolvemos equipes e fortalecem marcas."
            </p>
          </div>
        </div>

        {/* ── Three pillars ── */}
        <div ref={pillarsRef}>
          <p className={`text-[11px] font-semibold tracking-[0.32em] uppercase text-[hsl(210_10%_55%)]
            text-center mb-10 transition-all duration-700 ${pillarsInView ? "opacity-100" : "opacity-0"}`}>
            Três pilares que guiam tudo
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {pillars.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className={`group relative rounded-[1.5rem] border border-[hsl(20_35%_70%/0.18)]
                  bg-white p-8 lg:p-10 overflow-hidden
                  hover:border-[hsl(20_35%_70%/0.45)] hover:-translate-y-1
                  hover:shadow-[0_16px_48px_hsl(20_35%_60%/0.1)]
                  transition-all duration-500
                  ${pillarsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(20_35%_70%/0.06)] to-transparent
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[1.5rem]" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-[hsl(20_35%_70%/0.1)]
                    flex items-center justify-center mb-6
                    group-hover:bg-[hsl(20_35%_70%/0.18)] group-hover:scale-105
                    transition-all duration-300">
                    <Icon className="w-5 h-5 text-[hsl(20_35%_58%)]" strokeWidth={1.75} />
                  </div>

                  <h3 className="font-playfair font-bold text-xl text-[hsl(210_15%_10%)] mb-3">
                    {title}
                  </h3>
                  <p className="text-[hsl(210_10%_48%)] text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PhilosophySection;
