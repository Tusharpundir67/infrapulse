import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dashboard-3d.jpg";
import RoiFormModal from "@/components/RoiFormModal";
import { useState } from "react";
import UserDetailsModal from "@/components/UserDetailsModal";


const Hero = () => {
  const [openForm, setOpenForm] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="AI dashboard pushing aside legacy paper blueprints showing 15% ROI uplift" 
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        
        {/* Animated Data Particles */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, hsl(var(--accent)) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            animation: 'pulse 3s ease-in-out infinite'
          }} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-background/40 backdrop-blur-sm">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-medium text-accent">AI-Powered Infrastructure Intelligence</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-foreground via-foreground to-accent bg-clip-text text-transparent">
              CBRE-quality insights.
            </span>
            <br />
            <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
              10x faster.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            InfraPulse is the AI-powered infrastructure consulting platform that delivers instant ROI forecasts, dynamic market analytics, and real-time scenario planning.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
  onClick={() => setOpenModal(true)}
  className="px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 
             text-black font-semibold shadow-lg hover:shadow-yellow-500/30 
             hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
>
  User Details
</Button>


            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-accent/30 hover:border-accent text-foreground hover:bg-accent/10 transition-all duration-300"
            >
              See Your Project's Potential
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-accent">+15%</div>
              <div className="text-sm text-muted-foreground">Average ROI Uplift</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-accent">10x</div>
              <div className="text-sm text-muted-foreground">Faster Analysis</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-accent">3 min</div>
              <div className="text-sm text-muted-foreground">To First Insight</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-accent/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-accent rounded-full animate-pulse" />
          </div>
        </div>
      </div>
      <UserDetailsModal open={openForm} onClose={() => setOpenForm(false)} />
<UserDetailsModal open={openModal} setOpen={setOpenModal} />

    </section>
  );
};

export default Hero;
