export default function Section({
    title,
    subtitle,
    children,
  }: {
    title: string;
    subtitle?: string;
    children: React.ReactNode;
  }) {
    return (
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">
            {title}
          </h2>
          {subtitle && (
            <p className="text-gray-400 max-w-2xl">{subtitle}</p>
          )}
        </div>
        {children}
      </section>
    );
  }
  