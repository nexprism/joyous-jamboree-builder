import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { DecorationGrid } from "@/components/common/DecorationGrid";
import { CTASection } from "@/components/home/CTASection";

const babyShowerItems = [
  { src: "https://divyanshiballoondecorations.com/img/baby/1.jpeg", title: "Baby Shower" },
  { src: "https://divyanshiballoondecorations.com/img/baby/2.jpeg", title: "Baby Shower" },
  { src: "https://divyanshiballoondecorations.com/img/baby/3.jpeg", title: "Baby Shower" },
  { src: "https://divyanshiballoondecorations.com/img/baby/4.jpeg", title: "Baby Shower" },
  { src: "https://divyanshiballoondecorations.com/img/baby/5.jpeg", title: "Baby Shower" },
  { src: "https://divyanshiballoondecorations.com/img/baby/6.jpeg", title: "Baby Shower" },
  { src: "https://divyanshiballoondecorations.com/img/baby/7.jpeg", title: "Baby Shower" },
  { src: "https://divyanshiballoondecorations.com/img/baby/8.jpeg", title: "Baby Shower" },
  { src: "https://divyanshiballoondecorations.com/img/baby/9.jpeg", title: "Baby Shower" },
  { src: "https://divyanshiballoondecorations.com/img/baby/10.jpeg", title: "Baby Shower" },
  { src: "https://divyanshiballoondecorations.com/img/baby/11.jpeg", title: "Baby Shower" },
  { src: "https://divyanshiballoondecorations.com/img/baby/12.jpeg", title: "Baby Shower" },
];

const BabyShower = () => {
  return (
    <Layout>
      <PageHeader
        title="Baby Shower Decorations"
        subtitle="Welcome your little one with adorable themed decorations"
      />
      <DecorationGrid items={babyShowerItems} />
      <CTASection />
    </Layout>
  );
};

export default BabyShower;
