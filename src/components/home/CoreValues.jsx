import { ShieldCheck, MessageSquare, CheckCircle2, Handshake } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import SectionLabel from "@/components/shared/SectionLabel";
import { VALUES } from "@/lib/siteData";

const iconMap = {
  ShieldCheck, MessageSquare, CheckCircle2, Handshake,
};

export default function CoreValues() {
  return (
    <section className="bg-lemon-dark py-20 lg:py-32 border-t border-white/5">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="max-w-2xl mb-12 lg:mb-16">
          <Reveal>
            <SectionLabel>Vrijednosti</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-white text-3xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight text-balance">
              Vrijednosti na kojima gradimo svaki posao
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-sm overflow-hidden">
          {VALUES.map((value, i) => {
            const Icon = iconMap[value.icon] || ShieldCheck;
            return (
              <Reveal key={value.title} delay={i * 80}>
                <div className="group h-full bg-lemon-dark p-8 lg:p-9 hover:bg-lemon-gray transition-colors duration-300">
                  <span className="inline-flex h-11 w-11 items-center justify-center text-lemon-yellow">
                    <Icon className="h-7 w-7" strokeWidth={1.25} />
                  </span>
                  <div className="mt-6 h-px w-10 bg-lemon-yellow/40 group-hover:bg-lemon-yellow transition-colors duration-300" />
                  <h3 className="mt-5 text-white text-lg font-heading font-bold tracking-tight">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-lemon-gray-light text-sm leading-relaxed">
                    {value.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}