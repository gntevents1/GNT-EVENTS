import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/Layout";
import sWedding from "@/assets/gnt-img-03.png";
import sCorporate from "@/assets/gnt-img-04.png";
import sPrivate from "@/assets/gnt-img-05.png";
import g2 from "@/assets/gnt-img-06.png";
import g3 from "@/assets/gnt-img-07.png";
import g4 from "@/assets/gnt-img-08.png";
import sAluminium from "@/assets/gnt-aluminium-stall-03.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — GNT Events & Decorators" },
      { name: "description", content: "Weddings, corporate events, private celebrations, exhibition stalls, decor and full event production by GNT Events & Decorators in Guntur." },
    ],
  }),
  component: Services,
});

const services = [
  { img: sWedding, eyebrow: "Signature", title: "Weddings & Receptions", desc: "Creating timeless wedding experiences with elegant mandap designs, floral arrangements, traditional decor, and complete celebration styling." },
  { img: g2, eyebrow: "Cultural", title: "Traditional Ceremonies", desc: "Beautifully crafted setups for Haldi, engagements, poojas, and family celebrations with cultural detailing and premium execution." },
  { img: g3, eyebrow: "Bespoke", title: "Custom Event Decor", desc: "Personalized themes, stage concepts, lighting arrangements, and floral styling designed uniquely for every occasion." },
  { img: sAluminium, eyebrow: "Exhibition", title: "White Aluminium Exhibition Stalls", desc: "Modern aluminium stall solutions crafted for exhibitions, brand showcases, and commercial events with premium quality and professional presentation." },
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
              <img src={s.img} alt={s.title} loading="lazy" className="w-full h-[520px] object-cover object-center hover:scale-105 transition-transform duration-[1.2s]" />
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
