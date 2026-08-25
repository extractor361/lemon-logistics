import { useState } from "react";
import { useForm } from "react-hook-form";
import { Phone, Mail, Clock, Globe, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import SectionLabel from "@/components/shared/SectionLabel";
import PageHero from "@/components/shared/PageHero";
import { KARGO_IMAGE, CONTACT, CONTACT_FORM_EMAIL } from "@/lib/siteData";
import { useLanguage } from "@/lib/LanguageContext";
import { base44 } from "@/api/base44Client";

export default function Contact() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "", company: "", phone: "", email: "", service: "", datum_utovara: "", origin: "", destination: "", carinjenje: false, message: "",
    },
  });

  const selectedService = watch("service");

  const [submitError, setSubmitError] = useState(false);

  const onSubmit = async (data) => {
    setSubmitting(true);
    setSubmitError(false);
    try {
      await base44.functions.invoke("sendContactInquiry", data);
      setSubmitted(true);
      reset();
    } catch (e) {
      console.error(e);
      setSubmitError(e?.message || String(e));
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = (field) =>
    `w-full bg-transparent border-0 border-b-2 text-white placeholder-lemon-gray-md text-base py-3 px-0 transition-colors duration-200 focus:outline-none ${
      errors[field] ? "border-red-500" : "border-lemon-gray-md focus:border-lemon-yellow"
    }`;

  const contactItems = [
    { icon: Phone, label: t.contact.phone, value: CONTACT.phone, href: CONTACT.phoneHref },
    { icon: Mail, label: t.contact.email, value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: Clock, label: t.contact.hours, value: CONTACT.workingHours },
    { icon: MapPin, label: t.contact.location, value: CONTACT.location },
    { icon: Globe, label: t.contact.website, value: CONTACT.website, href: `https://${CONTACT.website}` },
  ];

  return (
    <>
      <PageHero
        label={t.contact.heroLabel}
        title={t.contact.heroTitle}
        subtitle={t.contact.heroSubtitle}
        image={KARGO_IMAGE}
      />

      <section className="bg-lemon-dark py-20 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left — contact info */}
            <div className="lg:col-span-5">
              <Reveal><SectionLabel>{t.contact.infoLabel}</SectionLabel></Reveal>
              <Reveal delay={80}>
                <h2 className="mt-5 text-white text-3xl lg:text-4xl font-heading font-black tracking-tight">
                  {t.contact.infoTitle}
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 text-lemon-gray-light text-base leading-relaxed">
                  {t.contact.infoText}
                </p>
              </Reveal>
              <Reveal delay={220}>
                <ul className="mt-10 space-y-6">
                  {contactItems.map((item) => (
                    <li key={item.label} className="flex items-start gap-4">
                      <span className="inline-flex h-10 w-10 items-center justify-center border border-lemon-yellow/30 text-lemon-yellow rounded-sm shrink-0">
                        <item.icon className="h-4 w-4" strokeWidth={1.5} />
                      </span>
                      <div>
                        <div className="text-lemon-gray-light text-xs uppercase tracking-wider font-heading font-bold">{item.label}</div>
                        {item.href ? (
                          <a href={item.href} className="text-white text-lg font-heading font-bold hover:text-lemon-yellow transition-colors break-all">
                            {item.value}
                          </a>
                        ) : (
                          <div className="text-white text-lg font-heading font-bold">{item.value}</div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-7">
              <Reveal delay={120}>
                <div className="bg-lemon-gray border border-white/5 rounded-sm p-6 sm:p-10 lg:p-12">
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center text-center py-12">
                      <span className="inline-flex h-16 w-16 items-center justify-center bg-lemon-yellow/10 text-lemon-yellow rounded-sm">
                        <CheckCircle2 className="h-8 w-8" strokeWidth={1.5} />
                      </span>
                      <h3 className="mt-6 text-white text-2xl font-heading font-black tracking-tight">
                        {t.contact.successTitle}
                      </h3>
                      <p className="mt-3 text-lemon-gray-light text-base max-w-md">
                        {t.contact.successText}
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="mt-8 inline-flex items-center justify-center border border-white/20 text-white font-heading font-bold text-sm px-6 py-3.5 rounded-sm hover:border-lemon-yellow hover:text-lemon-yellow transition-colors"
                      >
                        {t.contact.newInquiry}
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                      <h3 className="text-white text-xl font-heading font-bold tracking-tight mb-8">
                        {t.contact.formTitle}
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Ime i prezime */}
                        <div className="sm:col-span-2">
                          <label htmlFor="name" className="block text-lemon-gray-light text-xs uppercase tracking-wider font-heading font-bold mb-1">
                            {t.contact.name}
                          </label>
                          <input
                            id="name"
                            type="text"
                            className={inputClass("name")}
                            placeholder={t.contact.namePlaceholder}
                            {...register("name", { required: t.contact.required })}
                          />
                          {errors.name && <FieldError msg={errors.name.message} />}
                        </div>

                        {/* Kompanija */}
                        <div>
                          <label htmlFor="company" className="block text-lemon-gray-light text-xs uppercase tracking-wider font-heading font-bold mb-1">
                            {t.contact.company}
                          </label>
                          <input
                            id="company"
                            type="text"
                            className={inputClass("company")}
                            placeholder={t.contact.companyPlaceholder}
                            {...register("company", { required: t.contact.required })}
                          />
                          {errors.company && <FieldError msg={errors.company.message} />}
                        </div>

                        {/* Telefon */}
                        <div>
                          <label htmlFor="phone" className="block text-lemon-gray-light text-xs uppercase tracking-wider font-heading font-bold mb-1">
                            {t.contact.phoneLabel}
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            className={inputClass("phone")}
                            placeholder={t.contact.phonePlaceholder}
                            {...register("phone", { required: t.contact.required })}
                          />
                          {errors.phone && <FieldError msg={errors.phone.message} />}
                        </div>

                        {/* Email */}
                        <div>
                          <label htmlFor="email" className="block text-lemon-gray-light text-xs uppercase tracking-wider font-heading font-bold mb-1">
                            {t.contact.emailLabel}
                          </label>
                          <input
                            id="email"
                            type="email"
                            className={inputClass("email")}
                            placeholder={t.contact.emailPlaceholder}
                            {...register("email", {
                              required: t.contact.required,
                              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: t.contact.emailInvalid },
                            })}
                          />
                          {errors.email && <FieldError msg={errors.email.message} />}
                        </div>

                        {/* Vrsta usluge */}
                        <div>
                          <label htmlFor="service" className="block text-lemon-gray-light text-xs uppercase tracking-wider font-heading font-bold mb-1">
                            {t.contact.serviceType}
                          </label>
                          <select
                            id="service"
                            className={`${inputClass("service")} cursor-pointer`}
                            defaultValue=""
                            {...register("service", { required: t.contact.required })}
                          >
                            <option value="" disabled className="bg-lemon-gray text-lemon-gray-md">{t.contact.serviceSelect}</option>
                            <option value="Međunarodni transport" className="bg-lemon-gray text-white">{t.contact.serviceIntl}</option>
                            <option value="Unutrašnji transport" className="bg-lemon-gray text-white">{t.contact.serviceDomestic}</option>
                            <option value="Distribucija" className="bg-lemon-gray text-white">{t.contact.serviceDist}</option>
                          </select>
                          {errors.service && <FieldError msg={errors.service.message} />}
                        </div>

                        {/* Datum utovara */}
                        <div>
                          <label htmlFor="datum_utovara" className="block text-lemon-gray-light text-xs uppercase tracking-wider font-heading font-bold mb-1">
                            {t.contact.loadDate}
                          </label>
                          <input
                            id="datum_utovara"
                            type="date"
                            className={`${inputClass("datum_utovara")} [color-scheme:dark]`}
                            {...register("datum_utovara", { required: t.contact.required })}
                          />
                          {errors.datum_utovara && <FieldError msg={errors.datum_utovara.message} />}
                        </div>

                        {/* Mjesto utovara */}
                        <div>
                          <label htmlFor="origin" className="block text-lemon-gray-light text-xs uppercase tracking-wider font-heading font-bold mb-1">
                            {t.contact.loadPlace}
                          </label>
                          <input
                            id="origin"
                            type="text"
                            className={inputClass("origin")}
                            placeholder={t.contact.placePlaceholder}
                            {...register("origin")}
                          />
                        </div>

                        {/* Mjesto istovara */}
                        <div>
                          <label htmlFor="destination" className="block text-lemon-gray-light text-xs uppercase tracking-wider font-heading font-bold mb-1">
                            {t.contact.unloadPlace}
                          </label>
                          <input
                            id="destination"
                            type="text"
                            className={inputClass("destination")}
                            placeholder={t.contact.placePlaceholder}
                            {...register("destination")}
                          />
                        </div>

                        {/* Carinjenje — prikazuje se samo za međunarodni transport */}
                        {selectedService === "Međunarodni transport" && (
                          <div className="sm:col-span-2">
                            <label className="flex items-center gap-3 cursor-pointer mt-2">
                              <input
                                type="checkbox"
                                {...register("carinjenje")}
                                className="h-5 w-5 cursor-pointer"
                                style={{ accentColor: "#FFCC00" }}
                              />
                              <span className="text-white text-sm font-heading font-bold">
                                {t.contact.customs}
                                <span className="text-lemon-gray-light font-normal ml-2">{t.contact.customsNote}</span>
                              </span>
                            </label>
                          </div>
                        )}

                        {/* Poruka */}
                        <div className="sm:col-span-2">
                          <label htmlFor="message" className="block text-lemon-gray-light text-xs uppercase tracking-wider font-heading font-bold mb-1">
                            {t.contact.message}
                          </label>
                          <textarea
                            id="message"
                            rows={4}
                            className={`${inputClass("message")} resize-none`}
                            placeholder={t.contact.messagePlaceholder}
                            {...register("message", { required: t.contact.required })}
                          />
                          {errors.message && <FieldError msg={errors.message.message} />}
                        </div>
                      </div>

                      <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <p className="text-lemon-gray-md text-xs">
                          {t.contact.requiredNote}
                        </p>
                        <button
                          type="submit"
                          disabled={submitting}
                          className="group inline-flex items-center justify-center gap-2 bg-lemon-yellow text-lemon-dark font-heading font-bold text-sm px-7 py-4 rounded-sm hover:bg-white transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                          {submitting ? t.contact.submitting : t.contact.submit}
                          {!submitting && <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />}
                        </button>
                      </div>

                      {submitError && (
                        <div className="mt-4 flex items-start gap-2 text-red-400 text-sm border border-red-500/30 bg-red-500/10 rounded-sm px-4 py-3">
                          <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                          <span>{typeof submitError === "string" ? submitError : t.contact.errorText}</span>
                        </div>
                      )}
                    </form>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function FieldError({ msg }) {
  return (
    <p className="mt-2 flex items-center gap-1.5 text-red-400 text-xs">
      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
      {msg}
    </p>
  );
}