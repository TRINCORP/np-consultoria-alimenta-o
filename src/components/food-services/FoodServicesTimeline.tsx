import { useEffect, useRef, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import { Search, ClipboardList, TrendingDown, Users, GraduationCap, Tag, BarChart3, Building2 } from "lucide-react";
import "./food-services-timeline.css";

interface ServiceCard {
  icon: React.ElementType;
  number: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
}

const services: ServiceCard[] = [
  {
    icon: Search,
    number: "01",
    category: "Vigilância Sanitária",
    title: "Consultoria em Vigilância Sanitária para Restaurantes",
    description:
      "Adequação sanitária completa para restaurantes, lanchonetes e cozinhas industriais. Preparamos seu estabelecimento para passar na vigilância sanitária, atendendo todas as exigências legais e obtendo o alvará sanitário.",
    tags: ["Adequação sanitária", "Alvará sanitário", "Fiscalização"],
  },
  {
    icon: ClipboardList,
    number: "02",
    category: "Documentação Obrigatória",
    title: "Manual de Boas Práticas e POP para Restaurante",
    description:
      "Elaboração do Manual de Boas Práticas (BPF) e dos Procedimentos Operacionais Padrão (POP) de manipulação de alimentos, documentação obrigatória exigida pela vigilância sanitária para restaurantes e cozinhas industriais.",
    tags: ["Manual de BPF", "POP manipulação", "Documentos obrigatórios"],
  },
  {
    icon: GraduationCap,
    number: "03",
    category: "Capacitação",
    title: "Treinamento de Manipuladores de Alimentos",
    description:
      "Curso de boas práticas de manipulação de alimentos com certificado. Capacitação teórica e prática em higiene, controle de temperatura, contaminação cruzada e conduta profissional — exigido pela vigilância sanitária.",
    tags: ["Curso manipuladores", "Certificado", "Boas práticas"],
  },
  {
    icon: TrendingDown,
    number: "04",
    category: "Eficiência Operacional",
    title: "Redução de Perdas e Controle de Estoque",
    description:
      "Estratégias para diminuir perdas operacionais e aumentar a rentabilidade do seu restaurante com controle de estoque, validade PVPS e reaproveitamento seguro de alimentos.",
    tags: ["Controle de estoque", "PVPS", "Redução de desperdício"],
  },
  {
    icon: Users,
    number: "05",
    category: "Gestão de Pessoas",
    title: "Gestão de Equipe e Liderança em Alimentação",
    description:
      "Estruturamos equipes mais organizadas e produtivas, com avaliação de desempenho, regulamento interno e desenvolvimento de líderes para restaurantes e cozinhas industriais.",
    tags: ["Liderança", "Avaliação", "Regulamento interno"],
  },
  {
    icon: Tag,
    number: "06",
    category: "Rotulagem ANVISA",
    title: "Rotulagem Nutricional e Tabela Nutricional",
    description:
      "Desenvolvimento de rótulos e tabela nutricional conforme legislação ANVISA. Rotulagem para produtos artesanais, para vender em supermercado e registro de produto alimentício — incluindo rotulagem frontal e alergênicos.",
    tags: ["Tabela nutricional", "ANVISA", "Produtos artesanais"],
  },
  {
    icon: BarChart3,
    number: "07",
    category: "Auditoria",
    title: "Auditoria e Revisão Técnica de Rótulos",
    description:
      "Analisamos rótulos existentes, identificamos não conformidades e regularizamos o enquadramento sanitário dos seus produtos antes que gerem multas ou notificações da ANVISA.",
    tags: ["Auditoria de rótulos", "Enquadramento", "Preventivo"],
  },
  {
    icon: Building2,
    number: "08",
    category: "Indústria",
    title: "Consultoria para Abrir Fábrica de Alimentos",
    description:
      "Apoio técnico completo para abrir e regularizar fábrica de alimentos. Licença sanitária para indústria de alimentos, registro de produtos na ANVISA, projeto de layout e acompanhamento em fiscalizações.",
    tags: ["Licença sanitária", "Registro ANVISA", "Indústria alimentícia"],
  },
];

/* ── Single timeline card row ── */
const TimelineCard = ({ service, index }: { service: ServiceCard; index: number }) => {
  const isLeft = index % 2 === 0;
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className={`fs-card-wrap ${isLeft ? "left" : "right"} ${inView ? "visible" : ""}`}
    >
      {isLeft ? (
        <>
          <div className="fs-card-cell fs-card-side">
            <div className="fs-card">
              <div className="fs-accent-bar" />
              <div className="fs-card-arrow-right" />
              <div className="fs-card-icon-wrap">
                <Icon className="fs-card-icon" strokeWidth={1.5} />
              </div>
              <p className="fs-card-number">
                {service.number} — {service.category}
              </p>
              <h3 className="fs-card-title">{service.title}</h3>
              <p className="fs-card-desc">{service.description}</p>
              <div className="fs-card-tags">
                {service.tags.map((tag) => (
                  <span key={tag} className="fs-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="fs-node-cell">
            <div className="fs-node">
              <div className="fs-node-dot" />
            </div>
          </div>
          <div className="fs-empty-cell" />
        </>
      ) : (
        <>
          <div className="fs-empty-cell" />
          <div className="fs-node-cell">
            <div className="fs-node">
              <div className="fs-node-dot" />
            </div>
          </div>
          <div className="fs-card-cell fs-card-side">
            <div className="fs-card">
              <div className="fs-accent-bar" />
              <div className="fs-card-arrow-left" />
              <div className="fs-card-icon-wrap">
                <Icon className="fs-card-icon" strokeWidth={1.5} />
              </div>
              <p className="fs-card-number">
                {service.number} — {service.category}
              </p>
              <h3 className="fs-card-title">{service.title}</h3>
              <p className="fs-card-desc">{service.description}</p>
              <div className="fs-card-tags">
                {service.tags.map((tag) => (
                  <span key={tag} className="fs-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

/* ── Particle class ── */
class Particle {
  x = 0; y = 0; vx = 0; vy = 0;
  life = 0; decay = 0; r = 0;
  isRose = false; alive = false;

  spawn(cx: number, y: number) {
    this.x = cx + (Math.random() - 0.5) * 10;
    this.y = y;
    this.vy = -(Math.random() * 2.2 + 0.3);
    this.vx = (Math.random() - 0.5) * 2;
    this.life = 1;
    this.decay = 0.016 + Math.random() * 0.02;
    this.r = 1.2 + Math.random() * 3.5;
    this.isRose = Math.random() > 0.45;
    this.alive = true;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.life -= this.decay;
    this.r *= 0.972;
    this.vx *= 0.94;
    if (this.life <= 0) this.alive = false;
  }

  draw(ctx: CanvasRenderingContext2D) {
    const a = this.life;
    ctx.beginPath();
    ctx.arc(this.x, this.y, Math.max(0.1, this.r), 0, Math.PI * 2);
    ctx.fillStyle = this.isRose
      ? `rgba(209,182,173,${a})`
      : `rgba(138,165,176,${a})`;
    ctx.fill();
  }
}

/* ── Main Component ── */
const FoodServicesTimeline = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const progressRef = useRef(0);
  const targetProgressRef = useRef(0);
  const orbTRef = useRef(0);
  const animRef = useRef<number>(0);
  const { ref: headerRef, inView: headerInView } = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    const pool: Particle[] = [];
    for (let i = 0; i < 80; i++) pool.push(new Particle());
    particlesRef.current = pool;
  }, []);

  const spawnP = useCallback((cx: number, y: number) => {
    const p = particlesRef.current.find(p => !p.alive);
    if (p) p.spawn(cx, y);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const timeline = timelineRef.current;
    if (!canvas || !timeline) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const CW = 120;
    let H = 0;
    const cx = CW / 2;
    let isVisible = false;

    const observer = new IntersectionObserver(
      ([entry]) => { isVisible = entry.isIntersecting; },
      { threshold: 0, rootMargin: "200px" }
    );
    observer.observe(timeline);

    const resize = () => {
      H = timeline.offsetHeight;
      canvas.width = CW;
      canvas.height = H;
    };

    const calcProgress = () => {
      if (!isVisible) return;
      const rect = timeline.getBoundingClientRect();
      const viewH = window.innerHeight;
      const scrolled = Math.max(0, viewH * 0.52 - rect.top);
      targetProgressRef.current = Math.min(1, Math.max(0, scrolled / rect.height));
    };

    const draw = () => {
      if (!ctx || !canvas) return;

      if (!isVisible) {
        animRef.current = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, CW, H);

      progressRef.current += (targetProgressRef.current - progressRef.current) * 0.05;
      const progress = progressRef.current;
      const fY = progress * H;

      ctx.beginPath();
      ctx.moveTo(cx, 0);
      ctx.lineTo(cx, H);
      ctx.strokeStyle = "rgba(106,123,131,0.15)";
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.stroke();

      if (fY < 1) {
        animRef.current = requestAnimationFrame(draw);
        return;
      }

      [{ w: 26, a: 0.07 }, { w: 14, a: 0.12 }].forEach(({ w, a }) => {
        ctx.beginPath();
        ctx.moveTo(cx, 0);
        ctx.lineTo(cx, fY);
        ctx.strokeStyle = `rgba(106,123,131,${a})`;
        ctx.lineWidth = w;
        ctx.stroke();
      });

      ctx.beginPath();
      ctx.moveTo(cx, 0);
      ctx.lineTo(cx, fY);
      ctx.strokeStyle = "rgba(209,182,173,0.08)";
      ctx.lineWidth = 30;
      ctx.stroke();

      const mainGrad = ctx.createLinearGradient(0, 0, 0, fY);
      mainGrad.addColorStop(0, "#4A5960");
      mainGrad.addColorStop(0.4, "#6A7B83");
      mainGrad.addColorStop(0.75, "#9BB0B8");
      mainGrad.addColorStop(1, "#D1B6AD");
      ctx.beginPath();
      ctx.moveTo(cx, 0);
      ctx.lineTo(cx, fY);
      ctx.strokeStyle = mainGrad;
      ctx.lineWidth = 3;
      ctx.shadowColor = "#6A7B83";
      ctx.shadowBlur = 10;
      ctx.stroke();
      ctx.shadowBlur = 0;

      const t = Date.now() * 0.0014;
      const shY = (Math.sin(t) * 0.5 + 0.5) * fY;
      const shG = ctx.createLinearGradient(0, shY - 90, 0, shY + 90);
      shG.addColorStop(0, "rgba(255,255,255,0)");
      shG.addColorStop(0.5, "rgba(255,255,255,0.28)");
      shG.addColorStop(1, "rgba(255,255,255,0)");
      ctx.beginPath();
      ctx.moveTo(cx, Math.max(0, shY - 90));
      ctx.lineTo(cx, Math.min(fY, shY + 90));
      ctx.strokeStyle = shG;
      ctx.lineWidth = 5;
      ctx.stroke();

      orbTRef.current += 0.04;
      const wobble = Math.sin(orbTRef.current * 1.5) * 4;
      const ox = cx + wobble;
      const oy = fY;
      const OR = 18;

      if (progress > 0.004 && progress < 0.997) {
        if (Math.random() > 0.4) spawnP(cx, oy);
        if (Math.random() > 0.8) spawnP(cx, oy);
      }

      [
        { r: 44, ca: "rgba(106,123,131,", a: 0.035 },
        { r: 30, ca: "rgba(106,123,131,", a: 0.08 },
        { r: 22, ca: "rgba(209,182,173,", a: 0.14 },
      ].forEach(({ r, ca, a }) => {
        const halo = ctx.createRadialGradient(ox, oy, 0, ox, oy, r);
        halo.addColorStop(0, ca + (a * 3) + ")");
        halo.addColorStop(1, ca + "0)");
        ctx.beginPath();
        ctx.arc(ox, oy, r, 0, Math.PI * 2);
        ctx.fillStyle = halo;
        ctx.fill();
      });

      ctx.save();
      ctx.translate(ox, oy);

      ctx.beginPath();
      ctx.arc(0, 0, OR, 0, Math.PI * 2);
      ctx.clip();

      ctx.fillStyle = "#ffffff";
      ctx.fillRect(-OR, -OR, OR * 2, OR * 2);

      ctx.beginPath();
      ctx.moveTo(0, -OR);
      ctx.bezierCurveTo(-OR * 0.8, -OR * 0.8, -OR * 1.1, -OR * 0.2, -OR * 0.9, OR * 0.1);
      ctx.bezierCurveTo(-OR * 0.65, OR * 0.6, -OR * 0.1, OR * 0.9, 0, OR);
      ctx.bezierCurveTo(-OR * 0.15, OR * 0.55, -OR * 0.35, OR * 0.1, -OR * 0.25, -OR * 0.4);
      ctx.bezierCurveTo(-OR * 0.12, -OR * 0.75, 0, -OR * 0.9, 0, -OR);
      ctx.closePath();
      ctx.fillStyle = "#6A7B83";
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(0, OR);
      ctx.bezierCurveTo(OR * 0.8, OR * 0.8, OR * 1.1, OR * 0.2, OR * 0.9, -OR * 0.1);
      ctx.bezierCurveTo(OR * 0.65, -OR * 0.6, OR * 0.1, -OR * 0.9, 0, -OR);
      ctx.bezierCurveTo(OR * 0.15, -OR * 0.55, OR * 0.35, -OR * 0.1, OR * 0.25, OR * 0.4);
      ctx.bezierCurveTo(OR * 0.12, OR * 0.75, 0, OR * 0.9, 0, OR);
      ctx.closePath();
      ctx.fillStyle = "#D1B6AD";
      ctx.fill();

      ctx.beginPath();
      ctx.arc(0, 0, OR - 0.5, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(106,123,131,0.4)";
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.restore();

      ctx.shadowColor = "#ffffff";
      ctx.shadowBlur = 22;
      ctx.beginPath();
      ctx.arc(ox, oy, OR, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(255,255,255,0.5)";
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.shadowBlur = 0;

      particlesRef.current.forEach(p => {
        if (!p.alive) return;
        p.update();
        p.draw(ctx);
      });

      ctx.setLineDash([3, 9]);
      ctx.beginPath();
      ctx.moveTo(cx, fY + 3);
      ctx.lineTo(cx, H);
      ctx.strokeStyle = "rgba(106,123,131,0.2)";
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.setLineDash([]);

      animRef.current = requestAnimationFrame(draw);
    };

    resize();
    calcProgress();
    draw();

    const onResize = () => { resize(); calcProgress(); };
    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("scroll", calcProgress, { passive: true });

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", calcProgress);
      cancelAnimationFrame(animRef.current);
      observer.disconnect();
    };
  }, [spawnP]);

  return (
    <section ref={sectionRef} className="fs-timeline-section">
      <div className="fs-noise-overlay" />

      <div className="fs-timeline-container">
        <div ref={headerRef} className="fs-section-header">
          <p
            className="fs-eyebrow"
            style={{
              opacity: headerInView ? 1 : 0,
              transform: headerInView ? "translateY(0)" : "translateY(12px)",
              transition: "all 0.7s ease",
            }}
          >
            Nossos Serviços de Consultoria Alimentar
          </p>
          <h2
            className="fs-section-title"
            style={{
              opacity: headerInView ? 1 : 0,
              transform: headerInView ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s ease 0.1s",
            }}
          >
            Consultoria para Restaurantes,
            <br />
            <span>Cozinhas Industriais e Indústrias</span>
          </h2>
        </div>

        <div ref={timelineRef} className="fs-timeline">
          <canvas ref={canvasRef} className="fs-line-canvas" />

          {services.map((service, index) => (
            <TimelineCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodServicesTimeline;
