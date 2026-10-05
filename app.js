/* ===== Attico Panoramico — Guida ospiti: logica =====
   I testi sono tutti in testi.js. Qui c'è solo il funzionamento. */
(function () {
  "use strict";

  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ---------- Lingua ---------- */
  const CODICI = LINGUE.map(l => l.cod);
  function linguaIniziale() {
    try { const s = localStorage.getItem("attico_lingua"); if (CODICI.includes(s)) return s; } catch (e) {}
    const nav = (navigator.languages || [navigator.language || "it"]).map(x => x.slice(0, 2).toLowerCase());
    return nav.find(c => CODICI.includes(c)) || "en";
  }
  let L = linguaIniziale();
  const u = k => (UI[L] && UI[L][k]) || UI.it[k] || "";
  const tr = o => (o == null ? "" : typeof o === "string" ? o : (o[L] || o.it || ""));
  const infoLingua = () => LINGUE.find(l => l.cod === L);

  /* ---------- Indice delle voci della guida ---------- */
  const VOCI = {};
  GUIDA.forEach(c => c.voci.forEach(v => { VOCI[v.id] = v; }));
  const LUOGHI = {};
  DINTORNI.forEach(c => c.luoghi.forEach((l, i) => { l._id = l.id || (c.icona + i + tr(l.nome)); LUOGHI[l._id] = l; }));

  /* ---------- Testi fissi dell'interfaccia ---------- */
  function applicaUI() {
    document.documentElement.lang = L;
    $$("[data-t]").forEach(el => { el.textContent = u(el.dataset.t); });
    $("#cerca").placeholder = u("cerca");
    $("#langFlag").textContent = "🌐";
    $("#langCode").textContent = L.toUpperCase();
    $("#schedaAscolta").setAttribute("aria-label", u("ascolta"));
    $("#schedaChiudi").setAttribute("aria-label", u("chiudi"));
  }

  /* ---------- Contatti ---------- */
  function contatti() {
    ["#hostWa", "#hostWa2"].forEach(s => { $(s).href = CONTATTI.whatsapp; });
    ["#hostTel", "#hostTel2"].forEach(s => { $(s).href = "tel:" + CONTATTI.telefono; });
    $("#hostNumero").textContent = CONTATTI.telefonoVisibile;
    $("#codici").textContent = "CIR " + CONTATTI.cir + " · CIN " + CONTATTI.cin;
  }

  /* ---------- Oggi: rifiuti e silenzio ---------- */
  function fmtOra(h) {
    const d = new Date(2000, 0, 1, h, 0);
    return d.toLocaleTimeString(infoLingua().voce, { hour: "2-digit", minute: "2-digit" });
  }
  function statoSilenzio(now = new Date()) {
    const h = now.getHours() + now.getMinutes() / 60;
    for (const f of SILENZIO) {
      const dentro = f.da < f.a ? (h >= f.da && h < f.a) : (h >= f.da || h < f.a);
      if (dentro) return { ora: true, fascia: f };
    }
    // prossima fascia
    let migliore = null, dist = 99;
    SILENZIO.forEach(f => { const d = (f.da - h + 24) % 24; if (d < dist) { dist = d; migliore = f; } });
    return { ora: false, fascia: migliore };
  }
  function aggiornaOggi() {
    const now = new Date();
    $("#oggiData").textContent = u("oggi") + " · " + now.toLocaleDateString(infoLingua().voce, { weekday: "long", day: "numeric", month: "long" });
    const tipo = RIFIUTI_CALENDARIO[now.getDay()];
    if (tipo) {
      $("#rifEtichetta").textContent = u("rifiuti_stasera");
      $("#rifTipo").textContent = tr(RIFIUTI_TIPI[tipo]);
      $("#rifIcona").textContent = RIFIUTI_TIPI[tipo].icona.slice(0, 2);
    } else {
      $("#rifEtichetta").textContent = u("q_rifiuti");
      $("#rifTipo").textContent = u("nessuna_raccolta");
      $("#rifIcona").textContent = "♻️";
    }
    const s = statoSilenzio(now);
    $("#silEtichetta").textContent = s.ora ? u("silenzio_ora") : u("silenzio_prossimo");
    $("#silOra").textContent = (s.ora ? fmtOra(s.fascia.a) : fmtOra(s.fascia.da)) + " · " + tr(s.fascia);
  }

  /* ---------- Meteo (Open-Meteo, senza chiave) ---------- */
  const METEO_ICONE = [[0, "☀️"], [2, "🌤️"], [3, "☁️"], [48, "🌫️"], [57, "🌦️"], [67, "🌧️"], [77, "🌨️"], [82, "🌧️"], [86, "🌨️"], [99, "⛈️"]];
  let meteoDati = null;
  function mostraMeteo() {
    if (!meteoDati) return;
    const c = meteoDati.weather_code;
    const ic = (METEO_ICONE.find(([max]) => c <= max) || [0, "🌡️"])[1];
    const el = $("#meteo");
    el.textContent = ic + "  " + Math.round(meteoDati.temperature_2m) + "°C · " + u("meteo");
    el.hidden = false;
  }
  function caricaMeteo() {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=" + CONTATTI.casa.lat + "&longitude=" + CONTATTI.casa.lng + "&current=temperature_2m,weather_code&timezone=Europe%2FRome")
      .then(r => r.ok ? r.json() : null)
      .then(j => { if (j && j.current) { meteoDati = j.current; mostraMeteo(); } })
      .catch(() => {});
  }

  /* ---------- Guida ---------- */
  function guida() {
    $("#chips").innerHTML = GUIDA.map(c => '<button class="chip" data-cat="' + c.id + '">' + c.icona + " " + esc(tr(c.titolo)) + "</button>").join("");
    $("#guida").innerHTML = GUIDA.map(c =>
      '<section class="categoria" id="cat-' + c.id + '"><h2><span>' + c.icona + "</span>" + esc(tr(c.titolo)) + '</h2><div class="lista-voci">' +
      c.voci.map(v => '<button class="voce" data-apri="' + v.id + '" data-cerca="' + esc(testoRicerca(v, c)) + '"><span class="voce__icona">' + v.icona +
        '</span><span class="voce__titolo">' + esc(tr(v.titolo)) + "</span>" + (v.importante ? '<span class="voce__pin">★</span>' : "") +
        '<span class="freccia" aria-hidden="true">›</span></button>').join("") +
      "</div></section>").join("");
    filtra();
  }
  function testoRicerca(v, c) {
    const pezzi = [v.titolo, c.titolo, v.corpo].map(o => o ? Object.values(o).join(" ") : "");
    return pezzi.join(" ").replace(/<[^>]+>/g, " ").toLowerCase();
  }
  function filtra() {
    const q = $("#cerca").value.trim().toLowerCase();
    let visibili = 0;
    $$(".categoria").forEach(sec => {
      let n = 0;
      $$(".voce", sec).forEach(b => { const ok = !q || b.dataset.cerca.includes(q); b.hidden = !ok; if (ok) n++; });
      sec.hidden = n === 0; visibili += n;
    });
    $("#vuoto").hidden = visibili > 0;
    $("#chips").hidden = !!q;
  }

  /* ---------- Dintorni ---------- */
  function dintorni() {
    $("#dintorni").innerHTML = DINTORNI.map(c =>
      '<section class="categoria"><h2><span>' + c.icona + "</span>" + esc(tr(c.cat)) + '</h2><div class="luoghi">' +
      c.luoghi.map(l => '<button class="luogo" data-luogo="' + esc(l._id) + '"><span class="luogo__foto"' +
        (l.foto ? ' style="background-image:url(\'images/' + encodeURI(l.foto) + '\')"' : "") + ">" + (l.foto ? "" : (l.icona || c.icona)) +
        '</span><span class="luogo__info"><span class="luogo__nome">' + esc(tr(l.nome)) + '</span><span class="luogo__desc">' + esc(tr(l.desc)) +
        '</span><span class="luogo__azione">🧭 ' + esc(u("indicazioni")) + " · " + esc(l.auto ? u("in_auto") : u("a_piedi")) + "</span></span></button>").join("") +
      "</div></section>").join("");
    $("#esperienze").innerHTML = ESPERIENZE.map(e => '<a class="esperienza" href="' + e.url + '" target="_blank" rel="noopener"><span>' + e.icona + "</span>" + esc(tr(e)) + "</a>").join("");
  }

  /* ---------- Numeri ---------- */
  const fmtNum = n => n.length <= 6 ? n : n.replace(/^(\d{3})(\d{3})(\d+)$/, "$1 $2 $3");
  function numeri() {
    $("#numeri").innerHTML = NUMERI.map(g =>
      '<section class="gruppo' + (g.urgente ? " gruppo--urgente" : "") + '"><h2>' + esc(tr(g.gruppo)) + '</h2><div class="lista-voci">' +
      g.voci.map(v => '<a class="numero" href="tel:' + v.n + '"><span class="numero__nome">' + esc(tr(v)) +
        (v.alt ? '<span class="numero__alt">' + fmtNum(v.alt) + "</span>" : "") + '</span><span class="numero__num">' + fmtNum(v.n) + "</span></a>").join("") +
      "</div></section>").join("");
  }

  /* ---------- Contenuti speciali delle schede ---------- */
  function fotoHTML(lista) {
    if (!lista || !lista.length) return "";
    return '<div class="foto">' + lista.map(f => '<img src="images/' + encodeURI(f) + '" alt="" loading="lazy">').join("") + "</div>";
  }
  function speciale(v) {
    if (v.tipo === "wifi") {
      return campo(u("rete"), CONTATTI.wifiReti) + campo(u("password"), CONTATTI.wifiPassword, true) + campo(u("notebook"), CONTATTI.notebook) +
        '<a class="campo" href="tel:' + CONTATTI.telefono + '" style="text-decoration:none"><div><small>' + esc(u("telefono")) + "</small><code>" + CONTATTI.telefonoVisibile + "</code></div><span>📞</span></a>";
    }
    if (v.tipo === "chiavi") {
      return CHIAVI.map((k, i) => '<div class="chiave"><em>' + (i + 1) + "</em>" + (k.colore ? '<i style="background:' + k.colore + '"></i>' : '<i class="tele">📡</i>') + "<span>" + esc(tr(k)) + "</span></div>").join("");
    }
    if (v.tipo === "rifiuti") {
      const oggi = new Date();
      let h = '<div class="settimana">';
      for (let i = 0; i < 7; i++) {
        const d = new Date(oggi); d.setDate(oggi.getDate() + i);
        const t = RIFIUTI_CALENDARIO[d.getDay()];
        const nome = d.toLocaleDateString(infoLingua().voce, { weekday: "long" });
        h += '<div class="giorno' + (i === 0 ? " oggi-g" : "") + (t ? "" : " vuoto-g") + '"><b>' + esc(i === 0 ? u("oggi") : nome) + "</b><span>" +
          (t ? RIFIUTI_TIPI[t].icona + " " + esc(tr(RIFIUTI_TIPI[t])) : esc(u("nessuna"))) + "</span>" +
          (t ? '<i style="background:' + RIFIUTI_TIPI[t].colore + '"></i>' : "") + "</div>";
      }
      return h + "</div>";
    }
    if (v.tipo === "silenzio") {
      return orologio() + '<div class="tab">' + SILENZIO.map(f => "<div><span>" + esc(tr(f)) + "</span><strong>" + fmtOra(f.da) + " – " + fmtOra(f.a) + "</strong></div>").join("") + "</div>";
    }
    return "";
  }
  function campo(etichetta, valore, copia) {
    return '<div class="campo"><div><small>' + esc(etichetta) + "</small><code>" + esc(valore) + "</code></div>" +
      (copia ? '<button data-copia="' + esc(valore) + '">' + esc(u("copia")) + "</button>" : "") + "</div>";
  }
  /* Quadrante 24 ore con le fasce di silenzio e l'ora attuale */
  function orologio() {
    const cx = 110, cy = 110, r = 84;
    const pt = (h, rr) => { const a = (h / 24) * 2 * Math.PI - Math.PI / 2; return [cx + rr * Math.cos(a), cy + rr * Math.sin(a)]; };
    const arco = (da, a) => {
      const durata = (a - da + 24) % 24; const [x1, y1] = pt(da, r), [x2, y2] = pt(a, r);
      return '<path d="M' + x1 + " " + y1 + " A" + r + " " + r + " 0 " + (durata > 12 ? 1 : 0) + " 1 " + x2 + " " + y2 + '" stroke="#b3382c" stroke-width="18" fill="none" stroke-linecap="butt" opacity=".85"/>';
    };
    let s = '<svg class="orologio" viewBox="0 0 220 220" aria-hidden="true"><circle cx="110" cy="110" r="84" stroke="#e6ddcc" stroke-width="18" fill="none"/>';
    SILENZIO.forEach(f => { s += arco(f.da, f.a); });
    for (let h = 0; h < 24; h++) {
      const [x1, y1] = pt(h, 64), [x2, y2] = pt(h, h % 6 ? 60 : 56);
      s += '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="#5d6675" stroke-width="' + (h % 6 ? 1 : 2) + '"/>';
    }
    [0, 6, 12, 18].forEach(h => { const [x, y] = pt(h, 44); s += '<text x="' + x + '" y="' + (y + 5) + '" text-anchor="middle" font-size="14" font-weight="700" fill="#14233c" font-family="Inter,sans-serif">' + h + "</text>"; });
    const now = new Date(), hh = now.getHours() + now.getMinutes() / 60, [nx, ny] = pt(hh, 92);
    s += '<line x1="110" y1="110" x2="' + nx + '" y2="' + ny + '" stroke="#b8893a" stroke-width="3" stroke-linecap="round"/><circle cx="110" cy="110" r="6" fill="#b8893a"/><circle cx="' + nx + '" cy="' + ny + '" r="6" fill="#b8893a" stroke="#fff" stroke-width="2"/>';
    s += '<text x="110" y="140" text-anchor="middle" font-size="22" >🌙</text></svg>';
    return s;
  }

  /* ---------- Scheda di dettaglio ---------- */
  const scheda = $("#scheda"), velo = $("#velo");
  let schedaAperta = false;
  function apriScheda(icona, titolo, html) {
    fermaVoce();
    $("#schedaIcona").textContent = icona;
    $("#schedaTitolo").textContent = titolo;
    const corpo = $("#schedaCorpo");
    corpo.innerHTML = html; corpo.scrollTop = 0;
    scheda.hidden = false; velo.hidden = false;
    requestAnimationFrame(() => { scheda.classList.add("on"); velo.classList.add("on"); });
    document.body.style.overflow = "hidden";
    if (!schedaAperta) { history.pushState({ scheda: 1 }, ""); schedaAperta = true; }
    setTimeout(() => $("#schedaChiudi").focus({ preventScroll: true }), 50);
  }
  function chiudiScheda(daStoria) {
    if (!schedaAperta) return;
    fermaVoce();
    schedaAperta = false;
    scheda.classList.remove("on"); velo.classList.remove("on");
    document.body.style.overflow = "";
    setTimeout(() => { if (!schedaAperta) { scheda.hidden = true; velo.hidden = true; $("#schedaCorpo").innerHTML = ""; } }, 320);
    if (!daStoria) history.back();
  }
  function apriVoce(id) {
    const v = VOCI[id]; if (!v) return;
    let h;
    if (v.tipo === "rifiuti") h = speciale(v) + fotoHTML(v.foto) + tr(v.corpo);
    else if (v.tipo === "silenzio") h = tr(v.corpo) + speciale(v);
    else h = fotoHTML(v.foto) + speciale(v) + tr(v.corpo);
    if (v.video) h += '<div class="video"><iframe src="' + v.video + '" title="' + esc(tr(v.titolo)) + '" loading="lazy" allow="encrypted-media; picture-in-picture" allowfullscreen></iframe></div>';
    if (v.simulatore) h += '<div class="bottoni"><a class="btn btn--oro" href="termostato.html"><span>🎛️</span><b>' + esc(u("apri_simulatore")) + "</b></a></div>";
    if (v.luogo && LUOGHI[v.luogo]) h += '<div class="bottoni"><a class="btn btn--oro" href="' + urlPercorso(LUOGHI[v.luogo]) + '" target="_blank" rel="noopener"><span>🧭</span><b>' + esc(u("indicazioni")) + "</b></a></div>";
    apriScheda(v.icona, tr(v.titolo), h);
  }
  function urlPercorso(l) {
    return "https://www.google.com/maps/dir/?api=1&origin=" + CONTATTI.casa.lat + "," + CONTATTI.casa.lng +
      "&destination=" + encodeURIComponent(l.dest) + "&travelmode=" + (l.auto ? "driving" : "walking");
  }
  function apriLuogo(id) {
    const l = LUOGHI[id]; if (!l) return;
    let h = l.foto ? fotoHTML([l.foto]) : "";
    h += "<p>" + esc(tr(l.desc)) + "</p>";
    h += '<div class="bottoni"><a class="btn btn--oro" href="' + urlPercorso(l) + '" target="_blank" rel="noopener"><span>🧭</span><b>' + esc(u("indicazioni")) + " · " + esc(l.auto ? u("in_auto") : u("a_piedi")) + "</b></a></div>";
    if (l.tel) h += '<div class="bottoni">' + l.tel.map((t, i) => '<a class="btn btn--chiaro" href="tel:' + t + '"><span>📞</span><b>' + (l.telNomi ? esc(l.telNomi[i]) + " · " : "") + fmtNum(t.replace(/^\+39/, "")) + "</b></a>").join("") + "</div>";
    if (l.turni) h += '<div class="bottoni"><a class="btn btn--chiaro" href="https://milazzo.comune.digital/farmacie-di-turno/c/0" target="_blank" rel="noopener"><span>💊</span><b>' + esc(u("farmacie_turno")) + "</b></a></div>";
    if (l.tour) h += '<div class="bottoni"><a class="btn btn--chiaro" href="https://www.innovame.it/castellomilazzo/" target="_blank" rel="noopener"><span>🏰</span><b>' + esc(u("tour_virtuale")) + "</b></a></div>";
    if (l.mappa) h += '<p class="piccolo">' + esc(u("percorso")) + '</p><div class="mappa"><iframe src="' + l.mappa + '" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="' + esc(tr(l.nome)) + '"></iframe></div>';
    apriScheda("📍", tr(l.nome), h);
  }
  function apriLingue() {
    apriScheda("🌐", u("lingua"), '<div class="lingue">' + LINGUE.map(l =>
      '<button class="lingua' + (l.cod === L ? " attiva" : "") + '" data-lingua="' + l.cod + '"><span>' + l.bandiera + "</span>" + l.nome + "</button>").join("") +
      '</div><p class="piccolo" style="margin-top:16px">' + esc(u("installa")) + "</p>");
  }
  function cambiaLingua(c) {
    L = c;
    try { localStorage.setItem("attico_lingua", c); } catch (e) {}
    disegnaTutto();
    chiudiScheda();
  }

  /* ---------- Lettura ad alta voce ---------- */
  function fermaVoce() {
    if ("speechSynthesis" in window) speechSynthesis.cancel();
    $("#schedaAscolta").classList.remove("on");
    $("#schedaAscolta").textContent = "🔊";
  }
  function leggi() {
    if (!("speechSynthesis" in window)) return;
    if (speechSynthesis.speaking) { fermaVoce(); return; }
    const testo = $("#schedaTitolo").textContent + ". " + $("#schedaCorpo").innerText;
    const ut = new SpeechSynthesisUtterance(testo);
    ut.lang = infoLingua().voce; ut.rate = 0.95;
    ut.onend = fermaVoce;
    $("#schedaAscolta").classList.add("on");
    $("#schedaAscolta").textContent = "⏹";
    speechSynthesis.speak(ut);
  }

  /* ---------- Navigazione tra le viste ---------- */
  const VISTE = ["home", "guida", "dintorni", "aiuto"];
  function vai(nome, scorri = true) {
    if (!VISTE.includes(nome)) nome = "home";
    $$(".vista").forEach(v => { v.hidden = v.dataset.vista !== nome; });
    $$(".tabbar button").forEach(b => b.classList.toggle("attiva", b.dataset.vai === nome));
    if (location.hash.slice(1) !== nome) history.replaceState(history.state, "", "#" + nome);
    if (scorri) window.scrollTo(0, 0);
    aggiornaBarra();
  }
  function aggiornaBarra() {
    const home = !$("#v-home").hidden;
    $("#topbar").classList.toggle("solida", !home || window.scrollY > 260);
  }

  function disegnaTutto() {
    applicaUI(); aggiornaOggi(); guida(); dintorni(); numeri(); mostraMeteo();
  }

  /* ---------- Eventi ---------- */
  document.addEventListener("click", e => {
    const t = e.target.closest("[data-apri],[data-vai],[data-luogo],[data-cat],[data-copia],[data-lingua]");
    if (!t) return;
    if (t.dataset.vai) { e.preventDefault(); vai(t.dataset.vai); }
    else if (t.dataset.apri) apriVoce(t.dataset.apri);
    else if (t.dataset.luogo) apriLuogo(t.dataset.luogo);
    else if (t.dataset.lingua) cambiaLingua(t.dataset.lingua);
    else if (t.dataset.cat) { const s = $("#cat-" + t.dataset.cat); if (s) window.scrollTo({ top: s.getBoundingClientRect().top + window.scrollY - 76, behavior: "smooth" }); }
    else if (t.dataset.copia) {
      const ok = () => { const x = $("#toast"); x.textContent = "✓ " + u("copiato"); x.hidden = false; clearTimeout(ok.t); ok.t = setTimeout(() => { x.hidden = true; }, 1600); };
      if (navigator.clipboard) navigator.clipboard.writeText(t.dataset.copia).then(ok, ok); else ok();
    }
  });
  $("#langBtn").addEventListener("click", apriLingue);
  $("#schedaChiudi").addEventListener("click", () => chiudiScheda());
  $("#schedaAscolta").addEventListener("click", leggi);
  velo.addEventListener("click", () => chiudiScheda());
  document.addEventListener("keydown", e => { if (e.key === "Escape") chiudiScheda(); });
  window.addEventListener("popstate", () => { if (schedaAperta) chiudiScheda(true); });
  window.addEventListener("scroll", aggiornaBarra, { passive: true });
  $("#cerca").addEventListener("input", filtra);

  // trascinare giù la scheda per chiuderla (telefono)
  let y0 = null;
  $(".scheda__testa").addEventListener("touchstart", e => { y0 = e.touches[0].clientY; }, { passive: true });
  $(".scheda__testa").addEventListener("touchend", e => { if (y0 != null && e.changedTouches[0].clientY - y0 > 70) chiudiScheda(); y0 = null; });

  /* ---------- Avvio ---------- */
  contatti();
  disegnaTutto();
  vai(location.hash.slice(1) || "home", false);
  caricaMeteo();
  setInterval(aggiornaOggi, 60000);
})();
