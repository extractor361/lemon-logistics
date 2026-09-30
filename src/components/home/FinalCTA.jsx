import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import { useLanguage } from "@/lib/LanguageContext";

export default function FinalCTA() {
  const { t } = useLanguage();
  return (
    <section className="bg-lemon-gray py-20 lg:py-32 border-t border-white/5">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="relative overflow-hidden rounded-sm border border-white/5 bg-lemon-dark p-8 sm:p-12 lg:p-20 text-center">
            {/* Decorative lines */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1 w-20 bg-lemon-yellow" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-40 bg-lemon-yellow/20" />

            <div className="max-w-3xl mx-auto">
              <h2 className="text-white text-3xl sm:text-4xl lg:text-6xl font-heading font-black tracking-tight text-balance">
                {t.finalCTA.title}
              </h2>
              <p className="mt-6 text-lemon-gray-light text-base lg:text-xl leading-relaxed max-w-2xl mx-auto">
                {t.finalCTA.text}
              </p>
              <div className="mt-10 flex justify-center">
                <Link
                  to="/kontakt#kontakt-form"
                  className="group inline-flex items-center justify-center gap-2 bg-lemon-yellow text-lemon-dark font-heading font-bold text-sm px-8 py-4 rounded-sm hover:bg-white transition-colors duration-200"
                >
                  {t.finalCTA.cta}
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}