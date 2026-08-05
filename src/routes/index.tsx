import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { BILDER } from "@/lib/bilder";
import { BildHinweis } from "@/components/BildHinweis";
import metzgereiHero from "@/assets/metzgerei-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Menzinger Lengdorf – Gasthof & Metzgerei" },
      {
        name: "description",
        content:
          "Willkommen beim Menzinger in Lengdorf – wählen Sie Ihren Eingang: Gasthaus oder Metzgerei.",
      },
      { property: "og:title", content: "Menzinger Lengdorf – Gasthof & Metzgerei" },
      {
        property: "og:description",
        content:
          "Willkommen beim Menzinger in Lengdorf – wählen Sie Ihren Eingang: Gasthaus oder Metzgerei.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: SplashPage,
});

function SplashPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#1D5230]">
      <main className="flex-1 relative">
        {/* Mobil: Begrüßung als eigener Block – als Overlay würde sie die
            Panel-Buttons verdecken. Ab md übernimmt die zentrierte Variante. */}
        <div className="md:hidden bg-background px-6 py-10">
          <WelcomeCard />
        </div>

        <div className="flex flex-col md:flex-row md:min-h-[calc(100vh-56px)]">
          <SplitPanel
            to="/gasthaus"
            image={BILDER.saalFestlich.src}
            imageAlt="Festlich gedeckte Tafeln im Saal des Gasthof Menzinger"
            overlay="rgba(20, 60, 35, 0.58)"
            overlayHover="rgba(20, 60, 35, 0.48)"
            overline="Eingang"
            title="Gasthaus"
            text="Bayerische Küche, Stammtisch und Räume zum Feiern."
            cta="Zum Gasthaus"
            side="left"
          />
          <SplitPanel
            to="/metzgerei"
            image={metzgereiHero}
            imageAlt="Wursttheke mit Fleisch- und Wurstwaren aus eigener Herstellung"
            overlay="rgba(88, 32, 29, 0.58)"
            overlayHover="rgba(88, 32, 29, 0.48)"
            overline="Eingang"
            title="Metzgerei"
            text="Fleisch- und Wurstwaren aus eigener Herstellung."
            cta="Zur Metzgerei"
            side="right"
            hinweis
          />
        </div>

        {/* Desktop: zentriert über beiden Panels */}
        <div className="pointer-events-none absolute inset-0 hidden md:flex items-center justify-center px-6">
          <WelcomeCard />
        </div>
      </main>

      <footer className="bg-[#1D5230] text-white/70 text-xs">
        <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between gap-4">
          <span>© 2026 Menzinger Lengdorf</span>
          <div className="flex gap-5">
            <Link to="/impressum" className="hover:text-white inline-flex items-center min-h-11 px-1">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-white inline-flex items-center min-h-11 px-1">Datenschutz</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function WelcomeCard() {
  return (
    <div className="pointer-events-auto bg-background border border-accent-soft shadow-xl px-8 py-8 md:px-14 md:py-10 text-center max-w-md mx-auto">
      <div className="overline text-primary mb-2">Willkommen bei</div>
      <div
        className="text-5xl sm:text-6xl md:text-7xl leading-none text-primary-dark"
        style={{ fontFamily: "var(--font-script)" }}
      >
        Menzinger
      </div>
      <div className="mt-4 w-16 h-px bg-accent mx-auto" />
      <p className="mt-4 text-sm text-text-secondary leading-relaxed">
        Gasthof &amp; Metzgerei
        <br />
        Hauptstraße 2 · 84435 Lengdorf
      </p>
    </div>
  );
}

function SplitPanel({
  to,
  image,
  imageAlt,
  overlay,
  overlayHover,
  overline,
  title,
  text,
  cta,
  side,
  hinweis = false,
}: {
  to: string;
  image: string;
  imageAlt: string;
  overlay: string;
  overlayHover: string;
  overline: string;
  title: string;
  text: string;
  cta: string;
  side: "left" | "right";
  hinweis?: boolean;
}) {
  return (
    <Link
      to={to}
      className="group relative flex-1 min-h-[42vh] md:min-h-[calc(100vh-56px)] overflow-hidden transition-[flex-grow] duration-500 md:hover:flex-[1.15]"
    >
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
      />

      {/* Markenton – beim Hover leicht zurückgenommen, damit das Foto durchkommt */}
      <div
        className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-80"
        style={{ backgroundColor: overlay }}
      />

      {/* Dunkler Verlauf: sorgt für den Kontrast hinter der Schrift */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.28) 42%, rgba(0,0,0,0.10) 70%, rgba(0,0,0,0.38) 100%)",
        }}
      />

      {/* Vignette für die Premium-Anmutung */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 42%, rgba(0,0,0,0.42) 100%)",
        }}
      />

      <div
        className={`relative h-full flex flex-col items-center justify-center text-center px-6 py-16 md:px-8 md:py-24 ${
          side === "left" ? "md:pr-24" : "md:pl-24"
        }`}
      >
        <div
          className="overline text-white mb-4"
          style={{ textShadow: "0 1px 8px rgba(0,0,0,0.55)" }}
        >
          {overline}
        </div>
        {/* text-white explizit: die globale h2-Regel überschreibt sonst die Vererbung */}
        <h2
          className="font-serif text-5xl md:text-7xl font-medium tracking-tight text-white"
          style={{ textShadow: "0 2px 22px rgba(0,0,0,0.6), 0 1px 3px rgba(0,0,0,0.5)" }}
        >
          {title}
        </h2>
        <div className="mt-5 w-14 h-px bg-white/70" />
        <p
          className="mt-5 max-w-xs text-white leading-relaxed"
          style={{ textShadow: "0 1px 10px rgba(0,0,0,0.6)" }}
        >
          {text}
        </p>
        {hinweis && (
          <BildHinweis tone="dunkel" className="mt-6 max-w-xs" />
        )}
        <span className="mt-9 inline-flex items-center gap-2 border border-white/80 bg-black/25 backdrop-blur-[2px] text-white hover:bg-white hover:text-text-primary hover:border-white transition-colors px-7 py-3.5 text-sm tracking-wide font-medium">
          {cta} <ArrowRight size={16} />
        </span>
      </div>
    </Link>
  );
}
