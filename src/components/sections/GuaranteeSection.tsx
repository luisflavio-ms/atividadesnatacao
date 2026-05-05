import { ShieldCheck } from "lucide-react";

const GuaranteeSection = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container">
      <div className="max-w-2xl mx-auto text-center scroll-fade">
        <div className="bg-card border-2 border-secondary/40 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-2xl" />
          <div className="relative w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg shadow-secondary/30">
            <ShieldCheck className="text-white" size={40} />
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3 relative">
            Garantia Incondicional de 7 Dias
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed max-w-lg mx-auto relative">
            Se por qualquer motivo você não gostar do material, basta nos enviar uma mensagem em até 7 dias
            e devolvemos <span className="font-bold text-foreground">100% do seu dinheiro</span>.
            Sem perguntas, sem burocracia. Nós trocamos — o risco é todo nosso.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default GuaranteeSection;
