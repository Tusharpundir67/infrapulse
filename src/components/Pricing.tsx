import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import pricingChart from "@/assets/financial-success-chart.jpeg";

const Pricing = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background via-card to-background">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
            <span className="text-sm font-semibold text-accent">Outcome-Based Pricing</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold">
            Pay for Results, <span className="text-accent">Not Reports</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            InfraPulse charges based on achieved ROI or efficiency gains. No upfront consulting fees. No bloated invoices. Just shared success.
          </p>
        </div>

        {/* 3D Pricing Chart Visual */}
        <div className="max-w-4xl mx-auto mb-16">
          <img 
            src={pricingChart} 
            alt="Financial success visualization showing +15% ROI uplift with data-driven metrics breaking through traditional project limits" 
            className="w-full h-auto rounded-lg shadow-[var(--shadow-card)]"
          />
        </div>

        {/* Comparison Chart */}
        <div className="mb-16">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Traditional Consulting */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-destructive rounded-full" />
                  <h3 className="text-xl font-bold text-foreground">Traditional Consulting</h3>
                </div>
                
                <div className="space-y-4 pl-6 border-l-2 border-destructive/30">
                  <div className="space-y-2">
                    <div className="font-semibold text-destructive">Fixed Fees</div>
                    <div className="text-sm text-muted-foreground">$50,000 - $200,000 upfront</div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-semibold text-destructive">Timesheet Billing</div>
                    <div className="text-sm text-muted-foreground">Pay for hours, not outcomes</div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-semibold text-destructive">No Performance Link</div>
                    <div className="text-sm text-muted-foreground">Get invoiced regardless of results</div>
                  </div>
                </div>

                <div className="p-4 bg-destructive/10 border border-destructive/30 rounded-lg">
                  <div className="text-5xl font-bold text-destructive mb-1">$150K</div>
                  <div className="text-sm text-muted-foreground">Average consulting project cost</div>
                </div>
              </div>

              {/* InfraPulse */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                  <h3 className="text-xl font-bold text-accent">InfraPulse</h3>
                </div>
                
                <div className="space-y-4 pl-6 border-l-2 border-accent/50">
                  <div className="space-y-2">
                    <div className="font-semibold text-accent">ROI-Linked Pricing</div>
                    <div className="text-sm text-foreground">Only pay when you achieve results</div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-semibold text-accent">Performance-Based</div>
                    <div className="text-sm text-foreground">Fees tied to efficiency gains</div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-semibold text-accent">Shared Success</div>
                    <div className="text-sm text-foreground">We win when you win</div>
                  </div>
                </div>

                <div className="p-4 bg-accent/10 border border-accent/30 rounded-lg shadow-[0_0_20px_rgba(255,215,0,0.2)]">
                  <div className="text-5xl font-bold text-accent mb-1">0%</div>
                  <div className="text-sm text-foreground">Upfront fees required</div>
                </div>
              </div>
            </div>

            {/* Visual Bar Comparison */}
            <div className="mt-12 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Traditional Model</span>
                  <span className="text-destructive font-semibold">100% upfront</span>
                </div>
                <div className="h-8 bg-destructive/20 rounded-lg overflow-hidden">
                  <div className="h-full w-full bg-destructive/60" />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-foreground">InfraPulse Model</span>
                  <span className="text-accent font-semibold">Success-based</span>
                </div>
                <div className="h-8 bg-accent/20 rounded-lg overflow-hidden">
                  <div className="h-full w-[30%] bg-accent/60 animate-pulse" />
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center space-y-6">
          <p className="text-lg text-muted-foreground">
            Ready to align consulting costs with actual value delivered?
          </p>
          <Button 
            size="lg"
            className="text-lg px-12 py-6 bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-accent-foreground font-semibold shadow-[0_0_30px_rgba(255,215,0,0.3)] hover:shadow-[0_0_40px_rgba(255,215,0,0.5)] transition-all duration-300 hover:scale-105"
          >
            Start Your Pilot Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
