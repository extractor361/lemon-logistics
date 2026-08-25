import { Image } from "@/components/ui/image";
import { ShieldCheck, MessageSquare, CheckCircle2, Handshake, ArrowRight, Target, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "@/components/shared/Reveal";
import SectionLabel from "@/components/shared/SectionLabel";
import PageHero from "@/components/shared/PageHero";
import WhatWeDo from "@/components/about/WhatWeDo";
import { WAREHOUSE_IMAGE, FLEET_IMAGE, CARGO_HANDLING_IMAGE } from "@/lib/siteData";

const values = [
  { icon: ShieldCheck, title: "Odgovornost", text: "Svaki dogovor shvatamo ozbiljno i preuzimamo odgovornost za njegovu realizaciju." },
  { icon: MessageSquare, title: "Komunikacija", text: "Vjerujemo da kvalitetna komunikacija sprječava većinu problema. Zato naše partnere redovno informišemo o statusu svake isporuke." },
  { icon: CheckCircle2, title: "Pouzdanost", text: "Poštujemo rokove, ispunjavamo obećanja i gradimo povjerenje kroz dosljedan rad." },
  { icon: Handshake, title: "Partnerstvo", text: "Ne gledamo svaki transport kao pojedinačan posao, već kao početak dugoročne saradnje." },
];

const workSteps = [
  { title: "Upit i analiza", text: "Slušamo vaše potrebe i analiziramo zahtjeve prije nego što predložimo rješenje." },
  { title: "Predlog i dogovor", text: "Definišemo uslugu, rok i dinamiku, uz jasne uslove saradnje." },
  { title: "Realizacija", text: "Organizujemo transport, skladištenje ili distribuciju uz praćenje u svakom koraku." },
  { title: "Izvještaj i povratna informacija", text: "Zatvaramo proces sa izvještajem i otvorenim kanalom za sledeći korak." },
];

export default function About() {
  return (
    <>
      <PageHero
        label="O nama"
        title="Kompanija kojoj se partneri vraćaju"
        subtitle="Lemon Logistics je logistička kompanija koja transport, skladištenje i distribuciju posmatra kao odgovornost — prema roku, robi i klijentu."
        image={FLEET_IMAGE}
      />

      {/* O nama — split */}
      <section className="bg-lemon-dark py-20 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <Reveal><SectionLabel>O nama</SectionLabel></Reveal>
              <Reveal delay={80}>
                <h2 className="mt-5 text-white text-3xl lg:text-4xl font-heading font-black tracking-tight">
                  Ne organizujemo samo transport.<br />
                  <span className="text-lemon-yellow">Gradimo povjerenje.</span>
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <div className="mt-6 space-y-4 text-lemon-gray-light text-base lg:text-lg leading-relaxed">
                  <p>
                    Lemon Logistics je logistička kompanija specijalizovana za međunarodni transport, unutrašnji transport, skladištenje i organizaciju logističkih usluga na teritoriji Crne Gore.
                  </p>
                  <p>
                    Nastali smo iz dugogodišnjeg iskustva u logistici, prodaji i razvoju poslovnih sistema. Nakon godina rada na izgradnji uspješnih procesa, odlučili smo da stvorimo sopstveni sistem – kompaniju koja će poslovati onako kako vjerujemo da logistika treba da funkcioniše: profesionalno, odgovorno i transparentno.
                  </p>
                  <p>
                    Za nas transport nije samo prevoz robe od tačke A do tačke B. To je odgovornost prema klijentu, poštovanje dogovorenih rokova i stalna komunikacija tokom cijelog procesa.
                  </p>
                  <p>
                    Naš cilj nije da budemo najveća transportna kompanija. Naš cilj je da budemo kompanija kojoj se partneri vraćaju zato što znaju da će svaki posao biti organizovan ozbiljno, efikasno i bez nepotrebnih komplikacija.
                  </p>
                </div>
              </Reveal>
            </div>
            <Reveal delay={120}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <Image src={WAREHOUSE_IMAGE} alt="Skladište Lemon Logistics" className="block h-full w-full" fittingType="fill" />
                <div className="absolute -top-3 -right-3 h-16 w-16 border-t-2 border-r-2 border-lemon-yellow" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Misija i vizija */}
      <section className="bg-lemon-gray py-20 lg:py-32 border-t border-white/5">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-sm overflow-hidden">
            <Reveal>
              <div className="h-full bg-lemon-gray p-8 sm:p-12 lg:p-14">
                <span className="inline-flex h-12 w-12 items-center justify-center border border-lemon-yellow/40 text-lemon-yellow rounded-sm">
                  <Target className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <h2 className="mt-6 text-white text-2xl lg:text-3xl font-heading font-black tracking-tight">Naša misija</h2>
                <div className="mt-5 space-y-4 text-lemon-gray-light text-base lg:text-lg leading-relaxed">
                  <p>
                    Da pojednostavimo logistiku našim partnerima kroz pouzdanu organizaciju transporta, kvalitetnu komunikaciju i odgovoran pristup svakom zadatku.
                  </p>
                  <p>
                    Vjerujemo da logistički partner treba da preuzme brigu o procesu, kako bi se naši klijenti mogli posvetiti svom osnovnom poslu.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="h-full bg-lemon-gray p-8 sm:p-12 lg:p-14">
                <span className="inline-flex h-12 w-12 items-center justify-center border border-lemon-yellow/40 text-lemon-yellow rounded-sm">
                  <Eye className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <h2 className="mt-6 text-white text-2xl lg:text-3xl font-heading font-black tracking-tight">Naša vizija</h2>
                <p className="mt-5 text-lemon-gray-light text-base lg:text-lg leading-relaxed">
                  Postati kompanija koja će biti prva asocijacija na pouzdan unutrašnji transport i logističku podršku u Crnoj Gori, prepoznata po vrhunskoj usluzi, profesionalnom timu i dugoročnim partnerstvima.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Vrijednosti */}
      <section className="bg-lemon-dark py-20 lg:py-32 border-t border-white/5">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl mb-12 lg:mb-16">
            <Reveal><SectionLabel>Naše vrijednosti</SectionLabel></Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 text-white text-3xl lg:text-4xl font-heading font-black tracking-tight">
                Četiri principa u svakom poslu
              </h2>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-sm overflow-hidden">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="h-full bg-lemon-dark p-8 hover:bg-lemon-gray transition-colors duration-300">
                  <v.icon className="h-7 w-7 text-lemon-yellow" strokeWidth={1.25} />
                  <div className="mt-6 h-px w-10 bg-lemon-yellow/40" />
                  <h3 className="mt-5 text-white text-lg font-heading font-bold tracking-tight">{v.title}</h3>
                  <p className="mt-3 text-lemon-gray-light text-sm leading-relaxed">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WhatWeDo />

      {/* Način rada */}
      <section className="bg-lemon-gray py-20 lg:py-32 border-t border-white/5">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal><SectionLabel>Način rada</SectionLabel></Reveal>
              <Reveal delay={80}>
                <h2 className="mt-5 text-white text-3xl lg:text-4xl font-heading font-black tracking-tight">
                  Kako pristupamo svakom poslu
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 text-lemon-gray-light text-base lg:text-lg leading-relaxed">
                  Ne obećavamo ono što ne možemo isporučiti. Svaki proces pratimo od upita do završetka, uz jasnu komunikaciju i odgovornost u svakom koraku.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <div className="mt-8 relative aspect-[4/3] overflow-hidden rounded-sm">
                  <Image src={CARGO_HANDLING_IMAGE} alt="Rukovanje robom u skladištu" className="block h-full w-full" fittingType="fill" />
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <div className="space-y-px bg-white/5 border border-white/5 rounded-sm overflow-hidden">
                {workSteps.map((step, i) => (
                  <Reveal key={step.title} delay={i * 80}>
                    <div className="group flex gap-6 bg-lemon-gray p-8 hover:bg-lemon-dark transition-colors duration-300">
                      <span className="text-lemon-yellow font-heading font-black text-2xl shrink-0 leading-none mt-1">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-white text-lg font-heading font-bold tracking-tight">{step.title}</h3>
                        <p className="mt-2 text-lemon-gray-light text-sm leading-relaxed">{step.text}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={340}>
                <Link
                  to="/kontakt"
                  className="group mt-8 inline-flex items-center gap-2 bg-lemon-yellow text-lemon-dark font-heading font-bold text-sm px-7 py-4 rounded-sm hover:bg-white transition-colors"
                >
                  Razgovarajmo o saradnji
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}