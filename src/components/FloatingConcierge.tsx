import { MessageCircle, Phone } from "lucide-react";

const FloatingConcierge = () => (
  <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
    <a
      href="https://wa.me/919469456789"
      target="_blank"
      rel="noopener noreferrer"
      className="w-14 h-14 rounded-full bg-surface-highest/60 backdrop-blur-xl flex items-center justify-center text-primary hover:scale-110 transition-transform shadow-lg shadow-surface-lowest/50"
    >
      <MessageCircle size={24} />
    </a>
    <a
      href="tel:+919469456789"
      className="w-14 h-14 rounded-full bg-surface-highest/60 backdrop-blur-xl flex items-center justify-center text-primary hover:scale-110 transition-transform shadow-lg shadow-surface-lowest/50"
    >
      <Phone size={24} />
    </a>
  </div>
);

export default FloatingConcierge;
