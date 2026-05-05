import { Award, Users, BookOpen } from "lucide-react";
import authorImg from "@/assets/author.png";

const AuthorSection = () => (
  <section className="py-16 md:py-24 bg-card">
    <div className="container">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="relative flex-shrink-0">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl" />
          <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full shadow-xl overflow-hidden ring-4 ring-primary/30">
            <img src={authorImg} alt="Letícia Carvalho" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="text-center md:text-left">
          <p className="font-body text-sm text-primary font-bold mb-1 uppercase tracking-wider">Quem Criou</p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">Letícia Carvalho</h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-5 text-sm md:text-base">
            Professora de natação apaixonada por ensinar e transformar vidas dentro da água.
            Com anos de experiência em aulas para todas as idades, Letícia criou este material
            para ajudar outros profissionais a terem aulas mais criativas, organizadas e eficientes.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            <div className="flex items-center gap-2 font-body text-xs text-foreground font-semibold bg-background px-3 py-2 rounded-full border border-border">
              <Award size={14} className="text-swim-orange" /> +15 anos
            </div>
            <div className="flex items-center gap-2 font-body text-xs text-foreground font-semibold bg-background px-3 py-2 rounded-full border border-border">
              <Users size={14} className="text-swim-aqua" /> +2.450 clientes
            </div>
            <div className="flex items-center gap-2 font-body text-xs text-foreground font-semibold bg-background px-3 py-2 rounded-full border border-border">
              <BookOpen size={14} className="text-primary" /> 300 atividades
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AuthorSection;
