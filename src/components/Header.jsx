import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Phone, Languages } from "lucide-react";

import Logo from "../components/Logo";
import { Button } from "../components/ui/button";

import { useLang } from "../contexts/LangContext";
import { useBooking } from "../contexts/BookingContext";
import { CONTACT } from "../lib/translations";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLang();
  const { openBooking } = useBooking();

  const navItems = [
    { to: "/", label: t("nav_home") },
    { to: "/products", label: t("nav_products") },
    { to: "/services", label: t("nav_services") },
    { to: "/why-pure-water", label: t("nav_why") },
    { to: "/about", label: t("nav_about") },
  ];

  const linkClass = ({ isActive }) =>
    `relative py-2 text-sm font-semibold transition-colors ${
      isActive
        ? "text-[#0B3B60]"
        : "text-slate-600 hover:text-[#0B3B60]"
    }`;

  return (
    <header
      className="sticky top-0 z-40 backdrop-blur-xl bg-white/75 border-b border-white/40 shadow-[0_2px_20px_-10px_rgba(11,59,96,0.15)]"
      data-testid="site-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}
          <Link to="/" data-testid="header-logo-link">
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-8"
            data-testid="desktop-nav"
          >
            {navItems.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={linkClass}
              >
                {({ isActive }) => (
                  <>
                    {n.label}
                    {isActive && (
                      <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-[#00A3E0] to-[#0B3B60]" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3">

            <button
              onClick={() => setLang(lang === "en" ? "hi" : "en")}
              className="hidden sm:flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-full border border-slate-200 hover:border-[#00A3E0]"
            >
              <Languages size={14} />
              {lang === "en" ? "हिं" : "EN"}
            </button>

            <a
              href={`tel:${CONTACT.phoneIntl}`}
              className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-[#0B3B60] hover:text-[#00A3E0]"
            >
              <Phone size={16} />
              {CONTACT.phone}
            </a>

            <Button
              onClick={() => openBooking()}
              className="bg-[#FF7A00] hover:bg-[#E66E00] text-white rounded-full px-5 sm:px-6 h-10 font-semibold"
            >
              {t("book_now")}
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {open && (
          <div className="lg:hidden border-t border-slate-100 py-4">
            <div className="flex flex-col gap-1">

              {navItems.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-3 rounded-lg font-semibold ${
                      isActive
                        ? "bg-[#F4F9FF] text-[#0B3B60]"
                        : "text-slate-700"
                    }`
                  }
                >
                  {n.label}
                </NavLink>
              ))}

              <button
                onClick={() => setLang(lang === "en" ? "hi" : "en")}
                className="mt-2 mx-3 flex items-center justify-center gap-2 py-3 rounded-lg border border-slate-200 font-semibold"
              >
                <Languages size={16} />
                {lang === "en"
                  ? "हिंदी में देखें"
                  : "Switch to English"}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
