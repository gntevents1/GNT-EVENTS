import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/Layout";
import g1 from "@/assets/gnt-wedding-stage.png";
import g2 from "@/assets/gnt-traditional-mandap.png";
import g3 from "@/assets/gnt-kolam-stage.png";
import g4 from "@/assets/gnt-white-elegance.png";
import g5 from "@/assets/gnt-sangeet-decor.png";
import g6 from "@/assets/gnt-marigold-setup.png";
import g7 from "@/assets/gnt-haldi-ceremony.png";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — GNT Events & Decorators" },
      { name: "description", content: "A curated album of weddings, receptions and celebrations designed by GNT Events & Decorators." },
    ],
  }),
  component: Gallery,
});

const images = [
  { src: g1, label: "Premium Stage Design · Guntur" },
  { src: g2, label: "Traditional Mandap · Andhra Pradesh" },
  { src: g3, label: "Royal Wedding Setup · Guntur" },
  { src: g4, label: "Luxury Event Decoration · Guntur" },
  { src: g5, label: "Sangeet Night · Andhra Pradesh" },
  { src: g6, label: "Marigold Backdrop · Guntur" },
  { src: g7, label: "Haldi Ceremony · Guntur" },
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
