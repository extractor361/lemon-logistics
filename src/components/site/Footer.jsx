import { Link } from "react-router-dom";
import { Phone, Mail, Clock, Globe, Facebook, Instagram, Linkedin } from "lucide-react";
import Logo from "./Logo";
import { useLanguage } from "@/lib/LanguageContext";
import { CONTACT, SERVICES } from "@/lib/siteData";

export default function Footer() {
  const { lang, t } = useLanguage();

  const navLinks = [
    { label: t.nav.home, path: "/" },
    { label: t.nav.about, path: "/o-nama" },
    { label: t.nav.services, path: "/usluge" },
    { label: t.nav.support, path: "/customer-support" },
    { label: t.nav.contact, path: "/kontakt" },
  ];

  const socials = [
    { label: "Facebook", icon: Facebook, href: "#" },
    { label: "Instagram", icon: Instagram, href: "#" },
    { label: "LinkedIn", icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="bg-lemon-dark border-t border-white/5 pb-14 lg:pb-0">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 py-14 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 text-lemon-gray-light text-sm leading-relaxed max-w-xs">
              {t.footer.about}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-white/10 text-lemon-gray-light hover:text-lemon-dark hover:bg-lemon-yellow hover:border-lemon-yellow transition-colors duration-200"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-sm font-heading font-bold uppercase tracking-wider mb-4">{t.footer.nav}</h3>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-lemon-gray-light text-sm hover:text-lemon-yellow transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-white text-sm font-heading font-bold uppercase tracking-wider mb-4">{t.footer.services}</h3>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link to={`/usluge#${s.id}`} className="text-lemon-gray-light text-sm hover:text-lemon-yellow transition-colors duration-200">
                    {lang === "en" ? s.titleEn : s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-white text-sm font-heading font-bold uppercase tracking-wider mb-4">{t.footer.contact}</h3>
            <ul className="space-y-3.5">
              <li>
                <a href={CONTACT.phoneHref} className="flex items-start gap-3 text-lemon-gray-light text-sm hover:text-white transition-colors">
                  <Phone className="h-4 w-4 text-lemon-yellow shrink-0 mt-0.5" />
                  <span>{CONTACT.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="flex items-start gap-3 text-lemon-gray-light text-sm hover:text-white transition-colors">
                  <Mail className="h-4 w-4 text-lemon-yellow shrink-0 mt-0.5" />
                  <span>{CONTACT.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-lemon-gray-light text-sm">
                <Clock className="h-4 w-4 text-lemon-yellow shrink-0 mt-0.5" />
                <span>{CONTACT.workingHours}</span>
              </li>
              <li>
                <a href={`https://${CONTACT.website}`} className="flex items-start gap-3 text-lemon-gray-light text-sm hover:text-white transition-colors">
                  <Globe className="h-4 w-4 text-lemon-yellow shrink-0 mt-0.5" />
                  <span>{CONTACT.website}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 lg:mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-lemon-gray-md text-xs order-2 sm:order-1">
            © {new Date().getFullYear()} Lemon Logistics. {t.footer.rights}
          </p>
          <div className="flex items-center gap-6 order-1 sm:order-2">
            <Link to="/politika-privatnosti" className="text-lemon-gray-light text-xs hover:text-lemon-yellow transition-colors">
              {t.footer.privacy}
            </Link>
            <Link to="/kontakt" className="text-lemon-gray-light text-xs hover:text-lemon-yellow transition-colors">
              {t.nav.contact}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}