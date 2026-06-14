import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import logoWhite from "@/assets/gnt-logo-white.png";

const studioMapsUrl = "https://www.google.com/maps/dir/17.265255,80.172736/GNT+Events+%26+Decorators,+SBI+Colony+Vikas+Nagar+road,+beside+Amaravatihi+Rythubazar+jkc+Road,+Andhra+Pradesh+522006/@16.7919945,79.9854626,10z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3a4a75871cf98573:0x7f4903d05f51b5b5!2m2!1d80.4180357!2d16.3228006?entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D";


export function Footer() {
  return (
    <footer className="bg-foreground text-background mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 grid lg:grid-cols-4 gap-12">
        <div className="lg:col-span-2">
          <img
            src={logoWhite}
            alt="GNT Events & Decorators"
            className="h-16 w-auto object-contain mb-6"
          />
          <span className="gold-divider mb-6" />
          <p className="text-sm text-background/70 max-w-md leading-relaxed">
            A luxury wedding and event design house based in Guntur.
            We craft heirloom celebrations rooted in tradition and finished with modern elegance.
          </p>
          <div className="flex gap-3 mt-8">
            <a href="https://www.instagram.com/gntevents.decorators" aria-label="Instagram" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-background/30 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-foreground transition-all">

              <Instagram size={16} />
            </a>
            <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full border border-background/30 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-foreground transition-all">
              <Facebook size={16} />
            </a>
          </div>
        </div>

        <div>
          <div className="eyebrow text-gold mb-5">Explore</div>
          <ul className="space-y-3 text-sm text-background/80">
            <li><Link to="/about" className="hover:text-gold transition">About Us</Link></li>
            <li><Link to="/services" className="hover:text-gold transition">Services</Link></li>
            <li><Link to="/gallery" className="hover:text-gold transition">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="eyebrow text-gold mb-5">Reach Us</div>
          <ul className="space-y-4 text-sm text-background/80">
            <li className="flex gap-3">
              <MapPin size={16} className="mt-0.5 text-gold shrink-0" />
              <a href={studioMapsUrl} target="_blank" rel="noreferrer" className="hover:text-gold transition">
                SBI Colony Vikas Nagar road, beside Amaravatihi Rythubazar jkc Road, Andhra Pradesh 522006
              </a>
            </li>
            <li className="flex gap-3">
              <Phone size={16} className="mt-0.5 text-gold shrink-0" />
              <a href="tel:+919885190750" className="hover:text-gold transition">
                +91 98851 90750
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={16} className="mt-0.5 text-gold shrink-0" />
              <a href="mailto:gntevents@gmail.com" className="hover:text-gold transition">
                gntevents@gmail.com
              </a>

            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between text-xs text-background/50 tracking-wider gap-2">
          <p>© {new Date().getFullYear()} GNT Events & Decorators. All rights reserved.</p>
          <p>Crafted with care in Guntur.</p>
        </div>
      </div>
    </footer>
  );
}
