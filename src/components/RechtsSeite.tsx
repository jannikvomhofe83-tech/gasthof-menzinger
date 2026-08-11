import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

/** Schlichtes Layout für Impressum und Datenschutzerklärung. */
export function RechtsSeite({
  titel,
  stand,
  children,
}: {
  titel: string;
  stand?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background text-text-primary min-h-screen flex flex-col">
      <header className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 h-16 flex items-center justify-between gap-4">
          <Link
            to="/"
            className="font-serif text-xl leading-none tracking-tight hover:opacity-80 transition-opacity"
          >
            Menzinger Lengdorf
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors min-h-11"
          >
            <ArrowLeft size={15} /> Zur Startseite
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <h1 className="font-serif text-4xl md:text-5xl font-medium tracking-tight">
            {titel}
          </h1>
          {stand && (
            <p className="mt-3 text-sm text-text-secondary">Stand: {stand}</p>
          )}
          <div className="mt-10 space-y-8">{children}</div>
        </div>
      </main>

      <footer className="bg-[#1D5230] text-white/70 text-xs">
        <div className="mx-auto max-w-3xl px-6 py-5 flex flex-wrap items-center justify-between gap-4">
          <span>© 2026 Menzinger Lengdorf</span>
          <div className="flex flex-wrap gap-5">
            <Link to="/impressum" className="hover:text-white">
              Impressum
            </Link>
            <Link to="/datenschutz" className="hover:text-white">
              Datenschutz
            </Link>
          </div>
        </div>
        <p className="mx-auto max-w-3xl px-6 pb-5">
          Teile der Inhalte dieser Website wurden mit Unterstützung von KI
          erstellt.
        </p>
      </footer>
    </div>
  );
}

export function Abschnitt({
  titel,
  children,
}: {
  titel: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-serif text-2xl mb-3">{titel}</h2>
      <div className="text-text-secondary leading-relaxed space-y-3 text-[15px]">
        {children}
      </div>
    </section>
  );
}

/**
 * Sichtbarer Platzhalter. Bewusst auffällig: eine unvollständige
 * Pflichtangabe ist schlimmer als eine erkennbar offene Stelle.
 */
export function Offen({ was }: { was: string }) {
  return (
    <mark className="bg-amber-200 text-amber-950 px-1.5 py-0.5 rounded-sm font-medium not-italic">
      [ {was} ]
    </mark>
  );
}
