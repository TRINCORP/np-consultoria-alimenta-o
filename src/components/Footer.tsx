import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import logoNP from "@/assets/logoNP.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: "Consultoria Alimentar", href: "/servicos-alimentares" },
      { label: "Rotulagem Nutricional", href: "/np-rotulagem" },
      { label: "Segurança Alimentar", href: "#" },
      { label: "Formação de Equipas", href: "#" },
    ],
    company: [
      { label: "Sobre Nós", href: "/sobre" },
      { label: "Nossa Equipa", href: "/equipe" },
      { label: "Casos de Sucesso", href: "#" },
      { label: "Carreiras", href: "#" },
    ],
    legal: [
      { label: "Política de Privacidade", href: "#" },
      { label: "Termos de Uso", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  };

  return (
    <footer className="bg-[#1a1a1a] text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent hidden md:block" />
      </div>
      
      {/* Main footer content */}
      <div className="container mx-auto px-6 py-12 sm:py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 mb-12 sm:mb-16">
          {/* Brand column */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-4">
            <Link to="/" className="inline-block mb-4 sm:mb-6 group">
              <img 
                src={logoNP} 
                alt="NP Consultoria" 
                className="h-10 sm:h-12 w-auto brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity duration-300" 
              />
            </Link>
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 max-w-xs">
              Liderando a transformação no setor alimentar com soluções inovadoras em 
              consultoria, rotulagem e segurança alimentar.
            </p>
            
            {/* Social links */}
            <div className="flex items-center gap-3">
              {[
                { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services links */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white/40 mb-3 sm:mb-4">
              Serviços
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-primary text-xs sm:text-sm transition-colors duration-300 inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 hidden sm:inline" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white/40 mb-3 sm:mb-4">
              Empresa
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-primary text-xs sm:text-sm transition-colors duration-300 inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 hidden sm:inline" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="col-span-2 lg:col-span-4">
            <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white/40 mb-3 sm:mb-4">
              Contacto
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a
                  href="tel:+551199999999"
                  className="flex items-start gap-3 text-white/70 hover:text-primary transition-colors duration-300 group"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm">+55 11 9999-9999</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:np.consultoriaalimentacao@gmail.com"
                  className="flex items-start gap-3 text-white/70 hover:text-primary transition-colors duration-300 group"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm break-all sm:break-normal">np.consultoriaalimentacao@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 shrink-0" />
                <span className="text-xs sm:text-sm">
                  São Paulo, Brasil<br />
                  Atendimento em todo o território nacional
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 sm:pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-white/40 text-center sm:text-left">
              © {currentYear} <span className="text-primary">NP Consultoria Alimentos</span>. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4 sm:gap-6">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[0.65rem] sm:text-xs text-white/40 hover:text-white/70 transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
