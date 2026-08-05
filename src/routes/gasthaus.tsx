import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Beef,
  ChefHat,
  Beer,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Users,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/FadeIn";
import { Speisekarte } from "@/components/Speisekarte";
import { BILDER, SPEISEN } from "@/lib/bilder";

export const Route = createFileRoute("/gasthaus")({
  head: () => ({
    meta: [
      { title: "Gasthof Menzinger – Bayerische Wirtshausküche in Lengdorf" },
      {
        name: "description",
        content:
          "Gasthof Menzinger in Lengdorf im Isental: gutbürgerliche bayerische Küche, Räume für Feiern bis 450 Personen, eigene Metzgerei. Reservieren: 08083 374.",
      },
      { property: "og:title", content: "Gasthof Menzinger – Lengdorf im Isental" },
      {
        property: "og:description",
        content:
          "Bayerische Gastlichkeit, gutbürgerliche Küche und Räume für jeden Anlass.",
      },
      { property: "og:url", content: "/gasthaus" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/gasthaus" }],
  }),
  component: GasthausPage,
});

const NAV_LINKS = [
  { href: "#speisekarte", label: "Speisekarte" },
  { href: "#der-menzinger", label: "Der Menzinger" },
  { href: "#kueche", label: "Küche" },
  { href: "#raeume", label: "Unsere Räume" },
  { href: "#kontakt", label: "Kontakt" },
];

function GasthausPage() {
  return (
    <div className="bg-background text-text-primary">
      <Navbar
        brand="Gasthof Menzinger"
        links={NAV_LINKS}
        ctaPhone={{ label: "Reservieren: 08083 374", tel: "08083374" }}
        crossLink={{ to: "/metzgerei", label: "Zur Metzgerei" }}
      />

      <Hero />
      <Speisekarte />
      <Welcome />
      <Kitchen />
      <Rooms />
      <Gallery />
      <Contact />
      <PlaceholderSections />

      <Footer crossLink={{ to: "/metzgerei", label: "Zur Metzgerei" }} />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={BILDER.stadlWeit.src}
        srcSet={BILDER.stadlWeit.srcSet}
        sizes="100vw"
        alt={BILDER.stadlWeit.alt}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-background/60" />
      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-28 md:pt-32 md:pb-36">
        <div className="max-w-2xl bg-background/85 backdrop-blur-sm border border-accent-soft px-8 py-10 md:px-12 md:py-14">
          <div className="overline text-primary">
            Gasthof · Metzgerei · seit Generationen in Lengdorf
          </div>
          <h1 className="mt-5 font-serif text-5xl md:text-7xl font-medium leading-[1.05] tracking-tight text-text-primary">
            Gasthof
            <br />
            <span
              className="text-primary"
              style={{ fontFamily: "var(--font-script)", fontSize: "1.1em", lineHeight: 1 }}
            >
              Menzinger
            </span>
          </h1>

          <div className="mt-6 flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />
            <span className="h-px w-16 bg-accent" />
          </div>

          <p className="mt-6 text-lg text-text-secondary leading-relaxed max-w-xl">
            Die weltbekannte bayerische Gemütlichkeit – beim Menzinger wird sie gelebt.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="tel:08083374"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded text-sm font-medium tracking-wide transition-colors"
            >
              <Phone size={16} /> Tisch reservieren
            </a>
            <a
              href="#raeume"
              className="inline-flex items-center justify-center gap-2 border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded text-sm font-medium tracking-wide transition-colors"
            >
              Unsere Räume entdecken <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="mt-10 max-w-2xl bg-surface-warm/90 border-l-2 border-accent px-6 py-4 text-sm text-text-secondary">
          Täglich Mittagstisch 11:00–13:30 · Montag Ruhetag ·{" "}
          <a href="#speisekarte" className="text-primary hover:underline font-medium">
            Zur Speisekarte
          </a>
        </div>
      </div>
    </section>
  );
}

function Welcome() {
  return (
    <section id="der-menzinger" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        <FadeIn>
          <SectionHeading
            overline="Grüß Gott"
            title="Ein herzliches Grüß Gott beim Menzinger"
          />
          <div className="mt-6 space-y-5 text-text-secondary leading-relaxed text-[17px]">
            <p>
              Herzliche Gastlichkeit und heimelige Räumlichkeiten laden zu schönen Stunden ein.
              Unser gut besuchter Stammtisch ist ein Zeichen dieser Merkmale. Der Menzinger freut
              sich, als Vereinslokal die Heimat vieler Vereine zu sein.
            </p>
            <p>
              Zeitgemäße Kulinarik mit ländlichem Ambiente – ob leicht, deftig oder raffiniert,
              immer mit besonderer Güte und frischen Zutaten. Und dazu ein kühles, frisch
              gezapftes Bier. Das ist weißblaue Lebensfreude.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Feature icon={<Beef size={22} />} title="Eigene Metzgerei" />
            <Feature icon={<ChefHat size={22} />} title="Frisch & hausgemacht" />
            <Feature icon={<Beer size={22} />} title="Frisch gezapftes Bier" />
          </div>
        </FadeIn>
        <FadeIn delay={120}>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border border-accent-soft" />
            <img
              src={BILDER.stubeBuffet.src}
              srcSet={BILDER.stubeBuffet.srcSet}
              sizes="(max-width:768px) 100vw, 50vw"
              alt={BILDER.stubeBuffet.alt}
              className="relative w-full h-[520px] object-cover"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Feature({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div>
      <div className="w-11 h-11 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3">
        {icon}
      </div>
      <div className="font-serif text-xl text-text-primary">{title}</div>
    </div>
  );
}

function Kitchen() {
  return (
    <section id="kueche" className="py-24 md:py-32 bg-surface-warm">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        <FadeIn>
          <SectionHeading overline="Unsere Küche" title="Gutbürgerliche bayerische Küche" />
          <p className="mt-6 text-text-secondary leading-relaxed text-[17px] max-w-lg">
            Traditionelle bayerische und internationale Küche, frisch und hausgemacht serviert –
            dazu eine sorgfältig ausgewählte Karte nationaler und internationaler Weine.
          </p>
          <div className="mt-6 inline-flex items-center gap-3 bg-accent/10 border border-accent/30 text-accent px-4 py-2.5 text-sm">
            <Beef size={16} /> Fleisch- und Wurstwaren aus der eigenen Metzgerei Menzinger
          </div>
          <div className="mt-6 flex items-center gap-3 text-text-primary">
            <Clock size={18} className="text-primary" />
            <span className="text-[15px]">Täglich von 11:00 bis 13:30 Uhr: Mittagstisch</span>
          </div>
        </FadeIn>

        <FadeIn delay={120}>
          <div className="relative">
            <img
              src={SPEISEN.schweinebraten.src}
              srcSet={SPEISEN.schweinebraten.srcSet}
              sizes="(max-width:1024px) 100vw, 50vw"
              alt={SPEISEN.schweinebraten.alt}
              loading="lazy"
              className="w-full h-[420px] object-cover"
            />
            <a
              href="#speisekarte"
              className="mt-6 inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded text-sm font-medium tracking-wide transition-colors"
            >
              Zur Speisekarte <ArrowRight size={16} />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

const ROOMS = [
  {
    title: "Der Gastraum",
    capacity: null,
    text: "Traditionelle Gaststube für den Besuch beim Wirt.",
    image: BILDER.gastraumDecke.src,
    srcSet: BILDER.gastraumDecke.srcSet,
    alt: BILDER.gastraumDecke.alt,
  },
  {
    title: "Das Schützenzimmer",
    capacity: "bis 20 Personen",
    text: "Ruhig und in geschlossener Gesellschaft, an einem Tisch.",
    image: BILDER.saalBalken.src,
    srcSet: BILDER.saalBalken.srcSet,
    alt: BILDER.saalBalken.alt,
  },
  {
    title: "Der Saal",
    capacity: "bis 450 Personen",
    text: "Für große Veranstaltungen, unterteilbar: klein 50 / mittel 100 / groß 450 Personen.",
    image: BILDER.saalFestlich.src,
    srcSet: BILDER.saalFestlich.srcSet,
    alt: BILDER.saalFestlich.alt,
  },
  {
    title: "Der Weinstadl",
    capacity: "bis 280 Personen",
    text: "Für Messen, Events und private Feiern, besonders beliebt in den Sommermonaten.",
    image: BILDER.stadlTafeln.src,
    srcSet: BILDER.stadlTafeln.srcSet,
    alt: BILDER.stadlTafeln.alt,
  },
] as const;

function Rooms() {
  return (
    <section id="raeume" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeading overline="Feiern & tagen" title="Räume für jeden Anlass" align="center" />
          <p className="mt-6 text-text-secondary leading-relaxed max-w-2xl mx-auto text-center">
            Vom vertrauten Stammtisch bis zur großen Hochzeit – beim Menzinger findet jeder Anlass
            den passenden Raum.
          </p>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {ROOMS.map((r, i) => (
            <FadeIn key={r.title} delay={i * 80}>
              <article className="group bg-surface border border-border overflow-hidden h-full flex flex-col">
                {"image" in r && r.image ? (
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={r.image}
                      srcSet={r.srcSet}
                      sizes="(max-width:768px) 100vw, 50vw"
                      loading="lazy"
                      alt={r.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="relative aspect-[4/3] bg-surface-warm border-b border-accent-soft flex items-center justify-center">
                    <div className="text-center px-6">
                      <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3">
                        <Users size={20} />
                      </div>
                      <div className="text-xs uppercase tracking-widest text-text-secondary">
                        Foto folgt in Kürze
                      </div>
                    </div>
                  </div>
                )}
                <div className="p-7 flex-1 flex flex-col">
                  <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2 mb-3">
                    <h3 className="font-serif text-2xl text-text-primary">{r.title}</h3>
                    {r.capacity && (
                      <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs px-2.5 py-1 rounded whitespace-nowrap shrink-0">
                        <Users size={12} /> {r.capacity}
                      </span>
                    )}
                  </div>
                  <p className="text-text-secondary leading-relaxed">{r.text}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

const GALLERY = [
  BILDER.stadlLampions,
  BILDER.brauttisch,
  SPEISEN.brotzeitplatte,
  SPEISEN.kaiserschmarrn,
  BILDER.saalParkett,
  SPEISEN.rostbraten,
];

function Gallery() {
  return (
    <section className="py-24 md:py-32 bg-surface-warm">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeading overline="Impressionen" title="Zu Gast beim Menzinger" align="center" />
        </FadeIn>
        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY.map((g, i) => (
            <FadeIn key={g.src} delay={i * 60}>
              <div className="overflow-hidden rounded group aspect-[4/3]">
                <img
                  src={g.src}
                  srcSet={g.srcSet}
                  sizes="(max-width:768px) 50vw, 33vw"
                  alt={g.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="kontakt" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="bg-surface-warm border border-accent-soft p-8 md:p-14 grid grid-cols-1 md:grid-cols-2 gap-12">
          <FadeIn>
            <div className="overline text-primary mb-4">Öffnungszeiten</div>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Wann Sie uns finden</h2>
            <ul className="space-y-3 text-text-primary">
              <li className="flex justify-between gap-4 border-b border-accent-soft/60 pb-2">
                <span className="text-text-secondary">Montag</span>
                <span>Ruhetag</span>
              </li>
              <li className="flex justify-between gap-4 border-b border-accent-soft/60 pb-2">
                <span className="text-text-secondary">Dienstag</span>
                <span className="tabular-nums">9:00 – 14:00</span>
              </li>
              <li className="flex justify-between gap-4 border-b border-accent-soft/60 pb-2">
                <span className="text-text-secondary">Mi · Do · Fr · Sa</span>
                <span className="tabular-nums text-right">
                  9:00 – 14:00
                  <br />
                  17:00 – ?
                </span>
              </li>
              <li className="flex justify-between gap-4 border-b border-accent-soft/60 pb-2">
                <span className="text-text-secondary">Sonntag</span>
                <span className="tabular-nums">9:00 – 14:00</span>
              </li>
              <li className="flex justify-between gap-4 border-b border-accent-soft/60 pb-2">
                <span className="text-text-secondary">Täglich Mittagstisch</span>
                <span className="tabular-nums">11:00 – 13:30</span>
              </li>
            </ul>
            <p className="mt-6 text-sm text-text-secondary italic">
              oder nach Vereinbarung
            </p>
            <div className="mt-6 border-t border-accent-soft/60 pt-5">
              <div className="text-text-primary">Events nach Absprache</div>
              <a
                href="tel:01728032647"
                className="mt-1 inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors font-medium"
              >
                <Phone size={16} /> 0172 / 8032647
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="overline text-primary mb-4">Kontakt</div>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Grüß Gott anrufen</h2>
            <address className="not-italic space-y-4 text-text-primary">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-accent" />
                <span>
                  Gasthof Menzinger<br />
                  Hauptstraße 2<br />
                  84435 Lengdorf
                </span>
              </div>
              <a
                href="tel:08083374"
                className="flex items-center gap-3 text-primary font-serif text-3xl md:text-4xl hover:text-primary-dark transition-colors"
              >
                <Phone size={26} /> 08083 / 374
              </a>
              <a
                href="mailto:gasthaus@menzinger-lengdorf.de"
                className="flex items-center gap-3 text-text-primary hover:text-primary transition-colors"
              >
                <Mail size={18} className="text-accent" />
                gasthaus@menzinger-lengdorf.de
              </a>
            </address>

            <a
              href="https://maps.google.com/?q=Hauptstraße+2+84435+Lengdorf"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 border border-primary text-primary hover:bg-primary hover:text-white px-5 py-2.5 rounded text-sm transition-colors"
            >
              Route planen <ArrowRight size={16} />
            </a>
          </FadeIn>
        </div>

        <Karte />
      </div>
    </section>
  );
}

/**
 * Die Karte lädt erst auf Klick. Ohne Einwilligung geht keine IP-Adresse
 * an OpenStreetMap – dadurch ist beim Seitenaufruf kein Drittanbieter
 * eingebunden und es wird kein Cookie-Banner nötig.
 */
function Karte() {
  const [geladen, setGeladen] = useState(false);

  return (
    <div className="mt-8 aspect-[4/3] sm:aspect-[16/6] w-full overflow-hidden border border-border bg-surface-warm">
      {geladen ? (
        <iframe
          title="Karte: Gasthof Menzinger, Hauptstraße 2, 84435 Lengdorf"
          src="https://www.openstreetmap.org/export/embed.html?bbox=12.2183%2C48.2793%2C12.2483%2C48.2893&layer=mapnik&marker=48.2843%2C12.2333"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center text-center px-6 py-8">
          <MapPin size={28} className="text-accent mb-3" />
          <p className="text-text-primary font-serif text-xl">
            Hauptstraße 2 · 84435 Lengdorf
          </p>
          <p className="mt-3 text-sm text-text-secondary max-w-md leading-relaxed">
            Die Karte wird von OpenStreetMap geladen. Dabei wird Ihre
            IP-Adresse an OpenStreetMap übertragen.
          </p>
          <button
            type="button"
            onClick={() => setGeladen(true)}
            className="mt-5 inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-3 rounded text-sm font-medium transition-colors cursor-pointer min-h-11"
          >
            Karte laden
          </button>
          <a
            href="https://maps.google.com/?q=Hauptstraße+2+84435+Lengdorf"
            target="_blank"
            rel="noreferrer"
            className="mt-3 text-sm text-primary hover:text-primary-dark underline underline-offset-4"
          >
            Stattdessen in Google Maps öffnen
          </a>
        </div>
      )}
    </div>
  );
}

function PlaceholderSections() {
  return (
    <section className="py-20 md:py-24 bg-surface-warm border-t border-border">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        <PlaceholderCard
          overline="Veranstaltungen"
          title="Was bei uns los ist"
          text="Aktuelle Termine folgen in Kürze."
        >
          <div className="mt-6 flex gap-2">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="flex-1 h-16 bg-background border border-border" />
            ))}
          </div>
        </PlaceholderCard>

        <PlaceholderCard
          overline="Reservierung"
          title="Reservieren Sie Ihren Tisch"
          text="Reservieren Sie telefonisch oder per Anfrage – ein Formular folgt in Kürze."
        >
          <a
            href="tel:08083374"
            className="mt-6 inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-3 rounded text-sm transition-colors"
          >
            <Phone size={16} /> 08083 / 374
          </a>
        </PlaceholderCard>

        <PlaceholderCard
          overline="Chronik"
          title="Die Geschichte unseres Hauses"
          text="Die Chronik des Menzinger folgt demnächst."
        />

        <PlaceholderCard
          overline="Metzgerei Menzinger"
          title="Aus eigener Herstellung"
          text="Fleisch- und Wurstwaren aus dem eigenen Haus – bester Rohstoff für unsere Küche."
        >
          <Link
            to="/metzgerei"
            className="mt-6 inline-flex items-center gap-2 border border-accent text-accent hover:bg-accent hover:text-white px-5 py-3 rounded text-sm transition-colors"
          >
            Zur Metzgerei <ArrowRight size={16} />
          </Link>
        </PlaceholderCard>
      </div>
    </section>
  );
}

function PlaceholderCard({
  overline,
  title,
  text,
  children,
}: {
  overline: string;
  title: string;
  text: string;
  children?: React.ReactNode;
}) {
  return (
    <FadeIn>
      <div className="bg-surface border border-border p-8 h-full">
        <div className="overline text-primary mb-2">{overline}</div>
        <h3 className="font-serif text-2xl mb-3">{title}</h3>
        <p className="text-text-secondary leading-relaxed">{text}</p>
        {children}
      </div>
    </FadeIn>
  );
}
