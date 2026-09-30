import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import Logo from "./Logo";
import ServicesNav from "./ServicesNav";
import { useLanguage } from "@/lib/LanguageContext";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { label: t.nav.home, path: "/" },
    { label: t.nav.about, path: "/o-nama" },
    { label: t.nav.services, path: "/usluge" },
    { label: t.nav.support, path: "/customer-support" },
    { label: t.nav.contact, path: "/kontakt" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.key]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-lemon-dark/95 backdrop-blur-md border-b border-white/5"
          : "bg-lemon-dark/40 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label={t.nav.home}>
            {navLinks.map((link) => link.path === "/usluge" ? (
              <ServicesNav key={link.path} />
            ) : (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-semibold transition-colors duration-200 group ${
                    isActive ? "text-white" : "text-lemon-gray-light hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className={`absolute left-4 right-4 -bottom-0.5 h-px bg-lemon-yellow origin-left transition-transform duration-300 ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <button
              onClick={() => setLang(lang === "me" ? "en" : "me")}
              className="inline-flex items-center gap-1.5 text-lemon-gray-light hover:text-lemon-yellow transition-colors px-2.5 py-2 text-sm font-heading font-bold"
              aria-label="Switch language"
            >
              <Globe className="h-4 w-4" />
              <span>{lang === "me" ? "EN" : "ME"}</span>
            </button>

            <Link
              to="/kontakt#kontakt-form"
              className="hidden sm:inline-flex items-center justify-center bg-lemon-yellow text-lemon-dark font-heading font-bold text-sm px-5 py-2.5 rounded-sm hover:bg-white transition-colors duration-200"
            >
              {t.header.cta}
            </Link>
            <button
              className="lg:hidden inline-flex items-center justify-center text-white p-1.5"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? t.header.closeMenu : t.header.openMenu}
              aria-expanded={open}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        hidden={!open}
        className="absolute inset-x-0 top-full lg:hidden max-h-[calc(100dvh-4rem)] overflow-y-auto bg-lemon-dark border-t border-white/5"
      >
        <nav className="px-5 sm:px-8 py-4 flex flex-col gap-1" aria-label={t.nav.home}>
          {navLinks.map((link) => link.path === "/usluge" ? (
            <ServicesNav key={link.path} mobile onNavigate={() => setOpen(false)} />
          ) : (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `px-3 py-3 text-base font-semibold border-l-2 transition-colors duration-200 ${
                  isActive
                    ? "border-lemon-yellow text-white bg-white/5"
                    : "border-transparent text-lemon-gray-light hover:text-white hover:bg-white/5"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/kontakt#kontakt-form"
            className="mt-3 inline-flex items-center justify-center bg-lemon-yellow text-lemon-dark font-heading font-bold text-base px-5 py-3.5 rounded-sm"
          >
            {t.header.cta}
          </Link>
        </nav>
      </div>
    </header>
  );
}
