import { useState, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import FormSuccessModal from "@/components/FormSuccessModal";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Instagram,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
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
    description: "Resposta rápida em horário comercial",
    color: "from-emerald-500/20 to-emerald-600/10",
    iconColor: "text-emerald-400",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "np.consultoriaalimentacao@gmail.com",
    href: "mailto:np.consultoriaalimentacao@gmail.com",
    description: "Respondemos em até 24 horas úteis",
    color: "from-sky-500/20 to-sky-600/10",
    iconColor: "text-sky-400",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@np.consultoriaalimentos",
    href: "https://www.instagram.com/np.consultoriaalimentos/",
    description: "Acompanhe nosso trabalho e dicas",
    color: "from-pink-500/20 to-pink-600/10",
    iconColor: "text-pink-400",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Indaiatuba/SP",
    href: "https://maps.google.com/?q=Indaiatuba+SP",
    description: "Atendemos Indaiatuba e região de Campinas",
    color: "from-amber-500/20 to-amber-600/10",
    iconColor: "text-amber-400",
  },
];

const reasons = [
  "Preciso regularizar meu restaurante na vigilância sanitária",
  "Quero fazer a rotulagem nutricional dos meus produtos",
  "Preciso de manual de boas práticas para minha cozinha",
  "Quero treinamento de manipulação de alimentos para minha equipe",
  "Preciso de consultoria para abrir um negócio alimentício",
  "Outro assunto",
];

const Contact = () => {
  const heroRef = useScrollReveal();
  const formRef = useScrollReveal();
  const infoRef = useScrollReveal();
  const ctaRef = useScrollReveal();

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
  const formElement = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simula envio
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
        title="Contato | NP Consultoria em Alimentos"
        description="Entre em contato com a NP Consultoria. Consultoria em segurança alimentar, vigilância sanitária, rotulagem nutricional e boas práticas em Indaiatuba e região de Campinas."
        keywords="contato NP consultoria, consultoria alimentar Indaiatuba, vigilância sanitária contato, rotulagem nutricional contato"
      />
      <Header />

      {/* Hero */}
      <section
        ref={heroRef}
        className="relative pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-20 md:pb-24 bg-gradient-to-br from-[#1a1a1a] via-[#252220] to-[#1a1a1a] overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
          <div className="absolute top-20 right-1/4 w-px h-40 bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />
          <div className="absolute bottom-20 left-1/3 w-px h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="scroll-reveal-scale inline-block px-5 py-2 rounded-full bg-primary/20 text-primary text-xs sm:text-sm font-medium mb-6">
              Fale Conosco
            </span>
            <h1 className="scroll-reveal-blur stagger-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Vamos Transformar a{" "}
              <span className="text-gradient">Segurança do Seu Negócio</span>
            </h1>
            <p className="scroll-reveal stagger-2 text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Conte para nós o que você precisa. Nossa equipe de especialistas está pronta
              para ajudar sua operação a alcançar excelência em conformidade sanitária.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section ref={infoRef} className="py-12 sm:py-16 bg-background relative -mt-8 sm:-mt-12 z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {contactInfo.map((info, i) => (
              <a
                key={info.label}
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`scroll-reveal stagger-${i + 1} group relative bg-card rounded-2xl border border-border p-5 sm:p-6 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1`}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <info.icon className={`w-5 h-5 ${info.iconColor}`} />
                </div>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">
                  {info.label}
                </p>
                <p className="text-sm sm:text-base font-semibold text-foreground mb-1 break-all sm:break-normal">
                  {info.value}
                </p>
                <p className="text-xs text-muted-foreground">{info.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Info Section */}
      <section ref={formRef} className="py-12 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Left side: info + schedule */}
            <div className="scroll-reveal lg:col-span-2 flex flex-col gap-6 sm:gap-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                  Como podemos ajudar?
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Preencha o formulário ao lado ou entre em contato diretamente pelos nossos canais.
                  Retornamos todas as mensagens em até 24 horas úteis.
                </p>
              </div>

              {/* Schedule card */}
              <div className="bg-card rounded-2xl border border-border p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">Horário de Atendimento</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Segunda a Sexta</span>
                    <span className="font-medium text-foreground">08h às 18h</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Sábados</span>
                    <span className="font-medium text-foreground">08h às 12h</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Domingos e Feriados</span>
                    <span className="font-medium text-foreground/60">Fechado</span>
                  </div>
                </div>
              </div>

              {/* Quick WhatsApp CTA */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-gradient-to-r from-emerald-500/10 to-emerald-600/5 border border-emerald-500/20 rounded-2xl p-5 sm:p-6 hover:border-emerald-500/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm sm:text-base">
                    Prefere conversar pelo WhatsApp?
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Clique aqui e fale diretamente com um consultor
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-emerald-500 shrink-0 group-hover:translate-x-1 transition-transform duration-300 hidden sm:block" />
              </a>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-3">
                {[
                  "Resposta em até 24h",
                  "+300 empresas atendidas",
                  "Atendimento personalizado",
                ].map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium"
                  >
                    <CheckCircle2 className="w-3 h-3" />
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Right side: form */}
            <div className="scroll-reveal-right stagger-2 lg:col-span-3">
              <form
                ref={formElement}
                onSubmit={handleSubmit}
                className="bg-card rounded-2xl border border-border p-6 sm:p-8 shadow-sm"
              >
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">
                  Envie sua mensagem
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Preencha os campos abaixo e entraremos em contato rapidamente.
                </p>

                {/* Reason chips */}
                <div className="mb-6">
                  <Label className="text-sm font-medium text-foreground mb-3 block">
                    Qual o motivo do seu contato?
                  </Label>
                  <div className="flex flex-wrap gap-2">
                    {reasons.map((reason) => (
                      <button
                        key={reason}
                        type="button"
                        onClick={() => handleReasonClick(reason)}
                        className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 border ${
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                      Nome completo *
                    </Label>
                    <Input
                      id="name"
                      required
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                      className="rounded-xl h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      E-mail *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                      className="rounded-xl h-11"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium">
                      Telefone / WhatsApp
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(19) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
                      className="rounded-xl h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-medium">
                      Empresa / Estabelecimento
                    </Label>
                    <Input
                      id="company"
                      placeholder="Nome da empresa"
                      value={formData.company}
                      onChange={(e) => setFormData((p) => ({ ...p, company: e.target.value }))}
                      className="rounded-xl h-11"
                    />
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <Label htmlFor="message" className="text-sm font-medium">
                    Mensagem *
                  </Label>
                  <Textarea
                    id="message"
                    required
                    placeholder="Descreva como podemos ajudar..."
                    value={formData.message}
                    onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                    className="rounded-xl min-h-[120px] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 sm:h-14 text-sm sm:text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl group transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
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

                <p className="text-xs text-muted-foreground text-center mt-4">
                  Ao enviar, você concorda com nossa política de privacidade.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map / Location CTA */}
      <section ref={ctaRef} className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="scroll-reveal max-w-4xl mx-auto bg-gradient-to-br from-[#1a1a1a] via-[#252220] to-[#1a1a1a] rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <h2 className="scroll-reveal-blur stagger-1 text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Indaiatuba e Região de Campinas
              </h2>
              <p className="scroll-reveal stagger-2 text-sm sm:text-base text-white/60 max-w-lg mx-auto mb-8 leading-relaxed">
                Atendemos presencialmente restaurantes, cozinhas industriais, indústrias alimentícias
                e produtores artesanais em toda a região metropolitana de Campinas.
              </p>
              <div className="scroll-reveal stagger-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-5 text-sm font-medium group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 w-full sm:w-auto">
                    Agendar Visita Técnica
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
                <a
                  href="https://maps.google.com/?q=Indaiatuba+SP"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-5 text-sm font-medium transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                  >
                    Ver no Mapa
                  </Button>
                </a>
              </div>
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
