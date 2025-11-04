import { Card } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "InfraPulse gave us ROI clarity in 15 minutes—CBRE took 3 weeks.",
      author: "Rajesh Kumar",
      role: "VP Infrastructure",
      company: "InfraTech Solutions"
    },
    {
      quote: "We saved 12% on our data center rollout thanks to InfraPulse's predictive modeling.",
      author: "Sarah Chen",
      role: "Project Director",
      company: "MetroBuild"
    },
    {
      quote: "Finally, a consulting platform that speaks our language: outcomes.",
      author: "Michael Patel",
      role: "CFO",
      company: "GreenGrid Infrastructure"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-card to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,215,0,0.05),transparent_50%)]" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
            <span className="text-sm font-semibold text-accent">Client Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Trusted by Infrastructure Leaders
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-accent/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.15)]"
            >
              <div className="space-y-4">
                <div className="text-4xl text-accent/30">"</div>
                <p className="text-foreground leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="pt-4 border-t border-border">
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-sm text-accent font-medium">{testimonial.company}</div>
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
            {["InfraTech", "MetroBuild", "GreenGrid", "UrbanCore", "SmartInfra"].map((company) => (
              <div 
                key={company}
                className="text-xl font-bold text-foreground/40 hover:text-accent transition-colors"
              >
                {company}
              </div>
            ))}
          </div>
        </div>

        {/* Insight Box */}
        <Card className="mt-16 p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">💡</span>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">Industry Insight</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                CBRE's own CEO admits legacy teams used basic timesheets until 2025. InfraPulse was built from day one with generative AI and outcome-based models at its core.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Testimonials;
