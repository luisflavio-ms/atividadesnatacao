import { Award, Users, BookOpen } from "lucide-react";

const AuthorSection = () => (
  <section className="py-16 md:py-24 bg-card">
    <div className="container">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Photo placeholder */}
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-accent/40 to-secondary/30 flex-shrink-0 flex items-center justify-center shadow-lg overflow-hidden">
          <div className="w-full h-full bg-primary/10 flex items-center justify-center">
            <span className="text-6xl">🏊</span>
          </div>
        </div>

        <div className="text-center md:text-left">
          <p className="font-body text-sm text-primary font-semibold mb-1 uppercase tracking-wider">Quem Criou</p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">Equipe AquaAtividades</h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-5 text-sm md:text-base">
            Desenvolvido por uma equipe de professores de natação com mais de 15 anos de experiência 
            em escolas e academias de todo o Brasil. Conteúdo testado e aprovado por centenas de profissionais.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <div className="flex items-center gap-2 font-body text-xs text-muted-foreground bg-background px-3 py-2 rounded-full">
              <Award size={14} className="text-primary" /> +15 anos de experiência
            </div>
            <div className="flex items-center gap-2 font-body text-xs text-muted-foreground bg-background px-3 py-2 rounded-full">
              <Users size={14} className="text-primary" /> +2.450 clientes
            </div>
            <div className="flex items-center gap-2 font-body text-xs text-muted-foreground bg-background px-3 py-2 rounded-full">
              <BookOpen size={14} className="text-primary" /> 300 atividades
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AuthorSection;