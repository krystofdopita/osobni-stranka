# Osobní stránka Kryštofa Dopity

Osobní webová stránka zaměřená na sport (fotbal, hokej, basketbal), přehledovou tabulku a digitální projekty. Stránka je sémantická, ovladatelná klávesnicí, přizpůsobuje se šířce okna i systémovému nastavení uživatele a splňuje WCAG 2.2 na úrovni AA.

## Nasazená verze

https://krystofdopita.github.io/osobni-stranka/

## Struktura

- `index.html` – úvod, O mně, tři sportovní zájmy s ilustracemi, přehledová tabulka, kontakt
- `css/style.css` – rozvržení mobile first a media rules
- `images/` – ilustrace sportů
- `ACCESSIBILITY.md` – hodnocení WCAG 2.2 a tři zdokumentované nálezy

## Media rules

| Pravidlo | Co se mění a proč |
| --- | --- |
| `min-width` 35 / 48 / 55 / 80 em | Základní rozvržení je pro nejmenší displej; navigace se z dvousloupcové mění na vodorovnou, karty z jednoho sloupce na tři a tabulka dostává více prostoru. |
| `prefers-color-scheme` | Přepíná proměnné mezi světlým a tmavým schématem, `color-scheme` a barvu posuvníků. |
| `prefers-contrast: more` | Zvyšuje kontrast na AAA, zesiluje okraje, podtrhuje odkazy a skrývá dekorativní text pod obsahem. |
| `prefers-reduced-motion` | Vypíná animaci karet, přechody odkazů i plynulé rolování. |
| `prefers-reduced-transparency` | Mění poloprůhledné dekorativní barvy a pozadí na plné barvy. |
| `forced-colors: active` | Používá systémové barvy, okraje karet a outline fokusu místo stínů. |
| Kombinace tmavý režim + vyšší kontrast | Nastaví bílý text na černém pozadí a žluté odkazy, aby se pravidla nepřepisovala. |

## Historie

Práce proběhla ve větvích `feature/obsah`, `feature/sirka`, `feature/tmavy-rezim`, `feature/vyssi-kontrast`, `feature/omezeny-pohyb`, `feature/pruhlednost`, `feature/vynucene-barvy`, `feature/kombinace`, `fix/pristupnost`, `feature/nasazeni` a `docs/readme`. V historii je vyřešený konflikt z větví `feature/barvy-a` a `feature/barvy-b`.