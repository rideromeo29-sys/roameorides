import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link"; // Added import

interface HeroSectionProps {
  image: string;
  title: React.ReactNode;
  subtitle?: string;
  // Updated actions type to include isHash
  actions?: { 
    label: string; 
    to?: string; 
    variant?: "primary" | "outline";
    isHash?: boolean; 
  }[];
  height?: string;
}

const HeroSection = ({ image, title, subtitle, actions, height = "h-[70vh]" }: HeroSectionProps) => (
  <section className={`relative ${height} w-full flex items-center justify-center overflow-hidden`}>
    <div className="absolute inset-0 z-0">
      <img src={image} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
    </div>
    <div className="relative z-10 text-center max-w-4xl px-6">
      <h1 className="font-sans font-extralight tracking-tight text-on-surface mb-4">{title}</h1>
      {subtitle && <p className="text-on-surface-variant text-lg md:text-xl font-light mb-8 italic">{subtitle}</p>}
      {actions && (
        <div className="flex flex-wrap gap-4 justify-center">
          {actions.map((a) => {
            const isOutline = a.variant === "outline";
            const baseStyles = isOutline 
              ? "border border-on-surface-variant text-on-surface px-8 py-3.5 rounded-full hover:scale-105 transition-transform uppercase text-xs tracking-widest font-semibold"
              : "bg-[#E87722] text-white px-8 py-3.5 rounded-full hover:shadow-[0_0_20px_rgba(232,119,34,0.4)] hover:scale-105 transition-all uppercase text-xs tracking-widest font-bold shadow-xl";

            // If it's a hash link, use HashLink with the smooth prop
            if (a.isHash) {
              return (
                <HashLink
                  key={a.label}
                  smooth
                  to={a.to || "#"}
                  className={baseStyles}
                >
                  {a.label}
                </HashLink>
              );
            }

            // Standard navigation
            return (
              <Link
                key={a.label}
                to={a.to || "#"}
                className={baseStyles}
              >
                {a.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  </section>
);

export default HeroSection;