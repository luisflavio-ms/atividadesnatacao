import { X } from "lucide-react";

const pains = [
  "As aulas podem ficar repetitivas",
  "Os alunos perdem motivação",
  "Pais querem ver evolução + diversão",
  "Adolescentes precisam de desafio",
  "Adultos e idosos precisam se sentir seguros e engajados",
];

const PainPointsSection = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container">
      <div className="max-w-2xl mx-auto">
        <h2 className="scroll-fade font-display text-2xl md:text-4xl font-bold text-center text-primary mb-10 leading-tight">
          Se você é profissional de Educação Física, professor de natação, instrutor de clubes, escolas, academias ou piscinas particulares, você sabe que:
        </h2>
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
      </div>
    </div>
  </section>
);

export default PainPointsSection;
