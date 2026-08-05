/**
 * Zentrale Bildregistratur.
 *
 * Herkunft:
 *  - `raum` / `feier`: eigene Fotos des Gasthof Menzinger (Google-Drive-Ordner des Kunden)
 *  - `speise`: Wikimedia Commons, CC-BY / CC-BY-SA (Nachweise siehe BILDNACHWEIS unten)
 *
 * Jede Datei liegt in zwei Breiten (800 / 1600) als WebP unter /public/bilder.
 */

const B = "/bilder";

type Bild = { src: string; srcSet: string; alt: string };

function bild(pfad: string, alt: string): Bild {
  return {
    src: `${B}/${pfad}-1600.webp`,
    srcSet: `${B}/${pfad}-800.webp 800w, ${B}/${pfad}-1600.webp 1600w`,
    alt,
  };
}

/* --- Eigene Fotos: Räume & Feiern ------------------------------------- */

export const BILDER = {
  saalFestlich: bild(
    "20240525_131911",
    "Festlich gedeckte Tafeln im großen Saal des Gasthof Menzinger",
  ),
  saalParkett: bild(
    "20240525_131950",
    "Langtafeln im Saal mit Parkettboden und Deckenbalken",
  ),
  saalBalken: bild(
    "20240525_131921",
    "Gedeckter Nebenraum mit Holzbalken, Sprossenfenstern und Bühne",
  ),
  gastraumDecke: bild(
    "20241012_102104",
    "Gastraum mit kassettierter Holzdecke und festlich gedeckten Tischen",
  ),
  stubeBuffet: bild(
    "20240525_131756",
    "Buffet mit Salaten und Aufschnitt in der holzvertäfelten Stube",
  ),
  stubeChafing: bild(
    "20240525_131801",
    "Warmhaltebehälter und Salatbuffet in der Stube des Gasthof Menzinger",
  ),
  tafelLang: bild(
    "20241012_102151",
    "Lange Hochzeitstafel mit Serviettenkegeln und Blumenschmuck",
  ),
  brauttisch: bild(
    "20241012_102131",
    "Brauttisch mit Blumengesteck aus Dahlien, Rosen und Eukalyptus",
  ),
  blumenDetail: bild(
    "20241012_102215",
    "Blumengesteck mit Kerze auf einer Baumscheibe als Tischschmuck",
  ),
  gedeckDetail: bild(
    "20241012_102052",
    "Gedeck mit gefalteter Serviette und Menükarte auf weißer Tafel",
  ),
  stadlWeit: bild(
    "20260620_123704",
    "Festlich hergerichteter Stadl mit Lichterketten und Lampions",
  ),
  stadlTafeln: bild(
    "20260620_123629",
    "Weiß eingedeckte Biertischgarnituren im Stadl unter Lichterketten",
  ),
  stadlLampions: bild(
    "20260620_123700",
    "Stadl mit Tüllbahnen, Lampions und bayerisch-blauem Rautenstoff",
  ),
  stadlTisch: bild(
    "20260620_123633",
    "Gedeckte Tafel im Stadl mit Rosen in Bierflaschen auf Baumscheiben",
  ),
  stadlGalerie: bild(
    "20260620_123729",
    "Blick von der Galerie auf die gedeckten Tische im Stadl",
  ),
} as const;

/* --- Speisen (Wikimedia Commons) -------------------------------------- */

export const SPEISEN = {
  schweinebraten: bild(
    "speisen/schweinebraten",
    "Schweinebraten mit Kruste und Bratkartoffeln",
  ),
  rostbraten: bild(
    "speisen/rostbraten",
    "Zwiebelrostbraten mit Röstzwiebeln und Bratkartoffeln",
  ),
  brotzeitplatte: bild(
    "speisen/brotzeitplatte",
    "Bayerische Brotzeitplatte mit Aufschnitt, Käse und Brezn",
  ),
  brotzeitBier: bild(
    "speisen/brotzeit-bier",
    "Brotzeit mit Wurst, Käse und Bier auf rustikalem Holztisch",
  ),
  bratwuerstl: bild(
    "speisen/bratwuerstl",
    "Bratwürstl mit Sauerkraut und Bauernbrot",
  ),
  wurstsalat: bild("speisen/wurstsalat", "Wurstsalat mit Käse und Zwiebelringen"),
  salatteller: bild(
    "speisen/salatteller",
    "Bunter Salatteller mit gebratenen Fleischstreifen",
  ),
  kaiserschmarrn: bild(
    "speisen/kaiserschmarrn",
    "Kaiserschmarrn mit Puderzucker und Apfelmus",
  ),
  kaffee: bild("speisen/kaffee", "Cappuccino in weißer Tasse"),
} as const;

/**
 * Nachweise für die Speisenfotos. Muss auf der Website sichtbar sein
 * (Footer oder Impressum) – CC-BY und CC-BY-SA verlangen Namensnennung.
 */
export const BILDNACHWEIS = [
  "Schweinebraten: „Roast Pork“, CC BY 2.0, Wikimedia Commons",
  "Zwiebelrostbraten: „Zwiebelrostbraten, Rauenthal“, CC BY-SA 4.0, Wikimedia Commons",
  "Brotzeitplatte: „Bayrische Brotzeitplatte Nockherberg“, CC BY-SA 4.0, Wikimedia Commons",
  "Brotzeit mit Bier: „Brewery Roppelt in Trossenfurt-Oberaurach“, CC BY-SA 4.0, Wikimedia Commons",
  "Bratwürstl: „Bamberger Bratwürste Kurkuma Sauerkraut Brot“, CC BY-SA 4.0, Wikimedia Commons",
  "Wurstsalat: „Wurstsalat mit Käse“, CC BY-SA 4.0, Wikimedia Commons",
  "Salatteller: „Bunter Salatteller mit Rumpsteak und Champignons“, CC BY-SA 3.0, Wikimedia Commons",
  "Kaiserschmarrn: „Kaiserschmarrn Apfelsoße Edelweisshütte Sölden“, CC BY-SA 4.0, Wikimedia Commons",
  "Cappuccino: „Cappuccino in weißer Tasse“, CC BY-SA 3.0, Wikimedia Commons",
] as const;
