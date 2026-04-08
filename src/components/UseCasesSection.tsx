import { TrendingUp, Rocket, Users, Heart } from "lucide-react";

const cases = [
  {
    icon: TrendingUp,
    title: "Sales & Business",
    description: "Never miss what a prospect said",
  },
  {
    icon: Rocket,
    title: "Founders",
    description: "Manage investors, hires, and partnerships",
  },
  {
    icon: Users,
    title: "Networking",
    description: "Turn introductions into relationships",
  },
  {
    icon: Heart,
    title: "Everyday Life",
    description: "Remember people and moments that matter",
  },
];

const UseCasesSection = () => {
  return (
    <section className="relative">
      <div className="veeto-section">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Built for how you actually <span className="veeto-gradient-text">live and work</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {cases.map((c, i) => (
            <div key={i} className="veeto-card text-center space-y-4 group">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-accent flex items-center justify-center transition-all duration-300 group-hover:veeto-gradient-bg group-hover:shadow-lg" style={{ "--tw-shadow": "var(--veeto-glow)" } as React.CSSProperties}>
                <c.icon className="w-6 h-6 text-accent-foreground transition-colors duration-300 group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-base font-bold text-foreground">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
