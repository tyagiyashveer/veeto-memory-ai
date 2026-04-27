import { UserX, MessageSquareOff, FileX } from "lucide-react";

const problems = [
  {
    icon: UserX,
    title: "Names disappear",
    text: "You forget who you met within 48 hours of meeting them.",
  },
  {
    icon: MessageSquareOff,
    title: "Context evaporates",
    text: "What they cared about, what you promised, what mattered — gone.",
  },
  {
    icon: FileX,
    title: "Follow-ups die",
    text: "The relationships you needed most fade because you forgot to reach back.",
  },
];

const ProblemSection = () => {
  return (
    <section className="relative bg-veeto-soft-bg">
      <div className="veeto-section">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              You meet thousands of people.<br />
              <span className="text-muted-foreground">Your memory keeps almost none.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {problems.map((p, i) => (
              <div key={i} className="veeto-card text-center space-y-4">
                <div className="w-12 h-12 mx-auto rounded-xl bg-accent flex items-center justify-center">
                  <p.icon className="w-5 h-5 text-accent-foreground" />
                </div>
                <h3 className="text-base font-bold text-foreground">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>

          <p className="text-lg font-medium veeto-gradient-text">
            Every person you've ever met could change your life. Most you'll never remember.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
