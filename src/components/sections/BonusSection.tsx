import { Gift } from "lucide-react";

const bonuses = [
  { name: "Certificado de Yoga", price: "R$47", img: "certificado.png" },
  { name: "Guia de Meditação Guiada", price: "R$47", img: "guia.png" },
  { name: "Pranayamas e Técnicas de Respiração", price: "R$53", img: "pranyamas.png" },
];

const BonusSection = () => (
  <section className="py-10 md:py-14 bg-gradient-to-b from-accent/10 to-background">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-yoga-orange/20 text-yoga-charcoal font-body font-bold text-sm px-5 py-2 rounded-full mb-4">
          <Gift size={18} /> BÔNUS EXCLUSIVOS
        </div>

        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
          Leve Tudo Isso <span className="text-gradient">GRÁTIS Hoje</span>
        </h2>
        <p className="font-body text-muted-foreground text-base">
          Ao adquirir o plano hoje, você recebe 3 bônus incríveis sem pagar nada a mais.
        </p>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-8">
          {bonuses.map((b, i) => (
            <div
              key={i}
              className="scroll-fade flex flex-col bg-card rounded-2xl overflow-hidden border border-accent/20 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="relative overflow-hidden aspect-[3/2] bg-muted/30">
                <img
                  src={`/${b.img}`}
                  alt={b.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-yoga-orange text-foreground font-bold text-xs uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg z-10">
                  PRESENTE 🎁
                </div>
              </div>
              <div className="flex flex-col flex-grow p-4 text-left">
                <h3 className="font-body font-bold text-foreground text-base mb-2 line-clamp-2">{b.name}</h3>
                
                <div className="mt-auto pt-3 border-t border-border/50 flex flex-col gap-1">
                  <span className="font-body text-muted-foreground text-sm uppercase tracking-wider font-medium">Valor original</span>
                  <div className="flex items-center justify-between">
                    <span className="font-body text-muted-foreground line-through decoration-destructive/60 decoration-2">{b.price}</span>
                    <span className="font-body font-bold text-primary text-xl">GRÁTIS</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full max-w-2xl bg-gradient-to-r from-primary/5 via-accent/10 to-primary/5 border-2 border-primary/20 rounded-2xl p-6 text-center shadow-xl">
          <p className="font-body text-muted-foreground text-sm uppercase tracking-[0.2em] font-bold mb-2">Valor Total dos Bônus</p>
          <div className="flex items-center justify-center gap-6">
            <span className="font-display text-2xl md:text-3xl text-muted-foreground line-through decoration-destructive/60 decoration-4">R$147</span>
            <span className="text-primary font-bold text-4xl md:text-5xl drop-shadow-sm">GRÁTIS</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BonusSection;
