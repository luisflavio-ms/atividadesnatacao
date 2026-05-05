import { FileText, Layers, CheckCircle, Download, Printer } from "lucide-react";

const items = [
  { icon: FileText, text: "300 atividades de natação de alta qualidade", color: "text-swim-blue", bg: "bg-swim-blue/15" },
  { icon: Layers, text: "Organizadas por faixa etária, nível e objetivo", color: "text-swim-aqua", bg: "bg-swim-aqua/15" },
  { icon: CheckCircle, text: "Prontas para aplicar — sem adaptação necessária", color: "text-secondary", bg: "bg-secondary/15" },
  { icon: Download, text: "Acesso digital imediato após a compra", color: "text-swim-orange", bg: "bg-swim-orange/15" },
  { icon: Printer, text: "Material 100% imprimível para usar na piscina", color: "text-swim-gold", bg: "bg-swim-gold/20" },
];

const DeliverablesSection = () => (
  <section className="py-14 md:py-20 bg-background">
    <div className="container">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
        O Que Você Vai <span className="text-primary">Receber</span>
      </h2>
      <ul className="max-w-2xl mx-auto space-y-3">
        {items.map((item, i) => (
          <li
            key={i}
            className="scroll-fade flex items-center gap-4 bg-card border border-border rounded-xl px-4 py-3 hover:border-primary/40 hover:shadow-md transition-all"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className={`w-10 h-10 ${item.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
              <item.icon className={item.color} size={18} />
            </div>
            <p className="font-body text-foreground text-sm md:text-base font-medium leading-snug">{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default DeliverablesSection;
