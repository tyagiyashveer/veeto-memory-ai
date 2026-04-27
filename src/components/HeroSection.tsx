import { useState } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";
import { submitWaitlist } from "@/lib/waitlist";
import PhoneMockup from "./PhoneMockup";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const result = await submitWaitlist({ email, source: "hero" });
    setLoading(false);
    if (result.ok) {
      setSubmitted(true);
      setEmail("");
    } else {
      setError(result.error ?? "Something went wrong");
    }
  };

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
              {submitted ? (
                <div className="veeto-card flex items-center gap-3" style={{ boxShadow: "var(--veeto-glow)" }}>
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">You're on the list!</p>
                    <p className="text-sm text-muted-foreground">We'll be in touch soon.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 p-2 bg-card border border-border rounded-2xl shadow-lg" style={{ boxShadow: "var(--veeto-glow)" }}>
                  <input
                    id="hero-email-input"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="flex-1 px-4 py-3 bg-transparent text-foreground text-base placeholder:text-muted-foreground focus:outline-none"
                    aria-label="Email address"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="veeto-btn-primary !px-6 !py-3 !text-sm whitespace-nowrap disabled:opacity-70"
                  >
                    {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Get early access"}
                  </button>
                </form>
              )}
              {error && <p className="text-sm text-destructive px-2">{error}</p>}

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
