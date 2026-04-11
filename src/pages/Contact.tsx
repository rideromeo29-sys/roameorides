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
            href="https://wa.me/9469456789?text=Hi%20Roameo%20Rides!%20I'm%20looking%20for%20a%20premium%20caravan%20experience.%20Can%20you%20help%20me%20plan%20my%20journey?"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-white font-bold px-10 py-4 rounded-full uppercase text-sm tracking-widest hover:scale-105 transition-transform"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>

    {/* Embedded Google Map */}
    <section className="bg-background py-16 px-6 md:px-16">
      <div className="max-w-5xl mx-auto h-80 rounded-2xl overflow-hidden">
        <iframe
          title="Roameo Rides Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3810.123!2d78.6!3d17.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDA2JzAwLjAiTiA3OMKwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(100%) invert(90%) contrast(80%)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>

    {/* Booking Form */}
    <BookingForm />

    {/* Social */}
    <section className="bg-surface-lowest py-16 px-6 text-center">
      <h3 className="font-serif text-on-surface text-lg font-semibold mb-6">Connect with us on social media</h3>
      <div className="flex justify-center gap-4">
        <a href="https://www.instagram.com/roameorides?igsh=N2MxZXkyd3ZkeXEw" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-surface-container px-6 py-3 rounded-full text-on-surface-variant hover:text-primary transition-colors text-sm">
          <Instagram size={16} /> Instagram
        </a>
        <a href="https://www.facebook.com/share/1JfHxxoCVT/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-surface-container px-6 py-3 rounded-full text-on-surface-variant hover:text-primary transition-colors text-sm">
          <Facebook size={16} /> Facebook
        </a>
      </div>
    </section>
  </div>
);

export default ContactPage;
