import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX, ArrowRight, Play, Pause } from "lucide-react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

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
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  // Update progress bar as video plays
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const progress = (video.currentTime / video.duration) * 100;
      setProgress(progress);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, [videoRef]);

  // Toggle Play/Pause
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Seek video when clicking progress bar
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seekTime = (Number(e.target.value) / 100) * (videoRef.current?.duration || 0);
    if (videoRef.current) {
      videoRef.current.currentTime = seekTime;
      setProgress(Number(e.target.value));
    }
  };

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
            <br></br>
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

      {/* VIDEO SECTION */}
      <div className="relative z-20 h-screen w-full flex items-center justify-center md:w-1/2 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
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

            {/* --- VIDEO CONTROLS OVERLAY --- */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
              
              {/* Progress Bar */}
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={progress} 
                onChange={handleSeek}
                className="w-full h-1 mb-6 accent-[#E87722] cursor-pointer"
              />

              <div className="flex items-center justify-between">
                {/* Play/Pause Button */}
                <button 
                  onClick={togglePlay}
                  className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-white hover:bg-[#E87722] transition-colors"
                >
                  {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}
                </button>

                {/* Mute Button */}
                <button 
                  onClick={onToggleMute}
                  className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-white hover:bg-[#E87722] transition-colors"
                >
                  {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10" />
    </section>
  );
};

export default CaravanHero;