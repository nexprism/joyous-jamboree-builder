import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Shield, Award, Headphones, BadgeCheck } from "lucide-react";

const quickLinks = [
  { name: "Birthday Decorations", path: "/birthday-decorations" },
  { name: "Anniversary Decorations", path: "/anniversary-decorations" },
  { name: "Baby Shower", path: "/baby-shower" },
  { name: "Gallery", path: "/gallery" },
  { name: "About Us", path: "/about" },
];

const features = [
  { icon: Award, title: "Customer Satisfaction", desc: "100% satisfaction guaranteed" },
  { icon: Headphones, title: "24/7 Support", desc: "Round the clock support" },
  { icon: BadgeCheck, title: "Best Price", desc: "Competitive pricing" },
  { icon: Shield, title: "Safe & Secure", desc: "Professional team" },
];

export const Footer = () => {
  return (
    <footer className="bg-[hsl(220,20%,15%)] text-[hsl(220,10%,85%)]">
      {/* Features Bar */}
      <div className="border-b border-[hsl(220,20%,25%)]">
        <div className="container-custom section-padding py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[hsl(0,0%,98%)]">{feature.title}</h4>
                  <p className="text-xs text-[hsl(220,10%,65%)]">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom section-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display text-xl font-bold">D</span>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-[hsl(0,0%,98%)]">Divyanshi</h3>
                <p className="text-xs text-[hsl(220,10%,65%)]">Balloon Decorations</p>
              </div>
            </div>
            <p className="text-sm text-[hsl(220,10%,65%)] leading-relaxed">
              Delhi NCR's most trusted decoration service. Creating magical memories for your special occasions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-[hsl(0,0%,98%)] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-[hsl(220,10%,65%)] hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold text-[hsl(0,0%,98%)] mb-4">Contact Information</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-1" />
                <div>
                  <p className="text-sm font-medium text-[hsl(0,0%,98%)]">Phone Number</p>
                  <a href="tel:+917303389855" className="text-sm text-[hsl(220,10%,65%)] hover:text-primary">
                    +91 730 338 9855
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary mt-1" />
                <div>
                  <p className="text-sm font-medium text-[hsl(0,0%,98%)]">Email Address</p>
                  <a href="mailto:info@divyanshidecorations.com" className="text-sm text-[hsl(220,10%,65%)] hover:text-primary">
                    info@divyanshidecorations.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <div>
                  <p className="text-sm font-medium text-[hsl(0,0%,98%)]">Office Location</p>
                  <p className="text-sm text-[hsl(220,10%,65%)]">
                    House no 873, Gali No. 4, Bhawani Enclave, Sector 9, Gurugram, Haryana 122006
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="font-display text-lg font-semibold text-[hsl(0,0%,98%)] mb-4">Working Hours</h4>
            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-primary mt-1" />
              <div>
                <p className="text-sm font-medium text-[hsl(0,0%,98%)]">Monday - Sunday</p>
                <p className="text-sm text-[hsl(220,10%,65%)]">09:00 AM - 09:00 PM</p>
              </div>
            </div>
            <div className="mt-6">
              <h5 className="text-sm font-medium text-[hsl(0,0%,98%)] mb-2">Areas We Serve</h5>
              <p className="text-sm text-[hsl(220,10%,65%)]">
                Delhi NCR including Gurgaon, Noida, Faridabad, and all major locations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[hsl(220,20%,25%)]">
        <div className="container-custom py-6 px-4">
          <p className="text-center text-sm text-[hsl(220,10%,55%)]">
            © {new Date().getFullYear()} Divyanshi Balloon Decorations. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
