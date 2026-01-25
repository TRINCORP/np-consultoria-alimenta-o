import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logoNP from "@/assets/logoNP.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Dark floating header bar - goat style */}
      <div className="flex justify-center px-4 py-4">
        <div className="bg-[#1a1a1a]/95 backdrop-blur-md rounded-full px-3 py-2 flex items-center gap-1 shadow-xl border border-white/5">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 px-3 group">
            <img src={logoNP} alt="NP Consultoria" className="h-8 w-auto transition-transform duration-300 group-hover:scale-105" />
            <span className="font-playfair text-sm font-bold text-white hidden lg:inline">
              NP
            </span>
          </Link>
          
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center">
            <Link to="/servicos-alimentares" className="text-white/80 hover:text-white transition-all duration-200 text-sm font-medium px-4 py-2">
              Serviços
            </Link>
            <Link to="/np-rotulagem" className="text-white/80 hover:text-white transition-all duration-200 text-sm font-medium px-4 py-2">
              Rotulagem
            </Link>
            <Link to="/equipe" className="text-white/80 hover:text-white transition-all duration-200 text-sm font-medium px-4 py-2">
              Equipe
            </Link>
            <a href="#contacto" className="text-white/80 hover:text-white transition-all duration-200 text-sm font-medium px-4 py-2">
              Sobre
            </a>
          </nav>

          {/* CTA Button */}
          <Button 
            variant="default" 
            size="sm" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-5 py-2 text-sm font-medium ml-1 transition-all duration-300 hover:scale-105"
          >
            Contacto
          </Button>
        </div>
      </div>

      {/* Mobile Layout - Same style */}
      <div className="flex md:hidden justify-center px-4 py-3 absolute top-0 left-0 right-0">
        <div className="bg-[#1a1a1a]/95 backdrop-blur-md rounded-full px-2 py-1.5 flex items-center gap-1 shadow-xl border border-white/5">
          <Link to="/" className="flex items-center gap-2 px-2 group">
            <img src={logoNP} alt="NP Consultoria" className="h-7 w-auto" />
          </Link>
          
          <Button 
            variant="default" 
            size="sm" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-4 py-1.5 text-xs font-medium"
          >
            Contacto
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
