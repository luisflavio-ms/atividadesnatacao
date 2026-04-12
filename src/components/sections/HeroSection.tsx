import CountdownTimer from "@/components/CountdownTimer";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const today = new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" });

  return (
    <>
      {/* Banner vermelho topo */}
      <div className="w-full bg-red-600 text-white text-center py-2.5 px-4">
        <p className="font-body font-bold text-sm md:text-base">⚡ OFERTA ESPECIAL DISPONÍVEL APENAS HOJE {today}</p>
      </div>

      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background pt-8 pb-12 md:pt-16 md:pb-20">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-5">
              <span className="text-gradient">300 Atividades</span> prontas e criativas para{" "}
              <span className="text-gradient">transformar</span> suas aulas de natação{" "}
              <span className="text-gradient">+ BÔNUS</span>
            </h1>

            <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Economize horas de planejamento e surpreenda seus alunos com exercícios dinâmicos, divertidos e eficazes
              para todas as idades e níveis.
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
    </>
  );
};

export default HeroSection;
