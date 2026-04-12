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
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when switching routes
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-4 md:py-5 transition-all duration-500 ${
        scrolled || mobileOpen
          ? "bg-background shadow-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center gap-4">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-on-surface z-50"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        <Link to="/" className="flex items-center transition-all hover:scale-105 active:scale-95 group">
          <div className="relative">
            <img 
              src="/logo.jpg" 
              alt="Roameo Logo" 
              className="h-14 w-14 md:h-16 md:w-16 object-cover rounded-xl border border-white/10 shadow-2xl" 
            />
            <div className="absolute inset-0 rounded-xl group-hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-shadow" />
          </div>
        </Link>
      </div>

      {/* Desktop Links - Reduced size, mixed case, and underline animation */}
      <div className="hidden md:flex items-center gap-8 text-[13px] font-normal tracking-wide">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.to;
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`relative py-1 transition-colors duration-300 group ${
                isActive ? "text-secondary font-medium" : "text-on-surface/80 hover:text-secondary"
              }`}
            >
              {link.label}
              {/* Underline Animation */}
              <span 
                className={`absolute bottom-0 left-0 w-full h-[1.5px] bg-secondary transition-transform duration-300 origin-left ${
                  isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`} 
              />
            </Link>
          );
        })}
      </div>

      <Link
        to="/contact"
        className="bg-accent text-white font-bold px-8 py-3.5 rounded-full hover:shadow-[0_0_25px_rgba(232,119,34,0.5)] transition-all uppercase text-xs tracking-widest"
      >
        Book Now
      </Link>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-background md:hidden flex flex-col items-center gap-8 py-12 animate-in fade-in slide-in-from-top-4 duration-300 border-b border-white/10 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-base font-medium transition-colors ${
                location.pathname === link.to ? "text-secondary underline underline-offset-8" : "text-on-surface hover:text-secondary"
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