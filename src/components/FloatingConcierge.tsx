import { MessageCircle, Phone } from "lucide-react";

const FloatingConcierge = () => (
  <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
    <a
      href="tel:9469456789"
      className="w-14 h-14 rounded-full bg-surface-highest backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:scale-110 transition-transform"
    >
      <Phone size={22} />
    </a>
    <a
      href="https://wa.me/9469456789?text=Hi%20Roameo%20Rides!%20I'm%20looking%20for%20a%20premium%20caravan%20experience.%20Can%20you%20help%20me%20plan%20my%20journey?"
      target="_blank"
      rel="noopener noreferrer"
      className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.3)] animate-pulse hover:scale-110 transition-transform"
    >
      <MessageCircle size={22} />
    </a>
  </div>
);

export default FloatingConcierge;
