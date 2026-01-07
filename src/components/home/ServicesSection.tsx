import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Birthday Celebrations",
    description: "Make your birthday special with our creative balloon arrangements",
    image: "https://divyanshiballoondecorations.com/img/birthday/2.jpeg",
    link: "/birthday-decorations",
  },
  {
    title: "Anniversary Decorations",
    description: "Celebrate your special day with elegant decorative setups",
    image: "https://divyanshiballoondecorations.com/img/anniversary/1.jpeg",
    link: "/anniversary-decorations",
  },
  {
    title: "Baby Shower Events",
    description: "Welcome your little one with adorable themed decorations",
    image: "https://divyanshiballoondecorations.com/img/baby/1.jpeg",
    link: "/baby-shower",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Premium Services
          </h2>
          <p className="text-muted-foreground">
            Customized decorations for every celebration
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link to={service.link} key={service.title}>
              <Card
                className="group overflow-hidden card-hover shadow-card hover:shadow-card-hover border-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                  <span className="inline-block mt-4 text-primary font-medium text-sm group-hover:translate-x-2 transition-transform">
                    Learn More →
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
