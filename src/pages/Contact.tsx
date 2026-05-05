import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram, Facebook } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import BookingForm from "@/components/BookingForm";
import heroContact from "@/assets/hero-contact.jpg";

const contactDetails = [
  { icon: Phone, label: "Call Us", value: "9469456789" },
  { icon: Mail, label: "Email Us", value: "Roameorides@gmail.com" },
  { icon: MapPin, label: "Location", value: "Survey No 719, TSIIC 100, Ft Road,\nIbrahimpatnam, Telangana 501510" },
  { icon: Clock, label: "Concierge Hours", value: "Open 365 Days · 24/7" },
];

const ContactPage = () => (
  <div className="overflow-hidden">
    {/* Hero Section with Rich Blend */}
    <div className="relative">
      <HeroSection
        image={heroContact}
        title={
          <h1 className="font-sans tracking-[-0.03em] leading-[1.1] text-on-surface">
            <span className="block text-2xl md:text-4xl lg:text-5xl font-[200] opacity-90">
              Let's Plan Your
            </span>
            <span className="block text-2xl md:text-4xl lg:text-5xl font-[500]">
              Journey.
            </span>
          </h1>
        }
        subtitle="We're available 365 days, 24/7 — just reach out."
      />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-surface-low to-transparent z-10" />
    </div>
    
    <BookingForm />
    {/* Contact Details */}
    <section className="bg-surface-low py-24 px-6 md:px-16">
      <div className="max-w-4xl mx-auto bg-surface-container rounded-2xl p-8 md:p-12 border border-white/5 shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {contactDetails.map((d) => (
            <div key={d.label} className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-surface-high flex items-center justify-center flex-shrink-0">
                <d.icon size={20} className="text-secondary" />
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.2em] text-on-surface font-bold mb-1">{d.label}</h4>
                <p className="text-on-surface-variant text-sm whitespace-pre-line font-light">{d.value}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="gold-fade-divider my-8" />
        <div className="flex justify-center">
          <a
            href="https://wa.me/9469456789?text=Hi%20Roameo%20Rides!%20I'm%20looking%20for%20a%20premium%20caravan%20experience."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary-container text-white font-bold px-10 py-4 rounded-full uppercase text-xs tracking-widest hover:scale-105 transition-transform shadow-lg"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>

    {/* Embedded Google Map - Ibrahimpatnam Location */}
    <section className="bg-background py-16 px-6 md:px-16">
      <div className="max-w-5xl mx-auto h-96 rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
        <iframe
          title="Roameo Rides Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3810.123456789!2d78.6479!3d17.1866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba00000000001%3A0x0000000000000000!2sIbrahimpatnam%2C%20Telangana%20501510!5e0!3m2!1sen!2sin!4v1712860000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(100%) invert(90%) contrast(120%)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>

    {/* Booking Form */}
    

    {/* Social */}
    <section className="bg-surface-lowest py-16 px-6 text-center">
      <h3 className="luxury-serif text-on-surface text-xl mb-6">Connect with us on social media</h3>
      <div className="flex justify-center gap-4">
        <a href="https://www.instagram.com/roameorides?igsh=N2MxZXkyd3ZkeXEw" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-surface-container px-6 py-3 rounded-full text-on-surface-variant hover:text-secondary transition-all text-xs font-bold uppercase tracking-widest border border-white/5">
          <Instagram size={16} /> Instagram
        </a>
        <a href="https://www.facebook.com/share/1JfHxxoCVT/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-surface-container px-6 py-3 rounded-full text-on-surface-variant hover:text-secondary transition-all text-xs font-bold uppercase tracking-widest border border-white/5">
          <Facebook size={16} /> Facebook
        </a>
      </div>
    </section>
  </div>
);

export default ContactPage;