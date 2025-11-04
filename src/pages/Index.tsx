import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import AIWorkflow from "@/components/AIWorkflow";
import Dashboard from "@/components/Dashboard";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Credentials from "@/components/Credentials";
import Footer from "@/components/Footer";
import ExitIntentPopup from "@/components/ExitIntentPopup";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <StorySection />
      <AIWorkflow />
      <Dashboard />
      <Testimonials />
      <Pricing />
      <Credentials />
      <Footer />
      <ExitIntentPopup />
    </main>
  );
};

export default Index;
