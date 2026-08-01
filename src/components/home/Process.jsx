import Reveal from "@/components/shared/Reveal";
import SectionLabel from "@/components/shared/SectionLabel";
import { PROCESS_STEPS } from "@/lib/siteData";

export default function Process() {
  return (
    <section className="bg-lemon-gray py-20 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="max-w-2xl mb-12 lg:mb-16">
          <Reveal>
            <SectionLabel>Proces</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-white text-3xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight text-balance">
              Logistika bez nepotrebnih komplikacija
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-sm overflow-hidden">
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 90}>
              <div className="relative h-full bg-lemon-gray p-8 lg:p-9">
                <div className="flex items-baseline gap-3">
                  <span className="text-lemon-yellow font-heading font-black text-4xl lg:text-5xl tracking-tight">
                    {step.number}
                  </span>
                  <span className="h-px flex-1 bg-lemon-yellow/30" />
                </div>
                <h3 className="mt-6 text-white text-lg font-heading font-bold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-lemon-gray-light text-sm leading-relaxed">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}