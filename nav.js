/* Navigatie naslag Informatiemanagement (CE, Fontys)
   Eén lijst voor alle pagina's. Nieuwe pagina toevoegen: regel toevoegen aan PAGES
   (status 'klaar' zodra het bestand in de repo staat) en <script src="nav.js"></script>
   onderaan de nieuwe pagina zetten. Verder niets. */
(function () {
  var PAGES = [
    { file: 'index.html', title: 'Overzicht', desc: 'Alle pagina’s van de naslag op één plek.', group: 'start', status: 'klaar', hide: true },
    { file: '00-start-de-route.html', title: 'De route', desc: 'Hoe je aan deze leeruitkomst werkt, welk bewijs erbij past, waar het leren zit, en de drie afspraken. Lees dit eerst.', group: 'start', status: 'klaar' },

    { file: '01-bron-controleren.html', title: 'Een bron controleren', desc: 'Vijf vragen bij elke bron, met sterk/matig/zwak per vraag en een sjabloon voor je bronnentabel.', group: 'zoeken', status: 'klaar' },
    { file: '02-welke-bron-is-dit.html', title: 'Welke bron is dit?', desc: 'Van oorspronkelijke auteur tot uitlegsite: wat weegt zwaar, wat niet.', group: 'zoeken', status: 'volgt' },

    { file: '03-ai-als-leerpartner.html', title: 'AI als leerpartner', desc: 'KIES in vier stappen en de leerpartner-prompt per criterium.', group: 'ai', status: 'volgt' },
    { file: '04-voorspel-vraag-vergelijk.html', title: 'Voorspel, vraag, vergelijk', desc: 'Werkblad voor gewoonte 1: eerst zelf, dan AI, dan vergelijken.', group: 'ai', status: 'volgt' },
    { file: '05-werkwijze-in-vijf-regels.html', title: 'Je werkwijze in vijf regels', desc: 'Invullen en plakken bij elk bewijs waarin je AI gebruikte.', group: 'ai', status: 'volgt' },

    { file: '06-eigen-onderzoek-controleerbaar.html', title: 'Eigen onderzoek controleerbaar maken', desc: 'Aantallen, respondenten, citaten, methode: zo kan een ander het nakijken.', group: 'analyse', status: 'volgt' },
    { file: '07-tien-secondentest.html', title: 'De tien-secondentest', desc: 'Checklist voor je visualisatie: titel, eenheid, noemer, bron, en kun jij hem uitleggen.', group: 'analyse', status: 'volgt' },

    { file: '08-advies-onderbouwen.html', title: 'Advies onderbouwen', desc: 'Argumentatietabel: advies in één zin, argumenten met bron, en wat je bewijs niet dekt.', group: 'advies', status: 'volgt' },

    { file: '09-kies-a-of-b.html', title: 'Kies A of B', desc: 'Vier contrasten uit bewerkt studentenwerk: waaraan zie je kwaliteit?', group: 'algemeen', status: 'volgt' },
    { file: '10-je-leercontract.html', title: 'Je leercontract', desc: 'Invulhulp bij de vijf vragen, met een voorbeeld voor deze leeruitkomst.', group: 'algemeen', status: 'volgt' }
  ];

  var GROUPS = [
    { id: 'start', title: 'Begin hier', sub: 'De route door de leeruitkomst' },
    { id: 'zoeken', title: 'Zoeken en beoordelen', sub: 'Criterium 1, bijvoorbeeld een bronnentabel' },
    { id: 'ai', title: 'Werken met AI', sub: 'Zo blijft het jouw leerproces' },
    { id: 'analyse', title: 'Analyseren en visualiseren', sub: 'Criterium 2 en 3, bijvoorbeeld een analyse en een visualisatie' },
    { id: 'advies', title: 'Onderbouwen en reflecteren', sub: 'Criterium 4, bijvoorbeeld een onderbouwd advies met reflectie' },
    { id: 'algemeen', title: 'Kwaliteit en leercontract', sub: 'Voor het hele traject' }
  ];

  var CSS = '' +
    '.nb{background:#fff;border-bottom:1.5px solid #dddddd;font-family:Roboto,Arial,Helvetica,sans-serif;font-size:14.5px}' +
    '.nb .in{max-width:860px;margin:0 auto;padding:9px 18px;display:flex;align-items:center;gap:14px;flex-wrap:wrap}' +
    '.nb a{color:#663366;text-decoration:none;padding:4px 0}' +
    '.nb a:hover{text-decoration:underline}' +
    '.nb .brand{font-weight:700;margin-right:auto}' +
    '.nb .brand:before{content:"\\2302";margin-right:6px;font-size:16px}' +
    '.nb a.cur{border-bottom:2px solid #e6007e;font-weight:700}' +
    '.nb .crumb{color:#6b6b6b}' +
    '.nb .crumb b{color:#1a1a1a;font-weight:400}' +
    '.nbot{display:flex;justify-content:space-between;align-items:stretch;gap:10px;margin-top:36px;flex-wrap:wrap}' +
    '.nbot a{flex:1;min-width:140px;text-decoration:none;color:#663366;border:1.5px solid #dddddd;border-radius:8px;padding:10px 14px;font-size:14.5px;background:#fff}' +
    '.nbot a:hover{border-color:#663366}' +
    '.nbot a small{display:block;color:#6b6b6b;font-size:12.5px;margin-bottom:2px}' +
    '.nbot a b{display:block}' +
    '.nbot a.next{text-align:right}' +
    '.nbot a.home{text-align:center;flex:0 1 auto}' +
    '.nbot .empty{flex:1;min-width:140px}' +
    '.ov h2{margin-top:26px}' +
    '.ov .sub{margin:-4px 0 8px;color:#6b6b6b;font-size:14.5px}' +
    '.ov .list a,.ov .list div.soon{display:flex;gap:12px;align-items:flex-start;padding:11px 14px;border:1.5px solid #dddddd;border-radius:8px;margin:8px 0;text-decoration:none;color:#1a1a1a;background:#fff}' +
    '.ov .list a:hover{border-color:#663366;background:#faf6fa}' +
    '.ov .list div.soon{color:#6b6b6b;background:#f7f7f7;border-style:dashed}' +
    '.ov .list b{display:block;color:#663366}' +
    '.ov .list div.soon b{color:#6b6b6b}' +
    '.ov .list span{font-size:14.5px}' +
    '.ov .list .n{flex:none;width:28px;height:28px;border-radius:50%;background:#663366;color:#fff;font-weight:700;font-size:13px;display:inline-flex;align-items:center;justify-content:center;margin-top:1px}' +
    '.ov .list div.soon .n{background:#cfcfcf}' +
    '.ov .list .tag2{flex:none;font-size:11.5px;font-weight:700;color:#6b6b6b;border:1px solid #cfcfcf;border-radius:10px;padding:1px 8px;margin-top:4px;letter-spacing:.3px}';

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }

  function currentFile() {
    var p = location.pathname.split('/').pop();
    if (!p || p === '') p = 'index.html';
    return p;
  }

  function findIndex(file) {
    for (var i = 0; i < PAGES.length; i++) if (PAGES[i].file === file) return i;
    return -1;
  }

  function numberFor(pg) { var m = /^(\d\d)-/.exec(pg.file); return m ? String(parseInt(m[1], 10)) : ''; }

  function build() {
    var style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);

    var cur = currentFile();
    var ci = findIndex(cur);
    var curPage = ci >= 0 ? PAGES[ci] : null;
    var isIndex = cur === 'index.html';

    /* Bovenbalk */
    var top = document.createElement('div');
    top.className = 'nb';
    var html = '<div class="in"><a class="brand" href="index.html">Naslag Informatiemanagement</a>';
    if (isIndex) {
      html += '<a class="cur" href="index.html">Overzicht</a><a href="00-start-de-route.html">De route</a>';
    } else if (cur === '00-start-de-route.html') {
      html += '<a href="index.html">Overzicht</a><a class="cur" href="00-start-de-route.html">De route</a>';
    } else {
      html += '<a href="index.html">Overzicht</a><a href="00-start-de-route.html">De route</a>';
      if (curPage) html += '<span class="crumb">&rsaquo; <b>' + esc(curPage.title) + '</b></span>';
    }
    html += '</div>';
    top.innerHTML = html;
    var header = document.querySelector('header.top');
    if (header) header.parentNode.insertBefore(top, header); else document.body.insertBefore(top, document.body.firstChild);

    /* Onderaan: vorige / overzicht / volgende (alleen pagina's die klaar zijn) */
    var avail = PAGES.filter(function (p) { return p.status === 'klaar' && !p.hide; });
    var ai = -1;
    for (var k = 0; k < avail.length; k++) if (avail[k].file === cur) ai = k;
    var foot = document.querySelector('.foot');
    if (foot && !isIndex) {
      var bot = document.createElement('div');
      bot.className = 'nbot';
      var prev = ai > 0 ? avail[ai - 1] : null;
      var next = ai >= 0 && ai < avail.length - 1 ? avail[ai + 1] : null;
      var b = '';
      b += prev ? '<a class="prev" href="' + prev.file + '"><small>&larr; Vorige</small><b>' + esc(prev.title) + '</b></a>' : '<span class="empty"></span>';
      b += '<a class="home" href="index.html"><small>Naslag</small><b>Overzicht</b></a>';
      b += next ? '<a class="next" href="' + next.file + '"><small>Volgende &rarr;</small><b>' + esc(next.title) + '</b></a>' : '<span class="empty"></span>';
      bot.innerHTML = b;
      foot.parentNode.insertBefore(bot, foot);
    }

    /* Overzicht (index) en linklijst (route) */
    var ov = document.getElementById('naslag-overzicht');
    if (ov) {
      ov.className = (ov.className ? ov.className + ' ' : '') + 'ov';
      var o = '';
      GROUPS.forEach(function (g) {
        var items = PAGES.filter(function (p) { return p.group === g.id && !p.hide; });
        if (!items.length) return;
        o += '<h2>' + esc(g.title) + '</h2><p class="sub">' + esc(g.sub) + '</p><div class="list">';
        items.forEach(function (p) { o += item(p); });
        o += '</div>';
      });
      ov.innerHTML = o;
    }
    var ll = document.getElementById('naslag-links');
    if (ll) {
      ll.className = (ll.className ? ll.className + ' ' : '') + 'ov';
      var l = '<div class="list">';
      PAGES.filter(function (p) { return !p.hide && p.group !== 'start'; }).forEach(function (p) { l += item(p); });
      l += '</div>';
      ll.innerHTML = l;
    }
  }

  function item(p) {
    var n = numberFor(p);
    var num = n ? '<span class="n">' + n + '</span>' : '';
    if (p.status === 'klaar') {
      return '<a href="' + p.file + '">' + num + '<div><b>' + esc(p.title) + '</b><span>' + esc(p.desc) + '</span></div></a>';
    }
    return '<div class="soon">' + num + '<div><b>' + esc(p.title) + '</b><span>' + esc(p.desc) + '</span></div><span class="tag2">VOLGT</span></div>';
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build); else build();
})();
