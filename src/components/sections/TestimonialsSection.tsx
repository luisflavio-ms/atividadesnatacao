import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import wpp1 from "@/assets/wpp1.webp";
import wpp2 from "@/assets/wpp2.webp";
import wpp3 from "@/assets/wpp3.webp";
import wpp4 from "@/assets/wpp4.webp";
import wpp5 from "@/assets/wpp5.webp";

const screenshots = [wpp1, wpp2, wpp3, wpp4, wpp5];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? screenshots.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === screenshots.length - 1 ? 0 : c + 1));

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <h2 className="font-display text-2xl md:text-4xl font-bold text-center text-foreground mb-12">
          O que dizem <span className="text-gradient">nossos clientes</span>
        </h2>

        <div className="relative max-w-sm mx-auto">
          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute -left-4 md:-left-14 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border shadow-lg flex items-center justify-center hover:bg-accent transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft size={20} className="text-foreground" />
          </button>
          <button
            onClick={next}
            className="absolute -right-4 md:-right-14 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border shadow-lg flex items-center justify-center hover:bg-accent transition-colors"
            aria-label="Próximo"
          >
            <ChevronRight size={20} className="text-foreground" />
          </button>

          {/* Image */}
          <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
            <img src={screenshots[current]} alt={`Depoimento ${current + 1}`} className="w-full h-auto" />
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {screenshots.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === current ? "bg-primary" : "bg-muted-foreground/30"
                }`}
                aria-label={`Ir para depoimento ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
