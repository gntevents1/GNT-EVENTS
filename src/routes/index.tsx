import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ArrowRight, Sparkles, Heart, Crown, Gem, Building2 } from "lucide-react";
import hero from "@/assets/gnt-wedding-stage.png";
import sWedding from "@/assets/gnt-traditional-mandap.png";
import sCorporate from "@/assets/gnt-img-11.png";
import sPrivate from "@/assets/gnt-img-12.png";
import sAluminium from "@/assets/gnt-aluminium-stall-02.jpg";
import g1 from "@/assets/gnt-peacock-stage.png";
import g2 from "@/assets/gnt-img-13.png";
import g3 from "@/assets/gnt-img-16.png";
import directorDhanraj from "@/assets/gnt-director-dhanraj.jpg";
import directorNagaraju from "@/assets/gnt-director-nagaraju.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GNT Events & Decorators — Luxury Wedding & Event Planners in Guntur" },
      { name: "description", content: "Traditional Indian weddings, mandap decorations and bespoke celebrations crafted in Guntur by GNT Events & Decorators." },

    ],
  }),
  component: Home,
});

const services = [
  { icon: Heart, title: "Weddings & Receptions", image: sWedding, desc: "Creating timeless wedding experiences with elegant mandap designs, floral arrangements, traditional decor, and complete celebration styling." },
  { icon: Crown, title: "Traditional Ceremonies", image: sCorporate, desc: "Beautifully crafted setups for Haldi, engagements, poojas, and family celebrations with cultural detailing and premium execution." },
  { icon: Gem, title: "Custom Event Decor", image: sPrivate, desc: "Personalized themes, stage concepts, lighting arrangements, and floral styling designed uniquely for every occasion." },
  { icon: Building2, title: "White Aluminium Exhibition Stalls", image: sAluminium, desc: "Premium white aluminium exhibition stalls designed for business events, expos, trade shows, and professional displays with clean finishing and elegant execution." },
];

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img src={hero} alt="GNT Events luxury wedding stage decoration" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
        <div className="relative z-10 text-center px-6 max-w-5xl animate-fade-in">
          <span className="eyebrow text-gold">Guntur</span>
          <h1 className="text-white font-serif text-5xl md:text-7xl lg:text-8xl mt-6 leading-[1.02]">
            Where Every Celebration<br />Becomes an Heirloom
          </h1>
          <span className="gold-divider mx-auto mt-10" />
          <p className="text-white/80 max-w-2xl mx-auto mt-8 text-base md:text-lg leading-relaxed">
            GNT Events & Decorators designs royal weddings and bespoke celebrations across South India —
            curating florals, light, music and moments into stories worth keeping.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-10">
            <Link to="/contact" className="btn-luxury">Plan Your Event</Link>
            <Link to="/gallery" className="btn-outline-luxury text-white border-white hover:bg-white hover:text-foreground">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-28 px-6 lg:px-10 max-w-5xl mx-auto text-center">
        <span className="eyebrow">House of GNT</span>
        <h2 className="font-serif text-4xl md:text-6xl mt-5 leading-tight">
          A quiet obsession with detail,<br />a loud love for celebration.
        </h2>
        <span className="gold-divider mx-auto mt-8" />
        <p className="text-muted-foreground mt-8 text-lg leading-relaxed">
          Born in Guntur and inspired by the grandeur of regional weddings, GNT Events & Decorators

          blends traditional aesthetics with premium event styling. From mandap to
          floral detailing, we hold every thread of your celebration with reverence.
        </p>
        <Link to="/about" className="inline-flex items-center gap-2 mt-10 text-sm tracking-[0.22em] uppercase border-b border-foreground pb-1 hover:text-gold hover:border-gold transition-colors">
          Our Story <ArrowRight size={14} />
        </Link>
      </section>

      {/* SERVICES */}
      <section className="py-28 px-6 lg:px-10 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="eyebrow">What We Craft</span>
            <h2 className="font-serif text-4xl md:text-6xl mt-4">Signature Services</h2>
            <span className="gold-divider mx-auto mt-8" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s) => (
              <article key={s.title} className="luxury-card overflow-hidden group">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={s.image} alt={s.title} loading="lazy" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-[1.2s]" />
                </div>
                <div className="p-8">
                  <s.icon size={22} className="text-gold mb-4" />
                  <h3 className="font-serif text-2xl mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <Link to="/services" className="inline-flex items-center gap-2 mt-6 text-xs tracking-[0.22em] uppercase hover:text-gold transition-colors">
                    Discover <ArrowRight size={12} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE STRIP */}
      <section className="py-28 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-3xl overflow-hidden">
            <img src={g1} alt="GNT Events haldi ceremony setup" loading="lazy" className="w-full h-[600px] object-cover" />
          </div>
          <div>
            <span className="eyebrow">Why GNT</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 leading-tight">
              Rooted in tradition.<br />Designed with elegance.
            </h2>
            <span className="gold-divider mt-8" />
            <div className="mt-10 space-y-8">
              {[
                { t: "Custom Decoration Concepts", d: "Every stage, backdrop, and floral arrangement is thoughtfully designed to match your celebration." },
                { t: "Complete Event Styling", d: "From mandap setup to lighting and decor finishing, every detail is handled with care." },
                { t: "Local Celebration Experts", d: "Serving memorable events across Guntur, Vijayawada and surrounding regions." },
              ].map((f) => (
                <div key={f.t} className="border-l border-gold pl-6">
                  <h3 className="font-serif text-2xl">{f.t}</h3>
                  <p className="text-muted-foreground mt-2 leading-relaxed">{f.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24 px-6 lg:px-10 bg-[#fff8f0]">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { n: "14+", l: "Years of Service" },
            { n: "800+", l: "Projects Completed" },
            { n: "20+", l: "Staff Members" },
            { n: "50+", l: "Luxury Venue Decorations" },
          ].map((s) => (
            <div key={s.l} className="rounded-[2rem] border border-orange-100 bg-white/80 px-8 py-14 text-center shadow-[0_20px_60px_rgba(255,140,80,0.08)]">
              <div className="font-serif text-5xl md:text-6xl text-orange-500">{s.n}</div>
              <div className="mt-4 text-lg text-neutral-600 leading-relaxed">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY TEASE */}
      <section className="py-28 px-6 lg:px-10 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
            <div>
              <span className="eyebrow">Recent Celebrations</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-4">A Glimpse Into the Album</h2>
            </div>
            <Link to="/gallery" className="btn-outline-luxury self-start md:self-end">View Full Gallery</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[g1, g2, g3].map((img, i) => (
              <div key={i} className="rounded-3xl overflow-hidden aspect-[4/5] group">
                <img src={img} alt="Gallery feature image" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.2s]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-28 px-6 lg:px-10 max-w-4xl mx-auto text-center">
        <Sparkles className="mx-auto text-gold" size={28} />
        <p className="font-serif text-3xl md:text-4xl mt-8 leading-snug italic">
          “They turned three days of our wedding into a film we will keep replaying for a lifetime.
          Every petal, every light, every smile — held with such care.”
        </p>
        <span className="gold-divider mx-auto mt-8" />
        <p className="mt-6 text-sm tracking-[0.22em] uppercase text-muted-foreground">
          Sahithi & Karthik · Guntur, 2025
        </p>
      </section>

      {/* DIRECTORS */}
      <section className="py-28 px-6 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="eyebrow">The Visionaries</span>
            <h2 className="font-serif text-4xl md:text-6xl mt-4">Directors of GNT Events & Decorators</h2>
            <span className="gold-divider mx-auto mt-8" />
            <p className="text-muted-foreground mt-6 text-lg leading-relaxed max-w-2xl mx-auto">
              Guiding every celebration with experience, creativity, and dedication.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 max-w-3xl mx-auto">
            {[
              { name: "Dhanraj Gottupalli", role: "Director, GNT Events & Decorators", img: directorDhanraj },
              { name: "Nagaraju Kajjam", role: "Director, GNT Events & Decorators", img: directorNagaraju },
            ].map((d) => (
              <article key={d.name} className="luxury-card overflow-hidden group text-center">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={d.img} alt={d.name} loading="lazy" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-[1.2s]" />
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl md:text-3xl">{d.name}</h3>
                  <p className="mt-2 text-xs tracking-[0.22em] uppercase text-gold font-medium">{d.role}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-14 text-base leading-relaxed max-w-3xl mx-auto">
            With years of expertise in wedding decorations, traditional ceremonies, exhibitions, and premium event styling, our directors personally ensure every celebration is crafted with perfection.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-10 pb-28">
        <div className="max-w-7xl mx-auto bg-foreground text-background rounded-3xl px-10 py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ background: "radial-gradient(circle at 20% 30%, var(--gold), transparent 50%), radial-gradient(circle at 80% 70%, var(--ember), transparent 50%)" }} />
          <div className="relative">
            <span className="eyebrow text-gold">Let's Begin</span>
            <h2 className="font-serif text-4xl md:text-6xl mt-4">Tell us about your celebration.</h2>
            <p className="text-background/70 max-w-xl mx-auto mt-6">
              Share your vision and we'll respond within 24 hours with a curated consultation.
            </p>
            <Link to="/contact" className="btn-luxury mt-10 bg-gold border-gold text-foreground hover:bg-background hover:text-foreground hover:border-background">
              Start the Conversation
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
