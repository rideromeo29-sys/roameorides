import { MessageCircle } from "lucide-react";
import { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pickup: "",
    travelFromDate: "",
    travelToDate: "",
    destination: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsApp = () => {
    const {
      name,
      phone,
      pickup,
      travelFromDate,
      travelToDate,
      destination
    } = formData;

    // Constructing the message with user details
    const message =
      `Hi Roameo Rides! I'd like to plan a journey.%0A%0A` +
      `*Name:* ${name || "Not provided"}%0A` +
      `*Phone:* ${phone || "Not provided"}%0A` +
      `*Pick Up:* ${pickup || "Not provided"}%0A` +
      `*Travel From:* ${travelFromDate || "Not provided"}%0A` +
      `*Travel To:* ${travelToDate || "Not provided"}%0A` +
      `*Destination:* ${destination || "Not provided"}`;

    window.open(`https://wa.me/9469456789?text=${message}`, "_blank");
  };

  return (
    <section className="bg-surface-low py-24 px-6">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="luxury-serif text-3xl md:text-4xl text-on-surface mb-3">
          Ready to experience travel like never before?
        </h2>
        <p className="text-on-surface-variant font-light">
          Your journey starts with a conversation.
        </p>
      </div>

      <div className="max-w-2xl mx-auto bg-surface-container rounded-2xl p-8 md:p-12 border border-white/5 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          
          {/* Name */}
          <div>
            <label className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold mb-2 block">
              Your Name
            </label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Enter your name"
              className="w-full bg-transparent border-b border-outline-variant/40 focus:border-secondary py-2 text-on-surface text-sm outline-none transition-colors placeholder:text-muted-foreground"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold mb-2 block">
              Phone Number
            </label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="tel"
              placeholder="+91 XXXXX XXXXX"
              className="w-full bg-transparent border-b border-outline-variant/40 focus:border-secondary py-2 text-on-surface text-sm outline-none transition-colors placeholder:text-muted-foreground"
            />
          </div>

          {/* Pickup */}
          <div>
            <label className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold mb-2 block">
              Pick Up Location
            </label>
            <input
              name="pickup"
              value={formData.pickup}
              onChange={handleChange}
              type="text"
              placeholder="City or address"
              className="w-full bg-transparent border-b border-outline-variant/40 focus:border-secondary py-2 text-on-surface text-sm outline-none transition-colors placeholder:text-muted-foreground"
            />
          </div>

          {/* Travel From Date */}
          <div>
            <label className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold mb-2 block">
              Travel From Date
            </label>
            <input
              name="travelFromDate"
              value={formData.travelFromDate}
              onChange={handleChange}
              type="date"
              className="w-full bg-transparent border-b border-outline-variant/40 focus:border-secondary py-2 text-on-surface text-sm outline-none transition-colors [color-scheme:dark]"
            />
          </div>

          {/* Travel To Date */}
          <div>
            <label className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold mb-2 block">
              Travel To Date
            </label>
            <input
              name="travelToDate"
              value={formData.travelToDate}
              onChange={handleChange}
              type="date"
              className="w-full bg-transparent border-b border-outline-variant/40 focus:border-secondary py-2 text-on-surface text-sm outline-none transition-colors [color-scheme:dark]"
            />
          </div>

          {/* Destination */}
          <div>
            <label className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold mb-2 block">
              Destination
            </label>
            <input
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              type="text"
              placeholder="Where do you want to go?"
              className="w-full bg-transparent border-b border-outline-variant/40 focus:border-secondary py-2 text-on-surface text-sm outline-none transition-colors placeholder:text-muted-foreground"
            />
          </div>
        </div>

        <button
          onClick={handleWhatsApp}
          className="w-full bg-primary-container text-white font-bold py-4 rounded-full hover:scale-[1.02] transition-transform uppercase text-xs tracking-widest flex items-center justify-center gap-2 shadow-lg"
        >
          <MessageCircle size={18} />
          Send via WhatsApp
        </button>
      </div>
    </section>
  );
};

export default BookingForm;