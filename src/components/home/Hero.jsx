import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Image } from "@/components/ui/image";
import { HERO_IMAGE, CONTACT } from "@/lib/siteData";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt="Logistički kamion na utovarnom mestu u sumrak"
          className="block h-full w-full"
          fittingType="fill"
          focalPointX={0.35}
          focalPointY={0.5}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-lemon-dark via-lemon-dark/80 to-lemon-dark/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-lemon-dark via-transparent to-lemon-dark/50" />
      </div>

      {/* Vertical yellow line */}
      <div className="absolute left-5 sm:left-8 lg:left-12 top-20 lg:top-28 bottom-0 w-px bg-gradient-to-b from-lemon-yellow via-lemon-yellow/30 to-transparent" />

      <div className="relative mx-auto max-w-[1400px] w-full px-5 sm:px-8 lg:px-12 pb-16 lg:pb-28 pt-32">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-lemon-yellow" />
            <span className="text-lemon-yellow font-heading font-bold text-xs uppercase tracking-[0.2em]">
              Lemon Logistics — Crna Gora
            </span>
          </div>

          <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-heading font-black leading-[1.02] tracking-tight text-balance">
            Pouzdana logistika<br className="hidden sm:block" /> za vaš posao
          </h1>

          <p className="mt-6 text-lg lg:text-xl text-lemon-gray-light max-w-xl leading-relaxed">
            Svaki posao organizujemo ozbiljno, efikasno i bez nepotrebnih komplikacija.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <Link
              to="/kontakt"
              className="group inline-flex items-center justify-center gap-2 bg-lemon-yellow text-lemon-dark font-heading font-bold text-sm px-7 py-4 rounded-sm hover:bg-white transition-colors duration-200"
            >
              Kontaktirajte nas
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/usluge"
              className="group inline-flex items-center justify-center gap-2 border border-white/20 text-white font-heading font-bold text-sm px-7 py-4 rounded-sm hover:border-lemon-yellow hover:text-lemon-yellow transition-colors duration-200"
            >
              Pogledajte usluge
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <span className="h-px w-8 bg-lemon-yellow/40" />
            <a href={CONTACT.phoneHref} className="inline-flex items-center gap-2 text-white font-heading font-bold text-lg hover:text-lemon-yellow transition-colors">
              <Phone className="h-5 w-5 text-lemon-yellow" />
              {CONTACT.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom rule */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-white/10" />
    </section>
  );
}