import { TrendingUp, Rocket, Users, Heart } from "lucide-react";

const cases = [
  {
    icon: TrendingUp,
    title: "For professionals",
    description: "Remember every prospect, client, and colleague. Never lose a deal to a forgotten follow-up again.",
  },
  {
    icon: Rocket,
    title: "For founders & operators",
    description: "Track investors, hires, partners, and customers — with the context behind every conversation.",
  },
  {
    icon: Users,
    title: "For networkers",
    description: "Turn every event, intro, and coffee chat into a relationship you can actually maintain.",
  },
  {
    icon: Heart,
    title: "For everyday life",
    description: "Remember the people who matter — friends, family, neighbors, the dentist's kid's name. The small details that build real connection.",
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {cases.map((c, i) => (
            <div key={i} className="veeto-card text-center space-y-4 group">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-accent flex items-center justify-center transition-all duration-300 group-hover:veeto-gradient-bg">
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
