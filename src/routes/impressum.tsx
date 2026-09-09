import { createFileRoute } from "@tanstack/react-router";
import { RechtsSeite, Abschnitt } from "@/components/RechtsSeite";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum – Gasthof & Metzgerei Menzinger, Lengdorf" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ImpressumPage,
});

/**
 * Gasthaus und Metzgerei werden getrennt ausgewiesen: eigene Anschrift,
 * eigene Rufnummer, eigene E-Mail. Die gemeinsamen Pflichtangaben
 * (§ 18 MStV, Streitbeilegung, Bildnachweis) stehen einmal am Ende.
 */
function ImpressumPage() {
  return (
    <RechtsSeite titel="Impressum">
      <p className="text-text-secondary leading-relaxed text-[15px]">
        Angaben gemäß § 5 DDG für die beiden Betriebe, die auf dieser Website
        dargestellt werden.
      </p>

      <BetriebTitel>Gasthof Menzinger</BetriebTitel>

      <Abschnitt titel="Anbieter">
        <p>
          Gasthof Menzinger
          <br />
          Hauptstraße 2
          <br />
          84435 Lengdorf
        </p>
      </Abschnitt>

      <Abschnitt titel="Vertreten durch">
        <p>Georg Menzinger</p>
      </Abschnitt>

      <Abschnitt titel="Kontakt">
        <p>
          Telefon:{" "}
          <a href="tel:08083374" className="text-primary hover:underline">
            08083 / 374
          </a>
          <br />
          E-Mail:{" "}
          <a
            href="mailto:gmenzinger@t-online.de"
            className="text-primary hover:underline"
          >
            gmenzinger@t-online.de
          </a>
        </p>
        <p>Veranstaltungen und Feiern im Gasthaus nach Absprache.</p>
      </Abschnitt>

      <Abschnitt titel="Steuernummer">
        <p>52036187591</p>
      </Abschnitt>

      <Abschnitt titel="Aufsichtsbehörde">
        <p>
          Für den Gaststättenbetrieb (Gaststättenerlaubnis nach § 2 GastG):
          <br />
          Landratsamt Erding
        </p>
      </Abschnitt>

      <BetriebTitel>Metzgerei Menzinger</BetriebTitel>

      <Abschnitt titel="Anbieter">
        <p>
          Metzgerei Menzinger
          <br />
          Hauptstraße 2a
          <br />
          84435 Lengdorf
        </p>
      </Abschnitt>

      <Abschnitt titel="Kontakt">
        <p>
          Telefon:{" "}
          <a href="tel:08083547124" className="text-primary hover:underline">
            08083 / 547 124
          </a>
          <br />
          E-Mail:{" "}
          <a
            href="mailto:info@menzinger-lengdorf.de"
            className="text-primary hover:underline"
          >
            info@menzinger-lengdorf.de
          </a>
        </p>
      </Abschnitt>

      <Abschnitt titel="Öffnungszeiten">
        <p>
          Montag: 6:30 – 12:30 Uhr
          <br />
          Dienstag bis Freitag: 6:30 – 18:00 Uhr
          <br />
          Samstag: 6:30 – 12:00 Uhr
          <br />
          Sonntag: geschlossen
        </p>
      </Abschnitt>

      <Abschnitt titel="Aufsichtsbehörde">
        <p>Landratsamt Erding</p>
      </Abschnitt>

      <BetriebTitel>Für beide Betriebe</BetriebTitel>

      <Abschnitt titel="Redaktionell verantwortlich">
        <p>
          Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:
          <br />
          Georg Menzinger
          <br />
          Hauptstraße 2
          <br />
          84435 Lengdorf
        </p>
      </Abschnitt>

      <Abschnitt titel="Verbraucherstreitbeilegung">
        <p>
          Wir sind nicht bereit und nicht verpflichtet, an
          Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
          teilzunehmen.
        </p>
      </Abschnitt>

      <Abschnitt titel="Bildnachweis">
        <p>
          Fotos der Räumlichkeiten und Veranstaltungen: Gasthof Menzinger.
          Einzelne Bilder auf dieser Website wurden mit Hilfe künstlicher
          Intelligenz erzeugt. Es handelt sich dabei um Symbolbilder, die nicht
          die tatsächlichen Räumlichkeiten, Einrichtungen oder Produkte des
          Gasthof und der Metzgerei Menzinger abbilden. Diese Bilder sind
          unmittelbar am Bild als KI-generiert gekennzeichnet.
        </p>
        <p>
          Alle Angaben zu Speisen, Getränken, Preisen und Öffnungszeiten
          entsprechen den Karten des Betriebs. Änderungen und Irrtümer
          vorbehalten.
        </p>
      </Abschnitt>

      <Abschnitt titel="Haftung für Links">
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Bei Bekanntwerden von Rechtsverletzungen werden
          wir derartige Links umgehend entfernen.
        </p>
      </Abschnitt>
    </RechtsSeite>
  );
}

/** Trennt die beiden Betriebe optisch deutlich voneinander. */
function BetriebTitel({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-6 first:pt-0 border-t border-border">
      <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-text-primary">
        {children}
      </h2>
    </div>
  );
}
