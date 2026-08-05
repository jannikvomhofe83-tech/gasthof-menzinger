import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { useEffect, useState } from "react";

type NavLink = { href: string; label: string };

export function Navbar({
  brand,
  links,
  ctaPhone,
  crossLink,
  variant = "primary",
}: {
  brand: string;
  links: NavLink[];
  ctaPhone: { label: string; tel: string };
  crossLink: { to: string; label: string };
  variant?: "primary" | "meat";
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isMeat = variant === "meat";
  const ctaClass = isMeat
    ? "bg-meat hover:bg-meat-dark"
    : "bg-primary hover:bg-primary-dark";
  const hoverText = isMeat ? "hover:text-meat" : "hover:text-primary";



  return (
    <header
      className={`sticky top-0 z-50 bg-background/95 backdrop-blur border-b transition-shadow ${
        scrolled ? "shadow-sm" : ""
      }`}
      style={{
        borderBottomColor:
          variant === "meat" ? "var(--meat)" : "var(--primary)",
        borderBottomWidth: "1px",
      }}
    >
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between gap-6">
        <Link to="/" className="font-serif text-2xl leading-none tracking-tight text-text-primary hover:opacity-80 transition-opacity">
          {brand}
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm text-text-primary">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={`${hoverText} transition-colors`}>
              {l.label}
            </a>
          ))}
          <Link to={crossLink.to} className="text-text-secondary hover:text-text-primary text-sm border-l border-border pl-6">
            {crossLink.label}
          </Link>
          <a
            href={`tel:${ctaPhone.tel}`}
            className={`inline-flex items-center gap-2 ${ctaClass} text-white px-4 py-2 rounded text-sm font-medium transition-colors`}
          >
            <Phone size={14} /> {ctaPhone.label}
          </a>
        </nav>

        <button
          className="lg:hidden -mr-2 w-11 h-11 flex items-center justify-center text-text-primary"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menü"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-text-primary"
              >
                {l.label}
              </a>
            ))}
            <Link to={crossLink.to} className="py-2 text-text-secondary">
              {crossLink.label}
            </Link>
            <a
              href={`tel:${ctaPhone.tel}`}
              className={`mt-2 inline-flex items-center justify-center gap-2 ${ctaClass} text-white px-4 py-3 rounded text-sm font-medium`}
            >
              <Phone size={14} /> {ctaPhone.label}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
