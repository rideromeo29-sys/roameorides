import { Link } from "react-router-dom";

interface HeroSectionProps {
  image: string;
  title: React.ReactNode;
  subtitle?: string;
  actions?: { label: string; to?: string; variant?: "primary" | "outline" }[];
  height?: string;
}

const HeroSection = ({ image, title, subtitle, actions, height = "h-[70vh]" }: HeroSectionProps) => (
  <section className={`relative ${height} w-full flex items-center justify-center overflow-hidden`}>
    <div className="absolute inset-0 z-0">
      <img src={image} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
    </div>
    <div className="relative z-10 text-center max-w-4xl px-6">
      <h1 className="font-headline text-on-surface mb-4">{title}</h1>
      {subtitle && <p className="text-on-surface-variant text-lg md:text-xl font-light mb-8 italic">{subtitle}</p>}
      {actions && (
        <div className="flex flex-wrap gap-4 justify-center">
          {actions.map((a) =>
            a.variant === "outline" ? (
              <Link
                key={a.label}
                to={a.to || "#"}
                className="border border-on-surface-variant text-on-surface px-8 py-3.5 rounded-full hover:scale-105 transition-transform uppercase text-xs tracking-widest font-semibold"
              >
                {a.label}
              </Link>
            ) : (
              <Link
                key={a.label}
                to={a.to || "#"}
                className="gradient-primary-btn text-primary-foreground px-8 py-3.5 rounded-full hover:scale-105 transition-transform uppercase text-xs tracking-widest font-bold shadow-xl"
              >
                {a.label}
              </Link>
            )
          )}
        </div>
      )}
    </div>
  </section>
);

export default HeroSection;
