import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-secondary to-background overflow-hidden">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Transform Your Events Into{" "}
              <span className="text-gradient">Magical Memories</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Premium balloon decorations for birthdays, anniversaries, and special occasions
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="btn-glow">
                <Link to="/services">Our Services</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/#contact">Contact Us</Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-float">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl" />
              <img
                src="https://divyanshiballoondecorations.com/img/birthday/1.jpeg"
                alt="Beautiful balloon decoration"
                className="relative z-10 w-full h-full object-cover rounded-full shadow-card-hover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
    </section>
  );
};
