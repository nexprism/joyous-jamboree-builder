import { Award, Clock, Palette } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "We use only the highest quality materials and latest design trends for all our decorations.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "Our experienced team ensures perfect setup and timely completion for your events.",
  },
  {
    icon: Palette,
    title: "Custom Designs",
    description: "Personalized decoration themes tailored to your preferences and event type.",
  },
];

export const WhyChooseUsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Divyanshi Balloon Decorations?
          </h2>
          <p className="text-muted-foreground">
            Delhi NCR's Most Trusted Decoration Service
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center p-8 rounded-2xl bg-secondary card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
