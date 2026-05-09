import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoNP from "@/assets/logoNP.png";

const WHATSAPP_NUMBER = "5519989750741";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const rafRef = useRef<number>(0);
  const lastScrolled = useRef(false);
  const navigate = useNavigate();
  const location = useLocation();

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

  const scrollToContato = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
    }
  };

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
              Home
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
                className={`font-playfair font-normal tracking-wide text-white/85 hover:text-white transition-colors duration-200 hover:bg-white/10 rounded-full ${
                  isScrolled ? 'text-sm px-4 py-2' : 'text-[0.95rem] px-5 py-2.5'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <Button 
            variant="default" 
            onClick={scrollToContato}
            className={`bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/25 cursor-pointer ${
              isScrolled ? 'px-5 py-2 text-sm' : 'px-6 py-2.5 text-sm'
            }`}
          >
            Contato
          </Button>
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
            <span className="font-playfair text-sm font-bold text-white">Home</span>
          </Link>
          
          <div className="flex items-center gap-2">
            <Button 
              variant="default" 
              size="sm" 
              onClick={scrollToContato}
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
                  className="font-playfair font-normal text-lg tracking-wide text-white/85 hover:text-white hover:bg-white/5 transition-colors py-3 px-4 rounded-xl"
                >
                  {label}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  scrollToContato();
                }}
                className="font-playfair font-normal text-lg tracking-wide text-white/85 hover:text-white hover:bg-white/5 transition-colors py-3 px-4 rounded-xl text-left"
              >
                Contato
              </button>
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
