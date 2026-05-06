import { MessageCircle, Truck, Map, Calendar, Heart, Users as UsersIcon, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
// Import HashLink for cross-page smooth scrolling
import { HashLink } from "react-router-hash-link"; 
import HeroSection from "@/components/HeroSection";

// Assets
import heroAbout from "@/assets/hero-about.jpg";
import aboutStory from "@/assets/about-story.jpg";

const offers = [
  { icon: Truck, title: "Luxury Caravan Rentals", desc: "Pristine fleet of high-end, fully-equipped mobile suites designed for ultimate comfort on the move." },
  { icon: Map, title: "Cinematic Travel Experiences", desc: "Hand-curated routes that take you through the most breathtaking, photogenic landscapes in the country." },
  { icon: Heart, title: "Couple & Romantic Getaways", desc: "Intimate escapes featuring private starlit dinners and secluded camp spots designed for two." },
  { icon: UsersIcon, title: "Family Travel Experiences", desc: "Spacious arrangements and adventure-packed itineraries that cater to travelers of all ages." },
  { icon: Calendar, title: "Custom Travel Planning", desc: "Our concierge team builds a bespoke itinerary from scratch, tailored to your exact desires." },
  { icon: Sparkles, title: "Event & Brand Collaborations", desc: "Premium mobile spaces for high-end activations, photoshoots, and luxury outdoor events." },
];

const AboutPage = () => (
  <div className="overflow-hidden">
    {/* Hero Section */}
    <div className="relative">
      <HeroSection
        image={heroAbout}
        title={
          <h1 className="font-sans tracking-tight text-on-surface whitespace-nowrap text-[clamp(1.1rem,3.5vw,3.15rem)] leading-none">
            Born from a Passion for <span className="luxury-serif italic text-secondary px-2">travel.</span>
          </h1>
        }
        subtitle="We don't just offer a caravan — we create unforgettable experiences."
      />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-surface-low to-transparent z-10" />
    </div>

    {/* Brand Story Section */}
    <section className="bg-surface-low py-24 px-6 md:px-16 relative z-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="rounded-2xl overflow-hidden h-[450px] shadow-2xl"
        >
          <img src={aboutStory} alt="Our vintage caravan" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" loading="lazy" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-xs uppercase tracking-[0.15em] text-secondary font-semibold mb-4 block">Our Story</span>
          <h2 className="luxury-serif text-3xl md:text-4xl text-on-surface mb-6 leading-tight">
            We wanted to build something different.
          </h2>
          <p className="text-on-surface-variant leading-relaxed mb-4">
            What started as a single restored vintage caravan has evolved into a movement. We believed that modern travel had lost its soul — becoming too fast, too generic, and too disconnected from the landscape.
          </p>
          <div className="gold-fade-divider my-6" />
          <p className="text-on-surface-variant leading-relaxed mb-6">
            The Midnight Concierge was born to reclaim that sense of wonder. By blending the freedom of the open road with the uncompromising service of a five-star hotel, we allow you to wander without sacrificing elegance.
          </p>
          <blockquote className="border-l-2 border-secondary pl-6 py-2">
            <p className="luxury-serif text-on-surface italic text-lg leading-relaxed">
              "Every Roameo journey is designed to give you not just comfort, but an experience you'll remember."
            </p>
          </blockquote>
        </motion.div>
      </div>
    </section>

    {/* What We Offer Section */}
    <section className="bg-background py-24 px-6 md:px-16">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto text-center mb-16"
      >
        <h2 className="luxury-serif text-3xl md:text-4xl text-on-surface mb-3">What We Offer</h2>
        <div className="gold-fade-divider max-w-xs mx-auto" />
      </motion.div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {offers.map((o, index) => (
          <motion.div 
            key={o.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group bg-surface-container border border-outline-variant/20 rounded-2xl p-8 hover:bg-surface-high transition-all duration-500 hover:-translate-y-3 shadow-lg"
          >
            <o.icon size={28} className="text-secondary mb-4 group-hover:rotate-12 transition-transform" />
            <h3 className="text-on-surface font-semibold mb-2">{o.title}</h3>
            <div className="gold-fade-divider mb-4" />
            <p className="text-on-surface-variant text-sm leading-relaxed">{o.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Final CTA - Redirects to Contact Page Form */}
    <section className="bg-surface-lowest py-24 px-6 text-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="luxury-serif text-3xl md:text-5xl text-on-surface mb-4">Start Your Roameo Story.</h2>
        <p className="text-on-surface-variant font-light mb-8 italic">Every journey begins with a single message.</p>
        
        {/* Updated CTA to redirect and auto-scroll on the Contact Page */}
        <HashLink
          smooth
          to="/contact#booking-form"
          className="inline-flex items-center gap-2 bg-primary-container text-white font-bold px-10 py-4 rounded-full uppercase text-sm tracking-widest hover:scale-110 transition-transform shadow-[0_0_30px_rgba(232,119,34,0.2)]"
        >
          <MessageCircle size={18} />
          Book Your Journey
        </HashLink>
      </motion.div>
    </section>
  </div>
);

export default AboutPage;