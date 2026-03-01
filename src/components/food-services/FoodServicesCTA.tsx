import { useInView } from "react-intersection-observer";

const FoodServicesCTA = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section
      ref={ref}
      className="relative bg-[hsl(210_15%_14%)] py-20 sm:py-28 md:py-36 text-center overflow-hidden"
    >
      {/* Radial glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_110%,hsl(var(--primary)/0.15),transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6">
        <h2
          className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-[3.2rem] font-bold text-white mb-3 sm:mb-4 leading-tight"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease",
          }}
        >
          Segurança que posiciona
          <br />
          <em className="text-[hsl(var(--primary-glow))] italic">sua marca.</em>
        </h2>

        <p
          className="text-white/45 max-w-[48ch] mx-auto mb-8 sm:mb-10 leading-[1.75] text-xs sm:text-sm md:text-base"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(16px)",
            transition: "all 0.8s ease 0.15s",
          }}
        >
          Empresas que tratam segurança dos alimentos como estratégia saem na frente. Vamos conversar sobre o seu negócio.
        </p>

        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(16px)",
            transition: "all 0.8s ease 0.3s",
          }}
        >
          <a
            href="#contato"
            className="inline-block relative overflow-hidden rounded-full px-8 sm:px-10 py-3 sm:py-4 text-xs sm:text-sm tracking-[0.06em] text-white font-medium
              border border-[hsl(var(--primary)/0.25)]
              bg-gradient-to-br from-[hsl(var(--primary-dark))] to-[hsl(210_15%_30%)]
              hover:-translate-y-1 hover:shadow-[0_12px_30px_hsl(0_0%_0%/0.25)]
              transition-all duration-300 group"
          >
            <span className="relative z-10">Fale com um consultor →</span>
            <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[hsl(var(--primary))] to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FoodServicesCTA;
