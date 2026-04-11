import { MessageCircle } from "lucide-react";

const fields = [
  { label: "Your Name", placeholder: "Enter your name", type: "text" },
  { label: "Phone Number", placeholder: "+91 XXXXX XXXXX", type: "tel" },
  { label: "Pick Up Location", placeholder: "City or address", type: "text" },
  { label: "Travel Date", placeholder: "", type: "date" },
  { label: "Destination", placeholder: "Where do you want to go?", type: "text" },
];

const BookingForm = () => (
  <section className="bg-surface-low py-24 px-6">
    <div className="max-w-3xl mx-auto text-center mb-12">
      <h2 className="font-serif text-3xl md:text-4xl text-on-surface mb-3">
        Ready to experience travel like never before?
      </h2>
      <p className="text-on-surface-variant font-light">Your journey starts with a conversation.</p>
    </div>
    <div className="max-w-2xl mx-auto bg-surface-container rounded-2xl p-8 md:p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {fields.map((f) => (
          <div key={f.label} className={f.label === "Destination" ? "md:col-span-2" : ""}>
            <label className="text-xs uppercase tracking-[0.1em] text-on-surface-variant font-semibold mb-2 block">
              {f.label}
            </label>
            <input
              type={f.type}
              placeholder={f.placeholder}
              className="w-full bg-transparent border-b border-outline-variant/40 focus:border-secondary py-2 text-on-surface text-sm outline-none transition-colors placeholder:text-muted-foreground [color-scheme:dark]"
            />
          </div>
        ))}
      </div>
      <a
        href="https://wa.me/9469456789?text=Hi%20Roameo%20Rides!%20I'm%20looking%20for%20a%20premium%20caravan%20experience.%20Can%20you%20help%20me%20plan%20my%20journey?"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-accent text-white font-bold py-4 rounded-full hover:scale-[1.02] transition-transform uppercase text-sm tracking-widest flex items-center justify-center gap-2"
      >
        <MessageCircle size={18} />
        Send via WhatsApp
      </a>
    </div>
  </section>
);

export default BookingForm;
