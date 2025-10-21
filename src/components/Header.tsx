import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logoNP from "@/assets/logoNP.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50 shadow-sm backdrop-blur-xl">
      <div className="container-custom py-2 sm:py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
          <img src={logoNP} alt="NP Consultoria" className="h-10 sm:h-12 w-auto transition-transform duration-300 group-hover:scale-110 energy-pulse" />
          <span className="font-playfair text-lg sm:text-xl lg:text-2xl font-bold text-gradient silver-shine-text hidden sm:inline-block">
            NP Consultoria
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-4 lg:gap-8">
          <Link to="/servicos-alimentares" className="text-foreground hover:text-primary transition-all duration-300 text-xs lg:text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:scale-105">
            Serviços Alimentares
          </Link>
          <Link to="/np-rotulagem" className="text-foreground hover:text-primary transition-all duration-300 text-xs lg:text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:scale-105">
            NP Rotulagem
          </Link>
          <Link to="/equipe" className="text-foreground hover:text-primary transition-all duration-300 text-xs lg:text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:scale-105">
            Equipe
          </Link>
          <a href="#contacto" className="text-foreground hover:text-primary transition-all duration-300 text-xs lg:text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:scale-105">
            Contacto
          </a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Button variant="outline" size="sm" className="btn-ghost text-xs sm:text-sm px-4 py-2 hidden sm:flex interactive-element">
            Contacte-nos
          </Button>
          <Button variant="default" size="sm" className="btn-hero text-xs sm:text-sm px-4 py-2 energy-pulse">
            Serviços
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
