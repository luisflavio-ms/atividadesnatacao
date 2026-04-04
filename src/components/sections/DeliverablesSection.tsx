import { FileText, Layers, CheckCircle, Download, Printer } from "lucide-react";

const items = [
  { icon: FileText, text: "70 dinâmicas de yoga em PDF de alta qualidade" },
  { icon: Layers, text: "Organizadas por nível, objetivo e duração" },
  { icon: CheckCircle, text: "Prontas para aplicar — sem adaptação necessária" },
  { icon: Download, text: "Acesso digital imediato após a compra" },
  { icon: Printer, text: "Material 100% imprimível para usar no estúdio" },
];

const DeliverablesSection = () => (
  <section className="py-12 md:py-16 bg-background">
    <div className="container">
      <h2 className="font-display text-xl md:text-3xl font-bold text-center text-foreground mb-8">
        O Que Você Vai <span className="text-gradient">Receber</span>
      </h2>
      <ul className="max-w-xl mx-auto space-y-2">
        {items.map((item, i) => (
          <li
            key={i}
            className="scroll-fade flex items-center gap-3 py-2"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="w-7 h-7 bg-secondary/15 rounded-lg flex items-center justify-center flex-shrink-0">
              <item.icon className="text-secondary" size={14} />
            </div>
            <p className="font-body text-foreground text-sm leading-snug">{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default DeliverablesSection;
