import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-primary to-accent text-white">
      <div className="container-custom text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Ready to make your event special?
        </h2>
        <p className="text-white/90 max-w-2xl mx-auto mb-8">
          Contact us today for a personalized quote and let us transform your celebration
          into a magical experience.
        </p>
        <Button
          asChild
          size="lg"
          variant="secondary"
          className="font-semibold"
        >
          <a
            href="https://api.whatsapp.com/send/?phone=917303389855&text=Hi, I'd like a free quote.&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get a Free Quote →
          </a>
        </Button>
      </div>
    </section>
  );
};
