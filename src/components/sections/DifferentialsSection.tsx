import { Target, Brain, Wrench, RefreshCw } from "lucide-react";

const diffs = [
  { icon: Target, title: "Todas as Idades", desc: "Crianças, jovens e adultos", color: "text-swim-blue", bg: "bg-swim-blue/15" },
  { icon: Brain, title: "Técnica + Diversão", desc: "Aprendizado lúdico e eficaz", color: "text-swim-orange", bg: "bg-swim-orange/15" },
  { icon: Wrench, title: "Aplicação Imediata", desc: "Use direto na próxima aula", color: "text-secondary", bg: "bg-secondary/15" },
  { icon: RefreshCw, title: "Variedade Total", desc: "300 atividades diferentes", color: "text-swim-gold", bg: "bg-swim-gold/20" },
];

const DifferentialsSection = () => (
  <section className="py-16 md:py-24 bg-card">
    <div className="container">
      <h2 className="font-display text-2xl md:text-4xl font-bold text-center text-foreground mb-12">
        O que nos torna <span className="text-primary">diferentes</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
        {diffs.map((d, i) => (
          <div
            key={i}
            className="scroll-fade text-center p-6 bg-background rounded-2xl border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className={`w-14 h-14 ${d.bg} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
              <d.icon className={d.color} size={26} />
            </div>
            <h3 className="font-display text-base md:text-lg font-bold text-foreground mb-1">{d.title}</h3>
            <p className="font-body text-xs md:text-sm text-muted-foreground">{d.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DifferentialsSection;
