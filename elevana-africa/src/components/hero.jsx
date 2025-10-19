import React from "react";
import Button from "../components/button";
import heroIllustration from "../assets/logo/hero-illustration.jpg";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  BookOpen,
  Briefcase,
  TrendingUp,
} from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-hero pt-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              One Platform.{" "}
              <span className="bg-gradient-to-r from-primary to-primary-light dark:from-primary-light dark:to-primary bg-clip-text text-transparent">
                Endless Possibilities.
              </span>
            </h1>

            <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground">
              Learn. Network. Get Hired.
            </p>

            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Elevana Africa is your all-in-one platform for professional
              growth. Access expert-led courses, personalized career coaching,
              and a vibrant community to help you achieve your career goals.
            </p>

            {/* Metric Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              <Users size={20} />
              <span>+1,000 active users and growing</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button variant="hero" size="lg" className="group">
                <Link to="/signup">Get Started</Link>
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </Button>
              <Button variant="outline" size="lg">
                Explore Courses
              </Button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative animate-slide-in-right">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={heroIllustration}
                alt="Learn, Network, and Get Hired with Elevana Africa"
                className="w-full h-auto animate-float"
              />
            </div>

            {/* Overlay Stats Box */}
            <div
              className="absolute bottom-[-70px] right-2 bg-white/90 backdrop-blur-md rounded-xl shadow-2xl p-3 w-40
             transform rotate-3 z-20"
            >
              <h2 className="font-black text-xs mb-1.5 text-black">
                Key Statistics
              </h2>

              <div className="flex flex-col gap-1">
                {/* Courses */}
                <div className="flex items-center gap-1.5 bg-blue-100 text-blue-800 rounded-lg px-2 py-1 shadow-sm">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span className="font-semibold text-[10px]">
                    100+ Courses
                  </span>
                </div>

                {/* Job Opportunities */}
                <div className="flex items-center gap-1.5 bg-green-100 text-green-800 rounded-lg px-2 py-1 shadow-sm">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span className="font-semibold text-[10px]">
                    Job Opportunities
                  </span>
                </div>

                {/* Networking */}
                <div className="flex items-center gap-1.5 bg-purple-100 text-purple-800 rounded-lg px-2 py-1 shadow-sm">
                  <Users className="w-3.5 h-3.5" />
                  <span className="font-semibold text-[10px]">Networking</span>
                </div>

                {/* Career Advancements */}
                <div className="flex items-center gap-1.5 bg-yellow-100 text-yellow-800 rounded-lg px-2 py-1 shadow-sm">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span className="font-semibold text-[10px]">
                    Career Advancements
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
