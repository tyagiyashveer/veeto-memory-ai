import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles, MapPin, Handshake, Bell, BarChart3 } from "lucide-react";

type Person = { icon: string; name: string; meta: string; note: string };
type QA = { q: string; intro: string; people: Person[] };

const conversation: QA[] = [
  {
    q: "I'm in LA next week — who should I meet?",
    intro: "Found 3 people in LA worth meeting:",
    people: [
      { icon: "👤", name: "Sarah Chen", meta: "Sequoia Partner", note: "Wants Series A update" },
      { icon: "👤", name: "David Park", meta: "Founder, exited", note: "Offered to advise" },
      { icon: "👤", name: "Lisa Tran", meta: "Head of BD, Notion", note: "Partnership discussion pending" },
    ],
  },
  {
    q: "Who in my network can refer me to FAANG?",
    intro: "3 people in your network with FAANG connections:",
    people: [
      { icon: "👤", name: "Marcus Webb", meta: "ex-Stripe, now Meta", note: "Open to referrals" },
      { icon: "👤", name: "Anita Joshi", meta: "Senior PM, Google", note: "Met at SaaStr" },
      { icon: "👤", name: "Raj Mehta", meta: "Eng Director, Amazon", note: "Said to ping anytime" },
    ],
  },
  {
    q: "Who did I meet that's working on AI infrastructure?",
    intro: "4 people building in AI infra:",
    people: [
      { icon: "👤", name: "Jordan Kim", meta: "CTO, vector DB startup", note: "Looking for design partners" },
      { icon: "👤", name: "Elena Rossi", meta: "ML researcher, ex-OpenAI", note: "Open to collaborating" },
      { icon: "👤", name: "Tom Becker", meta: "Founder, inference platform", note: "Wants to compare notes" },
    ],
  },
  {
    q: "Which investors said they'd back my next round?",
    intro: "5 investors expressed interest at your last round:",
    people: [
      { icon: "💰", name: "Sarah Chen", meta: "Sequoia", note: "Wants traction first" },
      { icon: "💰", name: "Naval Group", meta: "Angel", note: "Confirmed pro-rata" },
      { icon: "💰", name: "Foundation Capital", meta: "", note: "Re-engage when at $1M ARR" },
    ],
  },
  {
    q: "Who owes me a follow-up this week?",
    intro: "3 follow-ups overdue this week:",
    people: [
      { icon: "⏰", name: "Priya Sharma", meta: "Demo scheduled, never confirmed", note: "5 days overdue" },
      { icon: "⏰", name: "James Okonkwo", meta: "Q1 update promised", note: "Due Friday" },
      { icon: "⏰", name: "Anika Reddy", meta: "Intro email pending", note: "Due tomorrow" },
    ],
  },
];

const features = [
  {
    icon: MapPin,
    title: "Who should I meet in [city]?",
    label: "Smart matching",
    description: "Veeto cross-references your network with your travel plans and surfaces the right people to reconnect with — instantly.",
  },
  {
    icon: Handshake,
    title: "Who can refer me to [company]?",
    label: "Warm intros on demand",
    description: "Find the strongest paths into any company, role, or industry — drawn from people you've actually met.",
  },
  {
    icon: Bell,
    title: "Who needs follow-up?",
    label: "Context-aware reminders",
    description: "Veeto knows what you promised whom and surfaces overdue follow-ups before opportunities go cold.",
  },
  {
    icon: BarChart3,
    title: "Who in my network can help with [problem]?",
    label: "Network insights",
    description: "Ask anything — fundraising, hiring, partnerships, intros — and Veeto matches you to the right people in your memory.",
  },
];

const TYPE_SPEED = 35;        // ms per character
const SEARCHING_DELAY = 800;  // brief "searching" state after typing completes
const HOLD_ANSWER = 4200;     // how long the answer stays visible
const ERASE_SPEED = 18;       // ms per character (faster erase)

type Phase = "typing" | "searching" | "answering" | "erasing";

const useTypewriter = (index: number) => {
  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState<Phase>("typing");

  useEffect(() => {
    setTyped("");
    setPhase("typing");
  }, [index]);

  useEffect(() => {
    const target = conversation[index].q;
    let timer: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (typed.length < target.length) {
        timer = setTimeout(() => setTyped(target.slice(0, typed.length + 1)), TYPE_SPEED);
      } else {
        timer = setTimeout(() => setPhase("searching"), 250);
      }
    } else if (phase === "searching") {
      timer = setTimeout(() => setPhase("answering"), SEARCHING_DELAY);
    } else if (phase === "answering") {
      timer = setTimeout(() => setPhase("erasing"), HOLD_ANSWER);
    } else if (phase === "erasing") {
      if (typed.length > 0) {
        timer = setTimeout(() => setTyped(typed.slice(0, -1)), ERASE_SPEED);
      }
    }

    return () => clearTimeout(timer);
  }, [typed, phase, index]);

  return { typed, phase };
};

const AskVeetoSection = () => {
  const [index, setIndex] = useState(0);
  const { typed, phase } = useTypewriter(index);

  // Advance to next question once erase fully completes
  useEffect(() => {
    if (phase === "erasing" && typed.length === 0) {
      const t = setTimeout(() => setIndex((i) => (i + 1) % conversation.length), 250);
      return () => clearTimeout(t);
    }
  }, [phase, typed]);

  const showAnswer = phase === "holding";
  const current = conversation[index];

  return (
    <section className="relative">
      <div className="veeto-section">
        {/* Heading */}
        <div className="text-center mb-12 space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Ask Veeto anything.{" "}
            <span className="veeto-gradient-text">Get answers that move you forward.</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Your memory becomes searchable intelligence. No more digging through notes, contacts, or LinkedIn. Just ask.
          </p>
        </div>

        {/* Demo panels */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5 md:gap-6">
          {/* You ask */}
          <div className="relative rounded-2xl p-[1.5px]" style={{ background: "var(--veeto-gradient-hero)" }}>
            <div className="bg-card rounded-2xl p-6 h-full min-h-[340px] flex flex-col">
              <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-[0.12em]">
                You ask
              </span>
              <div className="mt-4 flex-1 flex items-start">
                <p className="text-lg sm:text-xl font-medium text-foreground leading-snug">
                  {typed}
                  <span className="inline-block w-[2px] h-5 sm:h-6 align-middle ml-0.5 bg-foreground animate-pulse" />
                </p>
              </div>
              <div className="flex items-center gap-2 pt-4 border-t border-border/50 mt-4">
                <div className="flex gap-1">
                  {conversation.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        i === index ? "w-5 veeto-gradient-bg" : "w-1.5 bg-muted"
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-auto text-[11px] font-medium text-muted-foreground">
                  Question {index + 1} / {conversation.length}
                </span>
              </div>
            </div>
          </div>

          {/* Veeto answers */}
          <div
            className="relative rounded-2xl p-6 min-h-[340px] flex flex-col border border-border/50"
            style={{
              background:
                "linear-gradient(145deg, hsl(220 90% 99%), hsl(252 80% 98%) 60%, hsl(330 80% 99%))",
              boxShadow: "var(--veeto-glow)",
            }}
          >
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-[0.12em]">
                Veeto answers
              </span>
              <Sparkles className="w-3.5 h-3.5 text-primary" />
            </div>

            <div className="mt-4 flex-1 relative">
              <AnimatePresence mode="wait">
                {showAnswer ? (
                  <motion.div
                    key={`answer-${index}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="space-y-3"
                  >
                    <p className="text-sm font-semibold text-foreground">{current.intro}</p>
                    <ul className="space-y-2">
                      {current.people.map((p, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -6 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 + i * 0.08 }}
                          className="flex items-start gap-3 p-3 rounded-xl bg-card border border-border/40"
                        >
                          <span className="text-base leading-none mt-0.5 shrink-0">{p.icon}</span>
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-semibold text-foreground leading-tight">
                              {p.name}
                              {p.meta && (
                                <span className="text-muted-foreground font-normal"> — {p.meta}</span>
                              )}
                            </p>
                            <p className="text-xs text-muted-foreground italic mt-0.5">"{p.note}"</p>
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ) : (
                  <motion.div
                    key={`thinking-${index}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.span
                          key={i}
                          className="w-1.5 h-1.5 rounded-full veeto-gradient-bg"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1.2, delay: i * 0.15, repeat: Infinity }}
                        />
                      ))}
                    </span>
                    <span>Searching your memory…</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Powered by your memory caption */}
        <p className="text-center mt-8 text-sm text-muted-foreground">
          <span className="veeto-gradient-text font-semibold">✨ Every answer</span>{" "}
          is built from your real conversations — not the internet.
        </p>

        {/* Output feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto mt-16">
          {features.map((f, i) => (
            <div key={i} className="veeto-card space-y-4 group">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center transition-all duration-300 group-hover:veeto-gradient-bg">
                <f.icon className="w-5 h-5 text-accent-foreground transition-colors duration-300 group-hover:text-primary-foreground" strokeWidth={2.2} />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-semibold uppercase tracking-wider veeto-gradient-text">
                  {f.label}
                </p>
                <h3 className="text-sm font-bold text-foreground leading-snug">{f.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        {/* Supporting tagline */}
        <p className="text-center mt-14 text-xl sm:text-2xl font-bold tracking-tight text-foreground max-w-2xl mx-auto">
          Your network already has the answer.{" "}
          <span className="veeto-gradient-text">Veeto helps you find it.</span>
        </p>
      </div>
    </section>
  );
};

export default AskVeetoSection;
