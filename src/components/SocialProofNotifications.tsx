import { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";

const firstNames = [
  "Marcos", "Ana", "Carlos", "Fernanda", "Lucas", "Patrícia", "Rafael", "Beatriz",
  "André", "Renata", "Bruno", "Vanessa", "Diego", "Larissa", "Gabriela",
  "Amanda", "Thiago", "Daniela", "Eduardo", "Flávia", "Helena", "Gustavo", "Karina",
  "Leonardo", "Michele", "Natália", "Pedro", "Raquel", "Sandra", "Thaís",
];

const cities = [
  "São Paulo", "Rio de Janeiro", "Belo Horizonte", "Curitiba", "Porto Alegre",
  "Salvador", "Brasília", "Fortaleza", "Recife", "Florianópolis", "Goiânia",
  "Campinas", "Manaus", "Belém", "Vitória", "Natal", "João Pessoa",
];

const getRandom = <T,>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];
const getMinutesAgo = () => Math.floor(Math.random() * 12) + 1;

const SocialProofNotifications = () => {
  const [visible, setVisible] = useState(false);
  const [notification, setNotification] = useState({ name: "", city: "", minutes: 0 });

  useEffect(() => {
    const showNotification = () => {
      setNotification({
        name: getRandom(firstNames),
        city: getRandom(cities),
        minutes: getMinutesAgo(),
      });
      setVisible(true);
      setTimeout(() => setVisible(false), 4000);
    };

    const initialTimeout = setTimeout(showNotification, 8000);
    const interval = setInterval(() => {
      showNotification();
    }, 15000 + Math.random() * 10000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-20 md:bottom-6 left-4 z-50 max-w-[300px] bg-background border border-border rounded-xl shadow-2xl p-3 flex items-center gap-3 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
        <ShoppingCart size={16} className="text-primary" />
      </div>
      <div className="min-w-0">
        <p className="font-body text-xs font-semibold text-foreground truncate">
          {notification.name} de {notification.city}
        </p>
        <p className="font-body text-[11px] text-muted-foreground">
          comprou há {notification.minutes} min
        </p>
      </div>
    </div>
  );
};

export default SocialProofNotifications;