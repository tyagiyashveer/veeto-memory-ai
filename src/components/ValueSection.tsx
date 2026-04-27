import { Check, X } from "lucide-react";

type Cell = "yes" | "no" | "manual" | "partial";

const columns = ["Notes app", "CRM", "Your memory", "Veeto"] as const;

const rows: { feature: string; values: [Cell, Cell, Cell, Cell]; veetoExtra?: React.ReactNode }[] = [
  {
    feature: "Works inside apps you already use",
    values: ["no", "no", "partial", "yes"],
    veetoExtra: (
      <span className="inline-flex items-center gap-1 ml-1.5 align-middle">
        <span className="w-4 h-4 rounded-sm bg-[#25D366] text-white text-[9px] font-bold inline-flex items-center justify-center">W</span>
        <span className="w-4 h-4 rounded-sm bg-[#0088CC] text-white text-[9px] font-bold inline-flex items-center justify-center">T</span>
      </span>
    ),
  },
  { feature: "Captures by voice", values: ["no", "no", "yes", "yes"] },
  { feature: "Auto-structures info", values: ["no", "manual", "no", "yes"] },
  { feature: "Searchable in seconds", values: ["partial", "yes", "no", "yes"] },
  { feature: "Reminds you to follow up", values: ["no", "yes", "no", "yes"] },
  { feature: "Zero typing required", values: ["no", "no", "yes", "yes"] },
  { feature: "Works for personal life too", values: ["partial", "no", "yes", "yes"] },
  { feature: "Answers questions about your network", values: ["no", "no", "partial", "yes"] },
  { feature: "Grows more valuable over time", values: ["no", "partial", "no", "yes"] },
];

const renderCell = (v: Cell) => {
  if (v === "yes") return <Check className="w-5 h-5 text-emerald-500 mx-auto" strokeWidth={2.5} />;
  if (v === "no") return <X className="w-5 h-5 text-muted-foreground/50 mx-auto" strokeWidth={2} />;
  return <span className="text-sm italic text-muted-foreground">{v}</span>;
};

const ValueSection = () => {
  return (
    <section className="relative band-beige">
      <div className="veeto-section">
        <div className="text-center mb-12 space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Why Veeto beats every <span className="veeto-gradient-text">alternative</span>
          </h2>
          <p className="text-base text-muted-foreground">
            Notes apps weren't built for people. CRMs weren't built for life. Your memory wasn't built for thousands of names.
          </p>
        </div>

        {/* Desktop table */}
        <div className="hidden md:block max-w-5xl mx-auto">
          <div className="relative bg-card rounded-2xl border border-border/50 overflow-hidden shadow-sm">
            {/* Veeto column highlight + pulsing glow */}
            <div
              className="absolute top-0 right-0 bottom-0 w-1/4 pointer-events-none animate-veeto-pulse"
              style={{ background: "var(--veeto-gradient-hero)", opacity: 0.1 }}
              aria-hidden="true"
            />
            <table className="w-full relative">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left px-6 py-5 text-sm font-semibold text-muted-foreground"></th>
                  {columns.map((col) => (
                    <th
                      key={col}
                      className={`px-6 py-5 text-sm font-bold text-center ${
                        col === "Veeto" ? "veeto-gradient-text text-base" : "text-foreground"
                      }`}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i} className="border-b border-border/50 last:border-0">
                    <td className="px-6 py-4 text-sm font-medium text-foreground text-left">{row.feature}</td>
                    {row.values.map((v, j) => (
                      <td key={j} className="px-6 py-4 text-center">
                        {renderCell(v)}
                        {j === 3 && row.veetoExtra}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile stacked */}
        <div className="md:hidden space-y-4 max-w-md mx-auto">
          {rows.map((row, i) => (
            <div key={i} className="veeto-card space-y-3">
              <h4 className="font-semibold text-foreground text-sm">{row.feature}</h4>
              <div className="grid grid-cols-2 gap-2">
                {columns.map((col, j) => (
                  <div
                    key={col}
                    className={`flex items-center justify-between px-3 py-2 rounded-lg ${
                      col === "Veeto" ? "veeto-gradient-bg" : "bg-secondary"
                    }`}
                  >
                    <span className={`text-xs font-medium ${col === "Veeto" ? "text-primary-foreground" : "text-muted-foreground"}`}>
                      {col}
                    </span>
                    <span className={col === "Veeto" ? "[&_svg]:text-white" : ""}>
                      {renderCell(row.values[j])}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
