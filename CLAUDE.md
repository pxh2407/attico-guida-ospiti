# Attico Panoramico — Guida ospiti (NUOVA versione, 2026-10-05)

Rifacimento professionale dell'app `CLAUDE\ATTICO PER INTERNO` (che resta intatta e online: il QR nella casa punta ancora a quella).

## File
- `testi.js` — **TUTTI i contenuti**, in 5 lingue (it/en/de/fr/es): etichette (UI), calendario rifiuti, guida della casa, dintorni, cose da fare, numeri. Per correggere un testo si tocca solo qui, in tutte e 5 le lingue.
- `app.js` — solo il funzionamento (disegna le pagine da testi.js).
- `index.html`, `style.css`, `manifest.json`, `termostato.html` (copia del simulatore), `images/` (copia delle foto).
- Cache busting `?v=N` in index.html: incrementarlo a ogni modifica.

## Funzioni
- 4 schede in basso: Home · La casa · Dintorni · Aiuto; dettagli in una "scheda" che sale dal basso.
- Home: meteo dal vivo (Open-Meteo, senza chiave), riquadro "Oggi" (rifiuti di stasera + fascia di silenzio calcolati dall'ora), pulsanti rapidi, regole, contatti.
- Lingua automatica dal telefono, ricordata; ricerca nella guida; lettura ad alta voce; copia password WiFi.
- Calendario rifiuti: `RIFIUTI_CALENDARIO` in testi.js (indice 0 = domenica). Se cambia, aggiornare anche la vecchia app e le locandine.

## Contatti con l'host: SOLO messaggi
- Dal 2026-10-05 nessun pulsante "Chiama" verso l'host (ospiti quasi tutti stranieri, l'utente preferisce scrivere): solo WhatsApp. Restano chiamabili i numeri dei ristoranti, della Guardia medica e delle emergenze.

## Mappe (2026-10-05)
- Leaflet 1.9.4 da cdnjs + tessere **OpenStreetMap standard** (`tile.openstreetmap.org`). ⚠️ CARTO ora chiede una API key: non usarlo.
- In `app.js` la variabile `L` è la LINGUA: Leaflet si usa come `LF = window.L`.
- Ogni luogo ha `pos: [lat, lng]`; distanza/tempo a piedi stimati (linea d'aria × 1,3, ~4,5 km/h). Pagina Dintorni: mappa generale con filtri per categoria; scheda di ogni luogo: mappa piccola casa→luogo + pulsante Google Maps.
- Le vecchie "foto" dei luoghi erano schermate di percorsi Google: tolte. Restano solo foto vere (Conad, colonnina EV, Castello, Piscina di Venere).

## Solo telefono (decisione 2026-10-06)
- L'app si usa SOLO su cellulare: foto sempre a tutta larghezza, una sotto l'altra, mai tagliate (`.foto-in`, `object-fit: contain`); niente gallerie a scorrimento laterale.
- Dove una scheda ha più foto, ognuna sta DENTRO il testo (in `corpo`, tutte e 5 le lingue) sopra la frase che descrive: rifiuti, luce veranda, videoproiettore.
- Luce veranda: `Luce-Veranda1.jpg` = cucina (etichetta "VERANDA LIGHT SWITCH"), `Luci-Veranda2.jpg` = bagno (accanto a "ACQUA CALDA"). Nella vecchia app i testi alternativi erano invertiti.

## Note
- Termostato: dalle lingue diverse dall'italiano si apre `termostato.html?lang=en`; aggiunto pulsante dorato "←" per tornare indietro.
- Immagini non usate tolte da questa cartella (gli originali restano in `ATTICO PER INTERNO\images`); `Cambio-Biancheria.jpg` compressa (era PNG da 1,2 MB).
- Pulsante rapido "Mangiare" (`#btnMangiare`): apre una scheda con SOLO la prima categoria di DINTORNI (ristoranti e bar), non la pagina Dintorni intera.
- Recensioni tolte su richiesta (2026-10-05): gli ospiti le hanno già viste prima di prenotare.
- Lettera di benvenuto tolta su richiesta (2026-10-05). Il testo originale resta nella vecchia app.
- Sezione "Tornate a trovarci / Disponibilità" tolta su richiesta (2026-10-05): agli ospiti già in casa non interessa.
- Foto chiavi `images/Chiavi.jpg`: rifatta con Pillow dalla foto dell'utente, numeri 1-6 in tondi blu grandi (stessa foto nella vecchia app). Nell'elenco numeri in tondi blu.
- Adagio-Adagio: nella vecchia app la mappa era sbagliata (era quella della Campagnola); qui c'è solo il pulsante "Indicazioni".
- Anteprima: configurazione `attico-ospiti-nuova` (porta 8793) in `CLAUDE\.claude\launch.json`.
- **Anteprima online (provvisoria) dal 2026-10-05:** https://pxh2407.github.io/attico-guida-ospiti/ — repo `pxh2407/attico-guida-ospiti`, branch `main` (push: `git push`). I QR nella casa puntano ancora alla vecchia app.
- `gh` non è installato: repo e Pages creati via API col token di `git credential fill`.
- Dopo ogni modifica: aggiornare questo file, incrementare `?v=N` e fare push.
