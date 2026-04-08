import { Brain } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/50 bg-background">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-md veeto-gradient-bg flex items-center justify-center">
          <Brain className="w-3 h-3 text-primary-foreground" />
        </div>
        <span className="text-sm font-semibold text-foreground">Veeto AI</span>
      </div>
      <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Veeto AI. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
