import Seo from "@/components/Seo";
import { Image } from "@/components/ui/image";
import { Check, ArrowRight, Globe, Truck, Warehouse, PackageCheck, Boxes, Headset } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "@/components/shared/Reveal";
import SectionLabel from "@/components/shared/SectionLabel";
import PageHero from "@/components/shared/PageHero";
import { SERVICES, HIGHWAY_IMAGE } from "@/lib/siteData";
import { useLanguage } from "@/lib/LanguageContext";

const iconMap = { Globe, Truck, Warehouse, PackageCheck, Boxes, Headset };

export default function Services() {
  const { lang, t } = useLanguage();
  return (
    <>
      <Seo
        title="Usluge — Logističke usluge prilagođene vašem poslovanju"
        description="Međunarodni transport, unutrašnji transport, skladištenje, distribucija i manipulacija robom u Crnoj Gori. Organizujemo svaku uslugu ozbiljno, transparentno i u skladu sa dogovorenim rokovima."
        image={HIGHWAY_IMAGE}
        path="/usluge"
      />
      <PageHero
        label={t.services.heroLabel}
        title={t.services.heroTitle}
        subtitle={t.services.heroSubtitle}
        image={HIGHWAY_IMAGE}
      />

      {SERVICES.map((service, index) => {
        const Icon = iconMap[service.icon] || Truck;
        const reversed = index % 2 === 1;
        return (
          <section
            key={service.id}
            id={service.id}
            className={`scroll-mt-24 py-20 lg:py-28 border-t border-white/5 ${index % 2 === 0 ? "bg-lemon-dark" : "bg-lemon-gray"}`}
          >
            <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center`}>
                {/* Image */}
                <Reveal className={reversed ? "lg:order-2" : ""}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                    <Image
                      src={service.image}
                      alt={lang === "en" ? service.titleEn : service.title}
                      className="block h-full w-full"
                      fittingType="fill"
                    />
                    <div className="absolute top-4 left-4 inline-flex h-11 w-11 items-center justify-center bg-lemon-yellow text-lemon-dark rounded-sm">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                  </div>
                </Reveal>

                {/* Content */}
                <div className={reversed ? "lg:order-1" : ""}>
                  <Reveal>
                    <SectionLabel>{t.services.serviceLabel} {String(index + 1).padStart(2, "0")}</SectionLabel>
                  </Reveal>
                  <Reveal delay={80}>
                    <h2 className="mt-5 text-white text-3xl lg:text-4xl font-heading font-black tracking-tight">
                      {lang === "en" ? service.titleEn : service.title}
                    </h2>
                  </Reveal>
                  <Reveal delay={160}>
                    <p className="mt-5 text-lemon-gray-light text-base lg:text-lg leading-relaxed">
                      {lang === "en" ? service.descriptionEn : service.description}
                    </p>
                  </Reveal>
                  <Reveal delay={220}>
                    <ul className="mt-8 space-y-3">
                      {(lang === "en" ? service.benefitsEn : service.benefits).map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3">
                          <span className="inline-flex h-5 w-5 items-center justify-center bg-lemon-yellow/10 text-lemon-yellow rounded-sm shrink-0 mt-0.5">
                            <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                          </span>
                          <span className="text-white text-sm lg:text-base">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                  <Reveal delay={300}>
                    <Link
                      to="/kontakt"
                      className="group mt-8 inline-flex items-center gap-2 bg-lemon-yellow text-lemon-dark font-heading font-bold text-sm px-6 py-3.5 rounded-sm hover:bg-white transition-colors"
                    >
                      {t.services.cta}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Final CTA */}
      <section className="bg-lemon-gray py-20 lg:py-28 border-t border-white/5">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 text-center">
          <Reveal>
            <h2 className="text-white text-3xl lg:text-5xl font-heading font-black tracking-tight text-balance">
              {t.services.finalTitle}
            </h2>
            <p className="mt-5 text-lemon-gray-light text-base lg:text-lg max-w-2xl mx-auto">
              {t.services.finalText}
            </p>
            <Link
              to="/kontakt"
              className="group mt-8 inline-flex items-center gap-2 bg-lemon-yellow text-lemon-dark font-heading font-bold text-sm px-7 py-4 rounded-sm hover:bg-white transition-colors"
            >
              {t.services.cta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}