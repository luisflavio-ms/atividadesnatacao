import { Target, Brain, Wrench, RefreshCw } from "lucide-react";

const diffs = [
  { icon: Target, title: "Todos os Níveis", desc: "Do iniciante ao avançado" },
  { icon: Brain, title: "Corpo, Mente e Espírito", desc: "Abordagem integral" },
  { icon: Wrench, title: "Metodologia Prática", desc: "Aplicação imediata" },
  { icon: RefreshCw, title: "Atualizações Mensais", desc: "Conteúdo sempre novo" },
];

const DifferentialsSection = () => (
  <section className="py-16 md:py-24 bg-card">
    <div className="container">
      <h2 className="font-display text-2xl md:text-4xl font-bold text-center text-foreground mb-12">
        O Que Nos Torna <span className="text-gradient">Diferentes</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
        {diffs.map((d, i) => (
          <div key={i} className="scroll-fade text-center p-5">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <d.icon className="text-primary" size={22} />
            </div>
            <h3 className="font-display text-base font-semibold text-foreground mb-1">{d.title}</h3>
            <p className="font-body text-xs text-muted-foreground">{d.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DifferentialsSection;