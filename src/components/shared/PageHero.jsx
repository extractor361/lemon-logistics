import { Image } from "@/components/ui/image";
import Reveal from "@/components/shared/Reveal";
import SectionLabel from "@/components/shared/SectionLabel";

export default function PageHero({ label, title, subtitle, image }) {
  return (
    <section className="relative overflow-hidden bg-lemon-gray border-b border-white/5">
      {image && (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt=""
            className="block h-full w-full opacity-30"
            fittingType="fill"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-lemon-dark via-lemon-dark/85 to-lemon-dark/40" />
        </div>
      )}
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 py-20 lg:py-32">
        <div className="max-w-3xl">
          <Reveal>
            <SectionLabel>{label}</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 text-white text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-balance">
              {title}
            </h1>
          </Reveal>
          {subtitle && (
            <Reveal delay={160}>
              <p className="mt-6 text-lemon-gray-light text-lg lg:text-xl leading-relaxed max-w-2xl">
                {subtitle}
              </p>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}