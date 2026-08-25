import { Link } from "react-router-dom";
import { Phone, Mail, Clock, Globe, Facebook, Instagram, Linkedin } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { label: "Početna", path: "/" },
  { label: "O nama", path: "/o-nama" },
  { label: "Usluge", path: "/usluge" },
  { label: "Lemon Customer Support", path: "/customer-support" },
  { label: "Kontakt", path: "/kontakt" },
];

const serviceLinks = [
  { label: "Međunarodni transport", path: "/usluge#medjunarodni-transport" },
  { label: "Unutrašnji transport", path: "/usluge#unutarasnji-transport" },
  { label: "Skladištenje robe", path: "/usluge#skladistenje" },
  { label: "Distribucija robe", path: "/usluge#distribucija" },
  { label: "Manipulacija robom", path: "/usluge#rukovanje" },
  { label: "Logistička podrška", path: "/usluge#podrska" },
];

const socials = [
  { label: "Facebook", icon: Facebook, href: "#" },
  { label: "Instagram", icon: Instagram, href: "#" },
  { label: "LinkedIn", icon: Linkedin, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-lemon-dark border-t border-white/5 pb-14 lg:pb-0">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 py-14 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 text-lemon-gray-light text-sm leading-relaxed max-w-xs">
              Logistička kompanija specijalizovana za međunarodni i unutrašnji transport, skladištenje i organizaciju logističkih usluga u Crnoj Gori.
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
            <h3 className="text-white text-sm font-heading font-bold uppercase tracking-wider mb-4">Navigacija</h3>
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
            <h3 className="text-white text-sm font-heading font-bold uppercase tracking-wider mb-4">Usluge</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-lemon-gray-light text-sm hover:text-lemon-yellow transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-white text-sm font-heading font-bold uppercase tracking-wider mb-4">Kontakt</h3>
            <ul className="space-y-3.5">
              <li>
                <a href="tel:+38220662266" className="flex items-start gap-3 text-lemon-gray-light text-sm hover:text-white transition-colors">
                  <Phone className="h-4 w-4 text-lemon-yellow shrink-0 mt-0.5" />
                  <span>020/66-22-66</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@lemonlogistic.com" className="flex items-start gap-3 text-lemon-gray-light text-sm hover:text-white transition-colors">
                  <Mail className="h-4 w-4 text-lemon-yellow shrink-0 mt-0.5" />
                  <span>info@lemonlogistic.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-lemon-gray-light text-sm">
                <Clock className="h-4 w-4 text-lemon-yellow shrink-0 mt-0.5" />
                <span>08:00–20:00, svakog dana</span>
              </li>
              <li>
                <a href="https://lemonlogistic.com" className="flex items-start gap-3 text-lemon-gray-light text-sm hover:text-white transition-colors">
                  <Globe className="h-4 w-4 text-lemon-yellow shrink-0 mt-0.5" />
                  <span>lemonlogistic.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 lg:mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-lemon-gray-md text-xs order-2 sm:order-1">
            © {new Date().getFullYear()} Lemon Logistics. Sva prava zadržana.
          </p>
          <div className="flex items-center gap-6 order-1 sm:order-2">
            <Link to="/politika-privatnosti" className="text-lemon-gray-light text-xs hover:text-lemon-yellow transition-colors">
              Politika privatnosti
            </Link>
            <Link to="/kontakt" className="text-lemon-gray-light text-xs hover:text-lemon-yellow transition-colors">
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}