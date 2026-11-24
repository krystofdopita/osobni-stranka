# Zpráva o přístupnosti

Stránka byla testována podle WCAG 2.2 na úrovni AA (všechna kritéria A i AA). Kritérium 4.1.1 Parsing bylo ve verzi 2.2 odstraněno, proto se nevyhodnocuje.

## Kritéria WCAG 2.2 A a AA

| Kritérium | Úroveň | Stav | Zdůvodnění |
| --- | --- | --- | --- |
| 1.1.1 Non-text Content | A | Splněno | Tři IT ilustrace mají výstižný `alt`; dekorativní síťka, ukázka kódu, ukazatel posuvu a kurzor mají `aria-hidden="true"`. |
| 1.2.1 Audio-only and Video-only (Prerecorded) | A | Nevztahuje se | Stránka neobsahuje zvuk ani video. |
| 1.2.2 Captions (Prerecorded) | A | Nevztahuje se | Stránka neobsahuje předem nahrané video. |
| 1.2.3 Audio Description or Media Alternative (Prerecorded) | A | Nevztahuje se | Stránka neobsahuje video. |
| 1.2.4 Captions (Live) | AA | Nevztahuje se | Stránka neobsahuje živé vysílání. |
| 1.2.5 Audio Description (Prerecorded) | AA | Nevztahuje se | Stránka neobsahuje video. |
| 1.3.1 Info and Relationships | A | Splněno | `header`, `nav`, `main`, `section`, `article`, `table`, `caption` a `th scope`. |
| 1.3.2 Meaningful Sequence | A | Splněno | Pořadí v HTML odpovídá vizuálnímu pořadí. |
| 1.3.3 Sensory Characteristics | A | Splněno | Pokyny nespoléhají jen na smysly, odkazy mají text. |
| 1.3.4 Orientation | AA | Splněno | Rozvržení funguje na šířku i výšku. |
| 1.3.5 Identify Input Purpose | AA | Nevztahuje se | Stránka nemá formuláře. |
| 1.4.1 Use of Color | A | Splněno | Odkazy jsou podtržené (viz nálezy 1 a 3). |
| 1.4.2 Audio Control | A | Nevztahuje se | Žádný automatický zvuk. |
| 1.4.3 Contrast (Minimum) | AA | Splněno | Hlavní i vedlejší text má kontrast nejméně 4,5:1 (viz nález 2). |
| 1.4.4 Resize Text | AA | Splněno | Velikosti v `rem` a `clamp`, zoom 200 % funguje. |
| 1.4.5 Images of Text | AA | Splněno | Text je skutečný text, ilustrace jsou obrázky s `alt`. |
| 1.4.10 Reflow | AA | Splněno | Při 320 px a 400 % nedochází k vodorovnému posouvání stránky; tabulka se přizpůsobuje šířce. |
| 1.4.11 Non-text Contrast | AA | Splněno | Okraje karet a tabulky, outline fokusu a aktivní prvky mají kontrast nejméně 3:1. |
| 1.4.12 Text Spacing | AA | Splněno | `line-height: 1.6`, text se při změně rozestupů nepřekrývá. |
| 1.4.13 Content on Hover or Focus | AA | Splněno | Najetí mění jen okraj a stín karty, žádný nový obsah se neobjevuje. |
| 2.1.1 Keyboard | A | Splněno | Všechny odkazy jdou ovládat klávesnicí. |
| 2.1.2 No Keyboard Trap | A | Splněno | Fokus lze posunout dál pomocí Tab. |
| 2.1.4 Character Key Shortcuts | A | Nevztahuje se | Žádné zkratky. |
| 2.2.1 Timing Adjustable | A | Nevztahuje se | Žádné časové limity. |
| 2.2.2 Pause, Stop, Hide | A | Splněno | Animace jsou kratší než 5 s a vypínají se přes `prefers-reduced-motion`. |
| 2.3.1 Three Flashes or Below Threshold | A | Splněno | Žádné blikání obsahu; bliká jen dekorativní kurzor a respektuje reduced motion. |
| 2.4.1 Bypass Blocks | A | Splněno | Skip link na začátku dokumentu. |
| 2.4.2 Page Titled | A | Splněno | `<title>Kryštof Dopita — student IT</title>`. |
| 2.4.3 Focus Order | A | Splněno | Pořadí fokusu odpovídá HTML. |
| 2.4.4 Link Purpose (In Context) | A | Splněno | Navigační, kontaktní i tlačítkové odkazy mají smysluplný text. |
| 2.4.5 Multiple Ways | AA | Splněno | Navigace, tlačítka v úvodu a odkazy v patičce. |
| 2.4.6 Headings and Labels | AA | Splněno | Nadpisy h1–h3 jsou popisné. |
| 2.4.7 Focus Visible | AA | Splněno | `:focus-visible` s outline, při vynucených barvách 3 px. |
| 2.4.11 Focus Not Obscured (Minimum) | AA | Splněno | Stránka nemá lepivou hlavičku; 0,2rem ukazatel posuvu fokus nezakrývá. |
| 2.5.1 Pointer Gestures | A | Nevztahuje se | Žádná gesta. |
| 2.5.2 Pointer Cancellation | A | Splněno | Odkazy se aktivují po uvolnění tlačítka. |
| 2.5.3 Label in Name | A | Splněno | Viditelný text odpovídá názvu odkazu. |
| 2.5.4 Motion Actuation | A | Nevztahuje se | Žádné ovládání pohybem zařízení. |
| 2.5.7 Dragging Movements | AA | Nevztahuje se | Žádné přetahování. |
| 2.5.8 Target Size (Minimum) | AA | Splněno | Navigační odkazy a tlačítka mají `min-height: 2.75rem` (viz nález 1). |
| 3.1.1 Language of Page | A | Splněno | `<html lang="cs">`. |
| 3.1.2 Language of Parts | AA | Nevztahuje se | Celý obsah je v češtině. |
| 3.2.1 On Focus | A | Splněno | Zaostření nic nemění. |
| 3.2.2 On Input | A | Nevztahuje se | Žádné formuláře. |
| 3.2.3 Consistent Navigation | AA | Splněno | Jedna stránka se stejnou navigací. |
| 3.2.4 Consistent Identification | AA | Splněno | Stejné prvky mají stejné názvy. |
| 3.2.6 Consistent Help | A | Splněno | Kontakt je v navigaci i v patičce se stejnou e-mailovou adresou. |
| 3.3.1 Error Identification | A | Nevztahuje se | Žádné formuláře. |
| 3.3.2 Labels or Instructions | A | Nevztahuje se | Žádné formuláře. |
| 3.3.3 Error Suggestion | AA | Nevztahuje se | Žádné formuláře. |
| 3.3.4 Error Prevention (Legal, Financial, Data) | AA | Nevztahuje se | Žádné transakce. |
| 3.3.7 Redundant Entry | A | Nevztahuje se | Nic se nezadává dvakrát. |
| 3.3.8 Accessible Authentication (Minimum) | AA | Nevztahuje se | Žádné přihlašování. |
| 4.1.2 Name, Role, Value | A | Splněno | Sémantické prvky a odkazy s názvem z textu. |
| 4.1.3 Status Messages | AA | Nevztahuje se | Žádné dynamické stavové zprávy. |

## Nálezy a jejich opravy

1. **Nález 1 – WAVE/Lighthouse: odkazy nebyly vizuálně odlišené a klikací plocha navigace byla malá.** Navigační odkazy neměly podtržení ani dostatečnou výšku (1.4.1, 2.5.8). Opraveno commitem `c219f35` a u nové navigace ponecháno.

2. **Nález 2 – WAVE Contrast Error: vedlejší text měl nedostatečný kontrast.** Barva `--muted: #667482` na pozadí `#f4f4ef` nedosahovala 4,5:1 (1.4.3). Změněno na tmavší odstín v commitu `d8e21de`.

3. **Nález 3 – ruční kontrola: kontaktní odkazy nebyly podtrženy.** Barva sama nestačila k rozlišení odkazu (1.4.1). Opraveno commitem `4d23190`.

4. **Nález 4 – ruční kontrola nových scroll efektů: obsah by mohl zůstat skrytý.** Postupné odhalování sekcí závisí na JavaScriptu. Opraveno v commitu `c557efe`: třída `js` se přidává až ve spustitelném skriptu, takže při vypnutém JS je obsah viditelný, a při `prefers-reduced-motion: reduce` se vše okamžitě zobrazí bez animace.

## Nástroje a ruční kontroly

- Lighthouse, WAVE, W3C HTML validator
- Klávesnice Tab / Shift+Tab / Enter
- Přiblížení 200 % a 400 %, šířka 320 px
- Emulace prefers-color-scheme, prefers-contrast, prefers-reduced-motion, prefers-reduced-transparency a forced-colors v DevTools
- Kontrola stránky s vypnutým JavaScriptem
