import { useState } from "react";
import { Check, X, ShoppingCart, Star, Gift } from "lucide-react";

const PricingSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="planos" className="py-16 md:py-24 bg-[#f8f9fa] scroll-mt-20">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto items-stretch">

          {/* Basic */}
          <div className="relative pt-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-emerald-400"></div>

            <div className="h-full bg-white rounded-3xl p-8 shadow-[0_4px_25px_rgb(0,0,0,0.05)] flex flex-col items-center text-center border border-slate-100/50">
              <h3 className="font-display text-2xl font-bold text-[#1e293b] mb-6 tracking-wide mt-2">Plano Básico</h3>

              <span className="font-body text-[#94a3b8] font-medium line-through text-[17px] mb-1">R$97</span>
              <span className="font-display text-5xl md:text-6xl font-bold text-[#10b981] mb-2 tracking-tight">R$10,00</span>
              <span className="font-body text-[#64748b] text-[15px] mb-1">pagamento único</span>
              <span className="font-body text-[#10b981] font-bold text-[15px] mb-10">Você economiza R$87,00</span>

              <ul className="space-y-5 mb-10 w-full text-left">
                {[
                  { text: "70 Dinâmicas de Yoga PDF", icon: "check" },
                  { text: "Organizadas por nível e objetivo", icon: "check" },
                  { text: "Acesso digital", icon: "check" },
                  { text: "Garantia de 7 dias", icon: "check" },
                  { text: "Sem benefícios do plano premium", icon: "cross" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 font-body text-[16px] text-[#334155]">
                    {item.icon === "check" ? (
                      <Check className="text-[#10b981] flex-shrink-0 mt-0.5 stroke-[3]" size={20} />
                    ) : (
                      <X className="text-[#ef4444] flex-shrink-0 mt-0.5 stroke-[3]" size={20} />
                    )}
                    <span className={item.icon === "cross" ? "text-[#dc2626]" : ""}>{item.text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto w-full pt-2">
                <a href="#" className="block w-full" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }}>
                  <button className="w-full py-4 bg-[#34d399] hover:bg-[#10b981] active:scale-[0.98] text-white font-body font-bold text-xl rounded-full shadow-[0_10px_25px_rgba(52,211,153,0.4)] hover:shadow-[0_15px_30px_rgba(16,185,129,0.5)] transition-all flex items-center justify-center gap-2">
                    <ShoppingCart size={24} className="stroke-[2.5]" />
                    COMPRAR AGORA
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Premium - Highlighted */}
          <div className="relative pt-4 scale-[1.03] md:scale-105">
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 bg-[#dc2626] text-white font-body font-extrabold text-[13px] px-8 py-2 rounded-full shadow-[0_4px_20px_rgba(220,38,38,0.4)] z-10 whitespace-nowrap tracking-wider animate-pulse-soft">
              🔥 MAIS POPULAR
            </div>

            <div className="h-full bg-gradient-to-b from-white to-red-50/40 rounded-3xl p-8 shadow-[0_8px_40px_rgba(220,38,38,0.18)] flex flex-col items-center text-center border-[3px] border-[#dc2626] relative">
              <h3 className="font-display text-2xl font-bold text-[#dc2626] mb-6 tracking-wide mt-2">Plano Premium</h3>

              <span className="font-body text-[#94a3b8] font-medium line-through text-[17px] mb-1">R$256</span>
              <span className="font-display text-5xl md:text-6xl font-bold text-[#dc2626] mb-2 tracking-tight">R$27,00</span>
              <span className="font-body text-[#64748b] text-[15px] mb-1">pagamento único</span>
              <span className="font-body text-[#dc2626] font-bold text-[15px] mb-6">Você economiza R$229,00 + R$147 em bônus</span>

              <div className="w-full bg-red-50 border border-red-100 rounded-2xl py-3 px-4 mb-8 text-[14px] text-[#dc2626] font-bold">
                🔥 +1736 pessoas escolheram essa oferta
              </div>

              <ul className="space-y-5 mb-10 w-full text-left">
                {[
                  { text: "Curso De Yoga - Vídeos & PDFs", type: "star" },
                  { text: "150 Dinâmicas de Yoga PDF", type: "check" },
                  { text: "Organizadas por nível e objetivo", type: "check" },
                  { text: "Acesso digital", type: "check" },
                  { text: "BÔNUS: Certificado de Yoga", type: "bonus" },
                  { text: "BÔNUS: Guia de Meditação Guiada", type: "bonus" },
                  { text: "BÔNUS: Pranayamas e Técnicas de Respiração", type: "bonus" },
                  { text: "Atualizações mensais", type: "check" },
                  { text: "Suporte prioritário", type: "check" },
                  { text: "Garantia de 7 dias", type: "check" },
                ].map((item, i) => (
                  <li key={i} className={`flex items-start gap-4 font-body text-[16px] ${item.type === 'star' ? 'text-[#d97706] font-bold tracking-tight' : item.type === 'bonus' ? 'text-[#dc2626] font-semibold' : 'text-[#334155]'}`}>
                    {item.type === "check" && <Check className="text-[#10b981] flex-shrink-0 mt-0.5 stroke-[3]" size={20} />}
                    {item.type === "star" && <Star className="text-[#eab308] fill-[#eab308] flex-shrink-0 mt-0.5" size={22} />}
                    {item.type === "bonus" && <Gift className="text-[#dc2626] flex-shrink-0 mt-0.5" size={20} />}
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto w-full pt-2">
                <a href="#" className="block w-full">
                  <button onClick={() => {
                    window.location.href = 'https://pay.cakto.com.br/b6huf3y' + window.location.search;
                  }} className="w-full py-5 bg-[#dc2626] hover:bg-[#b91c1c] active:scale-[0.98] text-white font-body font-extrabold text-xl rounded-full shadow-[0_10px_30px_rgba(220,38,38,0.4)] hover:shadow-[0_15px_35px_rgba(185,28,28,0.5)] transition-all flex items-center justify-center gap-2 animate-pulse-soft">
                    <ShoppingCart size={24} className="stroke-[2.5]" />
                    COMPRAR AGORA
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upsell Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-[2rem] p-6 md:p-8 w-full max-w-md shadow-2xl relative animate-in fade-in zoom-in duration-300">
            <h3 className="font-display text-2xl font-bold text-center text-[#1e293b] mb-1">Espere! Oferta Especial</h3>
            <p className="text-center text-[#64748b] mb-6 font-body text-[15px]">
              Leve o <span className="font-bold text-[#10b981]">Plano Premium</span> com desconto exclusivo!
            </p>

            <div className="bg-[#f1f5f9] rounded-2xl py-5 px-6 flex items-center justify-center gap-4 mb-8">
              <span className="text-[#94a3b8] line-through text-lg font-medium">De R$27</span>
              <span className="text-4xl font-bold text-[#10b981]">R$17</span>
            </div>

            <ul className="space-y-4 mb-8 px-2">
              {[
                "150 Dinâmicas de Yoga",
                "Certificado de Yoga",
                "Guia de Meditação Guiada",
                "Pranayamas e Técnicas de Respiração"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-body text-[15px] text-[#334155]">
                  <Check className="text-[#10b981] flex-shrink-0 stroke-[3]" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3">
              <a href="#" className="w-full" onClick={() => setIsModalOpen(false)}>
                <button
                  onClick={() => {
                    window.location.href = 'https://pay.cakto.com.br/qgoobgy_811544' + window.location.search;
                  }}
                  className="w-full py-4 bg-[#10b981] hover:bg-[#059669] active:scale-[0.98] text-white font-body font-bold text-[15px] rounded-xl transition-all shadow-[0_4px_14px_rgba(16,185,129,0.39)]">
                  QUERO O PREMIUM POR R$17
                </button>
              </a>
              <button
                onClick={(e) => {
                  e.preventDefault(); setIsModalOpen(false); /* Ação para prosseguir com o básico original */
                  window.location.href = 'https://pay.cakto.com.br/dt4aida_809577' + window.location.search;
                }}
                className="w-full py-4 bg-white border border-slate-200 hover:bg-slate-50 text-[#64748b] font-body font-semibold text-[15px] rounded-xl transition-all"
              >
                Continuar com o Básico
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PricingSection;