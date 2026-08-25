import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logoNP from "@/assets/logoNP.png";

const navItems = [
  { to: "/servicos-alimentares", label: "Serviços" },
  { to: "/np-rotulagem", label: "Rotulagem" },
  { to: "/equipe", label: "Equipe" },
  { to: "/sobre", label: "Sobre" },
  { to: "/faq", label: "FAQ" },
  { to: "/curso-consultoras", label: "Formação" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const frameRef = useRef<number>(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const updateHeader = () => {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 28);
      });
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateHeader);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMobileMenuOpen]);

  const scrollToContact = () => {
    setIsMobileMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      window.setTimeout(() => {
        document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
      }, 320);
      return;
    }

    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={
          "mx-auto flex w-full max-w-[1480px] items-center justify-between border px-3 py-2.5 backdrop-blur-xl transition-all duration-500 sm:px-4 " +
          (isScrolled
            ? "rounded-full border-[#D8CEC7]/90 bg-[#F8F4F0]/95 shadow-[0_16px_50px_-28px_rgba(31,31,33,0.65)]"
            : "rounded-full border-white/15 bg-[#111214]/32 shadow-[0_18px_60px_-34px_rgba(0,0,0,.8)]")
        }
      >
        <Link
          to="/"
          className="group flex min-w-0 items-center gap-2.5 rounded-full pr-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9F5D48]"
          aria-label="NP Consultoria Alimentar — página inicial"
        >
          <span className="grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-full border border-[#D4CAC3] bg-white shadow-sm transition-transform duration-300 group-hover:rotate-3">
            <img src={logoNP} alt="" className="h-10 w-10 object-cover" />
          </span>
          <span className="hidden min-w-0 sm:block">
            <strong className={`block truncate text-[12px] font-semibold tracking-[-0.01em] transition-colors ${isScrolled ? "text-[#262326]" : "text-white"}`}>
              NP Consultoria
            </strong>
            <span className={`block truncate text-[9px] font-medium uppercase tracking-[0.18em] transition-colors ${isScrolled ? "text-[#857C7A]" : "text-white/45"}`}>
              Segurança dos alimentos
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Navegação principal">
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                "relative rounded-full px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.13em] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9F5D48] xl:px-4 " +
                (isActive
                  ? isScrolled
                    ? "bg-[#E9B6A2]/28 text-[#7D4434]"
                    : "bg-white/10 text-[#E7A98F]"
                  : isScrolled
                    ? "text-[#5D5759] hover:bg-white/70 hover:text-[#201E20]"
                    : "text-white/58 hover:bg-white/10 hover:text-white")
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={scrollToContact}
            className={`group hidden min-h-10 items-center gap-2 rounded-full px-5 text-[10px] font-semibold uppercase tracking-[0.15em] transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9F5D48] sm:inline-flex ${isScrolled ? "bg-[#1F1F21] text-[#F8F4F0] hover:bg-[#353236]" : "bg-[#E7A98F] text-[#191617] hover:bg-[#F0BCA6]"}`}
          >
            Agendar diagnóstico
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className={`grid h-10 w-10 place-items-center rounded-full border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9F5D48] lg:hidden ${isScrolled ? "border-[#D8CEC7] bg-white/70 text-[#292629] hover:bg-white" : "border-white/20 bg-white/10 text-white hover:bg-white/15"}`}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        aria-hidden={!isMobileMenuOpen}
        className={
          "fixed inset-0 -z-10 bg-[#1D1B1D] px-5 pb-8 pt-28 transition-all duration-500 lg:hidden " +
          (isMobileMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-4 opacity-0")
        }
      >
        <div className="mx-auto flex h-full max-w-xl flex-col">
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#E9B6A2]">
            Navegue pela NP
          </p>

          <nav className="flex flex-col border-t border-white/10" aria-label="Navegação móvel">
            {navItems.map(({ to, label }, index) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  "group flex items-center justify-between border-b border-white/10 py-4 font-playfair text-[clamp(1.75rem,8vw,2.65rem)] leading-none transition-colors " +
                  (isActive ? "text-[#E9B6A2]" : "text-white/88 hover:text-[#E9B6A2]")
                }
              >
                <span>{label}</span>
                <span className="font-sans text-[10px] tracking-[0.18em] text-white/25">
                  0{index + 1}
                </span>
              </NavLink>
            ))}
          </nav>

          <div className="mt-auto rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
            <p className="font-playfair text-xl text-white">
              Vamos colocar a sua operação em ordem?
            </p>
            <p className="mt-2 text-xs leading-relaxed text-white/45">
              Conte o momento do seu negócio e receba uma orientação inicial.
            </p>
            <button
              type="button"
              onClick={scrollToContact}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#E9B6A2] px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#251F1D]"
            >
              Falar com a NP
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
