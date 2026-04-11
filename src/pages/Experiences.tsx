import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import heroExperiences from "@/assets/hero-experiences.jpg";
import experienceCouple from "@/assets/experience-couple.jpg";
import experienceFamily from "@/assets/experience-family.jpg";
import experienceCreator from "@/assets/experience-creator.jpg";
import experienceCustom from "@/assets/experience-custom.jpg";

const sections = [
  {
    label: "For Couples",
    title: "Romantic Escapes, Just for Two.",
    desc: "Rekindle the spark amidst nature. Our couple getaways are curated for intimacy, featuring secluded spots and premium amenities.",
    bullets: ["Private Setup", "Personalized Route", "Cozy Interiors"],
    cta: "Plan a Couple Trip",
    img: experienceCouple,
    reverse: false,
  },
  {
    label: "For Families",
    title: "Safe, Spacious & Memorable.",
    desc: "The ultimate family adventure without compromising comfort. Plenty of room for everyone to relax, explore, and bond.",
    bullets: ["Spacious Seating", "AC Throughout", "Kid-Friendly Setup"],
    cta: "Plan a Family Trip",
    img: experienceFamily,
    reverse: true,
  },
  {
    label: "For Creators",
    title: "Cinematic Backdrops. Reel-Worthy Moments.",
    desc: "Elevate your content with the perfect aesthetic. Our caravans serve as a mobile studio and a stunning prop for your next big project.",
    bullets: ["Photogenic Interiors", "Scenic Routes", "Caravan as Prop"],
    cta: "Book a Creator Shoot",
    img: experienceCreator,
    reverse: false,
  },
  {
    label: "Fully Custom",
    title: "Your Route. Your Pace. Your Story.",
    desc: "Total freedom. We handle the logistics; you decide where the road leads. A bespoke journey tailored to your wildest travel dreams.",
    bullets: ["Choose Your Destination", "Curated Stops", "Personal Concierge"],
    cta: "Design Your Trip",
    img: experienceCustom,
    reverse: true,
  },
];

const ExperiencesPage = () => (
  <div>
    {/* Hero Section with Bottom Blend Overlay */}
    <div className="relative">
      <HeroSection
        image={heroExperiences}
        title={
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl tracking-tighter leading-[1.1]"
          >
            Experiences<br />Designed for Stories.
          </motion.div>
        }
        subtitle="From romantic escapes to content shoots — every Roameo journey is unforgettable."
        actions={[
          { label: "Plan Your Experience", to: "/contact" },
          { label: "Explore Packages", to: "/caravans", variant: "outline" },
        ]}
      />
      {/* Blend Overlay to remove sharp line */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </div>

    {sections.map((s, i) => (
      <section key={i} className={`py-24 px-6 md:px-16 overflow-hidden ${i % 2 === 0 ? "bg-background" : "bg-surface-low"}`}>
        <div className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center`}>
          <motion.div 
            initial={{ opacity: 0, x: s.reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className={s.reverse ? "md:order-2" : ""}
          >
            <span className="text-xs uppercase tracking-[0.15em] text-secondary font-semibold mb-4 block">{s.label}</span>
            <h2 className="font-serif text-3xl md:text-5xl text-on-surface mb-6 leading-tight">{s.title}</h2>
            <p className="text-on-surface-variant leading-relaxed mb-6">{s.desc}</p>
            <ul className="space-y-2 mb-8">
              {s.bullets.map((b) => (
                <li key={b} className="text-on-surface-variant text-sm flex items-center gap-2">
                  <span className="text-secondary">▸</span> {b}
                </li>
              ))}
            </ul>
            <Link to="/contact">
              <button className="text-secondary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all uppercase tracking-widest group">
                {s.cta} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "circOut" }}
            className={`h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl ${s.reverse ? "md:order-1" : ""}`}
          >
            <img src={s.img} alt={s.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-in-out" loading="lazy" />
          </motion.div>
        </div>
      </section>
    ))}

    {/* Quote & CTA */}
    <section className="bg-surface-lowest py-24 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-serif text-3xl md:text-5xl text-on-surface italic max-w-3xl mx-auto mb-8 leading-tight">
          "Every trip is a story. Let's write yours."
        </h2>
        <a
          href="https://wa.me/919469456789"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary-container text-on-primary font-bold px-10 py-4 rounded-full uppercase text-sm tracking-widest hover:scale-105 transition-transform shadow-lg"
        >
          <MessageCircle size={18} />
          Book on WhatsApp
        </a>
      </motion.div>
    </section>
  </div>
);

export default ExperiencesPage;