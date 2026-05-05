import CountdownTimer from "@/components/CountdownTimer";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const today = new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" });

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-swim-sky/20 via-background to-swim-aqua/15 pt-10 pb-16 md:pt-20 md:pb-24">
      {/* Decorative blobs (background only) */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-swim-aqua/30 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-swim-sky/30 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
      <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-swim-gold/20 rounded-full blur-2xl" />

      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 bg-swim-orange text-white font-body font-bold text-xs md:text-sm px-5 py-2.5 rounded-full mb-6 shadow-lg shadow-swim-orange/30">
            🏊 OFERTA ESPECIAL — SÓ HOJE {today}
          </div>

          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] mb-5 tracking-tight">
            <span className="text-primary">300 Atividades</span> prontas e criativas para transformar suas Aulas de Natação +{" "}
            <span className="relative inline-block text-swim-orange">
              bônus
              <span className="absolute -bottom-1 left-0 right-0 h-2 bg-swim-gold/50 -z-10 rounded-full" />
            </span>
          </h1>
          <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Economize horas de planejamento e surpreenda seus alunos com exercícios{" "}
            <span className="font-semibold text-foreground">dinâmicos, divertidos e eficazes</span> para todas as idades e níveis.
          </p>

          <a href="#planos">
            <Button className="bg-swim-orange hover:bg-swim-orange/90 text-white font-body font-bold text-base md:text-lg px-8 md:px-12 py-6 md:py-7 rounded-2xl shadow-xl shadow-swim-orange/40 hover:scale-105 transition-all duration-200 mb-10 w-full md:w-auto">
              👉 QUERO ACESSAR AGORA
            </Button>
          </a>

          {/* Trust badges row */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full text-xs font-semibold text-foreground shadow-sm border border-border">
              ✅ Acesso imediato
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full text-xs font-semibold text-foreground shadow-sm border border-border">
              🛡️ 7 dias de garantia
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full text-xs font-semibold text-foreground shadow-sm border border-border">
              💳 Pix ou Cartão
            </span>
          </div>

          {/* Timer */}
          <div className="mt-10 bg-white border border-border rounded-2xl p-5 shadow-lg max-w-md mx-auto">
            <p className="font-body text-sm text-muted-foreground mb-3 uppercase tracking-wider font-bold">
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
