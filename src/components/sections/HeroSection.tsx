import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";

const HeroSection = () => {
  const today = new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" });
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const src = "https://cdn.fastmotion.io/21d87051-c4ec-4a84-845a-7afb76d15b08/playlist.m3u8";

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });
      return () => hls.destroy();
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      video.addEventListener("loadedmetadata", () => {
        video.play().catch(() => {});
      });
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      {/* Banner vermelho topo */}
      <div className="w-full bg-red-600 text-white text-center py-2.5 px-4">
        <p className="font-body font-bold text-sm md:text-base">⚡ OFERTA ESPECIAL DISPONÍVEL APENAS HOJE {today}</p>
      </div>

      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background pt-8 pb-12 md:pt-16 md:pb-20">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-5">
              Transforme cada aula num momento que seus alunos <span className="text-gradient">vão querer repetir</span>
            </h1>

            <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              300 atividades criativas e eficazes para crianças, jovens e adultos — do iniciante ao avançado, prontas
              para usar amanhã.
            </p>

            {/* VSL Video */}
            <div className="relative max-w-2xl mx-auto mb-8 rounded-2xl overflow-hidden shadow-2xl border border-border">
              <video
                ref={videoRef}
                className="w-full aspect-video bg-black"
                muted
                autoPlay
                playsInline
              />
              <button
                onClick={toggleMute}
                className="absolute bottom-4 right-4 flex items-center gap-2 bg-foreground/80 hover:bg-foreground text-background font-body font-bold text-sm px-4 py-2.5 rounded-full backdrop-blur-sm transition-all shadow-lg"
              >
                {isMuted ? (
                  <>
                    <VolumeX className="w-4 h-4" />
                    Clique para ativar o som
                  </>
                ) : (
                  <>
                    <Volume2 className="w-4 h-4" />
                    Som ativado
                  </>
                )}
              </button>
            </div>

            <a href="#planos">
              <Button className="bg-gradient-cta text-primary-foreground font-body font-bold text-base md:text-lg px-8 md:px-12 py-6 md:py-7 rounded-xl shadow-lg animate-pulse-soft hover:brightness-110 transition-all mb-10 w-full md:w-auto">
                QUERO ACESSAR AGORA
              </Button>
            </a>
            {/* Social proof */}
            <p className="mt-6 font-body text-[15px] text-muted-foreground">
              🔥 <span className="font-bold text-foreground">+2.450 professores</span> já compraram
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
