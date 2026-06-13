import { createFileRoute } from "@tanstack/react-router";
import { type FormEvent } from "react";
import { SiteLayout, PageHeader } from "@/components/site/Layout";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const studioMapsUrl = "https://www.google.com/maps/dir/17.265255,80.172736/G80+Events+%26+Decorators,+SBI+Colony+Vikas+Nagar+road,+beside+Amaravatihi+Rythubazar+jkc+Road,+Andhra+Pradesh+522006/@16.7919945,79.9854626,10z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3a4a75871cf98573:0x7f4903d05f51b5b5!2m2!1d80.4180357!2d16.3228006?entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D";
const whatsappNumber = "919885190750";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — GNT Events and Decorators" },
      { name: "description", content: "Plan your wedding or event with GNT Events and Decorators in Guntur. Reach our team by phone, email or the enquiry form." },
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
          <ContactRow icon={Mail} title="Email" lines={["hello@gntevents.in", "plan@gntevents.in"]} />
          <ContactRow icon={Clock} title="Studio Hours" lines={["Open 24 hours", "Available every day"]} />
        </aside>
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
