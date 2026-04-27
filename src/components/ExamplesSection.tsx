import { MapPin, FileText, CalendarCheck } from "lucide-react";

const cards = [
  {
    initial: "S",
    name: "Sarah Chen",
    role: "Partner, Sequoia Capital",
    met: "TechCrunch Disrupt",
    note: "Wants Series A intro after we hit $1M ARR.",
    action: "Update her at $800K",
    tag: { label: "💰 Funding", className: "bg-blue-100 text-blue-700" },
  },
  {
    initial: "M",
    name: "Marcus Webb",
    role: "Staff Engineer, ex-Stripe",
    met: "AI conference afterparty",
    note: "Open to early-stage roles. Wants equity-heavy package.",
    action: "Send role spec next month",
    tag: { label: "🚀 Hiring", className: "bg-emerald-100 text-emerald-700" },
  },
  {
    initial: "P",
    name: "Priya Sharma",
    role: "VP Product, Fortune 500",
    met: "LinkedIn intro from David",
    note: "Their team has the exact pain we solve. Budget approved Q2.",
    action: "Schedule demo for April",
    tag: { label: "🎯 Deal", className: "bg-orange-100 text-orange-700" },
  },
  {
    initial: "J",
    name: "James Okonkwo",
    role: "Founder, exited 2x",
    met: "Founder dinner in SF",
    note: "Offered to advise. Wants quarterly check-ins.",
    action: "Send Q1 update Friday",
    tag: { label: "⭐ Mentor", className: "bg-purple-100 text-purple-700" },
  },
];

const ExamplesSection = () => {
  return (
    <section className="relative">
      <div className="veeto-section">
        <div className="text-center mb-14 space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            What Veeto remembers <span className="veeto-gradient-text">for you.</span>
          </h2>
          <p className="text-base text-muted-foreground">
            Every card below started as a 30-second voice note.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {cards.map((c, i) => (
            <div
              key={i}
              className="relative bg-card rounded-2xl border border-border/50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1"
              style={{ boxShadow: "var(--veeto-glow)" }}
            >
              {/* Gradient top border accent */}
              <div
                className="absolute top-0 left-6 right-6 h-px"
                style={{ background: "var(--veeto-gradient-hero)" }}
                aria-hidden="true"
              />

              {/* Header */}
              <div className="flex items-start gap-3 mb-4">
                <div className="w-11 h-11 rounded-full veeto-gradient-bg flex items-center justify-center text-primary-foreground font-bold shrink-0">
                  {c.initial}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-bold text-foreground truncate">{c.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{c.role}</p>
                </div>
                <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold whitespace-nowrap ${c.tag.className}`}>
                  {c.tag.label}
                </span>
              </div>

              {/* Body */}
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">Met</p>
                    <p className="text-sm text-foreground">{c.met}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <FileText className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">Note</p>
                    <p className="text-sm text-foreground italic">"{c.note}"</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 pt-2 border-t border-border/50">
                  <CalendarCheck className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">Action</p>
                    <p className="text-sm font-semibold text-foreground">{c.action}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExamplesSection;
