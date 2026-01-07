const works = [
  {
    title: "Birthday Celebrations",
    subtitle: "Creating magical moments",
    image: "https://divyanshiballoondecorations.com/img/birthday/1.jpeg",
  },
  {
    title: "Anniversary Special",
    subtitle: "Romantic setups",
    image: "https://divyanshiballoondecorations.com/img/anniversary/2.jpeg",
  },
  {
    title: "Baby Shower Events",
    subtitle: "Adorable themes",
    image: "https://divyanshiballoondecorations.com/img/baby/1.jpeg",
  },
];

export const RecentWorksSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Recent Works
          </h2>
          <p className="text-muted-foreground">
            Beautiful Decorations That Speak For Themselves
          </p>
        </div>

        {/* Works Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <div
              key={work.title}
              className="group relative overflow-hidden rounded-2xl shadow-card card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/3]">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="font-display text-xl font-semibold text-white mb-1">
                  {work.title}
                </h3>
                <p className="text-white/80 text-sm">{work.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
