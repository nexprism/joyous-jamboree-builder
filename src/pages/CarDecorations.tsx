import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { DecorationGrid } from "@/components/common/DecorationGrid";
import { CTASection } from "@/components/home/CTASection";

const carItems = [
  { src: "https://divyanshiballoondecorations.com/img/car/1.jpeg", title: "Car Decoration" },
  { src: "https://divyanshiballoondecorations.com/img/car/4.jpeg", title: "Car Decoration" },
  { src: "https://divyanshiballoondecorations.com/img/car/5.jpeg", title: "Car Decoration" },
  { src: "https://divyanshiballoondecorations.com/img/car/6.jpeg", title: "Car Decoration" },
];

const CarDecorations = () => {
  return (
    <Layout>
      <PageHeader
        title="Car Decorations"
        subtitle="Beautiful car decorations for weddings and special occasions"
      />
      <DecorationGrid items={carItems} />
      <CTASection />
    </Layout>
  );
};

export default CarDecorations;
