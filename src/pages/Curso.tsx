import { useInView } from "react-intersection-observer";
import { ArrowRight, CheckCircle2, BookOpen, Users, Star, TrendingUp, FileText, ClipboardList, DollarSign, Calendar, Target, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const WHATSAPP = "5519989750741";
const WA_CURSO = encodeURIComponent("Olá! Tenho interesse no Curso de Formação para Consultoras em Serviços de Alimentação. Pode me passar mais informações?");

const aprendizados = [
  { icon: BookOpen,    text: "Como iniciar na consultoria mesmo sem experiência prévia" },
  { icon: FileText,    text: "Leitura prática e aplicação da legislação sanitária" },
  { icon: ClipboardList,text: "Elaboração de POPs, Manual de BPF e documentos obrigatórios" },
  { icon: Target,      text: "Como realizar visitas técnicas com olhar de vigilância sanitária" },
  { icon: CheckCircle2,text: "Identificação e registro de não conformidades" },
  { icon: FileText,    text: "Como elaborar relatórios profissionais com plano de ação" },
  { icon: Users,       text: "Como conduzir treinamentos que realmente engajam a equipe" },
  { icon: Calendar,    text: "Organização da rotina da consultora e gestão de vários clientes" },
  { icon: DollarSign,  text: "Como precificar seu serviço e fechar contratos" },
  { icon: Award,       text: "Modelos prontos de documentos para usar na prática" },
];

const paraQuem = [
  "Nutricionistas",
  "Técnicos em Nutrição",
  "Estudantes da área de alimentos",
  "Profissionais que desejam iniciar na consultoria sanitária",
  "Consultoras que desejam se atualizar e padronizar seu método de trabalho",
];

const resultados = [
  { icon: CheckCircle2, text: "Atender serviços de alimentação com segurança" },
  { icon: FileText,     text: "Montar toda a documentação sanitária" },
  { icon: Target,       text: "Realizar visitas técnicas completas" },
  { icon: Users,        text: "Conduzir treinamentos eficazes" },
  { icon: Calendar,     text: "Organizar sua rotina como consultora" },
  { icon: TrendingUp,   text: "Transformar conhecimento técnico em fonte de renda" },
];

const Curso = () => {
  const { ref: heroRef,   inView: heroInView   } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: learnRef,  inView: learnInView  } = useInView({ threshold: 0.05, triggerOnce: true });
  const { ref: whoRef,    inView: whoInView    } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: resultRef, inView: resultInView } = useInView({ threshold: 0.05, triggerOnce: true });
  const { ref: ctaRef,    inView: ctaInView    } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <>
      <SEO
        title="Curso de Formação para Consultoras em Serviços de Alimentação | NP Consultoria"
        description="Curso prático para nutricionistas e técnicas em nutrição que desejam atuar com consultoria em serviços de alimentação. Aprenda legislação sanitária, elaboração de POPs, visitas técnicas, relatórios e como precificar seus serviços. NP Consultoria — Indaiatuba e região de Campinas."
        keywords="curso consultora alimentação, formação consultora nutricionista, curso vigilância sanitária, curso boas práticas fabricação, como ser consultora alimentar, NP Consultoria curso, formação consultoria sanitária"
      />
      <div className="min-h-screen bg-background">
        <Header />

        {/* ── HERO ── */}
        <section
          ref={heroRef}
          className="relative min-h-screen flex flex-col justify-center bg-[#1C1A18] overflow-hidden pt-20"
        >
          {/* Ambient glows */}
          <div className="absolute -top-40 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, hsl(20 45% 55% / 0.12), transparent 70%)" }} />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, hsl(20 35% 50% / 0.08), transparent 70%)" }} />

          <div className="relative z-10 max-w-[1100px] mx-auto px-6 sm:px-12 lg:px-16 py-20">
            <div className={`transition-all duration-[900ms] ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.32em] uppercase
                border border-[hsl(20_35%_62%/0.35)] text-[hsl(20_45%_70%)]
                rounded-full px-4 py-2 bg-[hsl(20_35%_62%/0.08)] mb-10 select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-[hsl(20_45%_68%)] animate-pulse" />
                NP Consultoria · Formação Profissional
              </span>
            </div>

            <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">
              {/* Texto */}
              <div>
                <h1
                  className={`font-playfair font-bold text-white leading-[1.05] mb-8
                    transition-all duration-[900ms] delay-100 ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ fontSize: "clamp(2.4rem, 5.5vw, 5rem)" }}
                >
                  Curso de Formação para{" "}
                  <em className="italic text-[hsl(20_45%_70%)]">Consultoras</em>
                  <br />em Serviços de Alimentação
                </h1>

                <p className={`text-white/55 text-base sm:text-lg leading-relaxed max-w-[600px] mb-10
                  transition-all duration-[900ms] delay-200 ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                  Se você é nutricionista, técnica em nutrição ou profissional da área de alimentos
                  e deseja atuar com consultoria, este curso transforma conhecimento técnico em
                  <strong className="text-white"> atuação prática, segura e lucrativa</strong>.
                </p>

                <div className={`flex flex-wrap gap-4 transition-all duration-[900ms] delay-300
                  ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                  <a
                    href={`https://wa.me/${WHATSAPP}?text=${WA_CURSO}`}
                    target="_blank" rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3
                      bg-[hsl(20_35%_62%)] text-white rounded-full
                      px-8 py-4 text-sm font-semibold
                      hover:bg-[hsl(20_35%_55%)]
                      hover:shadow-[0_16px_40px_hsl(20_35%_62%/0.4)]
                      hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Quero me inscrever
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                  <a
                    href={`https://wa.me/${WHATSAPP}?text=${WA_CURSO}`}
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2
                      border border-white/20 text-white/70 rounded-full
                      px-8 py-4 text-sm font-medium
                      hover:border-white/40 hover:text-white transition-all duration-300"
                  >
                    Tirar dúvidas
                  </a>
                </div>
              </div>

              {/* Card destaque */}
              <div className={`hidden lg:flex flex-col gap-4 min-w-[240px]
                transition-all duration-[900ms] delay-400 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
                {[
                  { n: "10",    l: "Módulos práticos" },
                  { n: "100%", l: "Aplicado ao dia a dia" },
                  { n: "NP",   l: "Método comprovado" },
                ].map(({ n, l }) => (
                  <div key={l} className="flex flex-col gap-1 px-6 py-5 rounded-[1.25rem]
                    border border-white/[0.07] bg-white/[0.04]">
                    <span className="font-playfair font-bold text-[hsl(20_45%_72%)] text-3xl leading-none">{n}</span>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-white/35">{l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom accent */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px]"
            style={{ background: "linear-gradient(to right, transparent, hsl(20 35% 62% / 0.4), transparent)" }} />
        </section>

        {/* ── O QUE VOCÊ VAI APRENDER ── */}
        <section ref={learnRef} className="bg-[#FAF9F7] py-20 lg:py-28">
          <div className="max-w-[1100px] mx-auto px-6 sm:px-12 lg:px-16">
            <div className={`mb-14 transition-all duration-700 ${learnInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <span className="block text-[11px] font-semibold tracking-[0.32em] uppercase text-[hsl(20_35%_58%)] mb-4">
                Conteúdo do curso
              </span>
              <h2 className="font-playfair font-bold text-[hsl(210_15%_10%)] leading-[1.08]"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}>
                O que você vai{" "}
                <em className="italic text-[hsl(20_35%_55%)]">aprender</em>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {aprendizados.map(({ icon: Icon, text }, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-4 p-5 rounded-[1.25rem] bg-white
                    border border-[hsl(20_35%_70%/0.15)]
                    hover:border-[hsl(20_35%_70%/0.4)] hover:shadow-[0_8px_28px_hsl(20_35%_60%/0.08)]
                    transition-all duration-500
                    ${learnInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-[hsl(20_35%_70%/0.12)] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4.5 h-4.5 text-[hsl(20_38%_52%)]" strokeWidth={1.6} />
                  </div>
                  <p className="text-[hsl(210_15%_18%)] text-sm leading-relaxed font-medium pt-2">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PARA QUEM É + DIFERENCIAL ── */}
        <section ref={whoRef} className="bg-[#1C1A18] py-20 lg:py-28 overflow-hidden">
          <div className="max-w-[1100px] mx-auto px-6 sm:px-12 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-16">

              {/* Para quem */}
              <div className={`transition-all duration-700 ${whoInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
                <span className="block text-[11px] font-semibold tracking-[0.32em] uppercase text-[hsl(20_45%_65%)] mb-5">
                  Público-alvo
                </span>
                <h2 className="font-playfair font-bold text-white leading-[1.1] mb-10"
                  style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}>
                  Este curso é para{" "}
                  <em className="italic text-[hsl(20_45%_70%)]">você</em>
                </h2>
                <div className="space-y-4">
                  {paraQuem.map((item, i) => (
                    <div key={i} className="flex items-center gap-3"
                      style={{ transitionDelay: `${i * 80}ms` }}>
                      <span className="w-5 h-5 rounded-full bg-[hsl(20_35%_62%/0.2)] border border-[hsl(20_35%_62%/0.4)]
                        flex items-center justify-center flex-shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-[hsl(20_45%_72%)]" />
                      </span>
                      <span className="text-white/75 text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Diferencial */}
              <div className={`transition-all duration-700 delay-200 ${whoInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
                <span className="block text-[11px] font-semibold tracking-[0.32em] uppercase text-[hsl(20_45%_65%)] mb-5">
                  Nosso diferencial
                </span>
                <h2 className="font-playfair font-bold text-white leading-[1.1] mb-8"
                  style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}>
                  Não apenas teoria.{" "}
                  <em className="italic text-[hsl(20_45%_70%)]">Prática real.</em>
                </h2>

                <div className="rounded-[1.5rem] border border-[hsl(20_35%_62%/0.2)] bg-white/[0.04] p-7 mb-6">
                  <p className="text-white/65 text-base leading-relaxed">
                    Aqui você aprende como trabalhar na prática, exatamente como uma consultora
                    atua no dia a dia — com <strong className="text-white">modelos reais,
                    situações reais e soluções reais</strong>.
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-[hsl(20_35%_62%/0.35)] bg-[hsl(20_35%_62%/0.08)] p-7">
                  <p className="font-playfair italic text-[hsl(20_45%_72%)] text-lg leading-snug">
                    "Você sairá pronta para atender clientes com segurança técnica e postura profissional."
                  </p>
                  <span className="mt-3 block text-[11px] font-semibold tracking-[0.2em] uppercase text-[hsl(20_35%_55%)]">
                    — NP Consultoria
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── RESULTADOS ── */}
        <section ref={resultRef} className="bg-[#FAF9F7] py-20 lg:py-28">
          <div className="max-w-[1100px] mx-auto px-6 sm:px-12 lg:px-16">
            <div className={`text-center mb-14 transition-all duration-700 ${resultInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <span className="block text-[11px] font-semibold tracking-[0.32em] uppercase text-[hsl(20_35%_58%)] mb-4">
                Ao final do curso
              </span>
              <h2 className="font-playfair font-bold text-[hsl(210_15%_10%)] leading-[1.08]"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}>
                Resultados que você{" "}
                <em className="italic text-[hsl(20_35%_55%)]">vai alcançar</em>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {resultados.map(({ icon: Icon, text }, i) => (
                <div
                  key={i}
                  className={`group flex items-center gap-4 p-6 rounded-[1.25rem] bg-white
                    border border-[hsl(20_35%_70%/0.15)]
                    hover:border-[hsl(20_35%_70%/0.4)] hover:-translate-y-1
                    hover:shadow-[0_12px_32px_hsl(20_35%_60%/0.1)]
                    transition-all duration-400
                    ${resultInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-[hsl(20_35%_70%/0.12)] flex items-center justify-center flex-shrink-0
                    group-hover:bg-[hsl(20_35%_70%/0.22)] transition-colors duration-300">
                    <Icon className="w-5 h-5 text-[hsl(20_38%_52%)]" strokeWidth={1.6} />
                  </div>
                  <p className="text-[hsl(210_15%_18%)] text-sm font-medium leading-snug">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section ref={ctaRef} className="bg-[#1C1A18] py-20 lg:py-28 overflow-hidden">
          <div className="max-w-[900px] mx-auto px-6 sm:px-12 lg:px-16 text-center">
            <div
              className={`transition-all duration-[1000ms] ${ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <span className="block text-[11px] font-semibold tracking-[0.32em] uppercase text-[hsl(20_45%_65%)] mb-6">
                Comece agora
              </span>
              <h2
                className="font-playfair font-bold text-white leading-[1.08] mb-6"
                style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
              >
                Transforme seu conhecimento
                <br />
                <em className="italic text-[hsl(20_45%_70%)]">em carreira</em>.
              </h2>
              <p className="text-white/45 text-base sm:text-lg leading-relaxed max-w-[560px] mx-auto mb-12">
                A consultoria em serviços de alimentação é uma das áreas que mais cresce dentro
                da nutrição. Este curso é o caminho mais direto para você entrar nesse mercado
                com preparo, confiança e método.
              </p>
              <a
                href={`https://wa.me/${WHATSAPP}?text=${WA_CURSO}`}
                target="_blank" rel="noopener noreferrer"
                className="group inline-flex items-center gap-3
                  bg-[hsl(20_35%_62%)] text-white rounded-full
                  px-10 py-5 text-base font-semibold
                  hover:bg-[hsl(20_35%_55%)]
                  hover:shadow-[0_20px_48px_hsl(20_35%_62%/0.45)]
                  hover:-translate-y-0.5 transition-all duration-300"
              >
                Comece agora sua jornada
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <p className="text-white/25 text-xs mt-6 tracking-wide">
                Entre em contato pelo WhatsApp · NP Consultoria · Indaiatuba e Região
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Curso;
