/**
 * Kennzeichnung KI-generierter Bilder.
 *
 * Erfüllt zwei Anforderungen zugleich:
 *  - Art. 50(4) KI-VO: Offenlegung, dass der Inhalt künstlich erzeugt wurde
 *  - § 5 UWG: klarstellen, dass das Bild nicht den realen Betrieb zeigt
 *
 * Bewusst dezent, aber lesbar – eine absichtlich unsichtbare Kennzeichnung
 * wäre rechtlich wertlos.
 */

export const HINWEIS_LANG =
  "Symbolbild, KI-generiert – zeigt nicht die Räumlichkeiten der Metzgerei Menzinger.";
export const HINWEIS_KURZ = "Symbolbild, KI-generiert";

export function BildHinweis({
  text = HINWEIS_KURZ,
  tone = "hell",
  className = "",
}: {
  text?: string;
  /** "dunkel" = auf dem Bild liegend, "hell" = auf hellem Untergrund darunter */
  tone?: "hell" | "dunkel";
  className?: string;
}) {
  const dunkel = tone === "dunkel";
  return (
    <p
      className={`text-xs leading-snug ${
        dunkel ? "text-white/80" : "text-text-secondary"
      } ${className}`}
      style={dunkel ? { textShadow: "0 1px 4px rgba(0,0,0,0.75)" } : undefined}
    >
      {text}
    </p>
  );
}
