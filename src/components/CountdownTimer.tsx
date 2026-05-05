import { useState, useEffect } from "react";

interface CountdownTimerProps {
  compact?: boolean;
}

const CountdownTimer = ({ compact = false }: CountdownTimerProps) => {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const getEndOfDay = () => {
      const now = new Date();
      const end = new Date(now);
      end.setHours(23, 59, 59, 999);
      return end;
    };

    const updateTimer = () => {
      const now = new Date();
      const end = getEndOfDay();
      const diff = end.getTime() - now.getTime();

      if (diff <= 0) {
        setTime({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTime({
        hours: Math.floor(diff / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, "0");

  if (compact) {
    return (
      <span className="font-body font-bold text-primary-foreground tabular-nums">
        {pad(time.hours)}:{pad(time.minutes)}:{pad(time.seconds)}
      </span>
    );
  }

  return (
    <div className="flex items-center justify-center gap-3">
      {[
        { value: time.hours, label: "Horas" },
        { value: time.minutes, label: "Min" },
        { value: time.seconds, label: "Seg" },
      ].map((item, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="bg-foreground/90 text-background font-body font-bold text-2xl md:text-3xl rounded-lg w-16 md:w-20 h-16 md:h-20 flex items-center justify-center tabular-nums animate-countdown">
            {pad(item.value)}
          </div>
          <span className="text-xs mt-1 text-muted-foreground font-body uppercase tracking-wider">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;