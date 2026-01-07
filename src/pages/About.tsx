import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";
import { Award, Users, Calendar, MapPin } from "lucide-react";

const stats = [
  { icon: Calendar, value: "5+", label: "Years Experience" },
  { icon: Users, value: "1000+", label: "Happy Clients" },
  { icon: Award, value: "2000+", label: "Events Completed" },
  { icon: MapPin, value: "Delhi NCR", label: "Service Area" },
];

const About = () => {
  return (
    <Layout>
      <PageHeader
        title="About Us"
        subtitle="Delhi NCR's most trusted decoration service"
      />

      {/* About Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://divyanshiballoondecorations.com/img/birthday/1.jpeg"
                alt="Our work"
                className="rounded-2xl shadow-card-hover w-full"
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Creating Magical Moments Since Years
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                At Divyanshi Balloon Decorations, we believe every celebration deserves to be special. 
                Our team of creative professionals is dedicated to transforming your events into magical 
                experiences through stunning balloon arrangements and themed decorations.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With years of experience serving Delhi NCR, including Gurgaon, Noida, and Faridabad, 
                we have become the go-to choice for premium decoration services. From intimate 
                birthday parties to grand anniversary celebrations, we bring creativity, quality, 
                and reliability to every event.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our commitment to customer satisfaction, timely delivery, and competitive pricing 
                has earned us the trust of thousands of happy clients across the region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="font-display text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUsSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default About;
