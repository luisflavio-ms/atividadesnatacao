import CountdownTimer from "@/components/CountdownTimer";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const today = new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" });

  return (
    <section className="relative overflow-hidden bg-gradient-hero pt-8 pb-16 md:pt-16 md:pb-24">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-swim-aqua/30 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 animate-float" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-swim-sky/30 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 animate-float-slow" />
      <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-swim-gold/20 rounded-full blur-2xl animate-float" />

      {/* Floating bubbles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[
          { left: "8%", size: 14, delay: "0s", dur: "9s" },
          { left: "22%", size: 22, delay: "2s", dur: "11s" },
          { left: "38%", size: 10, delay: "4s", dur: "8s" },
          { left: "55%", size: 18, delay: "1s", dur: "10s" },
          { left: "72%", size: 28, delay: "3s", dur: "12s" },
          { left: "88%", size: 12, delay: "5s", dur: "9s" },
        ].map((b, i) => (
          <span
            key={i}
            className="absolute bottom-0 rounded-full bg-white/60 border border-white/80 shadow-[inset_0_0_8px_rgba(255,255,255,0.8)]"
            style={{
              left: b.left,
              width: b.size,
              height: b.size,
              animation: `bubble ${b.dur} linear ${b.delay} infinite`,
            }}
          />
        ))}
      </div>

      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-swim-orange to-swim-gold text-white font-body font-bold text-xs md:text-sm px-5 py-2.5 rounded-full mb-6 shadow-lg shadow-swim-orange/30 animate-pulse-soft">
            🏊 OFERTA ESPECIAL — SÓ HOJE {today}
          </div>

          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-5 tracking-tight">
            <span className="text-gradient-vivid animate-shimmer">300 Atividades</span> prontas e criativas para transformar suas Aulas de Natação +{" "}
            <span className="relative inline-block">
              <span className="text-gradient-vivid animate-shimmer">bônus</span>
              <span className="absolute -bottom-1 left-0 right-0 h-2 bg-swim-gold/40 -z-10 rounded-full" />
            </span>
          </h1>
          <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Economize horas de planejamento e surpreenda seus alunos com exercícios{" "}
            <span className="font-semibold text-foreground">dinâmicos, divertidos e eficazes</span> para todas as idades e níveis.
          </p>

          <a href="#planos">
            <Button className="bg-gradient-to-r from-swim-orange via-swim-gold to-swim-orange bg-[length:200%_auto] hover:bg-[position:right_center] text-white font-body font-bold text-base md:text-lg px-8 md:px-12 py-6 md:py-7 rounded-2xl shadow-2xl shadow-swim-orange/40 animate-pulse-soft hover:scale-105 transition-all duration-300 mb-10 w-full md:w-auto">
              👉 QUERO ACESSAR AGORA
            </Button>
          </a>

          {/* Trust badges row */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="inline-flex items-center gap-1.5 bg-white/70 backdrop-blur px-3 py-1.5 rounded-full text-xs font-semibold text-foreground shadow-sm border border-white">
              ✅ Acesso imediato
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/70 backdrop-blur px-3 py-1.5 rounded-full text-xs font-semibold text-foreground shadow-sm border border-white">
              🛡️ 7 dias de garantia
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/70 backdrop-blur px-3 py-1.5 rounded-full text-xs font-semibold text-foreground shadow-sm border border-white">
              💳 Pix ou Cartão
            </span>
          </div>

          {/* Timer */}
          <div className="mt-10 bg-white/60 backdrop-blur-sm border border-white rounded-2xl p-5 shadow-lg max-w-md mx-auto">
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
