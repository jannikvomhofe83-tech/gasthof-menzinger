import { createFileRoute } from "@tanstack/react-router";
import { RechtsSeite, Abschnitt, Offen } from "@/components/RechtsSeite";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum – Gasthof & Metzgerei Menzinger, Lengdorf" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <RechtsSeite titel="Impressum">
      <Abschnitt titel="Angaben gemäß § 5 DDG">
        <p>
          <Offen was="Vollständiger Firmenname inkl. Rechtsform" />
          <br />
          Hauptstraße 2
          <br />
          84435 Lengdorf
        </p>
      </Abschnitt>

      <Abschnitt titel="Vertreten durch">
        <p>
          <Offen was="Vor- und Nachname des Inhabers bzw. der Geschäftsführung" />
        </p>
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
            href="mailto:gasthaus@menzinger-lengdorf.de"
            className="text-primary hover:underline"
          >
            gasthaus@menzinger-lengdorf.de
          </a>
        </p>
      </Abschnitt>

      <Abschnitt titel="Umsatzsteuer-Identifikationsnummer">
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
          <br />
          <Offen was="USt-IdNr., z. B. DE123456789 – falls nicht vorhanden, diesen Abschnitt ersatzlos streichen" />
        </p>
      </Abschnitt>

      <Abschnitt titel="Eintragung in der Handwerksrolle">
        <p>
          Für den Metzgereibetrieb:
          <br />
          Eingetragen bei: <Offen was="Zuständige Handwerkskammer, vermutlich HWK für München und Oberbayern" />
          <br />
          Handwerksrollen-Nr.: <Offen was="Nummer" />
          <br />
          Berufsbezeichnung: Metzger / Fleischer (verliehen in der
          Bundesrepublik Deutschland)
        </p>
      </Abschnitt>

      <Abschnitt titel="Aufsichtsbehörde">
        <p>
          Für den Gaststättenbetrieb (Gaststättenerlaubnis nach § 2 GastG):
          <br />
          <Offen was="Zuständige Behörde, in der Regel das Landratsamt Erding" />
        </p>
      </Abschnitt>

      <Abschnitt titel="Redaktionell verantwortlich">
        <p>
          Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:
          <br />
          <Offen was="Name und vollständige Anschrift der verantwortlichen Person" />
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

      <Abschnitt titel="Hinweis zu KI-generierten Inhalten">
        <p>
          Teile der Inhalte dieser Website (Texte und Bilder) wurden mit
          Unterstützung von künstlicher Intelligenz erstellt und redaktionell
          geprüft.
        </p>
      </Abschnitt>
    </RechtsSeite>
  );
}
