import { useState, useEffect } from "react";
import { X } from "lucide-react";

const WHATSAPP_NUMBER = "5519989750741";

const CTA_MESSAGES = [
  "Olá! Quero entender como a NP pode ajudar a otimizar os processos do meu negócio. Podemos conversar?",
  "Oi! Estou buscando formas de reduzir desperdícios e aumentar a lucratividade da minha operação. Podem me ajudar?",
  "Olá! Quero profissionalizar minha empresa e preciso de uma consultoria estratégica. Vamos conversar?",
];

const getRandomCTA = () => CTA_MESSAGES[Math.floor(Math.random() * CTA_MESSAGES.length)];
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(getRandomCTA())}`;

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [hasAutoShown, setHasAutoShown] = useState(false);

  // Auto-show on first visit after 4s
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
      setHasAutoShown(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const tooltipVisible = (!dismissed && showTooltip) || isHovering;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3">
      {/* Tooltip / CTA bubble */}
      <div
        className={`relative transition-all duration-300 ease-out ${
          tooltipVisible
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        <div className="bg-white rounded-2xl shadow-2xl p-4 max-w-[260px] border border-black/5">
          {hasAutoShown && !dismissed && showTooltip && !isHovering && (
            <button
              onClick={() => { setDismissed(true); setShowTooltip(false); }}
              className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black transition-colors"
              aria-label="Fechar"
            >
              <X size={12} />
            </button>
          )}
          <p className="text-sm text-gray-800 font-medium leading-snug">
            💡 Sua operação pode render mais. Quer descobrir como?
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block w-full text-center bg-[#25D366] hover:bg-[#1eba57] text-white text-sm font-semibold py-2.5 px-4 rounded-xl transition-colors"
          >
            Fale com um consultor →
          </a>
        </div>
      </div>

      {/* Floating button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco pelo WhatsApp"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="group relative w-[60px] h-[60px] rounded-full bg-[#25D366] hover:bg-[#1eba57] flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 transition-all duration-300 hover:scale-110"
      >
        <svg viewBox="0 0 32 32" className="w-8 h-8 text-white fill-current relative z-10">
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.132 6.744 3.054 9.378L1.056 31.2l6.06-1.94a15.9 15.9 0 008.888 2.684C24.826 31.944 32 24.77 32 16.004 32 7.176 24.826 0 16.004 0zm9.312 22.594c-.39 1.1-1.932 2.014-3.152 2.28-.834.18-1.924.322-5.594-1.202-4.694-1.95-7.71-6.724-7.944-7.036-.226-.312-1.89-2.52-1.89-4.808s1.196-3.412 1.62-3.878c.424-.466.926-.582 1.234-.582.308 0 .616.004.886.016.284.012.666-.108 1.042.794.39.934 1.324 3.224 1.44 3.458.116.234.194.508.038.818-.156.312-.234.506-.466.778-.232.274-.49.61-.698.818-.232.232-.474.484-.204.95.27.466 1.2 1.978 2.578 3.206 1.77 1.576 3.264 2.064 3.728 2.296.466.232.736.194 1.006-.116.27-.312 1.158-1.35 1.466-1.814.308-.466.616-.388 1.042-.232.424.156 2.716 1.282 3.182 1.514.466.232.776.35.892.542.116.194.116 1.1-.274 2.2z" />
        </svg>
      </a>
    </div>
  );
};

export default WhatsAppButton;
