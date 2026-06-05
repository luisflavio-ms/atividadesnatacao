import { X } from "lucide-react";

const pains = [
  "Você gasta horas planejando aulas e ainda sente que falta criatividade",
  "Repete os mesmos exercícios e percebe os alunos perdendo o interesse",
  "Pais cobram resultado, diversão e evolução — tudo ao mesmo tempo",
  "Adolescentes desafiam você a trazer algo novo a cada aula",
  "Adultos e idosos precisam de segurança, motivação e variedade",
  "Você sabe que pode perder alunos se a aula virar rotina",
];

const PainPointsSection = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container">
      <div className="max-w-2xl mx-auto">
        <h2 className="scroll-fade font-display text-2xl md:text-4xl font-bold text-center text-primary mb-4 leading-tight">
          Se você dá aulas de natação, provavelmente já passou por isso:
        </h2>
        <p className="scroll-fade font-body text-center text-muted-foreground mb-10 text-base md:text-lg">
          Professor, instrutor, profissional de Educação Física — você não está sozinho.
        </p>
        <ul className="space-y-5">
          {pains.map((pain, i) => (
            <li
              key={i}
              className="scroll-fade flex items-start gap-3 bg-card p-4 md:p-5 rounded-xl shadow-sm border border-border"
            >
              <X className="text-destructive flex-shrink-0 mt-0.5" size={24} strokeWidth={3} />
              <span className="font-body text-base md:text-lg font-semibold text-foreground">
                {pain}
              </span>
            </li>
          ))}
        </ul>
        <p className="scroll-fade font-body text-center text-foreground font-semibold mt-10 text-lg md:text-xl">
          Imagine acabar com tudo isso ainda <span className="text-gradient">esta semana</span>.
        </p>
      </div>
    </div>
  </section>
);

export default PainPointsSection;
