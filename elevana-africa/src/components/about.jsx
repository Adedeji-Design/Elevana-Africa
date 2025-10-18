import Button from "@/components/button";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-primary to-primary-light dark:from-primary-light dark:to-primary bg-clip-text text-transparent">
                Elevana Africa
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
              Elevana Africa is a centralized platform for academic
              collaboration, job alert, search and application, certifications,
              resources and peer support. Students gain access to mentorship,
              career guidance, scholarshps, funding and grants and internship
              opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg">
                Learn More
              </Button>
              <Button variant="outline" size="lg">
                Explore
              </Button>
            </div>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 animate-fade-in delay-300">
            <div className="text-center p-6 bg-card rounded-xl shadow-sm">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-primary-light dark:from-primary-light dark:to-primary bg-clip-text text-transparent mb-2 transition-all duration-300">
                1,000+
              </div>
              <div className="text-sm sm:text-base text-muted-foreground">
                Active Users
              </div>
            </div>

            <div className="text-center p-6 bg-card rounded-xl shadow-sm">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-primary-light dark:from-primary-light dark:to-primary bg-clip-text text-transparent mb-2 transition-all duration-300">
                500+
              </div>
              <div className="text-sm sm:text-base text-muted-foreground">
                Courses Available
              </div>
            </div>

            <div className="text-center p-6 bg-card rounded-xl shadow-sm">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-primary-light dark:from-primary-light dark:to-primary bg-clip-text text-transparent mb-2 transition-all duration-300">
                200+
              </div>
              <div className="text-sm sm:text-base text-muted-foreground">
                Job Opportunities
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
