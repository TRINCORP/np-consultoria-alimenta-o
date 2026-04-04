/* ─── MarqueeStrip — infinite horizontal ticker like More Nutrition ─── */

const items = [
  "Segurança Alimentar",
  "Boas Práticas",
  "Rotulagem ANVISA",
  "Vigilância Sanitária",
  "Alvará Sanitário",
  "Treinamento de Equipes",
  "Adequação Sanitária",
  "Gestão da Qualidade",
];

interface MarqueeStripProps {
  variant?: "dark" | "green" | "light";
}

const Dot = () => (
  <span
    className="mx-6 inline-block w-1.5 h-1.5 rounded-full opacity-60 flex-shrink-0 align-middle"
    aria-hidden
    style={{ marginBottom: "2px" }}
  />
);

const MarqueeStrip = ({ variant = "dark" }: MarqueeStripProps) => {
  const bg =
    variant === "green"
      ? "bg-[#3d2a1e]"
      : variant === "light"
      ? "bg-[hsl(20_30%_94%)]"
      : "bg-[#1e1a18]";

  const textColor =
    variant === "light" ? "text-[hsl(20_30%_35%)]" : "text-white/80";

  const dotColor =
    variant === "light" ? "bg-[#335c30]/50" : "bg-white/40";

  /* Duplicate items 4× for seamless loop */
  const allItems = [...items, ...items, ...items, ...items];

  return (
    <div
      className={`relative overflow-hidden py-3.5 border-y ${
        variant === "light" ? "border-[#335c30]/15" : "border-white/8"
      } ${bg}`}
      aria-hidden="true"
    >
      <div
        className="flex whitespace-nowrap"
        style={{
          animation: "infinite-scroll 28s linear infinite",
          width: "max-content",
        }}
      >
        {allItems.map((item, i) => (
          <span
            key={i}
            className={`inline-flex items-center text-xs sm:text-sm font-medium tracking-[0.15em] uppercase ${textColor} flex-shrink-0`}
          >
            {item}
            <span className={`mx-5 inline-block w-1.5 h-1.5 rounded-full ${dotColor} flex-shrink-0`} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;
