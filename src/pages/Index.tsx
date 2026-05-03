import { Link } from "react-router-dom";
import { ArrowRight, Heart, Users, Camera, Sparkles, Star, Headphones, Palette, MapPin } from "lucide-react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroHome from "@/assets/hero-home.jpg";
import fleetWanderer from "@/assets/fleet-wanderer.jpg";
import fleetNomad from "@/assets/fleet-nomad.jpg";
import fleetExplorer from "@/assets/fleet-explorer.jpg";
import experienceCouple from "@/assets/couple.webp";
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
  { src: "/1.jpeg", alt: "Instagram feed image 1" },
  { src: "/2.jpeg", alt: "Instagram feed image 2" },
  { src: "/4.jpeg", alt: "Instagram feed image 3" },
  { src: "/5.jpeg", alt: "Instagram feed image 4" },
  { src: "/6.jpeg", alt: "Instagram feed image 5" },
  { src: "/7.jpeg", alt: "Instagram feed image 6" },
];

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.2 } },
  viewport: { once: true }
};

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen w-full flex items-center justify-start overflow-hidden top-0 left-0">
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
          <img src={heroHome} alt="Luxury caravan" className="w-full h-full object-cover scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        </motion.div>
        
        {/* Adjusted padding to push text to the total left end */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-8 mt-20">
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-sans tracking-[-0.03em] text-on-surface mb-6 leading-[1.1]">
              <span className="block text-3xl md:text-4xl lg:text-5xl font-[200] text-on-surface/85 mb-1 md:mb-2">
                Luxury caravan
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl font-[500]">
                Experiences in India.
              </span>
            </h1>
            
            <p className="text-on-surface/70 text-base md:text-xl font-light mb-10 max-w-2xl leading-relaxed tracking-wide">
              Experience the wild in unparalleled luxury. Not just travel, it's Roameo—redefining the modern wayfarer's journey through the Indian road.
            </p>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, type: "spring", stiffness: 100 }}
              className="flex flex-wrap gap-4 md:gap-6 items-center"
            >
              <StarButton to="/contact">Book Now</StarButton>
              <Link to="/caravans" className="border border-on-surface-variant text-on-surface px-8 md:px-10 py-3 md:py-4 rounded-full hover:bg-on-surface hover:text-background transition-all uppercase text-[10px] md:text-xs tracking-widest font-semibold">
                View Caravan
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-surface-low to-transparent z-20" />
      </section>

      {/* Our Fleet - Slide from Right */}
      <section className="bg-surface-low pt-12 pb-24 px-6 md:px-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            {...fadeInUp}
            className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16"
          >
            <h2 className="luxury-serif text-4xl md:text-5xl text-on-surface">Our Fleet</h2>
            <p className="text-on-surface-variant text-sm max-w-md mt-4 md:mt-0 leading-relaxed">
              Hand-picked, custom-built mobile luxury suites designed for the rugged Indian terrain.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fleetCards.map((c, i) => (
              <motion.div 
                key={c.title} 
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8, ease: "easeOut" }}
                whileHover={{ y: -12 }}
                className="bg-surface-container rounded-2xl overflow-hidden group border border-white/5 shadow-xl transition-all duration-500"
              >
                <div className="h-56 overflow-hidden">
                  <motion.img 
                    src={c.img} 
                    alt={c.title} 
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                    className="w-full h-full object-cover" 
                    loading="lazy" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="luxury-serif text-on-surface font-semibold text-lg mb-3">{c.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {c.specs.map((s) => (
                      <span key={s} className="text-[10px] px-3 py-1 rounded-full bg-surface-high text-on-surface-variant uppercase tracking-widest font-semibold">{s}</span>
                    ))}
                  </div>
                  <Link to={c.link} className="text-secondary text-sm font-semibold flex items-center gap-1 group-hover:gap-3 transition-all">
                    View Details <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curated Experiences - Colored Hover */}
      <section className="bg-background py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-1"
            >
              <h2 className="luxury-serif text-4xl md:text-5xl text-on-surface mb-8">
                Curated<br />Experiences
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {experiences.map((e) => (
                  <motion.div 
                    key={e.title} 
                    whileHover={{ 
                      backgroundColor: "var(--secondary)", 
                      color: "white",
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(232, 119, 34, 0.3)"
                    }}
                    className="bg-surface-container rounded-2xl p-5 border border-white/5 transition-all duration-300 group cursor-pointer"
                  >
                    <e.icon size={20} className="text-secondary mb-3 group-hover:text-white transition-colors" />
                    <h4 className="text-on-surface text-sm font-semibold mb-1 group-hover:text-white">{e.title}</h4>
                    <p className="text-on-surface-variant text-xs leading-relaxed group-hover:text-white/80">{e.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="md:col-span-2 h-[500px] rounded-2xl overflow-hidden relative group shadow-2xl"
            >
              <img src={experienceCouple} alt="Curated experience" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose - Fade Pop */}
      <section className="bg-surface-low py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="luxury-serif text-3xl md:text-4xl text-secondary mb-16 italic">Why Choose Roameo Rides</h2>
            <div className="gold-fade-divider max-w-xs mx-auto mb-16" />
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10"
          >
            {whyChoose.map((w) => (
              <motion.div 
                key={w.title} 
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.05 }}
                className="flex flex-col items-center text-center group"
              >
                <motion.div 
                  whileHover={{ rotate: 15 }}
                  className="text-secondary mb-4"
                >
                  <w.icon size={32} />
                </motion.div>
                <h4 className="text-on-surface text-xs uppercase tracking-[0.15em] font-semibold mb-3 group-hover:text-secondary transition-colors">{w.title}</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Follow Our Journey */}
      <section className="bg-background py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            {...fadeInUp}
            className="flex justify-between items-center mb-12"
          >
            <h2 className="luxury-serif text-3xl text-on-surface">Follow Our Journey</h2>
            <a
              href="https://www.instagram.com/roameorides?igsh=N2MxZXkyd3ZkeXEw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary text-sm font-semibold hover:tracking-widest transition-all"
            >
              @ROAMEORIDES
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <ImageAutoSlider images={sliderImages} />
          </motion.div>
        </div>
      </section>

      {/* Booking Form - Scroll Fade */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <BookingForm />
      </motion.div>
    </div>
  );
};

export default Index;