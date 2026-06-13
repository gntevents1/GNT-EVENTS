import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <section className="pt-40 pb-20 px-6 lg:px-10 text-center">
      <span className="eyebrow">{eyebrow}</span>
      <h1 className="font-serif text-5xl md:text-7xl mt-4 leading-[1.05]">{title}</h1>
      <span className="gold-divider mx-auto mt-8" />
      {subtitle && <p className="max-w-2xl mx-auto mt-8 text-muted-foreground leading-relaxed">{subtitle}</p>}
    </section>
  );
}
