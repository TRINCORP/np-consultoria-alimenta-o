import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useInView } from "react-intersection-observer";

const faqGroups = [
  {
    title: "Vigilância Sanitária e Restaurantes",
    faqs: [
      {
        question: "Como regularizar um restaurante na vigilância sanitária?",
        answer: "Para regularizar um restaurante, é necessário realizar um diagnóstico das condições sanitárias, elaborar o Manual de Boas Práticas e os POPs, adequar instalações e processos, e solicitar a vistoria para obtenção do alvará sanitário. A NP Consultoria acompanha todo esse processo, desde o diagnóstico inicial até a aprovação final.",
      },
      {
        question: "O que a vigilância sanitária exige em um restaurante?",
        answer: "A vigilância sanitária exige documentação atualizada (Manual de Boas Práticas, POPs, alvará sanitário), controle de temperaturas, higienização adequada, controle de pragas, treinamento de manipuladores e rastreabilidade dos alimentos. A NP Consultoria ajuda a implementar cada um desses requisitos de forma prática.",
      },
      {
        question: "Como passar na vistoria da vigilância sanitária?",
        answer: "Para passar na vistoria, é essencial ter toda a documentação em dia, instalações adequadas, processos padronizados e equipe treinada. A NP Consultoria prepara seu estabelecimento com diagnóstico prévio, correção de não conformidades e simulação de vistoria.",
      },
      {
        question: "Quais documentos são obrigatórios para restaurantes na vigilância sanitária?",
        answer: "Os documentos obrigatórios incluem o Manual de Boas Práticas (MBP), Procedimentos Operacionais Padrão (POPs), alvará sanitário, certificados de treinamento de manipuladores, controle de pragas e planilhas de controle de temperatura. A NP elabora toda essa documentação personalizada.",
      },
      {
        question: "O que é adequação sanitária e por que meu restaurante precisa?",
        answer: "Adequação sanitária é o processo de ajustar seu estabelecimento às normas da ANVISA e da vigilância sanitária local. Sem ela, seu restaurante pode receber multas, interdições e até ser fechado. Mais do que evitar penalidades, a adequação garante segurança para seus clientes e credibilidade para sua marca.",
      },
      {
        question: "Quanto tempo leva para regularizar um restaurante na vigilância sanitária?",
        answer: "O tempo varia conforme a situação do estabelecimento. Casos simples podem ser resolvidos em 2 a 4 semanas, enquanto adequações mais complexas podem levar de 1 a 3 meses. A NP Consultoria define um cronograma realista e acompanha cada etapa para agilizar o processo.",
      },
    ],
  },
  {
    title: "Manual de Boas Práticas",
    faqs: [
      {
        question: "O que é o Manual de Boas Práticas e quem precisa ter?",
        answer: "O Manual de Boas Práticas (MBP) é um documento obrigatório para qualquer estabelecimento que manipula alimentos, como restaurantes, lanchonetes, padarias, cozinhas industriais e fábricas. Ele descreve as rotinas de higiene, manipulação, armazenamento e controle de qualidade do local.",
      },
      {
        question: "Como fazer um Manual de Boas Práticas para restaurante?",
        answer: "O Manual deve ser elaborado com base na realidade operacional do seu restaurante, considerando layout, equipe, cardápio e processos. Não é um documento genérico. A NP Consultoria realiza uma visita técnica e elabora um manual personalizado, conforme as exigências da vigilância sanitária.",
      },
      {
        question: "Qual empresa faz o Manual de Boas Práticas?",
        answer: "Empresas de consultoria em segurança alimentar, como a NP Consultoria, são especializadas na elaboração do MBP. Nós realizamos o diagnóstico presencial, elaboramos o documento personalizado e treinamos a equipe sobre os procedimentos descritos. Atendemos em Indaiatuba e região.",
      },
      {
        question: "O que é POP (Procedimento Operacional Padrão) para alimentos?",
        answer: "O POP é um documento que descreve passo a passo como realizar cada atividade de manipulação de alimentos, incluindo higienização de equipamentos, controle de temperatura e recebimento de mercadorias. É obrigatório pela ANVISA e complementa o Manual de Boas Práticas.",
      },
      {
        question: "O Manual de Boas Práticas precisa ser atualizado? Com que frequência?",
        answer: "Sim, o MBP deve ser atualizado sempre que houver mudanças na operação — novo cardápio, reforma, troca de equipe ou alteração na legislação. Recomenda-se uma revisão anual. A NP Consultoria oferece acompanhamento contínuo para manter sua documentação sempre em dia.",
      },
    ],
  },
  {
    title: "Rotulagem e Produtos Alimentícios",
    faqs: [
      {
        question: "O que preciso para vender alimento em mercado ou supermercado?",
        answer: "Para vender em mercado, seu produto precisa de rótulo conforme a legislação da ANVISA (com tabela nutricional, lista de ingredientes, informações de alergênicos e validade), além de registro ou notificação no órgão competente. A NP Rotulagem cuida de toda a adequação do seu rótulo.",
      },
      {
        question: "Como registrar um produto alimentício na ANVISA?",
        answer: "Nem todos os produtos precisam de registro na ANVISA — muitos são dispensados de registro e precisam apenas de notificação. A NP Consultoria analisa seu produto e orienta sobre o caminho correto, preparando toda a documentação necessária.",
      },
      {
        question: "Quais são as exigências da ANVISA para alimentos artesanais?",
        answer: "Alimentos artesanais precisam de rotulagem nutricional, lista de ingredientes, declaração de alergênicos, informações de validade e condições de conservação. A legislação também exige boas práticas de fabricação. A NP Consultoria orienta produtores artesanais em todo o processo de regularização.",
      },
      {
        question: "Preciso de tabela nutricional para vender meu produto?",
        answer: "Sim, a tabela nutricional é obrigatória para a maioria dos alimentos embalados vendidos no Brasil. A NP Rotulagem elabora tabelas nutricionais precisas, conforme as normas vigentes da ANVISA, para todos os tipos de produto — artesanais, industriais ou de pequena escala.",
      },
    ],
  },
];

const FAQSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-muted via-background to-muted relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-10" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <span className="inline-block">Perguntas</span>{" "}
              <span className="text-gradient silver-shine-text drop-shadow-glow inline-block">Frequentes</span>
            </h2>
            <p 
              className={`text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-200 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Tire suas dúvidas sobre vigilância sanitária, manual de boas práticas, rotulagem nutricional e regularização de estabelecimentos alimentícios.
            </p>
          </div>

          {faqGroups.map((group, groupIndex) => (
            <div 
              key={groupIndex}
              className={`mb-10 transition-all duration-1000 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${300 + groupIndex * 200}ms` }}
            >
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                  {groupIndex + 1}
                </span>
                {group.title}
              </h3>
              
              <Accordion type="single" collapsible className="space-y-3">
                {group.faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`group-${groupIndex}-item-${index}`}
                    className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl px-1"
                  >
                    <AccordionTrigger className="text-left text-sm sm:text-base font-semibold text-foreground hover:text-primary transition-colors py-4 sm:py-5 hover:no-underline px-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4 sm:pb-5 px-4 pt-1">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}

          <div className={`mt-12 text-center transition-all duration-1000 delay-500 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <p className="text-muted-foreground mb-4 text-sm sm:text-base">
              Não encontrou sua dúvida? Fale com a gente!
            </p>
            <button className="btn-hero">
              Falar com um Especialista
            </button>
          </div>
        </div>
      </div>

      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqGroups.flatMap(g => g.faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
              },
            }))),
          }),
        }}
      />
    </section>
  );
};

export default FAQSection;
