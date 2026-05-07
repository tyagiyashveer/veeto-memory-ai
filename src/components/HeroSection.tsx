import { useEarlyAccessModal } from "@/components/EarlyAccessModal";
import PhoneMockup from "./PhoneMockup";

const HeroSection = () => {
  const { open } = useEarlyAccessModal();

  const scrollToDemo = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-veeto-purple/10 blur-[120px] animate-pulse-glow" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-veeto-pink/8 blur-[100px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-veeto-blue/5 blur-[140px]" />
      </div>

      <div className="veeto-section w-full pt-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy + Form */}
          <div className="space-y-7 order-1">
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card text-sm text-muted-foreground">
                <span className="w-2 h-2 rounded-full veeto-gradient-bg animate-pulse" />
                Your personal memory assistant
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.08] animate-fade-up-delay-1">
              Your network is your net worth.{" "}
              <span className="veeto-gradient-text">Stop letting it slip away.</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed animate-fade-up-delay-2">
              Veeto AI turns every conversation, meeting, and introduction into structured, searchable memory. Speak it once — remember it forever. Walk into every follow-up with full context.
            </p>

            <div id="hero-waitlist" className="animate-fade-up-delay-3 space-y-3 max-w-lg scroll-mt-24">
              <button
                onClick={() => open()}
                className="veeto-btn-primary !px-7 !py-3.5 !text-base"
              >
                Get early access
              </button>

              <p className="text-xs text-muted-foreground px-2">
                🔒 End-to-end encrypted. You own your data. Delete anytime.
              </p>

              <a
                href="#demo"
                onClick={scrollToDemo}
                className="inline-block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2"
              >
                See how it works ↓
              </a>
            </div>
          </div>

          {/* Right: Phone mockup */}
          <div className="relative order-2 flex justify-center lg:justify-end animate-fade-up-delay-2">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
