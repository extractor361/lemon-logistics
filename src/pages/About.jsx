import { Image } from "@/components/ui/image";
import { ShieldCheck, MessageSquare, CheckCircle2, Handshake, ArrowRight, Target, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "@/components/shared/Reveal";
import SectionLabel from "@/components/shared/SectionLabel";
import PageHero from "@/components/shared/PageHero";
import WhatWeDo from "@/components/about/WhatWeDo";
import { WAREHOUSE_IMAGE, FLEET_IMAGE, CARGO_HANDLING_IMAGE } from "@/lib/siteData";
import { useLanguage } from "@/lib/LanguageContext";

const iconMap = { ShieldCheck, MessageSquare, CheckCircle2, Handshake };

export default function About() {
  const { lang, t } = useLanguage();
  const values = t.aboutValues.map((v, i) => ({ ...v, icon: [ShieldCheck, MessageSquare, CheckCircle2, Handshake][i] }));
  const workSteps = t.aboutWorkSteps;

  return (
    <>
      <PageHero
        label={t.about.heroLabel}
        title={t.about.heroTitle}
        subtitle={t.about.heroSubtitle}
        image={FLEET_IMAGE}
      />

      {/* O nama — split */}
      <section className="bg-lemon-dark py-20 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <Reveal><SectionLabel>{t.about.label}</SectionLabel></Reveal>
              <Reveal delay={80}>
                <h2 className="mt-5 text-white text-3xl lg:text-4xl font-heading font-black tracking-tight">
                  {t.about.title1}<br />
                  <span className="text-lemon-yellow">{t.about.title2}</span>
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <div className="mt-6 space-y-4 text-lemon-gray-light text-base lg:text-lg leading-relaxed">
                  <p>{t.about.p1}</p>
                  <p>{t.about.p2}</p>
                  <p>{t.about.p3}</p>
                  <p>{t.about.p4}</p>
                </div>
              </Reveal>
            </div>
            <Reveal delay={120}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <Image src={WAREHOUSE_IMAGE} alt={t.about.warehouseAlt} className="block h-full w-full" fittingType="fill" />
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
                <h2 className="mt-6 text-white text-2xl lg:text-3xl font-heading font-black tracking-tight">{t.about.missionTitle}</h2>
                <div className="mt-5 space-y-4 text-lemon-gray-light text-base lg:text-lg leading-relaxed">
                  <p>{t.about.missionP1}</p>
                  <p>{t.about.missionP2}</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="h-full bg-lemon-gray p-8 sm:p-12 lg:p-14">
                <span className="inline-flex h-12 w-12 items-center justify-center border border-lemon-yellow/40 text-lemon-yellow rounded-sm">
                  <Eye className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <h2 className="mt-6 text-white text-2xl lg:text-3xl font-heading font-black tracking-tight">{t.about.visionTitle}</h2>
                <p className="mt-5 text-lemon-gray-light text-base lg:text-lg leading-relaxed">
                  {t.about.visionText}
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
            <Reveal><SectionLabel>{t.about.valuesLabel}</SectionLabel></Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 text-white text-3xl lg:text-4xl font-heading font-black tracking-tight">
                {t.about.valuesTitle}
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
              <Reveal><SectionLabel>{t.about.workLabel}</SectionLabel></Reveal>
              <Reveal delay={80}>
                <h2 className="mt-5 text-white text-3xl lg:text-4xl font-heading font-black tracking-tight">
                  {t.about.workTitle}
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 text-lemon-gray-light text-base lg:text-lg leading-relaxed">
                  {t.about.workText}
                </p>
              </Reveal>
              <Reveal delay={220}>
                <div className="mt-8 relative aspect-[4/3] overflow-hidden rounded-sm">
                  <Image src={CARGO_HANDLING_IMAGE} alt={t.about.cargoAlt} className="block h-full w-full" fittingType="fill" />
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
                  {t.about.workCta}
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