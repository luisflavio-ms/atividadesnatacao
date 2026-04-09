import { Sparkles, Users, Heart, Zap } from "lucide-react";

const benefits = [
  { icon: Sparkles, title: "Aulas Mais Dinâmicas", desc: "Surpreenda seus alunos com atividades variadas e criativas a cada aula.", color: "bg-primary/10 text-primary" },
  { icon: Users, title: "Mais Retenção de Alunos", desc: "Alunos engajados permanecem na escola. Crie uma experiência inesquecível.", color: "bg-emerald-500/10 text-emerald-500" },
  { icon: Heart, title: "Para Todas as Idades", desc: "Atividades para crianças, jovens e adultos — do iniciante ao avançado.", color: "bg-rose-500/10 text-rose-500" },
  { icon: Zap, title: "Pronto para Usar", desc: "Zero esforço de planejamento. Escolha, aplique e encante em minutos.", color: "bg-amber-500/10 text-amber-500" },
];

const BenefitsSection = () => (
  <section className="py-10 md:py-14 bg-card">
    <div className="container">
      <h2 className="font-display text-xl md:text-3xl font-bold text-center text-foreground mb-3">
        Por Que Professores <span className="text-gradient">Amam</span> Este Material?
      </h2>
      <p className="font-body text-muted-foreground text-center text-sm max-w-xl mx-auto mb-8">
        Benefícios reais para quem quer elevar o nível das suas aulas de natação.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg sm:max-w-2xl mx-auto">
        {benefits.map((b, i) => (
          <div
            key={i}
            className="scroll-fade bg-background rounded-xl p-5 text-center shadow-sm border border-border hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 ${b.color.split(' ')[0]}`}>
              <b.icon className={b.color.split(' ')[1]} size={24} />
            </div>
            <h3 className="font-display text-base font-semibold text-foreground mb-1">{b.title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;