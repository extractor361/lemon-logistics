import { useState } from "react";
import { useForm } from "react-hook-form";
import { Phone, Mail, Clock, Globe, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import SectionLabel from "@/components/shared/SectionLabel";
import PageHero from "@/components/shared/PageHero";
import { KARGO_IMAGE, CONTACT, SERVICES } from "@/lib/siteData";

const contactItems = [
  { icon: Phone, label: "Telefon", value: CONTACT.phone, href: CONTACT.phoneHref },
  { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: Clock, label: "Radno vrijeme", value: CONTACT.workingHours },
  { icon: MapPin, label: "Lokacija", value: CONTACT.location },
  { icon: Globe, label: "Website", value: CONTACT.website, href: `https://${CONTACT.website}` },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "", company: "", phone: "", email: "", service: "", origin: "", destination: "", message: "",
    },
  });

  const onSubmit = async (data) => {
    setSubmitting(true);
    // Simulacija slanja upita — u produkciji povezati sa backend servisom
    await new Promise((resolve) => setTimeout(resolve, 900));
    setSubmitting(false);
    setSubmitted(true);
    reset();
  };

  const inputClass = (field) =>
    `w-full bg-transparent border-0 border-b-2 text-white placeholder-lemon-gray-md text-base py-3 px-0 transition-colors duration-200 focus:outline-none ${
      errors[field] ? "border-red-500" : "border-lemon-gray-md focus:border-lemon-yellow"
    }`;

  return (
    <>
      <PageHero
        label="Kontakt"
        title="Kontaktirajte nas"
        subtitle="Opisite vaš zahtjev i vratićemo se sa konkretnim prijedlogom. Tu smo svakog dana od 08:00 do 20:00."
        image={KARGO_IMAGE}
      />

      <section className="bg-lemon-dark py-20 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left — contact info */}
            <div className="lg:col-span-5">
              <Reveal><SectionLabel>Kontakt podaci</SectionLabel></Reveal>
              <Reveal delay={80}>
                <h2 className="mt-5 text-white text-3xl lg:text-4xl font-heading font-black tracking-tight">
                  Razgovarajmo o vašem transportu
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 text-lemon-gray-light text-base leading-relaxed">
                  Pozovite nas direktno ili pošaljite upit putem forme. Odgovaramo u najkraćem mogućem roku.
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
                        Upit uspješno poslat
                      </h3>
                      <p className="mt-3 text-lemon-gray-light text-base max-w-md">
                        Hvala vam na povjerenju. Naš tim će vas kontaktirati u najkraćem mogućem roku.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="mt-8 inline-flex items-center justify-center border border-white/20 text-white font-heading font-bold text-sm px-6 py-3.5 rounded-sm hover:border-lemon-yellow hover:text-lemon-yellow transition-colors"
                      >
                        Pošaljite novi upit
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                      <h3 className="text-white text-xl font-heading font-bold tracking-tight mb-8">
                        Pošaljite upit
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Ime i prezime */}
                        <div className="sm:col-span-2">
                          <label htmlFor="name" className="block text-lemon-gray-light text-xs uppercase tracking-wider font-heading font-bold mb-1">
                            Ime i prezime *
                          </label>
                          <input
                            id="name"
                            type="text"
                            className={inputClass("name")}
                            placeholder="Vaše ime i prezime"
                            {...register("name", { required: "Ovo polje je obavezno" })}
                          />
                          {errors.name && <FieldError msg={errors.name.message} />}
                        </div>

                        {/* Kompanija */}
                        <div>
                          <label htmlFor="company" className="block text-lemon-gray-light text-xs uppercase tracking-wider font-heading font-bold mb-1">
                            Kompanija
                          </label>
                          <input
                            id="company"
                            type="text"
                            className={inputClass("company")}
                            placeholder="Naziv kompanije"
                            {...register("company")}
                          />
                        </div>

                        {/* Telefon */}
                        <div>
                          <label htmlFor="phone" className="block text-lemon-gray-light text-xs uppercase tracking-wider font-heading font-bold mb-1">
                            Telefon *
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            className={inputClass("phone")}
                            placeholder="+382 ..."
                            {...register("phone", { required: "Ovo polje je obavezno" })}
                          />
                          {errors.phone && <FieldError msg={errors.phone.message} />}
                        </div>

                        {/* Email */}
                        <div>
                          <label htmlFor="email" className="block text-lemon-gray-light text-xs uppercase tracking-wider font-heading font-bold mb-1">
                            Email *
                          </label>
                          <input
                            id="email"
                            type="email"
                            className={inputClass("email")}
                            placeholder="vas@email.com"
                            {...register("email", {
                              required: "Ovo polje je obavezno",
                              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Unesite ispravnu email adresu" },
                            })}
                          />
                          {errors.email && <FieldError msg={errors.email.message} />}
                        </div>

                        {/* Vrsta usluge */}
                        <div>
                          <label htmlFor="service" className="block text-lemon-gray-light text-xs uppercase tracking-wider font-heading font-bold mb-1">
                            Vrsta usluge *
                          </label>
                          <select
                            id="service"
                            className={`${inputClass("service")} cursor-pointer`}
                            defaultValue=""
                            {...register("service", { required: "Ovo polje je obavezno" })}
                          >
                            <option value="" disabled className="bg-lemon-gray text-lemon-gray-md">Izaberite uslugu</option>
                            {SERVICES.map((s) => (
                              <option key={s.id} value={s.title} className="bg-lemon-gray text-white">{s.title}</option>
                            ))}
                            <option value="Drugo" className="bg-lemon-gray text-white">Drugo</option>
                          </select>
                          {errors.service && <FieldError msg={errors.service.message} />}
                        </div>

                        {/* Polazište */}
                        <div>
                          <label htmlFor="origin" className="block text-lemon-gray-light text-xs uppercase tracking-wider font-heading font-bold mb-1">
                            Polazište
                          </label>
                          <input
                            id="origin"
                            type="text"
                            className={inputClass("origin")}
                            placeholder="Grad ili adresa"
                            {...register("origin")}
                          />
                        </div>

                        {/* Odredište */}
                        <div>
                          <label htmlFor="destination" className="block text-lemon-gray-light text-xs uppercase tracking-wider font-heading font-bold mb-1">
                            Odredište
                          </label>
                          <input
                            id="destination"
                            type="text"
                            className={inputClass("destination")}
                            placeholder="Grad ili adresa"
                            {...register("destination")}
                          />
                        </div>

                        {/* Poruka */}
                        <div className="sm:col-span-2">
                          <label htmlFor="message" className="block text-lemon-gray-light text-xs uppercase tracking-wider font-heading font-bold mb-1">
                            Poruka *
                          </label>
                          <textarea
                            id="message"
                            rows={4}
                            className={`${inputClass("message")} resize-none`}
                            placeholder="Opišite vaš zahtjev..."
                            {...register("message", { required: "Ovo polje je obavezno" })}
                          />
                          {errors.message && <FieldError msg={errors.message.message} />}
                        </div>
                      </div>

                      <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <p className="text-lemon-gray-md text-xs">
                          Polja označena sa * su obavezna.
                        </p>
                        <button
                          type="submit"
                          disabled={submitting}
                          className="group inline-flex items-center justify-center gap-2 bg-lemon-yellow text-lemon-dark font-heading font-bold text-sm px-7 py-4 rounded-sm hover:bg-white transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                          {submitting ? "Slanje..." : "Pošaljite upit"}
                          {!submitting && <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />}
                        </button>
                      </div>
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