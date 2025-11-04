import { useState, useEffect } from "react";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const ExitIntentPopup = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    let hasShown = false;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setOpen(true);
        hasShown = true;
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email captured:", email);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md bg-card border-accent/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-accent">
            Don't leave 3 weeks of ROI on the table
          </DialogTitle>
          <DialogDescription className="text-base text-foreground/80">
            Get instant access to our AI-powered infrastructure audit. See your project's true potential in minutes, not weeks.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <Input
            type="email"
            placeholder="your.email@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-background border-border"
          />
          <Button 
            type="submit" 
            className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
            size="lg"
          >
            Get the Audit Instantly
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;
