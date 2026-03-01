import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X, Mail, Phone, Instagram, MapPin, ArrowUpRight } from "lucide-react";
import logoNP from "@/assets/logoNP.png";

const WHATSAPP_NUMBER = "5519989750741";

const ContactDropdown = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    if (isOpen) document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const items = [
    {
      icon: Phone,
      label: "Falar no WhatsApp",
      href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Quero entender como a NP pode ajudar a otimizar os processos do meu negócio. Podemos conversar?")}`,
      color: "text-emerald-400",
      bgHover: "hover:bg-emerald-500/10",
    },
    {
      icon: Instagram,
      label: "Conheça nosso trabalho no Insta",
      href: "https://www.instagram.com/np.consultoriaalimentos/",
      color: "text-pink-400",
      bgHover: "hover:bg-pink-500/10",
    },
    {
      icon: Mail,
      label: "Mande-nos um e-mail",
      href: "mailto:np.consultoriaalimentacao@gmail.com",
      color: "text-sky-400",
      bgHover: "hover:bg-sky-500/10",
    },
  ];

  return (
    <div
      ref={ref}
      className="absolute top-full right-0 mt-3 w-[300px] origin-top-right animate-in fade-in slide-in-from-top-2 zoom-in-95 duration-200"
    >
      <div className="bg-[#1a1a2e]/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl shadow-black/40 overflow-hidden p-2 space-y-1">
        {items.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 ${c.bgHover} group`}
          >
            <div className={`w-9 h-9 rounded-full bg-white/5 flex items-center justify-center shrink-0 ${c.color}`}>
              <c.icon className="w-[17px] h-[17px]" />
            </div>
            <span className="text-white/90 text-sm font-medium">{c.label}</span>
            <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-white/60 transition-colors ml-auto shrink-0" />
          </a>
        ))}
      </div>
    </div>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const rafRef = useRef<number>(0);
  const lastScrolled = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const scrolled = window.scrollY > 50;
        if (scrolled !== lastScrolled.current) {
          lastScrolled.current = scrolled;
          setIsScrolled(scrolled);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Desktop Header */}
      <div 
        className={`hidden md:block transition-all duration-500 ease-out ${
          isScrolled ? 'px-6 py-4' : 'px-0 py-0'
        }`}
      >
        <div 
          className={`flex items-center justify-between transition-all duration-500 ease-out ${
            isScrolled 
              ? 'bg-black/40 backdrop-blur-md rounded-full px-4 py-2.5 gap-2 border border-white/10 shadow-2xl max-w-fit mx-auto' 
              : 'bg-[#2a2a2a] px-8 py-4 w-full'
          }`}
        >
          <Link to="/" className="flex items-center gap-2 px-2 group">
            <img 
              src={logoNP} 
              alt="NP Consultoria" 
              className={`w-auto transition-all duration-300 ${isScrolled ? 'h-7' : 'h-9'}`} 
            />
            <span className={`font-playfair font-bold text-white transition-all duration-300 ${
              isScrolled ? 'text-sm' : 'text-base'
            }`}>
              NP
            </span>
          </Link>
          
          <nav className="flex items-center gap-1">
            {[
              { to: "/servicos-alimentares", label: "Serviços" },
              { to: "/np-rotulagem", label: "Rotulagem" },
              { to: "/equipe", label: "Equipe" },
              { to: "/sobre", label: "Sobre" },
              { to: "/faq", label: "FAQ" },
            ].map(({ to, label }) => (
              <Link 
                key={to}
                to={to} 
                className={`text-white/90 hover:text-white transition-colors duration-200 font-medium hover:bg-white/10 rounded-full ${
                  isScrolled ? 'text-sm px-4 py-2' : 'text-sm px-5 py-2.5'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="relative">
            <Button 
              variant="default" 
              onClick={() => setIsContactOpen(!isContactOpen)}
              className={`bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/25 ${
                isScrolled ? 'px-5 py-2 text-sm' : 'px-6 py-2.5 text-sm'
              }`}
            >
              Contato
            </Button>
            <ContactDropdown isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className={`flex md:hidden transition-all duration-500 ease-out ${
        isScrolled ? 'justify-center px-4 py-3' : 'justify-between px-0 py-0'
      }`}>
        <div 
          className={`flex items-center justify-between transition-all duration-500 ease-out ${
            isScrolled 
              ? 'bg-black/40 backdrop-blur-md rounded-full px-3 py-2 gap-1 border border-white/10 shadow-2xl' 
              : 'bg-[#2a2a2a] px-4 py-3 w-full'
          }`}
        >
          <Link to="/" className="flex items-center gap-2 px-2 group">
            <img src={logoNP} alt="NP Consultoria" className="h-7 w-auto" />
            <span className="font-playfair text-sm font-bold text-white">NP</span>
          </Link>
          
          <div className="flex items-center gap-2">
            <Button 
              variant="default" 
              size="sm" 
              onClick={() => setIsContactOpen(!isContactOpen)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-4 py-1.5 text-xs font-medium shadow-lg shadow-primary/25"
            >
              Contato
            </Button>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {/* Mobile Contact Dropdown */}
        <ContactDropdown isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-x-0 transition-all duration-300 ease-out ${
          isMobileMenuOpen 
            ? 'opacity-100 pointer-events-auto translate-y-0' 
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
        style={{ top: '70px' }}
      >
        <div className="px-4 pt-4">
          <div className="bg-[#1a1a2e]/95 backdrop-blur-md rounded-2xl border border-white/10 p-6 shadow-2xl">
            <nav className="flex flex-col gap-1">
              {[
                { to: "/sobre", label: "Sobre" },
                { to: "/servicos-alimentares", label: "Serviços" },
                { to: "/np-rotulagem", label: "Rotulagem" },
                { to: "/equipe", label: "Equipe" },
                { to: "/faq", label: "FAQ" },
              ].map(({ to, label }) => (
                <Link 
                  key={to}
                  to={to} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-white/90 hover:text-white hover:bg-white/5 transition-colors py-3 px-4 rounded-xl"
                >
                  {label}
                </Link>
              ))}
            </nav>
            
            <div className="mt-6 pt-6 border-t border-white/10">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Quero saber mais sobre os serviços da NP Consultoria.")}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-4 text-base font-semibold shadow-lg shadow-primary/25"
              >
                Fale Conosco →
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
