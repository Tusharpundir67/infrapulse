const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-card border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
              InfraPulse
            </h3>
            <p className="text-sm text-muted-foreground">
              AI-powered infrastructure consulting that delivers results, not reports.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-accent cursor-pointer transition-colors">ROI Forecaster</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Dashboard Analytics</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Scenario Planning</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Risk Assessment</li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-accent cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Case Studies</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-accent cursor-pointer transition-colors">Documentation</li>
              <li className="hover:text-accent cursor-pointer transition-colors">API Reference</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Support</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Blog</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2025 InfraPulse. Built by LM Thapar School of Management
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <span className="hover:text-accent cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-accent cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>

        {/* Credit */}
        <div className="mt-6 text-center text-xs text-muted-foreground/60">
          Mentored by Sarabjit Singh Baxi
        </div>
      </div>
    </footer>
  );
};

export default Footer;
