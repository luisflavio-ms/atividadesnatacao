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
          {/* Product Mockup */}
          <div className="mb-10 flex justify-center">
            <div className="relative w-full max-w-[450px] aspect-[16/10]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-2xl" />
              <div className="relative h-full w-full bg-card border-2 border-primary/20 rounded-2xl shadow-2xl overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors" />
                
                {/* Visual representation of an ebook/digital course */}
                <div className="flex h-full">
                  <div className="w-1/3 bg-gradient-to-b from-primary to-primary-dark p-4 flex flex-col justify-between text-white text-left">
                    <div className="text-xl md:text-2xl font-display font-bold leading-tight">Aqua Atividades</div>
                    <div className="text-[10px] opacity-70 uppercase tracking-widest font-bold">Guia Prático</div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-center items-center text-center space-y-4">
                    <div className="w-16 h-1 bg-primary/20 rounded-full" />
                    <div className="text-2xl md:text-3xl font-display font-bold text-primary italic">+300</div>
                    <div className="text-xs md:text-sm font-body font-semibold text-muted-foreground uppercase tracking-widest">Atividades de Natação</div>
                    <div className="w-12 h-1 bg-secondary/20 rounded-full" />
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm">🏊</div>
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm">⚡</div>
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm">✨</div>
                    </div>
                  </div>
                </div>

                {/* Glass reflection effect */}
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
              </div>

              {/* Badges/Floating elements */}
              <div className="absolute -top-3 -right-3 bg-accent text-accent-foreground font-bold py-1.5 px-3 rounded-lg shadow-lg rotate-12 text-[10px] md:text-xs z-10 border border-accent-foreground/10">
                MATERIAL DIGITAL
              </div>
              <div className="absolute -bottom-3 -left-3 bg-primary text-primary-foreground font-bold py-1.5 px-3 rounded-lg shadow-lg -rotate-6 text-[10px] md:text-xs z-10">
                PDF PARA DOWNLOAD
              </div>
            </div>
          </div>

          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-body font-semibold text-xs md:text-sm px-4 py-2 rounded-full mb-6">
            🏊 OFERTA ESPECIAL — SÓ HOJE {today}
          </div>

          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-5">
            Mais de <span className="text-gradient">300 atividades de natação</span> para transformar suas aulas em <span className="text-gradient">experiências inesquecíveis</span>
          </h1>
          <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Tenha acesso a um acervo completo de atividades práticas, divertidas e fáceis de aplicar para tornar suas aulas mais dinâmicas, engajar seus alunos e aumentar a satisfação dentro da piscina.
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
