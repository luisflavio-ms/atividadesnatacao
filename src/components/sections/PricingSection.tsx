import { useState } from "react";
import { Check, ShoppingCart, Gift, Star, Crown } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const PricingSection = () => {
  const [showPromoModal, setShowPromoModal] = useState(false);

  const handleNormalClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowPromoModal(true);
  };

  const getUrl = (url: string) => {
    try {
      const params = new URLSearchParams(window.location.search);
      const utms = {
        utm_source: params.get("utm_source"),
        utm_medium: params.get("utm_medium"),
        utm_campaign: params.get("utm_campaign"),
        utm_content: params.get("utm_content"),
        utm_term: params.get("utm_term"),
      };
      const checkoutUrl = new URL(url);
      Object.entries(utms).forEach(([key, value]) => {
        if (value) checkoutUrl.searchParams.append(key, value);
      });
      return checkoutUrl.toString();
    } catch (error) {
      return url;
    }
  };

  return (
    <section id="planos" className="py-16 md:py-24 bg-background scroll-mt-20">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto items-start">
          {/* Plano Básico */}
          <div className="bg-card rounded-2xl border border-border shadow-sm p-6 md:p-8 flex flex-col items-center text-center">
            <h3 className="font-display text-xl md:text-2xl font-extrabold text-foreground uppercase tracking-wide mb-1">
              Plano Básico
            </h3>

            <span className="font-body text-muted-foreground line-through text-sm">De R$97</span>
            <div className="flex items-baseline gap-0.5 mb-1">
              <span className="font-body text-muted-foreground text-lg">R$</span>
              <span className="font-display text-5xl font-extrabold text-foreground">10</span>
              <span className="font-body text-muted-foreground text-lg">,00</span>
            </div>
            <span className="font-body text-muted-foreground text-xs uppercase tracking-wider mb-8">
              Pagamento único
            </span>

            <ul className="space-y-3 mb-8 w-full text-left">
              {[
                "300 Atividades de Natação",
                "Organizadas por idade, nível e objetivo",
                "Acesso digital imediato",
                "Entrega imediata",
                "Suporte 24h",
                "Garantia de 7 dias",
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3 font-body text-[14px] text-foreground">
                  <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
                    <Check className="text-white stroke-[3]" size={12} />
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto w-full">
              <button
                onClick={handleNormalClick}
                className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 active:scale-[0.98] text-white font-body font-extrabold text-base uppercase rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
              >
                <ShoppingCart size={20} />
                COMPRAR AGORA
              </button>
            </div>
          </div>

          {/* Plano Completo / Premium */}
          <div className="relative flex flex-col">
            {/* Badge MAIS ESCOLHIDO */}
            <div className="flex justify-center mb-0">
              <span className="relative -mb-3 z-10 bg-swim-orange text-foreground font-body font-extrabold text-xs px-5 py-1.5 rounded-full shadow-md flex items-center gap-1.5 uppercase tracking-wide">
                <Star size={14} className="fill-current" />
                MAIS ESCOLHIDO
              </span>
            </div>

            <div className="bg-card rounded-2xl border-2 border-primary p-6 md:p-8 flex flex-col items-center text-center shadow-[0_8px_40px_hsl(205_85%_45%/0.2)]">
              <h3 className="font-display text-xl md:text-2xl font-extrabold text-foreground uppercase tracking-wide mb-1 mt-2">
                Plano Completo
              </h3>
              <p className="font-body text-muted-foreground text-sm mb-6">Para transformar suas aulas o ano todo</p>

              <span className="font-body text-muted-foreground line-through text-sm">De R$197</span>
              <div className="flex items-baseline gap-0.5 mb-1">
                <span className="font-body text-muted-foreground text-lg">R$</span>
                <span className="font-display text-5xl md:text-6xl font-extrabold text-foreground">27</span>
                <span className="font-body text-muted-foreground text-lg">,90</span>
              </div>
              <span className="font-body text-muted-foreground text-xs uppercase tracking-wider mb-8">
                Pagamento único
              </span>

              {/* Features list */}
              <ul className="space-y-3 mb-6 w-full text-left">
                {[
                  "300 Atividades de Natação",
                  "Organizadas por idade, nível e objetivo",
                  "Acesso digital imediato",
                  "Entrega imediata",
                  "Suporte 24h",
                  "Garantia de 7 dias",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3 font-body text-[14px] text-foreground">
                    <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
                      <Check className="text-white stroke-[3]" size={12} />
                    </span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>

              {/* Bônus section */}
              <div className="w-full bg-accent/50 border border-primary/20 rounded-xl p-5 text-left mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Gift size={18} className="text-swim-orange" />
                  <span className="font-body font-extrabold text-foreground text-sm">
                    Mais de R$110 reais de bônus GRÁTIS:
                  </span>
                </div>
                <ul className="space-y-2">
                  {["Guia de Jogos Aquáticos", "Planilha de Periodização", "+500 Brincadeiras Aquáticas"].map(
                    (text, i) => (
                      <li key={i} className="flex items-start gap-2 font-body text-[13px] text-foreground/80">
                        <span className="text-swim-orange mt-px">•</span>
                        <span>{text}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>

              {/* CTA Button */}
              <a href={getUrl("https://pay.wiapy.com/y9A5jHIgSW")} className="block w-full mt-auto">
                <button className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 active:scale-[0.98] text-white font-body font-extrabold text-lg uppercase rounded-xl shadow-md transition-all flex items-center justify-center gap-2 animate-pulse-soft">
                  <ShoppingCart size={22} />
                  COMPRAR AGORA
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Promocional */}
      <Dialog open={showPromoModal} onOpenChange={setShowPromoModal}>
        <DialogContent className="max-w-md rounded-2xl p-0 overflow-hidden">
          <div className="bg-gradient-to-br from-primary to-swim-deep p-6 text-center">
            <DialogHeader>
              <DialogTitle className="text-primary-foreground font-display text-2xl font-bold">
                🎉 Espere! Oferta Especial
              </DialogTitle>
              <DialogDescription className="text-primary-foreground/80 text-base mt-2">
                Que tal levar o pacote com todos os bônus por um preço especial?
              </DialogDescription>
            </DialogHeader>
          </div>

          <div className="p-6 space-y-4">
            <div className="bg-accent/50 rounded-xl p-4 border-2 border-primary">
              <p className="font-display font-bold text-lg text-foreground mb-1">Pacote Promocional</p>
              <p className="text-muted-foreground text-sm mb-2">300 Atividades + Todos os Bônus</p>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-muted-foreground line-through text-sm">R$27,90</span>
                <span className="font-display text-3xl font-bold text-primary">R$17,90</span>
              </div>
              <a href={getUrl("https://pay.wiapy.com/isE8Yjmic")} className="block">
                <button className="w-full py-3 bg-gradient-cta text-primary-foreground font-body font-bold text-base rounded-full shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2">
                  <Gift size={18} />
                  QUERO ESTA OFERTA
                </button>
              </a>
            </div>

            <a
              href={getUrl("https://pay.wiapy.com/RWaVaArGQ7")}
              className="block text-center text-muted-foreground text-sm underline hover:text-foreground transition-colors"
            >
              Não, quero continuar com o pacote de R$10,00
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PricingSection;
