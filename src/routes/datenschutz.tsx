import { createFileRoute } from "@tanstack/react-router";
import { RechtsSeite, Abschnitt } from "@/components/RechtsSeite";

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
          Gasthof Menzinger, Georg Menzinger
          <br />
          Hauptstraße 2, 84435 Lengdorf
          <br />
          Telefon: 08083 / 374
          <br />
          E-Mail: gmenzinger@t-online.de
        </p>
        <p>
          Metzgerei Menzinger, Georg Menzinger
          <br />
          Hauptstraße 2a, 84435 Lengdorf
          <br />
          Telefon: 08083 / 547 124
          <br />
          E-Mail: info@menzinger-lengdorf.de
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
          Speicherdauer: Die Zugriffsprotokolle einschließlich der IP-Adressen
          werden von unserem Hosting-Anbieter für weniger als 30 Tage
          gespeichert und danach automatisch gelöscht.
        </p>
      </Abschnitt>

      <Abschnitt titel="Hosting">
        <p>
          Diese Website wird gehostet bei:
          <br />
          Netlify, Inc.
          <br />
          101 2nd Street, San Francisco, CA 94105, USA
        </p>
        <p>
          Der Anbieter verarbeitet die oben genannten Server-Logfiles in unserem
          Auftrag. Mit dem Anbieter besteht ein Vertrag über
          Auftragsverarbeitung gemäß Art. 28 DSGVO.
        </p>
        <p>
          Da Netlify seinen Sitz in den USA hat, können dabei personenbezogene
          Daten in ein Drittland übertragen werden. Netlify, Inc. ist nach dem
          EU-U.S. Data Privacy Framework zertifiziert (Angemessenheitsbeschluss
          der EU-Kommission vom 10. Juli 2023). Ergänzend hat Netlify die von
          der EU-Kommission erlassenen Standardvertragsklauseln nach
          Durchführungsbeschluss (EU) 2021/914 vereinbart. Rechtsgrundlage der
          Übermittlung ist Art. 45 bzw. Art. 46 Abs. 2 lit. c DSGVO.
        </p>
        <p>
          Weitere Informationen:{" "}
          <a
            href="https://www.netlify.com/privacy/"
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:underline break-words"
          >
            netlify.com/privacy
          </a>
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
