import { Card } from "@/components/ui/card";
import workflowImage from "@/assets/ai-workflow.jpeg";

const AIWorkflow = () => {
  const steps = [
    {
      number: "01",
      title: "Upload Specs",
      description: "Drop your unstructured project documents, PDFs, or data files",
      icon: "📄"
    },
    {
      number: "02",
      title: "AI Processing",
      description: "Dual LLM system extracts, analyzes, and simulates scenarios",
      icon: "🧠"
    },
    {
      number: "03",
      title: "Instant Results",
      description: "Get ROI forecasts, cost scenarios, and risk analysis in minutes",
      icon: "⚡"
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-card" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
            <span className="text-sm font-semibold text-accent">The AI Advantage</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold">
            Real Results, Not Reports
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how InfraPulse transforms unstructured project data into actionable intelligence
          </p>
        </div>

        {/* Workflow Image */}
        <div className="mb-12 rounded-2xl overflow-hidden border border-accent/20 shadow-[0_0_50px_rgba(255,215,0,0.1)]">
          <img 
            src={workflowImage} 
            alt="AI Workflow Process" 
            className="w-full h-auto"
          />
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-accent/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.2)] group"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <span className="text-5xl">{step.icon}</span>
                  <span className="text-6xl font-bold text-accent/20 group-hover:text-accent/40 transition-colors">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Key Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 rounded-xl bg-accent/5 border border-accent/20">
            <div className="text-3xl font-bold text-accent mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Accuracy Rate</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-accent/5 border border-accent/20">
            <div className="text-3xl font-bold text-accent mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Projects Analyzed</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-accent/5 border border-accent/20">
            <div className="text-3xl font-bold text-accent mb-2">₹12 Cr</div>
            <div className="text-sm text-muted-foreground">Cost Savings</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-accent/5 border border-accent/20">
            <div className="text-3xl font-bold text-accent mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIWorkflow;
