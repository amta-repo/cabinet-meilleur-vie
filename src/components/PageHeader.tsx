interface PageHeaderProps {
  badge: string;
  title: string;
  subtitle: string;
  bgImage: string;
}

const PageHeader = ({ badge, title, subtitle, bgImage }: PageHeaderProps) => (
  <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 overflow-hidden">
    <div className="absolute inset-0">
      <img src={bgImage} alt="" className="h-full w-full object-cover" loading="eager" width={1920} height={600} />
      <div className="absolute inset-0 bg-primary/75" />
    </div>
    <div className="container mx-auto text-center relative z-10">
      <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-accent-foreground mb-4">
        {badge}
      </span>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-foreground max-w-3xl mx-auto leading-tight">
        {title}
      </h1>
      <p className="mt-4 max-w-xl mx-auto text-primary-foreground/70">
        {subtitle}
      </p>
    </div>
  </section>
);

export default PageHeader;
