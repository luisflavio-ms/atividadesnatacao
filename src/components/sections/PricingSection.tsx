import { Check, ShoppingCart, Gift } from "lucide-react";

const PricingSection = () => {
  return (
    <section id="planos" className="py-16 md:py-24 bg-background scroll-mt-20">
      <div className="container px-4">
        <div className="max-w-lg mx-auto">
          <div className="relative pt-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1.5 rounded-full bg-gradient-to-r from-primary to-secondary"></div>

            <div className="h-full bg-card rounded-3xl p-8 shadow-[0_4px_25px_rgb(0,0,0,0.08)] flex flex-col items-center text-center border border-border">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6 tracking-wide mt-2">
                300 Atividades de Natação
              </h3>

              <span className="font-body text-muted-foreground font-medium line-through text-[17px] mb-1">R$97</span>
              <span className="font-display text-5xl md:text-6xl font-bold text-primary mb-2 tracking-tight">
                R$10,00
              </span>
              <span className="font-body text-muted-foreground text-[15px] mb-1">pagamento único</span>
              <span className="font-body text-primary font-bold text-[15px] mb-10">Você economiza R$87,00</span>

              <ul className="space-y-5 mb-10 w-full text-left">
                {[
                  "300 Atividades de Natação em PDF",
                  "Organizadas por idade, nível e objetivo",
                  "Acesso digital imediato",
                  "BÔNUS: Guia de Jogos Aquáticos",
                  "BÔNUS: Planilha de Periodização",
                  "BÔNUS: Checklist de Segurança",
                  "Garantia de 7 dias",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-4 font-body text-[16px] text-foreground">
                    {text.startsWith("BÔNUS") ? (
                      <Gift className="text-primary flex-shrink-0 mt-0.5" size={20} />
                    ) : (
                      <Check className="text-primary flex-shrink-0 mt-0.5 stroke-[3]" size={20} />
                    )}
                    <span className={text.startsWith("BÔNUS") ? "font-semibold text-primary" : ""}>{text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto w-full pt-2">
                <a href="https://pay.wiapy.com/RWaVaArGQ7" className="block w-full">
                  <button className="w-full py-5 bg-gradient-cta hover:brightness-110 active:scale-[0.98] text-primary-foreground font-body font-extrabold text-xl rounded-full shadow-[0_10px_30px_hsl(205_85%_45%/0.4)] transition-all flex items-center justify-center gap-2 animate-pulse-soft">
                    <ShoppingCart size={24} className="stroke-[2.5]" />
                    COMPRAR AGORA
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
