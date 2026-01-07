import { Button } from "@/components/ui/button";

interface GallerySectionProps {
  title: string;
  images: { src: string; title: string }[];
}

export const GallerySection = ({ title, images }: GallerySectionProps) => {
  const handleBookNow = () => {
    window.open(
      "https://api.whatsapp.com/send/?phone=917303389855&text=Hi, I'm interested in booking a decoration.&type=phone_number&app_absent=0",
      "_blank"
    );
  };

  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          {title}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {images.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-xl shadow-card"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-4">
                <h4 className="text-white font-medium text-sm mb-2">{item.title}</h4>
                <Button
                  size="sm"
                  onClick={handleBookNow}
                  className="btn-glow"
                >
                  Book Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
