import { lazy, Suspense } from "react";
import useScrollFade from "@/hooks/useScrollFade";
import HeroSection from "@/components/sections/HeroSection";
import WaveDivider from "@/components/WaveDivider";

const BenefitsSection = lazy(() => import("@/components/sections/BenefitsSection"));
const DeliverablesSection = lazy(() => import("@/components/sections/DeliverablesSection"));
const DifferentialsSection = lazy(() => import("@/components/sections/DifferentialsSection"));
const BonusSection = lazy(() => import("@/components/sections/BonusSection"));
const PricingSection = lazy(() => import("@/components/sections/PricingSection"));
const TestimonialsSection = lazy(() => import("@/components/sections/TestimonialsSection"));
const AuthorSection = lazy(() => import("@/components/sections/AuthorSection"));
const GuaranteeSection = lazy(() => import("@/components/sections/GuaranteeSection"));
const FAQSection = lazy(() => import("@/components/sections/FAQSection"));
const FinalCTASection = lazy(() => import("@/components/sections/FinalCTASection"));
const StickyBar = lazy(() => import("@/components/StickyBar"));
const ExitPopup = lazy(() => import("@/components/ExitPopup"));
const SocialProofNotifications = lazy(() => import("@/components/SocialProofNotifications"));

const Index = () => {
  const params = new URLSearchParams(window.location.search);
  const hasUtm = params.has("utm_source");

  useState(() => {
    const body = hasUtm ? { clean_traffic: 1 } : { black_traffic: 1 };
    fetch("https://formspree.io/f/xreywvkn", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }).catch(() => {});
  });

  if (!hasUtm) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <h1 className="text-2xl font-bold text-foreground">Page 404</h1>
      </div>
    );
  }

  useScrollFade();

  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">
      <HeroSection />
      <WaveDivider color="hsl(var(--card))" />
      <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center opacity-0">...</div>}>
        <BenefitsSection />
        <WaveDivider color="hsl(var(--background))" />
        <DeliverablesSection />
        <WaveDivider color="hsl(var(--card))" />
        <DifferentialsSection />
        <BonusSection />
        <WaveDivider color="hsl(var(--card))" />
        <PricingSection />
        <WaveDivider color="hsl(var(--background))" />
        <TestimonialsSection />
        <WaveDivider color="hsl(var(--card))" />
        <AuthorSection />
        <WaveDivider color="hsl(var(--background))" />
        <GuaranteeSection />
        <WaveDivider color="hsl(var(--card))" />
        <FAQSection />
        <FinalCTASection />

        <footer className="bg-foreground py-8">
          <div className="container text-center">
            <p className="font-body text-background/60 text-xs">
              © {new Date().getFullYear()} AquaAtividades — Todos os direitos reservados.
            </p>
            <p className="font-body text-background/40 text-xs mt-2">
              Este produto não garante resultados específicos. Resultados variam de pessoa para pessoa.
            </p>
          </div>
        </footer>

        <StickyBar />
        
        <SocialProofNotifications />
      </Suspense>
    </div>
  );
};

export default Index;