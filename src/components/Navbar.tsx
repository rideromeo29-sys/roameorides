import { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-8 py-4 md:py-6 transition-colors duration-500 ${
        scrolled
          ? "bg-[#1C1C1C] border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center gap-3">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-on-surface"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        <Link to="/" className="font-serif text-2xl font-bold tracking-tighter text-on-surface">
          ROAMEO
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-10 text-sm font-light tracking-[0.1em]">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`transition-colors duration-300 hover:text-primary ${
              location.pathname === link.to
                ? "text-secondary font-semibold"
                : "text-on-surface"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <Link
        to="/contact"
        className="bg-[#E87722] text-white font-semibold px-8 py-3 rounded-full hover:shadow-[0_0_20px_rgba(232,119,34,0.4)] transition-all uppercase text-sm tracking-widest"
      >
        Book Now
      </Link>

      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-[#1C1C1C]/95 glass-nav md:hidden flex flex-col items-center gap-6 py-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`text-sm uppercase tracking-widest ${
                location.pathname === link.to ? "text-secondary font-semibold" : "text-on-surface"
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
