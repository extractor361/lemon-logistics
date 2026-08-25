import { Globe, Warehouse, PackageCheck, Truck, Boxes, Headset } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import SectionLabel from "@/components/shared/SectionLabel";
import { useLanguage } from "@/lib/LanguageContext";

const icons = [Globe, Warehouse, PackageCheck, Truck, Boxes, Headset];

export default function WhatWeDo() {
  const { t } = useLanguage();
  const services = t.whatWeDoServices.map((title, i) => ({ title, icon: icons[i] }));

  return (
    <section className="bg-lemon-gray py-20 lg:py-32 border-t border-white/5">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="max-w-2xl mb-12 lg:mb-16">
          <Reveal><SectionLabel>{t.about.whatWeDoLabel}</SectionLabel></Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-white text-3xl lg:text-4xl font-heading font-black tracking-tight">
              {t.about.whatWeDoTitle}
            </h2>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-sm overflow-hidden">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="h-full bg-lemon-gray p-8 hover:bg-lemon-dark transition-colors duration-300">
                <s.icon className="h-7 w-7 text-lemon-yellow" strokeWidth={1.25} />
                <div className="mt-6 h-px w-10 bg-lemon-yellow/40" />
                <h3 className="mt-5 text-white text-lg font-heading font-bold tracking-tight">{s.title}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}