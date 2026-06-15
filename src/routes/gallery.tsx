import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/Layout";
import g9 from "@/assets/gnt-img-09.png";
import g10 from "@/assets/gnt-img-10.png";
import g11 from "@/assets/gnt-img-11.png";
import g12 from "@/assets/gnt-img-12.png";
import g13 from "@/assets/gnt-img-13.png";
import g14 from "@/assets/gnt-img-14.png";
import g15 from "@/assets/gnt-img-15.png";
import g16 from "@/assets/gnt-img-16.png";
import g17 from "@/assets/gnt-img-17.png";
import g18 from "@/assets/gnt-img-18.png";
import g19 from "@/assets/gnt-img-19.png";
import g20 from "@/assets/gnt-img-20.png";
import g21 from "@/assets/gnt-img-21.png";
import g22 from "@/assets/gnt-img-22.png";
import g23 from "@/assets/gnt-img-23.png";
import g24 from "@/assets/gnt-img-24.png";
import g25 from "@/assets/gnt-img-25.png";
import g26 from "@/assets/gnt-img-26.png";
import g27 from "@/assets/gnt-img-27.png";
import g28 from "@/assets/gnt-img-28.png";
import g29 from "@/assets/gnt-img-29.png";

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
  { src: g9, label: "Royal Wedding Setup · Guntur" },
  { src: g10, label: "Traditional Mandap Design" },
  { src: g11, label: "Premium Stage Decoration" },
  { src: g12, label: "Luxury Event Styling" },
  { src: g13, label: "Floral Wedding Decor" },
  { src: g14, label: "Grand Celebration Setup" },
  { src: g15, label: "Royal Wedding Setup · Guntur" },
  { src: g16, label: "Traditional Mandap Design" },
  { src: g17, label: "Premium Stage Decoration" },
  { src: g18, label: "Luxury Event Styling" },
  { src: g19, label: "Floral Wedding Decor" },
  { src: g20, label: "Grand Celebration Setup" },
  { src: g21, label: "Royal Wedding Setup · Guntur" },
  { src: g22, label: "Traditional Mandap Design" },
  { src: g23, label: "Premium Stage Decoration" },
  { src: g24, label: "Luxury Event Styling" },
  { src: g25, label: "Floral Wedding Decor" },
  { src: g26, label: "Grand Celebration Setup" },
  { src: g27, label: "Royal Wedding Setup · Guntur" },
  { src: g28, label: "Traditional Mandap Design" },
  { src: g29, label: "Premium Stage Decoration" },
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
