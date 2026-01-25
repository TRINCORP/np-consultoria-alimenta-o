import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logoNP from "@/assets/logoNP.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 border-b border-border/30 backdrop-blur-xl">
      <div className="container-custom py-3 sm:py-4">
        {/* Desktop Layout - Centered Nav */}
        <div className="hidden md:grid md:grid-cols-3 items-center">
          {/* Logo - Left */}
          <Link to="/" className="flex items-center gap-3 group justify-self-start">
            <img src={logoNP} alt="NP Consultoria" className="h-10 lg:h-12 w-auto transition-transform duration-300 group-hover:scale-105" />
            <span className="font-playfair text-lg lg:text-xl font-bold text-foreground">
              NP Consultoria
            </span>
          </Link>
          
          {/* Navigation - Centered */}
          <nav className="flex items-center justify-center gap-6 lg:gap-10">
            <Link to="/servicos-alimentares" className="text-foreground/80 hover:text-foreground transition-all duration-300 text-sm font-medium relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
              Serviços
            </Link>
            <Link to="/np-rotulagem" className="text-foreground/80 hover:text-foreground transition-all duration-300 text-sm font-medium relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
              Rotulagem
            </Link>
            <Link to="/equipe" className="text-foreground/80 hover:text-foreground transition-all duration-300 text-sm font-medium relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
              Equipe
            </Link>
            <a href="#contacto" className="text-foreground/80 hover:text-foreground transition-all duration-300 text-sm font-medium relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
              Contacto
            </a>
          </nav>

          {/* CTA Button - Right */}
          <div className="justify-self-end">
            <Button variant="default" size="sm" className="bg-primary hover:bg-primary-dark text-primary-foreground rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 hover:scale-105">
              Fale Conosco
            </Button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <img src={logoNP} alt="NP Consultoria" className="h-9 w-auto" />
            <span className="font-playfair text-base font-bold text-foreground">
              NP
            </span>
          </Link>
          
          <Button variant="default" size="sm" className="bg-primary hover:bg-primary-dark text-primary-foreground rounded-full px-4 py-2 text-xs font-medium">
            Contacto
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
