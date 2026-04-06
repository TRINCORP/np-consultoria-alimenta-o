import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, Phone, Mail, Clock, Send, CheckCircle2, MessageCircle, Instagram, MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import FormSuccessModal from "@/components/FormSuccessModal";

const WHATSAPP_NUMBER = "5519989750741";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Olá! Quero entender como a NP pode ajudar a otimizar os processos do meu negócio. Podemos conversar?"
)}`;

const reasons = [
  "Preciso regularizar meu restaurante na vigilância sanitária",
  "Quero fazer a rotulagem nutricional dos meus produtos",
  "Preciso de manual de boas práticas para minha cozinha",
  "Quero treinamento de manipulação de alimentos para minha equipe",
  "Preciso de consultoria para abrir um negócio alimentício",
  "Outro assunto",
];

const PremiumCTA = () => {
  const containerRef = useScrollReveal();
  const formRef = useScrollReveal();

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
    <section id="contato" ref={containerRef} className="py-16 sm:py-20 md:py-28 bg-gradient-to-br from-[#1a1a1a] via-[#252220] to-[#1a1a1a] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/10 rounded-full" />
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-white/5 rounded-full" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.1),transparent_60%)]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <span className="scroll-reveal-scale inline-block px-4 sm:px-5 py-2 rounded-full bg-primary/20 text-primary text-xs sm:text-sm font-medium mb-6 sm:mb-8">
            Pronto para Transformar o Seu Negócio?
          </span>

          <h2 className="scroll-reveal-blur stagger-1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Sua Operação Merece <span className="text-gradient">Segurança e Conformidade</span>
          </h2>

          <p className="scroll-reveal stagger-2 text-sm sm:text-base md:text-lg lg:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Solicite uma consultoria sem compromisso. Atendemos restaurantes, cozinhas industriais, 
            indústrias e produtores artesanais em Indaiatuba e região de Campinas.
          </p>
        </div>

        {/* Form + Info Grid */}
        <div ref={formRef} className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left side: info */}
          <div className="scroll-reveal lg:col-span-2 flex flex-col gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Como podemos ajudar?
              </h3>
              <p className="text-sm sm:text-base text-white/60 leading-relaxed">
                Preencha o formulário ao lado ou entre em contato diretamente pelos nossos canais.
                Retornamos todas as mensagens em até 24 horas úteis.
              </p>
            </div>

            {/* Schedule card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-5 sm:p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold text-white">Horário de Atendimento</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-white/50">
                  <span>Segunda a Sexta</span>
                  <span className="font-medium text-white">08h às 18h</span>
                </div>
                <div className="flex justify-between text-white/50">
                  <span>Sábados</span>
                  <span className="font-medium text-white">08h às 12h</span>
                </div>
                <div className="flex justify-between text-white/50">
                  <span>Domingos e Feriados</span>
                  <span className="font-medium text-white/40">Fechado</span>
                </div>
              </div>
            </div>

            {/* Contact info */}
            <div className="space-y-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/60 hover:text-emerald-400 transition-colors duration-300 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-white/40 block">WhatsApp</span>
                  <span className="text-sm font-medium">(19) 98975-0741</span>
                </div>
              </a>
              <a href="mailto:np.consultoriaalimentcao@gmail.com" className="flex items-center gap-3 text-white/60 hover:text-sky-400 transition-colors duration-300 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-sky-500/20 transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-white/40 block">E-mail</span>
                  <span className="text-sm font-medium break-all sm:break-normal">np.consultoriaalimentcao@gmail.com</span>
                </div>
              </a>
              <a href="https://www.instagram.com/np.consultoriaalimentos/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/60 hover:text-pink-400 transition-colors duration-300 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-pink-500/20 transition-colors duration-300">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-white/40 block">Instagram</span>
                  <span className="text-sm font-medium">@np.consultoriaalimentos</span>
                </div>
              </a>
            </div>

            {/* Quick WhatsApp CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-5 hover:border-emerald-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-white text-sm">
                  Prefere conversar pelo WhatsApp?
                </p>
                <p className="text-xs text-white/50">
                  Clique aqui e fale diretamente com um consultor
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-emerald-500 shrink-0 group-hover:translate-x-1 transition-transform duration-300 hidden sm:block" />
            </a>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3">
              {["Resposta em até 24h", "+300 empresas atendidas", "Atendimento personalizado"].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/15 text-primary text-xs font-medium"
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
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 sm:p-8"
            >
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                Envie sua mensagem
              </h3>
              <p className="text-sm text-white/50 mb-6">
                Preencha os campos abaixo e entraremos em contato rapidamente.
              </p>

              {/* Reason chips */}
              <div className="mb-6">
                <Label className="text-sm font-medium text-white/80 mb-3 block">
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
                          : "bg-white/5 text-white/60 border-white/10 hover:border-primary/30 hover:bg-primary/10"
                      }`}
                    >
                      {reason}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <Label htmlFor="cta-name" className="text-sm font-medium text-white/80">Nome completo *</Label>
                  <Input
                    id="cta-name"
                    required
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                    className="rounded-xl h-11 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cta-email" className="text-sm font-medium text-white/80">E-mail *</Label>
                  <Input
                    id="cta-email"
                    type="email"
                    required
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                    className="rounded-xl h-11 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <Label htmlFor="cta-phone" className="text-sm font-medium text-white/80">Telefone / WhatsApp</Label>
                  <Input
                    id="cta-phone"
                    type="tel"
                    placeholder="(19) 99999-9999"
                    value={formData.phone}
                    onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
                    className="rounded-xl h-11 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cta-company" className="text-sm font-medium text-white/80">Empresa / Estabelecimento</Label>
                  <Input
                    id="cta-company"
                    placeholder="Nome da empresa"
                    value={formData.company}
                    onChange={(e) => setFormData((p) => ({ ...p, company: e.target.value }))}
                    className="rounded-xl h-11 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <Label htmlFor="cta-message" className="text-sm font-medium text-white/80">Mensagem *</Label>
                <Textarea
                  id="cta-message"
                  required
                  placeholder="Descreva como podemos ajudar..."
                  value={formData.message}
                  onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                  className="rounded-xl min-h-[120px] resize-none bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-primary"
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

              <p className="text-xs text-white/40 text-center mt-4">
                Ao enviar, você concorda com nossa política de privacidade.
              </p>
            </form>
          </div>
        </div>
      </div>

      <FormSuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        type="contact"
      />
    </section>
  );
};

export default PremiumCTA;
