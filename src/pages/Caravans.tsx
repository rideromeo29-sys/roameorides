import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { 
  Snowflake, Bed, Tv, UtensilsCrossed, Bath, 
  Armchair, Sparkles, MapPin, ArrowRight,MessageCircle
} from "lucide-react";
import { motion } from "framer-motion";

// Components
import CaravanHero from "@/components/CaravanHero";

// Assets
import outerFront from "@/assets/outer-front.jpeg";
import outerSide from "@/assets/outer-side.jpeg";
import outerBack from "@/assets/outer-back.jpeg";
import outerPlain from "@/assets/outer-no-art.jpeg";
import innerEntrance from "@/assets/inner-entrance.jpeg";
import innerBedroomDoor from "@/assets/inner-bedroom-door.jpeg";
import washroom1 from "@/assets/washroom-1.jpeg";
import washroom2 from "@/assets/washroom-2.jpeg";
import dressingArea from "@/assets/dressing-area.jpeg"; 
import mainSpace4Seat from "@/assets/main-space-4seat.jpeg";
import mainSpaceRecliners from "@/assets/main-recliners.jpeg";
import bedroomMain from "@/assets/bedroom-master.jpeg"; 
import drivingSeat1 from "@/assets/driving-1.jpeg";
import drivingSeat2 from "@/assets/driving-2.jpeg";
import caravanVideo from "@/assets/caravan-reveal.MOV"; 
import heroBg from "@/assets/outer-front.jpeg"; 

const amenities = [
    { icon: Snowflake, label: "1.5 Ton AC" },
    { icon: Tv, label: "42\" Smart TV" },
    { icon: Bed, label: "King Master Bed" },
    { icon: UtensilsCrossed, label: "Pantry & Fridge" },
    { icon: Bath, label: "Luxury Shower" },
    { icon: Armchair, label: "Massage Recliners" },
    { icon: Sparkles, label: "Mood Lighting" },
    { icon: MapPin, label: "Live GPS" }
  ];

const CaravansPage = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const HoverOverlay = ({ text }: { text: string }) => (
    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 text-center">
      <span className="text-white text-xs font-bold uppercase tracking-[0.2em] border-b border-orange-500 pb-1">
        {text}
      </span>
    </div>
  );

  return (
    <div className="bg-[#0a0a0a] text-white overflow-x-hidden min-h-screen">
      
      <CaravanHero 
        backgroundImage={heroBg}
        videoSrc={caravanVideo}
        isMuted={isMuted}
        onToggleMute={toggleMute}
        videoRef={videoRef}
      />

      {/* EXPLORE HEADING */}
      <section className="py-20 text-center relative z-20 bg-[#0a0a0a]">
        <h2 className="text-3xl md:text-5xl font-sans font-light tracking-tight text-white mb-4">
          Explore our <span className="italic font-serif text-orange-500">caravan</span>
        </h2>
        <div className="h-1 w-24 bg-orange-600 mx-auto rounded-full"></div>
      </section>

      {/* OUTER VIEWS */}
      <section className="pb-24 px-6 max-w-7xl mx-auto relative z-20">
        <h3 className="text-2xl font-sans mb-10 text-stone-400 uppercase tracking-widest">Outer Views</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { img: outerFront, label: "Front Profile" },
            { img: outerSide, label: "Side View" },
            { img: outerBack, label: "Rear Design" },
            { img: outerPlain, label: "Minimalist Exterior" }
          ].map((item, idx) => (
            <motion.div key={idx} whileHover={{ y: -10 }} className="group relative rounded-3xl overflow-hidden h-72 border border-white/5">
              <img src={item.img} alt={item.label} className="w-full h-full object-cover" />
              <HoverOverlay text={item.label} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* INNER VIEWS - ALL IMAGES INCLUDED */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5 relative z-20">
        <h3 className="text-2xl font-sans mb-10 text-stone-400 uppercase tracking-widest">Inner Sanctuary</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Feature */}
          <div className="md:col-span-8 rounded-[2.5rem] overflow-hidden h-[500px] relative group border border-white/10">
            <img src={bedroomMain} alt="Master Bedroom" className="w-full h-full object-cover" />
            <HoverOverlay text="Master Suite" />
          </div>
          
          <div className="md:col-span-4 space-y-6">
            <div className="rounded-[2rem] overflow-hidden h-[238px] relative group border border-white/10">
              <img src={mainSpaceRecliners} alt="Recliners" className="w-full h-full object-cover" />
              <HoverOverlay text="Luxury Recliners" />
            </div>
            <div className="rounded-[2rem] overflow-hidden h-[238px] relative group border border-white/10">
              <img src={dressingArea} alt="Dressing Area" className="w-full h-full object-cover" />
              <HoverOverlay text="Dressing Studio" />
            </div>
          </div>

          {/* Secondary Grid */}
          <div className="md:col-span-4 rounded-3xl overflow-hidden h-72 relative group border border-white/10">
            <img src={mainSpace4Seat} alt="Dining" className="w-full h-full object-cover" />
            <HoverOverlay text="Dining Area" />
          </div>
          <div className="md:col-span-4 rounded-3xl overflow-hidden h-72 relative group border border-white/10">
            <img src={innerEntrance} alt="Entrance" className="w-full h-full object-cover" />
            <HoverOverlay text="Main Entrance" />
          </div>
          <div className="md:col-span-4 rounded-3xl overflow-hidden h-72 relative group border border-white/10">
            <img src={innerBedroomDoor} alt="Bedroom Privacy" className="w-full h-full object-cover" />
            <HoverOverlay text="Privacy Partition" />
          </div>

          {/* Utilities & Driving */}
          <div className="md:col-span-3 rounded-2xl overflow-hidden h-56 relative group border border-white/10">
            <img src={washroom1} alt="Bath" className="w-full h-full object-cover" />
            <HoverOverlay text="Premium Washroom" />
          </div>
          <div className="md:col-span-3 rounded-2xl overflow-hidden h-56 relative group border border-white/10">
            <img src={washroom2} alt="Bath Detail" className="w-full h-full object-cover" />
            <HoverOverlay text="Shower Suite" />
          </div>
          <div className="md:col-span-3 rounded-2xl overflow-hidden h-56 relative group border border-white/10">
            <img src={drivingSeat1} alt="Cockpit" className="w-full h-full object-cover" />
            <HoverOverlay text="Driver Cabin" />
          </div>
          <div className="md:col-span-3 rounded-2xl overflow-hidden h-56 relative group border border-white/10">
            <img src={drivingSeat2} alt="Cockpit Full" className="w-full h-full object-cover" />
            <HoverOverlay text="Captain's View" />
          </div>
        </div>
      </section>

      {/* AMENITIES STRIP - MATCHING REFERENCE UI */}
      <section id="amenities-section" className="bg-[#0a0a0a] py-24 px-6 border-y border-white/5 relative z-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-3xl font-serif italic text-white mb-16"
          >
            What's Inside Every Roameo
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
            {amenities.map((a, i) => (
              <motion.div 
                key={a.label}
                whileHover={{ y: -8 }}
                className="flex flex-col items-center gap-4"
              >
                {/* Yellow Icon with specific UI reference color */}
                <div className="text-[#fbbf24] transition-transform duration-300">
                  <a.icon size={32} strokeWidth={1.5} />
                </div>
                
                {/* Text styling matching reference font size and color */}
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/70 font-bold">
                    {a.label}
                  </span>
                  {/* Yellow Accent Line */}
                  <div className="h-[2px] w-6 bg-[#fbbf24] mx-auto" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      {/* CTA SECTION - Updated to match reference style */}
      <section className="bg-primary-container py-16 px-6 md:px-16 relative overflow-hidden">
        {/* Background Decorative Element (Optional, matches the 'moving palace' vibe) */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl luxury-serif text-white tracking-tight"
          >
            Ready for the road?
          </motion.h3>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="bg-white text-primary-container font-bold px-12 py-5 rounded-full uppercase text-[10px] tracking-[0.2em] flex items-center gap-3 shadow-2xl transition-colors hover:bg-stone-100"
            >
              {/* Added WhatsApp icon/MessageCircle if you want to match the reference exactly */}
              <MessageCircle size={18} />
              Book Now on WhatsApp
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaravansPage;