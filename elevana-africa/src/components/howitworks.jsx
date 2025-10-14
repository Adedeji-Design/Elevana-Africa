import { GraduationCap, Users, Briefcase } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Learn New Skills",
      description: "Access tailored courses and earn certifications to boost your expertise.",
      icon: GraduationCap,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      number: "02",
      title: "Connect with Professionals",
      description: "Network with mentors, join community groups, and expand your circle.",
      icon: Users,
      color: "text-primary-light",
      bgColor: "bg-primary-light/10",
    },
    {
      number: "03",
      title: "Get Matched with Jobs",
      description: "AI-powered matching connects you with opportunities that fit your profile.",
      icon: Briefcase,
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            How It <span className="bg-gradient-to-r from-primary to-primary-light dark:from-primary-light dark:to-primary bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple steps to kickstart your career growth with Elevana Africa
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[calc(100%+1rem)] w-[calc(100%-2rem)] h-0.5 bg-gradient-to-r from-primary/40 to-transparent"></div>
              )}

              {/* Step Card */}
              <div className="relative bg-card rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-all group">
                <div className="absolute -top-4 -right-4 text-6xl font-bold text-muted/20">
                  {/* {step.number} */}
                </div>

                <div
                  className={`${step.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <step.icon className={`${step.color} w-8 h-8`} />
                </div>

                <h3 className="text-xl lg:text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
