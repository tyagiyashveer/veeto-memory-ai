import { useState } from "react";
import { Loader2, CheckCircle2, User, Building2, FileText, Clock, CalendarCheck } from "lucide-react";
import { submitWaitlist } from "@/lib/waitlist";

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
            <div className="relative w-full max-w-[320px]">
              <div className="absolute -inset-10 veeto-gradient-bg blur-3xl opacity-20 rounded-full" aria-hidden="true" />
              {/* Phone frame */}
              <div className="relative bg-foreground rounded-[2.5rem] p-2 shadow-2xl animate-float" style={{ boxShadow: "var(--veeto-glow)" }}>
                <div className="bg-background rounded-[2rem] overflow-hidden aspect-[9/19]">
                  {/* Notch */}
                  <div className="relative h-7 flex items-center justify-center">
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-foreground rounded-full" />
                  </div>
                  {/* Screen content */}
                  <div className="px-5 pt-4 pb-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">AI Memory</span>
                      <span className="w-2 h-2 rounded-full veeto-gradient-bg animate-pulse" />
                    </div>

                    {/* Profile card */}
                    <div className="rounded-2xl p-4 veeto-gradient-bg text-primary-foreground">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-base font-bold mb-2">R</div>
                      <p className="text-base font-bold">Ramesh Kumar</p>
                      <p className="text-xs opacity-80">TCS</p>
                    </div>

                    {/* Fields */}
                    <div className="space-y-2.5">
                      {[
                        { icon: User, label: "Name", value: "Ramesh Kumar" },
                        { icon: Building2, label: "Company", value: "TCS" },
                        { icon: FileText, label: "Summary", value: "Interested in pricing" },
                        { icon: Clock, label: "Last met", value: "2 weeks ago" },
                        { icon: CalendarCheck, label: "Action", value: "Follow up next week" },
                      ].map((f, i) => (
                        <div key={i} className="flex items-start gap-2.5 py-1.5">
                          <f.icon className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <div className="min-w-0 flex-1">
                            <p className="text-[9px] font-medium text-muted-foreground uppercase tracking-wider">{f.label}</p>
                            <p className="text-[11px] font-semibold text-foreground truncate">{f.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
