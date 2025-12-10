import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-5" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-float" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center gap-8 pb-8 border-b border-border">
          <nav className="flex items-center gap-8">
            <Link to="/servicos-alimentares" className="text-foreground hover:text-primary transition-all duration-300 text-sm relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:scale-105">
              Serviços de Alimentação
            </Link>
            <Link to="/np-rotulagem" className="text-foreground hover:text-primary transition-all duration-300 text-sm relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:scale-105">
              NP Rotulagem
            </Link>
            <a href="#contacto" className="text-foreground hover:text-primary transition-all duration-300 text-sm relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:scale-105">
              Contacto
            </a>
          </nav>
          
          <div className="flex items-center gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-110">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-110">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-110">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
          <p className="text-sm text-foreground">
            Copyright © 2025 <span className="text-gradient font-semibold">NP Consultoria Alimentos</span>. Todos os direitos reservados.
          </p>
          <a href="#" className="text-sm text-foreground hover:text-primary transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
