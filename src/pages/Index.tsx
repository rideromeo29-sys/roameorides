import { Link } from "react-router-dom";
import { ArrowRight, Heart, Users, Camera, Sparkles, Star, Headphones, Palette, MapPin } from "lucide-react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroHome from "@/assets/hero-home.jpg";
import fleetWanderer from "@/assets/fleet-wanderer.jpg";
import fleetNomad from "@/assets/fleet-nomad.jpg";
import fleetExplorer from "@/assets/fleet-explorer.jpg";
import experienceCouple from "@/assets/experience-couple.jpg";
import BookingForm from "@/components/BookingForm";
import StarButton from "@/components/ui/star-button";
import ImageAutoSlider from "@/components/ui/image-auto-slider";

const fleetCards = [
  { img: fleetWanderer, title: "The Wanderer Pro", specs: ["Queen Bed", "Smart TV", "Kitchen"], link: "/caravans" },
  { img: fleetNomad, title: "Nomad Signature", specs: ["Bathroom", "Lounge", "AC", "WiFi"], link: "/caravans" },
  { img: fleetExplorer, title: "Summit Explorer", specs: ["AC", "Solar", "Lounge", "Kitchen"], link: "/caravans" },
];

const experiences = [
  { icon: Heart, title: "Couple Getaways", desc: "Intimate escapes to secluded cabins and star-lit plateaus." },
  { icon: Users, title: "Family Trips", desc: "Bonding at the calmest retreats for everyone to remember." },
  { icon: Camera, title: "Content Shoots", desc: "The perfect mobile studio for creators and fashion firms." },
  { icon: Sparkles, title: "Custom Trips", desc: "Built to fit your imagination—any route, any time, anywhere." },
];

const whyChoose = [
  { icon: Star, title: "Luxury Interiors", desc: "Exquisite craftsmanship, every surface an elevated premium design." },
  { icon: MapPin, title: "Personalized Trips", desc: "Itineraries built around you and your preferences, your fatigue pace." },
  { icon: Palette, title: "Cinematic Vibe", desc: "Every stop, every vista, curated for the ultimate social presence." },
  { icon: Headphones, title: "24/7 Support", desc: "A dedicated concierge available for any request, any time, anywhere." },
];

const sliderImages = [
  { src: fleetWanderer, alt: "Luxury caravan exterior" },
  { src: fleetNomad, alt: "Nomad signature interior" },
  { src: fleetExplorer, alt: "Summit explorer on road" },
  { src: experienceCouple, alt: "Couple getaway experience" },
  { src: fleetWanderer, alt: "Caravan at sunset" },
  { src: fleetNomad, alt: "Premium caravan lounge" },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div>
      {/* Hero */}
      <section ref={heroRef} className="relative h-screen w-full flex items-center justify-start overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
          <img src={heroHome} alt="Luxury caravan on mountain road" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        </motion.div>
        <div className="relative z-10 max-w-5xl px-8 md:px-20 mt-20">
          <h1 className="font-sans font-extralight tracking-tight text-on-surface mb-8 leading-tight">
            <span className="block text-5xl md:text-6xl lg:text-7xl mb-2">
              Luxury caravan
            </span>
            <span className="block text-5xl md:text-7xl lg:text-8xl italic">
              Experiences in India
            </span>
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl font-extralight mb-12 max-w-2xl opacity-80 leading-relaxed tracking-wide">
            Experience the wild in unparalleled luxury. Not just travel, it's Roameo—redefining the modern wayfarer's journey through the Indian road.
          </p>
          <div className="flex flex-wrap gap-6 items-center">
            <StarButton to="/contact">Book Now</StarButton>
            <Link to="/caravans" className="border border-on-surface-variant text-on-surface px-10 py-4 rounded-full hover:scale-105 transition-transform uppercase text-xs tracking-widest font-semibold">
              View Caravans
            </Link>
          </div>
        </div>
      </section>

      {/* Our Fleet */}
      <section className="bg-surface-low py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-on-surface italic">Our Fleet</h2>
            <p className="text-on-surface-variant text-sm max-w-md mt-4 md:mt-0 leading-relaxed">
              Hand-picked, custom-built mobile luxury suites designed for the rugged Indian terrain.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fleetCards.map((c) => (
              <div key={c.title} className="bg-surface-container rounded-2xl overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                <div className="h-56 overflow-hidden">
                  <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-on-surface font-semibold text-lg mb-3">{c.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {c.specs.map((s) => (
                      <span key={s} className="text-xs px-3 py-1 rounded-full bg-surface-high text-on-surface-variant uppercase tracking-wider">{s}</span>
                    ))}
                  </div>
                  <Link to={c.link} className="text-secondary text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                    View Details <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curated Experiences */}
      <section className="bg-background py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h2 className="font-serif text-4xl md:text-5xl text-on-surface italic mb-8">
                Curated<br />Experiences
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {experiences.map((e) => (
                  <div key={e.title} className="bg-surface-container rounded-2xl p-5 hover:bg-surface-high transition-colors">
                    <e.icon size={20} className="text-secondary mb-3" />
                    <h4 className="text-on-surface text-sm font-semibold mb-1">{e.title}</h4>
                    <p className="text-on-surface-variant text-xs leading-relaxed">{e.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-2 h-[500px] rounded-2xl overflow-hidden">
              <img src={experienceCouple} alt="Curated experience" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-surface-low py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-secondary italic mb-16">Why Choose Roameo Rides</h2>
          <div className="gold-fade-divider max-w-xs mx-auto mb-16" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {whyChoose.map((w) => (
              <div key={w.title} className="flex flex-col items-center text-center">
                <w.icon size={32} className="text-secondary mb-4" />
                <h4 className="text-on-surface text-xs uppercase tracking-[0.15em] font-semibold mb-3">{w.title}</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Follow Our Journey - Auto Slider */}
      <section className="bg-background py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="font-serif text-3xl text-on-surface italic">Follow Our Journey</h2>
            <a
              href="https://www.instagram.com/roameorides?igsh=N2MxZXkyd3ZkeXEw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary text-sm font-semibold hover:text-primary transition-colors"
            >
              @ROAMEORIDES
            </a>
          </div>
          <ImageAutoSlider images={sliderImages} />
        </div>
      </section>

      {/* Booking Form */}
      <BookingForm />
    </div>
  );
};

export default Index;
