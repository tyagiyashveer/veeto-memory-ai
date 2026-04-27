import { Mic, ArrowRight, User, Building2, FileText, CalendarCheck, Briefcase } from "lucide-react";

const DemoSection = () => {
  return (
    <section id="demo" className="relative band-cream scroll-mt-20">
      <div className="veeto-section">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            From a simple voice note…
          </h2>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-[1fr,auto,1fr] gap-6 md:gap-8 items-center">
          <div className="veeto-card space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full veeto-gradient-bg flex items-center justify-center">
                <Mic className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Voice Input</span>
            </div>
            <div className="flex items-center gap-0.5 h-10 px-2">
              {Array.from({ length: 32 }).map((_, i) => (
                <div
                  key={i}
                  className="w-1 rounded-full veeto-gradient-bg"
                  style={{
                    height: `${Math.max(8, Math.sin(i * 0.5) * 24 + Math.random() * 16)}px`,
                    opacity: 0.6 + Math.sin(i * 0.3) * 0.4,
                  }}
                />
              ))}
            </div>
            <p className="text-sm text-foreground italic leading-relaxed">
              "Met Sarah at Disrupt — Sequoia partner, wants to see traction before our Series A."
            </p>
          </div>

          <div className="hidden md:flex items-center justify-center">
            <div className="w-12 h-12 rounded-full veeto-gradient-bg flex items-center justify-center shadow-lg" style={{ boxShadow: "var(--veeto-glow)" }}>
              <ArrowRight className="w-5 h-5 text-primary-foreground" />
            </div>
          </div>
          <div className="flex md:hidden items-center justify-center py-2">
            <div className="w-10 h-10 rounded-full veeto-gradient-bg flex items-center justify-center shadow-lg rotate-90">
              <ArrowRight className="w-4 h-4 text-primary-foreground" />
            </div>
          </div>

          <div className="veeto-card space-y-3 border-primary/20" style={{ boxShadow: "var(--veeto-glow)" }}>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full veeto-gradient-bg animate-pulse" />
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Structured Memory</span>
            </div>
            {[
              { icon: User, label: "Name", value: "Sarah Chen" },
              { icon: Building2, label: "Company", value: "Sequoia Capital" },
              { icon: Briefcase, label: "Role", value: "Partner" },
              { icon: FileText, label: "Summary", value: "Interested in leading our Series A" },
              { icon: CalendarCheck, label: "Action", value: "Share traction deck by Friday" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 py-2 border-b border-border/50 last:border-0">
                <item.icon className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-xs font-medium text-muted-foreground w-16 shrink-0 mt-0.5">{item.label}</span>
                <span className="text-sm font-semibold text-foreground leading-snug">{item.value}</span>
              </div>
            ))}
            <div className="pt-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-700">
                🔥 High priority
              </span>
            </div>
          </div>
        </div>

        <p className="text-center mt-12 text-lg font-medium text-muted-foreground">
          30 seconds of voice. <span className="veeto-gradient-text font-semibold">A network that compounds for life.</span>
        </p>
      </div>
    </section>
  );
};

export default DemoSection;
