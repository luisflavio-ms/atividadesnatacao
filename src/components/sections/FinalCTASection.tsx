import { Button } from "@/components/ui/button";

const FinalCTASection = () => (
  <section className="py-16 md:py-24 bg-gradient-to-b from-background to-card">
    <div className="container">
      <div className="max-w-2xl mx-auto text-center scroll-fade">
        <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive font-body font-bold text-xs px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
          ⏰ Última chance — oferta termina hoje
        </div>
        <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
          Quantas Aulas Você Ainda Vai Repetir os <span className="text-gradient">Mesmos Exercícios</span>?
        </h2>
        <p className="font-body text-muted-foreground mb-8 text-sm md:text-base">
          Em menos de 2 minutos você desbloqueia 300 atividades, 4 bônus e nunca mais trava na frente da turma. O preço de hoje não volta amanhã.
        </p>
        <a href="#planos">
          <Button className="bg-gradient-cta text-primary-foreground font-body font-extrabold text-base md:text-lg px-10 md:px-14 py-6 md:py-7 rounded-xl shadow-lg animate-pulse-soft hover:brightness-110 transition-all">
            QUERO MEU ACESSO AGORA
          </Button>
        </a>
        <p className="mt-6 font-body text-xs text-muted-foreground">
          🔒 Pagamento 100% seguro • Acesso imediato • Garantia incondicional de 7 dias
        </p>
      </div>
    </div>
  </section>
);

export default FinalCTASection;
