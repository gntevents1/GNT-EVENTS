import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/Layout";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import sWedding from "@/assets/service-wedding.jpg";
import sCorporate from "@/assets/service-corporate.jpg";
import sPrivate from "@/assets/service-private.jpg";
import hero from "@/assets/hero-wedding.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — GNT Events and Decorators" },
      { name: "description", content: "A curated album of weddings, receptions and celebrations designed by GNT Events and Decorators." },
    ],
  }),
  component: Gallery,
});

const images = [
  { src: g1, label: "Royal Mandap · Guntur" },
  { src: g2, label: "Haldi · Vijayawada" },
  { src: sWedding, label: "Reception Stage · Hyderabad" },
  { src: g3, label: "Sangeet Night · Guntur" },
  { src: hero, label: "Mandap Florals · Tenali" },
  { src: sCorporate, label: "Corporate Gala · Vizag" },
  { src: g4, label: "Outdoor Reception · Amaravati" },
  { src: sPrivate, label: "Birthday Soirée · Guntur" },
];

function Gallery() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="The Album"
        title="Celebrations We've Crafted"
        subtitle="A small selection from our recent weddings, receptions and private events."
      />
      <section className="px-6 lg:px-10 max-w-7xl mx-auto pb-28">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {images.map((img, i) => (
            <figure key={i} className="mb-6 break-inside-avoid group">
              <div className="rounded-3xl overflow-hidden">
                <img src={img.src} alt={img.label} loading="lazy" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-[1.2s]" />
              </div>
              <figcaption className="mt-4 text-xs tracking-[0.22em] uppercase text-muted-foreground text-center">
                {img.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
