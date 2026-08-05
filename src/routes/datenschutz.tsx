import { createFileRoute } from "@tanstack/react-router";
import { RechtsSeite, Abschnitt, Offen } from "@/components/RechtsSeite";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutzerklärung – Gasthof & Metzgerei Menzinger" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: DatenschutzPage,
});

function DatenschutzPage() {
  return (
    <RechtsSeite titel="Datenschutzerklärung" stand="August 2026">
      <Abschnitt titel="Verantwortlicher">
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne
          der Datenschutz-Grundverordnung (DSGVO) ist:
        </p>
        <p>
          <Offen was="Vollständiger Firmenname inkl. Rechtsform" />
          <br />
          Hauptstraße 2, 84435 Lengdorf
          <br />
          Telefon: 08083 / 374
          <br />
          E-Mail: gasthaus@menzinger-lengdorf.de
        </p>
      </Abschnitt>

      <Abschnitt titel="Überblick">
        <p>
          Diese Website ist bewusst datensparsam aufgebaut. Sie setzt{" "}
          <strong>keine Cookies</strong>, bindet{" "}
          <strong>keine Analyse- oder Tracking-Dienste</strong> ein und lädt{" "}
          <strong>keine Schriften oder Skripte von fremden Servern</strong>. Es
          gibt kein Kontaktformular und keine Benutzerkonten.
        </p>
        <p>
          Personenbezogene Daten werden nur in dem Umfang verarbeitet, der zum
          technischen Betrieb der Website erforderlich ist.
        </p>
      </Abschnitt>

      <Abschnitt titel="Aufruf der Website (Server-Logfiles)">
        <p>
          Beim Aufruf dieser Website werden durch den Hosting-Anbieter
          automatisch Informationen erfasst, die Ihr Browser übermittelt. Dies
          sind in der Regel: IP-Adresse, Datum und Uhrzeit des Zugriffs, die
          aufgerufene Seite, die zuvor besuchte Seite (Referrer), verwendeter
          Browser und Betriebssystem.
        </p>
        <p>
          Diese Daten sind für uns nicht bestimmten Personen zuordenbar und
          werden nicht mit anderen Datenquellen zusammengeführt. Die
          Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir
          haben ein berechtigtes Interesse an der technisch fehlerfreien
          Darstellung und der Sicherheit unserer Website.
        </p>
        <p>
          Speicherdauer: <Offen was="Löschfrist des Hosters eintragen, üblich sind 7 bis 30 Tage" />
        </p>
      </Abschnitt>

      <Abschnitt titel="Hosting">
        <p>
          Diese Website wird gehostet bei:
          <br />
          <Offen was="Name und Anschrift des Hosting-Anbieters" />
        </p>
        <p>
          Der Anbieter verarbeitet die oben genannten Server-Logfiles in unserem
          Auftrag. Mit dem Anbieter besteht ein Vertrag über
          Auftragsverarbeitung gemäß Art. 28 DSGVO.
        </p>
        <p>
          <Offen was="Falls der Hoster außerhalb der EU sitzt oder Daten dorthin überträgt, muss hier die Rechtsgrundlage für den Drittlandtransfer ergänzt werden (z. B. EU-Standardvertragsklauseln)" />
        </p>
      </Abschnitt>

      <Abschnitt titel="Schriftarten">
        <p>
          Die auf dieser Website verwendeten Schriftarten werden von unserem
          eigenen Server ausgeliefert. Es besteht dabei{" "}
          <strong>keine Verbindung zu Servern von Google</strong> oder anderen
          Dritten. Ihre IP-Adresse wird hierfür nicht an Dritte übertragen.
        </p>
      </Abschnitt>

      <Abschnitt titel="Kartendarstellung (OpenStreetMap)">
        <p>
          Auf der Seite des Gasthauses bieten wir eine Karte von OpenStreetMap
          an. Anbieter ist die OpenStreetMap Foundation, St John&apos;s
          Innovation Centre, Cowley Road, Cambridge, CB4 0WS, Vereinigtes
          Königreich.
        </p>
        <p>
          Die Karte wird <strong>nicht automatisch geladen</strong>. Erst wenn
          Sie aktiv auf „Karte laden“ klicken, wird eine Verbindung zu den
          Servern von OpenStreetMap hergestellt und dabei Ihre IP-Adresse
          übertragen. Rechtsgrundlage ist Ihre Einwilligung nach Art. 6 Abs. 1
          lit. a DSGVO, die Sie durch den Klick erteilen. Sie können die Karte
          jederzeit ungenutzt lassen; die Adresse ist auch ohne Karte
          vollständig angegeben.
        </p>
        <p>
          Informationen zum Datenschutz bei OpenStreetMap:{" "}
          <a
            href="https://osmfoundation.org/wiki/Privacy_Policy"
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:underline break-words"
          >
            osmfoundation.org/wiki/Privacy_Policy
          </a>
        </p>
      </Abschnitt>

      <Abschnitt titel="Kontaktaufnahme">
        <p>
          Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir die
          von Ihnen mitgeteilten Daten ausschließlich zur Bearbeitung Ihres
          Anliegens, etwa einer Tischreservierung. Rechtsgrundlage ist Art. 6
          Abs. 1 lit. b DSGVO bei vorvertraglichen Maßnahmen, im Übrigen Art. 6
          Abs. 1 lit. f DSGVO.
        </p>
        <p>
          Wir löschen diese Daten, sobald sie für den Zweck nicht mehr
          erforderlich sind und keine gesetzlichen Aufbewahrungspflichten
          entgegenstehen.
        </p>
      </Abschnitt>

      <Abschnitt titel="Cookies und lokale Speicherung">
        <p>
          Diese Website setzt keine Cookies. Für die Wiederherstellung der
          Scroll-Position beim Zurücknavigieren wird ein Eintrag im
          Sitzungsspeicher (sessionStorage) Ihres Browsers verwendet. Dieser
          Eintrag ist technisch notwendig im Sinne des § 25 Abs. 2 TDDDG, wird
          nicht ausgewertet, nicht übertragen und beim Schließen des Browsers
          automatisch gelöscht.
        </p>
      </Abschnitt>

      <Abschnitt titel="Ihre Rechte">
        <p>Sie haben jederzeit das Recht auf:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Auskunft über die zu Ihrer Person gespeicherten Daten (Art. 15 DSGVO)</li>
          <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
          <li>Löschung (Art. 17 DSGVO)</li>
          <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
        </ul>
        <p>
          Wenden Sie sich dafür an die oben genannten Kontaktdaten. Erteilte
          Einwilligungen können Sie jederzeit mit Wirkung für die Zukunft
          widerrufen.
        </p>
      </Abschnitt>

      <Abschnitt titel="Beschwerderecht bei der Aufsichtsbehörde">
        <p>
          Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu
          beschweren. Zuständig ist für uns:
        </p>
        <p>
          Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)
          <br />
          Promenade 18, 91522 Ansbach
          <br />
          <a
            href="https://www.lda.bayern.de"
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:underline"
          >
            www.lda.bayern.de
          </a>
        </p>
      </Abschnitt>

      <Abschnitt titel="SSL-/TLS-Verschlüsselung">
        <p>
          Diese Website nutzt zum Schutz der Übertragung eine SSL-/TLS-
          Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran,
          dass die Adresszeile des Browsers mit „https://“ beginnt.
        </p>
      </Abschnitt>
    </RechtsSeite>
  );
}
