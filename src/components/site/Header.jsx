import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { label: "Početna", path: "/" },
  { label: "O nama", path: "/o-nama" },
  { label: "Usluge", path: "/usluge" },
  { label: "Lemon Customer Support", path: "/customer-support" },
  { label: "Kontakt", path: "/kontakt" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

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
          <nav className="hidden lg:flex items-center gap-1" aria-label="Glavna navigacija">
            {navLinks.map((link) => (
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
            <Link
              to="/kontakt"
              className="hidden sm:inline-flex items-center justify-center bg-lemon-yellow text-lemon-dark font-heading font-bold text-sm px-5 py-2.5 rounded-sm hover:bg-white transition-colors duration-200"
            >
              Kontaktirajte nas
            </Link>
            <button
              className="lg:hidden inline-flex items-center justify-center text-white p-1.5"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Zatvori meni" : "Otvori meni"}
              aria-expanded={open}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ease-out bg-lemon-dark border-t border-white/5 ${
          open ? "max-h-[480px]" : "max-h-0"
        }`}
      >
        <nav className="px-5 sm:px-8 py-4 flex flex-col gap-1" aria-label="Mobilna navigacija">
          {navLinks.map((link) => (
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
            to="/kontakt"
            className="mt-3 inline-flex items-center justify-center bg-lemon-yellow text-lemon-dark font-heading font-bold text-base px-5 py-3.5 rounded-sm"
          >
            Kontaktirajte nas
          </Link>
        </nav>
      </div>
    </header>
  );
}