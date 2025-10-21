import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-8 pb-8 border-b border-border">
          <nav className="flex items-center gap-8">
            <Link to="/servicos-alimentares" className="text-foreground hover:text-primary transition-colors text-sm">
              Serviços de Alimentação
            </Link>
            <Link to="/np-rotulagem" className="text-foreground hover:text-primary transition-colors text-sm">
              NP Rotulagem
            </Link>
            <a href="#contacto" className="text-foreground hover:text-primary transition-colors text-sm">
              Contacto
            </a>
          </nav>
          
          <div className="flex items-center gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
          <p className="text-sm text-foreground">
            Copyright © 2025 NP Consultoria Alimentos. Todos os direitos reservados.
          </p>
          <a href="#" className="text-sm text-foreground hover:text-primary transition-colors">
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
