import { Sparkles, Users, Heart, Zap, Clock, ShieldCheck } from "lucide-react";

const benefits = [
  { icon: Clock, title: "Economize 5h+ por semana", desc: "Pare de planejar do zero. Escolha, aplique e pronto — sua próxima aula sai em minutos." },
  { icon: Sparkles, title: "Aulas que surpreendem", desc: "Acabe com a repetição. Tenha sempre uma atividade nova na manga para encantar." },
  { icon: Users, title: "Alunos que não largam", desc: "Aluno engajado renova matrícula. Crie uma experiência que faz ele voltar toda semana." },
  { icon: Heart, title: "Para todas as idades", desc: "Crianças, jovens, adultos e idosos — do iniciante ao avançado, sem improviso." },
  { icon: ShieldCheck, title: "Mais autoridade", desc: "Conduza com segurança, mostre evolução e seja reconhecido como referência na piscina." },
  { icon: Zap, title: "100% pronto para usar", desc: "Organizado por idade, nível e objetivo. Acesse pelo celular à beira da piscina." },
];

const BenefitsSection = () => (
  <section className="py-10 md:py-14 bg-card">
    <div className="container">
      <h2 className="font-display text-xl md:text-3xl font-bold text-center text-foreground mb-3">
        O Que Muda na Sua Rotina <span className="text-gradient">A Partir de Hoje</span>
      </h2>
      <p className="font-body text-muted-foreground text-center text-sm max-w-xl mx-auto mb-8">
        Resultados reais para professores que decidiram parar de improvisar.
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
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
