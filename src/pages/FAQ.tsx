import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useInView } from "react-intersection-observer";
import { MessageCircleQuestion, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  {
    category: "Serviços",
    questions: [
      {
        question: "Que serviços oferece a NP Consultoria?",
        answer: "Oferecemos consultoria nutricional completa, incluindo rotulagem de alimentos, auditorias de segurança alimentar, planos nutricionais personalizados, formação de equipas e consultoria para serviços de alimentação empresarial."
      },
      {
        question: "A NP trabalha com que tipo de empresas?",
        answer: "Trabalhamos com restaurantes, cafeterias, indústrias alimentares, startups de alimentos, padarias, pastelarias e qualquer negócio relacionado com alimentação e nutrição."
      },
      {
        question: "A consultoria é presencial ou online?",
        answer: "Oferecemos ambos os formatos. Podemos realizar consultorias presenciais em toda Portugal e também disponibilizamos serviços online para maior flexibilidade."
      }
    ]
  },
  {
    category: "Rotulagem",
    questions: [
      {
        question: "Como funciona o processo de rotulagem nutricional?",
        answer: "Analisamos a composição dos seus produtos, criamos tabelas nutricionais conformes com a legislação portuguesa e europeia, e garantimos que toda a informação está precisa e em conformidade regulamentar."
      },
      {
        question: "Garantem conformidade com as legislações?",
        answer: "Sim, garantimos 100% de conformidade com todas as legislações nacionais e europeias aplicáveis. Mantemo-nos atualizados com todas as mudanças regulamentares."
      }
    ]
  },
  {
    category: "Processos",
    questions: [
      {
        question: "Quanto tempo demora um projeto de consultoria?",
        answer: "O tempo varia conforme a complexidade do projeto. Projetos simples de rotulagem podem levar 1-2 semanas, enquanto consultorias completas de serviços alimentares podem durar 2-3 meses."
      },
      {
        question: "Como posso solicitar um orçamento?",
        answer: "Entre em contacto connosco através do formulário no site, email ou telefone. Faremos uma avaliação inicial gratuita e enviaremos uma proposta personalizada em até 48 horas."
      },
      {
        question: "Que formações oferecem para equipas?",
        answer: "Oferecemos formações em segurança alimentar (HACCP), manipulação de alimentos, gestão de alergénios, boas práticas de higiene e nutrição aplicada ao serviço de alimentação."
      }
    ]
  }
];

const FAQ = () => {
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <>
      <SEO 
        title="Perguntas Frequentes | NP Consultoria"
        description="Encontre respostas para as questões mais comuns sobre os nossos serviços de consultoria alimentar e nutricional."
        keywords="FAQ, perguntas frequentes, consultoria alimentar, rotulagem nutricional, dúvidas"
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="relative pt-32 pb-20 overflow-hidden"
        >
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float animation-delay-1000" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className={`text-center max-w-3xl mx-auto transition-all duration-1000 ${
              heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6">
                <MessageCircleQuestion className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Centro de Ajuda</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Perguntas{" "}
                <span className="text-gradient silver-shine-text">Frequentes</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Encontre respostas para as questões mais comuns sobre os nossos serviços 
                de consultoria alimentar e nutricional.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 max-w-4xl">
            {faqs.map((category, categoryIndex) => {
              const { ref, inView } = useInView({
                threshold: 0.1,
                triggerOnce: true,
              });
              
              return (
                <div 
                  key={categoryIndex}
                  ref={ref}
                  className={`mb-12 transition-all duration-700 ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${categoryIndex * 150}ms` }}
                >
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className="w-8 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
                    {category.category}
                  </h2>
                  
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((faq, index) => (
                      <AccordionItem 
                        key={index} 
                        value={`${categoryIndex}-${index}`}
                        className="card-premium bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden"
                      >
                        <AccordionTrigger className="text-left text-base lg:text-lg font-semibold text-foreground hover:text-primary transition-colors py-5 px-6 hover:no-underline">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-5 px-6 pt-0">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              );
            })}

            {/* Contact CTA */}
            <div className="mt-16 text-center">
              <div className="card-premium bg-gradient-to-br from-primary/10 via-card to-accent/10 border border-primary/20 rounded-3xl p-10">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Não encontrou a resposta que procurava?
                </h3>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  A nossa equipa está pronta para esclarecer todas as suas dúvidas de forma personalizada.
                </p>
                <Link 
                  to="/#contacto"
                  className="inline-flex items-center gap-2 btn-hero group"
                >
                  Entre em Contacto
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default FAQ;
