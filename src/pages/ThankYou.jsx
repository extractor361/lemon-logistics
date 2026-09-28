import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import Seo from "@/components/Seo";
import { useLanguage } from "@/lib/LanguageContext";

export default function ThankYou() {
  const { t } = useLanguage();

  return (
    <>
      <Seo
        title={t.contact.successTitle}
        description={t.contact.successText}
        path="/hvala"
        noindex
      />
      <section className="bg-lemon-dark px-5 pt-40 pb-24 sm:px-8 lg:pt-48 lg:pb-32">
        <div className="mx-auto flex max-w-2xl flex-col items-center rounded-sm border border-white/5 bg-lemon-gray p-8 text-center sm:p-12">
          <span className="inline-flex h-16 w-16 items-center justify-center rounded-sm bg-lemon-yellow/10 text-lemon-yellow">
            <CheckCircle2 className="h-8 w-8" strokeWidth={1.5} aria-hidden="true" />
          </span>
          <h1 className="mt-6 font-heading text-3xl font-black tracking-tight text-white sm:text-4xl">
            {t.contact.successTitle}
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-lemon-gray-light">
            {t.contact.successText}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link to="/" className="inline-flex items-center justify-center rounded-sm bg-lemon-yellow px-7 py-3.5 font-heading text-sm font-bold text-lemon-dark transition-colors hover:bg-white">
              {t.nav.home}
            </Link>
            <Link to="/kontakt" className="inline-flex items-center justify-center rounded-sm border border-white/20 px-6 py-3.5 font-heading text-sm font-bold text-white transition-colors hover:border-lemon-yellow hover:text-lemon-yellow">
              {t.contact.newInquiry}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
