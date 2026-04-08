import { Zap, Clock, GitBranch } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Effortless",
    description: "No typing. Just talk.",
  },
  {
    icon: Clock,
    title: "Instant",
    description: "Structured memory in seconds.",
  },
  {
    icon: GitBranch,
    title: "Connected",
    description: "Every interaction builds context.",
  },
];

const ValueSection = () => {
  return (
    <section className="relative bg-veeto-soft-bg">
      <div className="veeto-section">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Why Veeto is <span className="veeto-gradient-text">different</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {values.map((v, i) => (
            <div key={i} className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-2xl veeto-gradient-bg flex items-center justify-center shadow-lg" style={{ boxShadow: "var(--veeto-glow)" }}>
                <v.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{v.title}</h3>
              <p className="text-muted-foreground">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
