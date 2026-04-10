import { MessageCircle } from "lucide-react";

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
        {[
          { label: "Your Name", placeholder: "Enter your name" },
          { label: "Phone Number", placeholder: "+91 XXXXX XXXXX" },
          { label: "Travel Dates", placeholder: "DD/MM/YY" },
          { label: "Destination", placeholder: "Where do you want to go?" },
        ].map((f) => (
          <div key={f.label}>
            <label className="text-xs uppercase tracking-[0.1em] text-on-surface-variant font-semibold mb-2 block">
              {f.label}
            </label>
            <input
              type="text"
              placeholder={f.placeholder}
              className="w-full bg-transparent border-b border-outline-variant/40 focus:border-secondary py-2 text-on-surface text-sm outline-none transition-colors placeholder:text-muted-foreground"
            />
          </div>
        ))}
      </div>
      <a
        href="https://wa.me/919469456789"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full gradient-primary-btn text-primary-foreground font-bold py-4 rounded-full hover:scale-[1.02] transition-transform uppercase text-sm tracking-widest flex items-center justify-center gap-2"
      >
        <MessageCircle size={18} />
        Send via WhatsApp
      </a>
    </div>
  </section>
);

export default BookingForm;
