import { Gift } from "lucide-react";

const bonuses = [
  {
    name: "Guia de Jogos Aquáticos para Crianças",
    price: "R$37",
    desc: "20 jogos lúdicos para tornar as aulas infantis inesquecíveis.",
  },
  {
    name: "Planilha de Periodização de Treinos",
    price: "R$47",
    desc: "Organize seus treinos semanais e mensais com facilidade.",
  },
  { name: "+100 brincadeiras aquáticas", price: "R$27", desc: "Tenha mais de 100 ideias adicionais para suas aulas." },
];

const BonusSection = () => (
  <section className="py-14 md:py-20 bg-gradient-to-b from-swim-gold/15 via-background to-background">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-swim-orange text-white font-body font-bold text-sm px-5 py-2 rounded-full mb-4 shadow-md shadow-swim-orange/30">
          <Gift size={18} /> BÔNUS EXCLUSIVOS
        </div>

        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
          Leve Tudo Isso <span className="text-swim-orange">GRÁTIS Hoje</span>
        </h2>
        <p className="font-body text-muted-foreground text-base">
          Ao adquirir o material hoje, você recebe 3 bônus incríveis sem pagar nada a mais.
        </p>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-8">
          {bonuses.map((b, i) => (
            <div
              key={i}
              className="scroll-fade flex flex-col bg-background rounded-2xl overflow-hidden border-2 border-border shadow-lg hover:shadow-2xl hover:border-swim-orange/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-1.5 bg-swim-orange" />
              <div className="flex flex-col flex-grow p-6 text-left">
                <div className="w-12 h-12 bg-swim-orange/15 rounded-xl flex items-center justify-center mb-3">
                  <Gift className="text-swim-orange" size={22} />
                </div>
                <h3 className="font-display font-bold text-foreground text-base mb-2">{b.name}</h3>
                <p className="font-body text-xs text-muted-foreground leading-relaxed mb-4">{b.desc}</p>

                <div className="mt-auto pt-3 border-t border-border flex flex-col gap-1">
                  <span className="font-body text-muted-foreground text-xs uppercase tracking-wider font-semibold">
                    Valor original
                  </span>
                  <div className="flex items-center justify-between">
                    <span className="font-body text-muted-foreground line-through decoration-destructive/60 decoration-2">
                      {b.price}
                    </span>
                    <span className="font-body font-extrabold text-swim-orange text-xl">GRÁTIS</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full max-w-2xl bg-card border-2 border-swim-orange/30 rounded-2xl p-6 text-center shadow-xl">
          <p className="font-body text-muted-foreground text-sm uppercase tracking-[0.2em] font-bold mb-2">
            Valor Total dos Bônus
          </p>
          <div className="flex items-center justify-center gap-6">
            <span className="font-display text-2xl md:text-3xl text-muted-foreground line-through decoration-destructive/60 decoration-4">
              R$111
            </span>
            <span className="text-swim-orange font-extrabold text-4xl md:text-5xl">GRÁTIS</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BonusSection;
