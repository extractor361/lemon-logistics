import { Image } from "@/components/ui/image";
import Reveal from "@/components/shared/Reveal";
import SectionLabel from "@/components/shared/SectionLabel";
import { FLEET_IMAGE } from "@/lib/siteData";
import { useLanguage } from "@/lib/LanguageContext";

export default function BrandStatement() {
  const { t } = useLanguage();
  return (
    <section className="bg-lemon-gray py-20 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1">
            <Reveal>
              <SectionLabel>{t.brandStatement.label}</SectionLabel>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 text-white text-3xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight text-balance">
                {t.brandStatement.title1}<br />
                <span className="text-lemon-yellow">{t.brandStatement.title2}</span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <div className="mt-8 space-y-5 text-lemon-gray-light text-base lg:text-lg leading-relaxed">
                <p>{t.brandStatement.p1}</p>
                <p>{t.brandStatement.p2}</p>
                <p>{t.brandStatement.p3}</p>
                <p>{t.brandStatement.p4}</p>
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
                    alt={t.brandStatement.alt}
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