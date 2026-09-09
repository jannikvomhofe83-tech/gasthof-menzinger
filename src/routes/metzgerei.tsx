import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Phone,
  ArrowRight,
  MapPin,
  Mail,
  Beef,
  Sandwich,
  Flame,
  Package,
  Sprout,
  HandPlatter,
  ShieldCheck,
  Award,
  Heart,
  Leaf,
  Utensils,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/FadeIn";
import { BildHinweis, HINWEIS_LANG } from "@/components/BildHinweis";
import heroImg from "@/assets/metzgerei-hero.jpg";
import aboutImg from "@/assets/metzgerei-about.jpg";
import katFrischfleisch from "@/assets/kat-frischfleisch.jpg";
import katWurst from "@/assets/kat-wurst.jpg";
import katGeraeuchert from "@/assets/kat-geraeuchert.jpg";
import katBrotzeit from "@/assets/kat-brotzeit.jpg";
import katParty from "@/assets/kat-party.jpg";
import warum1 from "@/assets/warum-1.jpg";
import warum2 from "@/assets/warum-2.jpg";

export const Route = createFileRoute("/metzgerei")({
  head: () => ({
    meta: [
      { title: "Metzgerei Menzinger – Handwerk aus Lengdorf" },
      {
        name: "description",
        content:
          "Familienmetzgerei Menzinger in Lengdorf: regionale Fleisch- und Wurstwaren aus eigener Herstellung, langjährige Erfahrung, beste Qualität.",
      },
      { property: "og:title", content: "Metzgerei Menzinger – Handwerk aus Lengdorf" },
      {
        property: "og:description",
        content:
          "Familienbetrieb mit langjähriger Erfahrung – regionale Fleisch- und Wurstwaren in bester Qualität.",
      },
      { property: "og:url", content: "/metzgerei" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/metzgerei" }],
  }),
  component: MetzgereiPage,
});

const NAV_LINKS = [
  { href: "#ueber", label: "Unsere Metzgerei" },
  { href: "#warum", label: "Was uns ausmacht" },
  { href: "#sortiment", label: "Sortiment" },
  { href: "#kontakt", label: "Kontakt" },
];

function MetzgereiPage() {
  return (
    <div className="bg-background text-text-primary">
      <Navbar
        brand="Metzgerei Menzinger"
        links={NAV_LINKS}
        ctaPhone={{ label: "Anrufen: 08083 547 124", tel: "08083547124" }}
        crossLink={{ to: "/gasthaus", label: "Zum Gasthaus" }}
        variant="meat"
      />

      <Hero />
      <About />
      <Warum />
      <Assortment />
      <Party />
      <Bridge />
      <Contact />

      <Footer variant="meat" crossLink={{ to: "/gasthaus", label: "Zum Gasthaus" }} />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={heroImg}
        alt="Auslage der Metzgerei Menzinger mit Wurst- und Fleischwaren aus eigener Herstellung"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-background/72" />
      <BildHinweis
        text={HINWEIS_LANG}
        className="absolute bottom-3 right-4 left-4 z-10 text-right"
      />
      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-28 md:pt-32 md:pb-36">
        <div className="max-w-2xl bg-background/85 backdrop-blur-sm border border-accent-soft px-8 py-10 md:px-12 md:py-14">
          <div className="overline text-meat">Familienmetzgerei · seit Generationen in Lengdorf</div>
          <h1 className="mt-5 font-serif text-5xl md:text-7xl font-medium leading-[1.05] tracking-tight text-text-primary">
            Metzgerei
            <br />
            <span
              className="text-meat"
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
            Regionale Fleisch- und Wurstwaren aus eigener Herstellung – ehrliches
            Metzgerhandwerk aus dem Isental.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#sortiment"
              className="inline-flex items-center justify-center gap-2 bg-meat hover:bg-meat-dark text-white px-6 py-3 rounded text-sm font-medium tracking-wide transition-colors"
            >
              Unser Sortiment <ArrowRight size={16} />
            </a>
            <a
              href="tel:08083547124"
              className="inline-flex items-center justify-center gap-2 border border-meat text-meat hover:bg-meat hover:text-white px-6 py-3 rounded text-sm font-medium tracking-wide transition-colors"
            >
              <Phone size={16} /> 08083 / 547 124
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="ueber" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        <FadeIn>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border border-accent-soft" />
            <img
              src={aboutImg}
              alt="Geräucherte Würste und Schinken in der Metzgerei Menzinger"
              loading="lazy"
              className="relative w-full h-[520px] object-cover"
            />
            <BildHinweis text={HINWEIS_LANG} className="relative mt-2" />
          </div>
        </FadeIn>
        <FadeIn delay={120}>
          <SectionHeading
            overline="Unser Handwerk"
            title="Ein Familienbetrieb mit langjähriger Erfahrung"
            color="meat"
          />
          <div className="mt-6 space-y-4 text-text-secondary leading-relaxed text-[17px]">
            <p>
              Seit Generationen steht der Name Menzinger in Lengdorf für ehrliches
              Metzgerhandwerk. Als Familienbetrieb legen wir Wert auf das, was zählt:
              regionale Herkunft, sorgfältige Verarbeitung und ein gutes Verhältnis zu
              unseren Kundinnen und Kunden.
            </p>
            <p>
              Wir setzen ausschließlich auf beste Ware – frisches Fleisch von Tieren aus
              der Region und Wurstwaren, die wir nach überlieferten Rezepten selbst
              herstellen.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Feature icon={<HandPlatter size={22} />} title="Eigene Herstellung" />
            <Feature icon={<Sprout size={22} />} title="Regionale Tiere" />
            <Feature icon={<ShieldCheck size={22} />} title="Beste Qualität" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Feature({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div>
      <div className="w-11 h-11 rounded-full bg-meat/10 text-meat flex items-center justify-center mb-3">
        {icon}
      </div>
      <div className="font-serif text-xl text-text-primary">{title}</div>
    </div>
  );
}

const REASONS = [
  {
    icon: <Leaf size={22} />,
    title: "Regionale Herkunft",
    text: "Unser Fleisch stammt von Höfen aus der Region – kurze Wege, bekannte Betriebe, artgerechte Haltung.",
  },
  {
    icon: <Heart size={22} />,
    title: "Familienbetrieb",
    text: "Geführt in Familientradition. Bei uns kaufen Sie nicht anonym ein – wir kennen unsere Ware und unsere Kunden.",
  },
  {
    icon: <Award size={22} />,
    title: "Langjährige Erfahrung",
    text: "Über Generationen weitergegebenes Wissen und ein Metzgerhandwerk, das mit Sorgfalt gepflegt wird.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Nur beste Ware",
    text: "Wir setzen kompromisslos auf Qualität – ausgesuchte Rohstoffe, sorgfältige Verarbeitung, ehrliche Rezepte.",
  },
];

function Warum() {
  return (
    <section id="warum" className="py-24 md:py-32 bg-surface-warm">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeading
            overline="Was uns ausmacht"
            title="Warum bei uns kaufen"
            align="center"
            color="meat"
          />
          <p className="mt-6 text-text-secondary max-w-2xl mx-auto text-center leading-relaxed">
            Vier Dinge, auf die Sie sich bei der Metzgerei Menzinger verlassen können.
          </p>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 items-stretch">
          <FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 h-full">
              {REASONS.map((r) => (
                <div
                  key={r.title}
                  className="bg-surface border border-border p-6 flex flex-col"
                >
                  <div className="w-11 h-11 rounded-full bg-meat/10 text-meat flex items-center justify-center mb-4">
                    {r.icon}
                  </div>
                  <h3 className="font-serif text-xl mb-2 text-text-primary">
                    {r.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{r.text}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <div className="grid grid-rows-[1.4fr_1fr] gap-5 h-full min-h-[520px]">
              <div className="relative overflow-hidden">
                <img
                  src={warum1}
                  alt="Metzgermeister schneidet Wurst aus eigener Herstellung"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <BildHinweis tone="dunkel" className="absolute bottom-2 left-3 right-3" />
              </div>
              <div className="relative overflow-hidden">
                <img
                  src={warum2}
                  alt="Rinder auf einer Weide im Isental – regionale Herkunft"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <BildHinweis tone="dunkel" className="absolute bottom-2 left-3 right-3" />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

const CATEGORIES = [
  {
    icon: <Beef size={22} />,
    title: "Frischfleisch",
    text: "Rind, Schwein und Kalb von Tieren aus der Region – frisch aus der Theke.",
    image: katFrischfleisch,
    alt: "Frisches Rind- und Schweinefleisch auf einem Holzbrett",
  },
  {
    icon: <Sandwich size={22} />,
    title: "Wurst & Aufschnitt",
    text: "Hausgemachte Wurstsorten nach überlieferten Familienrezepten.",
    image: katWurst,
    alt: "Auslage mit hausgemachten Wurstsorten und Aufschnitt",
  },
  {
    icon: <Flame size={22} />,
    title: "Geräuchertes",
    text: "Schinken und Speck aus unserer eigenen Räucherei.",
    image: katGeraeuchert,
    alt: "Geräucherte Schinken hängen in der Räucherkammer",
  },
  {
    icon: <Utensils size={22} />,
    title: "Brotzeit-Sortiment",
    text: "Feiner Aufschnitt, Wurstspezialitäten und Zutaten für eine zünftige Brotzeit daheim.",
    image: katBrotzeit,
    alt: "Brotzeitplatte mit Wurst, Schinken und Brezn",
  },
  {
    icon: <Package size={22} />,
    title: "Partyservice & Platten",
    text: "Kalte Platten und Buffets auf Bestellung – für Feiern jeder Größe.",
    image: katParty,
    alt: "Elegant belegte Wurstplatte für den Partyservice",
  },
];

function Assortment() {
  return (
    <section id="sortiment" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeading
            overline="Sortiment"
            title="Aus unserer Theke"
            align="center"
            color="meat"
          />
          <p className="mt-6 text-text-secondary max-w-2xl mx-auto text-center leading-relaxed">
            Ein Auszug aus dem, was Sie bei uns finden – kommen Sie gern vorbei und lassen
            Sie sich beraten.
          </p>
        </FadeIn>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((c, i) => (
            <FadeIn key={c.title} delay={i * 70}>
              <article className="group bg-surface border border-border overflow-hidden h-full flex flex-col">
                <div className="aspect-[5/3] overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <BildHinweis className="mb-3" />
                  <div className="w-10 h-10 rounded-full bg-meat/10 text-meat flex items-center justify-center mb-3">
                    {c.icon}
                  </div>
                  <h3 className="font-serif text-xl mb-2">{c.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{c.text}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Party() {
  return (
    <section className="py-20 md:py-24 bg-surface-warm">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="bg-meat text-white p-10 md:p-14 grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-10 items-center">
            <div>
              <div className="overline text-white/70 mb-3">Partyservice</div>
              <h2 className="font-serif text-3xl md:text-4xl leading-tight">
                Platten und Buffets für Ihre Feier
              </h2>
              <p className="mt-4 text-white/85 leading-relaxed max-w-lg">
                Ob Geburtstag, Familienfeier oder Vereinsabend – wir stellen Ihnen kalte
                Platten und Buffets nach Ihren Wünschen zusammen. Bestellung telefonisch.
              </p>
            </div>
            <div className="md:text-right">
              <a
                href="tel:08083547124"
                className="inline-flex items-center gap-3 bg-white text-meat hover:bg-background px-6 py-4 rounded text-lg font-serif transition-colors"
              >
                <Phone size={20} /> 08083 / 547 124
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Bridge() {
  return (
    <section className="py-20 border-y border-border">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <FadeIn>
          <div className="overline text-meat mb-4">Menzinger Welt</div>
          <h2 className="font-serif text-3xl md:text-4xl">
            Unsere Küche im Gasthof kocht mit Fleisch aus der eigenen Metzgerei.
          </h2>
          <Link
            to="/gasthaus"
            className="mt-8 inline-flex items-center gap-2 border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded text-sm transition-colors"
          >
            Zum Gasthaus <ArrowRight size={16} />
          </Link>
        </FadeIn>
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
            <div className="overline text-meat mb-4">Öffnungszeiten</div>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Wann Sie uns finden</h2>
            <ul className="space-y-3 text-text-primary">
              <li className="flex justify-between gap-4 border-b border-accent-soft/60 pb-2">
                <span className="text-text-secondary">Montag</span>
                <span className="tabular-nums">6:30 – 12:30</span>
              </li>
              <li className="flex justify-between gap-4 border-b border-accent-soft/60 pb-2">
                <span className="text-text-secondary">Dienstag – Freitag</span>
                <span className="tabular-nums">6:30 – 18:00</span>
              </li>
              <li className="flex justify-between gap-4 border-b border-accent-soft/60 pb-2">
                <span className="text-text-secondary">Samstag</span>
                <span className="tabular-nums">6:30 – 12:00</span>
              </li>
              <li className="flex justify-between gap-4 border-b border-accent-soft/60 pb-2">
                <span className="text-text-secondary">Sonntag</span>
                <span>geschlossen</span>
              </li>
            </ul>
            <p className="mt-6 text-sm text-text-secondary italic">
              An Feiertagen können die Zeiten abweichen.
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="overline text-meat mb-4">Kontakt</div>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Direkt zum Metzger</h2>
            <address className="not-italic space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-accent" />
                <span>
                  Metzgerei Menzinger<br />
                  Hauptstraße 2a<br />
                  84435 Lengdorf
                </span>
              </div>
              <a
                href="tel:08083547124"
                className="flex items-center gap-3 text-meat font-serif text-3xl md:text-4xl hover:text-meat-dark transition-colors"
              >
                <Phone size={26} /> 08083 / 547 124
              </a>
              <a
                href="mailto:info@menzinger-lengdorf.de"
                className="flex items-center gap-3 hover:text-meat transition-colors"
              >
                <Mail size={18} className="text-accent" />
                info@menzinger-lengdorf.de
              </a>
            </address>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
