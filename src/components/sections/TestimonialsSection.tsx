import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marcos Oliveira",
    role: "Professor de Natação",
    city: "São Paulo, SP",
    text: "Minhas aulas ficaram muito mais dinâmicas! Os alunos adoram as atividades e a retenção na escola aumentou muito. Melhor investimento que fiz.",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Fernanda Costa",
    role: "Coordenadora de Escola",
    city: "Rio de Janeiro, RJ",
    text: "Material incrível! Facilitou demais o planejamento dos nossos professores. As atividades são criativas e fáceis de aplicar. Recomendo demais!",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Rafael Santos",
    role: "Instrutor de Natação",
    city: "Belo Horizonte, MG",
    text: "Eu usava sempre as mesmas atividades e os alunos estavam desmotivados. Com esse material, tenho opções para meses sem repetir nada!",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
];

const TestimonialsSection = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container">
      <h2 className="font-display text-2xl md:text-4xl font-bold text-center text-foreground mb-3">
        O Que Dizem <span className="text-primary">Nossos Clientes</span>
      </h2>
      <p className="font-body text-muted-foreground text-center text-sm md:text-base mb-12">
        Mais de 2.450 professores transformaram suas aulas
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="scroll-fade relative bg-card rounded-2xl p-6 border border-border shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <Quote className="absolute top-4 right-4 text-primary/15" size={40} />
            <div className="flex gap-0.5 mb-4 relative">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="text-swim-gold fill-swim-gold" size={16} />
              ))}
            </div>
            <p className="font-body text-sm text-foreground leading-relaxed mb-5 relative">"{t.text}"</p>
            <div className="flex items-center gap-3 pt-4 border-t border-border">
              <img
                src={t.photo}
                alt={t.name}
                className="w-11 h-11 rounded-full object-cover border-2 border-primary/30"
                loading="lazy"
              />
              <div>
                <p className="font-body font-bold text-foreground text-sm">{t.name}</p>
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
