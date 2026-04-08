import { UserX, MessageSquareOff, FileX } from "lucide-react";

const problems = [
  { icon: UserX, text: "You forget names, context, and follow-ups" },
  { icon: MessageSquareOff, text: "Great conversations fade away" },
  { icon: FileX, text: "Notes are scattered or never written" },
];

const ProblemSection = () => {
  return (
    <section className="relative bg-veeto-soft-bg">
      <div className="veeto-section">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              You meet hundreds of people.<br />
              <span className="text-muted-foreground">You remember almost nothing.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {problems.map((p, i) => (
              <div key={i} className="veeto-card text-center space-y-4">
                <div className="w-12 h-12 mx-auto rounded-xl bg-accent flex items-center justify-center">
                  <p.icon className="w-5 h-5 text-accent-foreground" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>

          <p className="text-lg font-medium veeto-gradient-text">
            Every conversation matters. Most are lost.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
