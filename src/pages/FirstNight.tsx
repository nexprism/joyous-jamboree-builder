import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { DecorationGrid } from "@/components/common/DecorationGrid";
import { CTASection } from "@/components/home/CTASection";

const firstNightItems = [
  { src: "https://divyanshiballoondecorations.com/img/first-night/1.jpeg", title: "First Night Decoration" },
  { src: "https://divyanshiballoondecorations.com/img/first-night/2.jpeg", title: "First Night Decoration" },
  { src: "https://divyanshiballoondecorations.com/img/first-night/3.jpeg", title: "First Night Decoration" },
  { src: "https://divyanshiballoondecorations.com/img/first-night/4.jpeg", title: "First Night Decoration" },
];

const FirstNight = () => {
  return (
    <Layout>
      <PageHeader
        title="First Night Decorations"
        subtitle="Beautiful romantic setups for your special first night together"
      />
      <DecorationGrid items={firstNightItems} />
      <CTASection />
    </Layout>
  );
};

export default FirstNight;
