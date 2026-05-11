import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HashLink } from "react-router-hash-link";

interface CaravanHeroProps {
  backgroundImage: string;
  youtubeId: string; 
}

const CaravanHero = ({ 
  backgroundImage, 
  youtubeId 
}: CaravanHeroProps) => {
  return (
    <section className="relative w-full flex flex-col md:flex-row bg-[#0a0a0a]">
      {/* GLOBAL BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0 h-full md:h-screen overflow-hidden hidden md:block">
        <img 
          src={backgroundImage} 
          alt="Luxury Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-black/40" />
      </div>

      {/* TEXT CONTENT SECTION */}
      <div className="relative z-20 h-screen w-full flex items-center justify-center px-8 md:h-screen md:w-1/2 md:pl-32 md:justify-start overflow-hidden">
        <div className="absolute inset-0 md:hidden z-[-1]">
          <img src={backgroundImage} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a]" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-left w-full max-w-md md:max-w-xl" 
        >
          <span className="text-orange-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">Luxury on Wheels</span>
          <h1 className="tracking-[-0.03em] leading-[1.1] text-white mb-8">
            <span className="font-[200] opacity-90 text-4xl md:text-5xl block">Hey Roameo,</span>
            <span className="font-[500] text-4xl md:text-5xl block">ready to roam?</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl font-light mb-10 italic">
            Caravan, a moving palace.
            <br />
            Experience the ultimate fusion of five-star luxury and the open road.
          </p>
         <HashLink 
            smooth 
            to="/contact#booking-form" 
            className="group inline-flex items-center gap-3 bg-[#E87722] text-white px-10 py-5 rounded-full uppercase text-[11px] font-bold"
          >
            Book Your Journey <ArrowRight size={18} />
          </HashLink>
        </motion.div>
      </div>

      {/* VIDEO SECTION - Simplified for Mobile Touch Smoothness */}
      <div className="relative z-20 h-screen w-full flex items-center justify-center md:w-1/2 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          /* Removed backdrop-blur and padding on mobile to ensure the iframe gets the touch events */
          className="w-[90%] sm:w-[320px] md:w-[340px] aspect-[9/16] rounded-[2rem] md:rounded-[2.8rem] md:border md:border-white/20 md:p-2.5 md:bg-white/5 md:backdrop-blur-md shadow-2xl relative"
        >
          <div className="w-full h-full rounded-[1.8rem] md:rounded-[2.3rem] overflow-hidden bg-black relative">
            <iframe
              className="w-full h-full"
              /* - mute=1: Voice off by default 
                 - controls=1: Shows native controls for easy mobile tapping
                 - playsinline=1: Prevents iOS from forcing full-screen
              */
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=1&rel=0&iv_load_policy=3&playsinline=1&modestbranding=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10" />
    </section>
  );
};

export default CaravanHero;