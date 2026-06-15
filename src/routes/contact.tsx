import { createFileRoute } from "@tanstack/react-router";
import { type FormEvent } from "react";
import { SiteLayout, PageHeader } from "@/components/site/Layout";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const studioMapsUrl = "https://www.google.com/maps/dir/17.265255,80.172736/GNT+Events+%26+Decorators,+SBI+Colony+Vikas+Nagar+road,+beside+Amaravatihi+Rythubazar+jkc+Road,+Andhra+Pradesh+522006/@16.7919945,79.9854626,10z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3a4a75871cf98573:0x7f4903d05f51b5b5!2m2!1d80.4180357!2d16.3228006?entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D";
const whatsappNumber = "919885190750";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — GNT Events & Decorators" },
      { name: "description", content: "Plan your wedding or event with GNT Events & Decorators in Guntur. Reach our team by phone, email or the enquiry form." },

    ],
  }),
  component: Contact,
});

function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const type = String(formData.get("type") ?? "").trim();
    const date = String(formData.get("date") ?? "").trim();
    const city = String(formData.get("city") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const lines = [
      `Hello GNT Events, I am ${name}.`,
      `Phone: ${phone}`,
      email ? `Email: ${email}` : null,
      type ? `Event Type: ${type}` : null,
      date ? `Tentative Date: ${date}` : null,
      city ? `City / Venue: ${city}` : null,
      message ? `Details: ${message}` : null,
    ].filter(Boolean);

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Get in Touch"
        title="Let's Plan Something Beautiful"
        subtitle="Share a few details about your celebration. Our planners will respond within 24 hours."
      />

      <section className="px-6 lg:px-10 max-w-7xl mx-auto pb-28 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 luxury-card p-10 md:p-14">
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            <Field label="Full Name" name="name" required />
            <Field label="Phone" name="phone" type="tel" required />
            <Field label="Email" name="email" type="email" required className="md:col-span-2" />
            <Field label="Event Type" name="type" placeholder="Wedding, Corporate, Birthday…" className="md:col-span-2" />
            <Field label="Tentative Date" name="date" type="date" />
            <Field label="City / Venue" name="city" placeholder="Guntur, Vijayawada…" />
            <div className="md:col-span-2">
              <label className="eyebrow block mb-3">Tell us about your event</label>
              <textarea
                name="message"
                rows={5}
                className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-foreground placeholder:text-muted-foreground/60 transition-colors resize-none"
                placeholder="Guest count, vision, references…"
              />
            </div>
            <div className="md:col-span-2 pt-4">
              <button type="submit" className="btn-luxury">Send Enquiry</button>
            </div>
          </form>
        </div>

        <aside className="space-y-8">
          <ContactRow
            icon={MapPin}
            title="Studio"
            href={studioMapsUrl}
            lines={[
              "SBI Colony Vikas Nagar road",
              "beside Amaravatihi Rythubazar jkc Road, Andhra Pradesh 522006",
            ]}
          />
          <ContactRow icon={Phone} title="Call" href="tel:+919885190750" lines={["+91 98851 90750"]} />
          <ContactRow icon={Mail} title="Email" href="mailto:gntevents@gmail.com" lines={["gntevents@gmail.com"]} />
          <ContactRow icon={Clock} title="Studio Hours" lines={["Open 24 hours", "Available every day"]} />
        </aside>
      </section>

      {/* GOOGLE MAPS */}
      <section className="px-6 lg:px-10 max-w-7xl mx-auto pb-28">
        <div className="text-center mb-10">
          <span className="eyebrow">Visit Our Studio</span>
          <h2 className="font-serif text-3xl md:text-4xl mt-4">GNT Events & Decorators, Guntur</h2>
          <span className="gold-divider mx-auto mt-6" />
        </div>
        <a
          href="https://www.google.com/maps/place/GNT+Events+%26+Decorators/@16.3228006,80.4180357,17z/"
          target="_blank"
          rel="noreferrer"
          className="block"
        >
          <div
            className="rounded-[20px] overflow-hidden border border-gold/20 shadow-[0_4px_30px_-12px_rgba(11,11,11,0.08)] hover:shadow-[0_20px_50px_-20px_rgba(11,11,11,0.18)] transition-shadow duration-500"
          >
            <iframe
              title="GNT Events & Decorators Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3830.123!2d80.4180357!3d16.3228006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a75871cf98573%3A0x7f4903d05f51b5b5!2sGNT%20Events%20%26%20Decorators!5e0!3m2!1sen!2sin!4v1718435200000"
              width="100%"
              className="w-full h-[280px] sm:h-[350px] lg:h-[450px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </a>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", required, placeholder, className = "" }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string; className?: string }) {
  return (
    <div className={className}>
      <label className="eyebrow block mb-3">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-foreground placeholder:text-muted-foreground/60 transition-colors"
      />
    </div>
  );
}

function ContactRow({ icon: Icon, title, lines, href }: { icon: typeof MapPin; title: string; lines: string[]; href?: string }) {
  return (
    <div className="flex gap-5">
      <span className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center shrink-0">
        <Icon size={18} />
      </span>
      <div>
        <div className="eyebrow">{title}</div>
        <div className="mt-2 text-foreground leading-relaxed">
          {href ? (
            <a href={href} target="_blank" rel="noreferrer" className="hover:text-gold transition">
              {lines.map((l) => <div key={l}>{l}</div>)}
            </a>
          ) : (
            lines.map((l) => <div key={l}>{l}</div>)
          )}
        </div>
      </div>
    </div>
  );
}
