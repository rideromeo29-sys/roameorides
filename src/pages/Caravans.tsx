import { Link } from "react-router-dom";
import { Snowflake, Bed, Tv, UtensilsCrossed, Bath, Armchair, MessageCircle, Check } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import heroCaravans from "@/assets/hero-caravans.jpg";
import fleetWanderer from "@/assets/fleet-wanderer.jpg";
import fleetNomad from "@/assets/fleet-nomad.jpg";
import fleetExplorer from "@/assets/fleet-explorer.jpg";
import premiumInterior from "@/assets/premium-interior.jpg";

const fleet = [
  {
    img: fleetWanderer,
    title: "The Midnight Voyager",
    subtitle: "Elegance in Motion",
    specs: ["AC", "Queen Bed", "Smart TV", "Kitchen"],
    desc: "Experience ultimate freedom without sacrificing comfort. Our Voyager model...",
  },
  {
    img: fleetNomad,
    title: "Roameo Premium",
    subtitle: "The Executive Suite",
    specs: ["Bathroom", "Lounge", "AC", "WiFi"],
    desc: "For the discerning traveler. Includes a full marble-cladded private bathroom and a...",
  },
  {
    img: fleetExplorer,
    title: "Desert Nomad",
    subtitle: "Rustic Refinement",
    specs: ["AC", "Solar", "Lounge", "Kitchen"],
    desc: "Built for off-grid adventures without compromising on the luxury you deserve...",
  },
];

const amenities = [
  { icon: Snowflake, label: "AC" },
  { icon: Bed, label: "Queen Bed" },
  { icon: Tv, label: "Smart TV" },
  { icon: UtensilsCrossed, label: "Kitchenette" },
  { icon: Bath, label: "Private Bathroom" },
  { icon: Armchair, label: "Lounge Chairs" },
];

const premiumFeatures = [
  "Highest Quality Italian Leather Upholstery",
  "Silent Hybrid Power Generation",
  "Panoramic Glass Sunroof for Stargazing",
  "Climate Controlled Automated Systems",
];

const CaravansPage = () => (
  <div>
    <HeroSection
      image={heroCaravans}
      title={<span className="text-5xl md:text-7xl font-extralight italic tracking-tight">Our Luxury Fleet</span>}
      subtitle="Every caravan, a moving palace."
      actions={[
        { label: "Book a Caravan", to: "/contact" },
        { label: "View Features", variant: "outline" },
      ]}
    />

    {/* Fleet Grid */}
    <section className="bg-surface-low py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-secondary italic text-center mb-16">Choose Your Caravan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fleet.map((c) => (
            <div key={c.title} className="bg-surface-container rounded-2xl overflow-hidden group">
              <div className="h-64 overflow-hidden">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-6">
                <h3 className="text-on-surface font-semibold text-lg">{c.title}</h3>
                <p className="text-secondary text-sm italic mb-3">{c.subtitle}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {c.specs.map((s) => (
                    <span key={s} className="text-xs px-3 py-1 rounded-full bg-surface-high text-on-surface-variant uppercase tracking-wider">{s}</span>
                  ))}
                </div>
                <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">{c.desc}</p>
                <Link to="/contact" className="block w-full gradient-primary-btn text-primary-foreground font-bold py-3.5 rounded-full text-center uppercase text-xs tracking-widest hover:scale-[1.02] transition-transform">
                  Book This Caravan
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Amenities Strip */}
    <section className="bg-background py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-serif text-2xl md:text-3xl text-secondary italic mb-12">What's Inside Every Roameo</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
          {amenities.map((a) => (
            <div key={a.label} className="flex flex-col items-center gap-3">
              <a.icon size={28} className="text-on-surface-variant" />
              <span className="text-xs uppercase tracking-[0.15em] text-on-surface font-semibold">{a.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Full width caravan image */}
    <div className="w-full h-80 overflow-hidden">
      <img src={heroCaravans} alt="Caravan panorama" className="w-full h-full object-cover" loading="lazy" />
    </div>

    {/* Premium Showcase */}
    <section className="bg-surface-low py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="grid grid-cols-2 gap-4">
          <img src={premiumInterior} alt="Premium interior" className="rounded-2xl w-full h-48 object-cover" loading="lazy" />
          <img src={fleetWanderer} alt="Interior detail" className="rounded-2xl w-full h-48 object-cover" loading="lazy" />
          <img src={fleetNomad} alt="Exterior view" className="rounded-2xl w-full h-48 object-cover" loading="lazy" />
          <img src={fleetExplorer} alt="Landscape" className="rounded-2xl w-full h-48 object-cover" loading="lazy" />
        </div>
        <div className="bg-surface-container rounded-2xl p-8 md:p-12">
          <h3 className="font-serif text-3xl text-on-surface italic mb-6">Roameo Premium</h3>
          <div className="space-y-4 mb-8">
            {premiumFeatures.map((f) => (
              <div key={f} className="flex items-center gap-3">
                <Check size={16} className="text-secondary flex-shrink-0" />
                <span className="text-on-surface text-sm">{f}</span>
              </div>
            ))}
          </div>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
            The Roameo Premium represents the pinnacle of mobile luxury. Designed for those who refuse to compromise, every surface has been meticulously crafted to provide a five-star hotel experience on wheels.
          </p>
          <a
            href="https://wa.me/919469456789"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full gradient-primary-btn text-primary-foreground font-bold py-4 rounded-full uppercase text-sm tracking-widest flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
          >
            <MessageCircle size={18} />
            Book via WhatsApp
          </a>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-primary-container py-8 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <h3 className="text-2xl md:text-3xl font-serif italic text-primary-foreground">Ready for the road?</h3>
        <a
          href="https://wa.me/919469456789"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-background text-on-surface font-bold px-10 py-4 rounded-full uppercase text-xs tracking-widest hover:scale-105 transition-transform"
        >
          ▶ Book Now on WhatsApp
        </a>
      </div>
    </section>
  </div>
);

export default CaravansPage;
