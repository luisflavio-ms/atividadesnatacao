import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Camila Ferreira",
    role: "Instrutora de Yoga",
    city: "São Paulo, SP",
    text: "Minhas aulas mudaram completamente! Os alunos ficam mais engajados e sempre pedem por mais. Foi o melhor investimento que fiz para minha carreira como instrutora.",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Renata Oliveira",
    role: "Praticante de Yoga",
    city: "Rio de Janeiro, RJ",
    text: "Eu pratico yoga há 5 anos e nunca tinha experimentado dinâmicas tão profundas. Sinto que minha prática evoluiu de verdade. Recomendo de olhos fechados!",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Patrícia Duarte",
    role: "Dona de Estúdio",
    city: "Belo Horizonte, MG",
    text: "O material salvou meu estúdio! A retenção de alunos aumentou 40% desde que comecei a usar as dinâmicas. Conteúdo prático e transformador.",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
  },
];

const TestimonialsSection = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container">
      <h2 className="font-display text-2xl md:text-4xl font-bold text-center text-foreground mb-12">
        O Que Dizem <span className="text-gradient">Nossos Alunos</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="scroll-fade bg-card rounded-2xl p-6 border border-border shadow-sm"
          >
            <div className="flex gap-0.5 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="text-yoga-gold fill-yoga-gold" size={16} />
              ))}
            </div>
            <p className="font-body text-sm text-foreground leading-relaxed mb-5 italic">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <img
                src={t.photo}
                alt={t.name}
                className="w-10 h-10 rounded-full object-cover border-2 border-primary/20"
                loading="lazy"
              />
              <div>
                <p className="font-body font-semibold text-foreground text-sm">{t.name}</p>
                <p className="font-body text-xs text-muted-foreground">{t.role} • {t.city}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
