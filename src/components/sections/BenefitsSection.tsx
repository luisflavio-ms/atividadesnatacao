import { Sparkles, Users, Heart, Zap } from "lucide-react";

const benefits = [
  { icon: Sparkles, title: "Aulas Mais Dinâmicas", desc: "Surpreenda seus alunos com atividades variadas e criativas a cada aula.", color: "swim-blue" },
  { icon: Users, title: "Mais Retenção de Alunos", desc: "Alunos engajados permanecem na escola. Crie uma experiência inesquecível.", color: "swim-aqua" },
  { icon: Heart, title: "Para Todas as Idades", desc: "Atividades para crianças, jovens e adultos — do iniciante ao avançado.", color: "swim-orange" },
  { icon: Zap, title: "Pronto para Usar", desc: "Zero esforço de planejamento. Escolha, aplique e encante em minutos.", color: "swim-gold" },
];

const colorMap: Record<string, { bg: string; text: string }> = {
  "swim-blue": { bg: "bg-swim-blue/15", text: "text-swim-blue" },
  "swim-aqua": { bg: "bg-swim-aqua/15", text: "text-swim-aqua" },
  "swim-orange": { bg: "bg-swim-orange/15", text: "text-swim-orange" },
  "swim-gold": { bg: "bg-swim-gold/20", text: "text-swim-gold" },
};

const BenefitsSection = () => (
  <section className="py-12 md:py-16 bg-card">
    <div className="container">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-center text-foreground mb-3">
        Por Que Professores <span className="text-primary">Amam</span> Este Material?
      </h2>
      <p className="font-body text-muted-foreground text-center text-sm max-w-xl mx-auto mb-10">
        Benefícios reais para quem quer elevar o nível das suas aulas de natação.
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 max-w-5xl mx-auto">
        {benefits.map((b, i) => {
          const c = colorMap[b.color];
          return (
            <div
              key={i}
              className="scroll-fade bg-background rounded-2xl p-5 text-center shadow-sm border border-border hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className={`w-12 h-12 ${c.bg} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                <b.icon className={c.text} size={22} />
              </div>
              <h3 className="font-display text-sm md:text-base font-bold text-foreground mb-1.5">{b.title}</h3>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
