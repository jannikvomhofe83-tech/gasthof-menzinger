
# Gasthof & Metzgerei Menzinger – Website

Helle, klassisch-bayerische Website mit drei Routen (Startbildschirm, Gasthaus, Metzgerei) im selben Qualitätsniveau. Tech: TanStack Start (React), Tailwind v4, voll responsive.

## Routen-Struktur

```
/            → Split-Screen Startbildschirm
/gasthaus    → Gasthof-Landing (grüne Welt)
/metzgerei   → Metzgerei-Landing (rot-braune Welt)
```

Logo/Schriftzug führt überall zurück nach `/`. Header und Footer beider Unterseiten enthalten Querverweis auf die jeweils andere Welt.

## Design System (Tailwind v4 Tokens in `src/styles.css`)

**Gemeinsame Basis**
- `background` #FAF7F0, `surface` #FFFFFF, `surface-warm` #F3EDE0
- `text-primary` #2B2B26, `text-secondary` #6B6A60
- `accent` #8C6239 (Holzbraun), `accent-soft` #C9B68F

**Gasthaus-Welt**
- `primary` #276A3B (Tannengrün), `primary-dark` #1D5230

**Metzgerei-Welt**
- `meat` #7A2E2A (Dunkelrot-Braun), `meat-dark` #5E211E

**Typografie** (via `<link>` in `__root.tsx`)
- Serif Headlines: Cormorant Garamond
- Body/UI: Open Sans
- Script-Akzent für "Menzinger": z. B. Great Vibes (nur sparsam im Hero/Startbildschirm)

**Regeln**: kleine Border-Radien (max 6px), großzügige Section-Paddings (py-24+), max-w-6xl Container, dezente Fade-in-Scroll-Animationen (IntersectionObserver, einmalig), keine Emojis, feine Ornament-Linien.

## Seiten & Sections

### Startbildschirm `/`
- Vollbild-Split-Screen (Desktop 50/50, mobil gestapelt)
- Links "Gasthaus": Fassade-Bild + grünes Overlay (70%), Overline "EINGANG", H2 "Gasthaus", Kurztext, Outline-Button → `/gasthaus`
- Rechts "Metzgerei": Wursttheke-Bild + rot-braunes Overlay (70%), analog → `/metzgerei`
- Hover: Overlay leicht transparenter, Hälfte weitet sich auf 55/45 (Desktop), sanfte Transition
- Mittige Creme-Karte überlappend: "Menzinger" in Script, darunter "Gasthof & Metzgerei · Hauptstraße 2 · 84435 Lengdorf", optional feines Wappen-Platzhalterbild
- Footer-Zeile: © 2026 Menzinger Lengdorf · Impressum · Datenschutz

### Gasthaus `/gasthaus`
1. **Navbar** (sticky, creme, feine grüne Bottom-Border, Scroll-Schatten): Schriftzug links, Anker rechts (Der Menzinger, Küche, Räume, Kontakt), CTA "Reservieren: 08083 374" (tel-Link), dezenter Link "Zur Metzgerei", Mobile-Burger
2. **Hero** voll ausgearbeitet: Bild + helles Overlay, Overline, H1 "Gasthof Menzinger", Script-"Menzinger"-Akzent, Subline, zwei CTAs (Reservieren gefüllt / Räume outline), Info-Leiste (Mittagstisch, Ruhetag, Adresse), feine Holzbraun-Doppellinie
3. **Der Menzinger / Grüß Gott**: 2-spaltig Text + Bild, 3 Feature-Items mit grünen Icons (Eigene Metzgerei, Frisch & hausgemacht, Frisch gezapftes Bier)
4. **Küche & Mittagstisch**: Tageskarte-Highlight-Karte (weiß, grüne Top-Border) mit 5 Beispielgerichten (gepunktete Preislinie), Info-Zeile Mittagstisch, Holzbraun-Badge "Fleisch aus eigener Metzgerei"
5. **Unsere Räume** (USP): 4 Karten Grid 2×2 (Gastraum, Schützenzimmer bis 20, Saal bis 450 mit Aufteilung, Weinstadl bis 280), je Bild + Serif-Titel + grünes Kapazitäts-Badge + Kurztext
6. **Galerie**: 6 Bild-Grid (Fassade, Gaststube, Kachelofen, Schweinsbraten, Saal, Biergarten), kleine Radien, dezenter Hover
7. **Öffnungszeiten & Kontakt** auf surface-warm: 2-spaltig, Kontakt mit großer grüner Telefonnummer, Maps-Platzhalter mit "Route planen"-Button
8. **Platzhalter-Sections** schlank: Veranstaltungen, Reservierung (Telefon-Button), Chronik, Metzgerei-Teaser (Outline-Button → `/metzgerei`)
9. **Footer** dunkelgrün #1D5230: Schriftzug, Adresse, Zeiten kompakt, Anker, Impressum/Datenschutz-Platzhalter, feine Creme-Top-Border

### Metzgerei `/metzgerei`
Gleiche Bauqualität, eigene Identität mit `meat` als Akzent statt Grün.
1. Navbar analog, Link "Zum Gasthaus"
2. Hero: Wursttheke, Overline "HANDWERK AUS LENGDORF", H1 "Metzgerei Menzinger", CTA "Unser Sortiment"
3. Über die Metzgerei: Text + 3 Features (Eigene Herstellung, Regionale Tiere, Frisch über die Theke)
4. Sortiment: 5 Karten (Frischfleisch, Wurst & Aufschnitt, Geräuchertes, Brotzeit & Feinkost, Partyservice/Platten)
5. Partyservice-Highlight + Telefon-CTA
6. Verbindungs-Section "Unsere Küche im Gasthof kocht mit Fleisch aus eigener Metzgerei" + Button → `/gasthaus`
7. Öffnungszeiten & Kontakt (Platzhalter-Zeiten, Hinweis "telefonisch erfragen")
8. Footer in Dunkelrot-Braun

## Bilder

Alle Bilder als Unsplash-URL-Platzhalter (warme, helle Wirtshaus-/Metzgerei-Motive) mit deutschen alt-Texten. Keine generierten Bilder in der ersten Version – schnell und leicht austauschbar.

## SEO / Head

Jede Route eigenes `head()` mit Titel, Description, og:title, og:description auf Deutsch. Root-Route setzt viewport/charset/site_name; kein globales og:image.

## Technische Details

- Neue Route-Dateien: `src/routes/index.tsx` (ersetzt Platzhalter), `src/routes/gasthaus.tsx`, `src/routes/metzgerei.tsx`
- Komponenten unter `src/components/`: `Navbar`, `Footer`, `SectionHeading` (Overline+H2), `FeatureItem`, `RoomCard`, `MenuItem`, `FadeIn` (Scroll-Reveal Utility), plus seitenspezifische Sections nach Bedarf
- Farbtokens und Fonts in `src/styles.css` unter `@theme`; Fonts via `<link>` in `__root.tsx`-`head()`
- Icons: lucide-react (bereits im Stack), sparsam eingesetzt

## Was NICHT enthalten ist

- Kein Reservierungs-Formular (nur Telefon-CTA, wie gewünscht)
- Kein Backend, kein CMS
- Keine echten Öffnungszeiten/Speisekarten – nur als Platzhalter gekennzeichnet
- Kein Cartoon-Schwein; ggf. später feine Line-Art
