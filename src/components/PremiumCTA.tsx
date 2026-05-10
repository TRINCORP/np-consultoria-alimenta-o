import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, Phone, Mail, Clock, Send, CheckCircle2, MessageCircle, Instagram } from "lucide-react";
import { useInView } from "react-intersection-observer";
import FormSuccessModal from "@/components/FormSuccessModal";

const WHATSAPP_NUMBER = "5519989750741";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Olá! Quero entender como a NP pode ajudar a otimizar os processos do meu negócio. Podemos conversar?"
)}`;

const reasons = [
  "Regularizar na vigilância sanitária",
  "Rotulagem nutricional dos meus produtos",
  "Manual de boas práticas",
  "Treinamento de manipuladores",
  "Abrir negócio alimentício",
  "Outro assunto",
];

const contacts = [
  {
    icon: Phone,
    label: "WhatsApp",
    value: "(19) 98975-0741",
    href: WHATSAPP_URL,
    hoverColor: "group-hover:text-emerald-400",
    hoverBg: "group-hover:bg-emerald-500/15",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "np.consultoriaalimentcao@gmail.com",
    href: "mailto:np.consultoriaalimentcao@gmail.com",
    hoverColor: "group-hover:text-sky-400",
    hoverBg: "group-hover:bg-sky-500/15",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@np.consultoriaalimentos",
    href: "https://www.instagram.com/np.consultoriaalimentos/",
    hoverColor: "group-hover:text-pink-400",
    hoverBg: "group-hover:bg-pink-500/15",
  },
];

const PremiumCTA = () => {
  const { ref: headRef, inView: headInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: bodyRef, inView: bodyInView } = useInView({ threshold: 0.05, triggerOnce: true });
  const formElement = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({ name: "", email: "", phone: "", company: "", reason: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedReason, setSelectedReason] = useState<string | null>(null);

  const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzx8N6RkUUcu_09lghJWfhDHxJhG6GavWZ_no0w7upmrKNDjW-TsKAxJTDGPN0HUkdJMQ/exec";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({
          name:    formData.name,
          email:   formData.email,
          phone:   formData.phone,
          company: formData.company,
          reason:  selectedReason ?? "",
          message: formData.message,
        }),
      });
    } catch (_) {
      // no-cors não lança erro mesmo em sucesso — seguimos
    }
    setIsSubmitting(false);
    setShowSuccess(true);
    setFormData({ name: "", email: "", phone: "", company: "", reason: "", message: "" });
    setSelectedReason(null);
  };

  const handleReason = (r: string) => {
    setSelectedReason(r);
    setFormData((p) => ({ ...p, reason: r }));
  };

  return (
    <section id="contato" className="bg-[#1C1A18] py-20 lg:py-32 relative overflow-hidden">

      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
          style={{ background: "radial-gradient(ellipse at top, hsl(20 35% 62% / 0.09), transparent 65%)" }} />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px]"
          style={{ background: "radial-gradient(circle at bottom right, hsl(20 35% 62% / 0.05), transparent 70%)" }} />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">

        {/* ── Header ── */}
        <div ref={headRef} className="text-center mb-16 lg:mb-20">
          <span className={`block text-[11px] font-semibold tracking-[0.32em] uppercase
            text-[hsl(20_35%_62%)] mb-6
            transition-all duration-700 ${headInView ? "opacity-100" : "opacity-0"}`}>
            Pronto para transformar o seu negócio?
          </span>
          <h2
            className={`font-playfair font-bold text-white leading-[1.08] mb-5
              transition-all duration-700 delay-100 ${headInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
          >
            Sua operação merece{" "}
            <em className="italic text-[hsl(20_45%_72%)]">segurança</em>
            {" "}e conformidade.
          </h2>
          <p className={`text-white/45 text-base leading-relaxed max-w-xl mx-auto
            transition-all duration-700 delay-200 ${headInView ? "opacity-100" : "opacity-0"}`}>
            Atendemos restaurantes, cozinhas industriais, indústrias e produtores artesanais
            em Indaiatuba e região de Campinas.
          </p>
        </div>

        {/* ── Two-column layout ── */}
        <div ref={bodyRef} className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">

          {/* Left — info */}
          <div className={`lg:col-span-2 flex flex-col gap-7
            transition-all duration-700 ${bodyInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Como podemos ajudar?</h3>
              <p className="text-white/45 text-sm leading-relaxed">
                Preencha o formulário ou entre em contato diretamente.
                Retornamos em até 24 horas úteis.
              </p>
            </div>

            {/* Hours */}
            <div className="rounded-[1.25rem] border border-white/8 bg-white/[0.03] p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[hsl(20_35%_62%/0.15)] flex items-center justify-center">
                  <Clock className="w-4 h-4 text-[hsl(20_45%_70%)]" strokeWidth={1.5} />
                </div>
                <span className="font-semibold text-white text-sm">Horário de Atendimento</span>
              </div>
              <div className="space-y-2 text-sm">
                {[
                  ["Segunda a Sexta", "08h às 18h"],
                  ["Sábados", "08h às 12h"],
                  ["Dom. e Feriados", "—"],
                ].map(([day, time]) => (
                  <div key={day} className="flex justify-between">
                    <span className="text-white/35">{day}</span>
                    <span className={`font-medium ${time === "—" ? "text-white/25" : "text-white"}`}>{time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact links */}
            <div className="space-y-2">
              {contacts.map(({ icon: Icon, label, value, href, hoverColor, hoverBg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-3 text-white/50 ${hoverColor} transition-colors duration-300`}
                >
                  <div className={`w-9 h-9 rounded-full bg-white/5 flex items-center justify-center
                    ${hoverBg} transition-colors duration-300`}>
                    <Icon className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/30 block">{label}</span>
                    <span className="text-sm font-medium leading-none">{value}</span>
                  </div>
                </a>
              ))}
            </div>

            {/* WhatsApp quick CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4
                rounded-[1.25rem] border border-emerald-500/20 bg-emerald-500/8 p-5
                hover:border-emerald-500/35 hover:bg-emerald-500/12
                transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0
                group-hover:scale-105 transition-transform duration-300">
                <MessageCircle className="w-5 h-5 text-white" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-white text-sm">Prefere WhatsApp?</p>
                <p className="text-xs text-white/40 mt-0.5">Fale direto com um consultor</p>
              </div>
              <ArrowRight className="w-4 h-4 text-emerald-500 shrink-0 hidden sm:block
                group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            {/* Trust pills */}
            <div className="flex flex-wrap gap-2">
              {["Resposta em até 24h", "+10mil consumidores", "Atendimento personalizado"].map((badge) => (
                <span key={badge} className="inline-flex items-center gap-1.5 px-3 py-1.5
                  rounded-full bg-[hsl(20_35%_62%/0.1)] border border-[hsl(20_35%_62%/0.2)]
                  text-[hsl(20_45%_70%)] text-[11px] font-medium">
                  <CheckCircle2 className="w-3 h-3" strokeWidth={2} />
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className={`lg:col-span-3
            transition-all duration-700 delay-150 ${bodyInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <form
              ref={formElement}
              onSubmit={handleSubmit}
              className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-7 sm:p-9"
            >
              <h3 className="text-base font-semibold text-white mb-1">Envie sua mensagem</h3>
              <p className="text-xs text-white/35 mb-7">Preencha os campos abaixo — retornamos rapidamente.</p>

              {/* Reason chips */}
              <div className="mb-6">
                <Label className="text-xs font-medium text-white/60 mb-3 block uppercase tracking-wide">
                  Motivo do contato
                </Label>
                <div className="flex flex-wrap gap-2">
                  {reasons.map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => handleReason(r)}
                      className={`px-3 py-2 rounded-xl text-xs font-medium transition-all duration-200 border
                        ${selectedReason === r
                          ? "bg-[hsl(20_35%_62%)] text-white border-[hsl(20_35%_62%)]"
                          : "bg-white/5 text-white/50 border-white/8 hover:border-[hsl(20_35%_62%/0.4)] hover:text-white/80"
                        }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {[
                  { id: "name", label: "Nome completo *", placeholder: "Seu nome", type: "text", key: "name", required: true },
                  { id: "email", label: "E-mail *", placeholder: "seu@email.com", type: "email", key: "email", required: true },
                  { id: "phone", label: "Telefone / WhatsApp", placeholder: "(19) 99999-9999", type: "tel", key: "phone", required: false },
                  { id: "company", label: "Empresa", placeholder: "Nome da empresa", type: "text", key: "company", required: false },
                ].map(({ id, label, placeholder, type, key, required }) => (
                  <div key={id} className="space-y-1.5">
                    <Label htmlFor={id} className="text-xs font-medium text-white/55">{label}</Label>
                    <Input
                      id={id}
                      type={type}
                      required={required}
                      placeholder={placeholder}
                      value={formData[key as keyof typeof formData]}
                      onChange={(e) => setFormData((p) => ({ ...p, [key]: e.target.value }))}
                      className="h-11 rounded-xl bg-white/5 border-white/8 text-white text-sm
                        placeholder:text-white/25 focus:border-[hsl(20_35%_62%)] focus:ring-0
                        transition-colors duration-200"
                    />
                  </div>
                ))}
              </div>

              <div className="space-y-1.5 mb-6">
                <Label htmlFor="message" className="text-xs font-medium text-white/55">Mensagem *</Label>
                <Textarea
                  id="message"
                  required
                  placeholder="Descreva como podemos ajudar..."
                  value={formData.message}
                  onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                  className="rounded-xl min-h-[110px] resize-none bg-white/5 border-white/8 text-white text-sm
                    placeholder:text-white/25 focus:border-[hsl(20_35%_62%)] focus:ring-0
                    transition-colors duration-200"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full h-12 rounded-xl font-semibold text-sm text-white
                  bg-[hsl(20_35%_62%)] hover:bg-[hsl(20_35%_55%)]
                  hover:shadow-[0_8px_32px_hsl(20_35%_62%/0.35)]
                  disabled:opacity-60 disabled:cursor-not-allowed
                  transition-all duration-300 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar Mensagem
                    <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" strokeWidth={1.75} />
                  </>
                )}
              </button>

              <p className="text-[11px] text-white/25 text-center mt-4">
                Ao enviar, você concorda com nossa política de privacidade.
              </p>
            </form>
          </div>
        </div>
      </div>

      <FormSuccessModal isOpen={showSuccess} onClose={() => setShowSuccess(false)} type="contact" />
    </section>
  );
};

export default PremiumCTA;
