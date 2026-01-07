import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { DecorationGrid } from "@/components/common/DecorationGrid";
import { CTASection } from "@/components/home/CTASection";

const haldiItems = [
  { src: "https://divyanshiballoondecorations.com/img/haldi/3.jpeg", title: "Haldi & Mehndi Decoration" },
  { src: "https://divyanshiballoondecorations.com/img/haldi/4.jpeg", title: "Haldi & Mehndi Decoration" },
  { src: "https://divyanshiballoondecorations.com/img/haldi/5.jpeg", title: "Haldi & Mehndi Decoration" },
  { src: "https://divyanshiballoondecorations.com/img/haldi/6.jpeg", title: "Haldi & Mehndi Decoration" },
];

const HaldiMehndi = () => {
  return (
    <Layout>
      <PageHeader
        title="Haldi & Mehndi Decorations"
        subtitle="Traditional and beautiful decorations for your Haldi & Mehndi ceremonies"
      />
      <DecorationGrid items={haldiItems} />
      <CTASection />
    </Layout>
  );
};

export default HaldiMehndi;
