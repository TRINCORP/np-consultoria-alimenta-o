import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useInView } from "react-intersection-observer";

const faqs = [
  {
    question: "Que serviços oferece a NP Consultoria?",
    answer: "Oferecemos consultoria nutricional completa, incluindo rotulagem de alimentos, auditorias de segurança alimentar, planos nutricionais personalizados, formação de equipas e consultoria para serviços de alimentação empresarial."
  },
  {
    question: "Como funciona o processo de rotulagem nutricional?",
    answer: "Analisamos a composição dos seus produtos, criamos tabelas nutricionais conformes com a legislação portuguesa e europeia, e garantimos que toda a informação está precisa e em conformidade regulamentar."
  },
  {
    question: "Quanto tempo demora um projeto de consultoria?",
    answer: "O tempo varia conforme a complexidade do projeto. Projetos simples de rotulagem podem levar 1-2 semanas, enquanto consultorias completas de serviços alimentares podem durar 2-3 meses."
  },
  {
    question: "A NP trabalha com que tipo de empresas?",
    answer: "Trabalhamos com restaurantes, cafeterias, indústrias alimentares, startups de alimentos, padarias, pastelarias e qualquer negócio relacionado com alimentação e nutrição."
  },
  {
    question: "Como posso solicitar um orçamento?",
    answer: "Entre em contacto connosco através do formulário no site, email ou telefone. Faremos uma avaliação inicial gratuita e enviaremos uma proposta personalizada em até 48 horas."
  },
  {
    question: "A consultoria é presencial ou online?",
    answer: "Oferecemos ambos os formatos. Podemos realizar consultorias presenciais em toda Portugal e também disponibilizamos serviços online para maior flexibilidade."
  },
  {
    question: "Que formações oferecem para equipas?",
    answer: "Oferecemos formações em segurança alimentar (HACCP), manipulação de alimentos, gestão de alergénios, boas práticas de higiene e nutrição aplicada ao serviço de alimentação."
  },
  {
    question: "Garantem conformidade com as legislações?",
    answer: "Sim, garantimos 100% de conformidade com todas as legislações nacionais e europeias aplicáveis. Mantemo-nos atualizados com todas as mudanças regulamentares."
  }
];

const FAQSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-muted via-background to-muted relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <span className="inline-block">Perguntas</span>{" "}
              <span className="text-shimmer inline-block">Frequentes</span>
            </h2>
            <p 
              className={`text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-200 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Encontre respostas para as questões mais comuns sobre os nossos serviços de consultoria alimentar e nutricional.
            </p>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl px-4 sm:px-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-primary/30"
                >
                  <AccordionTrigger className="text-left text-sm sm:text-base lg:text-lg font-semibold text-foreground hover:text-primary transition-colors py-4 sm:py-5 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed pb-4 sm:pb-5 pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className={`mt-12 text-center transition-all duration-1000 delay-500 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <p className="text-muted-foreground mb-4 text-sm sm:text-base">
              Não encontrou a resposta que procurava?
            </p>
            <button className="bg-primary text-primary-foreground px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm sm:text-base">
              Entre em Contacto
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
