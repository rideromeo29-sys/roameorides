import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/caravans", label: "Caravans" },
  { to: "/experiences", label: "Experiences" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav bg-surface-highest/60 flex justify-between items-center px-6 md:px-8 py-4 md:py-5">
      <div className="flex items-center gap-3">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-primary-container"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        <Link to="/" className="font-serif text-2xl font-bold tracking-tight text-on-surface">
          ROAMEO
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.1em] font-medium">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`transition-colors duration-300 hover:text-secondary ${
              location.pathname === link.to
                ? "text-secondary font-semibold"
                : "text-on-surface-variant"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <Link
        to="/contact"
        className="gradient-primary-btn text-primary-foreground font-bold px-6 py-2.5 rounded-full hover:scale-105 transition-transform duration-300 uppercase text-xs tracking-widest shadow-lg"
      >
        Book Now
      </Link>

      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-surface-lowest/95 glass-nav md:hidden flex flex-col items-center gap-6 py-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`text-sm uppercase tracking-widest ${
                location.pathname === link.to ? "text-secondary font-semibold" : "text-on-surface-variant"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
