import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { GallerySection } from "@/components/home/GallerySection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { RecentWorksSection } from "@/components/home/RecentWorksSection";
import { FAQSection } from "@/components/home/FAQSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";
import { BlogSection } from "@/components/home/BlogSection";

const birthdayImages = [
  { src: "https://divyanshiballoondecorations.com/img/birthday/6.jpeg", title: "Birthday Decoration" },
  { src: "https://divyanshiballoondecorations.com/img/birthday/7.jpeg", title: "Birthday Decoration" },
  { src: "https://divyanshiballoondecorations.com/img/birthday/8.jpeg", title: "Birthday Decoration" },
  { src: "https://divyanshiballoondecorations.com/img/birthday/9.jpeg", title: "Birthday Decoration" },
];

const anniversaryImages = [
  { src: "https://divyanshiballoondecorations.com/img/anniversary/6.jpeg", title: "Anniversary Decoration" },
  { src: "https://divyanshiballoondecorations.com/img/anniversary/10.jpeg", title: "Anniversary Decoration" },
  { src: "https://divyanshiballoondecorations.com/img/anniversary/11.jpeg", title: "Anniversary Decoration" },
  { src: "https://divyanshiballoondecorations.com/img/anniversary/1.jpeg", title: "Anniversary Decoration" },
];

const babyShowerImages = [
  { src: "https://divyanshiballoondecorations.com/img/baby/4.jpeg", title: "Baby Shower" },
  { src: "https://divyanshiballoondecorations.com/img/baby/5.jpeg", title: "Baby Shower" },
  { src: "https://divyanshiballoondecorations.com/img/baby/6.jpeg", title: "Baby Shower" },
  { src: "https://divyanshiballoondecorations.com/img/baby/7.jpeg", title: "Baby Shower" },
];

const firstNightImages = [
  { src: "https://divyanshiballoondecorations.com/img/first-night/1.jpeg", title: "First Night Decoration" },
  { src: "https://divyanshiballoondecorations.com/img/first-night/2.jpeg", title: "First Night Decoration" },
  { src: "https://divyanshiballoondecorations.com/img/first-night/3.jpeg", title: "First Night Decoration" },
  { src: "https://divyanshiballoondecorations.com/img/first-night/4.jpeg", title: "First Night Decoration" },
];

const carImages = [
  { src: "https://divyanshiballoondecorations.com/img/car/4.jpeg", title: "Car Decoration" },
  { src: "https://divyanshiballoondecorations.com/img/car/5.jpeg", title: "Car Decoration" },
  { src: "https://divyanshiballoondecorations.com/img/car/6.jpeg", title: "Car Decoration" },
  { src: "https://divyanshiballoondecorations.com/img/car/1.jpeg", title: "Car Decoration" },
];

const haldiImages = [
  { src: "https://divyanshiballoondecorations.com/img/haldi/3.jpeg", title: "Haldi & Mehndi" },
  { src: "https://divyanshiballoondecorations.com/img/haldi/4.jpeg", title: "Haldi & Mehndi" },
  { src: "https://divyanshiballoondecorations.com/img/haldi/5.jpeg", title: "Haldi & Mehndi" },
  { src: "https://divyanshiballoondecorations.com/img/haldi/6.jpeg", title: "Haldi & Mehndi" },
];

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <GallerySection title="Birthday Decorations" images={birthdayImages} />
      <GallerySection title="Anniversary Decorations" images={anniversaryImages} />
      <GallerySection title="Baby Shower & Welcome" images={babyShowerImages} />
      <GallerySection title="First Night Decorations" images={firstNightImages} />
      <GallerySection title="Car Decorations" images={carImages} />
      <GallerySection title="Haldi & Mehndi Decorations" images={haldiImages} />
      <WhyChooseUsSection />
      <RecentWorksSection />
      <FAQSection />
      <TestimonialsSection />
      <CTASection />
      <BlogSection />
    </Layout>
  );
};

export default Index;
