import React from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CaravanHeroProps {
  backgroundImage: string;
  videoSrc: string;
  isMuted: boolean;
  onToggleMute: () => void;
  videoRef: React.RefObject<HTMLVideoElement | null>;
}

const CaravanHero = ({ 
  backgroundImage, 
  videoSrc, 
  isMuted, 
  onToggleMute, 
  videoRef 
}: CaravanHeroProps) => {
  return (
    <section className="relative w-full flex flex-col md:flex-row bg-[#0a0a0a]">
      {/* GLOBAL BACKGROUND LAYER (Desktop Only) */}
      <div className="absolute inset-0 z-0 h-full md:h-screen overflow-hidden hidden md:block">
        <img 
          src={backgroundImage} 
          alt="Luxury Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-black/40" />
      </div>

      {/* TEXT CONTENT SECTION */}
      {/* Updated: items-center + justify-center for mobile to position the block in the center */}
      <div className="relative z-20 h-screen w-full flex items-center justify-center px-8 md:h-screen md:w-1/2 md:pl-32 md:justify-start overflow-hidden">
        {/* Mobile-only background image for this section */}
        <div className="absolute inset-0 md:hidden z-[-1]">
          <img 
            src={backgroundImage} 
            alt="" 
            className="w-full h-full object-cover opacity-40" 
          />
          <div 
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at 20% 30%, rgba(232, 119, 34, 0.15) 0%, transparent 70%), 
                           linear-gradient(to bottom, transparent, #0a0a0a)`
            }}
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          /* Keeps the text itself left-aligned while the container is centered */
          className="text-left w-full max-w-md md:max-w-xl" 
        >
          <span className="text-orange-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">
            Luxury on Wheels
          </span>
          <h1 className="font-sans tracking-[-0.03em] leading-[1.1] text-white mb-8">
            <span className="font-[200] opacity-90 text-4xl md:text-5xl block">Hey Roameo,</span>
            <span className="font-[500] text-4xl md:text-5xl block">ready to roam?</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl font-light mb-10 italic">
            Caravan, a moving palace. Experience the ultimate fusion of five-star luxury and the open road.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 bg-[#E87722] text-white px-10 py-5 rounded-full uppercase text-[11px] tracking-[0.2em] font-bold shadow-xl shadow-orange-600/20"
          >
            Book Your Journey
            <ArrowRight className="group-hover:translate-x-2 transition-transform" size={18} />
          </Link>
        </motion.div>
      </div>
      {/* VIDEO SECTION */}
      <div className="relative z-20 h-screen w-full flex items-center justify-center md:w-1/2 overflow-hidden">
        <div 
          className="absolute inset-0 md:hidden z-[-1]"
          style={{
            background: `
              radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.05) 0%, transparent 40%),
              linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)
            `
          }}
        >
            <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[40%] bg-white/5 blur-[100px] rounded-[100%] rotate-[-15deg]" />
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="w-[85%] sm:w-[320px] md:w-[340px] aspect-[9/16] rounded-[2.8rem] border border-white/20 p-2.5 bg-white/5 backdrop-blur-md shadow-2xl relative"
        >
          <div className="w-full h-full rounded-[2.3rem] overflow-hidden bg-black relative">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-full h-full object-cover" 
              src={videoSrc}
            />
            <button 
              onClick={onToggleMute}
              className="absolute bottom-6 right-6 z-30 p-3 bg-black/40 backdrop-blur-xl rounded-full border border-white/10 text-white hover:bg-[#E87722] transition-colors"
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10" />
    </section>
  );
};

export default CaravanHero;