import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import heroExperiences from "@/assets/hero-experiences.jpg";
import templeImg from "@/assets/temple.jpg";
import brideImg from "@/assets/bride.jpg";
import productionImg from "@/assets/production.png";
import corporateImg from "@/assets/main-space-4seat.jpeg";
import leisureImg from "@/assets/homehero.png";
// Updated sections based on the new curated categories
const sections = [
  {
    label: "Spiritual & Heritage Journeys",
    title: "Sacred Paths, Elevated Comfort.",
    desc: "Experience spiritual awakening without the typical travel fatigue. Our luxury temple tours and pilgrimage retreats offer a serene sanctuary on wheels as you explore India's rich heritage.",
    bullets: ["Luxury Temple Tours", "Pilgrimage Road Retreats", "Customized Heritage Trails"],
    cta: "Begin Your Pilgrimage",
     img: templeImg,// Placeholder: Place in public/images/
    reverse: false,
  },
  {
    label: "Celebrations & Weddings",
    title: "Say 'I Do' to the Open Road.",
    desc: "From bridal lounges to intimate on-wheels celebrations, we provide the ultimate luxury backdrop for your special day. Perfect for destination wedding transfers or a unique pre-wedding experience.",
    bullets: ["Bride & Groom Luxury Lounge", "Destination Wedding Transfers", "Intimate Celebration Setups"],
    cta: "Plan Your Celebration",
   img: brideImg,
 // Placeholder
    reverse: true,
  },
  {
    label: "Film, Fashion & Production",
    title: "A Mobile Studio for the Stars.",
    desc: "Premium support for high-end productions. Our caravans serve as celebrity vanity vans, mobile green rooms, and photogenic backdrops for influencer and fashion shoots.",
    bullets: ["Celebrity Vanity Van Services", "Mobile Green Rooms", "Content Creation Setups"],
    cta: "Book Production Support",
     img: productionImg, // Placeholder
    reverse: false,
  },
  {
    label: "Corporate & VIP Experiences",
    title: "Business Meetings, Redefined.",
    desc: "Take your boardroom to the mountains. Impress VIP guests with premium hospitality or host executive offsites that inspire innovation while in motion.",
    bullets: ["Executive Corporate Offsites", "VIP Guest Hospitality", "Luxury Road Meetings"],
    cta: "Host a Corporate Retreat",
    img: corporateImg, // Placeholder
    reverse: true,
  },
  {
    label: "Private Leisure & Special Events",
    title: "Bespoke Moments, Tailored for You.",
    desc: "Whether it's a private kitty party, a family escape, or a specialized hospitality caravan for events, we create bespoke staycation experiences that prioritize your privacy and pleasure.",
    bullets: ["Kitty Parties & Private Socials", "Bespoke Staycations", "Customized Occasion Experiences"],
    cta: "Design Your Escape",
     img: leisureImg,// Placeholder
    reverse: false,
  },
];

const ExperiencesPage = () => (
  <div>
    {/* Hero Section */}
    <div className="relative">
      <HeroSection
        image={heroExperiences}// Placeholder
        title={
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl tracking-tighter leading-[1.1] text-white"
          >
            Experiences<br />Designed for Stories.
          </motion.div>
        }
        subtitle="From sacred temple tours to high-fashion film shoots — every Roameo journey is a masterpiece."
        actions={[
          { label: "Plan Your Experience", to: "/contact" },
          { label: "Explore Caravan", to: "/caravans", variant: "outline" },
        ]}
      />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </div>

    {/* Dynamic Sections */}
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
            <ul className="grid grid-cols-1 gap-2 mb-8">
              {s.bullets.map((b) => (
                <li key={b} className="text-on-surface-variant text-sm flex items-center gap-2 font-medium">
                  <span className="text-[#E87722]">▸</span> {b}
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
            <img 
              src={s.img} 
              alt={s.title} 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-in-out" 
              loading="lazy"
              onError={(e) => { e.currentTarget.src = "https://placehold.co/800x1000/1a1a1a/ffffff?text=" + s.label }} 
            />
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
      "Every road journey is a story. Let's write yours with luxury."
    </h2>
    
    {/* Updated to use Link for internal routing */}
    <Link
      to="/contact"
      className="inline-flex items-center gap-2 bg-[#E87722] text-white font-bold px-10 py-4 rounded-full uppercase text-sm tracking-widest hover:scale-105 transition-transform shadow-lg"
    >
      <MessageCircle size={18} />
      Book Your Experience
    </Link>
  </motion.div>
</section>
  </div>
);

export default ExperiencesPage;