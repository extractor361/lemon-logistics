import { Link } from "react-router-dom";
import {
  Globe, Truck, Warehouse, PackageCheck, Boxes, Headset, ArrowUpRight,
} from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import SectionLabel from "@/components/shared/SectionLabel";
import { SERVICES } from "@/lib/siteData";

const iconMap = {
  Globe, Truck, Warehouse, PackageCheck, Boxes, Headset,
};

// Show 5 services on homepage (the requested five)
const HOME_SERVICES = SERVICES.filter((s) =>
  ["medjunarodni-transport", "unutarasnji-transport", "skladistenje", "distribucija", "podrska"].includes(s.id)
);

export default function ServicesPreview() {
  return (
    <section className="bg-lemon-dark py-20 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <Reveal>
              <SectionLabel>Usluge</SectionLabel>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 text-white text-3xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight text-balance">
                Logistička podrška prilagođena vašem poslovanju
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <Link
              to="/usluge"
              className="group inline-flex items-center gap-2 text-lemon-yellow font-heading font-bold text-sm hover:text-white transition-colors"
            >
              Sve usluge
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-sm overflow-hidden">
          {HOME_SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] || Truck;
            return (
              <Reveal key={service.id} delay={i * 80}>
                <Link
                  to={`/usluge#${service.id}`}
                  className="group flex flex-col h-full bg-lemon-dark p-8 lg:p-10 hover:bg-lemon-gray transition-colors duration-300"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center border border-lemon-yellow/40 text-lemon-yellow rounded-sm group-hover:bg-lemon-yellow group-hover:text-lemon-dark group-hover:border-lemon-yellow transition-colors duration-300">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-6 text-white text-xl font-heading font-bold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-lemon-gray-light text-sm leading-relaxed flex-1">
                    {service.short}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-lemon-yellow font-heading font-bold text-xs uppercase tracking-wider">
                    Saznajte više
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </Reveal>
            );
          })}

          {/* CTA card to fill the 6th slot */}
          <Reveal delay={400}>
            <Link
              to="/kontakt"
              className="group flex flex-col h-full justify-center bg-lemon-yellow p-8 lg:p-10 hover:bg-white transition-colors duration-300"
            >
              <h3 className="text-lemon-dark text-xl font-heading font-black tracking-tight">
                Imate specifičan zahtjev?
              </h3>
              <p className="mt-3 text-lemon-dark/80 text-sm leading-relaxed">
                Opisite šta vam je potrebno i vratićemo se sa konkretnim prijedlogom.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-lemon-dark font-heading font-bold text-xs uppercase tracking-wider">
                Pošaljite upit o prevozu
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}