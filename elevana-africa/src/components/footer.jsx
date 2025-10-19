import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logoWhite from "@/assets/logo/elevana-logo.png";
import logoBlack from "@/assets/logo/elevanalogo-dark.png";
import WhatsAppButton from "@/components/whatsappbutton";
import { useTheme } from "next-themes";
const Footer = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Contact", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
    ],
    resources: [
      { name: "Help Center", href: "#" },
      { name: "Community", href: "#" },
      { name: "Tutorials", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/share/15miwRcDKw/", label: "Facebook" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/elevan-africa/", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer
      id="footer"
      className="bg-foreground text-background py-12 md:py-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-[5px]">
            <h3 className="text-2xl font-bold">
              <a href="">
                <img
                  src={theme === "dark" ? logoBlack : logoWhite}
                  alt="Elevana-Africa Logo"
                  className="h-24 w-auto md:h-[150px] transition-all duration-300"
                />
                <span className="sr-only">Elevana Africa</span>{" "}
              </a>
            </h3>
            <p className="text-background/80 text-sm">
              Connecting learning, networking, and hiring on a single platform.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-background transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-background transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-background transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        

        {/* Copyright */}
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © {currentYear} Elevana Africa. All rights reserved.
          </p>
        </div>
      </div>
            <WhatsAppButton />
      
    </footer>
  );
};

export default Footer;
