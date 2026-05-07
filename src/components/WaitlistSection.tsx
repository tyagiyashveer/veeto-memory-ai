import { useEarlyAccessModal } from "@/components/EarlyAccessModal";
import SocialProof from "./SocialProof";

const WaitlistSection = () => {
  const { open } = useEarlyAccessModal();

  return (
    <section id="waitlist" className="relative band-indigo overflow-hidden">
      <div className="grain" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-veeto-coral/15 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-veeto-yellow/10 blur-[100px]" />
      </div>

      <div className="veeto-section relative">
        <SocialProof />

        <div className="max-w-lg mx-auto text-center space-y-8">
          <div className="space-y-3">
            <span className="font-handwritten text-2xl text-veeto-yellow inline-block -rotate-2">
              ~ last call ~
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05]">
              Get early access{" "}
              <span
                className="italic"
                style={{
                  background: "linear-gradient(90deg, hsl(var(--veeto-yellow)), hsl(var(--veeto-coral)))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                before launch.
              </span>
            </h2>
            <p className="text-base text-white/80">
              We're rolling out Veeto in waves. Join the waitlist to be first in line.
            </p>
          </div>

          <button
            onClick={() => open("claim_spot")}
            className="veeto-btn-primary !px-8 !py-4 !text-base"
            style={{ boxShadow: "var(--veeto-glow)" }}
          >
            Claim my spot
          </button>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
