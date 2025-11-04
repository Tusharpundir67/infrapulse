import { Zap } from "lucide-react";
import { Button } from "./ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <Zap className="h-8 w-8 text-accent animate-pulse" />
            <div className="absolute inset-0 bg-accent/20 blur-lg rounded-full" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
            InfraPulse
          </span>
        </div>

        {/* CTA Button */}
        <Button 
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90 animate-pulse font-semibold shadow-[var(--shadow-glow)]"
        >
          Start Your Pilot Project
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
