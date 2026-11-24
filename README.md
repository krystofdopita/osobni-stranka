# Osobní stránka Kryštofa Dopity

Osobní web studenta IT. Zaměřuje se na web, backend, databáze a automatizaci — tedy na vše, co se dá z nápadu postavit do funkčního řešení. Stránka je sémantická, ovladatelná klávesnicí, výrazně responzivní a přizpůsobuje se systémovému nastavení uživatele. Splňuje WCAG 2.2 na úrovni AA.

## Nasazená verze

https://krystofdopita.github.io/osobni-stranka/

## Struktura

- `index.html` — úvod, O mně, dovednosti, školní projekty, GitHub projekty a kontakt
- `css/style.css` — moderní vizuál mobile first, scrollové efekty a media rules
- `js/main.js` — ukazatel posuvu, odhalování sekcí, aktivní navigace, orbitální animace a přehrání kódu
- `images/` — IT ilustrace ve formátu SVG
- `ACCESSIBILITY.md` — hodnocení WCAG 2.2 a zdokumentované nálezy

## Scrolling a interakce

- tenký ukazatel průběhu čtení nahoře nad stránkou (dekorativní, skrytý před čtečkami),
- jemné odhalování sekcí a karet při vstupu do zorného pole,
- zvýraznění aktuální sekce v navigaci,
- mírný posun síťky a „okna s kódem“ v úvodu podle scrollu,
- po prvním posunu se kolem okna s kódem rozeběhne orbit technologických štítků,
- tlačítko „Přehrát kód“ znovu odhaluje řádky proměnné `y` a spustí jiskrový efekt,
- karty GitHub projektů se dají otevřít kliknutím i klávesnicí (`details`/`summary`) a při otevření se krátce animují,
- štítky Vše / Web / Java / Hry projekty filtrují; změna se ohlásí čtečkám přes `aria-live`.

Veškerý pohyb se vypne při `prefers-reduced-motion: reduce`. Pokud JavaScript není dostupný, zůstává veškerý obsah viditelný.

## Media rules

| Pravidlo | Co se mění a proč |
| --- | --- |
| `min-width` 35 / 48 / 55 / 80 em | Základní rozvržení je pro nejmenší displej; navigace se mění ze čtyř dlaždic na vodorovnou lištu, karty z jednoho sloupce na tři a úvod se na velké obrazovce rozdělí na text a okno s kódem. |
| `prefers-color-scheme` | Přepíná proměnné mezi světlým a tmavým schématem, `color-scheme` i barvu posuvníků. |
| `prefers-contrast: more` | Zvyšuje kontrast na AAA, zesiluje okraje, podtrhuje odkazy a skrývá dekorativní vrstvy pod obsahem. |
| `prefers-reduced-motion` | Vypíná animaci kurzoru, odhalování sekcí, plynulé rolování i posun dekorací. |
| `prefers-reduced-transparency` | Mění poloprůhledné dekorativní barvy a pozadí na plné barvy. |
| `forced-colors: active` | Používá systémové barvy, okraje karet a outline fokusu místo stínů a barevných výplní. |
| Kombinace tmavý režim + vyšší kontrast | Nastaví bílý text na černém pozadí a žluté akcenty, aby se pravidla nepřepisovala. |

## Historie

Práce proběhla ve větvích `feature/obsah`, `feature/sirka`, `feature/tmavy-rezim`, `feature/vyssi-kontrast`, `feature/omezeny-pohyb`, `feature/pruhlednost`, `feature/vynucene-barvy`, `feature/kombinace`, `fix/pristupnost`, `feature/nasazeni`, `docs/readme`, `feature/it-tema`, `fix/nazev-odkazu`, `feature/interakce` a `fix/kontrast-filtru`. V historii je vyřešený konflikt z větví `feature/barvy-a` a `feature/barvy-b`.
