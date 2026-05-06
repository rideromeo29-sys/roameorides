import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { 
  Instagram, ArrowRight, Heart, Users, Camera, Sparkles, 
  Star, Headphones, Palette, MapPin, Zap, MousePointerClick
} from "lucide-react";
import ShinyButton from "@/components/ui/shiny-button";
import { AuroraButton } from "@/components/ui/aurora-button";
import sofa from "@/assets/1sofa.jpeg";
import view from "@/assets/reclinerview.jpeg";
import reclinerback from "@/assets/reclinerback.jpeg";
import bed from "@/assets/bed.png";
import washroom1 from "@/assets/washroom-1.jpeg";
import heroHome from "@/assets/homehero.png";
import fleetWanderer from "@/assets/outer-front.jpeg";
import fleetNomad from "@/assets/outer-side.jpeg";
import fleetExplorer from "@/assets/outer-back.jpeg";
import experienceCouple from "@/assets/couple.webp";
import threerecliners from "@/assets/3recliners.jpeg"

import BookingForm from "@/components/BookingForm";
import StarButton from "@/components/ui/star-button";
import ImageAutoSlider from "@/components/ui/image-auto-slider";

import innerEntrance from "@/assets/inner-entrance.jpeg";
import innerBedroomDoor from "@/assets/inner-bedroom-door.jpeg";

import washroom2 from "@/assets/washroom-2.jpeg";
import dressingArea from "@/assets/dressing-area.jpeg"; 
import mainSpace4Seat from "@/assets/main-space-4seat.jpeg";
import mainSpaceRecliners from "@/assets/main-recliners.jpeg";
import bedroomMain from "@/assets/bedroom-master.jpeg"; 
import drivingSeat1 from "@/assets/driving-1.jpeg";
import drivingSeat2 from "@/assets/driving-2.jpeg";

// New Experience Assets
import heroExperiences from "@/assets/hero-experiences.jpg";
import templeImg from "@/assets/temple.jpg";
import brideImg from "@/assets/bride.jpg";
import productionImg from "@/assets/production.png";
import corporateImg from "@/assets/main-space-4seat.jpeg";
import leisureImg from "@/assets/homehero.png";

// Data Configurations
const experiences = [
  { icon: Heart, title: "Spiritual & Heritage", desc: "Sacred paths and temple tours in elevated, soulful comfort.", image: templeImg },
  { icon: Sparkles, title: "Weddings & Events", desc: "A luxury bridal suite or intimate lounge for your big day.", image: brideImg },
  { icon: Camera, title: "Film & Fashion", desc: "A mobile five-star green room for stars and content creators.", image: productionImg },
  { icon: Users, title: "Corporate & VIP", desc: "Executive boardrooms that move with the mountain breeze.", image: corporateImg },
];

const whyChoose = [
  { icon: Star, title: "Luxury Interiors", desc: "Exquisite craftsmanship, every surface an elevated premium design." },
  { icon: MapPin, title: "Personalized Trips", desc: "Itineraries built around you and your preferences, your fatigue pace." },
  { icon: Palette, title: "Cinematic Vibe", desc: "Every stop, every vista, curated for the ultimate social presence." },
  { icon: Headphones, title: "24/7 Support", desc: "A dedicated concierge available for any request, any time, anywhere." },
];

const sliderImages = [
  { src: innerEntrance, alt: "Main Entrance" },
  { src: threerecliners, alt: "Executive Cabin" },
  { src: mainSpace4Seat, alt: "Dining Area" },
  { src: dressingArea, alt: "Dressing Studio" },
  { src: innerBedroomDoor, alt: "Privacy Partition" },
  { src: view, alt: "Panoramic Interior" },
  { src: mainSpaceRecliners, alt: "Luxury Recliners" },
  { src: reclinerback, alt: "Entertainment Hub" },
  { src: sofa, alt: "Plush Lounge Sofa" },
  { src: bed, alt: "Master Bedroom" },
  { src: bedroomMain, alt: "Master Suite" },
  { src: washroom2, alt: "Premium Washroom" },
  { src: washroom1, alt: "Shower Suite" },
  { src: drivingSeat2, alt: "Captain's View" },
  { src: drivingSeat1, alt: "Driver Cabin" },
];

const teaserSlides = [
  { src: fleetNomad, alt: "Caravan Exterior" },
  { src: fleetWanderer, alt: "Caravan Interior" },
  { src: fleetExplorer, alt: "Caravan Luxury Lounge" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeExpImg, setActiveExpImg] = useState(experiences[0].image);
  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax Scroll Logic
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  // Teaser Slideshow Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % teaserSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen w-full flex items-center justify-start overflow-hidden top-0 left-0">
  {/* Background Layer - Remains exactly as you have it */}
  <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
    <img src={heroHome} alt="Luxury caravan" className="w-full h-full object-cover scale-105" />
    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
  </motion.div>
  
  {/* 
      1. pt-32: Pushes the text higher into the sky area on mobile.
      2. pb-24: Pushes the buttons lower into the ground area on mobile.
      3. flex-col justify-between h-full: Creates the empty gap in the middle.
  */}
  <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-8 flex flex-col justify-between h-full pt-32 pb-24 md:pt-0 md:pb-0 md:justify-center md:h-auto mt-0 md:mt-20">
    
    {/* TEXT CONTENT - Pushed to top on mobile */}
    <motion.div 
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="text-center md:text-left"
    >
      <h1 className="font-sans tracking-[-0.03em] text-on-surface mb-6 leading-[1.1]">
        <span className="block text-3xl md:text-4xl lg:text-5xl font-[200] text-on-surface/85 mb-1 md:mb-2">
          Exclusive Caravan
        </span>
        <span className="block text-3xl md:text-4xl lg:text-5xl font-[500]">
          Extraordinary Experience.
        </span>
      </h1>
      
      <p className="text-on-surface/70 text-base md:text-xl font-light mb-0 md:mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed tracking-wide">
        Experience the wild in unparalleled luxury.
        <br/> 
        Not just travel, it's Roameo—redefining the modern wayfarer's journey.
      </p>
    </motion.div>
    
    {/* CTA BUTTONS - Pushed to bottom on mobile */}
    <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 100 }}
      className="flex flex-col sm:flex-row gap-4 md:gap-6 items-center justify-center md:justify-start"
    >
      <HashLink smooth to="/contact#booking-form">
        <ShinyButton className="w-full sm:w-auto">
          Book Now
        </ShinyButton>
      </HashLink>

      <Link to="/caravans">
        <AuroraButton className="w-full sm:w-auto">
          View Caravan
        </AuroraButton>
      </Link>
    </motion.div>
  </div>
  
  <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-surface-low to-transparent z-20" />
</section>

      {/* NEW TEASER SECTION - Single Image Cross-Fade */}
      <section className="bg-surface-low py-32 px-6 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-16">
            
            {/* Image Side */}
            <motion.div 
              {...fadeInUp}
              className="md:w-1/2 relative w-full"
            >
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-[#E87722]/10 rounded-full blur-3xl" />
              
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/5 aspect-[16/10] bg-surface-container">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSlide}
                    src={teaserSlides[currentSlide].src}
                    alt={teaserSlides[currentSlide].alt}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Slide Indicators */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                  {teaserSlides.map((_, index) => (
                    <div 
                      key={index}
                      className={`h-1 transition-all duration-500 rounded-full ${
                        index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/30"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <span className="text-[#E87722] font-bold text-xs uppercase tracking-[0.3em] mb-4 block">
                The Roameo Signature
              </span>
              <h2 className="luxury-serif text-4xl md:text-6xl text-on-surface mb-8 leading-tight">
                A World-Class Home on Wheels.
              </h2>
              <p className="text-on-surface-variant text-lg mb-10 leading-relaxed">
                Experience the freedom of the road without giving up the comforts of home. Our custom-designed caravans offer a premium travel experience across India, featuring a private luxury bedroom, grooming space, modern washrooms, and 24/7 support to ensure your journey is as smooth as it is beautiful.
              </p>
              
              <Link to="/caravans">
                <button className="group relative px-10 py-5 bg-on-surface text-background rounded-full font-bold uppercase text-xs tracking-[0.2em] overflow-hidden transition-all hover:pr-14">
                  <span className="relative z-10">Step Inside the Caravan</span>
                  <ArrowRight className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all" size={18} />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Curated Experiences */}
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
                Your Story,<br />Our Venue.
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {experiences.map((e) => (
                  <motion.div 
                    key={e.title} 
                    onMouseEnter={() => setActiveExpImg(e.image)}
                    onClick={() => setActiveExpImg(e.image)}
                    whileHover={{ 
                      scale: 1.05,
                    }}
                    // Removed yellow bg logic - stays default surface-container[cite: 7]
                    className="rounded-2xl p-5 border border-white/5 transition-all duration-300 group cursor-pointer bg-surface-container"
                  >
                    <e.icon size={20} className="mb-3 transition-colors text-secondary group-hover:text-[#E87722]" />
                    <h4 className="text-sm font-semibold mb-1 text-on-surface group-hover:text-secondary">{e.title}</h4>
                    <p className="text-[10px] leading-relaxed text-on-surface-variant group-hover:text-on-surface">{e.desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* Small interaction note[cite: 7] */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-6 flex items-center gap-2 text-on-surface-variant/60"
              >
                <MousePointerClick size={14} className="animate-bounce" />
                <span className="text-[10px] uppercase tracking-widest font-medium italic">
                  Psst... hover or click a card to change the view!
                </span>
              </motion.div>
            </motion.div>

            {/* Image Display Area */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="md:col-span-2 h-[500px] rounded-3xl overflow-hidden relative group shadow-2xl bg-surface-container"
            >
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeExpImg}
                  src={activeExpImg} 
                  alt="Curated experience" 
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(10px)" }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" 
                  loading="lazy" 
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-10 left-10 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                 <Link to="/experiences" className="text-white font-bold flex items-center gap-2 uppercase text-xs tracking-widest">
                   Explore All Experiences <ArrowRight size={16} />
                 </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Roameo Rides */}
      <section className="bg-surface-low py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="luxury-serif text-3xl md:text-4xl text-secondary mb-16 italic">Why Choose Roameo Rides</h2>
            <div className="gold-fade-divider max-w-xs mx-auto mb-16" />
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {whyChoose.map((w) => (
              <motion.div 
                key={w.title} 
                {...fadeInUp}
                whileHover={{ y: -5, scale: 1.05 }}
                className="flex flex-col items-center text-center group"
              >
                <motion.div whileHover={{ rotate: 15 }} className="text-secondary mb-4">
                  <w.icon size={32} />
                </motion.div>
                <h4 className="text-on-surface text-xs uppercase tracking-[0.15em] font-semibold mb-3 group-hover:text-secondary transition-colors">{w.title}</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </div>
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
              className="group flex items-center gap-3 bg-secondary/10 hover:bg-secondary px-5 py-2.5 rounded-full transition-all duration-300"
            >
              <Instagram size={18} className="text-secondary group-hover:text-white transition-colors" />
              <span className="text-on-surface group-hover:text-white text-xs font-bold tracking-widest uppercase transition-colors">
                Follow @roameorides
              </span>
              <ArrowRight size={14} className="text-secondary group-hover:text-white opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
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

      {/* Booking Form */}
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