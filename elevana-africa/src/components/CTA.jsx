import { ArrowRight, Sparkles } from "lucide-react";
import  Button  from "../components/button"; // adjust path if needed

const CTA = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary-light to-accent relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-foreground/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/20 mb-6 backdrop-blur-sm">
            <Sparkles className="w-8 h-8 text-primary-foreground" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-6">
            Your Journey Starts Here
          </h2>

          {/* Subtext */}
          <p className="text-lg sm:text-xl lg:text-2xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto">
            Elevana Africa connects you to skills, people, and opportunities. Join thousands of
            professionals building their future today.
          </p>

          {/* CTA Button */}
          <Button
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-2xl hover:shadow-3xl text-lg group"
          >
            Join Elevana Today
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={24} />
          </Button>

          {/* Additional Info */}
          <p className="mt-6 text-sm text-primary-foreground/80">
            Free to join • Start learning today • Get Hired 
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
