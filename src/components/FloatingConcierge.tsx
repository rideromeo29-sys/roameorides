import { MessageCircle, Phone } from "lucide-react";

const FloatingConcierge = () => (
  <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
    <a
      href="tel:9469456789"
      className="w-14 h-14 rounded-full bg-[#E87722] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    >
      <Phone size={22} />
    </a>
    <a
      href="https://wa.me/9469456789"
      target="_blank"
      rel="noopener noreferrer"
      className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    >
      <MessageCircle size={22} />
    </a>
  </div>
);

export default FloatingConcierge;
