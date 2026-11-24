# Zpráva o přístupnosti

Odevzdaná verze stránky `https://krystofdopita.github.io/osobni-stranka/`. Stránka byla testována podle WCAG 2.2 na úrovni AA (všechna kritéria A i AA). Kritérium 4.1.1 Parsing bylo ve verzi 2.2 odstraněno, proto v tabulce není.

## Výsledky nástrojů

| Nástroj | Před opravami | Po opravách |
| --- | --- | --- |
| Lighthouse (Accessibility) | 0,96 — jeden Color Contrast Error u aktivního filtru v tmavém režimu | 1,00 — bez nálezů; Best Practices 1,00 a SEO 1,00 |
| WAVE (Errors a Contrast Errors) | 1 Contrast Error a 2 upozornění na odlišení odkazů / klikací plochu | 0 Errors, 0 Contrast Errors |
| Test klávesnicí | Malá klikací plocha navigace a název značky nezačínal viditelným textem | Tab / Shift+Tab / Enter prochází navigací, tlačítky, filtry i rozbalovacími kartami bez pasti |

## Nalezené problémy a jejich opravy

| Problém | Jak jsem ho našel | Oprava (commit) | Kritérium WCAG |
| --- | --- | --- | --- |
| Navigační odkazy nebyly podtržené a měly malou klikací plochu | WAVE + Lighthouse | `c219f35` | 1.4.1, 2.5.8 |
| Vedlejší text `#667482` na `#f4f4ef` nedosahoval 4,5:1 | WAVE Contrast Error | `d8e21de` | 1.4.3 |
| Kontaktní odkazy byly odlišené jen barvou | Ruční kontrola | `4d23190` | 1.4.1 |
| Scrollovací odhalování mohlo skrýt obsah při vypnutém JavaScriptu | Ruční kontrola s vypnutým JS | `c557efe` | 1.1.1 |
| `aria-label` značky `KD_` nezačínal viditelným textem | Lighthouse/axe | `acaef44` | 2.5.3 |
| Aktivní filtr měl v tmavém režimu bílý text na `#a78bfa` (2,72:1) | Lighthouse/axe | `68932d3` | 1.4.3 |

## Test media rules

| Nastavení | Co jsem při emulaci viděl | V pořádku |
| --- | --- | --- |
| prefers-color-scheme: dark | Tmavé pozadí, světlý text, modré akcenty; aktivní filtr má tmavý text a zůstává čitelný | Ano |
| prefers-contrast: more | Bílý/černý text, silnější okraje, podtržené odkazy, dekorace pod obsahem skryté | Ano |
| prefers-reduced-motion: reduce | Žádný parallax, orbit ani odhalování; obsah je hned viditelný, kód se jen staticky zvýrazní | Ano |
| prefers-reduced-transparency: reduce | Průhledné dekorativní vrstvy nahrazeny plnými barvami | Ano |
| forced-colors: active | Systémové barvy, okraje karet a tlačítek, outline fokusu `Highlight` | Ano |

Kromě toho byly ověřeny breakpointy `min-width` 40 / 60 / 80 em, šířka 320 px a zoom 200 % a 400 %. Stránka se při tom neposouvá vodorovně; tabulka dovedností se vejde do vlastního posouvacího kontejneru.

## Kritéria WCAG 2.2 úrovně A a AA

Specifikace: https://www.w3.org/TR/WCAG22/ (kritérium najdete podle čísla). Úrovně A a AA mají dohromady 55 kritérií (31 úrovně A a 24 úrovně AA). Kritérium 4.1.1 Parsing bylo ve verzi 2.2 odstraněno, proto v tabulce není.

Kritéria označená „nové“ přibyla ve verzi 2.2.

### 1 Perceivable (vnímatelnost)

| Kritérium | Název | Úroveň | Stav | Kde a jak / proč ne |
| --- | --- | --- | --- | --- |
| 1.1.1 | Non-text Content | A | Splněno | Tři SVG ilustrace mají výstižný `alt`; síťka, ukazatel posuvu, ukázka kódu a kurzor mají `aria-hidden="true"`. |
| 1.2.1 | Audio-only and Video-only (Prerecorded) | A | Nevztahuje se | Stránka neobsahuje zvuk ani video. |
| 1.2.2 | Captions (Prerecorded) | A | Nevztahuje se | Stránka neobsahuje předem nahrané video. |
| 1.2.3 | Audio Description or Media Alternative (Prerecorded) | A | Nevztahuje se | Stránka neobsahuje video. |
| 1.2.4 | Captions (Live) | AA | Nevztahuje se | Stránka neobsahuje živé vysílání. |
| 1.2.5 | Audio Description (Prerecorded) | AA | Nevztahuje se | Stránka neobsahuje video. |
| 1.3.1 | Info and Relationships | A | Splněno | `header`, `nav ul`, `main`, `section`, `article`, `table`, `caption`, `th scope`, `address` a `footer`. |
| 1.3.2 | Meaningful Sequence | A | Splněno | Pořadí v HTML odpovídá vizuálnímu pořadí. |
| 1.3.3 | Sensory Characteristics | A | Splněno | Pokyny nespoléhají jen na smysly; odkazy mají text. |
| 1.3.4 | Orientation | AA | Splněno | Rozvržení funguje na šířku i výšku. |
| 1.3.5 | Identify Input Purpose | AA | Nevztahuje se | Stránka nemá formuláře. |
| 1.4.1 | Use of Color | A | Splněno | Odkazy jsou podtržené, filtry mají `aria-pressed`; viz nálezy 1 a 3. |
| 1.4.2 | Audio Control | A | Nevztahuje se | Žádný automatický zvuk. |
| 1.4.3 | Contrast (Minimum) | AA | Splněno | Text i aktivní prvky mají nejméně 4,5:1; viz nálezy 2 a 6. |
| 1.4.4 | Resize Text | AA | Splněno | Velikosti v `rem` a `clamp`, zoom 200 % funguje. |
| 1.4.5 | Images of Text | AA | Splněno | Text je skutečný text, ilustrace jsou SVG obrázky s `alt`. |
| 1.4.10 | Reflow | AA | Splněno | Při 320 px a 400 % nedochází k vodorovnému posouvání stránky. |
| 1.4.11 | Non-text Contrast | AA | Splněno | Okraje karet a tabulky, outline fokusu i aktivní filtr mají nejméně 3:1. |
| 1.4.12 | Text Spacing | AA | Splněno | `line-height: 1.6`, text se při změně rozestupů nepřekrývá. |
| 1.4.13 | Content on Hover or Focus | AA | Splněno | Najetí mění jen okraj a stín karty, žádný nový obsah se neobjevuje. |

### 2 Operable (ovladatelnost)

| Kritérium | Název | Úroveň | Stav | Kde a jak / proč ne |
| --- | --- | --- | --- | --- |
| 2.1.1 | Keyboard | A | Splněno | Odkazy, tlačítko, filtry i `details`/`summary` jdou ovládat klávesnicí. |
| 2.1.2 | No Keyboard Trap | A | Splněno | Fokus lze posunout dál pomocí Tab a Shift+Tab. |
| 2.1.4 | Character Key Shortcuts | A | Nevztahuje se | Žádné zkratky. |
| 2.2.1 | Timing Adjustable | A | Nevztahuje se | Žádné časové limity. |
| 2.2.2 | Pause, Stop, Hide | A | Splněno | Animace jsou kratší než 5 s a vypínají se přes `prefers-reduced-motion`. |
| 2.3.1 | Three Flashes or Below Threshold | A | Splněno | Žádné blikání obsahu; bliká jen dekorativní kurzor a respektuje reduced motion. |
| 2.4.1 | Bypass Blocks | A | Splněno | Skip link `Přejít na obsah` míří na `main#obsah`. |
| 2.4.2 | Page Titled | A | Splněno | `<title>Kryštof Dopita — student IT</title>`. |
| 2.4.3 | Focus Order | A | Splněno | Pořadí fokusu odpovídá HTML. |
| 2.4.4 | Link Purpose (In Context) | A | Splněno | Navigační, projektové, kontaktní i tlačítkové odkazy mají smysluplný text. |
| 2.4.5 | Multiple Ways | AA | Splněno | Navigace, tlačítka v úvodu a odkazy v patičce. |
| 2.4.6 | Headings and Labels | AA | Splněno | Nadpisy h1–h3 a název skupiny filtrů jsou popisné. |
| 2.4.7 | Focus Visible | AA | Splněno | `:focus-visible` s outline, při vynucených barvách 3 px. |
| 2.4.11 | Focus Not Obscured (Minimum) (nové) | AA | Splněno | Stránka nemá lepivou hlavičku; 0,2 rem ukazatel posuvu fokus nezakrývá. |
| 2.5.1 | Pointer Gestures | A | Nevztahuje se | Žádná gesta. |
| 2.5.2 | Pointer Cancellation | A | Splněno | Odkazy a tlačítka se aktivují po uvolnění tlačítka. |
| 2.5.3 | Label in Name | A | Splněno | Viditelný text odpovídá přístupnému názvu; viz nález 5. |
| 2.5.4 | Motion Actuation | A | Nevztahuje se | Žádné ovládání pohybem zařízení. |
| 2.5.7 | Dragging Movements (nové) | AA | Nevztahuje se | Žádné přetahování. |
| 2.5.8 | Target Size (Minimum) (nové) | AA | Splněno | Navigace, tlačítka a filtry mají `min-height: 2.75 rem`; viz nález 1. |

### 3 Understandable (srozumitelnost)

| Kritérium | Název | Úroveň | Stav | Kde a jak / proč ne |
| --- | --- | --- | --- | --- |
| 3.1.1 | Language of Page | A | Splněno | `<html lang="cs">`. |
| 3.1.2 | Language of Parts | AA | Nevztahuje se | Celý obsah je v češtině. |
| 3.2.1 | On Focus | A | Splněno | Zaostření nic nemění. |
| 3.2.2 | On Input | A | Nevztahuje se | Žádné formuláře. |
| 3.2.3 | Consistent Navigation | AA | Splněno | Jedna stránka se stejnou navigací. |
| 3.2.4 | Consistent Identification | AA | Splněno | Stejné prvky mají stejné názvy. |
| 3.2.6 | Consistent Help (nové) | A | Splněno | Kontakt je v navigaci, v `<address>` i v patičce se stejnou e-mailovou adresou. |
| 3.3.1 | Error Identification | A | Nevztahuje se | Žádné formuláře. |
| 3.3.2 | Labels or Instructions | A | Nevztahuje se | Žádné formuláře. |
| 3.3.3 | Error Suggestion | AA | Nevztahuje se | Žádné formuláře. |
| 3.3.4 | Error Prevention (Legal, Financial, Data) | AA | Nevztahuje se | Žádné transakce. |
| 3.3.7 | Redundant Entry (nové) | A | Nevztahuje se | Nic se nezadává dvakrát. |
| 3.3.8 | Accessible Authentication (Minimum) (nové) | AA | Nevztahuje se | Žádné přihlašování. |

### 4 Robust (robustnost)

| Kritérium | Název | Úroveň | Stav | Kde a jak / proč ne |
| --- | --- | --- | --- | --- |
| 4.1.2 | Name, Role, Value | A | Splněno | Sémantické prvky, odkazy s názvem z textu, `details`/`summary` a filtry s `aria-pressed`. |
| 4.1.3 | Status Messages | AA | Splněno | Filtr projektů mění text v oblasti `aria-live="polite"`, čtečka ohlásí počet výsledků. |

## Nástroje a ruční kontroly

- Lighthouse, WAVE, W3C HTML validator
- Klávesnice Tab / Shift+Tab / Enter
- Přiblížení 200 % a 400 %, šířka 320 px
- Emulace prefers-color-scheme, prefers-contrast, prefers-reduced-motion, prefers-reduced-transparency a forced-colors v DevTools
- Kontrola stránky s vypnutým JavaScriptem
