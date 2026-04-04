import { Sparkles, Users, Heart, Zap } from "lucide-react";

const benefits = [
  { icon: Sparkles, title: "Aulas Mais Criativas", desc: "Surpreenda seus alunos com dinâmicas inovadoras e envolventes a cada encontro." },
  { icon: Users, title: "Mais Retenção de Alunos", desc: "Alunos engajados voltam sempre. Crie conexão real e fidelidade." },
  { icon: Heart, title: "Redução do Estresse", desc: "Proporcione momentos profundos de relaxamento e conexão interior." },
  { icon: Zap, title: "Práticas Prontas", desc: "Zero esforço de planejamento. Escolha, aplique e encante em minutos." },
];

const BenefitsSection = () => (
  <section className="py-10 md:py-14 bg-card">
    <div className="container">
      <h2 className="font-display text-xl md:text-3xl font-bold text-center text-foreground mb-3">
        Por Que Instrutores <span className="text-gradient">Amam</span> Este Material?
      </h2>
      <p className="font-body text-muted-foreground text-center text-sm max-w-xl mx-auto mb-8">
        Benefícios reais para quem quer elevar o nível das suas aulas de yoga.
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {benefits.map((b, i) => (
          <div
            key={i}
            className="scroll-fade bg-background rounded-xl p-4 text-center shadow-sm border border-border hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-2">
              <b.icon className="text-primary" size={20} />
            </div>
            <h3 className="font-display text-sm font-semibold text-foreground mb-1">{b.title}</h3>
            <p className="font-body text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
