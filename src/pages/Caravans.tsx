import { Link } from "react-router-dom";
import { Snowflake, Bed, Tv, UtensilsCrossed, Bath, Armchair, MessageCircle, Check } from "lucide-react";
import { motion } from "framer-motion";
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
    desc: "Experience ultimate freedom without sacrificing comfort. Our Voyager model is a sanctuary on wheels.",
  },
  {
    img: fleetNomad,
    title: "Roameo Premium",
    subtitle: "The Executive Suite",
    specs: ["Bathroom", "Lounge", "AC", "WiFi"],
    desc: "For the discerning traveler. Includes a full marble-cladded private bathroom and workspace.",
  },
  {
    img: fleetExplorer,
    title: "Desert Nomad",
    subtitle: "Rustic Refinement",
    specs: ["AC", "Solar", "Lounge", "Kitchen"],
    desc: "Built for off-grid adventures without compromising on the luxury you deserve.",
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

const CaravansPage = () => {
  // Smooth scroll handler
  const scrollToAmenities = () => {
    document.getElementById('amenities-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative">
        <HeroSection
          image={heroCaravans}
          title={
            <h1 className="font-sans tracking-[-0.03em] leading-[1.1] text-on-surface">
              <span className="block text-4xl md:text-6xl lg:text-7xl font-[200] opacity-80">
                Our Luxury
              </span>
              <span className="block text-5xl md:text-7xl lg:text-[5.5rem] font-[500]">
                Fleet.
              </span>
            </h1>
          }
          subtitle="Every caravan, a moving palace."
          actions={[
            { label: "Book a Caravan", to: "/contact" },
            // If your HeroSection doesn't accept onClick, we use a string hash to target the ID
            { label: "View Features", to: "#amenities-section", variant: "outline" },
          ]}
        />
        <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-surface-low to-transparent z-10" />
      </div>

      {/* Fleet Grid */}
      <section className="bg-surface-low pt-8 pb-24 px-6 md:px-16 relative z-0">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="luxury-serif text-3xl md:text-4xl text-on-surface text-center mb-16"
          >
            Choose Your Caravan
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fleet.map((c, i) => (
              <motion.div 
                key={c.title}
                initial={{ opacity: 0, y: 50, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="bg-surface-container rounded-2xl overflow-hidden group border border-white/5 shadow-xl transition-all duration-500"
              >
                <div className="h-64 overflow-hidden relative">
                  <motion.img 
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={c.img} 
                    className="w-full h-full object-cover" 
                    loading="lazy" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="luxury-serif text-on-surface text-lg mb-1">{c.title}</h3>
                  <p className="text-secondary text-sm mb-3">{c.subtitle}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {c.specs.map((s) => (
                      <span key={s} className="text-[10px] px-3 py-1 rounded-full bg-surface-high text-on-surface-variant uppercase tracking-widest font-semibold">{s}</span>
                    ))}
                  </div>
                  <p className="text-on-surface-variant text-sm mb-6 leading-relaxed font-light">{c.desc}</p>
                  <Link to="/contact" className="block w-full bg-primary-container text-white font-bold py-3.5 rounded-full text-center uppercase text-[10px] tracking-widest hover:scale-[1.05] transition-transform">
                    Book This Caravan
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Strip */}
      <section id="amenities-section" className="bg-background py-16 px-6 scroll-mt-24">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="luxury-serif text-2xl md:text-3xl text-on-surface mb-12"
          >
            What's Inside Every Roameo
          </motion.h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {amenities.map((a, i) => (
              <motion.div 
                key={a.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center gap-3"
              >
                <a.icon size={28} className="text-secondary" />
                <span className="text-[10px] uppercase tracking-[0.15em] text-on-surface/80 font-bold">{a.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Panorama Blend */}
      <div className="relative w-full h-[500px] overflow-hidden">
        <motion.img 
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={heroCaravans} 
          className="w-full h-full object-cover" 
        />
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-surface-low to-transparent" />
      </div>

      {/* Premium Showcase */}
      <section className="bg-surface-low py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            {[premiumInterior, fleetWanderer, fleetNomad, fleetExplorer].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden shadow-2xl"
              >
                <img src={img} className="w-full h-48 object-cover hover:scale-110 transition-transform duration-700" />
              </motion.div>
            ))}
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-surface-container rounded-2xl p-8 md:p-12 border border-white/5 shadow-2xl relative overflow-hidden group"
          >
            <h3 className="luxury-serif text-3xl text-on-surface mb-6">Roameo Premium</h3>
            <div className="space-y-4 mb-8">
              {premiumFeatures.map((f, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <Check size={16} className="text-secondary flex-shrink-0" />
                  <span className="text-on-surface/90 text-sm font-light">{f}</span>
                </motion.div>
              ))}
            </div>
            <p className="text-on-surface-variant text-sm font-light leading-relaxed mb-8">
              The Roameo Premium represents the pinnacle of mobile luxury. Meticulously crafted to provide a five-star hotel experience on wheels.
            </p>
            <Link
              to="/contact"
              className="w-full bg-primary-container text-white font-bold py-4 rounded-full uppercase text-[10px] tracking-widest flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform shadow-lg"
            >
              <MessageCircle size={18} />
              Book Your Journey
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-container py-12 px-6 md:px-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
          <h3 className="text-2xl md:text-4xl luxury-serif text-white">Ready for the road?</h3>
          <Link
            to="/contact"
            className="bg-white text-primary-container font-bold px-10 py-4 rounded-full uppercase text-[10px] tracking-widest hover:scale-110 transition-transform shadow-xl"
          >
            Book Now on WhatsApp
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaravansPage;