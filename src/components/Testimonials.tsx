import { Card } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      video: "/InfraPulse_Data_Center_Cost_Savings.mp4",
      quote:
        "We saved 12% on our data center rollout thanks to InfraPulse's predictive modeling.",
      name: "Sarah Chen",
      role: "Project Director, MetroBuild",
    },
    {
      video: "/InfraPulse_Fast_ROI_Insights.mp4",
      quote: "InfraPulse gave us ROI clarity in 15 minutes — CBRE took 3 weeks.",
      name: "Rajesh Kumar",
      role: "VP Infrastructure",
    },
    {
      video: "/InfraPulse_Outcome_Driven_Financial_Consulting.mp4",
      quote:
        "Finally, a consulting platform that speaks our language: outcomes.",
      name: "Michael Brusells",
      role: "CFO, GreenGrid Infrastructure",
    },
  ];

  return (
    <section className="py-21 px-6 bg-gradient-to-b from-card to-background relative overflow-hidden">
      {/* Soft Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,215,0,0.05),transparent_50%)]" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
            <span className="text-sm font-semibold text-accent">
              Client Success Stories
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Trusted by Infrastructure Leaders
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {testimonials.map((item, index) => (
            <Card
              key={index}
              className="p-5 bg-card/50 backdrop-blur-md border-border rounded-xl 
              transition-all duration-500 hover:scale-[1.03] hover:border-accent/40 
              hover:shadow-[0_0_40px_rgba(255,215,0,0.15)] animate-slide-up"
            >
              {/* Video */}
              <video
                src={item.video}
                controls
                className="w-full h-auto rounded-lg mb-4 shadow-lg"
              />

              {/* Text Content */}
              <div className="space-y-2 text-center px-2">
                <p className="text-sm italic text-muted-foreground leading-relaxed">
                  "{item.quote}"
                </p>

                <div className="mt-3 font-semibold text-accent text-sm">
                  {item.name}
                </div>
                <div className="text-xs text-muted-foreground">
                  {item.role}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Company Logos */}
        <div className="space-y-6">
          <div className="text-center text-sm text-muted-foreground">
            Powering infrastructure projects for leading organizations
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {["InfraTech", "MetroBuild", "GreenGrid", "UrbanCore", "SmartInfra"].map(
              (company) => (
                <div
                  key={company}
                  className="text-xl font-bold text-foreground/40 hover:text-accent transition-colors"
                >
                  {company}
                </div>
              )
            )}
          </div>
        </div>

        {/* Insight Box */}
        <Card className="mt-20 p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30 animate-fade-in">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">💡</span>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">Industry Insight</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                CBRE's CEO admitted legacy teams used basic timesheets until 2025.
                InfraPulse was built from day one with generative AI and
                outcome-based modeling at its core.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Testimonials;
