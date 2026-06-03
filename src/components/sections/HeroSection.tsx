import CountdownTimer from "@/components/CountdownTimer";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const today = new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" });

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background pt-8 pb-12 md:pt-16 md:pb-20">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-body font-semibold text-xs md:text-sm px-4 py-2 rounded-full mb-6">
            🏊 OFERTA ESPECIAL — SÓ HOJE {today}
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-extrabold text-foreground leading-tight mb-6">
            Chega de aulas <span className="text-destructive">repetitivas</span> e alunos <span className="text-destructive">desmotivados</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Pare de perder horas tentando criar algo novo. Tenha em mãos <span className="text-foreground font-semibold">300+ atividades prontas</span> para acabar com a monotonia, recuperar a atenção dos alunos e eliminar o cansaço do planejamento diário.
          </p>

          <a href="#planos">
            <Button className="bg-gradient-cta text-primary-foreground font-body font-bold text-base md:text-lg px-8 md:px-12 py-6 md:py-7 rounded-xl shadow-lg animate-pulse-soft hover:brightness-110 transition-all mb-10 w-full md:w-auto">
              👉 QUERO ACESSAR AGORA
            </Button>
          </a>

          {/* Timer */}
          <div className="mt-12">
            <p className="font-body text-sm text-muted-foreground mb-3 uppercase tracking-wider font-semibold">
              ⏰ Oferta expira em:
            </p>
            <CountdownTimer />
          </div>

          {/* Social proof */}
          <p className="mt-6 font-body text-[15px] text-muted-foreground">
            🔥 <span className="font-bold text-foreground">+2.450 professores</span> já compraram
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
