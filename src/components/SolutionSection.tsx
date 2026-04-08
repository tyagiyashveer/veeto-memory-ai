import { Mic, Sparkles, Search } from "lucide-react";

const steps = [
  {
    icon: Mic,
    step: "01",
    title: "Capture",
    description: "Send a voice note, text, or image",
  },
  {
    icon: Sparkles,
    step: "02",
    title: "Understand",
    description: "Veeto extracts who, what, and what matters",
  },
  {
    icon: Search,
    step: "03",
    title: "Remember",
    description: "Everything is organized and searchable",
  },
];

const SolutionSection = () => {
  return (
    <section className="relative">
      <div className="veeto-section">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Veeto remembers <span className="veeto-gradient-text">everything</span> for you.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <div key={i} className="relative group text-center space-y-5">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-border" />
              )}
              <div className="relative mx-auto w-20 h-20 rounded-2xl veeto-gradient-bg flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105" style={{ boxShadow: "var(--veeto-glow)" }}>
                <s.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Step {s.step}</span>
                <h3 className="text-xl font-bold text-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
