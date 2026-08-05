import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";

/* ------------------------------------------------------------------ *
 * Inhalte 1:1 von den Original-Karten des Gasthof Menzinger übernommen.
 * Schreibweisen, Zusatzstoff-Ziffern und Preisformate sind bewusst
 * unverändert gelassen.
 * ------------------------------------------------------------------ */

type Item = {
  name: string;
  desc?: string;
  /** Zusatzstoff-Ziffern wie im Original, z. B. "2/3" */
  add?: string;
  unit?: string;
  price?: string;
};

type Group = {
  title?: string;
  /** Trennzeichen aus dem Original, z. B. "**********" */
  divider?: string;
  items: Item[];
  /** Kleingedrucktes, das im Original direkt unter dieser Gruppe steht */
  note?: string;
};

type Card = {
  id: string;
  tab: string;
  title: string;
  subtitle?: string;
  groups: Group[];
  footnotes?: string[];
};

const TAGESKARTE: Card = {
  id: "tageskarte",
  tab: "Tageskarte",
  title: "Tageskarte",
  groups: [
    {
      items: [
        { name: "Pfannkuchensuppe", price: "4.20 €" },
        { name: "Kleiner Beilagensalat", price: "4.50 €" },
      ],
    },
    {
      divider: "**********",
      items: [
        {
          name: "Schweinebraten aus dem Holzofen,",
          desc: "mit Semmelknödel und Sauerkaut",
          price: "11.20 €",
        },
        {
          name: "Schnitzel „Wiener Art“ mit Champignionsoße",
          desc: "dazu Pommes frites oder Kartoffelsalat",
          price: "12.90 €",
        },
        {
          name: "Putensteak vom Grill,",
          desc: "mit Pommes frites, Kräuterbutter und Babysalat",
          price: "13.90 €",
        },
        {
          name: "Wirtsteller: Gemischter Braten vom Rind/Schwein",
          desc: "mit Kartoffelknödel und Blaukraut",
          price: "14.80 €",
        },
        { name: "Schaschlikpfanne mit Pommes frites", price: "13.50 €" },
        {
          name: "Fisch: Rotbarsch paniert und gebacken",
          desc: "mit Kartoffelsalat und Soße Remoulade",
          price: "11.50 €",
        },
        {
          name: "Großer Salatteller mit Hausdressing",
          desc: "- dazu gebratene Ochsenfetz`n",
          price: "15.50 €",
        },
        { name: "Rahmschwammerl mit Semmelknödel", price: "9.50 €" },
        { name: "Essigknödel mit Zwiebelringen", price: "6.80 €" },
      ],
    },
    {
      divider: "******",
      items: [
        { name: "Affogato: Espresso mit Vanilleeis", price: "3.90 €" },
        {
          name: "Kaiserschmarrn mit Apfelmus serviert im Pfander`l",
          price: "8.90 €",
        },
        { name: "Vanilleeis mit heißen Himbeeren", price: "6.90 €" },
      ],
    },
  ],
};

const BROTZEITKARTE: Card = {
  id: "brotzeitkarte",
  tab: "Brotzeitkarte",
  title: "Brotzeitkarte",
  groups: [
    {
      title: "Aus der Wurstkuchl:",
      items: [
        {
          name: "2 Paar Schweinswürstl mit Kraut und Semmel",
          add: "2/3",
          price: "6.80 €",
        },
        {
          name: "2 Paar Bratwürstl mit Kartoffelsalat und Semmel",
          add: "2/3",
          price: "6.80 €",
        },
        {
          name: "3 Stk. Wollwürste mit Kartoffelsalat und Semmel",
          add: "2/3",
          price: "6.80 €",
        },
      ],
    },
    {
      title: "Brotzeiten:",
      items: [
        { name: "Wurstsalat bayrisch mit Semmel", add: "3/", price: "6.80 €" },
        { name: "Wurstsalat schweiz. mit Semmel", add: "3/", price: "7.80 €" },
        {
          name: "Leberkäse kalt mit Garnitur und Semmel",
          add: "3/",
          price: "6.80 €",
        },
        {
          name: "Leberkäse abgebräunt mit Spiegelei,",
          desc: "Kartoffelsalat und Semmel",
          add: "3/",
          price: "8.80 €",
        },
        {
          name: "Portion Kalter Braten (Schwein) mit Garniture u. Semmel",
          price: "9.80 €",
        },
        { name: "Scheibe Brot/Semmel", price: "1.00 €" },
        { name: "Breze", price: "1.20 €" },
      ],
      note: "Zusatzstoffverzeichnis: 1 = Konservierungsstoffe/ 2 = Geschmacks-Verstärker/ 3 = Phosphat/ 4 = Farbstoff/ 5 = Süßungsmittel/ 6 = Koffeinhaltig",
    },
    {
      title: "Schnaps aus Österreich:",
      items: [
        { name: "von Prince : Willi und Marille", price: "3.90 €" },
        {
          name: "Schnaps von : Psenner: Haselnuss / Haselnusslikör / Obstler",
        },
        { name: "Willi / Marille / Honig – Williams", price: "3.90 €" },
      ],
    },
  ],
  footnotes: [
    "Sämtliche Biere von Privatbrauerei Schweiger – Markt Schwaben",
    "Weißbier vom Unertl - Haag",
  ],
};

const GETRAENKEKARTE: Card = {
  id: "getraenkekarte",
  tab: "Getränkekarte",
  title: "Getränkekarte",
  subtitle: "ab 1. September 2025",
  groups: [
    {
      items: [
        {
          name: "Hell , Weißbier, Dunkles Weißbier,",
          desc: "Alkohlfrei Hell/Weißbier, Radler/Ruß Altschwabener Dunkel, Sportweiße, ect.",
          unit: "0.5l",
          price: "3.80 €",
        },
        {
          name: "Aperol Spritz / Santi Spritz / Hugo",
          unit: "- Glas",
          price: "6.90 €",
        },
      ],
    },
    {
      items: [
        { name: "Schnaps", price: "3.90 €" },
        { name: "Rüscherl", price: "4.20 €" },
        { name: "Longdrink", price: "5.00 €" },
        { name: "Prince – Willi/Marille", price: "4.30 €" },
      ],
    },
    {
      items: [
        {
          name: "Alkoholfreie Biere (Weißbier/Hell)",
          unit: "0.5l",
          price: "3.80 €",
        },
      ],
    },
    {
      items: [
        {
          name: "Orangenlimo, Zitronenlimo, Spezi,",
          desc: "Wasser, Stilles Wasser, Cola, Fanta",
          unit: "0.5l",
          price: "3.80 €",
        },
        {
          name: "Weinschorle rot/weiß (Tafelwein)",
          unit: "0.5l",
          price: "4.00 €",
        },
        {
          name: "Fruchtschorle",
          desc: "Apfel/Orangen/Traube/Johannisbeere/Kirsch)",
          unit: "0.5l",
          price: "3.80 €",
        },
      ],
    },
    {
      items: [
        { name: "Kleine Getränke", unit: "0.25l", price: "2.10 €" },
        { name: "Goaßmaß-Laternermaß", price: "9.50 €" },
      ],
    },
    {
      items: [
        { name: "Flasche Sekt", unit: "0.75l", price: "15.50 €" },
        { name: "Schoppen Wein", price: "4.30 €" },
      ],
    },
    {
      divider: "**********************************************",
      items: [
        { name: "Tasse Kaffee", price: "2.50 €" },
        { name: "Portion Kaffee", price: "5.00 €" },
        { name: "Haferl Kaffee", price: "2.90 €" },
        { name: "Latte Macchiato", price: "3.90 €" },
        { name: "Cappuccino", price: "2.30 €" },
        { name: "Cappuccino groß", price: "4.60 €" },
        { name: "Espresso", price: "1.80 €" },
        { name: "Milchkaffee", price: "2.90 €" },
        { name: "Heiße Schokolade", price: "2.60 €" },
        {
          name: "Glas Tee",
          desc: "(Kamille/Pfefferminze/Schwarztee/Früchte/Kräuter)",
          price: "2.50 €",
        },
      ],
    },
  ],
  footnotes: ["1 = Coffein    2 = Farbstoff"],
};

const CARDS = [TAGESKARTE, BROTZEITKARTE, GETRAENKEKARTE];

export function Speisekarte() {
  const [active, setActive] = useState(0);
  const card = CARDS[active];

  return (
    <section id="speisekarte" className="py-20 md:py-28 bg-surface-warm">
      <div className="mx-auto max-w-4xl px-6">
        <FadeIn>
          <div className="text-center">
            <div className="overline text-primary mb-4">Aus unserer Küche</div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight">
              Unsere Karten
            </h2>
            <p className="mt-4 text-text-secondary leading-relaxed max-w-xl mx-auto">
              Bayerische Wirtshausküche, frisch zubereitet – mit Fleisch und
              Wurst aus der eigenen Metzgerei.
            </p>
          </div>
        </FadeIn>

        {/* Reiter */}
        <FadeIn delay={80}>
          <div
            role="tablist"
            aria-label="Karten des Gasthof Menzinger"
            className="mt-10 flex flex-wrap justify-center gap-2"
          >
            {CARDS.map((c, i) => {
              const selected = i === active;
              return (
                <button
                  key={c.id}
                  role="tab"
                  id={`tab-${c.id}`}
                  aria-selected={selected}
                  aria-controls={`panel-${c.id}`}
                  onClick={() => setActive(i)}
                  className={`px-5 py-3 text-sm font-medium tracking-wide rounded-sm border transition-colors cursor-pointer min-h-11 ${
                    selected
                      ? "bg-primary text-white border-primary"
                      : "bg-surface text-text-primary border-border hover:border-primary hover:text-primary"
                  }`}
                >
                  {c.tab}
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Karte */}
        <FadeIn delay={140}>
          <div
            role="tabpanel"
            id={`panel-${card.id}`}
            aria-labelledby={`tab-${card.id}`}
            className="mt-8 shadow-[0_2px_24px_rgba(43,43,38,0.08)]"
          >
            {/* Rautenband im Kopf */}
            <div className="bavarian-raute h-4" aria-hidden />

            <div className="bg-paper border-x border-b border-paper-edge px-6 py-10 sm:px-10 md:px-14 md:py-14">
              {/* Titel */}
              <header className="text-center">
                <h3 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-ink">
                  {card.title}
                </h3>
                {card.subtitle && (
                  <div className="mt-2 text-sm italic text-text-secondary">
                    {card.subtitle}
                  </div>
                )}
                <Ornament />
              </header>

              {/* Gruppen */}
              <div className="mt-8 space-y-9">
                {card.groups.map((g, gi) => (
                  <div key={gi}>
                    {g.divider && (
                      <div
                        className="text-center text-accent-soft tracking-[0.12em] sm:tracking-[0.3em] text-xs sm:text-sm mb-6 select-none overflow-hidden break-all leading-none"
                        aria-hidden
                      >
                        {g.divider}
                      </div>
                    )}
                    {g.title && (
                      <h4 className="font-serif text-2xl text-ink underline decoration-accent/40 underline-offset-[6px] mb-5">
                        {g.title}
                      </h4>
                    )}
                    <ul className="space-y-4">
                      {g.items.map((it, ii) => (
                        <MenuRow key={ii} item={it} />
                      ))}
                    </ul>
                    {g.note && (
                      <p className="mt-5 text-[13px] leading-relaxed text-text-secondary border-t border-paper-edge pt-4 [overflow-wrap:anywhere]">
                        {g.note}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Fußnoten */}
              {card.footnotes && card.footnotes.length > 0 && (
                <footer className="mt-10 pt-6 border-t border-paper-edge space-y-2">
                  {card.footnotes.map((f, i) => (
                    <p
                      key={i}
                      className="text-[13px] leading-relaxed text-text-secondary whitespace-pre-wrap"
                    >
                      {f}
                    </p>
                  ))}
                </footer>
              )}
            </div>

            <div className="bavarian-raute h-4" aria-hidden />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function MenuRow({ item }: { item: Item }) {
  return (
    <li>
      {/* Name und Preis immer auf einer Zeile; der Name umbricht bei Bedarf.
          Führungspunkte erst ab sm, dort ist genug Platz dafür. */}
      <div className="flex items-baseline gap-3">
        <div className="font-serif text-lg md:text-xl text-ink leading-snug min-w-0 flex-1 sm:flex-none sm:shrink [overflow-wrap:anywhere]">
          {item.name}
        </div>

        <div
          className="hidden sm:block flex-1 border-b border-dotted border-accent-soft translate-y-[-4px] min-w-6"
          aria-hidden
        />

        <div className="flex items-baseline gap-2 shrink-0">
          {item.add && (
            <span className="text-xs text-text-secondary tabular-nums whitespace-nowrap">
              {item.add}
            </span>
          )}
          {item.unit && (
            <span className="text-sm text-text-secondary tabular-nums whitespace-nowrap">
              {item.unit}
            </span>
          )}
          {item.price && (
            <span className="font-semibold text-primary tabular-nums whitespace-nowrap">
              {item.price}
            </span>
          )}
        </div>
      </div>
      {item.desc && (
        <div className="text-[15px] text-text-secondary leading-relaxed mt-0.5 pr-0 sm:pr-16 [overflow-wrap:anywhere]">
          {item.desc}
        </div>
      )}
    </li>
  );
}

function Ornament() {
  return (
    <div className="mt-5 flex items-center justify-center gap-3" aria-hidden>
      <span className="h-px w-12 bg-accent-soft" />
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        className="text-accent"
        fill="currentColor"
      >
        <path d="M7 0l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" />
      </svg>
      <span className="h-px w-12 bg-accent-soft" />
    </div>
  );
}
