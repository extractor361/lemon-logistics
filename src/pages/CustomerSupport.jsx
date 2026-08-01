import { Phone, Mail, Clock, Globe, MapPin, ArrowRight, Headset, MessageSquare, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "@/components/shared/Reveal";
import SectionLabel from "@/components/shared/SectionLabel";
import PageHero from "@/components/shared/PageHero";
import { GRILLE_IMAGE, CONTACT } from "@/lib/siteData";

const features = [
  { icon: Headset, title: "Dostupan tim", text: "Svakog dana od 08:00 do 20:00 za pitanja, izmjene i informacije o pošiljci." },
  { icon: MessageSquare, title: "Jasna komunikacija", text: "Partnere redovno informišemo o statusu isporuke — bez čekanja i nagađanja." },
  { icon: CheckCircle2, title: "Tačne informacije", text: "Vraćamo se sa konkretnim odgovorima, a ne sa obećanjima bez pokrića." },
];

export default function CustomerSupport() {
  return (
    <>
      <PageHero
        label="Podrška"
        title="Lemon Customer Support"
        subtitle="Pravovremena informacija je ključna u logistici. Zato je naš tim dostupan svakog dana, kako biste uvijek imali pouzdanu podršku."
        image={GRILLE_IMAGE}
      />

      {/* Intro + features */}
      <section className="bg-lemon-dark py-20 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-12 lg:mb-16">
            <Reveal><SectionLabel>Lemon Customer Support</SectionLabel></Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 text-white text-3xl lg:text-4xl font-heading font-black tracking-tight text-balance">
                Podrška koja prati svaku isporuku
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-lemon-gray-light text-base lg:text-lg leading-relaxed">
                Znamo koliko je pravovremena informacija važna u logistici. Zato je naš tim dostupan svakog dana od 08:00 do 20:00, kako bi partneri u svakom trenutku imali pouzdanu podršku i tačne informacije.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-sm overflow-hidden">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 80}>
                <div className="h-full bg-lemon-dark p-8 lg:p-10 hover:bg-lemon-gray transition-colors duration-300">
                  <span className="inline-flex h-12 w-12 items-center justify-center border border-lemon-yellow/40 text-lemon-yellow rounded-sm">
                    <f.icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-6 text-white text-lg font-heading font-bold tracking-tight">{f.title}</h3>
                  <p className="mt-3 text-lemon-gray-light text-sm leading-relaxed">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact panel */}
      <section className="bg-lemon-gray py-20 lg:py-32 border-t border-white/5">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="relative overflow-hidden rounded-sm bg-lemon-dark border border-white/5">
            <div className="absolute top-0 left-0 h-1 w-24 bg-lemon-yellow" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left — heading + CTA */}
              <div className="p-8 sm:p-12 lg:p-16">
                <Reveal><SectionLabel>Kontakt</SectionLabel></Reveal>
                <Reveal delay={80}>
                  <h2 className="mt-5 text-white text-3xl lg:text-4xl font-heading font-black tracking-tight">
                    Razgovarajmo direktno
                  </h2>
                </Reveal>
                <Reveal delay={160}>
                  <p className="mt-6 text-lemon-gray-light text-base lg:text-lg leading-relaxed max-w-md">
                    Najbrži način da dobijete informaciju jeste da nas pozovete. Tu smo da odgovorimo na svako pitanje vezano za vašu isporuku.
                  </p>
                </Reveal>
                <Reveal delay={240}>
                  <a
                    href={CONTACT.phoneHref}
                    className="group mt-8 inline-flex items-center gap-2 bg-lemon-yellow text-lemon-dark font-heading font-bold text-sm px-7 py-4 rounded-sm hover:bg-white transition-colors"
                  >
                    Pozovite nas
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Reveal>
              </div>

              {/* Right — contact details */}
              <div className="border-t lg:border-t-0 lg:border-l border-white/5 p-8 sm:p-12 lg:p-16 bg-lemon-dark/40 flex flex-col justify-center">
                <Reveal delay={120}>
                  <ul className="space-y-7">
                    <li className="flex items-start gap-4">
                      <span className="inline-flex h-10 w-10 items-center justify-center border border-lemon-yellow/30 text-lemon-yellow rounded-sm shrink-0">
                        <Phone className="h-4 w-4" strokeWidth={1.5} />
                      </span>
                      <div>
                        <div className="text-lemon-gray-light text-xs uppercase tracking-wider font-heading font-bold">Telefon</div>
                        <a href={CONTACT.phoneHref} className="text-white text-xl font-heading font-bold hover:text-lemon-yellow transition-colors">
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
                        <div className="text-white text-xl font-heading font-bold">{CONTACT.workingHours}</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="inline-flex h-10 w-10 items-center justify-center border border-lemon-yellow/30 text-lemon-yellow rounded-sm shrink-0">
                        <Mail className="h-4 w-4" strokeWidth={1.5} />
                      </span>
                      <div>
                        <div className="text-lemon-gray-light text-xs uppercase tracking-wider font-heading font-bold">Email</div>
                        <a href={`mailto:${CONTACT.email}`} className="text-white text-xl font-heading font-bold hover:text-lemon-yellow transition-colors break-all">
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
                        <a href={`https://${CONTACT.website}`} className="text-white text-xl font-heading font-bold hover:text-lemon-yellow transition-colors">
                          {CONTACT.website}
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="inline-flex h-10 w-10 items-center justify-center border border-lemon-yellow/30 text-lemon-yellow rounded-sm shrink-0">
                        <MapPin className="h-4 w-4" strokeWidth={1.5} />
                      </span>
                      <div>
                        <div className="text-lemon-gray-light text-xs uppercase tracking-wider font-heading font-bold">Lokacija</div>
                        <div className="text-white text-xl font-heading font-bold">{CONTACT.location}</div>
                      </div>
                    </li>
                  </ul>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}