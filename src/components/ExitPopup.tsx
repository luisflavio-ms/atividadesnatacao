import { useState } from "react";
import { X, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

const ExitPopup = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      {!show && (
        <button
          onClick={() => setShow(true)}
          className="fixed bottom-6 right-6 z-50 bg-primary hover:brightness-110 text-primary-foreground p-4 rounded-full shadow-[0_4px_20px_hsl(205_85%_45%/0.5)] hover:scale-110 transition-transform animate-bounce flex items-center justify-center group"
          aria-label="Presente surpresa"
        >
          <Gift size={28} className="group-hover:rotate-12 transition-transform" />
          <span className="absolute -top-12 right-0 bg-background text-foreground text-sm font-bold px-3 py-1.5 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block border border-border">
            Resgatar Presente 🎁
          </span>
        </button>
      )}

      {show && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/60 backdrop-blur-sm p-4">
          <div className="bg-background rounded-2xl p-6 md:p-8 max-w-md w-full relative shadow-2xl animate-fade-in-up">
            <button onClick={() => setShow(false)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground hover:bg-muted p-1 rounded-full transition-colors">
              <X size={20} />
            </button>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="text-primary" size={32} />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">
                Seu Presente Especial!
              </h3>
              <p className="text-muted-foreground font-body text-[15px] mb-5">
                Para te ajudar a dar o primeiro passo, aproveite nosso material com <span className="font-bold text-primary">garantia total de 7 dias</span>. Se não gostar, devolvemos seu dinheiro!
              </p>

              <a href="#planos">
                <Button
                  className="w-full bg-gradient-cta text-primary-foreground font-body font-bold text-lg py-6 rounded-xl animate-pulse-soft shadow-lg"
                  onClick={() => setShow(false)}
                >
                  QUERO APROVEITAR POR R$10!
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ExitPopup;