import { MessageCircle, Phone } from "lucide-react";

const FloatingConcierge = () => (
  <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
    {/* Call Button - Restored */}
    <a
      href="tel:9469456789"
      className="w-14 h-14 rounded-full bg-surface-highest backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-xl"
    >
      <Phone size={22} />
    </a>

    {/* WhatsApp Button - With the specific icon style you requested */}
    <a
      href="https://wa.me/9469456789?text=Hi%20Roameo%20Rides!%20I'm%20looking%20for%20a%20premium%20caravan%20experience.%20Can%20you%20help%20me%20plan%20my%20journey?"
      target="_blank"
      rel="noopener noreferrer"
      className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.3)] animate-pulse hover:scale-110 transition-transform"
    >
      <div className="relative flex items-center justify-center">
        {/* The Speech Bubble */}
        <MessageCircle size={32} strokeWidth={1.5} />
        {/* The Phone Icon inside the bubble to match the WhatsApp logo */}
        <div className="absolute mb-1">
          <Phone size={14} fill="currentColor" strokeWidth={0} className="rotate-[10deg]" />
        </div>
      </div>
    </a>
  </div>
);

export default FloatingConcierge;