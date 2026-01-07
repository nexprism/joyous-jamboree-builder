import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const allServices = [
  {
    title: "Birthday Decorations",
    description: "Create magical birthday celebrations with our stunning balloon arrangements and themed decorations.",
    image: "https://divyanshiballoondecorations.com/img/birthday/1.jpeg",
    link: "/birthday-decorations",
  },
  {
    title: "Anniversary Decorations",
    description: "Celebrate your love story with elegant and romantic anniversary setups.",
    image: "https://divyanshiballoondecorations.com/img/anniversary/1.jpeg",
    link: "/anniversary-decorations",
  },
  {
    title: "Baby Shower",
    description: "Welcome your little bundle of joy with adorable themed decorations.",
    image: "https://divyanshiballoondecorations.com/img/baby/1.jpeg",
    link: "/baby-shower",
  },
  {
    title: "First Night Decorations",
    description: "Create a romantic and memorable first night experience.",
    image: "https://divyanshiballoondecorations.com/img/first-night/1.jpeg",
    link: "/first-night",
  },
  {
    title: "Car Decorations",
    description: "Beautiful car decorations for weddings and special occasions.",
    image: "https://divyanshiballoondecorations.com/img/car/1.jpeg",
    link: "/car-decorations",
  },
  {
    title: "Haldi & Mehndi",
    description: "Traditional and vibrant decorations for your pre-wedding ceremonies.",
    image: "https://divyanshiballoondecorations.com/img/haldi/3.jpeg",
    link: "/haldi-mehndi",
  },
];

const Services = () => {
  return (
    <Layout>
      <PageHeader
        title="Our Services"
        subtitle="Premium decoration services for all your special occasions"
      />
      
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <Link to={service.link} key={service.title}>
                <Card
                  className="group overflow-hidden card-hover shadow-card hover:shadow-card-hover border-0 h-full"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-56 overflow-hidden">
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
                    <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                    <span className="inline-block text-primary font-medium text-sm group-hover:translate-x-2 transition-transform">
                      View Gallery →
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUsSection />
      <CTASection />
    </Layout>
  );
};

export default Services;
