import { ArrowDown } from "lucide-react";
import heroVisual from "@/assets/hero-visual.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-veeto-purple/10 blur-[120px] animate-pulse-glow" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-veeto-pink/8 blur-[100px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-veeto-blue/5 blur-[140px]" />
      </div>

      <div className="veeto-section w-full pt-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="space-y-8">
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card text-sm text-muted-foreground mb-6">
                <span className="w-2 h-2 rounded-full veeto-gradient-bg animate-pulse" />
                Your personal memory assistant
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] animate-fade-up-delay-1">
              Never forget a<br />
              <span className="veeto-gradient-text">person again.</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed animate-fade-up-delay-2">
              Veeto AI remembers every conversation—so you don't have to. Just speak, type, or snap. Veeto turns it into structured memory instantly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-delay-3">
              <a href="#waitlist" className="veeto-btn-primary">
                Join the Waitlist
              </a>
              <a href="#demo" className="veeto-btn-secondary">
                See how it works
                <ArrowDown className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative animate-fade-up-delay-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ boxShadow: "var(--veeto-glow)" }}>
              <img
                src={heroVisual}
                alt="Veeto AI transforming voice notes into structured memory"
                className="w-full h-auto"
                width={1280}
                height={896}
              />
            </div>
            {/* Floating card accent */}
            <div className="absolute -bottom-4 -left-4 bg-card border border-border/50 rounded-xl p-3 shadow-lg animate-float hidden sm:block">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full veeto-gradient-bg flex items-center justify-center text-primary-foreground text-xs font-bold">R</div>
                <div>
                  <p className="text-xs font-semibold text-foreground">Ramesh — TCS</p>
                  <p className="text-[10px] text-muted-foreground">Follow up next week</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-card border border-border/50 rounded-xl px-3 py-2 shadow-lg animate-float-delayed hidden sm:block">
              <p className="text-xs font-medium text-muted-foreground">Memory saved ✓</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
