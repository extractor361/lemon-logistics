import { Image } from "@/components/ui/image";
import Reveal from "@/components/shared/Reveal";
import SectionLabel from "@/components/shared/SectionLabel";
import { FLEET_IMAGE } from "@/lib/siteData";

export default function BrandStatement() {
  return (
    <section className="bg-lemon-gray py-20 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1">
            <Reveal>
              <SectionLabel>O Lemon Logistics</SectionLabel>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 text-white text-3xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight text-balance">
                Ne organizujemo samo transport.<br />
                <span className="text-lemon-yellow">Gradimo povjerenje.</span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <div className="mt-8 space-y-5 text-lemon-gray-light text-base lg:text-lg leading-relaxed">
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

          {/* Image */}
          <div className="order-1 lg:order-2">
            <Reveal delay={120}>
              <div className="relative">
                <div className="absolute -top-3 -left-3 h-16 w-16 border-t-2 border-l-2 border-lemon-yellow" />
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                  <Image
                    src={FLEET_IMAGE}
                    alt="Lemon Logistics dostavno vozilo na gradskoj ulici"
                    className="block h-full w-full"
                    fittingType="fill"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 h-16 w-16 border-b-2 border-r-2 border-lemon-yellow" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}