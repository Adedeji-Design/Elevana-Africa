import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Features from "@/components/features";
import HowItWorks from "@/components/howitworks";
import Testimonials from "@/components/testimonials";
import CTA from "@/components/CTA";

import Footer from "../components/footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <HowItWorks />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
