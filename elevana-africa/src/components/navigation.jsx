import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../components/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import logoWhite from "../assets/logo/elevana-logo.png";
import logoBlack from "../assets/logo/elevanalogo-dark.png";
import { useTheme } from "next-themes";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const learnOptions = [
    {
      name: "Browse Courses",
      href: "#features",
      description: "Explore our extensive course catalog",
    },
    {
      name: "My Learning",
      href: "#features",
      description: "Track your learning progress",
    },
    {
      name: "Certifications",
      href: "#features",
      description: "Get certified in your field",
    },
    {
      name: "Instructors",
      href: "#features",
      description: "Meet our expert instructors",
    },
  ];

  const networkOptions = [
    {
      name: "Find Professionals",
      href: "#features",
      description: "Connect with industry experts",
    },
    {
      name: "Mentorship",
      href: "#features",
      description: "Find or become a mentor",
    },
    {
      name: "Communities",
      href: "#features",
      description: "Join professional communities",
    },
    {
      name: "Events",
      href: "#features",
      description: "Attend networking events",
    },
  ];

  const jobsOptions = [
    {
      name: "Browse Jobs",
      href: "#features",
      description: "Find your next opportunity",
    },
    {
      name: "Post a Job",
      href: "#features",
      description: "Hire talented professionals",
    },
    {
      name: "My Applications",
      href: "#features",
      description: "Track your job applications",
    },
    {
      name: "Career Resources",
      href: "#features",
      description: "Tips and guides for job seekers",
    },
  ];

  const simpleLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#footer" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-2">
              <img
                src={theme === "dark" ? logoWhite : logoBlack}
                alt="Elevana-Africa Logo"
                className="h-24 w-auto md:h-[150px] transition-all duration-300"
              />
              <span className="sr-only">Elevana Africa</span>{" "}
              {/* for accessibility */}
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {simpleLinks.slice(0, 1).map((link) => (
                  <NavigationMenuItem key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="px-3 lg:px-4 py-2 text-sm lg:text-base font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </button>
                  </NavigationMenuItem>
                ))}

                {/* Learn Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                    Learn
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 bg-background">
                      {learnOptions.map((option) => (
                        <li key={option.name}>
                          <NavigationMenuLink asChild>
                            <button
                              onClick={() => scrollToSection(option.href)}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left w-full"
                            >
                              <div className="text-sm font-medium leading-none">
                                {option.name}
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {option.description}
                              </p>
                            </button>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Network Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                    Network
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 bg-background">
                      {networkOptions.map((option) => (
                        <li key={option.name}>
                          <NavigationMenuLink asChild>
                            <button
                              onClick={() => scrollToSection(option.href)}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left w-full"
                            >
                              <div className="text-sm font-medium leading-none">
                                {option.name}
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {option.description}
                              </p>
                            </button>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Jobs Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                    Jobs
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 bg-background">
                      {jobsOptions.map((option) => (
                        <li key={option.name}>
                          <NavigationMenuLink asChild>
                            <button
                              onClick={() => scrollToSection(option.href)}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left w-full"
                            >
                              <div className="text-sm font-medium leading-none">
                                {option.name}
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {option.description}
                              </p>
                            </button>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {simpleLinks.slice(1).map((link) => (
                  <NavigationMenuItem key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="px-3 lg:px-4 py-2 text-sm lg:text-base font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </button>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-2"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </Button>

            <Button variant="hero" size="default" className="ml-4" asChild>
              <Link to="/signup">Join Now</Link>
            </Button>
          </div>
          {/* mobilr */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {simpleLinks.slice(0, 1).map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-secondary/50 rounded-md transition-colors"
                >
                  {link.name}
                </button>
              ))}

              {/* Learn Mobile Menu */}
              <div className="space-y-1">
                <div className="px-3 py-2 text-base font-semibold text-foreground">
                  Learn
                </div>
                {learnOptions.map((option) => (
                  <button
                    key={option.name}
                    onClick={() => scrollToSection(option.href)}
                    className="block w-full text-left px-6 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-md transition-colors"
                  >
                    {option.name}
                  </button>
                ))}
              </div>

              {/* Network Mobile Menu */}
              <div className="space-y-1">
                <div className="px-3 py-2 text-base font-semibold text-foreground">
                  Network
                </div>
                {networkOptions.map((option) => (
                  <button
                    key={option.name}
                    onClick={() => scrollToSection(option.href)}
                    className="block w-full text-left px-6 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-md transition-colors"
                  >
                    {option.name}
                  </button>
                ))}
              </div>

              {/* Jobs Mobile Menu */}
              <div className="space-y-1">
                <div className="px-3 py-2 text-base font-semibold text-foreground">
                  Jobs
                </div>
                {jobsOptions.map((option) => (
                  <button
                    key={option.name}
                    onClick={() => scrollToSection(option.href)}
                    className="block w-full text-left px-6 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-md transition-colors"
                  >
                    {option.name}
                  </button>
                ))}
              </div>

              {simpleLinks.slice(1).map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-secondary/50 rounded-md transition-colors"
                >
                  {link.name}
                </button>
              ))}

              <div className="pt-2">
                <Button
                  variant="hero"
                  size="default"
                  className="w-full"
                  asChild
                >
                  <Link to="/signup">Join Now</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
