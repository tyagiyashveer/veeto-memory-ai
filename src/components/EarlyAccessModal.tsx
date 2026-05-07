import { createContext, useContext, useState, useRef, useEffect, ReactNode } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Loader2, CheckCircle2, ArrowLeft, Copy, Check } from "lucide-react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

type CtaSource = "join_waitlist" | "early_access" | "whatsapp" | "claim_spot";
type ModalCtx = { open: (source?: CtaSource) => void };
const Ctx = createContext<ModalCtx | null>(null);

const WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbzhBrpgHwOGJzYUOJ6gsdTxBhMOaQvESFTGBly8UYh8PzzPYawKdlRndqVxTBjo8sq5ig/exec";

export const useEarlyAccessModal = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("useEarlyAccessModal must be used inside provider");
  return c;
};

const ROLE_OPTIONS = [
  "Founder", "Sales Professional", "Consultant", "Recruiter",
  "Investor", "Business Development", "Agency Owner", "Other",
];
const PEOPLE_OPTIONS = ["0–10", "10–25", "25–50", "50+"];
const CHALLENGE_OPTIONS = [
  "Forgetting follow-ups",
  "Forgetting personal details",
  "Losing track of conversations",
  "Not remembering where I met someone",
  "Maintaining long-term relationships",
  "Networking feels overwhelming",
];
const TOOL_OPTIONS = [
  "Phone contacts", "Notes app", "Excel / Google Sheets",
  "CRM", "Memory only", "I don't manage them properly",
];

const step1Schema = z.object({
  full_name: z.string().trim().min(1, "Please enter your name").max(120),
  email: z.string().trim().email("Enter a valid email").max(255),
  linkedin_url: z.string().trim().url("Enter a valid URL").max(300),
  role: z.string().min(1, "Select an option"),
});

type Step1 = z.infer<typeof step1Schema>;

const inputCls =
  "w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow";

const labelCls = "text-sm font-medium text-foreground mb-1.5 block";

function ChoiceGrid({
  options, value, onChange, cols = 2,
}: { options: string[]; value: string; onChange: (v: string) => void; cols?: 1 | 2 }) {
  return (
    <div className={`grid gap-2 ${cols === 1 ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"}`}>
      {options.map((o) => {
        const active = value === o;
        return (
          <button
            key={o}
            type="button"
            onClick={() => onChange(o)}
            className={`text-left px-3.5 py-2.5 rounded-xl border text-sm font-medium transition-all duration-200 ${
              active
                ? "border-primary bg-accent text-accent-foreground"
                : "border-border bg-background text-muted-foreground hover:border-primary/30 hover:text-foreground"
            }`}
          >
            {o}
          </button>
        );
      })}
    </div>
  );
}

function StepDots({ step }: { step: 1 | 2 | 3 }) {
  return (
    <div className="flex items-center gap-2">
      {[1, 2, 3].map((n) => (
        <div
          key={n}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            n === step ? "w-8 bg-primary" : n < step ? "w-6 bg-primary/50" : "w-6 bg-border"
          }`}
        />
      ))}
      <span className="ml-2 text-xs font-medium text-muted-foreground">Step {step} of 3</span>
    </div>
  );
}

export function EarlyAccessModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [ctaSource, setCtaSource] = useState<CtaSource>("early_access");

  const [data, setData] = useState({
    full_name: "",
    email: "",
    linkedin_url: "",
    role: "",
    people_per_month: "",
    biggest_challenge: "",
    current_tool: "",
    wants_beta: true,
    phone: "",
    referral_source: "",
  });

  const firstFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) setTimeout(() => firstFieldRef.current?.focus(), 80);
  }, [open, step]);

  const reset = () => {
    setStep(1);
    setError(null);
    setLoading(false);
    setCopied(false);
    setData({
      full_name: "", email: "", linkedin_url: "", role: "",
      people_per_month: "", biggest_challenge: "", current_tool: "",
      wants_beta: true, phone: "", referral_source: "",
    });
  };

  const handleOpenChange = (v: boolean) => {
    setOpen(v);
    if (!v) setTimeout(reset, 200);
  };

  const ctxValue: ModalCtx = {
    open: (source: CtaSource = "early_access") => {
      reset();
      setCtaSource(source);
      setOpen(true);
    },
  };

  const goStep1 = () => {
    setError(null);
    const parsed = step1Schema.safeParse({
      full_name: data.full_name,
      email: data.email,
      linkedin_url: data.linkedin_url,
      role: data.role,
    } as Step1);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please complete all fields");
      return;
    }
    setStep(2);
  };

  const goStep2 = () => {
    setError(null);
    if (!data.people_per_month || !data.biggest_challenge || !data.current_tool) {
      setError("Please answer all questions");
      return;
    }
    setStep(3);
  };

  const submit = async () => {
    if (loading) return;
    setError(null);
    setLoading(true);

    const payload = {
      name: data.full_name.trim(),
      email: data.email.trim(),
      linkedin: data.linkedin_url.trim(),
      role: data.role,
      monthly_connections: data.people_per_month,
      biggest_challenge: data.biggest_challenge,
      contact_management: data.current_tool,
      early_access: data.wants_beta,
      phone: data.phone.trim(),
      source: data.referral_source.trim(),
      cta_clicked: ctaSource,
      timestamp: new Date().toISOString(),
    };

    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(payload),
      });
      // Best-effort backup to Lovable Cloud — non-blocking
      supabase.from("waitlist_signups").insert({
        email: payload.email,
        source: "modal",
        struggle: payload.biggest_challenge || null,
        full_name: payload.name,
        linkedin_url: payload.linkedin,
        role: payload.role,
        people_per_month: payload.monthly_connections,
        biggest_challenge: payload.biggest_challenge,
        current_tool: payload.contact_management,
        wants_beta: payload.early_access,
        phone: payload.phone || null,
        referral_source: payload.source || null,
      }).then(() => { /* noop */ });
      setLoading(false);
      setStep(4);
    } catch {
      setLoading(false);
      setError("Something went wrong. Please try again.");
    }
  };

  const copyShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.origin);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* noop */ }
  };

  return (
    <Ctx.Provider value={ctxValue}>
      {children}
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent className="max-w-lg p-0 gap-0 rounded-2xl border border-border/60 bg-card overflow-hidden max-h-[90vh] flex flex-col">
          <div className="p-6 sm:p-8 overflow-y-auto">
            {step !== 4 && (
              <div className="flex items-center justify-between mb-6">
                <StepDots step={step as 1 | 2 | 3} />
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => { setError(null); setStep((step - 1) as 1 | 2); }}
                    className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Back
                  </button>
                )}
              </div>
            )}

            {step === 1 && (
              <div className="space-y-5">
                <div className="space-y-1.5">
                  <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight leading-tight text-foreground">
                    Get Early Access to <span className="veeto-gradient-text">Veeto AI</span>
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Be among the first professionals building better relationships with AI.
                  </p>
                </div>

                <div className="space-y-3.5">
                  <div>
                    <label className={labelCls} htmlFor="ea-name">Full name</label>
                    <input
                      id="ea-name"
                      ref={firstFieldRef}
                      className={inputCls}
                      value={data.full_name}
                      onChange={(e) => setData({ ...data, full_name: e.target.value })}
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label className={labelCls} htmlFor="ea-email">Email address</label>
                    <input
                      id="ea-email" type="email" className={inputCls}
                      value={data.email}
                      onChange={(e) => setData({ ...data, email: e.target.value })}
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className={labelCls} htmlFor="ea-linkedin">LinkedIn profile URL</label>
                    <input
                      id="ea-linkedin" className={inputCls}
                      value={data.linkedin_url}
                      onChange={(e) => setData({ ...data, linkedin_url: e.target.value })}
                      placeholder="https://linkedin.com/in/yourname"
                    />
                  </div>
                  <div>
                    <label className={labelCls} htmlFor="ea-role">What do you do?</label>
                    <select
                      id="ea-role"
                      className={`${inputCls} appearance-none cursor-pointer`}
                      value={data.role}
                      onChange={(e) => setData({ ...data, role: e.target.value })}
                    >
                      <option value="" disabled>Select your role</option>
                      {ROLE_OPTIONS.map((r) => <option key={r} value={r}>{r}</option>)}
                    </select>
                  </div>
                </div>

                {error && <p className="text-sm text-destructive">{error}</p>}

                <button onClick={goStep1} className="veeto-btn-primary w-full justify-center">
                  Continue
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-5">
                <div className="space-y-1.5">
                  <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight leading-tight text-foreground">
                    Tell us about your workflow
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Three quick questions to tailor your experience.
                  </p>
                </div>

                <div className="space-y-5">
                  <div>
                    <p className={labelCls}>How many new people do you meet in a typical month?</p>
                    <ChoiceGrid
                      options={PEOPLE_OPTIONS}
                      value={data.people_per_month}
                      onChange={(v) => setData({ ...data, people_per_month: v })}
                    />
                  </div>
                  <div>
                    <p className={labelCls}>What's your biggest challenge with managing relationships?</p>
                    <ChoiceGrid
                      options={CHALLENGE_OPTIONS}
                      value={data.biggest_challenge}
                      onChange={(v) => setData({ ...data, biggest_challenge: v })}
                      cols={1}
                    />
                  </div>
                  <div>
                    <p className={labelCls}>How do you currently manage contacts?</p>
                    <ChoiceGrid
                      options={TOOL_OPTIONS}
                      value={data.current_tool}
                      onChange={(v) => setData({ ...data, current_tool: v })}
                    />
                  </div>
                </div>

                {error && <p className="text-sm text-destructive">{error}</p>}

                <button onClick={goStep2} className="veeto-btn-primary w-full justify-center">
                  Continue
                </button>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-5">
                <div className="space-y-1.5">
                  <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight leading-tight text-foreground">
                    You're almost in <span aria-hidden>🚀</span>
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    A couple of optional details and we'll save your spot.
                  </p>
                </div>

                <label className="flex items-start gap-3 p-3.5 rounded-xl border border-border bg-secondary/40 cursor-pointer hover:border-primary/30 transition-colors">
                  <input
                    type="checkbox"
                    checked={data.wants_beta}
                    onChange={(e) => setData({ ...data, wants_beta: e.target.checked })}
                    className="mt-0.5 w-4 h-4 rounded border-border accent-[hsl(var(--primary))]"
                  />
                  <span className="text-sm text-foreground font-medium">
                    I want early access + beta testing
                  </span>
                </label>

                <div>
                  <label className={labelCls} htmlFor="ea-phone">
                    Get WhatsApp updates <span className="text-muted-foreground font-normal">(optional)</span>
                  </label>
                  <input
                    id="ea-phone" ref={firstFieldRef} className={inputCls}
                    value={data.phone}
                    onChange={(e) => setData({ ...data, phone: e.target.value })}
                    placeholder="+1 555 123 4567"
                  />
                </div>

                <div>
                  <label className={labelCls} htmlFor="ea-ref">
                    Where did you hear about Veeto AI? <span className="text-muted-foreground font-normal">(optional)</span>
                  </label>
                  <input
                    id="ea-ref" className={inputCls}
                    value={data.referral_source}
                    onChange={(e) => setData({ ...data, referral_source: e.target.value })}
                    placeholder="Twitter, a friend, podcast…"
                  />
                </div>

                {error && (
                  <div className="space-y-2">
                    <p className="text-sm text-destructive">{error}</p>
                    <button
                      onClick={submit}
                      disabled={loading}
                      className="veeto-btn-secondary w-full justify-center disabled:opacity-70"
                    >
                      Retry
                    </button>
                  </div>
                )}

                {!error && (
                  <div className="space-y-2">
                    <button
                      onClick={submit}
                      disabled={loading}
                      className="veeto-btn-primary w-full justify-center disabled:opacity-70"
                    >
                      {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Reserve my spot"}
                    </button>
                    <p className="text-xs text-center text-muted-foreground">
                      Early users get priority access.
                    </p>
                  </div>
                )}
              </div>
            )}

            {step === 4 && (
              <div className="text-center space-y-5 py-2">
                <div className="mx-auto w-14 h-14 rounded-full bg-accent flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                    You're on the list <span aria-hidden>🎉</span>
                  </h2>
                  <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                    We'll reach out soon with early access.
                  </p>
                </div>

                <div className="pt-2 space-y-2">
                  <a
                    href="https://wa.me/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="veeto-btn-primary w-full justify-center"
                  >
                    Join WhatsApp Updates
                  </a>
                  <button
                    onClick={copyShare}
                    className="veeto-btn-secondary w-full justify-center"
                  >
                    {copied ? (
                      <><Check className="w-4 h-4" /> Link copied</>
                    ) : (
                      <><Copy className="w-4 h-4" /> Refer a friend</>
                    )}
                  </button>
                  <button
                    onClick={() => handleOpenChange(false)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </Ctx.Provider>
  );
}
