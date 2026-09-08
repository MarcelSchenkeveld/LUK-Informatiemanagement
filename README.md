# Naslag Informatiemanagement (CE, Fontys)

Online naslag voor studenten bij de leeruitkomst Informatiemanagement.

Gepubliceerd via GitHub Pages vanuit de repo `MarcelSchenkeveld/LUK-Informatiemanagement` (branch main, hoofdmap).
Adres: https://marcelschenkeveld.github.io/LUK-Informatiemanagement/

## Opbouw

- `index.html`: hoofdpagina (overzicht). Alle pagina's gegroepeerd per bewijsstuk, plus links naar bibliotheek, LibraryGuides en Zoekwijzer. Dit is de link voor Canvas en Teams.
- `00-start-de-route.html`: de route (wat je minimaal doet en inlevert, zelf-momenten, gewoontes, afspraken).
- `01-bron-controleren.html` en volgende: stap-voor-stap-pagina's.
- `nav.js`: de navigatie. Zet op elke pagina de bovenbalk (Overzicht, De route, huidige pagina), onderaan de knoppen vorige / overzicht / volgende, en vult de overzichtslijsten op `index.html` en `00-start-de-route.html`. De paginalijst staat één keer, bovenin `nav.js`.

## Nieuwe pagina toevoegen

1. Maak de pagina naar het model van `01-bron-controleren.html`. Onderaan, vlak voor `</body>`: `<script src="nav.js"></script>`.
2. Zet in `nav.js` bij de betreffende regel in `PAGES` de status op `'klaar'` (de bestandsnamen van de geplande pagina's staan er al in; houd die aan, dan blijven links stabiel). Nieuwe, nog niet geplande pagina: regel toevoegen met `file`, `title`, `desc`, `group` en `status`.
3. Upload beide bestanden naar de repo (Add file > Upload files, zelfde naam) en commit. Binnen een minuut staat het online.

Pagina's met status `'volgt'` staan grijs in het overzicht en zijn niet klikbaar; ze tellen niet mee in vorige/volgende.

## Bijwerken en versies

Bestandsnamen blijven stabiel zodat links in Canvas en Teams blijven werken. Versienummers staan in de voettekst van elke pagina en in `VERSIES.md` in de projectmap. Bij een wijziging: bestand in de repo vervangen (zelfde naam) en committen.

Voortgangsvinkjes op de pagina's worden alleen in de browser van de student bewaard (localStorage); er wordt niets verzonden of opgeslagen op een server.
