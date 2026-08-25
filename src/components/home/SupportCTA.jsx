import { Phone, Mail, Clock, Globe, ArrowRight } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import SectionLabel from "@/components/shared/SectionLabel";
import { CONTACT } from "@/lib/siteData";

export default function SupportCTA() {
  return (
    <section className="bg-lemon-dark py-20 lg:py-32 border-t border-white/5">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-sm bg-lemon-gray border border-white/5">
          {/* Decorative yellow line */}
          <div className="absolute top-0 left-0 h-1 w-24 bg-lemon-yellow" />
          <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-lemon-yellow/40 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left — text + CTA */}
            <div className="p-8 sm:p-12 lg:p-16">
              <Reveal>
                <SectionLabel>Podrška</SectionLabel>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-5 text-white text-3xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight">
                  Lemon Customer Support
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 text-lemon-gray-light text-base lg:text-lg leading-relaxed max-w-lg">
                  Znamo koliko je pravovremena informacija važna u logistici. Zato je naš Lemon Customer Support dostupan svakog dana od 08:00 do 20:00 putem broja 020/66-22-66, kako bi partneri u svakom trenutku imali pouzdanu podršku i tačne informacije.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <a
                  href={CONTACT.phoneHref}
                  className="group mt-8 inline-flex items-center gap-2 bg-lemon-yellow text-lemon-dark font-heading font-bold text-sm px-7 py-4 rounded-sm hover:bg-white transition-colors duration-200"
                >
                  Pozovite nas
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </Reveal>
            </div>

            {/* Right — contact info */}
            <div className="border-t lg:border-t-0 lg:border-l border-white/5 p-8 sm:p-12 lg:p-16 bg-lemon-dark/40 flex flex-col justify-center">
              <Reveal delay={120}>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center border border-lemon-yellow/30 text-lemon-yellow rounded-sm shrink-0">
                      <Phone className="h-4 w-4" strokeWidth={1.5} />
                    </span>
                    <div>
                      <div className="text-lemon-gray-light text-xs uppercase tracking-wider font-heading font-bold">Telefon</div>
                      <a href={CONTACT.phoneHref} className="text-white text-lg font-heading font-bold hover:text-lemon-yellow transition-colors">
                        {CONTACT.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center border border-lemon-yellow/30 text-lemon-yellow rounded-sm shrink-0">
                      <Clock className="h-4 w-4" strokeWidth={1.5} />
                    </span>
                    <div>
                      <div className="text-lemon-gray-light text-xs uppercase tracking-wider font-heading font-bold">Radno vrijeme</div>
                      <div className="text-white text-lg font-heading font-bold">{CONTACT.workingHours}</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center border border-lemon-yellow/30 text-lemon-yellow rounded-sm shrink-0">
                      <Mail className="h-4 w-4" strokeWidth={1.5} />
                    </span>
                    <div>
                      <div className="text-lemon-gray-light text-xs uppercase tracking-wider font-heading font-bold">Email</div>
                      <a href={`mailto:${CONTACT.email}`} className="text-white text-lg font-heading font-bold hover:text-lemon-yellow transition-colors break-all">
                        {CONTACT.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center border border-lemon-yellow/30 text-lemon-yellow rounded-sm shrink-0">
                      <Globe className="h-4 w-4" strokeWidth={1.5} />
                    </span>
                    <div>
                      <div className="text-lemon-gray-light text-xs uppercase tracking-wider font-heading font-bold">Website</div>
                      <a href={`https://${CONTACT.website}`} className="text-white text-lg font-heading font-bold hover:text-lemon-yellow transition-colors">
                        {CONTACT.website}
                      </a>
                    </div>
                  </li>
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}