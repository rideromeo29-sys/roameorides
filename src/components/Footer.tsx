import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/caravans", label: "Caravans" },
  { to: "/experiences", label: "Experiences" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const services = [
  "Caravan Rentals",
  "Couple Getaways",
  "Family Trips",
  "Content Shoots",
  "Custom Trips",
  "Brand Collabs",
];

const Footer = () => (
  <footer className="bg-surface-lowest pt-24 pb-12 px-6 md:px-16">
    <div className="gold-fade-divider max-w-7xl mx-auto mb-16" />

    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 mb-20">
      <Link to="/" className="flex items-center group">
        {/* Footer Logo: Large Rounded Square */}
        <img 
          src="/logo.jpg" 
          alt="Roameo Logo" 
          className="h-20 w-20 md:h-24 md:w-24 object-cover rounded-2xl border border-white/5 shadow-2xl brightness-110 group-hover:scale-105 transition-transform" 
        />
      </Link>
      
      <div className="text-center md:text-left">
        <p className="luxury-serif italic text-secondary text-lg md:text-xl mb-2">Not Just Travel. It's Roameo.</p>
        <p className="text-on-surface/40 text-[10px] uppercase tracking-[0.3em]">Redefining the Indian Road</p>
      </div>

      <div className="flex gap-8">
        <a href="https://www.instagram.com/roameorides?igsh=N2MxZXkyd3ZkeXEw" target="_blank" rel="noopener noreferrer">
          <Instagram size={24} className="text-on-surface/60 hover:text-secondary transition-all cursor-pointer hover:-translate-y-1" />
        </a>
        <a href="https://www.facebook.com/share/1JfHxxoCVT/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
          <Facebook size={24} className="text-on-surface/60 hover:text-secondary transition-all cursor-pointer hover:-translate-y-1" />
        </a>
      </div>
    </div>

    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
      <div>
        <h4 className="text-secondary text-xs font-bold uppercase tracking-[0.25em] mb-8">Navigation</h4>
        <div className="flex flex-col space-y-5">
          {quickLinks.map((l) => (
            <Link key={l.to} to={l.to} className="text-on-surface/70 font-light text-sm hover:text-secondary transition-colors tracking-wide">
              {l.label}
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-secondary text-xs font-bold uppercase tracking-[0.25em] mb-8">Services</h4>
        <div className="flex flex-col space-y-5">
          {services.map((s) => (
            <span key={s} className="text-on-surface/70 font-light text-sm hover:text-secondary cursor-default transition-colors tracking-wide">{s}</span>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-secondary text-xs font-bold uppercase tracking-[0.25em] mb-8">Reach Out</h4>
        <div className="flex flex-col space-y-5 text-on-surface/70 font-light text-sm">
          <a href="tel:9469456789" className="hover:text-secondary transition-colors font-medium">9469456789</a>
          <a href="mailto:Roameorides@gmail.com" className="hover:text-secondary transition-colors underline underline-offset-4 decoration-white/10">Roameorides@gmail.com</a>
          <span className="leading-relaxed opacity-60">Survey No 719, TSIIC 100, Ft Road,<br />Ibrahimpatnam, TS 501510</span>
        </div>
      </div>
    </div>

    <div className="max-w-7xl mx-auto border-t border-white/5 pt-10">
      <p className="text-on-surface/20 text-[9px] uppercase tracking-[0.4em] text-center">
        © 2026 ROAMEO RIDES · JOURNEY INTO THE NIGHT
      </p>
    </div>
  </footer>
);

export default Footer;