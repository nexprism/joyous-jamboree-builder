import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking at least 1-2 weeks in advance to ensure availability. For peak seasons and special events, earlier booking is advised.",
  },
  {
    question: "Do you provide customized themes?",
    answer:
      "Yes, we specialize in creating custom themes based on your preferences and event type. Our team works closely with you to bring your vision to life.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We provide our decoration services across Delhi NCR, including Gurgaon, Noida, and Faridabad.",
  },
];

export const FAQSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom max-w-3xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">Everything You Need to Know</p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-background rounded-xl border-0 shadow-card overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 text-left font-display text-lg font-semibold text-foreground hover:text-primary hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
