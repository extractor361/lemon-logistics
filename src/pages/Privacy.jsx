import Seo from "@/components/Seo";
import Reveal from "@/components/shared/Reveal";
import PageHero from "@/components/shared/PageHero";
import { useLanguage } from "@/lib/LanguageContext";

export default function Privacy() {
  const { t } = useLanguage();
  return (
    <>
      <Seo
        title="Politika privatnosti"
        description="Politika privatnosti Lemon Logistics — kako prikupljamo, obrađujemo i čuvamo vaše lične podatke u skladu sa zakonskim obavezama."
        path="/politika-privatnosti"
      />
      <PageHero
        label={t.privacy.heroLabel}
        title={t.privacy.heroTitle}
        subtitle={t.privacy.heroSubtitle}
      />
      <section className="bg-lemon-dark py-20 lg:py-32">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-12">
          <Reveal>
            <div className="space-y-10 text-lemon-gray-light text-base leading-relaxed">
              {t.privacy.sections.map((section) => (
                <div key={section.title}>
                  <h2 className="text-white text-2xl font-heading font-black tracking-tight">{section.title}</h2>
                  <p className="mt-4">{section.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}