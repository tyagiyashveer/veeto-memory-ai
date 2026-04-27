import { useEffect, useState } from "react";
import { Mic, Sparkles, Search } from "lucide-react";

/* ---------- Card 1: Voice note moment ---------- */
const VoiceNoteCard = () => (
  <div className="relative">
    {/* Mini phone */}
    <div className="relative mx-auto w-[220px] rounded-[1.6rem] bg-black p-1.5 shadow-2xl">
      <div className="rounded-[1.3rem] overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800" style={{ aspectRatio: "9/16" }}>
        {/* Lock screen */}
        <div className="px-4 pt-4 pb-2 text-white">
          <p className="text-[10px] text-white/70 text-center">Tuesday, April 25</p>
          <p className="text-5xl font-light text-center mt-1 tracking-tight">7:42</p>
        </div>
        {/* Notification */}
        <div className="px-2 mt-3">
          <div className="bg-white/15 backdrop-blur-md rounded-2xl p-2.5 border border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-[#25D366] flex items-center justify-center text-xs">💬</div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-semibold text-white">WhatsApp · Veeto</p>
                <p className="text-[9px] text-white/70">now</p>
              </div>
            </div>
            <div className="mt-1.5 flex items-center gap-2">
              <Mic className="w-3 h-3 text-white/80 shrink-0" />
              <div className="flex items-end gap-[2px] flex-1 h-3">
                {Array.from({ length: 14 }).map((_, i) => (
                  <span key={i} className="w-[2px] rounded-full bg-white/70"
                    style={{ height: `${4 + Math.abs(Math.sin(i)) * 8}px` }} />
                ))}
              </div>
              <span className="text-[9px] text-white/70">0:18</span>
            </div>
            <p className="text-[10px] text-white/85 mt-1">Voice message · 0:18</p>
          </div>
        </div>
      </div>
    </div>
    {/* Sticky note */}
    <div className="absolute -bottom-6 -right-2 sticky-note bg-veeto-sticky-yellow text-gray-800 text-lg rotate-6">
      Tuesday, 7:42 PM —<br/>walking out of dinner
    </div>
  </div>
);

/* ---------- Card 2: Auto-organize moment ---------- */
const fields = [
  { label: "Name", value: "Sarah Chen" },
  { label: "Company", value: "Sequoia Capital" },
  { label: "Action", value: "Send deck Friday" },
];
const AutoOrganizeCard = () => {
  const [step, setStep] = useState(0);
  const [typed, setTyped] = useState("");
  useEffect(() => {
    const target = fields[step]?.value ?? "";
    if (typed.length < target.length) {
      const t = setTimeout(() => setTyped(target.slice(0, typed.length + 1)), 45);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        if (step < fields.length - 1) {
          setStep((s) => s + 1);
          setTyped("");
        } else {
          // restart loop after pause
          const r = setTimeout(() => { setStep(0); setTyped(""); }, 2200);
          return () => clearTimeout(r);
        }
      }, 700);
      return () => clearTimeout(t);
    }
  }, [typed, step]);

  return (
    <div className="relative">
      <div className="bg-white rounded-2xl p-5 shadow-2xl border border-black/5 w-[260px] mx-auto">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-lg veeto-gradient-bg flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Veeto is structuring…</span>
        </div>
        <div className="space-y-2.5">
          {fields.map((f, i) => {
            const done = i < step;
            const active = i === step;
            const display = done ? f.value : active ? typed : "";
            return (
              <div key={i} className="flex items-baseline gap-2 border-b border-gray-100 pb-1.5 last:border-0">
                <span className="text-[10px] font-medium text-gray-400 uppercase tracking-wider w-16 shrink-0">{f.label}</span>
                <span className="text-sm font-semibold text-gray-900 min-h-[18px]">
                  {display}
                  {active && <span className="inline-block w-[2px] h-3.5 bg-veeto-indigo align-middle ml-0.5 animate-pulse" />}
                </span>
              </div>
            );
          })}
        </div>
        <div className="mt-3 inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-veeto-mint-soft text-[10px] font-semibold text-emerald-700">
          ✓ structured in 4s
        </div>
      </div>
      <div className="absolute -bottom-6 -left-2 sticky-note bg-veeto-sticky-mint text-gray-800 text-lg -rotate-6">
        Veeto did this in 4 seconds
      </div>
    </div>
  );
};

/* ---------- Card 3: Recall moment ---------- */
const RecallCard = () => (
  <div className="relative">
    <div className="bg-white rounded-2xl p-4 shadow-2xl border border-black/5 w-[270px] mx-auto space-y-3">
      {/* Query bubble */}
      <div className="flex justify-end">
        <div className="bg-veeto-indigo text-white text-[12px] rounded-2xl rounded-br-md px-3 py-1.5 max-w-[85%]">
          who do I know at Sequoia?
        </div>
      </div>
      {/* Answer card */}
      <div className="bg-gradient-to-br from-veeto-mint-soft to-white rounded-xl p-3 border border-veeto-mint/30">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-9 h-9 rounded-full veeto-gradient-bg flex items-center justify-center text-white font-bold text-sm shrink-0">S</div>
          <div className="min-w-0">
            <p className="text-[12px] font-bold text-gray-900 leading-tight">Sarah Chen</p>
            <p className="text-[10px] text-gray-500 leading-tight">Partner · Sequoia</p>
          </div>
          <Search className="w-3.5 h-3.5 text-veeto-indigo ml-auto" />
        </div>
        <div className="space-y-1 text-[11px] text-gray-700">
          <p>📍 Met at Disrupt · 3wk ago</p>
          <p>💬 "Wants Series A update"</p>
          <p className="text-veeto-coral font-semibold">⏰ Owes update — Friday</p>
        </div>
      </div>
    </div>
    <div className="absolute -bottom-6 -right-2 sticky-note bg-veeto-sticky-coral text-gray-800 text-lg rotate-3">
      3 weeks later —<br/>when it matters
    </div>
  </div>
);

const SolutionSection = () => {
  return (
    <section className="relative band-indigo overflow-hidden">
      <div className="grain" />
      {/* ambient glows */}
      <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-veeto-coral/20 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-veeto-yellow/15 blur-[120px] pointer-events-none" />

      <div className="veeto-section relative">
        <div className="text-center mb-16 max-w-3xl mx-auto space-y-3">
          <span className="font-handwritten text-2xl text-veeto-yellow inline-block -rotate-2">
            here's the magic ↓
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
            It's not a notes app.<br/>
            <span className="italic" style={{ background: "linear-gradient(90deg, hsl(var(--veeto-yellow)), hsl(var(--veeto-coral)))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              It's a second brain.
            </span>
          </h2>
        </div>

        {/* Staggered moment cards */}
        <div className="relative grid md:grid-cols-3 gap-12 md:gap-6 max-w-5xl mx-auto pb-10">
          {/* Dotted connector lines (desktop) */}
          <svg className="hidden md:block absolute inset-x-0 top-1/2 -translate-y-1/2 w-full h-20 pointer-events-none opacity-50" viewBox="0 0 800 80" fill="none">
            <path d="M180 40 Q 280 0, 400 40" stroke="hsl(var(--veeto-yellow))" strokeWidth="2" strokeDasharray="4 6" strokeLinecap="round"/>
            <path d="M420 40 Q 540 80, 640 40" stroke="hsl(var(--veeto-coral))" strokeWidth="2" strokeDasharray="4 6" strokeLinecap="round"/>
            <path d="M635 35 l 10 5 l -10 5" stroke="hsl(var(--veeto-coral))" strokeWidth="2" strokeLinecap="round" fill="none"/>
          </svg>

          <div className="transform md:-rotate-3 hover:rotate-0 transition-transform duration-500 hover-wobble">
            <VoiceNoteCard />
          </div>
          <div className="transform md:rotate-3 md:mt-12 hover:rotate-0 transition-transform duration-500 hover-wobble">
            <AutoOrganizeCard />
          </div>
          <div className="transform md:-rotate-2 hover:rotate-0 transition-transform duration-500 hover-wobble">
            <RecallCard />
          </div>
        </div>

        {/* Bottom labels */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-sm font-medium opacity-90">
          <span className="inline-flex items-center gap-1.5"><Mic className="w-4 h-4" /> Capture</span>
          <span className="font-handwritten text-veeto-yellow text-xl">→</span>
          <span className="inline-flex items-center gap-1.5"><Sparkles className="w-4 h-4" /> Understand</span>
          <span className="font-handwritten text-veeto-coral text-xl">→</span>
          <span className="inline-flex items-center gap-1.5"><Search className="w-4 h-4" /> Remember</span>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
