import { Link } from "react-router-dom";
import { ArrowRight, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="bg-surface-lowest pt-16 pb-8 px-6 md:px-16">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
      <div>
        <h3 className="font-serif text-xl font-bold text-on-surface mb-2">ROAMEO RIDES</h3>
        <p className="text-xs uppercase tracking-[0.15em] text-secondary mb-4">Redefining the Indian Road</p>
        <p className="text-sm text-on-surface-variant leading-relaxed">
          Pioneering luxury land travel. We turn the journey into the destination with our curated midnight fleet.
        </p>
      </div>

      <div>
        <h4 className="text-xs uppercase tracking-[0.15em] text-on-surface font-semibold mb-4">Quick Links</h4>
        <div className="flex flex-col gap-3">
          {[
            { to: "/", label: "Home" },
            { to: "/caravans", label: "Caravans" },
            { to: "/experiences", label: "Experiences" },
          ].map((l) => (
            <Link key={l.to} to={l.to} className="text-sm text-on-surface-variant hover:text-primary transition-colors">{l.label}</Link>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xs uppercase tracking-[0.15em] text-on-surface font-semibold mb-4">Concierge</h4>
        <div className="flex flex-col gap-3">
          {["Services", "Safety", "Privacy Policy"].map((t) => (
            <span key={t} className="text-sm text-on-surface-variant">{t}</span>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xs uppercase tracking-[0.15em] text-on-surface font-semibold mb-4">The Newsletter</h4>
        <p className="text-sm text-on-surface-variant mb-4">Invitations to exclusive nocturnal journeys.</p>
        <div className="flex items-center border-b border-outline-variant/40">
          <input
            type="email"
            placeholder="Email Address"
            className="bg-transparent text-sm text-on-surface py-2 flex-1 outline-none placeholder:text-muted-foreground"
          />
          <button className="text-secondary hover:text-primary transition-colors p-2">
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>

    <div className="gold-fade-divider max-w-7xl mx-auto mb-6" />

    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-xs text-muted-foreground uppercase tracking-widest">
        © 2024 ROAMEO RIDES. JOURNEY INTO THE NIGHT.
      </p>
      <div className="flex gap-4">
        <Instagram size={16} className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer" />
        <Facebook size={16} className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer" />
        <Twitter size={16} className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer" />
      </div>
    </div>
  </footer>
);

export default Footer;
