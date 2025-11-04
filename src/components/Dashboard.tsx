import { Button } from "@/components/ui/button";
import dashboardImage from "@/assets/dashboard-analytics.jpeg";

const Dashboard = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-card to-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Dashboard Image */}
          <div className="order-2 md:order-1 animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden border border-accent/20 shadow-[0_0_60px_rgba(255,215,0,0.15)]">
              <img 
                src={dashboardImage} 
                alt="Infrastructure Project Analytics Dashboard" 
                className="w-full h-auto"
              />
              
              {/* Animated Overlay Badge */}
              <div className="absolute top-6 left-6 px-4 py-2 bg-accent text-accent-foreground rounded-lg font-semibold shadow-lg animate-pulse">
                ROI Uplift: +15%
              </div>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 mt-6">
              <div className="px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-sm font-medium text-foreground">
                ⚡ Real-time Updates
              </div>
              <div className="px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-sm font-medium text-foreground">
                📊 Predictive Analytics
              </div>
              <div className="px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-sm font-medium text-foreground">
                🎯 Scenario Planning
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 md:order-2 space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <span className="text-sm font-semibold text-accent">Live Analytics</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Your Infrastructure Intelligence Hub
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              InfraPulse delivers enterprise-grade analytics through an intuitive dashboard designed for infrastructure decision-makers.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex gap-4 items-start p-4 rounded-xl bg-card/50 border border-border hover:border-accent/50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📈</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Dynamic ROI Forecasting</h3>
                  <p className="text-sm text-muted-foreground">Real-time projections adjust as you modify project parameters</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 rounded-xl bg-card/50 border border-border hover:border-accent/50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎲</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Scenario Modeling</h3>
                  <p className="text-sm text-muted-foreground">Test multiple approaches before committing resources</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 rounded-xl bg-card/50 border border-border hover:border-accent/50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⚠️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Risk Assessment</h3>
                  <p className="text-sm text-muted-foreground">AI-identified risks with mitigation recommendations</p>
                </div>
              </div>
            </div>

            <Button 
              size="lg"
              className="mt-6 bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-accent-foreground font-semibold shadow-[0_0_30px_rgba(255,215,0,0.3)] hover:shadow-[0_0_40px_rgba(255,215,0,0.5)] transition-all duration-300"
            >
              Explore the Dashboard
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
