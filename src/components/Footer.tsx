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
  <footer className="bg-surface-lowest pt-20 pb-10 px-6 md:px-16">
    <div className="gold-fade-divider max-w-7xl mx-auto mb-12" />

    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 mb-16">
      <h3 className="font-serif text-xl font-bold tracking-tighter text-on-surface">ROAMEO RIDES</h3>
      <p className="font-serif italic text-secondary text-sm">Not Just Travel. It's Roameo.</p>
      <div className="flex gap-4">
        <a href="https://www.instagram.com/roameorides?igsh=N2MxZXkyd3ZkeXEw" target="_blank" rel="noopener noreferrer">
          <Instagram size={18} className="text-on-surface hover:text-primary transition-colors cursor-pointer" />
        </a>
        <a href="https://www.facebook.com/share/1JfHxxoCVT/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
          <Facebook size={18} className="text-on-surface hover:text-primary transition-colors cursor-pointer" />
        </a>
      </div>
    </div>

    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
      <div>
        <h4 className="text-secondary text-xs font-bold uppercase tracking-[0.2em] mb-6">Quick Links</h4>
        <div className="flex flex-col space-y-4">
          {quickLinks.map((l) => (
            <Link key={l.to} to={l.to} className="text-on-surface/70 font-light text-sm hover:text-primary transition-colors">
              {l.label}
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-secondary text-xs font-bold uppercase tracking-[0.2em] mb-6">Services</h4>
        <div className="flex flex-col space-y-4">
          {services.map((s) => (
            <span key={s} className="text-on-surface/70 font-light text-sm">{s}</span>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-secondary text-xs font-bold uppercase tracking-[0.2em] mb-6">Contact</h4>
        <div className="flex flex-col space-y-4 text-on-surface/70 font-light text-sm">
          <a href="tel:9469456789" className="hover:text-primary transition-colors">Phone: 9469456789</a>
          <a href="mailto:Roameorides@gmail.com" className="hover:text-primary transition-colors">Email: Roameorides@gmail.com</a>
          <span>Survey No 719, TSIIC 100, Ft Road,<br />Ibrahimpatnam, Telangana 501510</span>
        </div>
      </div>
    </div>

    <div className="max-w-7xl mx-auto border-t border-white/5 pt-8">
      <p className="text-on-surface/30 text-[10px] uppercase tracking-widest text-center">
        © 2024 ROAMEO RIDES. JOURNEY INTO THE NIGHT.
      </p>
    </div>
  </footer>
);

export default Footer;
