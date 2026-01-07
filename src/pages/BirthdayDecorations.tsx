import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { DecorationGrid } from "@/components/common/DecorationGrid";
import { CTASection } from "@/components/home/CTASection";

const birthdayItems = [
  { src: "https://divyanshiballoondecorations.com/img/birthday/6.jpeg", title: "Birthday Decoration" },
  { src: "https://divyanshiballoondecorations.com/img/birthday/7.jpeg", title: "Birthday Decoration" },
  { src: "https://divyanshiballoondecorations.com/img/birthday/8.jpeg", title: "Birthday Decoration" },
  { src: "https://divyanshiballoondecorations.com/img/birthday/9.jpeg", title: "Birthday Decoration" },
  { src: "https://divyanshiballoondecorations.com/img/birthday/1.jpeg", title: "Birthday Decoration" },
  { src: "https://divyanshiballoondecorations.com/img/birthday/2.jpeg", title: "Birthday Decoration" },
  { src: "https://divyanshiballoondecorations.com/img/birthday/3.jpeg", title: "Birthday Decoration" },
  { src: "https://divyanshiballoondecorations.com/img/birthday/4.jpeg", title: "Birthday Decoration" },
  { src: "https://divyanshiballoondecorations.com/img/birthday/5.jpeg", title: "Birthday Decoration" },
  { src: "https://divyanshiballoondecorations.com/img/birthday/10.jpeg", title: "Birthday Decoration" },
  { src: "https://divyanshiballoondecorations.com/img/birthday/11.jpeg", title: "Birthday Decoration" },
  { src: "https://divyanshiballoondecorations.com/img/birthday/21.jpeg", title: "Birthday Decoration" },
];

const BirthdayDecorations = () => {
  return (
    <Layout>
      <PageHeader
        title="Birthday Decorations"
        subtitle="Make your birthday special with our creative balloon arrangements and themed decorations"
      />
      <DecorationGrid items={birthdayItems} />
      <CTASection />
    </Layout>
  );
};

export default BirthdayDecorations;
