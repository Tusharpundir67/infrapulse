import { Card } from "@/components/ui/card";

const StorySection = () => {
  return (
    <section className="py-19 px-6 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <span className="text-sm font-semibold text-accent">The Broken Experience</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Ever waited <span className="text-accent">weeks</span> for a consulting report?
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Only to get generic advice and a hefty invoice? We did too. That's why we built InfraPulse—to flip the model.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-xl">✗</span>
                </div>
                <p className="text-muted-foreground">No more static fees for basic analysis</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-xl">✗</span>
                </div>
                <p className="text-muted-foreground">No more slow, manual data processing</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-xl">✗</span>
                </div>
                <p className="text-muted-foreground">No more waiting weeks for actionable insights</p>
              </div>
            </div>

            <div className="pt-6 border-t border-border">
             
            </div>
          </div>

          {/* Right: Visual Comparison */}
          <div className="space-y-6">
            {/* Legacy Consulting Card */}
            <Card className="p-6 bg-card border-destructive/30 relative overflow-hidden group hover:scale-105 transition-transform duration-300">
              <div className="absolute top-0 right-0 px-3 py-1 bg-destructive/20 text-destructive text-xs font-semibold rounded-bl-lg">
                OLD WAY
              </div>
              <div className="space-y-4 pt-4">
                <h3 className="text-xl font-bold text-foreground">Legacy Consulting</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full" />
                    <span>3-6 week turnaround</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full" />
                    <span>Static PDF reports</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full" />
                    <span>Fixed fees ($50k-$200k)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full" />
                    <span>Manual data analysis</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* InfraPulse Card */}
            <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/50 relative overflow-hidden group hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(255,215,0,0.2)]">
              <div className="absolute top-0 right-0 px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-bl-lg">
                NEW WAY
              </div>
              <div className="space-y-4 pt-4">
                <h3 className="text-xl font-bold text-accent">InfraPulse AI</h3>
                <div className="space-y-3 text-sm text-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                    <span>Real-time dashboards</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                    <span>Instant forecasts (3 minutes)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                    <span>ROI-linked pricing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                    <span>AI-powered simulations</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
