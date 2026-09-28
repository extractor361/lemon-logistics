import { useEffect, useId, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { HOME_SERVICES } from "@/lib/siteData";
import { useLanguage } from "@/lib/LanguageContext";

export default function ServicesNav({ mobile = false, onNavigate }) {
  const [expanded, setExpanded] = useState(false);
  const container = useRef(null);
  const toggle = useRef(null);
  const id = useId();
  const location = useLocation();
  const { lang, t } = useLanguage();

  useEffect(() => {
    setExpanded(false);
  }, [location.key]);

  useEffect(() => {
    if (!expanded) return;
    const closeOutside = (event) => {
      if (!container.current?.contains(event.target)) setExpanded(false);
    };
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, [expanded]);

  const close = () => {
    setExpanded(false);
    onNavigate?.();
  };

  return (
    <div
      ref={container}
      className="relative"
      onMouseEnter={() => { if (!mobile) setExpanded(true); }}
      onMouseLeave={() => { if (!mobile && !container.current?.contains(document.activeElement)) setExpanded(false); }}
      onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setExpanded(false); }}
      onKeyDown={(event) => {
        if (event.key === "Escape" && expanded) {
          event.preventDefault();
          event.stopPropagation();
          setExpanded(false);
          toggle.current?.focus();
        }
      }}
    >
      <div className="flex items-center">
        <NavLink
          to="/usluge"
          onClick={close}
          className={({ isActive }) => mobile
            ? `flex-1 border-l-2 px-3 py-3 text-base font-semibold ${isActive ? "border-lemon-yellow text-white bg-white/5" : "border-transparent text-lemon-gray-light hover:text-white"}`
            : `relative py-2 pl-4 pr-1 text-sm font-semibold transition-colors ${isActive ? "text-white" : "text-lemon-gray-light hover:text-white"}`}
        >
          {t.nav.services}
        </NavLink>
        <button
          ref={toggle}
          type="button"
          aria-label={`${t.nav.services} — ${lang === "en" ? "submenu" : "podmeni"}`}
          aria-expanded={expanded}
          aria-controls={id}
          onClick={() => setExpanded((value) => !value)}
          className={`inline-flex items-center justify-center text-lemon-gray-light hover:text-lemon-yellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-lemon-yellow ${mobile ? "h-12 w-12" : "h-10 w-8"}`}
        >
          <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`} aria-hidden="true" />
        </button>
      </div>
      <ul
        id={id}
        hidden={!expanded}
        className={mobile
          ? "ml-3 border-l border-lemon-yellow/30 py-1"
          : "absolute left-0 top-full w-80 rounded-sm border border-white/10 bg-lemon-dark py-2 shadow-xl"}
      >
        {HOME_SERVICES.map((service) => (
          <li key={service.id}>
            <Link
              to={`/usluge#${service.id}`}
              onClick={close}
              className="block px-4 py-3 text-sm font-semibold leading-relaxed text-lemon-gray-light transition-colors hover:bg-white/5 hover:text-lemon-yellow focus-visible:bg-white/5 focus-visible:text-lemon-yellow"
            >
              {lang === "en" ? service.titleEn : service.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
