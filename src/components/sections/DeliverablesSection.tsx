import { FileText, Layers, CheckCircle, Download, Printer, Smartphone, Infinity as InfinityIcon } from "lucide-react";

const items = [
  { icon: FileText, text: "300 atividades de natação prontas para aplicar" },
  { icon: Layers, text: "Organizadas por faixa etária, nível e objetivo da aula" },
  { icon: CheckCircle, text: "Para aquecimento, técnica, resistência, jogos e volta à calma" },
  { icon: Smartphone, text: "Acesso pelo celular, tablet ou computador à beira da piscina" },
  { icon: Download, text: "Acesso digital imediato após a confirmação" },
  { icon: Printer, text: "Material 100% imprimível para levar para a aula" },
  { icon: InfinityIcon, text: "Acesso vitalício — consulte sempre que precisar" },
];

const DeliverablesSection = () => (
  <section className="py-12 md:py-16 bg-background">
    <div className="container">
      <div className="max-w-2xl mx-auto text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-body font-bold text-xs px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
          ⚡ Acesso imediato
        </div>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
          Tudo o Que Você Vai <span className="text-gradient">Receber Hoje</span>
        </h2>
        <p className="font-body text-muted-foreground text-sm md:text-base">
          Pague uma única vez e use na sua próxima aula — sem mensalidades, sem enrolação.
        </p>
      </div>
      <ul className="max-w-xl mx-auto space-y-2">
        {items.map((item, i) => (
          <li key={i} className="scroll-fade flex items-center gap-3 py-2" style={{ animationDelay: `${i * 60}ms` }}>
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
