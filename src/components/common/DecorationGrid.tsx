import { Button } from "@/components/ui/button";

interface DecorationItem {
  src: string;
  title: string;
}

interface DecorationGridProps {
  items: DecorationItem[];
}

export const DecorationGrid = ({ items }: DecorationGridProps) => {
  const handleBookNow = () => {
    window.open(
      "https://api.whatsapp.com/send/?phone=917303389855&text=Hi, I'm interested in booking a decoration.&type=phone_number&app_absent=0",
      "_blank"
    );
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-xl shadow-card card-hover"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-4">
                <h4 className="text-white font-medium text-sm mb-2 text-center">{item.title}</h4>
                <Button size="sm" onClick={handleBookNow} className="btn-glow">
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
