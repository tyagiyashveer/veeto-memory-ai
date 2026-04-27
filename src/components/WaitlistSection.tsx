import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { submitWaitlist } from "@/lib/waitlist";
import SocialProof from "./SocialProof";

const struggles = [
  "Forgetting people",
  "Missing follow-ups",
  "Losing context",
  "Maintaining relationships",
];

const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const [struggle, setStruggle] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const result = await submitWaitlist({
      email,
      source: "footer_cta",
      struggle: struggle || null,
    });
    setLoading(false);
    if (result.ok) setSubmitted(true);
    else setError(result.error ?? "Something went wrong");
  };

  return (
    <section id="waitlist" className="relative band-indigo overflow-hidden">
      <div className="grain" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-veeto-coral/15 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-veeto-yellow/10 blur-[100px]" />
      </div>

      <div className="veeto-section relative">
        <SocialProof />

        <div className="max-w-lg mx-auto text-center space-y-8">
          <div className="space-y-3">
            <span className="font-handwritten text-2xl text-veeto-yellow inline-block -rotate-2">
              ~ last call ~
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05]">
              Get early access <span className="italic" style={{ background: "linear-gradient(90deg, hsl(var(--veeto-yellow)), hsl(var(--veeto-coral)))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>before launch.</span>
            </h2>
            <p className="text-base text-white/80">
              We're rolling out Veeto in waves. Join the waitlist to be first in line.
            </p>
          </div>

          {submitted ? (
            <div className="veeto-card space-y-4 text-center" style={{ boxShadow: "var(--veeto-glow)" }}>
              <CheckCircle2 className="w-12 h-12 mx-auto text-primary" />
              <h3 className="text-xl font-bold text-foreground">You're on the list!</h3>
              <p className="text-muted-foreground">We'll reach out soon. Your memory upgrade is coming.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="veeto-card space-y-5 text-left" style={{ boxShadow: "var(--veeto-glow)" }}>
              <div>
                <label htmlFor="cta-email" className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                <input
                  id="cta-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">What do you struggle with most?</label>
                <div className="grid grid-cols-2 gap-2">
                  {struggles.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setStruggle(s)}
                      className={`px-3 py-2.5 rounded-xl border text-sm font-medium transition-all duration-200 ${
                        struggle === s
                          ? "border-primary bg-accent text-accent-foreground"
                          : "border-border bg-background text-muted-foreground hover:border-primary/30"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {error && <p className="text-sm text-destructive">{error}</p>}

              <button type="submit" disabled={loading} className="veeto-btn-primary w-full justify-center disabled:opacity-70">
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Claim my spot"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
