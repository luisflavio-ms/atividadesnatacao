import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Como acesso o material?", a: "Após a compra, você recebe acesso imediato ao conteúdo digital. Um link será enviado para seu e-mail com instruções para baixar os PDFs." },
  { q: "Serve para todas as idades?", a: "Sim! As atividades são organizadas por faixa etária — crianças, jovens e adultos. Você encontra opções para todos os níveis." },
  { q: "Posso usar na minha escola de natação?", a: "Com certeza! O material foi criado pensando em professores e donos de escolas. Você pode imprimir e usar livremente em suas aulas." },
  { q: "Preciso de experiência como professor?", a: "Não necessariamente. As atividades vêm com instruções claras e detalhadas. Porém, se você já ensina natação, o aproveitamento será ainda maior." },
  { q: "Como funciona a garantia?", a: "Você tem 7 dias para avaliar o material. Se não gostar, basta nos enviar uma mensagem e devolvemos 100% do valor pago, sem perguntas." },
  { q: "E se eu não gostar do material?", a: "Sem problema! Você tem 7 dias de garantia incondicional. Basta solicitar o reembolso e devolvemos todo o seu dinheiro. Nós trocamos — o risco é zero." },
];

const FAQSection = () => (
  <section className="py-16 md:py-24 bg-card">
    <div className="container">
      <h2 className="font-display text-2xl md:text-4xl font-bold text-center text-foreground mb-12">
        Perguntas <span className="text-primary">Frequentes</span>
      </h2>
      <div className="max-w-2xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-background border border-border rounded-xl px-5 overflow-hidden shadow-sm hover:shadow-md hover:border-primary/40 transition-all"
            >
              <AccordionTrigger className="font-body font-semibold text-foreground text-sm md:text-base text-left py-5 hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQSection;
