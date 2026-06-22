import { Link } from "react-router-dom";
import veetoLogo from "@/assets/veeto-logo.svg.asset.json";

const Footer = () => (
  <footer className="border-t border-border/50 bg-background">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <img src={veetoLogo.url} alt="Veeto AI logo" className="w-6 h-6 rounded-md object-cover" />
        <span className="text-sm font-semibold text-foreground">Veeto AI</span>
      </div>
      <div className="flex items-center gap-4 text-xs text-muted-foreground">
        <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
        <span>© {new Date().getFullYear()} Veeto AI. All rights reserved.</span>
      </div>
    </div>
  </footer>
);

export default Footer;
