import { Mic, Check, CheckCheck, Smile, Paperclip, Camera, Send, Sparkles, Image as ImageIcon } from "lucide-react";
import { useEarlyAccessModal } from "@/components/EarlyAccessModal";


/* ---------- WhatsApp Mockup ---------- */
const WhatsAppMockup = () => (
  <div className="relative mx-auto w-full max-w-[340px] rounded-[2.4rem] bg-black p-2 shadow-2xl"
       style={{ boxShadow: "0 30px 80px -20px hsl(0 0% 0% / 0.25), 0 0 0 1px hsl(0 0% 0% / 0.06)" }}>
    {/* Phone screen */}
    <div className="relative rounded-[2rem] overflow-hidden bg-[#ECE5DD]" style={{ aspectRatio: "9/17" }}>
      {/* Notch / status bar */}
      <div className="bg-[#075E54] text-white">
        <div className="flex justify-between items-center px-5 pt-2 pb-1 text-[11px] font-semibold">
          <span>9:41</span>
          <span className="flex gap-1 items-center"><span>•••</span><span>📶</span><span>🔋</span></span>
        </div>
        {/* Header */}
        <div className="flex items-center gap-3 px-3 py-2.5 bg-[#075E54]">
          <span className="text-white/90 text-xl leading-none">‹</span>
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center text-base">
            🧠
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[13px] font-semibold text-white leading-tight">Veeto</p>
            <p className="text-[10px] text-white/75 leading-tight">online</p>
          </div>
          <div className="flex gap-3 text-white/85 text-sm">
            <span>📹</span><span>📞</span><span>⋮</span>
          </div>
        </div>
      </div>

      {/* Chat area */}
      <div className="px-3 py-3 space-y-2 text-[12px]" style={{
        backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><circle cx='4' cy='4' r='1' fill='%23d4cfc1' opacity='0.4'/></svg>\")",
        backgroundColor: "#ECE5DD",
      }}>
        {/* User voice note */}
        <div className="flex justify-end">
          <div className="max-w-[78%] rounded-xl rounded-tr-sm bg-[#DCF8C6] px-2.5 py-2 shadow-sm">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
                <Mic className="w-3.5 h-3.5 text-white" />
              </div>
              <div className="flex items-end gap-[2px] h-5 flex-1">
                {Array.from({ length: 18 }).map((_, i) => (
                  <span key={i} className="w-[2px] rounded-full bg-[#075E54]/60"
                    style={{ height: `${6 + Math.abs(Math.sin(i * 0.7)) * 14}px` }} />
                ))}
              </div>
              <span className="text-[10px] text-gray-500">0:14</span>
            </div>
            <p className="mt-1.5 text-[11.5px] text-gray-700 italic leading-snug">
              "Just met Sarah from Sequoia at Disrupt — wants Series A traction update"
            </p>
            <div className="flex justify-end items-center gap-1 mt-1">
              <span className="text-[9px] text-gray-500">9:42 AM</span>
              <CheckCheck className="w-3 h-3 text-[#34B7F1]" />
            </div>
          </div>
        </div>

        {/* Veeto reply */}
        <div className="flex">
          <div className="max-w-[80%] rounded-xl rounded-tl-sm bg-white px-2.5 py-1.5 shadow-sm">
            <p className="text-[11.5px] text-gray-800 leading-snug">
              Got it. Saved <span className="font-semibold">Sarah Chen</span> → Sequoia → Series A interest. Reminder set for Friday to send pitch deck. ✓
            </p>
            <p className="text-[9px] text-gray-500 text-right mt-0.5">9:42 AM</p>
          </div>
        </div>

        {/* User text */}
        <div className="flex justify-end">
          <div className="max-w-[70%] rounded-xl rounded-tr-sm bg-[#DCF8C6] px-2.5 py-1.5 shadow-sm">
            <p className="text-[11.5px] text-gray-800">Who do I know in LA?</p>
            <div className="flex justify-end items-center gap-1 mt-0.5">
              <span className="text-[9px] text-gray-500">9:43 AM</span>
              <CheckCheck className="w-3 h-3 text-[#34B7F1]" />
            </div>
          </div>
        </div>

        {/* Veeto */}
        <div className="flex">
          <div className="max-w-[80%] rounded-xl rounded-tl-sm bg-white px-2.5 py-1.5 shadow-sm">
            <p className="text-[11.5px] text-gray-800">3 people: <span className="font-semibold">Sarah Chen</span>, David Park, Lisa Tran. Want details?</p>
            <p className="text-[9px] text-gray-500 text-right mt-0.5">9:43 AM</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="rounded-xl rounded-tr-sm bg-[#DCF8C6] px-2.5 py-1 shadow-sm">
            <p className="text-[11.5px] text-gray-800">yes</p>
            <div className="flex justify-end items-center gap-1">
              <span className="text-[9px] text-gray-500">9:43</span>
              <CheckCheck className="w-3 h-3 text-[#34B7F1]" />
            </div>
          </div>
        </div>

        {/* Veeto detailed */}
        <div className="flex">
          <div className="max-w-[85%] rounded-xl rounded-tl-sm bg-white px-2.5 py-1.5 shadow-sm">
            <p className="text-[11.5px] text-gray-800 leading-snug">
              <span className="font-semibold">Sarah Chen</span> — Sequoia partner. Last met Disrupt 3wk ago. Owes you a Series A update. <span className="whitespace-nowrap">📍 LA</span>
            </p>
            <p className="text-[9px] text-gray-500 text-right mt-0.5">9:43 AM</p>
          </div>
        </div>
      </div>

      {/* Composer */}
      <div className="absolute bottom-0 inset-x-0 bg-[#ECE5DD] border-t border-black/5 px-2 py-1.5 flex items-center gap-1.5">
        <div className="flex-1 bg-white rounded-full flex items-center gap-2 px-3 py-1.5 shadow-sm">
          <Smile className="w-3.5 h-3.5 text-gray-500" />
          <span className="flex-1 text-[11px] text-gray-400">Message</span>
          <Paperclip className="w-3.5 h-3.5 text-gray-500" />
          <Camera className="w-3.5 h-3.5 text-gray-500" />
        </div>
        <div className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center">
          <Mic className="w-3.5 h-3.5 text-white" />
        </div>
      </div>
    </div>
  </div>
);

/* ---------- Telegram Mockup ---------- */
const TelegramMockup = () => (
  <div className="relative mx-auto w-full max-w-[340px] rounded-[2.4rem] bg-black p-2 shadow-2xl"
       style={{ boxShadow: "0 30px 80px -20px hsl(210 40% 30% / 0.3), 0 0 0 1px hsl(0 0% 0% / 0.06)" }}>
    <div className="relative rounded-[2rem] overflow-hidden bg-[#F4F5F7]" style={{ aspectRatio: "9/17", fontFamily: "Roboto, system-ui, sans-serif" }}>
      <div className="bg-[#0088CC] text-white">
        <div className="flex justify-between items-center px-5 pt-2 pb-1 text-[11px] font-semibold">
          <span>9:41</span>
          <span className="flex gap-1 items-center"><span>•••</span><span>📶</span><span>🔋</span></span>
        </div>
        <div className="flex items-center gap-3 px-3 py-2.5">
          <span className="text-white/90 text-xl leading-none">‹</span>
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#5DADE2] to-[#0088CC] flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[13px] font-semibold text-white leading-tight flex items-center gap-1.5">
              Veeto Bot
              <span className="text-[8px] bg-white/20 px-1 py-px rounded-sm uppercase tracking-wider">bot</span>
            </p>
            <p className="text-[10px] text-white/75 leading-tight">bot</p>
          </div>
          <div className="text-white/85 text-base">⋮</div>
        </div>
      </div>

      <div className="px-3 py-3 space-y-2 text-[12px] bg-[#F4F5F7]">
        {/* User forwards LinkedIn screenshot */}
        <div className="flex justify-end">
          <div className="max-w-[78%] rounded-2xl rounded-tr-md bg-[#EFFDDE] px-2 pt-2 pb-1 shadow-sm">
            <div className="rounded-lg overflow-hidden bg-white border border-black/5 mb-1">
              <div className="flex items-center gap-2 p-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-700 flex items-center justify-center text-white text-[10px] font-bold">in</div>
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold text-gray-800 leading-tight truncate">Marcus Webb</p>
                  <p className="text-[9px] text-gray-500 leading-tight truncate">Staff Engineer · ex-Stripe</p>
                </div>
              </div>
              <div className="px-2 pb-1.5 flex items-center gap-1">
                <ImageIcon className="w-2.5 h-2.5 text-gray-400" />
                <span className="text-[9px] text-gray-500">linkedin.com</span>
              </div>
            </div>
            <div className="flex justify-end items-center gap-1">
              <span className="text-[9px] text-gray-500">9:41</span>
              <CheckCheck className="w-3 h-3 text-[#0088CC]" />
            </div>
          </div>
        </div>

        {/* Bot reply */}
        <div className="flex">
          <div className="max-w-[82%] rounded-2xl rounded-tl-md bg-white px-2.5 py-1.5 shadow-sm">
            <p className="text-[11.5px] text-gray-800 leading-snug">
              Saved <span className="font-semibold">Marcus Webb</span> → Staff Eng, ex-Stripe → met at AI conference.
              <span className="ml-1 inline-flex items-center px-1.5 py-0.5 rounded-full bg-orange-100 text-orange-700 text-[9px] font-semibold">🚀 Hiring</span>
            </p>
            <p className="text-[9px] text-gray-500 text-right mt-0.5">9:41</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="rounded-2xl rounded-tr-md bg-[#EFFDDE] px-2.5 py-1 shadow-sm">
            <p className="text-[11.5px] text-gray-800">remind me in 2 weeks</p>
            <div className="flex justify-end items-center gap-1">
              <span className="text-[9px] text-gray-500">9:42</span>
              <CheckCheck className="w-3 h-3 text-[#0088CC]" />
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="rounded-2xl rounded-tl-md bg-white px-2.5 py-1 shadow-sm">
            <p className="text-[11.5px] text-gray-800">Done. I'll nudge you May 11.</p>
            <p className="text-[9px] text-gray-500 text-right mt-0.5">9:42</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="rounded-2xl rounded-tr-md bg-[#EFFDDE] px-2.5 py-1 shadow-sm">
            <p className="text-[11.5px] text-gray-800">who can refer me to Google?</p>
            <div className="flex justify-end items-center gap-1">
              <span className="text-[9px] text-gray-500">9:43</span>
              <CheckCheck className="w-3 h-3 text-[#0088CC]" />
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="max-w-[85%] rounded-2xl rounded-tl-md bg-white px-2.5 py-1.5 shadow-sm">
            <p className="text-[11.5px] text-gray-800 leading-snug">
              <span className="font-semibold">Anita Joshi</span> (Senior PM) said to ping anytime. Last connected SaaStr.
            </p>
            <p className="text-[9px] text-gray-500 text-right mt-0.5">9:43</p>
          </div>
        </div>
      </div>

      {/* Composer */}
      <div className="absolute bottom-0 inset-x-0 bg-white border-t border-black/5 px-3 py-2 flex items-center gap-2">
        <Paperclip className="w-4 h-4 text-gray-500" />
        <span className="flex-1 text-[11px] text-gray-400">Message</span>
        <Smile className="w-4 h-4 text-gray-500" />
        <Send className="w-4 h-4 text-[#0088CC]" />
      </div>
    </div>
  </div>
);

const MessagingSection = () => {
  const { open } = useEarlyAccessModal();
  return (
    <section className="relative band-beige overflow-hidden">
      <div className="grain" />
      <div className="veeto-section relative">
        <div className="text-center mb-12 max-w-3xl mx-auto space-y-4">
          <span className="font-handwritten text-2xl text-veeto-coral inline-block -rotate-2">
            ~ no download required ~
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.05]">
            No new app. <span className="veeto-gradient-text italic">Just text us.</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Veeto lives inside WhatsApp and Telegram — the apps you already check 80 times a day. Forward a voice note. Snap a business card. Type a memory. Veeto handles the rest.
          </p>
        </div>

        {/* Mockups */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-8 max-w-4xl mx-auto items-start">
          <div className="relative">
            <div className="absolute -top-4 -left-4 sticky-note bg-veeto-sticky-yellow text-gray-800 text-lg -rotate-6 z-10">
              on WhatsApp 💚
            </div>
            <div className="transition-transform duration-300 hover:-translate-y-1 hover:rotate-[-1deg]">
              <WhatsAppMockup />
            </div>
          </div>
          <div className="relative md:mt-12">
            <div className="absolute -top-4 -right-4 sticky-note bg-veeto-sticky-mint text-gray-800 text-lg rotate-6 z-10">
              on Telegram 🚀
            </div>
            <div className="transition-transform duration-300 hover:-translate-y-1 hover:rotate-[1deg]">
              <TelegramMockup />
            </div>
          </div>
        </div>

        {/* Tags row */}
        <div className="mt-14 flex flex-wrap justify-center gap-3 sm:gap-4">
          {[
            { e: "📲", t: "Already on your phone", bg: "bg-veeto-sticky-yellow/60" },
            { e: "🎙️", t: "Voice notes work natively", bg: "bg-veeto-sticky-mint/70" },
            { e: "⚡", t: "Replies in under 3 seconds", bg: "bg-veeto-sticky-coral/70" },
          ].map((p, i) => (
            <div key={i} className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${p.bg} border border-black/5 text-sm font-medium text-gray-800 shadow-sm`}>
              <span className="text-base">{p.e}</span>
              {p.t}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center gap-2">
          <button onClick={() => open()} className="veeto-btn-primary">
            Get the WhatsApp link →
          </button>
          <span className="font-handwritten text-veeto-coral text-xl mt-1 -rotate-2">
            * we'll send it the moment we launch
          </span>
        </div>
      </div>
    </section>
  );
};

export default MessagingSection;
