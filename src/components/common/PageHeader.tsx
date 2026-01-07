interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <section className="section-padding bg-gradient-to-b from-secondary to-background py-12 md:py-16">
      <div className="container-custom text-center">
        <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
          {title}
        </h1>
        {subtitle && <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
};
