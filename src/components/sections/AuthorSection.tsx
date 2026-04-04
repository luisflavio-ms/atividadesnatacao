import { Award, Users, BookOpen } from "lucide-react";

const AuthorSection = () => (
  <section className="py-16 md:py-24 bg-card">
    <div className="container">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Photo placeholder */}
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-accent/40 to-secondary/30 flex-shrink-0 flex items-center justify-center shadow-lg overflow-hidden">
          <img src="/professora.png" alt="Letícia Carvalho" className="w-full h-full object-cover" />
        </div>

        <div className="text-center md:text-left">
          <p className="font-body text-sm text-primary font-semibold mb-1 uppercase tracking-wider">Sobre a Autora</p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">Letícia Carvalho</h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-5 text-sm md:text-base">
            Instrutora certificada com mais de 10 anos de experiência em Hatha e Vinyasa Yoga. 
            Já formou e impactou a vida de mais de 2.500 alunos em todo o Brasil, 
            combinando tradição com inovação nas práticas de yoga.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <div className="flex items-center gap-2 font-body text-xs text-muted-foreground bg-background px-3 py-2 rounded-full">
              <Award size={14} className="text-primary" /> +10 anos de experiência
            </div>
            <div className="flex items-center gap-2 font-body text-xs text-muted-foreground bg-background px-3 py-2 rounded-full">
              <Users size={14} className="text-primary" /> +2.500 alunos
            </div>
            <div className="flex items-center gap-2 font-body text-xs text-muted-foreground bg-background px-3 py-2 rounded-full">
              <BookOpen size={14} className="text-primary" /> Hatha & Vinyasa
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AuthorSection;