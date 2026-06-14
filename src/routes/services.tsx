import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/Layout";
import sWedding from "@/assets/service-wedding.jpg";
import sCorporate from "@/assets/service-corporate.jpg";
import sPrivate from "@/assets/service-private.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — GNT Events & Decorators" },
      { name: "description", content: "Weddings, corporate events, private celebrations, decor and full event production by GNT Events & Decorators in Guntur." },
    ],
  }),
  component: Services,
});

const services = [
  { img: sWedding, eyebrow: "Signature", title: "Luxury Weddings", desc: "Mandap to vidaai — multi-day weddings designed end-to-end with bespoke decor, floristry, hospitality and choreography." },
  { img: g2, eyebrow: "Pre-Wedding", title: "Haldi, Mehendi & Sangeet", desc: "Vibrant rituals reimagined as photogenic, intimate gatherings — marigold canopies, brass urlis, music-led nights." },
  { img: g3, eyebrow: "The Big Night", title: "Receptions", desc: "Cinematic reception stages, ambient lighting, custom menus and floral compositions for the grand finale." },
  { img: sCorporate, eyebrow: "Business", title: "Corporate Events", desc: "Product launches, conferences, award nights and dealer meets with broadcast-grade production and brand design." },
  { img: sPrivate, eyebrow: "Intimate", title: "Private Celebrations", desc: "Milestone birthdays, anniversaries, baby showers and house warmings — designed with quiet luxury." },
  { img: g4, eyebrow: "Production", title: "Decor, Sound & Lighting", desc: "Stage design, drapery, florals, sound systems and intelligent lighting — fully managed in-house." },
];

function Services() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="What We Do"
        title="Services Crafted with Care"
        subtitle="From the first sketch to the final farewell, every service is delivered by our in-house design and production team."
      />

      <section className="px-6 lg:px-10 max-w-7xl mx-auto pb-28 space-y-20">
        {services.map((s, i) => (
          <article key={s.title} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}>
            <div className="rounded-3xl overflow-hidden">
              <img src={s.img} alt={s.title} loading="lazy" className="w-full h-[520px] object-cover hover:scale-105 transition-transform duration-[1.2s]" />
            </div>
            <div>
              <span className="eyebrow">{s.eyebrow}</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-4 leading-tight">{s.title}</h2>
              <span className="gold-divider mt-6" />
              <p className="text-muted-foreground mt-6 leading-relaxed text-lg">{s.desc}</p>
              <Link to="/contact" className="btn-outline-luxury mt-8">Enquire</Link>
            </div>
          </article>
        ))}
      </section>
    </SiteLayout>
  );
}
