import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { DecorationGrid } from "@/components/common/DecorationGrid";
import { CTASection } from "@/components/home/CTASection";

const allItems = [
  { src: "https://divyanshiballoondecorations.com/img/birthday/1.jpeg", title: "Birthday" },
  { src: "https://divyanshiballoondecorations.com/img/birthday/2.jpeg", title: "Birthday" },
  { src: "https://divyanshiballoondecorations.com/img/anniversary/1.jpeg", title: "Anniversary" },
  { src: "https://divyanshiballoondecorations.com/img/anniversary/2.jpeg", title: "Anniversary" },
  { src: "https://divyanshiballoondecorations.com/img/baby/1.jpeg", title: "Baby Shower" },
  { src: "https://divyanshiballoondecorations.com/img/baby/2.jpeg", title: "Baby Shower" },
  { src: "https://divyanshiballoondecorations.com/img/first-night/1.jpeg", title: "First Night" },
  { src: "https://divyanshiballoondecorations.com/img/first-night/2.jpeg", title: "First Night" },
  { src: "https://divyanshiballoondecorations.com/img/car/1.jpeg", title: "Car Decoration" },
  { src: "https://divyanshiballoondecorations.com/img/car/4.jpeg", title: "Car Decoration" },
  { src: "https://divyanshiballoondecorations.com/img/haldi/3.jpeg", title: "Haldi & Mehndi" },
  { src: "https://divyanshiballoondecorations.com/img/haldi/4.jpeg", title: "Haldi & Mehndi" },
];

const Gallery = () => {
  return (
    <Layout>
      <PageHeader
        title="Our Gallery"
        subtitle="Explore our beautiful decoration work across all categories"
      />
      <DecorationGrid items={allItems} />
      <CTASection />
    </Layout>
  );
};

export default Gallery;
