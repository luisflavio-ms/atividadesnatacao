import CountdownTimer from "./CountdownTimer";

const StickyBar = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-gradient-cta shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
    <div className="flex items-center justify-between px-4 py-3">
      <div className="flex items-center gap-2">
        <span className="text-primary-foreground/80 text-xs font-body">Expira em:</span>
        <CountdownTimer compact />
      </div>
      <a href="#planos">
        <button className="bg-yoga-orange text-foreground font-body font-bold text-sm px-5 py-2.5 rounded-full shadow-lg hover:brightness-110 transition-all">
          COMPRAR AGORA
        </button>
      </a>
    </div>
  </div>
);

export default StickyBar;