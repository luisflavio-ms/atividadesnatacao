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
    <section id="planos" className="py-16 md:py-24 bg-slate-50 scroll-mt-20">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Escolha o seu Plano</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Acesso imediato e vitalício para transformar suas aulas hoje.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {/* Pacote Normal - Simplified */}
          <div className="relative flex">
            <div className="h-full w-full bg-white rounded-3xl p-6 md:p-8 shadow-sm flex flex-col items-center text-center border border-slate-200 transition-all hover:shadow-md">
              <h3 className="font-display text-xl font-bold text-slate-700 mb-5 tracking-wide mt-2">
                300 Atividades de Natação
              </h3>

              <div className="flex flex-col items-center mb-8">
                <span className="font-body text-slate-400 font-medium line-through text-sm">R$97</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-slate-800">R$</span>
                  <span className="font-display text-4xl font-bold text-slate-800 tracking-tight">17,90</span>
                </div>
                <span className="font-body text-slate-500 text-xs mt-1 uppercase tracking-wider font-semibold">pagamento único</span>
              </div>

              <ul className="space-y-4 mb-8 w-full text-left flex-grow">
                {[
                  "300 Atividades de Natação",
                  "Organizadas por idade e nível",
                  "Acesso digital imediato",
                  "Garantia de 7 dias",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3 font-body text-sm text-slate-600">
                    <Check className="text-slate-400 flex-shrink-0 mt-0.5 stroke-[2]" size={16} />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>

              <div className="w-full">
                <button
                  onClick={handleNormalClick}
                  className="w-full py-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-body font-bold text-sm rounded-2xl transition-all flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={18} />
                  COMPRAR BÁSICO
                </button>
              </div>
            </div>
          </div>

          {/* Pacote Premium - Highly Prominent */}
          <div className="relative flex group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-swim-aqua to-primary rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse-soft"></div>
            
            <div className="relative h-full w-full bg-white rounded-3xl p-6 md:p-10 shadow-2xl flex flex-col items-center text-center border-2 border-primary overflow-hidden">
              {/* Ribbon/Badge */}
              <div className="absolute top-0 right-0 overflow-hidden w-32 h-32">
                <div className="bg-swim-orange text-white font-bold text-[10px] py-1 px-10 transform rotate-45 translate-x-8 translate-y-4 shadow-sm uppercase tracking-widest">
                  Popular
                </div>
              </div>

              <div className="mb-2">
                <span className="bg-primary/10 text-primary font-body font-bold text-xs px-4 py-1.5 rounded-full flex items-center gap-1.5 uppercase tracking-wider">
                  <Crown size={14} className="fill-primary" />
                  Pacote Premium Completo
                </span>
              </div>

              <h3 className="font-display text-2xl md:text-3xl font-black text-slate-900 mb-6 tracking-tight">
                Tudo que você precisa
              </h3>

              <div className="flex flex-col items-center mb-8">
                <span className="font-body text-slate-400 font-medium line-through text-lg">R$197</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-primary">R$</span>
                  <span className="font-display text-6xl md:text-7xl font-black text-primary tracking-tighter">
                    32,90
                  </span>
                </div>
                <div className="bg-emerald-100 text-emerald-700 font-bold text-[11px] px-3 py-1 rounded-full mt-2 uppercase">
                  Economia de R$164,10
                </div>
              </div>

              <div className="w-full space-y-3 mb-10 text-left flex-grow">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">O que está incluído:</p>
                {[
                  { text: "300 Atividades de Natação", bonus: false },
                  { text: "Organização por idade e objetivo", bonus: false },
                  { text: "Acesso vitalício e imediato", bonus: false },
                  { text: "BÔNUS: Guia de Jogos Aquáticos", bonus: true },
                  { text: "BÔNUS: Planilha de Periodização", bonus: true },
                  { text: "BÔNUS: +100 brincadeiras extras", bonus: true },
                  { text: "Garantia incondicional de 7 dias", bonus: false },
                ].map((item, i) => (
                  <li key={i} className={`flex items-start gap-3 font-body text-[15px] list-none ${item.bonus ? "text-slate-900 font-semibold" : "text-slate-600"}`}>
                    {item.bonus ? (
                      <div className="bg-primary/10 p-1 rounded-full">
                        <Gift className="text-primary flex-shrink-0" size={16} />
                      </div>
                    ) : (
                      <div className="bg-emerald-100 p-1 rounded-full">
                        <Check className="text-emerald-600 flex-shrink-0 stroke-[3]" size={16} />
                      </div>
                    )}
                    <span>{item.text}</span>
                  </li>
                ))}
              </div>

              <div className="w-full">
                <a href={getUrl("https://pay.wiapy.com/y9A5jHIgSW")} className="block group/btn">
                  <button className="w-full py-6 bg-gradient-cta hover:scale-[1.02] active:scale-[0.98] text-white font-body font-black text-xl rounded-2xl shadow-xl shadow-primary/30 transition-all flex flex-col items-center justify-center gap-0 relative overflow-hidden">
                    <span className="flex items-center gap-2">
                      <Star size={20} className="fill-white animate-spin-slow" />
                      QUERO O PREMIUM AGORA
                    </span>
                    <span className="text-[10px] opacity-80 font-normal uppercase tracking-widest mt-1">Acesso imediato por e-mail</span>
                  </button>
                </a>
                <p className="mt-4 text-[10px] text-slate-400 flex items-center justify-center gap-1">
                   🔒 Compra 100% segura via Wiapy
                </p>
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
              <a href={getUrl("https://pay.wiapy.com/isE8Yjmic")} className="block">
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
              href={getUrl("https://pay.wiapy.com/RWaVaArGQ7")}
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
