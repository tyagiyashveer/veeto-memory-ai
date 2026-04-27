import { useState, useEffect } from "react";
import { Brain } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleWaitlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const form = document.getElementById("hero-email-input") as HTMLInputElement | null;
    const section = document.getElementById("hero-waitlist");
    if (section) section.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => form?.focus({ preventScroll: true }), 700);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg veeto-gradient-bg flex items-center justify-center">
            <Brain className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold text-foreground tracking-tight">Veeto AI</span>
        </div>
        <a href="#hero-waitlist" onClick={handleWaitlistClick} className="veeto-btn-primary !px-5 !py-2 !text-sm">
          Join Waitlist
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
