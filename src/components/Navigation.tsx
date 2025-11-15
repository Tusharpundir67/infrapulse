import { Zap, Search } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    // simulate successful login
    setTimeout(() => {
      navigate("/dashboard");
    }, 500);
  };

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

        {/* Search + Sign In */}
        <div className="flex items-center gap-4">

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition w-48 md:w-64"
            />
          </div>

          {/* Sign In Button */}
          <Button
            onClick={handleSignIn}
            className="rounded-xl px-6 bg-yellow-400 hover:bg-yellow-500 text-black"
          >
            Sign In
          </Button>

        </div>
      </div>
    </nav>
  );
};

export default Navigation;
