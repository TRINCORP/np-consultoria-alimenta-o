import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import FormSuccessModal from "@/components/FormSuccessModal";
import { SmokeEffect } from "@/components/effects/SmokeEffect";
import { BrilliantReflection } from "@/components/effects/BrilliantReflection";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Instagram,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Shield,
  Award,
  Headphones,
} from "lucide-react";

const WHATSAPP_NUMBER = "5519989750741";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Olá! Quero entender como a NP pode ajudar a otimizar os processos do meu negócio. Podemos conversar?"
)}`;

const contactInfo = [
  {
    icon: Phone,
    label: "WhatsApp",
    value: "(19) 98975-0741",
    href: WHATSAPP_URL,
    description: "Atendimento rápido e direto",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "np.consultoriaalimentacao@gmail.com",
    href: "mailto:np.consultoriaalimentacao@gmail.com",
    description: "Respondemos em até 24h úteis",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@np.consultoriaalimentos",
    href: "https://www.instagram.com/np.consultoriaalimentos/",
    description: "Dicas e bastidores do nosso trabalho",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "São Paulo, Brasil",
    href: "https://maps.google.com/?q=Indaiatuba+SP",
    description: "Atendimento presencial e remoto",
  },
];

const reasons = [
  "Regularizar meu restaurante",
  "Rotulagem nutricional",
  "Manual de boas práticas",
  "Treinamento de equipe",
  "Abrir negócio alimentício",
  "Outro assunto",
];

const trustItems = [
  { icon: Shield, label: "Consultoria especializada em segurança alimentar", delay: 0 },
  { icon: Award, label: "Mais de 300 empresas atendidas com excelência", delay: 150 },
  { icon: Headphones, label: "Atendimento personalizado em horário comercial", delay: 300 },
];

const Contact = () => {
  const formSectionRef = useScrollReveal();
  const trustRef = useScrollReveal();

  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    if (heroInView) {
      setTimeout(() => setIsRevealed(true), 300);
    }
  }, [heroInView]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    reason: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedReason, setSelectedReason] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setShowSuccess(true);
    setFormData({ name: "", email: "", phone: "", company: "", reason: "", message: "" });
    setSelectedReason(null);
  };

  const handleReasonClick = (reason: string) => {
    setSelectedReason(reason);
    setFormData((prev) => ({ ...prev, reason }));
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contato | NP Consultoria em Segurança Alimentar e Rotulagem"
        description="Fale com a NP Consultoria. Especialistas em consultoria alimentar, vigilância sanitária, rotulagem nutricional ANVISA e manual de boas práticas para restaurantes e indústrias."
        keywords="contato consultoria alimentar, consultoria vigilância sanitária, rotulagem nutricional contato, manual de boas práticas, treinamento manipulação de alimentos, consultoria segurança alimentar"
      />
      <Header />

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-[70vh] sm:min-h-[60vh] flex items-center bg-[#1a1a1a] text-white overflow-hidden"
      >
        {/* Smoke + particles */}
        <div className="absolute inset-0 pointer-events-none">
          <SmokeEffect />
          <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-primary/40 rounded-full floating hidden sm:block" />
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-accent/30 rounded-full floating animation-delay-500 hidden sm:block" />
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary/30 rounded-full floating animation-delay-1000 hidden sm:block" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/95 via-[#1a1a1a]/80 to-[#1a1a1a]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.08),transparent_70%)]" />

        <div className="container mx-auto px-6 sm:px-8 py-28 sm:py-32 md:py-36 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Animated title */}
            <div className="mb-6 sm:mb-8">
              <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block py-1">
                  <span
                    className={`inline-block transition-all duration-1000 ease-out ${
                      isRevealed ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                    }`}
                  >
                    {"Fale".split("").map((letter, i) => (
                      <span
                        key={i}
                        className={`inline-block transition-all duration-500 hover:text-primary hover:-translate-y-1 ${
                          isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                        style={{
                          transitionDelay: `${i * 60 + 200}ms`,
                          textShadow: isRevealed ? "0 0 40px rgba(180, 120, 90, 0.3)" : "none",
                        }}
                      >
                        {letter}
                      </span>
                    ))}
                    {" "}
                    <span className="relative inline-block">
                      <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent-light to-primary bg-[length:200%_auto] animate-gradient-x">
                        Conosco
                      </span>
                      <span
                        className={`absolute inset-0 blur-xl bg-primary/30 transition-opacity duration-1000 ${
                          isRevealed ? "opacity-100" : "opacity-0"
                        }`}
                        style={{ transitionDelay: "800ms" }}
                      />
                    </span>
                  </span>
                </span>

                {/* Animated divider */}
                <span className="block my-3 sm:my-4 flex justify-center">
                  <span
                    className={`block h-1 bg-gradient-to-r from-primary via-accent-light to-transparent rounded-full transition-all duration-1000 ease-out ${
                      isRevealed ? "w-20 sm:w-28 opacity-100" : "w-0 opacity-0"
                    }`}
                    style={{ transitionDelay: "600ms" }}
                  />
                </span>

                <span className="block py-1">
                  <span
                    className={`inline-block transition-all duration-1000 ease-out ${
                      isRevealed ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                    }`}
                    style={{ transitionDelay: "400ms" }}
                  >
                    Sua{" "}
                    <span className="relative inline-block">
                      <span className="relative z-10 italic text-primary">Operação</span>
                      <span
                        className={`absolute -left-2 sm:-left-3 top-0 text-primary/40 transition-all duration-500 ${
                          isRevealed ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                        }`}
                        style={{ transitionDelay: "1000ms" }}
                      >
                        [
                      </span>
                      <span
                        className={`absolute -right-2 sm:-right-3 top-0 text-primary/40 transition-all duration-500 ${
                          isRevealed ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                        }`}
                        style={{ transitionDelay: "1000ms" }}
                      >
                        ]
                      </span>
                    </span>
                    {" "}Merece o Melhor
                  </span>
                </span>
              </h1>
            </div>

            <p
              className={`text-sm sm:text-base md:text-lg text-white/70 max-w-xl mx-auto leading-relaxed transition-all duration-1000 ${
                isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "900ms" }}
            >
              Conte para nós o que você precisa. Nossa equipe de especialistas está pronta
              para transformar a segurança e a conformidade do seu negócio.
            </p>

            <div
              className={`flex flex-col sm:flex-row items-center justify-center gap-3 mt-8 transition-all duration-1000 ${
                isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "1100ms" }}
            >
              <a href="#formulario">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-5 text-sm font-medium group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 w-full sm:w-auto">
                  Enviar Mensagem
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-5 text-sm font-medium transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                >
                  <MessageCircle className="mr-2 w-4 h-4" />
                  WhatsApp Direto
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ CONTACT CARDS ═══════════════════ */}
      <section className="py-10 sm:py-14 bg-background relative -mt-6 sm:-mt-10 z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
            {contactInfo.map((info, i) => (
              <a
                key={info.label}
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-card rounded-2xl border border-border p-4 sm:p-6 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <BrilliantReflection />
                </div>
                <div className="relative z-10">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <p className="text-[10px] sm:text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">
                    {info.label}
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-foreground mb-1 break-all sm:break-normal leading-tight">
                    {info.value}
                  </p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground hidden sm:block">{info.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ TRUST BADGES ═══════════════════ */}
      <section ref={trustRef} className="py-10 sm:py-14 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {trustItems.map((item, i) => (
              <div
                key={item.label}
                className={`scroll-reveal stagger-${i + 1} flex items-center gap-3 sm:gap-4 bg-card rounded-2xl border border-border p-4 sm:p-5`}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-xs sm:text-sm font-medium text-foreground leading-snug">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ FORM + WHATSAPP ═══════════════════ */}
      <section ref={formSectionRef} id="formulario" className="py-12 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Left: WhatsApp CTA + info */}
            <div className="scroll-reveal lg:col-span-2 flex flex-col gap-5 sm:gap-6">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Como podemos ajudar?
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Preencha o formulário ou fale diretamente com um consultor pelo WhatsApp.
                  Retornamos todas as mensagens em até 24 horas úteis.
                </p>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-gradient-to-r from-emerald-500/10 to-emerald-600/5 border border-emerald-500/20 rounded-2xl p-4 sm:p-5 hover:border-emerald-500/40 transition-all duration-300 overflow-hidden relative"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <BrilliantReflection />
                </div>
                <div className="relative z-10 flex items-center gap-4 w-full">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-emerald-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-foreground text-sm">
                      Prefere o WhatsApp?
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Clique e fale com um consultor agora
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-emerald-500 shrink-0 group-hover:translate-x-1 transition-transform duration-300 hidden sm:block ml-auto" />
                </div>
              </a>

              {/* Trust chips */}
              <div className="flex flex-wrap gap-2">
                {[
                  "Resposta em até 24h",
                  "+300 empresas atendidas",
                  "Consultoria personalizada",
                ].map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] sm:text-xs font-medium"
                  >
                    <CheckCircle2 className="w-3 h-3" />
                    {badge}
                  </span>
                ))}
              </div>

              {/* Contact mini list */}
              <div className="bg-card rounded-2xl border border-border p-4 sm:p-5 space-y-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>(19) 98975-0741</span>
                </a>
                <a
                  href="mailto:np.consultoriaalimentacao@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span className="break-all sm:break-normal">np.consultoriaalimentacao@gmail.com</span>
                </a>
                <div className="flex items-center gap-3 text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>Atendimento presencial e remoto</span>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="scroll-reveal-right stagger-2 lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="bg-card rounded-2xl border border-border p-5 sm:p-8 shadow-sm relative overflow-hidden"
              >
                <div className="relative z-10">
                  <h3 className="text-base sm:text-xl font-bold text-foreground mb-1">
                    Envie sua mensagem
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-5 sm:mb-6">
                    Preencha os campos e entraremos em contato rapidamente.
                  </p>

                  {/* Reason chips */}
                  <div className="mb-5 sm:mb-6">
                    <Label className="text-xs sm:text-sm font-medium text-foreground mb-2 sm:mb-3 block">
                      Qual o motivo do contato?
                    </Label>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {reasons.map((reason) => (
                        <button
                          key={reason}
                          type="button"
                          onClick={() => handleReasonClick(reason)}
                          className={`px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl text-[10px] sm:text-xs font-medium transition-all duration-200 border ${
                            selectedReason === reason
                              ? "bg-primary text-primary-foreground border-primary shadow-md"
                              : "bg-muted/50 text-muted-foreground border-border hover:border-primary/30 hover:bg-primary/5"
                          }`}
                        >
                          {reason}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="name" className="text-xs sm:text-sm font-medium">
                        Nome completo *
                      </Label>
                      <Input
                        id="name"
                        required
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                        className="rounded-xl h-10 sm:h-11 text-sm"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="email" className="text-xs sm:text-sm font-medium">
                        E-mail *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                        className="rounded-xl h-10 sm:h-11 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="phone" className="text-xs sm:text-sm font-medium">
                        Telefone / WhatsApp
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(19) 99999-9999"
                        value={formData.phone}
                        onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
                        className="rounded-xl h-10 sm:h-11 text-sm"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="company" className="text-xs sm:text-sm font-medium">
                        Empresa / Estabelecimento
                      </Label>
                      <Input
                        id="company"
                        placeholder="Nome da empresa"
                        value={formData.company}
                        onChange={(e) => setFormData((p) => ({ ...p, company: e.target.value }))}
                        className="rounded-xl h-10 sm:h-11 text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5 mb-5 sm:mb-6">
                    <Label htmlFor="message" className="text-xs sm:text-sm font-medium">
                      Mensagem *
                    </Label>
                    <Textarea
                      id="message"
                      required
                      placeholder="Descreva como podemos ajudar..."
                      value={formData.message}
                      onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                      className="rounded-xl min-h-[100px] sm:min-h-[120px] resize-none text-sm"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-11 sm:h-13 text-sm font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl group transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Enviando...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Enviar Mensagem
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    )}
                  </Button>

                  <p className="text-[10px] sm:text-xs text-muted-foreground text-center mt-3">
                    Ao enviar, você concorda com nossa política de privacidade.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ BOTTOM CTA ═══════════════════ */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-[#1a1a1a] via-[#252220] to-[#1a1a1a] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <SmokeEffect />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.1),transparent_60%)]" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              Pronto para Elevar a{" "}
              <span className="text-gradient">Qualidade do Seu Negócio</span>?
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-white/60 max-w-lg mx-auto mb-6 sm:mb-8 leading-relaxed">
              Solicite um diagnóstico gratuito e descubra como garantir segurança alimentar,
              conformidade com a ANVISA e maior competitividade para sua operação.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 sm:px-8 py-5 text-sm font-medium group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 w-full sm:w-auto">
                  Solicitar Diagnóstico Gratuito
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#formulario">
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 rounded-full px-6 sm:px-8 py-5 text-sm font-medium transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                >
                  Enviar Mensagem
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FormSuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        type="contact"
      />
    </div>
  );
};

export default Contact;
