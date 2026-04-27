import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, CalendarCheck, Mic, Wifi, BatteryFull, SignalHigh } from "lucide-react";

type Card = {
  initial: string;
  name: string;
  role: string;
  metAt: string;
  context: string;
  action: string;
  tag: { label: string; className: string };
};

const cards: (Card & { shortRole: string })[] = [
  {
    initial: "S",
    name: "Sarah Chen",
    role: "Partner, Sequoia Capital",
    shortRole: "Partner, Sequoia",
    metAt: "TechCrunch Disrupt — 3 weeks ago",
    context: "Bullish on AI memory. Wants to see traction before Series A.",
    action: "Send pitch deck — Friday",
    tag: { label: "💰 Funding", className: "bg-blue-100 text-blue-700" },
  },
  {
    initial: "M",
    name: "Marcus Webb",
    role: "Staff Engineer, ex-Stripe",
    shortRole: "Staff Engineer",
    metAt: "AI conference afterparty — 1 week ago",
    context: "Open to early-stage roles. Wants equity-heavy package.",
    action: "Send role spec — Monday",
    tag: { label: "🚀 Hiring", className: "bg-purple-100 text-purple-700" },
  },
  {
    initial: "P",
    name: "Priya Sharma",
    role: "VP Product, Fortune 500",
    shortRole: "VP Product",
    metAt: "LinkedIn intro from David — 5 days ago",
    context: "Their team has the exact pain we solve. Budget approved.",
    action: "Schedule demo — April 12",
    tag: { label: "🎯 Deal", className: "bg-orange-100 text-orange-700" },
  },
  {
    initial: "J",
    name: "James Okonkwo",
    role: "Founder, exited 2x",
    shortRole: "Founder & advisor",
    metAt: "Founder dinner in SF — 2 weeks ago",
    context: "Offered to advise. Wants quarterly check-ins.",
    action: "Send Q1 update — Friday",
    tag: { label: "⭐ Mentor", className: "bg-pink-100 text-pink-700" },
  },
  {
    initial: "A",
    name: "Anika Reddy",
    role: "Head of BD, Notion",
    shortRole: "Head of BD, Notion",
    metAt: "SaaStr Annual — 4 weeks ago",
    context: "Interested in integration. Connecting us with their team.",
    action: "Intro email — Thursday",
    tag: { label: "🤝 Partnership", className: "bg-emerald-100 text-emerald-700" },
  },
];

// Rotation: 3 mini rows shown for each main-card index.
// Index 0 (Sarah main) = initial state per spec: Marcus, Priya, James.
// On each cycle, the previous main moves into row 1 as "Just added" and
// the rest shift down by one.
const MINI_ROTATIONS: { idx: number; subtext: string }[][] = [
  // Main = Sarah (0)
  [{ idx: 1, subtext: "Added yesterday" }, { idx: 2, subtext: "Added 3 days ago" }, { idx: 3, subtext: "Added 5 days ago" }],
  // Main = Marcus (1) → Sarah just added, then Priya, James shift up
  [{ idx: 0, subtext: "Just added" }, { idx: 2, subtext: "Added 3 days ago" }, { idx: 3, subtext: "Added 5 days ago" }],
  // Main = Priya (2) → Marcus just added, Sarah ages
  [{ idx: 1, subtext: "Just added" }, { idx: 0, subtext: "Added 2 days ago" }, { idx: 3, subtext: "Added 5 days ago" }],
  // Main = James (3) → Priya just added
  [{ idx: 2, subtext: "Just added" }, { idx: 1, subtext: "Added 2 days ago" }, { idx: 0, subtext: "Added 4 days ago" }],
  // Main = Anika (4) → James just added
  [{ idx: 3, subtext: "Just added" }, { idx: 2, subtext: "Added 2 days ago" }, { idx: 1, subtext: "Added 4 days ago" }],
];

const PhoneMockup = () => {
  const [index, setIndex] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [recording, setRecording] = useState(false);

  // Cycle cards every 4s
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % cards.length), 4000);
    return () => clearInterval(id);
  }, []);

  // Toast notification every ~6s
  useEffect(() => {
    const trigger = () => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    };
    const initial = setTimeout(trigger, 1500);
    const id = setInterval(trigger, 6000);
    return () => {
      clearTimeout(initial);
      clearInterval(id);
    };
  }, []);

  // Voice waveform "recording" pulse every ~5s
  useEffect(() => {
    const trigger = () => {
      setRecording(true);
      setTimeout(() => setRecording(false), 1800);
    };
    const initial = setTimeout(trigger, 3000);
    const id = setInterval(trigger, 5000);
    return () => {
      clearTimeout(initial);
      clearInterval(id);
    };
  }, []);

  const card = cards[index];
  const miniRows = MINI_ROTATIONS[index].map((r) => {
    const c = cards[r.idx];
    return {
      initial: c.initial,
      name: c.name,
      role: c.shortRole,
      subtext: r.subtext,
      tag: c.tag,
    };
  });

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Ambient color-shifting glow */}
      <div className="relative w-full max-w-[340px]">
        <div
          className="absolute -inset-16 rounded-full blur-3xl opacity-40 pointer-events-none animate-ambient-shift"
          style={{
            background:
              "conic-gradient(from 0deg, hsl(220 90% 56% / 0.7), hsl(252 80% 60% / 0.7), hsl(330 80% 65% / 0.7), hsl(220 90% 56% / 0.7))",
          }}
          aria-hidden="true"
        />

        {/* Floating phone wrapper */}
        <motion.div
          className="relative"
          style={{ rotate: -3 }}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Drop shadow plate */}
          <div
            className="absolute inset-x-6 -bottom-6 h-10 rounded-full blur-2xl opacity-40"
            style={{ background: "hsl(252 30% 20%)" }}
            aria-hidden="true"
          />

          {/* Phone frame */}
          <div
            className="relative bg-neutral-900 rounded-[3rem] p-[6px] shadow-2xl"
            style={{
              boxShadow:
                "0 25px 60px -15px hsl(252 80% 30% / 0.45), 0 0 0 1px hsl(0 0% 0% / 0.4), inset 0 0 0 2px hsl(0 0% 100% / 0.04)",
            }}
          >
            <div className="bg-white rounded-[2.6rem] overflow-hidden aspect-[9/19.5] relative">
              {/* Top-of-screen brand wash */}
              <div
                className="absolute top-0 inset-x-0 h-40 opacity-60 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, hsl(252 80% 96%) 0%, hsl(220 90% 98%) 50%, transparent 100%)",
                }}
                aria-hidden="true"
              />

              {/* iOS status bar */}
              <div className="relative flex items-center justify-between px-7 pt-3 pb-1 text-[11px] font-semibold text-neutral-900">
                <span>9:41</span>
                <div className="flex items-center gap-1">
                  <SignalHigh className="w-3 h-3" strokeWidth={2.5} />
                  <Wifi className="w-3 h-3" strokeWidth={2.5} />
                  <BatteryFull className="w-4 h-4" strokeWidth={2.5} />
                </div>
              </div>

              {/* Dynamic Island */}
              <div className="relative flex justify-center pb-2">
                <div className="w-24 h-7 bg-neutral-900 rounded-full" />
              </div>

              {/* App header */}
              <div className="relative flex items-center justify-between px-5 pt-3">
                <div className="flex items-center gap-1.5">
                  <span className="text-base font-extrabold tracking-tight veeto-gradient-text">
                    Veeto
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-neutral-100 flex items-center justify-center">
                    <Search className="w-3.5 h-3.5 text-neutral-600" strokeWidth={2.5} />
                  </div>
                  <div className="w-7 h-7 rounded-full veeto-gradient-bg" />
                </div>
              </div>

              {/* Section label */}
              <div className="px-5 pt-5 pb-2">
                <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-[0.12em]">
                  Recent Memory
                </span>
              </div>

              {/* Cycling memory card */}
              <div className="px-4 relative" style={{ minHeight: 240 }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative rounded-2xl p-4 overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(145deg, hsl(220 90% 98%), hsl(252 80% 97%) 60%, hsl(330 80% 98%))",
                      boxShadow:
                        "inset 0 1px 0 hsl(0 0% 100%), inset 0 0 0 1px hsl(252 30% 90% / 0.7), 0 4px 20px -8px hsl(252 80% 60% / 0.25)",
                    }}
                  >
                    {/* Tag pill (top-right) */}
                    <span
                      className={`absolute top-3 right-3 inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-semibold whitespace-nowrap ${card.tag.className}`}
                    >
                      {card.tag.label}
                    </span>

                    {/* Avatar */}
                    <div className="w-11 h-11 rounded-full veeto-gradient-bg flex items-center justify-center text-white font-bold text-base shadow-md">
                      {card.initial}
                    </div>

                    {/* Name & role */}
                    <div className="mt-3">
                      <p className="text-sm font-bold text-neutral-900 leading-tight">{card.name}</p>
                      <p className="text-[11px] text-neutral-500 mt-0.5 leading-tight">{card.role}</p>
                    </div>

                    <div className="my-3 h-px bg-neutral-200/70" />

                    {/* Fields */}
                    <div className="space-y-2.5">
                      <div>
                        <p className="text-[8.5px] font-semibold text-neutral-400 uppercase tracking-wider mb-0.5">
                          Met at
                        </p>
                        <p className="text-[11px] font-medium text-neutral-800 leading-snug">
                          {card.metAt}
                        </p>
                      </div>
                      <div>
                        <p className="text-[8.5px] font-semibold text-neutral-400 uppercase tracking-wider mb-0.5">
                          Context
                        </p>
                        <p className="text-[11px] font-medium text-neutral-800 leading-snug">
                          {card.context}
                        </p>
                      </div>
                      <div>
                        <p className="text-[8.5px] font-semibold text-neutral-400 uppercase tracking-wider mb-0.5">
                          Action
                        </p>
                        <div className="flex items-center gap-1.5">
                          <CalendarCheck className="w-3 h-3 text-primary shrink-0" strokeWidth={2.5} />
                          <p className="text-[11px] font-semibold text-neutral-900 leading-snug">
                            {card.action}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Reminder set */}
                    <div className="flex items-center gap-1.5 mt-3 pt-2.5 border-t border-neutral-200/70">
                      <span className="relative flex w-1.5 h-1.5">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                      </span>
                      <span className="text-[10px] font-medium text-neutral-500">Reminder set</span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* View all link */}
              <div className="px-5 pt-2 pb-2">
                <p className="text-[11px] font-medium text-neutral-400">
                  View all 247 memories →
                </p>
              </div>

              {/* THIS WEEK mini list */}
              <div className="px-5 pt-2 pb-2">
                <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-[0.12em]">
                  This Week
                </span>
                <div className="mt-2">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`mini-${index}`}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="divide-y divide-neutral-200/60"
                    >
                      {miniRows.map((row, i) => (
                        <div key={i} className="flex items-center gap-2.5 py-2">
                          <div className="w-7 h-7 rounded-full veeto-gradient-bg flex items-center justify-center text-white text-[11px] font-bold shrink-0">
                            {row.initial}
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-[11px] font-semibold text-neutral-900 leading-tight truncate">
                              {row.name}
                              <span className="text-neutral-400 font-medium"> · {row.role}</span>
                            </p>
                            <p className="text-[9.5px] text-neutral-400 leading-tight mt-0.5">
                              {row.subtext}
                            </p>
                          </div>
                          <span
                            className={`inline-flex items-center px-1.5 py-0.5 rounded-full text-[8.5px] font-semibold whitespace-nowrap shrink-0 ${row.tag.className}`}
                          >
                            {row.tag.label}
                          </span>
                        </div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Quick capture bar (bottom of screen) */}
              <div className="absolute bottom-3 inset-x-3">
                <div
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-full border border-white/60 backdrop-blur-sm"
                  style={{
                    background:
                      "linear-gradient(90deg, hsl(220 90% 97%), hsl(252 80% 97%) 50%, hsl(330 80% 98%))",
                    boxShadow:
                      "0 -4px 16px -4px hsl(252 30% 50% / 0.12), inset 0 1px 0 hsl(0 0% 100%)",
                  }}
                >
                  <div className="w-7 h-7 rounded-full veeto-gradient-bg flex items-center justify-center shrink-0">
                    <Mic className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                  </div>
                  <span className="flex-1 text-[11px] font-medium text-neutral-500">
                    Tap to capture a memory
                  </span>
                  <div className="flex items-center gap-[2px] h-3 pr-1">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <motion.span
                        key={i}
                        className="w-[2px] rounded-full veeto-gradient-bg"
                        animate={
                          recording
                            ? { height: [3, 10, 4, 11, 3] }
                            : { height: [3, 6, 3] }
                        }
                        transition={{
                          duration: recording ? 0.8 : 1.6,
                          delay: i * 0.06,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        style={{ height: 3 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating: notification toast (top-right, outside) */}
          <AnimatePresence>
            {showToast && (
              <motion.div
                initial={{ opacity: 0, y: -8, x: 8 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
                className="absolute -top-2 -right-6 sm:-right-12 bg-white rounded-xl px-3 py-2 shadow-xl border border-border/50 flex items-center gap-2 z-10"
                style={{ rotate: 3 }}
              >
                <span className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-white text-[10px] font-bold">
                  ✓
                </span>
                <span className="text-xs font-semibold text-foreground whitespace-nowrap">
                  New memory saved
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating: people remembered badge (bottom-left) */}
          <motion.div
            className="absolute -bottom-3 -left-4 sm:-left-10 bg-white rounded-xl px-3 py-2 shadow-xl border border-border/50 flex items-center gap-2 z-10"
            style={{ rotate: 3 }}
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-sm">🔍</span>
            <span className="text-xs font-semibold text-foreground whitespace-nowrap">
              247 people remembered
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Pagination dots */}
      <div className="flex items-center gap-2 mt-8">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Show memory ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-6 veeto-gradient-bg" : "w-1.5 bg-muted"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PhoneMockup;
