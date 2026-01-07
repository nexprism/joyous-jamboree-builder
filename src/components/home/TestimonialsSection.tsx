import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    event: "Birthday Party",
    review:
      "Amazing service! The decoration was exactly what I wanted for my daughter's birthday. Highly recommend!",
    image: "https://divyanshiballoondecorations.com/img/posters/poster1.png",
  },
  {
    name: "Rahul Verma",
    event: "Anniversary Celebration",
    review:
      "Professional team and beautiful decoration. Made our anniversary extra special!",
    image: "https://divyanshiballoondecorations.com/img/posters/poster2.png",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground">Real Reviews from Happy Customers</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-secondary rounded-2xl p-8 shadow-card card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-display text-lg font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">{testimonial.event}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground italic">"{testimonial.review}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
