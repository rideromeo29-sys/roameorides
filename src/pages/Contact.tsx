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
  <div>
    <HeroSection
      image={heroContact}
      title={<span className="text-5xl md:text-7xl">Let's Plan Your Journey.</span>}
      subtitle="We're available 365 days, 24/7 — just reach out."
    />

    {/* Contact Details */}
    <section className="bg-surface-low py-24 px-6 md:px-16">
      <div className="max-w-4xl mx-auto bg-surface-container rounded-2xl p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {contactDetails.map((d) => (
            <div key={d.label} className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-surface-high flex items-center justify-center flex-shrink-0">
                <d.icon size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-[0.15em] text-on-surface font-semibold mb-1">{d.label}</h4>
                <p className="text-on-surface-variant text-sm whitespace-pre-line">{d.value}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="gold-fade-divider my-8" />
        <div className="flex justify-center">
          <a
            href="https://wa.me/919469456789"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary-container text-on-primary font-bold px-10 py-4 rounded-full uppercase text-sm tracking-widest hover:scale-105 transition-transform"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>

    {/* Map Placeholder */}
    <section className="bg-background py-16 px-6 md:px-16">
      <div className="max-w-5xl mx-auto h-80 rounded-2xl bg-surface-container relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-high/50 to-surface-container" />
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center mb-3 animate-pulse">
            <MapPin size={24} className="text-on-primary" />
          </div>
          <p className="text-on-surface-variant text-sm">Ibrahimpatnam, Telangana</p>
        </div>
      </div>
    </section>

    {/* Booking Form */}
    <BookingForm />

    {/* Social */}
    <section className="bg-surface-lowest py-16 px-6 text-center">
      <h3 className="text-on-surface text-lg font-semibold mb-6">Connect with us on social media</h3>
      <div className="flex justify-center gap-4">
        <a href="#" className="flex items-center gap-2 bg-surface-container px-6 py-3 rounded-full text-on-surface-variant hover:text-primary transition-colors text-sm">
          <Instagram size={16} /> Instagram
        </a>
        <a href="#" className="flex items-center gap-2 bg-surface-container px-6 py-3 rounded-full text-on-surface-variant hover:text-primary transition-colors text-sm">
          <Facebook size={16} /> Facebook
        </a>
      </div>
    </section>
  </div>
);

export default ContactPage;
