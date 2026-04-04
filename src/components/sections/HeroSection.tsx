import { useEffect, useRef, useState } from "react";
import CountdownTimer from "@/components/CountdownTimer";
import { Button } from "@/components/ui/button";
import { Play, Volume2, VolumeX } from "lucide-react";
const VideoPlayer = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let hlsInstance: any = null;
    const video = videoRef.current;

    if (!video) return;

    const canPlayNative = video.canPlayType("application/vnd.apple.mpegurl");

    if (canPlayNative) {
      video.src = src;
      video.addEventListener("loadedmetadata", () => {
        video.play().catch(e => console.error("Autoplay prevented:", e));
      });
    } else if (typeof window !== "undefined" && window.MediaSource) {
      import("hls.js").then((module) => {
        const Hls = module.default;
        if (Hls.isSupported()) {
          hlsInstance = new Hls({
            startLevel: -1,
            capLevelToPlayerSize: true,
          });
          hlsInstance.loadSource(src);
          hlsInstance.attachMedia(video);
          hlsInstance.on(Hls.Events.MANIFEST_PARSED, () => {
            video.play().catch(e => console.error("Autoplay prevented:", e));
          });
        }
      });
    }

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      if (hlsInstance) hlsInstance.destroy();
    };
  }, [src]);

  const toggleMute = () => {
    if (videoRef.current) {
      if (isMuted) {
        // When unmuting for the first time, ensure Volume is up and reset to start if it's a short VSL
        videoRef.current.muted = false;
        videoRef.current.volume = 1;

        // Optional: restart video from beginning when unmuting
        if (videoRef.current.currentTime > 0) {
          videoRef.current.currentTime = 0;
        }
      } else {
        videoRef.current.muted = true;
      }
      setIsMuted(videoRef.current.muted);

      if (!isPlaying) {
        videoRef.current.play().catch(console.error);
      }
    }
  };

  return (
    <div className="relative w-full max-w-sm mx-auto overflow-hidden rounded-3xl shadow-2xl bg-black aspect-[9/16] group cursor-pointer border-4 border-white/20" onClick={toggleMute}>
      {/* Blurred background to fill any gaps if object-cover is not desired, but we'll use object-cover */}
      <video
        ref={videoRef}
        playsInline
        muted={isMuted}
        autoPlay
        loop
        className="w-full h-full object-cover"
      />

      {isMuted && (
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center transition-opacity duration-300">
          <div className="bg-[#10b981] text-white animate-bounce shadow-[0_10px_40px_rgba(16,185,129,0.6)] rounded-full py-4 px-6 flex items-center justify-center gap-3 transform transition-transform hover:scale-105">
            <VolumeX size={28} className="stroke-[2.5]" />
            <span className="font-body font-bold text-lg md:text-xl">Clique para ativar o som</span>
          </div>
        </div>
      )}

      {/* Mute/Unmute toggle button when playing with sound */}
      {!isMuted && (
        <div className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 p-3 rounded-full text-white backdrop-blur-sm transition-colors opacity-0 group-hover:opacity-100">
          {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
        </div>
      )}
    </div>
  );
};

const HeroSection = () => {
  const today = new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" });

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-muted via-background to-background pt-8 pb-12 md:pt-16 md:pb-20">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-body font-semibold text-xs md:text-sm px-4 py-2 rounded-full mb-6">
            🔥 DESCONTO SÓ HOJE {today}
          </div>

          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-5">
            Transforme Suas Aulas de Yoga com{" "}
            <span className="text-gradient">70 Dinâmicas Prontas e Poderosas</span>
          </h1>

          <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Economize horas de planejamento e encante seus alunos com práticas criativas, envolventes e fáceis de aplicar.
          </p>

          {/* Video Player */}
          <div className="mt-4 md:mt-8 mb-8">
            <VideoPlayer src="https://cdn.fastmotion.io/6b4b3f92-49a2-4a52-9df9-4adc04823dec/playlist.m3u8" />
          </div>

          <a href="#planos">
            <Button className="bg-gradient-cta text-primary-foreground font-body font-bold text-base md:text-lg px-8 md:px-12 py-6 md:py-7 rounded-xl shadow-lg animate-pulse-soft hover:brightness-110 transition-all mb-10 w-full md:w-auto">
              👉 QUERO ACESSAR AGORA
            </Button>
          </a>

          {/* Timer */}
          <div className="mt-12">
            <p className="font-body text-sm text-muted-foreground mb-3 uppercase tracking-wider font-semibold">⏰ Oferta expira em:</p>
            <CountdownTimer />
          </div>

          {/* Social proof */}
          <p className="mt-6 font-body text-[15px] text-muted-foreground">
            🔥 <span className="font-bold text-foreground">+1.736 pessoas</span> já compraram
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;