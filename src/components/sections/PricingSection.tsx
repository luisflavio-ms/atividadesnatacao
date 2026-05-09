import { useState } from "react";
import { Check, ShoppingCart, Gift, Star, Crown } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const PricingSection = () => {
  const [showPromoModal, setShowPromoModal] = useState(false);
  const [showSecondPromoModal, setShowSecondPromoModal] = useState(false);

  const handleNormalClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowPromoModal(true);
  };

  const handleDeclineFirstPromo = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowPromoModal(false);
    setShowSecondPromoModal(true);
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

      // window.location.href = checkoutUrl.toString();
      return checkoutUrl.toString();
    } catch (error) {
      return url;
    }
  };

  return (
    <section id="planos" className="py-16 md:py-24 bg-background scroll-mt-20">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {/* Pacote Normal - Less prominent */}
          <div className="relative pt-4 flex">
            <div className="h-full w-full bg-card rounded-2xl p-6 md:p-8 shadow-sm flex flex-col items-center text-center border border-border">
              <h3 className="font-display text-xl font-bold text-foreground mb-5 tracking-wide mt-2">
                300 Atividades de Natação
              </h3>

              <span className="font-body text-muted-foreground font-medium line-through text-sm mb-1">R$97</span>
              <span className="font-display text-4xl font-bold text-foreground mb-2 tracking-tight">R$17,90</span>
              <span className="font-body text-muted-foreground text-sm mb-1">pagamento único</span>
              <span className="font-body text-muted-foreground font-semibold text-sm mb-8">Você economiza R$79,10</span>

              <ul className="space-y-4 mb-8 w-full text-left">
                {[
                  "300 Atividades de Natação",
                  "Organizadas por idade, nível e objetivo",
                  "Acesso digital imediato",
                  "Garantia de 7 dias",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3 font-body text-[15px] text-muted-foreground">
                    <Check className="text-muted-foreground flex-shrink-0 mt-0.5 stroke-[2]" size={18} />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto w-full pt-2">
                <button
                  onClick={handleNormalClick}
                  className="w-full py-4 bg-muted hover:bg-muted/80 active:scale-[0.98] text-foreground font-body font-bold text-base rounded-full border border-border transition-all flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={20} />
                  COMPRAR AGORA
                </button>
              </div>
            </div>
          </div>

          {/* Pacote Premium - Most prominent */}
          <div className="relative pt-4 flex">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
              <span className="bg-swim-orange text-foreground font-body font-bold text-xs px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                <Crown size={14} />
                MAIS VENDIDO
              </span>
            </div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-1.5 rounded-full bg-gradient-to-r from-primary to-swim-aqua"></div>

            <div className="h-full w-full bg-card rounded-2xl p-6 md:p-8 shadow-[0_8px_40px_hsl(205_85%_45%/0.18)] flex flex-col items-center text-center border-2 border-primary ring-2 ring-primary/10">
              <h3 className="font-display text-2xl font-bold text-foreground mb-5 tracking-wide mt-4">
                Pacote Premium Completo
              </h3>

              <span className="font-body text-muted-foreground font-medium line-through text-[17px] mb-1">R$197</span>
              <span className="font-display text-5xl md:text-6xl font-bold text-primary mb-2 tracking-tight">
                R$32,90
              </span>
              <span className="font-body text-muted-foreground text-[15px] mb-1">pagamento único</span>
              <span className="font-body text-primary font-bold text-[15px] mb-8">Você economiza R$164,10</span>

              <ul className="space-y-4 mb-8 w-full text-left">
                {[
                  {
                    text: "300 Atividades de Natação",
                    bonus: false,
                  },
                  {
                    text: "Organizadas por idade, nível e objetivo",
                    bonus: false,
                  },
                  {
                    text: "Acesso digital imediato",
                    bonus: false,
                  },
                  {
                    text: "BÔNUS: Guia de Jogos Aquáticos",
                    bonus: true,
                  },
                  {
                    text: "BÔNUS: Planilha de Periodização",
                    bonus: true,
                  },
                  {
                    text: "BÔNUS: +100 brincadeiras aquáticas",
                    bonus: true,
                  },
                  {
                    text: "Garantia de 7 dias",
                    bonus: false,
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 font-body text-[16px] text-foreground">
                    {item.bonus ? (
                      <Gift className="text-primary flex-shrink-0 mt-0.5" size={20} />
                    ) : (
                      <Check className="text-primary flex-shrink-0 mt-0.5 stroke-[3]" size={20} />
                    )}
                    <span className={item.bonus ? "font-semibold text-primary" : ""}>{item.text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto w-full pt-2">
                <a href={getUrl("https://pay.lowify.com.br/checkout.php?product_id=lDM9u6")} className="block w-full">
                  <button className="w-full py-5 bg-gradient-cta hover:brightness-110 active:scale-[0.98] text-primary-foreground font-body font-extrabold text-xl rounded-full shadow-[0_10px_30px_hsl(205_85%_45%/0.4)] transition-all flex items-center justify-center gap-2 animate-pulse-soft">
                    <Star size={24} className="stroke-[2.5]" />
                    QUERO O PREMIUM
                  </button>
                </a>
              </div>
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
                <span className="text-muted-foreground line-through text-sm">R$32,90</span>
                <span className="font-display text-3xl font-bold text-primary">R$24,90</span>
              </div>
              <a href={getUrl("https://pay.lowify.com.br/go.php?offer=3qcv1fa")} className="block">
                <button className="w-full py-3 bg-gradient-cta text-primary-foreground font-body font-bold text-base rounded-full shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2">
                  <Gift size={18} />
                  QUERO ESTA OFERTA
                </button>
              </a>
            </div>

            <a
              href="#"
              onClick={handleDeclineFirstPromo}
              className="block text-center text-muted-foreground text-sm underline hover:text-foreground transition-colors"
            >
              Não, quero continuar com o pacote de R$17,90
            </a>
          </div>
        </DialogContent>
      </Dialog>

      {/* Segundo Modal Promocional - R$21,90 */}
      <Dialog open={showSecondPromoModal} onOpenChange={setShowSecondPromoModal}>
        <DialogContent className="max-w-md rounded-2xl p-0 overflow-hidden">
          <div className="bg-gradient-to-br from-swim-orange to-primary p-6 text-center">
            <DialogHeader>
              <DialogTitle className="text-primary-foreground font-display text-2xl font-bold">
                🔥 Última Chance!
              </DialogTitle>
              <DialogDescription className="text-primary-foreground/90 text-base mt-2">
                Tudo bem, vamos fazer ainda melhor por você!
              </DialogDescription>
            </DialogHeader>
          </div>

          <div className="p-6 space-y-4">
            <div className="bg-accent/50 rounded-xl p-4 border-2 border-primary">
              <p className="font-display font-bold text-lg text-foreground mb-1">Oferta Final Exclusiva</p>
              <p className="text-muted-foreground text-sm mb-2">300 Atividades + Todos os Bônus</p>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-muted-foreground line-through text-sm">R$24,90</span>
                <span className="font-display text-3xl font-bold text-primary">R$21,90</span>
              </div>
              <a href={getUrl("https://pay.wiapy.com/ahfg7eAr2")} className="block">
                <button className="w-full py-3 bg-gradient-cta text-primary-foreground font-body font-bold text-base rounded-full shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2">
                  <Gift size={18} />
                  SIM, QUERO POR R$21,90
                </button>
              </a>
            </div>

            <a
              href={getUrl("https://pay.lowify.com.br/checkout?product_id=P6O2Wy")}
              className="block text-center text-muted-foreground text-sm underline hover:text-foreground transition-colors"
            >
              Não, quero continuar com o pacote de R$17,90
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PricingSection;
