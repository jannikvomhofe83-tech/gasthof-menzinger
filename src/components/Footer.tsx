import { Link } from "@tanstack/react-router";
import { BILDNACHWEIS } from "@/lib/bilder";

/** Kontakt und Öffnungszeiten je Betrieb – Gasthaus und Metzgerei
 *  sitzen in getrennten Häusern und haben eigene Rufnummern. */
const BETRIEB = {
  primary: {
    name: "Gasthof Menzinger",
    strasse: "Hauptstraße 2",
    tel: "08083374",
    telLabel: "08083 / 374",
    zeiten: (
      <>
        Montag: Ruhetag
        <br />
        Di–So ab 9:00 Uhr
        <br />
        Mittagstisch 11:00–13:30
      </>
    ),
  },
  meat: {
    name: "Metzgerei Menzinger",
    strasse: "Hauptstraße 2a",
    tel: "08083547124",
    telLabel: "08083 / 547 124",
    zeiten: (
      <>
        Montag: 6:30–12:30
        <br />
        Di–Fr: 6:30–18:00
        <br />
        Samstag: 6:30–12:00
      </>
    ),
  },
} as const;

export function Footer({
  variant = "primary",
  crossLink,
}: {
  variant?: "primary" | "meat";
  crossLink: { to: string; label: string };
}) {
  const bg = variant === "meat" ? "#5E211E" : "#1D5230";
  const betrieb = BETRIEB[variant];
  return (
    <footer style={{ backgroundColor: bg }} className="text-white/90 border-t-4 border-background">
      <div className="mx-auto max-w-6xl px-6 py-14 grid grid-cols-1 gap-10 md:grid-cols-4 text-sm">
        <div className="md:col-span-2">
          <Link to="/" className="font-serif text-3xl text-white block">
            Menzinger
          </Link>
          <p className="mt-3 text-white/70 max-w-sm leading-relaxed">
            Gasthof & Metzgerei mit langer Tradition – herzliche bayerische
            Gastlichkeit im Herzen von Lengdorf.
          </p>
        </div>
        <div>
          <div className="overline text-white/60 mb-3">Kontakt</div>
          <p className="leading-relaxed">
            {betrieb.name}<br />
            {betrieb.strasse}<br />
            84435 Lengdorf<br />
            <a href={`tel:${betrieb.tel}`} className="hover:text-white">
              {betrieb.telLabel}
            </a>
          </p>
        </div>
        <div>
          <div className="overline text-white/60 mb-3">Öffnungszeiten</div>
          <p className="leading-relaxed text-white/80">{betrieb.zeiten}</p>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="mx-auto max-w-6xl px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>© 2026 Gasthof Menzinger – Lengdorf</p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-0">
            <Link to={crossLink.to} className="hover:text-white inline-flex items-center min-h-11 px-1">{crossLink.label}</Link>
            <Link to="/impressum" className="hover:text-white inline-flex items-center min-h-11 px-1">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-white inline-flex items-center min-h-11 px-1">Datenschutz</Link>
            <a href="#bildnachweis" className="hover:text-white inline-flex items-center min-h-11 px-1">Bildnachweis</a>
          </div>
        </div>
        <p className="mx-auto max-w-6xl px-6 pb-4 text-xs text-white/60">
          Teile der Inhalte dieser Website wurden mit Unterstützung von KI
          erstellt.
        </p>
        {/* CC-BY / CC-BY-SA verlangen Namensnennung der Speisenfotos */}
        <details id="bildnachweis" className="mx-auto max-w-6xl px-6 pb-6 text-xs text-white/50">
          <summary className="cursor-pointer hover:text-white/80">Bildnachweis</summary>
          <ul className="mt-3 space-y-1 leading-relaxed">
            <li>Fotos der Räume und Feiern: Gasthof Menzinger</li>
            {BILDNACHWEIS.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </details>
      </div>
    </footer>
  );
}
