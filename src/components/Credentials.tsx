import trustBadges from "@/assets/trust-badges-3d.jpg";

const Credentials = () => {
  return (
    <section className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built on Academic Excellence & Industry Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            InfraPulse combines cutting-edge research with real-world consulting experience.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <img 
            src={trustBadges} 
            alt="LM Thapar School of Management and Sarabjit Singh Baxi mentorship badges" 
            className="w-full h-auto rounded-lg shadow-[var(--shadow-card)]"
          />
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="text-center p-6 bg-background rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-2 text-accent">
                LM Thapar School of Management
              </h3>
              <p className="text-muted-foreground">
                Built by an elite MBA team specializing in infrastructure analytics and AI-driven business transformation.
              </p>
            </div>
            
            <div className="text-center p-6 bg-background rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-2 text-accent">
                Mentored by Sarabjit Singh Baxi
              </h3>
              <p className="text-muted-foreground">
                Guided by industry veteran with decades of infrastructure consulting and corporate advisory experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credentials;
