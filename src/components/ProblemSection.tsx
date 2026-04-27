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
    text: "The investor who would have funded you. The hire who would have built it. The customer who would have closed. All forgotten.",
  },
];

const ProblemSection = () => {
  return (
    <section className="relative band-cream">
      <div className="veeto-section">
        <div className="max-w-3xl mx-auto text-center space-y-10">
          <div className="space-y-3">
            <span className="font-handwritten text-2xl text-veeto-coral inline-block -rotate-2">
              the harsh truth ↓
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.05]">
              You meet thousands of people.<br />
              <span className="italic text-muted-foreground">Your memory keeps almost none.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {problems.map((p, i) => (
              <div key={i} className="veeto-card text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-xl bg-accent flex items-center justify-center">
                  <p.icon className="w-5 h-5 text-accent-foreground" />
                </div>
                <h3 className="text-base font-bold text-foreground">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>

          <p className="font-display text-xl sm:text-2xl font-semibold italic text-foreground">
            Every person you've ever met could change your life.{" "}
            <span className="veeto-gradient-text not-italic">Most you'll never remember.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
