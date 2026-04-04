import { Button } from "@/components/ui/button";

const FinalCTASection = () => (
  <section className="py-16 md:py-24 bg-gradient-to-b from-background to-card">
    <div className="container">
      <div className="max-w-2xl mx-auto text-center scroll-fade">
        <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
          Não Perca Essa Oportunidade de{" "}
          <span className="text-gradient">Transformar Suas Aulas Hoje</span>
        </h2>
        <p className="font-body text-muted-foreground mb-8 text-sm md:text-base">
          O preço promocional é por tempo limitado. Garanta seu acesso agora e comece a transformação.
        </p>
        <a href="#planos">
          <Button className="bg-gradient-cta text-primary-foreground font-body font-bold text-base md:text-lg px-10 md:px-14 py-6 md:py-7 rounded-xl shadow-lg animate-pulse-soft hover:brightness-110 transition-all">
            👉 QUERO ACESSAR AGORA
          </Button>
        </a>
        <p className="mt-6 font-body text-xs text-muted-foreground">
          🔒 Pagamento 100% seguro • Acesso imediato • Garantia de 7 dias
        </p>
      </div>
    </div>
  </section>
);

export default FinalCTASection;