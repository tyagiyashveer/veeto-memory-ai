import { useState } from "react";
import { Brain, CheckCircle2 } from "lucide-react";

const struggles = [
  "Forgetting people",
  "Missing follow-ups",
  "Tracking conversations",
  "Other",
];

const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const [struggle, setStruggle] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="waitlist" className="relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-veeto-purple/8 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-veeto-pink/6 blur-[100px]" />
      </div>

      <div className="veeto-section relative">
        <div className="max-w-lg mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Be among the first to <span className="veeto-gradient-text">never forget again.</span>
            </h2>
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
                <label htmlFor="email" className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                <input
                  id="email"
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

              <button type="submit" className="veeto-btn-primary w-full justify-center">
                Join the Waitlist
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
