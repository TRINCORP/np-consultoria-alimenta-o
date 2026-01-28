import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoNP from "@/assets/logoNP.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Desktop Header */}
      <div 
        className={`hidden md:flex justify-center transition-all duration-500 ease-out ${
          isScrolled ? 'px-4 py-4' : 'px-0 py-0'
        }`}
      >
        <div 
          className={`backdrop-blur-md flex items-center justify-between shadow-xl border transition-all duration-500 ease-out ${
            isScrolled 
              ? 'bg-[#1a1a1a]/95 rounded-full px-3 py-2 gap-1 border-white/5 max-w-fit' 
              : 'bg-[#1a1a1a] rounded-none px-8 py-4 w-full border-transparent'
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 px-3 group">
            <img 
              src={logoNP} 
              alt="NP Consultoria" 
              className={`w-auto transition-all duration-500 ${isScrolled ? 'h-8' : 'h-10'}`} 
            />
            <span className={`font-playfair font-bold text-white transition-all duration-500 ${
              isScrolled ? 'text-sm' : 'text-lg'
            }`}>
              NP
            </span>
          </Link>
          
          {/* Navigation Links */}
          <nav className="flex items-center">
            <Link 
              to="/servicos-alimentares" 
              className={`text-white/80 hover:text-white transition-all duration-200 font-medium ${
                isScrolled ? 'text-sm px-4 py-2' : 'text-base px-6 py-3'
              }`}
            >
              Serviços
            </Link>
            <Link 
              to="/np-rotulagem" 
              className={`text-white/80 hover:text-white transition-all duration-200 font-medium ${
                isScrolled ? 'text-sm px-4 py-2' : 'text-base px-6 py-3'
              }`}
            >
              Rotulagem
            </Link>
            <Link 
              to="/equipe" 
              className={`text-white/80 hover:text-white transition-all duration-200 font-medium ${
                isScrolled ? 'text-sm px-4 py-2' : 'text-base px-6 py-3'
              }`}
            >
              Equipe
            </Link>
            <Link 
              to="/sobre" 
              className={`text-white/80 hover:text-white transition-all duration-200 font-medium ${
                isScrolled ? 'text-sm px-4 py-2' : 'text-base px-6 py-3'
              }`}
            >
              Sobre
            </Link>
            <Link
              to="/faq" 
              className={`text-white/80 hover:text-white transition-all duration-200 font-medium ${
                isScrolled ? 'text-sm px-4 py-2' : 'text-base px-6 py-3'
              }`}
            >
              FAQ
            </Link>
          </nav>

          {/* CTA Button */}
          <Button 
            variant="default" 
            className={`bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-medium ml-1 transition-all duration-500 hover:scale-105 ${
              isScrolled ? 'px-5 py-2 text-sm' : 'px-8 py-3 text-base'
            }`}
          >
            Contacto
          </Button>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="flex md:hidden justify-center px-4 py-3">
        <div 
          className={`backdrop-blur-md flex items-center justify-between shadow-xl border transition-all duration-500 ease-out ${
            isScrolled 
              ? 'bg-[#1a1a1a]/95 rounded-full px-2 py-1.5 gap-1 border-white/5' 
              : 'bg-[#1a1a1a] rounded-2xl px-4 py-3 w-full border-transparent'
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
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-4 py-1.5 text-xs font-medium"
            >
              Contacto
            </Button>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white/80 hover:text-white transition-colors"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 bg-[#1a1a1a]/98 backdrop-blur-lg transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ top: '70px' }}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8 -mt-20">
          <Link 
            to="/servicos-alimentares" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-medium text-white/80 hover:text-white transition-colors"
          >
            Serviços
          </Link>
          <Link 
            to="/np-rotulagem" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-medium text-white/80 hover:text-white transition-colors"
          >
            Rotulagem
          </Link>
          <Link 
            to="/equipe" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-medium text-white/80 hover:text-white transition-colors"
          >
            Equipe
          </Link>
          <Link 
            to="/sobre" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-medium text-white/80 hover:text-white transition-colors"
          >
            Sobre
          </Link>
          <Link 
            to="/faq" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-medium text-white/80 hover:text-white transition-colors"
          >
            FAQ
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
