# Naslag Informatiemanagement (CE, Fontys)

Online naslag voor studenten bij de leeruitkomst Informatiemanagement.

Gepubliceerd via GitHub Pages vanuit de repo `MarcelSchenkeveld/LUK-Informatiemanagement` (branch main, hoofdmap).
Adres: https://marcelschenkeveld.github.io/LUK-Informatiemanagement/

## Opbouw

- `index.html`: hoofdpagina (overzicht). Alle pagina's gegroepeerd per criterium, plus links naar bibliotheek, LibraryGuides en Zoekwijzer. Dit is de link voor Canvas en Teams.
- `00-start-de-route.html`: de route (hoe je aan de leeruitkomst werkt, welk bewijs erbij past, zelf-momenten, gewoontes, afspraken).
- `01` tot en met `10`: stap-voor-stap-pagina's, alle volgens hetzelfde model: waarom dit ertoe doet, een contrast A/B om te onthullen, uitklapbare stappen met een afvinkje, en een kopieerbaar sjabloon.
- `stijl.css`: de opmaak van alle pagina's. Eén plek voor kleuren, kaarten, stappen en sjablonen.
- `nav.js`: de navigatie en het gedrag. Bevat de paginalijst (PAGES) en de groepen, zet op elke pagina de bovenbalk en de knoppen vorige / overzicht / volgende, vult de overzichtslijsten, en regelt het uitklappen, de vinkjes (lokaal in de browser), het onthullen en het kopiëren.

## Nieuwe pagina toevoegen

1. Kopieer een bestaande pagina als model. In de `<head>` staat `<link rel="stylesheet" href="stijl.css">`, onderaan vlak voor `</body>` staat `<script src="nav.js"></script>`. Verder heeft de pagina geen eigen stijl of script nodig.
2. Gebruik de vaste bouwstenen: `.card.accent` voor "waarom dit ertoe doet", `.ab` met twee `.card` voor het contrast, een knop met `data-toon="id"` bij een `.reveal` met dat id, `.acc` blokken voor de stappen, `input type="checkbox" data-k="..."` voor afvinkjes, en `.out` met een knop `data-kopieer="id"` plus een `<span class="small kopie-melding"></span>` voor een sjabloon.
3. Zet de pagina in `nav.js` in `PAGES` met bestandsnaam, titel, korte omschrijving, groep en `status: 'klaar'`. Pagina's met `status: 'volgt'` staan grijs in het overzicht en tellen niet mee in vorige/volgende.
4. Upload de nieuwe pagina en `nav.js` naar de repo (Add file > Upload files, zelfde naam) en commit. Binnen een minuut staat het online.

## Bijwerken en versies

Bestandsnamen blijven stabiel zodat links in Canvas en Teams blijven werken. Elke pagina draagt haar versienummer in de voettekst; `stijl.css` en `nav.js` in de eerste regel. De wijzigingen worden bijgehouden in VERSIES.md in de projectmap. Bij een wijziging: bestand in de repo vervangen (zelfde naam) en committen.

Voortgangsvinkjes worden alleen in de browser van de student bewaard (localStorage), per pagina; er wordt niets verzonden of op een server opgeslagen.
