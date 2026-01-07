import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { Card, CardContent } from "@/components/ui/card";

const decorationCategories = [
  {
    title: "Birthday Decorations",
    description: "Creative balloon arrangements for birthday celebrations",
    image: "https://divyanshiballoondecorations.com/img/birthday/1.jpeg",
    link: "/birthday-decorations",
  },
  {
    title: "Anniversary Decorations",
    description: "Elegant romantic setups for anniversaries",
    image: "https://divyanshiballoondecorations.com/img/anniversary/1.jpeg",
    link: "/anniversary-decorations",
  },
  {
    title: "Baby Shower",
    description: "Adorable themed decorations for baby showers",
    image: "https://divyanshiballoondecorations.com/img/baby/1.jpeg",
    link: "/baby-shower",
  },
  {
    title: "First Night",
    description: "Romantic first night decorations",
    image: "https://divyanshiballoondecorations.com/img/first-night/1.jpeg",
    link: "/first-night",
  },
  {
    title: "Car Decorations",
    description: "Beautiful car decorations for weddings",
    image: "https://divyanshiballoondecorations.com/img/car/1.jpeg",
    link: "/car-decorations",
  },
  {
    title: "Haldi & Mehndi",
    description: "Traditional pre-wedding ceremony decorations",
    image: "https://divyanshiballoondecorations.com/img/haldi/3.jpeg",
    link: "/haldi-mehndi",
  },
];

const Decorations = () => {
  return (
    <Layout>
      <PageHeader
        title="Our Decorations"
        subtitle="Explore our wide range of decoration services"
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {decorationCategories.map((category, index) => (
              <Link to={category.link} key={category.title}>
                <Card
                  className="group overflow-hidden card-hover shadow-card hover:shadow-card-hover border-0 h-full"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{category.description}</p>
                    <span className="inline-block mt-4 text-primary font-medium text-sm group-hover:translate-x-2 transition-transform">
                      View Gallery →
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Decorations;
