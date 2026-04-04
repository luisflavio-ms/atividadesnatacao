import { ShieldCheck } from "lucide-react";

const GuaranteeSection = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container">
      <div className="max-w-2xl mx-auto text-center scroll-fade">
        <div className="bg-card border-2 border-secondary/30 rounded-2xl p-8 md:p-10 shadow-sm">
          <div className="w-16 h-16 bg-secondary/15 rounded-full flex items-center justify-center mx-auto mb-5">
            <ShieldCheck className="text-secondary" size={32} />
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
            Garantia Incondicional de 7 Dias
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed max-w-lg mx-auto">
            Se por qualquer motivo você não gostar do material, basta nos enviar uma mensagem em até 7 dias 
            e devolvemos <span className="font-semibold text-foreground">100% do seu dinheiro</span>. 
            Sem perguntas, sem burocracia. O risco é todo nosso.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default GuaranteeSection;