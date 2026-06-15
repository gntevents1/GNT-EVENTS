import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/Layout";
import g1 from "@/assets/gnt-traditional-mandap.png";
import g4 from "@/assets/gnt-white-elegance.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — GNT Events & Decorators" },
      { name: "description", content: "The story, philosophy and team behind GNT Events & Decorators, a luxury wedding planner in Guntur." },

    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Our Story"
        title="A House Built on Celebration"
        subtitle="Founded in Guntur, GNT Events & Decorators is a design-led wedding and event company crafting heirloom moments across India."
      />

      <section className="px-6 lg:px-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center pb-28">
        <div className="rounded-3xl overflow-hidden">
          <img src={g1} alt="GNT Events & Decorators celebration" loading="lazy" className="w-full h-[640px] object-cover" />

        </div>
        <div>
          <span className="eyebrow">The Beginning</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 leading-tight">From a small studio in Guntur to weddings across South India.</h2>
          <span className="gold-divider mt-8" />
          <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              GNT Events & Decorators began with a quiet belief — that an Indian celebration deserves
              the same reverence as a piece of couture. Every drape pinned by hand, every
              marigold strand counted, every cue rehearsed.
            </p>
            <p>
              Over the years, we have become trusted by families across Guntur,
              Vijayawada, Hyderabad and Bengaluru for one thing: a celebration that feels
              effortlessly grand and deeply personal.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-card py-28 px-6 lg:px-10">
        <div className="max-w-6xl mx-auto text-center">
          <span className="eyebrow">Our Philosophy</span>
          <h2 className="font-serif text-4xl md:text-6xl mt-4">Tradition, treated with couture care.</h2>
          <span className="gold-divider mx-auto mt-8" />
          <div className="grid md:grid-cols-3 gap-10 mt-16 text-left">
            {[
              { t: "Design First", d: "Every event opens with a mood board, a story arc and a colour story — drawn before a single chair is booked." },
              { t: "Rooted in Ritual", d: "We honour Telugu, North Indian and inter-cultural traditions with respectful, well-researched detail." },
              { t: "Calm in the Chaos", d: "Our crew runs the timeline so your family experiences only the celebration, never the logistics." },
            ].map((v) => (
              <div key={v.t} className="luxury-card p-10">
                <h3 className="font-serif text-2xl">{v.t}</h3>
                <span className="gold-divider mt-4" />
                <p className="mt-5 text-muted-foreground leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 px-6 lg:px-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <span className="eyebrow">By the Numbers</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 leading-tight">A decade of celebrations, counted in smiles.</h2>
          <span className="gold-divider mt-8" />
          <div className="grid grid-cols-2 gap-10 mt-12">
            {[
              { n: "450+", l: "Weddings Designed" },
              { n: "120+", l: "Corporate Events" },
              { n: "18", l: "Cities Served" },
              { n: "10 yrs", l: "Of Storytelling" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-serif text-5xl text-gold">{s.n}</div>
                <div className="text-xs tracking-[0.22em] uppercase text-muted-foreground mt-2">{s.l}</div>
              </div>
            ))}
          </div>
          <Link to="/contact" className="btn-luxury mt-12">Begin Your Story</Link>
        </div>
        <div className="rounded-3xl overflow-hidden order-1 lg:order-2">
          <img src={g4} alt="Outdoor reception" loading="lazy" className="w-full h-[640px] object-cover" />
        </div>
      </section>
    </SiteLayout>
  );
}
