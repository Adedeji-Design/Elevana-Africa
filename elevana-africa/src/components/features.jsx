import { 
  BookOpen, Briefcase, Users, Award, BarChart3, 
  FileText, ShieldCheck, Gift, TrendingUp 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Learning Hub",
      description:
        "Access a vast library of courses, tutorials, and certifications. Learn at your own pace with content designed by industry experts.",
      icon: BookOpen,
      gradient: "from-primary to-primary-light",
    },
    {
      title: "Job & Internship Matching",
      description:
        "Automatically connect with employers and recruiters seeking skills that match your profile. Real opportunities, real impact.",
      icon: Briefcase,
      gradient: "from-green-500 to-emerald-300",
    },
    {
      title: "Networking & Mentorship",
      description:
        "Engage with peers, mentors, and professionals across Africa. Build meaningful relationships that drive your career growth.",
      icon: Users,
      gradient: "from-purple-500 to-indigo-300",
    },
    {
      title: "CV Optimization",
      description:
        "Enhance your profile visibility with AI-powered CV analysis and tailored recommendations that help you stand out.",
      icon: FileText,
      gradient: "from-blue-500 to-sky-300",
    },
    {
      title: "Employer Dashboards",
      description:
        "Employers benefit from advanced analytics and dashboards to identify, assess, and recruit top talent efficiently.",
      icon: BarChart3,
      gradient: "from-orange-400 to-yellow-300",
    },
    {
      title: "Verified Badges",
      description:
        "Earn credibility through verified skills, completed courses, and professional endorsements displayed on your profile.",
      icon: ShieldCheck,
      gradient: "from-teal-500 to-cyan-300",
    },
    {
      title: "Scholarships & Funding",
      description:
        "Access scholarship opportunities, financial aid, and sponsored programs to support your learning journey.",
      icon: Gift,
      gradient: "from-pink-500 to-rose-300",
    },
    {
      title: "Career Advancement Tools",
      description:
        "Track your progress, set goals, and gain insights that help you plan and achieve your next big career move.",
      icon: TrendingUp,
      gradient: "from-yellow-400 to-amber-300",
    },
    {
      title: "Certifications & Recognition",
      description:
        "Receive verified certificates upon completion and showcase your expertise to employers and the Elevana community.",
      icon: Award,
      gradient: "from-indigo-500 to-violet-300",
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-background transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Everything You Need in{" "}
            <span className="bg-gradient-to-r from-primary to-primary-light dark:from-primary-light dark:to-primary bg-clip-text text-transparent">
              One Place
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to accelerate your career growth
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card text-card-foreground rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all group animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md`}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 
