import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Decorations", path: "/decorations", hasDropdown: true },
  { name: "Gallery", path: "/gallery" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
];

const decorationLinks = [
  { name: "Birthday Decorations", path: "/birthday-decorations" },
  { name: "Anniversary Decorations", path: "/anniversary-decorations" },
  { name: "Baby Shower", path: "/baby-shower" },
  { name: "First Night", path: "/first-night" },
  { name: "Car Decorations", path: "/car-decorations" },
  { name: "Haldi & Mehndi", path: "/haldi-mehndi" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-sm">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>Mon - Sun : 09.00 AM - 09.00 PM</span>
          </div>
          <a href="tel:+917303389855" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Phone className="w-4 h-4" />
            <span>+91 73033 89855</span>
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container-custom flex items-center justify-between h-20 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display text-xl font-bold">D</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display text-lg font-semibold text-foreground leading-tight">Divyanshi</h1>
              <p className="text-xs text-muted-foreground">Balloon Decorations</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <Link
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === link.path ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && <span className="ml-1">▼</span>}
                </Link>
                {link.hasDropdown && showDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-background border border-border rounded-lg shadow-card-hover py-2 animate-fade-in">
                    {decorationLinks.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild className="btn-glow">
              <a href="https://api.whatsapp.com/send/?phone=917303389855&text=Hi,&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                Get Quotes →
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-background border-t border-border animate-slide-up">
            <nav className="container-custom py-4 px-4 space-y-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.path}
                    className={`block py-3 px-4 rounded-lg font-medium transition-colors ${
                      location.pathname === link.path
                        ? "bg-secondary text-primary"
                        : "text-foreground hover:bg-secondary"
                    }`}
                    onClick={() => !link.hasDropdown && setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.hasDropdown && (
                    <div className="pl-4 mt-1 space-y-1">
                      {decorationLinks.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block py-2 px-4 text-sm text-muted-foreground hover:text-primary transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Button asChild className="w-full btn-glow">
                  <a href="https://api.whatsapp.com/send/?phone=917303389855&text=Hi,&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                    Get Quotes →
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
