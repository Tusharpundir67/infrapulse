import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import AIWorkflow from "@/components/AIWorkflow";
import Dashboard from "@/components/Dashboard";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <StorySection />
      <AIWorkflow />
      <Dashboard />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  );
};

export default Index;
