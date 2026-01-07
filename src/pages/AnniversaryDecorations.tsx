import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { DecorationGrid } from "@/components/common/DecorationGrid";
import { CTASection } from "@/components/home/CTASection";

const anniversaryItems = [
  { src: "https://divyanshiballoondecorations.com/img/anniversary/1.jpeg", title: "Anniversary Decoration" },
  { src: "https://divyanshiballoondecorations.com/img/anniversary/2.jpeg", title: "Anniversary Decoration" },
  { src: "https://divyanshiballoondecorations.com/img/anniversary/6.jpeg", title: "Anniversary Decoration" },
  { src: "https://divyanshiballoondecorations.com/img/anniversary/10.jpeg", title: "Anniversary Decoration" },
  { src: "https://divyanshiballoondecorations.com/img/anniversary/11.jpeg", title: "Anniversary Decoration" },
];

const AnniversaryDecorations = () => {
  return (
    <Layout>
      <PageHeader
        title="Anniversary Decorations"
        subtitle="Celebrate your special day with elegant and romantic decorative setups"
      />
      <DecorationGrid items={anniversaryItems} />
      <CTASection />
    </Layout>
  );
};

export default AnniversaryDecorations;
