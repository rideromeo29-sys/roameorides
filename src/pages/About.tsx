import { MessageCircle, Truck, Map, Calendar, Heart, Users as UsersIcon, Sparkles } from "lucide-react";
import HeroSection from "@/components/HeroSection";
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
  <div>
    <HeroSection
      image={heroAbout}
      title={<span className="text-5xl md:text-7xl font-extralight italic tracking-tight">Born from a Passion for Travel.</span>}
      subtitle="We don't just offer caravans — we create unforgettable experiences."
    />

    {/* Brand Story */}
    <section className="bg-surface-low py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="rounded-2xl overflow-hidden h-[450px]">
          <img src={aboutStory} alt="Our vintage caravan" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div>
          <span className="text-xs uppercase tracking-[0.15em] text-secondary font-semibold mb-4 block">Our Story</span>
          <h2 className="font-serif text-3xl md:text-4xl text-on-surface mb-6 leading-tight">
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
            <p className="font-serif text-on-surface italic text-lg leading-relaxed">
              "Every Roameo journey is designed to give you not just comfort, but an experience you'll remember."
            </p>
          </blockquote>
        </div>
      </div>
    </section>

    {/* What We Offer */}
    <section className="bg-background py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="font-serif text-3xl md:text-4xl text-on-surface mb-3">What We Offer</h2>
        <div className="gold-fade-divider max-w-xs mx-auto" />
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {offers.map((o) => (
          <div key={o.title} className="bg-surface-container border border-outline-variant/20 rounded-2xl p-8 hover:bg-surface-high transition-colors">
            <o.icon size={28} className="text-secondary mb-4" />
            <h3 className="text-on-surface font-semibold mb-2">{o.title}</h3>
            <div className="gold-fade-divider mb-4" />
            <p className="text-on-surface-variant text-sm leading-relaxed">{o.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="bg-surface-lowest py-24 px-6 text-center">
      <h2 className="font-serif text-3xl md:text-5xl text-on-surface mb-4">Start Your Roameo Story.</h2>
      <p className="text-on-surface-variant font-light mb-8 italic">Every journey begins with a single message.</p>
      <a
        href="https://wa.me/919469456789"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 gradient-primary-btn text-primary-foreground font-bold px-10 py-4 rounded-full uppercase text-sm tracking-widest hover:scale-105 transition-transform"
      >
        <MessageCircle size={18} />
        Book on WhatsApp
      </a>
    </section>
  </div>
);

export default AboutPage;
