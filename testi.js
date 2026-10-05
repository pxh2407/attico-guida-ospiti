/* =====================================================================
   ATTICO PANORAMICO — Guida ospiti (nuova versione)
   TUTTI i testi dell'app stanno qui, in 5 lingue: it, en, de, fr, es.
   Per correggere un testo: cambiarlo in tutte e 5 le lingue.
   ===================================================================== */

const CONTATTI = {
  telefono: "+393880775449",
  telefonoVisibile: "+39 388 077 5449",
  whatsapp: "https://wa.me/393880775449",
  wifiReti: "atticopanoramico_5g  ·  atticopanoramico_2.4g",
  wifiPassword: "pizzapizza",
  notebook: "atticopanoramico",
  casa: { lat: 38.2248203, lng: 15.2421605 },
  cir: "19083049C206347",
  cin: "IT083049C2FNPHRA9D"
};

const LINGUE = [
  { cod: "it", nome: "Italiano", bandiera: "🇮🇹", voce: "it-IT" },
  { cod: "en", nome: "English",  bandiera: "🇬🇧", voce: "en-GB" },
  { cod: "de", nome: "Deutsch",  bandiera: "🇩🇪", voce: "de-DE" },
  { cod: "fr", nome: "Français", bandiera: "🇫🇷", voce: "fr-FR" },
  { cod: "es", nome: "Español",  bandiera: "🇪🇸", voce: "es-ES" }
];

/* ---------------- Etichette dell'interfaccia ---------------- */
const UI = {
  it: {
    tab_home: "Home", tab_guida: "La casa", tab_dintorni: "Dintorni", tab_aiuto: "Aiuto",
    benvenuti: "Benvenuti", sottotitolo: "La tua oasi a Milazzo",
    oggi: "Oggi", rifiuti_stasera: "Stasera, dalle 20:00, si deposita", nessuna_raccolta: "Nessuna raccolta stasera", nessuna: "Nessuna raccolta",
    silenzio_ora: "Fascia di silenzio in corso, fino alle", silenzio_prossimo: "Prossima fascia di silenzio alle",
    meteo: "Milazzo, ora",
    rapidi: "A portata di mano",
    q_wifi: "WiFi", q_chiavi: "Chiavi", q_rifiuti: "Rifiuti", q_clima: "Clima", q_mangiare: "Mangiare", q_sos: "Emergenze",
    regole_titolo: "Regole della casa", regole_sotto: "Poche cose, importanti per tutti",
    r_silenzio: "Silenzio dalle 22:00 alle 8:00 e dalle 14:00 alle 16:00",
    r_rifiuti: "Rifiuti dalle 20:00, nel cassonetto a sinistra dell'ingresso del garage",
    r_pioggia: "Quando uscite o piove forte, chiudete le finestre della veranda",
    r_clima: "Climatizzatori a 24–26 °C, spenti quando siete fuori",
    host_titolo: "Siamo qui per voi", host_testo: "Per qualsiasi necessità scriveteci un messaggio su WhatsApp: rispondiamo di persona.", scrivici: "Scriveteci su WhatsApp", tutti: "Tutti", appartamento: "Attico Panoramico", apri_maps: "Apri in Google Maps", circa: "circa",
    chiama: "Chiama", whatsapp: "WhatsApp",
    guida_titolo: "La casa", guida_sotto: "Tutto quello che serve, stanza per stanza",
    cerca: "Cerca: forno, chiavi, wifi…", nessun_risultato: "Nessun risultato. Provate con un'altra parola.",
    dintorni_titolo: "Dintorni", dintorni_sotto: "Percorsi a piedi dall'Attico Panoramico",
    indicazioni: "Indicazioni", a_piedi: "a piedi", in_auto: "in auto", percorso: "Percorso sulla mappa",
    cose_da_fare: "Cose da fare", mappe_geo: "Mappe geografiche",
    aiuto_titolo: "Aiuto", aiuto_sotto: "Emergenze e numeri utili a Milazzo",
    emergenza: "Emergenza", emergenza_testo: "Numero unico europeo di emergenza",
    host_breve: "I vostri host",
    ascolta: "Ascolta", ferma: "Ferma", copia: "Copia", copiato: "Copiato!", chiudi: "Chiudi",
    lingua: "Lingua", apri_simulatore: "Apri il simulatore del termostato",
    farmacie_turno: "Farmacie di turno a Milazzo", tour_virtuale: "Tour virtuale del Castello",
    video: "Guarda il video",
    rete: "Reti WiFi", password: "Password", notebook: "Nome del notebook", telefono: "Telefono",
    installa: "Aggiungi alla schermata Home per averla sempre a portata di mano."
  },
  en: {
    tab_home: "Home", tab_guida: "The house", tab_dintorni: "Nearby", tab_aiuto: "Help",
    benvenuti: "Welcome", sottotitolo: "Your oasis in Milazzo",
    oggi: "Today", rifiuti_stasera: "Tonight, from 8 pm, put out", nessuna_raccolta: "No collection tonight", nessuna: "No collection",
    silenzio_ora: "Quiet hours now, until", silenzio_prossimo: "Next quiet hours from",
    meteo: "Milazzo, now",
    rapidi: "At your fingertips",
    q_wifi: "WiFi", q_chiavi: "Keys", q_rifiuti: "Waste", q_clima: "Climate", q_mangiare: "Eat & drink", q_sos: "Emergency",
    regole_titolo: "House rules", regole_sotto: "Just a few things that matter to everyone",
    r_silenzio: "Quiet from 10 pm to 8 am and from 2 pm to 4 pm",
    r_rifiuti: "Waste from 8 pm, in the bin to the left of the garage entrance",
    r_pioggia: "When you go out or it rains heavily, close the veranda windows",
    r_clima: "Air conditioners at 24–26 °C, off when you are out",
    host_titolo: "We are here for you", host_testo: "For anything at all, send us a WhatsApp message: we answer personally.", scrivici: "Message us on WhatsApp", tutti: "All", appartamento: "Attico Panoramico", apri_maps: "Open in Google Maps", circa: "about",
    chiama: "Call", whatsapp: "WhatsApp",
    guida_titolo: "The house", guida_sotto: "Everything you need, room by room",
    cerca: "Search: oven, keys, wifi…", nessun_risultato: "No results. Try another word.",
    dintorni_titolo: "Nearby", dintorni_sotto: "Walking routes from Attico Panoramico",
    indicazioni: "Directions", a_piedi: "on foot", in_auto: "by car", percorso: "Route on the map",
    cose_da_fare: "Things to do", mappe_geo: "Maps",
    aiuto_titolo: "Help", aiuto_sotto: "Emergencies and useful numbers in Milazzo",
    emergenza: "Emergency", emergenza_testo: "Single European emergency number",
    host_breve: "Your hosts",
    ascolta: "Listen", ferma: "Stop", copia: "Copy", copiato: "Copied!", chiudi: "Close",
    lingua: "Language", apri_simulatore: "Open the thermostat simulator",
    farmacie_turno: "Pharmacies on duty in Milazzo", tour_virtuale: "Virtual tour of the Castle",
    video: "Watch the video",
    rete: "WiFi networks", password: "Password", notebook: "Notebook name", telefono: "Phone",
    installa: "Add it to your Home screen to keep it at hand."
  },
  de: {
    tab_home: "Start", tab_guida: "Das Haus", tab_dintorni: "Umgebung", tab_aiuto: "Hilfe",
    benvenuti: "Willkommen", sottotitolo: "Ihre Oase in Milazzo",
    oggi: "Heute", rifiuti_stasera: "Heute Abend ab 20 Uhr bitte rausstellen", nessuna_raccolta: "Heute Abend keine Abholung", nessuna: "Keine Abholung",
    silenzio_ora: "Ruhezeit läuft, bis", silenzio_prossimo: "Nächste Ruhezeit ab",
    meteo: "Milazzo, jetzt",
    rapidi: "Schnell zur Hand",
    q_wifi: "WLAN", q_chiavi: "Schlüssel", q_rifiuti: "Müll", q_clima: "Klima", q_mangiare: "Essen", q_sos: "Notfall",
    regole_titolo: "Hausregeln", regole_sotto: "Wenige Dinge, wichtig für alle",
    r_silenzio: "Ruhe von 22 bis 8 Uhr und von 14 bis 16 Uhr",
    r_rifiuti: "Müll ab 20 Uhr in den Container links von der Garageneinfahrt",
    r_pioggia: "Wenn Sie ausgehen oder es stark regnet, die Verandafenster schließen",
    r_clima: "Klimaanlagen auf 24–26 °C, ausschalten, wenn Sie weg sind",
    host_titolo: "Wir sind für Sie da", host_testo: "Bei jedem Anliegen schreiben Sie uns eine WhatsApp-Nachricht: wir antworten persönlich.", scrivici: "Schreiben Sie uns auf WhatsApp", tutti: "Alle", appartamento: "Attico Panoramico", apri_maps: "In Google Maps öffnen", circa: "ca.",
    chiama: "Anrufen", whatsapp: "WhatsApp",
    guida_titolo: "Das Haus", guida_sotto: "Alles Nötige, Raum für Raum",
    cerca: "Suchen: Ofen, Schlüssel, WLAN…", nessun_risultato: "Keine Ergebnisse. Versuchen Sie ein anderes Wort.",
    dintorni_titolo: "Umgebung", dintorni_sotto: "Fußwege vom Attico Panoramico",
    indicazioni: "Route", a_piedi: "zu Fuß", in_auto: "mit dem Auto", percorso: "Route auf der Karte",
    cose_da_fare: "Unternehmungen", mappe_geo: "Landkarten",
    aiuto_titolo: "Hilfe", aiuto_sotto: "Notfälle und nützliche Nummern in Milazzo",
    emergenza: "Notruf", emergenza_testo: "Einheitliche europäische Notrufnummer",
    host_breve: "Ihre Gastgeber",
    ascolta: "Vorlesen", ferma: "Stopp", copia: "Kopieren", copiato: "Kopiert!", chiudi: "Schließen",
    lingua: "Sprache", apri_simulatore: "Thermostat-Simulator öffnen",
    farmacie_turno: "Apotheken im Notdienst in Milazzo", tour_virtuale: "Virtueller Rundgang durch die Burg",
    video: "Video ansehen",
    rete: "WLAN-Netze", password: "Passwort", notebook: "Name des Notebooks", telefono: "Telefon",
    installa: "Zum Startbildschirm hinzufügen, um sie immer griffbereit zu haben."
  },
  fr: {
    tab_home: "Accueil", tab_guida: "La maison", tab_dintorni: "Alentours", tab_aiuto: "Aide",
    benvenuti: "Bienvenue", sottotitolo: "Votre oasis à Milazzo",
    oggi: "Aujourd'hui", rifiuti_stasera: "Ce soir, à partir de 20 h, sortir", nessuna_raccolta: "Pas de collecte ce soir", nessuna: "Pas de collecte",
    silenzio_ora: "Heures de silence en cours, jusqu'à", silenzio_prossimo: "Prochaines heures de silence à",
    meteo: "Milazzo, maintenant",
    rapidi: "À portée de main",
    q_wifi: "WiFi", q_chiavi: "Clés", q_rifiuti: "Déchets", q_clima: "Climat", q_mangiare: "Manger", q_sos: "Urgences",
    regole_titolo: "Règles de la maison", regole_sotto: "Peu de choses, importantes pour tous",
    r_silenzio: "Silence de 22 h à 8 h et de 14 h à 16 h",
    r_rifiuti: "Déchets à partir de 20 h, dans le conteneur à gauche de l'entrée du garage",
    r_pioggia: "Quand vous sortez ou qu'il pleut fort, fermez les fenêtres de la véranda",
    r_clima: "Climatiseurs à 24–26 °C, éteints quand vous êtes absents",
    host_titolo: "Nous sommes là pour vous", host_testo: "Pour toute demande, envoyez-nous un message WhatsApp : nous répondons personnellement.", scrivici: "Écrivez-nous sur WhatsApp", tutti: "Tous", appartamento: "Attico Panoramico", apri_maps: "Ouvrir dans Google Maps", circa: "env.",
    chiama: "Appeler", whatsapp: "WhatsApp",
    guida_titolo: "La maison", guida_sotto: "Tout ce qu'il faut, pièce par pièce",
    cerca: "Rechercher : four, clés, wifi…", nessun_risultato: "Aucun résultat. Essayez un autre mot.",
    dintorni_titolo: "Alentours", dintorni_sotto: "Itinéraires à pied depuis l'Attico Panoramico",
    indicazioni: "Itinéraire", a_piedi: "à pied", in_auto: "en voiture", percorso: "Itinéraire sur la carte",
    cose_da_fare: "Que faire", mappe_geo: "Cartes",
    aiuto_titolo: "Aide", aiuto_sotto: "Urgences et numéros utiles à Milazzo",
    emergenza: "Urgence", emergenza_testo: "Numéro d'urgence européen unique",
    host_breve: "Vos hôtes",
    ascolta: "Écouter", ferma: "Arrêter", copia: "Copier", copiato: "Copié !", chiudi: "Fermer",
    lingua: "Langue", apri_simulatore: "Ouvrir le simulateur du thermostat",
    farmacie_turno: "Pharmacies de garde à Milazzo", tour_virtuale: "Visite virtuelle du Château",
    video: "Voir la vidéo",
    rete: "Réseaux WiFi", password: "Mot de passe", notebook: "Nom du notebook", telefono: "Téléphone",
    installa: "Ajoutez-la à l'écran d'accueil pour l'avoir toujours sous la main."
  },
  es: {
    tab_home: "Inicio", tab_guida: "La casa", tab_dintorni: "Alrededores", tab_aiuto: "Ayuda",
    benvenuti: "Bienvenidos", sottotitolo: "Tu oasis en Milazzo",
    oggi: "Hoy", rifiuti_stasera: "Esta noche, desde las 20:00, se saca", nessuna_raccolta: "Sin recogida esta noche", nessuna: "Sin recogida",
    silenzio_ora: "Horario de silencio en curso, hasta las", silenzio_prossimo: "Próximo horario de silencio a las",
    meteo: "Milazzo, ahora",
    rapidi: "Al alcance de la mano",
    q_wifi: "WiFi", q_chiavi: "Llaves", q_rifiuti: "Basura", q_clima: "Clima", q_mangiare: "Comer", q_sos: "Emergencias",
    regole_titolo: "Normas de la casa", regole_sotto: "Pocas cosas, importantes para todos",
    r_silenzio: "Silencio de 22:00 a 8:00 y de 14:00 a 16:00",
    r_rifiuti: "Basura desde las 20:00, en el contenedor a la izquierda de la entrada del garaje",
    r_pioggia: "Al salir o con lluvia fuerte, cerrad las ventanas de la veranda",
    r_clima: "Aire acondicionado a 24–26 °C, apagado cuando no estéis",
    host_titolo: "Estamos aquí para vosotros", host_testo: "Para cualquier necesidad, enviadnos un mensaje por WhatsApp: respondemos en persona.", scrivici: "Escribidnos por WhatsApp", tutti: "Todos", appartamento: "Attico Panoramico", apri_maps: "Abrir en Google Maps", circa: "aprox.",
    chiama: "Llamar", whatsapp: "WhatsApp",
    guida_titolo: "La casa", guida_sotto: "Todo lo necesario, habitación por habitación",
    cerca: "Buscar: horno, llaves, wifi…", nessun_risultato: "Sin resultados. Probad con otra palabra.",
    dintorni_titolo: "Alrededores", dintorni_sotto: "Rutas a pie desde el Attico Panoramico",
    indicazioni: "Cómo llegar", a_piedi: "a pie", in_auto: "en coche", percorso: "Ruta en el mapa",
    cose_da_fare: "Qué hacer", mappe_geo: "Mapas",
    aiuto_titolo: "Ayuda", aiuto_sotto: "Emergencias y números útiles en Milazzo",
    emergenza: "Emergencia", emergenza_testo: "Número único europeo de emergencias",
    host_breve: "Vuestros anfitriones",
    ascolta: "Escuchar", ferma: "Parar", copia: "Copiar", copiato: "¡Copiado!", chiudi: "Cerrar",
    lingua: "Idioma", apri_simulatore: "Abrir el simulador del termostato",
    farmacie_turno: "Farmacias de guardia en Milazzo", tour_virtuale: "Visita virtual del Castillo",
    video: "Ver el vídeo",
    rete: "Redes WiFi", password: "Contraseña", notebook: "Nombre del portátil", telefono: "Teléfono",
    installa: "Añádela a la pantalla de inicio para tenerla siempre a mano."
  }
};

/* ---------------- Raccolta rifiuti ----------------
   Indice = giorno della settimana (0 domenica … 6 sabato).
   Aggiornato al calendario del 2026-09-26. */
const RIFIUTI_TIPI = {
  organico: { icona: "🍂", colore: "#8a6d3b", it: "Umido organico", en: "Organic waste", de: "Biomüll", fr: "Déchets organiques", es: "Orgánico" },
  indiff:   { icona: "🗑️", colore: "#5b6470", it: "Indifferenziato", en: "General waste", de: "Restmüll", fr: "Ordures ménagères", es: "Resto (no reciclable)" },
  carta:    { icona: "📦", colore: "#2f6fae", it: "Carta e cartone", en: "Paper and cardboard", de: "Papier und Karton", fr: "Papier et carton", es: "Papel y cartón" },
  plastica: { icona: "🧴", colore: "#c79a1e", it: "Plastica", en: "Plastic", de: "Kunststoff", fr: "Plastique", es: "Plástico" },
  organicoVetro: { icona: "🍂🍾", colore: "#2f7d55", it: "Umido organico e vetro", en: "Organic waste and glass", de: "Biomüll und Glas", fr: "Déchets organiques et verre", es: "Orgánico y vidrio" }
};
const RIFIUTI_CALENDARIO = ["organico", "indiff", "carta", "organico", "plastica", "organicoVetro", null];

/* ---------------- Guida della casa ----------------
   Ogni voce: id, icona, titolo {5 lingue}, foto [], corpo {5 lingue, HTML}.
   Speciali: tipo "wifi", "chiavi", "rifiuti", "silenzio" (disegnati da app.js). */
const GUIDA = [
  {
    id: "arrivo", icona: "🔑",
    titolo: { it: "Accesso e arrivo", en: "Access & arrival", de: "Zugang & Ankunft", fr: "Accès et arrivée", es: "Acceso y llegada" },
    voci: [
      { id: "wifi", icona: "📶", tipo: "wifi",
        titolo: { it: "WiFi e contatti", en: "WiFi & contacts", de: "WLAN & Kontakte", fr: "WiFi et contacts", es: "WiFi y contactos" } },
      { id: "chiavi", icona: "🔑", tipo: "chiavi", foto: ["Chiavi.jpg"],
        titolo: { it: "Chiavi", en: "Keys", de: "Schlüssel", fr: "Clés", es: "Llaves" } },
      { id: "imposta", icona: "🧾", foto: ["Imposta-di-soggiorno.jpg"],
        titolo: { it: "Imposta di soggiorno", en: "Tourist tax", de: "Kurtaxe", fr: "Taxe de séjour", es: "Tasa turística" },
        corpo: {
          it: `<p>L'imposta di soggiorno è pari a <strong>€ 1 al giorno per ciascun ospite</strong> ed è applicata per un massimo di <strong>5 giorni consecutivi</strong>.</p><p class="evid">I bambini di età inferiore ai <strong>13 anni</strong> sono esenti.</p><p>Prima della partenza vi sarà rilasciata <strong>regolare ricevuta</strong> dell'importo versato.</p><p class="piccolo">Regolamento: Atto N. 62 del 26 giugno 2023</p>`,
          en: `<p>The tourist tax is <strong>€1 per guest per day</strong>, charged for a maximum of <strong>5 consecutive days</strong>.</p><p class="evid">Children under <strong>13</strong> are exempt.</p><p>Before you leave you will receive an <strong>official receipt</strong> for the amount paid.</p><p class="piccolo">Regulation: Act No. 62 of 26 June 2023</p>`,
          de: `<p>Die Kurtaxe beträgt <strong>1 € pro Gast und Tag</strong> und wird für höchstens <strong>5 aufeinanderfolgende Tage</strong> erhoben.</p><p class="evid">Kinder unter <strong>13 Jahren</strong> sind befreit.</p><p>Vor der Abreise erhalten Sie eine <strong>ordnungsgemäße Quittung</strong> über den gezahlten Betrag.</p><p class="piccolo">Verordnung: Akt Nr. 62 vom 26. Juni 2023</p>`,
          fr: `<p>La taxe de séjour est de <strong>1 € par jour et par personne</strong>, appliquée au maximum pendant <strong>5 jours consécutifs</strong>.</p><p class="evid">Les enfants de moins de <strong>13 ans</strong> sont exonérés.</p><p>Avant votre départ, un <strong>reçu officiel</strong> du montant versé vous sera remis.</p><p class="piccolo">Règlement : Acte n° 62 du 26 juin 2023</p>`,
          es: `<p>La tasa turística es de <strong>1 € por huésped y día</strong>, aplicada como máximo durante <strong>5 días consecutivos</strong>.</p><p class="evid">Los niños menores de <strong>13 años</strong> están exentos.</p><p>Antes de la salida recibiréis el <strong>recibo oficial</strong> del importe pagado.</p><p class="piccolo">Reglamento: Acta n.º 62 del 26 de junio de 2023</p>`
        } },
      { id: "parcheggio", icona: "🅿️", foto: ["Parcheggio.jpg"],
        titolo: { it: "Parcheggio a pagamento", en: "Paid parking", de: "Gebührenpflichtiges Parken", fr: "Stationnement payant", es: "Aparcamiento de pago" },
        corpo: {
          it: `<p>Le <strong>strisce blu</strong> si pagano al parcometro: monete o contactless (VISA, Mastercard, Apple Pay, Google Pay, Samsung Pay).</p><div class="tab"><div><span>A pagamento</span><strong>8:30–13:30 · 15:30–20:30</strong></div><div><span>Gratuito</span><strong>13:30–15:30 · 20:30–8:30</strong></div></div><p class="piccolo">Tutti i giorni. Inserite la targa nel display, poi pagate con monete nella fessura o con la carta sul simbolo blu a onde.</p>`,
          en: `<p><strong>Blue lines</strong> are paid at the meter: coins or contactless (VISA, Mastercard, Apple Pay, Google Pay, Samsung Pay).</p><div class="tab"><div><span>Paid</span><strong>8:30–13:30 · 15:30–20:30</strong></div><div><span>Free</span><strong>13:30–15:30 · 20:30–8:30</strong></div></div><p class="piccolo">Every day. Enter your plate number on the display, then pay with coins in the slot or tap your card on the blue wave symbol.</p>`,
          de: `<p><strong>Blaue Parkplätze</strong> zahlt man am Automaten: Münzen oder kontaktlos (VISA, Mastercard, Apple Pay, Google Pay, Samsung Pay).</p><div class="tab"><div><span>Gebührenpflichtig</span><strong>8:30–13:30 · 15:30–20:30</strong></div><div><span>Kostenlos</span><strong>13:30–15:30 · 20:30–8:30</strong></div></div><p class="piccolo">Täglich. Kennzeichen im Display eingeben, dann mit Münzen im Schlitz oder mit der Karte am blauen Wellensymbol bezahlen.</p>`,
          fr: `<p>Les <strong>places bleues</strong> se paient à l'horodateur : pièces ou sans contact (VISA, Mastercard, Apple Pay, Google Pay, Samsung Pay).</p><div class="tab"><div><span>Payant</span><strong>8:30–13:30 · 15:30–20:30</strong></div><div><span>Gratuit</span><strong>13:30–15:30 · 20:30–8:30</strong></div></div><p class="piccolo">Tous les jours. Saisissez votre plaque sur l'écran, puis payez avec des pièces dans la fente ou avec la carte sur le symbole bleu à ondes.</p>`,
          es: `<p>Las <strong>líneas azules</strong> se pagan en el parquímetro: monedas o contactless (VISA, Mastercard, Apple Pay, Google Pay, Samsung Pay).</p><div class="tab"><div><span>De pago</span><strong>8:30–13:30 · 15:30–20:30</strong></div><div><span>Gratis</span><strong>13:30–15:30 · 20:30–8:30</strong></div></div><p class="piccolo">Todos los días. Introducid la matrícula en la pantalla y pagad con monedas en la ranura o con la tarjeta sobre el símbolo azul de ondas.</p>`
        } },
      { id: "ev", icona: "🔌", foto: ["Stazione1.webp"], luogo: "enelx",
        titolo: { it: "Ricarica auto elettriche", en: "EV charging", de: "E-Auto laden", fr: "Recharge véhicules électriques", es: "Carga de coches eléctricos" },
        corpo: {
          it: `<p>La stazione di ricarica <strong>Enel X</strong> più vicina è in <strong>Via XX Settembre</strong>, a circa 200 metri dall'appartamento.</p>`,
          en: `<p>The nearest <strong>Enel X</strong> charging station is in <strong>Via XX Settembre</strong>, about 200 metres from the apartment.</p>`,
          de: `<p>Die nächste <strong>Enel X</strong>-Ladestation befindet sich in der <strong>Via XX Settembre</strong>, etwa 200 Meter von der Wohnung entfernt.</p>`,
          fr: `<p>La borne <strong>Enel X</strong> la plus proche se trouve <strong>Via XX Settembre</strong>, à environ 200 mètres de l'appartement.</p>`,
          es: `<p>La estación de carga <strong>Enel X</strong> más cercana está en la <strong>Via XX Settembre</strong>, a unos 200 metros del apartamento.</p>`
        } }
    ]
  },
  {
    id: "clima", icona: "🌡️",
    titolo: { it: "Clima e comfort", en: "Climate & comfort", de: "Klima & Komfort", fr: "Climat et confort", es: "Clima y confort" },
    voci: [
      { id: "termostato", icona: "🌡️", simulatore: true, foto: ["Cronotermostato.jpg"],
        titolo: { it: "Termostato riscaldamento", en: "Heating thermostat", de: "Heizungsthermostat", fr: "Thermostat du chauffage", es: "Termostato de la calefacción" },
        corpo: {
          it: `<p>Si trova <strong>a destra della porta d'ingresso della cucina</strong>.</p><p>Il simulatore interattivo vi mostra passo per passo come usarlo.</p>`,
          en: `<p>It is <strong>to the right of the kitchen door</strong>.</p><p>The interactive simulator shows you step by step how to use it.</p>`,
          de: `<p>Es befindet sich <strong>rechts neben der Küchentür</strong>.</p><p>Der interaktive Simulator zeigt Ihnen Schritt für Schritt die Bedienung.</p>`,
          fr: `<p>Il se trouve <strong>à droite de la porte de la cuisine</strong>.</p><p>Le simulateur interactif vous montre pas à pas comment l'utiliser.</p>`,
          es: `<p>Está <strong>a la derecha de la puerta de la cocina</strong>.</p><p>El simulador interactivo os muestra paso a paso cómo usarlo.</p>`
        } },
      { id: "clima", icona: "❄️",
        titolo: { it: "Climatizzatori", en: "Air conditioning", de: "Klimaanlagen", fr: "Climatisation", es: "Aire acondicionado" },
        corpo: {
          it: `<p class="evid">Regolate la temperatura sui <strong>24–26 °C</strong>: è il comfort ideale. Temperature più basse fanno male alla salute e consumano molta energia.</p><p>Tenete <strong>porte e finestre chiuse</strong> mentre sono accesi e <strong>spegneteli quando uscite</strong>.</p>`,
          en: `<p class="evid">Set the temperature to <strong>24–26 °C</strong> for ideal comfort. Lower temperatures are bad for your health and use a lot of energy.</p><p>Keep <strong>doors and windows closed</strong> while they are on, and <strong>switch them off when you go out</strong>.</p>`,
          de: `<p class="evid">Stellen Sie <strong>24–26 °C</strong> ein: das ist der ideale Komfort. Niedrigere Temperaturen schaden der Gesundheit und verbrauchen viel Energie.</p><p>Halten Sie <strong>Türen und Fenster geschlossen</strong>, solange sie laufen, und <strong>schalten Sie sie aus, wenn Sie gehen</strong>.</p>`,
          fr: `<p class="evid">Réglez la température sur <strong>24–26 °C</strong> pour un confort idéal. Des températures plus basses nuisent à la santé et consomment beaucoup d'énergie.</p><p>Gardez <strong>portes et fenêtres fermées</strong> pendant l'utilisation et <strong>éteignez-les quand vous sortez</strong>.</p>`,
          es: `<p class="evid">Poned la temperatura a <strong>24–26 °C</strong>: es el confort ideal. Temperaturas más bajas perjudican la salud y gastan mucha energía.</p><p>Mantened <strong>puertas y ventanas cerradas</strong> mientras funcionan y <strong>apagadlos al salir</strong>.</p>`
        } },
      { id: "infissi", icona: "🪟", foto: ["Infissi-1.jpg"],
        titolo: { it: "Avvolgibili e porta a vetri", en: "Shutters & glass door", de: "Rollläden & Glastür", fr: "Volets et porte vitrée", es: "Persianas y puerta de cristal" },
        corpo: {
          it: `<p>Gli <strong>avvolgibili</strong> si alzano e si abbassano con i pulsanti indicati nella foto.</p><p>La <strong>porta a vetri</strong> scorre con il maniglione verso il basso; si blocca alla chiusura con il maniglione verso l'alto.</p>`,
          en: `<p>The <strong>roller shutters</strong> go up and down with the buttons shown in the photo.</p><p>The <strong>glass door</strong> slides with the handle turned down; it locks when closed with the handle turned up.</p>`,
          de: `<p>Die <strong>Rollläden</strong> bedienen Sie mit den Tasten auf dem Foto.</p><p>Die <strong>Glastür</strong> lässt sich mit dem Griff nach unten schieben; beim Schließen wird sie mit dem Griff nach oben verriegelt.</p>`,
          fr: `<p>Les <strong>volets roulants</strong> se lèvent et s'abaissent avec les boutons indiqués sur la photo.</p><p>La <strong>porte vitrée</strong> coulisse avec la poignée vers le bas ; elle se verrouille à la fermeture avec la poignée vers le haut.</p>`,
          es: `<p>Las <strong>persianas</strong> suben y bajan con los botones de la foto.</p><p>La <strong>puerta de cristal</strong> se desliza con la manilla hacia abajo; se bloquea al cerrar con la manilla hacia arriba.</p>`
        } },
      { id: "tenda", icona: "🌙", foto: ["IMG_20221209_113612.jpg"],
        titolo: { it: "Tenda oscurante cameretta", en: "Blackout blind (small bedroom)", de: "Verdunkelungsrollo (kleines Zimmer)", fr: "Store occultant (petite chambre)", es: "Estor opaco (habitación pequeña)" },
        corpo: {
          it: `<p>Nella <strong>prima camera a sinistra</strong> la tenda oscurante si aziona con il <strong>telecomando bianco</strong>.</p>`,
          en: `<p>In the <strong>first bedroom on the left</strong> the blackout blind is operated with the <strong>white remote control</strong>.</p>`,
          de: `<p>Im <strong>ersten Zimmer links</strong> wird das Verdunkelungsrollo mit der <strong>weißen Fernbedienung</strong> bedient.</p>`,
          fr: `<p>Dans la <strong>première chambre à gauche</strong>, le store occultant s'actionne avec la <strong>télécommande blanche</strong>.</p>`,
          es: `<p>En la <strong>primera habitación a la izquierda</strong> el estor opaco se acciona con el <strong>mando blanco</strong>.</p>`
        } },
      { id: "acqua", icona: "🚿", foto: ["Interruttore-Acqua-calda.jpg"],
        titolo: { it: "Se l'acqua non è calda", en: "No hot water?", de: "Kein warmes Wasser?", fr: "Pas d'eau chaude ?", es: "¿No sale agua caliente?" },
        corpo: {
          it: `<p>Può capitare di spegnere per sbaglio l'interruttore dell'acqua calda. Basta <strong>riaccenderlo</strong>: si trova nel <strong>bagno di sinistra</strong>.</p>`,
          en: `<p>The hot water switch can easily be turned off by mistake. Just <strong>switch it back on</strong>: it is in the <strong>bathroom on the left</strong>.</p>`,
          de: `<p>Der Warmwasserschalter wird manchmal versehentlich ausgeschaltet. Einfach <strong>wieder einschalten</strong>: er befindet sich im <strong>linken Bad</strong>.</p>`,
          fr: `<p>Il arrive d'éteindre l'interrupteur de l'eau chaude par mégarde. Il suffit de le <strong>rallumer</strong> : il se trouve dans la <strong>salle de bain de gauche</strong>.</p>`,
          es: `<p>A veces se apaga por error el interruptor del agua caliente. Basta con <strong>volver a encenderlo</strong>: está en el <strong>baño de la izquierda</strong>.</p>`
        } }
    ]
  },
  {
    id: "cucina", icona: "🍳",
    titolo: { it: "Cucina", en: "Kitchen", de: "Küche", fr: "Cuisine", es: "Cocina" },
    voci: [
      { id: "interruttore", icona: "⚡", foto: ["Forno-1.jpg"],
        titolo: { it: "Interruttore piano cottura e forno", en: "Hob & oven switch", de: "Schalter Kochfeld & Ofen", fr: "Interrupteur plaque et four", es: "Interruptor de placa y horno" },
        corpo: {
          it: `<p>Questo interruttore accende e spegne l'alimentazione del <strong>forno</strong> e del <strong>piano cottura</strong>. Se non funzionano, controllate prima qui.</p>`,
          en: `<p>This switch turns the power to the <strong>oven</strong> and the <strong>hob</strong> on and off. If they don't work, check here first.</p>`,
          de: `<p>Dieser Schalter schaltet den Strom für <strong>Ofen</strong> und <strong>Kochfeld</strong> ein und aus. Wenn sie nicht funktionieren, zuerst hier prüfen.</p>`,
          fr: `<p>Cet interrupteur allume et coupe l'alimentation du <strong>four</strong> et de la <strong>plaque de cuisson</strong>. S'ils ne fonctionnent pas, vérifiez d'abord ici.</p>`,
          es: `<p>Este interruptor enciende y apaga la corriente del <strong>horno</strong> y de la <strong>placa</strong>. Si no funcionan, revisad primero aquí.</p>`
        } },
      { id: "forno", icona: "🔥",
        titolo: { it: "Forno elettrico", en: "Electric oven", de: "Elektroofen", fr: "Four électrique", es: "Horno eléctrico" },
        corpo: {
          it: `<ol class="passi"><li>Premete il tasto <strong>ON</strong></li><li>Nell'area programmi scegliete il simbolo desiderato</li><li>Regolate la temperatura nell'area impostazioni</li><li>Controllate che la spia del programma sia accesa e premete <strong>Start</strong></li><li>Alla fine riportate il selettore su <strong>0</strong> o premete ON</li></ol><p class="avviso"><strong>Sicurezza:</strong> solo teglie adatte, niente plastica o carta. Il forno diventa molto caldo.</p>`,
          en: `<ol class="passi"><li>Press <strong>ON</strong></li><li>In the programme area choose the symbol you need</li><li>Set the temperature in the settings area</li><li>Check that the programme light is on and press <strong>Start</strong></li><li>When finished, turn the selector back to <strong>0</strong> or press ON</li></ol><p class="avviso"><strong>Safety:</strong> suitable trays only, no plastic or paper. The oven gets very hot.</p>`,
          de: `<ol class="passi"><li>Taste <strong>ON</strong> drücken</li><li>Im Programmbereich das gewünschte Symbol wählen</li><li>Im Einstellbereich die Temperatur einstellen</li><li>Prüfen, dass die Programmleuchte an ist, und <strong>Start</strong> drücken</li><li>Zum Schluss den Wahlschalter auf <strong>0</strong> stellen oder ON drücken</li></ol><p class="avviso"><strong>Sicherheit:</strong> nur geeignete Bleche, kein Plastik oder Papier. Der Ofen wird sehr heiß.</p>`,
          fr: `<ol class="passi"><li>Appuyez sur <strong>ON</strong></li><li>Dans la zone des programmes, choisissez le symbole voulu</li><li>Réglez la température dans la zone des réglages</li><li>Vérifiez que le voyant du programme est allumé et appuyez sur <strong>Start</strong></li><li>À la fin, remettez le sélecteur sur <strong>0</strong> ou appuyez sur ON</li></ol><p class="avviso"><strong>Sécurité :</strong> uniquement des plats adaptés, ni plastique ni papier. Le four devient très chaud.</p>`,
          es: `<ol class="passi"><li>Pulsad <strong>ON</strong></li><li>En la zona de programas elegid el símbolo deseado</li><li>Ajustad la temperatura en la zona de ajustes</li><li>Comprobad que el piloto del programa esté encendido y pulsad <strong>Start</strong></li><li>Al terminar, volved el selector a <strong>0</strong> o pulsad ON</li></ol><p class="avviso"><strong>Seguridad:</strong> solo bandejas adecuadas, nada de plástico ni papel. El horno se calienta mucho.</p>`
        } },
      { id: "lavastoviglie", icona: "🍽️",
        titolo: { it: "Lavastoviglie", en: "Dishwasher", de: "Geschirrspüler", fr: "Lave-vaisselle", es: "Lavavajillas" },
        corpo: {
          it: `<p class="piccolo">Electrolux ESL5205LO — comandi sul bordo superiore della porta.</p><ol class="passi"><li>Aprite la porta e caricate le stoviglie</li><li>Mettete la pastiglia nel vano sullo sportello interno</li><li>Chiudete la porta</li><li>Premete <strong>ON/OFF</strong> (a sinistra)</li><li>Premete <strong>Program</strong> più volte per scegliere il programma (si accende la spia)</li><li>Il lavaggio parte da solo dopo pochi secondi</li></ol><div class="tab"><div><span>ECO 50°</span><strong>Uso quotidiano, risparmio</strong></div><div><span>Normal 65°</span><strong>Sporco normale</strong></div><div><span>Intensive 70°</span><strong>Pentole e sporco ostinato</strong></div><div><span>Quick Plus 60°</span><strong>Rapido, circa 30 min</strong></div><div><span>Rinse &amp; Hold</span><strong>Solo risciacquo, senza detersivo</strong></div></div><p class="evid"><strong>Consiglio:</strong> per tutti i giorni il programma ideale è <strong>ECO 50°</strong>. Con <strong>3h Delay</strong> il lavaggio parte dopo 3 ore.</p><p class="avviso"><strong>Reset:</strong> tenete premuto <strong>Program</strong> per 3 secondi.</p>`,
          en: `<p class="piccolo">Electrolux ESL5205LO — controls on the top edge of the door.</p><ol class="passi"><li>Open the door and load the dishes</li><li>Put the tablet in the compartment on the inner door</li><li>Close the door</li><li>Press <strong>ON/OFF</strong> (on the left)</li><li>Press <strong>Program</strong> repeatedly to choose the programme (its light comes on)</li><li>The wash starts by itself after a few seconds</li></ol><div class="tab"><div><span>ECO 50°</span><strong>Everyday use, saves energy</strong></div><div><span>Normal 65°</span><strong>Normal soiling</strong></div><div><span>Intensive 70°</span><strong>Pans and stubborn dirt</strong></div><div><span>Quick Plus 60°</span><strong>Quick, about 30 min</strong></div><div><span>Rinse &amp; Hold</span><strong>Rinse only, no detergent</strong></div></div><p class="evid"><strong>Tip:</strong> for everyday use <strong>ECO 50°</strong> is ideal. With <strong>3h Delay</strong> the wash starts after 3 hours.</p><p class="avviso"><strong>Reset:</strong> hold <strong>Program</strong> for 3 seconds.</p>`,
          de: `<p class="piccolo">Electrolux ESL5205LO — Bedienfeld an der Oberkante der Tür.</p><ol class="passi"><li>Tür öffnen und Geschirr einräumen</li><li>Tab in das Fach an der Türinnenseite legen</li><li>Tür schließen</li><li><strong>ON/OFF</strong> drücken (links)</li><li><strong>Program</strong> mehrmals drücken, um das Programm zu wählen (die Leuchte geht an)</li><li>Der Spülgang startet nach wenigen Sekunden von selbst</li></ol><div class="tab"><div><span>ECO 50°</span><strong>Alltag, energiesparend</strong></div><div><span>Normal 65°</span><strong>Normal verschmutzt</strong></div><div><span>Intensive 70°</span><strong>Töpfe, hartnäckiger Schmutz</strong></div><div><span>Quick Plus 60°</span><strong>Schnell, ca. 30 Min.</strong></div><div><span>Rinse &amp; Hold</span><strong>Nur Vorspülen, ohne Mittel</strong></div></div><p class="evid"><strong>Tipp:</strong> für jeden Tag ist <strong>ECO 50°</strong> ideal. Mit <strong>3h Delay</strong> startet der Spülgang nach 3 Stunden.</p><p class="avviso"><strong>Reset:</strong> <strong>Program</strong> 3 Sekunden gedrückt halten.</p>`,
          fr: `<p class="piccolo">Electrolux ESL5205LO — commandes sur le bord supérieur de la porte.</p><ol class="passi"><li>Ouvrez la porte et chargez la vaisselle</li><li>Mettez la pastille dans le compartiment de la contre-porte</li><li>Fermez la porte</li><li>Appuyez sur <strong>ON/OFF</strong> (à gauche)</li><li>Appuyez plusieurs fois sur <strong>Program</strong> pour choisir le programme (le voyant s'allume)</li><li>Le lavage démarre seul après quelques secondes</li></ol><div class="tab"><div><span>ECO 50°</span><strong>Usage quotidien, économique</strong></div><div><span>Normal 65°</span><strong>Saleté normale</strong></div><div><span>Intensive 70°</span><strong>Casseroles, saleté tenace</strong></div><div><span>Quick Plus 60°</span><strong>Rapide, env. 30 min</strong></div><div><span>Rinse &amp; Hold</span><strong>Rinçage seul, sans détergent</strong></div></div><p class="evid"><strong>Conseil :</strong> au quotidien, <strong>ECO 50°</strong> est idéal. Avec <strong>3h Delay</strong>, le lavage démarre après 3 heures.</p><p class="avviso"><strong>Réinitialiser :</strong> maintenez <strong>Program</strong> appuyé 3 secondes.</p>`,
          es: `<p class="piccolo">Electrolux ESL5205LO — mandos en el borde superior de la puerta.</p><ol class="passi"><li>Abrid la puerta y cargad la vajilla</li><li>Poned la pastilla en el compartimento de la puerta interior</li><li>Cerrad la puerta</li><li>Pulsad <strong>ON/OFF</strong> (a la izquierda)</li><li>Pulsad <strong>Program</strong> varias veces para elegir el programa (se enciende el piloto)</li><li>El lavado empieza solo tras unos segundos</li></ol><div class="tab"><div><span>ECO 50°</span><strong>Uso diario, ahorro</strong></div><div><span>Normal 65°</span><strong>Suciedad normal</strong></div><div><span>Intensive 70°</span><strong>Ollas y suciedad difícil</strong></div><div><span>Quick Plus 60°</span><strong>Rápido, unos 30 min</strong></div><div><span>Rinse &amp; Hold</span><strong>Solo aclarado, sin detergente</strong></div></div><p class="evid"><strong>Consejo:</strong> para el día a día lo ideal es <strong>ECO 50°</strong>. Con <strong>3h Delay</strong> el lavado empieza a las 3 horas.</p><p class="avviso"><strong>Reinicio:</strong> mantened pulsado <strong>Program</strong> 3 segundos.</p>`
        } }
    ]
  },
  {
    id: "elettricita", icona: "💡",
    titolo: { it: "Elettricità e tecnologia", en: "Power & technology", de: "Strom & Technik", fr: "Électricité et technologie", es: "Electricidad y tecnología" },
    voci: [
      { id: "corrente", icona: "⚡", foto: ["ContatoreLuce.jpg"],
        titolo: { it: "Se manca la corrente", en: "Power cut", de: "Stromausfall", fr: "Coupure de courant", es: "Si se va la luz" },
        corpo: {
          it: `<ol class="passi"><li>Scendete al <strong>piano terra</strong>, a destra dell'ascensore</li><li>Aprite lo <strong>sportello scorrevole destro</strong> dell'armadio</li><li>Riattivate il contatore indicato dalla freccia con scritto <strong>«Russo»</strong></li></ol>`,
          en: `<ol class="passi"><li>Go down to the <strong>ground floor</strong>, to the right of the lift</li><li>Open the <strong>right-hand sliding door</strong> of the cabinet</li><li>Reset the meter marked by the arrow with the name <strong>“Russo”</strong></li></ol>`,
          de: `<ol class="passi"><li>Ins <strong>Erdgeschoss</strong> gehen, rechts vom Aufzug</li><li>Die <strong>rechte Schiebetür</strong> des Schranks öffnen</li><li>Den mit dem Pfeil und dem Namen <strong>„Russo“</strong> markierten Zähler wieder einschalten</li></ol>`,
          fr: `<ol class="passi"><li>Descendez au <strong>rez-de-chaussée</strong>, à droite de l'ascenseur</li><li>Ouvrez la <strong>porte coulissante de droite</strong> de l'armoire</li><li>Réenclenchez le compteur indiqué par la flèche portant le nom <strong>« Russo »</strong></li></ol>`,
          es: `<ol class="passi"><li>Bajad a la <strong>planta baja</strong>, a la derecha del ascensor</li><li>Abrid la <strong>puerta corredera derecha</strong> del armario</li><li>Reactivad el contador señalado con la flecha y el nombre <strong>«Russo»</strong></li></ol>`
        } },
      { id: "luceveranda", icona: "💡",
        titolo: { it: "Luce balcone-veranda", en: "Balcony-veranda light", de: "Licht Balkon-Veranda", fr: "Lumière balcon-véranda", es: "Luz del balcón-veranda" },
        corpo: {
          it: `<p>Due interruttori:</p><img class="foto-in" src="images/Luce-Veranda1.jpg" alt="" loading="lazy"><p class="evid"><strong>Cucina</strong> — accanto al frigorifero</p><img class="foto-in" src="images/Luci-Veranda2.jpg" alt="" loading="lazy"><p class="evid"><strong>Bagno di sinistra</strong> — accanto all'interruttore dell'acqua calda</p>`,
          en: `<p>Two switches:</p><img class="foto-in" src="images/Luce-Veranda1.jpg" alt="" loading="lazy"><p class="evid"><strong>Kitchen</strong> — next to the fridge</p><img class="foto-in" src="images/Luci-Veranda2.jpg" alt="" loading="lazy"><p class="evid"><strong>Left bathroom</strong> — next to the hot water switch</p>`,
          de: `<p>Zwei Schalter:</p><img class="foto-in" src="images/Luce-Veranda1.jpg" alt="" loading="lazy"><p class="evid"><strong>Küche</strong> — neben dem Kühlschrank</p><img class="foto-in" src="images/Luci-Veranda2.jpg" alt="" loading="lazy"><p class="evid"><strong>Linkes Bad</strong> — neben dem Warmwasserschalter</p>`,
          fr: `<p>Deux interrupteurs :</p><img class="foto-in" src="images/Luce-Veranda1.jpg" alt="" loading="lazy"><p class="evid"><strong>Cuisine</strong> — à côté du réfrigérateur</p><img class="foto-in" src="images/Luci-Veranda2.jpg" alt="" loading="lazy"><p class="evid"><strong>Salle de bain de gauche</strong> — à côté de l'interrupteur d'eau chaude</p>`,
          es: `<p>Dos interruptores:</p><img class="foto-in" src="images/Luce-Veranda1.jpg" alt="" loading="lazy"><p class="evid"><strong>Cocina</strong> — junto a la nevera</p><img class="foto-in" src="images/Luci-Veranda2.jpg" alt="" loading="lazy"><p class="evid"><strong>Baño izquierdo</strong> — junto al interruptor del agua caliente</p>`
        } },
      { id: "usb", icona: "🔋", foto: ["Stazione-di-ricarica.jpg"],
        titolo: { it: "Stazione di ricarica USB", en: "USB charging station", de: "USB-Ladestation", fr: "Station de recharge USB", es: "Estación de carga USB" },
        corpo: {
          it: `<p>Sul mobile del salone: <strong>6 porte USB 3.0</strong> per ricaricare insieme fino a sei dispositivi.</p>`,
          en: `<p>On the living room cabinet: <strong>6 USB 3.0 ports</strong> to charge up to six devices at once.</p>`,
          de: `<p>Auf dem Wohnzimmerschrank: <strong>6 USB-3.0-Anschlüsse</strong> zum gleichzeitigen Laden von bis zu sechs Geräten.</p>`,
          fr: `<p>Sur le meuble du salon : <strong>6 ports USB 3.0</strong> pour recharger jusqu'à six appareils à la fois.</p>`,
          es: `<p>En el mueble del salón: <strong>6 puertos USB 3.0</strong> para cargar hasta seis dispositivos a la vez.</p>`
        } },
      { id: "proiettore", icona: "🎬",
        titolo: { it: "Videoproiettore", en: "Projector", de: "Beamer", fr: "Vidéoprojecteur", es: "Proyector" },
        corpo: {
          it: `<img class="foto-in" src="images/IMG_20230113_084239-1.jpg" alt="" loading="lazy"><p>L'interruttore è <strong>a sinistra della porta d'ingresso della sala</strong>.</p><img class="foto-in" src="images/Telecomandi.jpg" alt="" loading="lazy"><div class="tab"><div><span>Telecomando 1</span><strong>per muoversi nello schermo</strong></div><div><span>Telecomando 2</span><strong>accensione e spegnimento (tasto rosso)</strong></div></div>`,
          en: `<img class="foto-in" src="images/IMG_20230113_084239-1.jpg" alt="" loading="lazy"><p>The switch is <strong>to the left of the living room door</strong>.</p><img class="foto-in" src="images/Telecomandi.jpg" alt="" loading="lazy"><div class="tab"><div><span>Remote 1</span><strong>to move around the screen</strong></div><div><span>Remote 2</span><strong>on and off (red button)</strong></div></div>`,
          de: `<img class="foto-in" src="images/IMG_20230113_084239-1.jpg" alt="" loading="lazy"><p>Der Schalter ist <strong>links neben der Wohnzimmertür</strong>.</p><img class="foto-in" src="images/Telecomandi.jpg" alt="" loading="lazy"><div class="tab"><div><span>Fernbedienung 1</span><strong>Navigation auf dem Bildschirm</strong></div><div><span>Fernbedienung 2</span><strong>Ein / Aus (rote Taste)</strong></div></div>`,
          fr: `<img class="foto-in" src="images/IMG_20230113_084239-1.jpg" alt="" loading="lazy"><p>L'interrupteur est <strong>à gauche de la porte du salon</strong>.</p><img class="foto-in" src="images/Telecomandi.jpg" alt="" loading="lazy"><div class="tab"><div><span>Télécommande 1</span><strong>pour se déplacer sur l'écran</strong></div><div><span>Télécommande 2</span><strong>marche / arrêt (bouton rouge)</strong></div></div>`,
          es: `<img class="foto-in" src="images/IMG_20230113_084239-1.jpg" alt="" loading="lazy"><p>El interruptor está <strong>a la izquierda de la puerta del salón</strong>.</p><img class="foto-in" src="images/Telecomandi.jpg" alt="" loading="lazy"><div class="tab"><div><span>Mando 1</span><strong>para moverse por la pantalla</strong></div><div><span>Mando 2</span><strong>encendido y apagado (botón rojo)</strong></div></div>`
        } }
    ]
  },
  {
    id: "pulizie", icona: "🧺",
    titolo: { it: "Pulizie e rifiuti", en: "Cleaning & waste", de: "Reinigung & Müll", fr: "Ménage et déchets", es: "Limpieza y basura" },
    voci: [
      { id: "rifiuti", icona: "♻️", tipo: "rifiuti", importante: true,
        titolo: { it: "Raccolta differenziata", en: "Recycling & waste", de: "Mülltrennung", fr: "Tri des déchets", es: "Reciclaje y basura" },
        corpo: {
          it: `<img class="foto-in" src="images/Cassonetti.jpg" alt="" loading="lazy"><p>Le pattumiere per la differenziata sono nel <strong>balcone-veranda</strong>, dentro l'appartamento.</p><img class="foto-in" src="images/Rifiuti%20Garage.jpg" alt="" loading="lazy"><p class="evid">Depositate i rifiuti <strong>dalle ore 20:00</strong> nel cassonetto <strong>a sinistra dell'ingresso del garage</strong>.</p><p class="avviso"><strong>Importante:</strong> se alla partenza restano rifiuti destinati ai giorni successivi, potete lasciarli nell'appartamento: ci pensiamo noi. Vi chiediamo però la massima attenzione nel separarli, perché la Polizia Municipale fa controlli e può multare chi sbaglia.</p>`,
          en: `<img class="foto-in" src="images/Cassonetti.jpg" alt="" loading="lazy"><p>The recycling bins are on the <strong>balcony-veranda</strong>, inside the apartment.</p><img class="foto-in" src="images/Rifiuti%20Garage.jpg" alt="" loading="lazy"><p class="evid">Take the waste out <strong>from 8 pm</strong> to the bin <strong>to the left of the garage entrance</strong>.</p><p class="avviso"><strong>Important:</strong> if, when you leave, there is waste for the following days, you may leave it in the apartment: we will take care of it. Please sort it very carefully, though: the Municipal Police carry out checks and can fine incorrect sorting.</p>`,
          de: `<img class="foto-in" src="images/Cassonetti.jpg" alt="" loading="lazy"><p>Die Mülltrennungsbehälter stehen auf dem <strong>Balkon-Veranda</strong> in der Wohnung.</p><img class="foto-in" src="images/Rifiuti%20Garage.jpg" alt="" loading="lazy"><p class="evid">Den Müll <strong>ab 20 Uhr</strong> in den Container <strong>links von der Garageneinfahrt</strong> bringen.</p><p class="avviso"><strong>Wichtig:</strong> Bleibt bei der Abreise Müll für die folgenden Tage übrig, können Sie ihn in der Wohnung lassen: wir kümmern uns darum. Bitte trennen Sie aber sehr sorgfältig, denn die Stadtpolizei kontrolliert und kann Bußgelder verhängen.</p>`,
          fr: `<img class="foto-in" src="images/Cassonetti.jpg" alt="" loading="lazy"><p>Les poubelles de tri sont sur le <strong>balcon-véranda</strong>, à l'intérieur de l'appartement.</p><img class="foto-in" src="images/Rifiuti%20Garage.jpg" alt="" loading="lazy"><p class="evid">Déposez les déchets <strong>à partir de 20 h</strong> dans le conteneur <strong>à gauche de l'entrée du garage</strong>.</p><p class="avviso"><strong>Important :</strong> si au départ il reste des déchets prévus pour les jours suivants, vous pouvez les laisser dans l'appartement : nous nous en occupons. Merci toutefois de bien les trier, car la Police municipale effectue des contrôles et peut infliger des amendes.</p>`,
          es: `<img class="foto-in" src="images/Cassonetti.jpg" alt="" loading="lazy"><p>Los cubos para reciclar están en el <strong>balcón-veranda</strong>, dentro del apartamento.</p><img class="foto-in" src="images/Rifiuti%20Garage.jpg" alt="" loading="lazy"><p class="evid">Sacad la basura <strong>desde las 20:00</strong> al contenedor <strong>a la izquierda de la entrada del garaje</strong>.</p><p class="avviso"><strong>Importante:</strong> si al marcharos queda basura de los días siguientes, podéis dejarla en el apartamento: nos encargamos nosotros. Os pedimos, eso sí, máxima atención al separarla, porque la Policía Municipal hace controles y puede multar.</p>`
        } },
      { id: "biancheria", icona: "🛏️", foto: ["Cambio-Biancheria.jpg", "Cassetto.jpg"],
        titolo: { it: "Biancheria e pulizie", en: "Linen & cleaning", de: "Wäsche & Reinigung", fr: "Linge et ménage", es: "Ropa de cama y limpieza" },
        corpo: {
          it: `<p>La biancheria pulita è nel <strong>cassetto centrale</strong> indicato dalla freccia. Per soggiorni oltre una settimana trovate i ricambi nello stesso cassetto.</p><p>La biancheria usata va messa in un sacco davanti alla porta <strong>entro le 8:00</strong>, avvisandoci per il ritiro.</p><p class="evid">Servizio di pulizia professionale: <strong>€ 70 a intervento</strong>, con giorno e orario da concordare.</p>`,
          en: `<p>Clean linen is in the <strong>middle drawer</strong> marked by the arrow. For stays longer than a week you will find spare sets in the same drawer.</p><p>Put used linen in a bag outside the door <strong>by 8 am</strong> and let us know so we can collect it.</p><p class="evid">Professional cleaning service: <strong>€70 per visit</strong>, day and time to be agreed.</p>`,
          de: `<p>Saubere Wäsche liegt in der <strong>mittleren Schublade</strong> mit dem Pfeil. Bei Aufenthalten über einer Woche finden Sie Ersatz in derselben Schublade.</p><p>Gebrauchte Wäsche bitte in einem Sack <strong>bis 8 Uhr</strong> vor die Tür stellen und uns zur Abholung Bescheid geben.</p><p class="evid">Professionelle Reinigung: <strong>70 € pro Einsatz</strong>, Tag und Uhrzeit nach Absprache.</p>`,
          fr: `<p>Le linge propre est dans le <strong>tiroir central</strong> indiqué par la flèche. Pour les séjours de plus d'une semaine, les rechanges sont dans le même tiroir.</p><p>Le linge sale se met dans un sac devant la porte <strong>avant 8 h</strong>, en nous prévenant pour le ramassage.</p><p class="evid">Service de ménage professionnel : <strong>70 € par intervention</strong>, jour et heure à convenir.</p>`,
          es: `<p>La ropa de cama limpia está en el <strong>cajón central</strong> señalado con la flecha. Para estancias de más de una semana, los recambios están en el mismo cajón.</p><p>La ropa usada se deja en una bolsa delante de la puerta <strong>antes de las 8:00</strong>, avisándonos para recogerla.</p><p class="evid">Servicio de limpieza profesional: <strong>70 € por servicio</strong>, día y hora a convenir.</p>`
        } },
      { id: "stendino", icona: "👕", video: "https://www.youtube.com/embed/T43_-8SmuWs",
        titolo: { it: "Stendibiancheria", en: "Clothes airer", de: "Wäscheständer", fr: "Étendoir à linge", es: "Tendedero" },
        corpo: {
          it: `<p>Il video mostra come aprire e chiudere lo stendibiancheria Gulliver (Foppapedretti).</p>`,
          en: `<p>The video shows how to open and fold the Gulliver clothes airer (Foppapedretti).</p>`,
          de: `<p>Das Video zeigt, wie man den Wäscheständer Gulliver (Foppapedretti) öffnet und schließt.</p>`,
          fr: `<p>La vidéo montre comment ouvrir et replier l'étendoir Gulliver (Foppapedretti).</p>`,
          es: `<p>El vídeo muestra cómo abrir y cerrar el tendedero Gulliver (Foppapedretti).</p>`
        } }
    ]
  },
  {
    id: "veranda", icona: "🌿",
    titolo: { it: "Veranda e piante", en: "Veranda & plants", de: "Veranda & Pflanzen", fr: "Véranda et plantes", es: "Veranda y plantas" },
    voci: [
      { id: "pioggia", icona: "🌧️", importante: true,
        titolo: { it: "Pioggia", en: "Rain", de: "Regen", fr: "Pluie", es: "Lluvia" },
        corpo: {
          it: `<p class="avviso"><strong>Attenzione:</strong> chiudete le finestre della veranda quando uscite o in caso di forti piogge e temporali. Se restano aperte, c'è rischio di allagamento.</p>`,
          en: `<p class="avviso"><strong>Please note:</strong> close the veranda windows when you go out or in case of heavy rain and storms. If they are left open, there is a risk of flooding.</p>`,
          de: `<p class="avviso"><strong>Achtung:</strong> Schließen Sie die Verandafenster, wenn Sie ausgehen oder bei starkem Regen und Gewitter. Bleiben sie offen, besteht Überschwemmungsgefahr.</p>`,
          fr: `<p class="avviso"><strong>Attention :</strong> fermez les fenêtres de la véranda quand vous sortez ou en cas de fortes pluies et d'orages. Si elles restent ouvertes, il y a un risque d'inondation.</p>`,
          es: `<p class="avviso"><strong>Atención:</strong> cerrad las ventanas de la veranda al salir o en caso de lluvia fuerte y tormentas. Si quedan abiertas, hay riesgo de inundación.</p>`
        } },
      { id: "piante", icona: "🪴", importante: true,
        titolo: { it: "Annaffiare le piante", en: "Watering the plants", de: "Pflanzen gießen", fr: "Arroser les plantes", es: "Regar las plantas" },
        corpo: {
          it: `<p>Quasi tutte le piante hanno un <strong>sistema idroponico automatico</strong> e non richiedono cure.</p><p class="evid">Solo le <strong>due grandi piante rotonde</strong> vanno annaffiate almeno <strong>ogni due giorni d'estate</strong>: un annaffiatoio nel vaso più piccolo, due in quello più grande.</p><p>L'annaffiatoio verde è in veranda.</p>`,
          en: `<p>Almost all plants have an <strong>automatic hydroponic system</strong> and need no care.</p><p class="evid">Only the <strong>two large round plants</strong> need watering at least <strong>every two days in summer</strong>: one watering can for the smaller pot, two for the larger one.</p><p>The green watering can is on the veranda.</p>`,
          de: `<p>Fast alle Pflanzen haben ein <strong>automatisches Hydrokultursystem</strong> und brauchen keine Pflege.</p><p class="evid">Nur die <strong>zwei großen runden Pflanzen</strong> müssen im Sommer mindestens <strong>alle zwei Tage</strong> gegossen werden: eine Gießkanne für den kleineren Topf, zwei für den größeren.</p><p>Die grüne Gießkanne steht auf der Veranda.</p>`,
          fr: `<p>Presque toutes les plantes ont un <strong>système hydroponique automatique</strong> et ne demandent aucun soin.</p><p class="evid">Seules les <strong>deux grandes plantes rondes</strong> doivent être arrosées au moins <strong>tous les deux jours en été</strong> : un arrosoir pour le petit pot, deux pour le grand.</p><p>L'arrosoir vert est sur la véranda.</p>`,
          es: `<p>Casi todas las plantas tienen un <strong>sistema hidropónico automático</strong> y no necesitan cuidados.</p><p class="evid">Solo las <strong>dos plantas grandes redondas</strong> deben regarse al menos <strong>cada dos días en verano</strong>: una regadera en la maceta pequeña y dos en la grande.</p><p>La regadera verde está en la veranda.</p>`
        } }
    ]
  },
  {
    id: "sicurezza", icona: "🛡️",
    titolo: { it: "Sicurezza", en: "Safety", de: "Sicherheit", fr: "Sécurité", es: "Seguridad" },
    voci: [
      { id: "estintore", icona: "🧯", foto: ["Estintore.jpg"],
        titolo: { it: "Estintore", en: "Fire extinguisher", de: "Feuerlöscher", fr: "Extincteur", es: "Extintor" },
        corpo: { it: `<p>Si trova nel <strong>balcone-veranda</strong>.</p>`, en: `<p>It is on the <strong>balcony-veranda</strong>.</p>`, de: `<p>Er befindet sich auf dem <strong>Balkon-Veranda</strong>.</p>`, fr: `<p>Il se trouve sur le <strong>balcon-véranda</strong>.</p>`, es: `<p>Está en el <strong>balcón-veranda</strong>.</p>` } },
      { id: "soccorso", icona: "🩹", foto: ["Medicine.jpeg"],
        titolo: { it: "Kit di pronto soccorso", en: "First aid kit", de: "Erste-Hilfe-Kasten", fr: "Trousse de secours", es: "Botiquín" },
        corpo: { it: `<p>L'armadietto è nel <strong>balcone-veranda</strong>.</p>`, en: `<p>The cabinet is on the <strong>balcony-veranda</strong>.</p>`, de: `<p>Der Schrank befindet sich auf dem <strong>Balkon-Veranda</strong>.</p>`, fr: `<p>L'armoire est sur le <strong>balcon-véranda</strong>.</p>`, es: `<p>El armario está en el <strong>balcón-veranda</strong>.</p>` } },
      { id: "rilevatori", icona: "🚨",
        titolo: { it: "Dispositivi di sicurezza", en: "Safety devices", de: "Sicherheitseinrichtungen", fr: "Dispositifs de sécurité", es: "Dispositivos de seguridad" },
        corpo: {
          it: `<p>L'appartamento è dotato di:</p><ul class="lista"><li>Rilevatore di fumo</li><li>Rilevatore di monossido di carbonio</li><li>Rilevatore di gas combustibili</li><li>Elettrovalvola automatica di sicurezza del gas</li></ul><p>Tutti i dispositivi sono <strong>controllati regolarmente</strong>.</p><p class="avviso"><strong>Se sentite un allarme, avvisateci subito.</strong> La vostra sicurezza è la nostra priorità.</p>`,
          en: `<p>The apartment is equipped with:</p><ul class="lista"><li>Smoke detector</li><li>Carbon monoxide detector</li><li>Combustible gas detector</li><li>Automatic gas safety shut-off valve</li></ul><p>All devices are <strong>checked regularly</strong>.</p><p class="avviso"><strong>If you hear an alarm, let us know immediately.</strong> Your safety is our priority.</p>`,
          de: `<p>Die Wohnung ist ausgestattet mit:</p><ul class="lista"><li>Rauchmelder</li><li>Kohlenmonoxidmelder</li><li>Gasmelder</li><li>Automatisches Gas-Sicherheitsventil</li></ul><p>Alle Geräte werden <strong>regelmäßig geprüft</strong>.</p><p class="avviso"><strong>Wenn Sie einen Alarm hören, benachrichtigen Sie uns sofort.</strong> Ihre Sicherheit hat für uns Vorrang.</p>`,
          fr: `<p>L'appartement est équipé de :</p><ul class="lista"><li>Détecteur de fumée</li><li>Détecteur de monoxyde de carbone</li><li>Détecteur de gaz combustibles</li><li>Électrovanne automatique de sécurité gaz</li></ul><p>Tous les dispositifs sont <strong>contrôlés régulièrement</strong>.</p><p class="avviso"><strong>Si vous entendez une alarme, prévenez-nous immédiatement.</strong> Votre sécurité est notre priorité.</p>`,
          es: `<p>El apartamento cuenta con:</p><ul class="lista"><li>Detector de humo</li><li>Detector de monóxido de carbono</li><li>Detector de gases combustibles</li><li>Electroválvula automática de seguridad del gas</li></ul><p>Todos los dispositivos se <strong>revisan con regularidad</strong>.</p><p class="avviso"><strong>Si oís una alarma, avisadnos de inmediato.</strong> Vuestra seguridad es nuestra prioridad.</p>`
        } }
    ]
  },
  {
    id: "convivenza", icona: "🤫",
    titolo: { it: "Convivenza", en: "Good neighbours", de: "Rücksicht", fr: "Bon voisinage", es: "Convivencia" },
    voci: [
      { id: "silenzio", icona: "🌙", tipo: "silenzio", importante: true,
        titolo: { it: "Ore di riposo", en: "Quiet hours", de: "Ruhezeiten", fr: "Heures de repos", es: "Horas de descanso" },
        corpo: {
          it: `<p>Per il riposo di tutti, ospiti e vicini, vi chiediamo silenzio in queste fasce:</p>`,
          en: `<p>So that everyone, guests and neighbours, can rest, please keep quiet during these hours:</p>`,
          de: `<p>Damit alle, Gäste und Nachbarn, sich erholen können, bitten wir in diesen Zeiten um Ruhe:</p>`,
          fr: `<p>Pour le repos de tous, hôtes et voisins, merci de respecter le silence pendant ces heures :</p>`,
          es: `<p>Para el descanso de todos, huéspedes y vecinos, os pedimos silencio en estas franjas:</p>`
        } }
    ]
  }
];

/* Fasce di silenzio (ore intere, 24h) */
const SILENZIO = [
  { da: 22, a: 8,  it: "Riposo notturno", en: "Night rest", de: "Nachtruhe", fr: "Repos nocturne", es: "Descanso nocturno" },
  { da: 14, a: 16, it: "Riposo pomeridiano", en: "Afternoon rest", de: "Mittagsruhe", fr: "Repos de l'après-midi", es: "Descanso de la tarde" }
];

/* Testi delle chiavi */
const CHIAVI = [
  { colore: null, it: "Telecomando: apertura del cancello del garage", en: "Remote control: opens the garage gate", de: "Fernbedienung: öffnet das Garagentor", fr: "Télécommande : ouvre le portail du garage", es: "Mando: abre la verja del garaje" },
  { colore: "#1d1d1f", it: "Nera — porta d'ingresso dell'appartamento", en: "Black — apartment front door", de: "Schwarz — Wohnungstür", fr: "Noire — porte d'entrée de l'appartement", es: "Negra — puerta del apartamento" },
  { colore: "#33b5d6", it: "Azzurra — avamporta d'ingresso di casa", en: "Light blue — outer front door of the flat", de: "Hellblau — Vortür der Wohnung", fr: "Bleu clair — avant-porte de l'appartement", es: "Celeste — puerta exterior del piso" },
  { colore: "#1f4fa8", it: "Blu — portone del palazzo", en: "Blue — building entrance", de: "Blau — Haustür des Gebäudes", fr: "Bleue — porte de l'immeuble", es: "Azul — portal del edificio" },
  { colore: "#2f9a52", it: "Verde — porta dal garage all'ascensore", en: "Green — door from the garage to the lift", de: "Grün — Tür von der Garage zum Aufzug", fr: "Verte — porte du garage vers l'ascenseur", es: "Verde — puerta del garaje al ascensor" },
  { colore: "#c0392b", it: "Rossa — apertura della basculante del garage", en: "Red — opens the garage up-and-over door", de: "Rot — öffnet das Garagenkipptor", fr: "Rouge — ouvre la porte basculante du garage", es: "Roja — abre la puerta basculante del garaje" }
];

/* ---------------- Dintorni ----------------
   pos = [latitudine, longitudine] per la mappa; dest = indirizzo per le indicazioni di Google Maps;
   foto = solo fotografie vere (le vecchie schermate dei percorsi non si usano più);
   colore della categoria = colore dei segnaposto sulla mappa. */
const DINTORNI = [
  { id: "mangiare", colore: "#b8893a", icona: "🍝",
    cat: { it: "Ristoranti e bar", en: "Restaurants & bars", de: "Restaurants & Bars", fr: "Restaurants et bars", es: "Restaurantes y bares" },
    luoghi: [
      { nome: "Trattoria La Campagnola", icona: "🍕", pos: [38.2237046, 15.2422404], tel: ["+393476651893", "+390909284944"],
        dest: "Trattoria La Campagnola, Via Riccardo D'Amico 16, Milazzo",
        desc: { it: "Ristorante e pizzeria", en: "Restaurant & pizzeria", de: "Restaurant & Pizzeria", fr: "Restaurant et pizzeria", es: "Restaurante y pizzería" } },
      { nome: "Ristorante Adagio-Adagio", icona: "🍝", pos: [38.2241686, 15.2404715], tel: ["+393881670166", "+393889886437"], telNomi: ["Silvia", "Salvo"],
        dest: "Osteria Adagio Adagio, Via Umberto I, Milazzo",
        desc: { it: "Ristorante", en: "Restaurant", de: "Restaurant", fr: "Restaurant", es: "Restaurante" } },
      { nome: "Ristorante Macchianera", icona: "🐟", pos: [38.2288407, 15.2457632], tel: ["+393407099053", "+390909223249"],
        dest: "Macchianera Ristorante, Via Marina Garibaldi 275, Milazzo",
        desc: { it: "Ristorante sul lungomare", en: "Seafront restaurant", de: "Restaurant an der Uferpromenade", fr: "Restaurant en bord de mer", es: "Restaurante en el paseo marítimo" } },
      { nome: "Chantilly", icona: "🥐", pos: [38.2227944, 15.2416194],
        dest: "Chantilly Café Bar Pasticceria, Via Cumbo Borgia 59, Milazzo",
        desc: { it: "Bar pasticceria, il più vicino", en: "Café & pastry shop, the closest", de: "Café & Konditorei, das nächste", fr: "Café-pâtisserie, le plus proche", es: "Cafetería y pastelería, la más cercana" } },
      { nome: "English Bar", icona: "☕", pos: [38.2246791, 15.2405168],
        dest: "English Bar di Milazzo, Via Umberto I 243, Milazzo",
        desc: { it: "Bar", en: "Café", de: "Café", fr: "Café", es: "Cafetería" } }
    ] },
  { id: "servizi", colore: "#2f6fae", icona: "🛒",
    cat: { it: "Servizi", en: "Services", de: "Dienste", fr: "Services", es: "Servicios" },
    luoghi: [
      { nome: "Supermercato Conad", icona: "🛒", foto: "Immagine-supermercato-Conad.jpg", pos: [38.224355, 15.239758],
        dest: "CONAD, Via XX Settembre 184, Milazzo",
        desc: { it: "Supermercato", en: "Supermarket", de: "Supermarkt", fr: "Supermarché", es: "Supermercado" } },
      { nome: "Farmacia Alioto", icona: "💊", pos: [38.2212742, 15.2414543], turni: true,
        dest: "Antica Farmacia Alioto, Piano Baele 5, Milazzo",
        desc: { it: "La farmacia più vicina", en: "The nearest pharmacy", de: "Die nächste Apotheke", fr: "La pharmacie la plus proche", es: "La farmacia más cercana" } },
      { id: "guardiamedica", nome: "Guardia Medica", icona: "⚕️", pos: [38.2267527, 15.2411425], tel: ["+390909281158"],
        dest: "Guardia Medica, Via Impallomeni 45, Milazzo",
        desc: { it: "Via Impallomeni 45 · Feriali 20:00–8:00 · Festivi dalle 10:00 del prefestivo alle 8:00 del primo giorno feriale",
                en: "Via Impallomeni 45 · Weekdays 8 pm–8 am · Holidays from 10 am the day before until 8 am the next working day",
                de: "Via Impallomeni 45 · Werktags 20–8 Uhr · Feiertage von 10 Uhr am Vortag bis 8 Uhr am nächsten Werktag",
                fr: "Via Impallomeni 45 · Semaine 20 h–8 h · Jours fériés de 10 h la veille jusqu'à 8 h le jour ouvrable suivant",
                es: "Via Impallomeni 45 · Laborables 20:00–8:00 · Festivos desde las 10:00 de la víspera hasta las 8:00 del siguiente día laborable" } },
      { id: "enelx", nome: "Enel X", icona: "🔌", foto: "Stazione-ricarica-EV.jpg", pos: [38.2250161, 15.2396324],
        dest: "Enel X Charging Station, Via XX Settembre, Milazzo",
        desc: { it: "Ricarica auto elettriche, Via XX Settembre", en: "EV charging, Via XX Settembre", de: "E-Auto-Ladestation, Via XX Settembre", fr: "Recharge électrique, Via XX Settembre", es: "Carga de coches eléctricos, Via XX Settembre" } },
      { nome: { it: "Isola pedonale", en: "Pedestrian area", de: "Fußgängerzone", fr: "Zone piétonne", es: "Zona peatonal" }, icona: "🛍️", pos: [38.222246, 15.2426516],
        dest: "Via Giacomo Medici, Milazzo",
        desc: { it: "Via Giacomo Medici: passeggio e negozi", en: "Via Giacomo Medici: strolling and shops", de: "Via Giacomo Medici: Bummeln und Geschäfte", fr: "Via Giacomo Medici : promenade et boutiques", es: "Via Giacomo Medici: paseo y tiendas" } }
    ] },
  { id: "mare", colore: "#1f8a9e", icona: "🏖️",
    cat: { it: "Spiagge e mare", en: "Beaches & sea", de: "Strände & Meer", fr: "Plages et mer", es: "Playas y mar" },
    luoghi: [
      { nome: "Lido La Fenice", icona: "⛱️", pos: [38.2197856, 15.2329491],
        dest: "Lido La Fenice, Via Spiaggia di Ponente 2, Milazzo",
        desc: { it: "Stabilimento moderno sul lungomare di ponente: ombrelloni, lettini, bar e ristorante", en: "Modern beach club on the western seafront: umbrellas, sunbeds, bar and restaurant", de: "Modernes Strandbad an der Weststrandpromenade: Schirme, Liegen, Bar und Restaurant", fr: "Plage privée moderne sur le front de mer ouest : parasols, transats, bar et restaurant", es: "Balneario moderno en el paseo de poniente: sombrillas, tumbonas, bar y restaurante" } },
      { nome: { it: "Spiaggia di Ponente", en: "Ponente Beach", de: "Ponente-Strand", fr: "Plage de Ponente", es: "Playa de Ponente" }, icona: "🏖️", pos: [38.2265317, 15.2362766],
        dest: "38.2265317,15.2362766",
        desc: { it: "Spiaggia libera", en: "Public beach", de: "Öffentlicher Strand", fr: "Plage publique", es: "Playa libre" } },
      { nome: { it: "Spiaggia Croce di Mare", en: "Croce di Mare Beach", de: "Strand Croce di Mare", fr: "Plage Croce di Mare", es: "Playa Croce di Mare" }, icona: "🌊", pos: [38.2309134, 15.2487663],
        dest: "Spiaggia Croce di Mare, Milazzo",
        desc: { it: "Spiaggia sul lato di levante", en: "Beach on the eastern side", de: "Strand auf der Ostseite", fr: "Plage du côté est", es: "Playa en el lado de levante" } },
      { nome: { it: "Imbarco per le Isole Eolie", en: "Ferries to the Aeolian Islands", de: "Fähren zu den Äolischen Inseln", fr: "Embarquement pour les îles Éoliennes", es: "Embarque a las Islas Eolias" }, icona: "⛴️", pos: [38.2112301, 15.2481661],
        dest: "Terminal traghetti isole eolie, Via Tindaro La Rosa 90, Milazzo",
        desc: { it: "Partenze dal porto di Milazzo", en: "Departures from the port of Milazzo", de: "Abfahrten vom Hafen Milazzo", fr: "Départs du port de Milazzo", es: "Salidas desde el puerto de Milazzo" } }
    ] },
  { id: "vedere", colore: "#8a3b5b", icona: "🏰",
    cat: { it: "Da vedere", en: "Sights", de: "Sehenswertes", fr: "À voir", es: "Qué ver" },
    luoghi: [
      { nome: { it: "Castello di Milazzo", en: "Milazzo Castle", de: "Burg von Milazzo", fr: "Château de Milazzo", es: "Castillo de Milazzo" }, icona: "🏰", foto: "Castello.webp", pos: [38.2299432, 15.2428924], tour: true,
        dest: "Salita Castello, Milazzo",
        desc: { it: "Il complesso monumentale che vedete dalla veranda", en: "The monumental complex you see from the veranda", de: "Die Burganlage, die Sie von der Veranda sehen", fr: "L'ensemble monumental que vous voyez depuis la véranda", es: "El conjunto monumental que veis desde la veranda" } },
      { nome: { it: "Piscina di Venere", en: "Venus Pool", de: "Venus-Pool", fr: "Piscine de Vénus", es: "Piscina de Venus" }, icona: "🏞️", foto: "Piscina-di-Venere.jpg", pos: [38.2691768, 15.2246913], auto: true,
        dest: "Piscina di Venere, Capo Milazzo",
        desc: { it: "Piscina naturale a Capo Milazzo, nell'area marina protetta", en: "Natural rock pool at Capo Milazzo, in the marine reserve", de: "Natürliches Felsbecken am Capo Milazzo, im Meeresschutzgebiet", fr: "Piscine naturelle au Capo Milazzo, dans l'aire marine protégée", es: "Piscina natural en Capo Milazzo, en la reserva marina" } }
    ] }
];

/* Cose da fare: link esterni */
const ESPERIENZE = [
  { icona: "✨", url: "https://www.airbnb.it/metropolitan-city-of-messina-italy/things-to-do", it: "Esperienze nei dintorni", en: "Experiences nearby", de: "Erlebnisse in der Nähe", fr: "Expériences à proximité", es: "Experiencias cercanas" },
  { icona: "⛵", url: "https://viamarmilazzo.it/", it: "Giro in barca alle Isole Eolie", en: "Boat trip to the Aeolian Islands", de: "Bootsausflug zu den Äolischen Inseln", fr: "Excursion en bateau aux îles Éoliennes", es: "Paseo en barco a las Islas Eolias" },
  { icona: "🚢", url: "https://www.minicrociere.tarnav.it/minicrociere/", it: "Minicrociere — Tarnav", en: "Mini cruises — Tarnav", de: "Minikreuzfahrten — Tarnav", fr: "Mini-croisières — Tarnav", es: "Minicruceros — Tarnav" },
  { icona: "🚢", url: "https://navisal.com/", it: "Minicrociere — Navisal", en: "Mini cruises — Navisal", de: "Minikreuzfahrten — Navisal", fr: "Mini-croisières — Navisal", es: "Minicruceros — Navisal" },
  { icona: "🧳", url: "https://clarissaviaggi.com/", it: "Clarissa Viaggi", en: "Clarissa Viaggi", de: "Clarissa Viaggi", fr: "Clarissa Viaggi", es: "Clarissa Viaggi" },
  { icona: "🚲", url: "https://www.inshare.it/noleggio/", it: "Noleggio biciclette", en: "Bike rental", de: "Fahrradverleih", fr: "Location de vélos", es: "Alquiler de bicicletas" },
  { icona: "🏛️", url: "https://www.sicilianticamilazzo.it/", it: "Sicilia Antica Milazzo", en: "Sicilia Antica Milazzo", de: "Sicilia Antica Milazzo", fr: "Sicilia Antica Milazzo", es: "Sicilia Antica Milazzo" },
  { icona: "📍", url: "https://www.milazzoforyou.it/home", it: "MilazzoForYou", en: "MilazzoForYou", de: "MilazzoForYou", fr: "MilazzoForYou", es: "MilazzoForYou" },
  { icona: "🏰", url: "https://www.innovame.it/castellomilazzo/", it: "Tour virtuale del Castello", en: "Virtual tour of the Castle", de: "Virtueller Rundgang durch die Burg", fr: "Visite virtuelle du Château", es: "Visita virtual del Castillo" },
  { icona: "⭐", url: "https://www.tripadvisor.it/Attractions-g194824-Activities-Milazzo_Province_of_Messina_Sicily.html", it: "Milazzo su Tripadvisor", en: "Milazzo on Tripadvisor", de: "Milazzo auf Tripadvisor", fr: "Milazzo sur Tripadvisor", es: "Milazzo en Tripadvisor" },
  { icona: "🗺️", url: "https://www.sicilia.info/mappa-sicilia/", it: "Mappa della Sicilia", en: "Map of Sicily", de: "Karte Siziliens", fr: "Carte de la Sicile", es: "Mapa de Sicilia" },
  { icona: "🗺️", url: "https://dotsonmaps.com/italy", it: "Mappa dell'Italia", en: "Map of Italy", de: "Karte Italiens", fr: "Carte de l'Italie", es: "Mapa de Italia" }
];

/* ---------------- Numeri utili ---------------- */
const NUMERI = [
  { gruppo: { it: "Emergenze", en: "Emergencies", de: "Notfälle", fr: "Urgences", es: "Emergencias" }, urgente: true,
    voci: [
      { n: "112", it: "Carabinieri", en: "Carabinieri (police)", de: "Carabinieri (Polizei)", fr: "Carabinieri (police)", es: "Carabinieri (policía)", alt: "0909281720" },
      { n: "118", it: "Pronto soccorso / ambulanza", en: "Ambulance", de: "Rettungsdienst", fr: "Ambulance / SAMU", es: "Ambulancia" },
      { n: "113", it: "Polizia", en: "State Police", de: "Staatspolizei", fr: "Police d'État", es: "Policía del Estado", alt: "0909230311" },
      { n: "115", it: "Vigili del fuoco", en: "Fire brigade", de: "Feuerwehr", fr: "Pompiers", es: "Bomberos", alt: "0909282437" },
      { n: "1530", it: "Guardia costiera", en: "Coast guard", de: "Küstenwache", fr: "Garde côtière", es: "Guardia costera" }
    ] },
  { gruppo: { it: "Salute", en: "Health", de: "Gesundheit", fr: "Santé", es: "Salud" },
    voci: [
      { n: "0909281158", it: "Guardia medica", en: "Out-of-hours doctor", de: "Ärztlicher Bereitschaftsdienst", fr: "Médecin de garde", es: "Médico de guardia" },
      { n: "0909290111", it: "Ospedale", en: "Hospital", de: "Krankenhaus", fr: "Hôpital", es: "Hospital" },
      { n: "800332277", it: "Ospedale — prenotazioni (CUP)", en: "Hospital — bookings (CUP)", de: "Krankenhaus — Terminvergabe (CUP)", fr: "Hôpital — rendez-vous (CUP)", es: "Hospital — citas (CUP)" }
    ] },
  { gruppo: { it: "Sicurezza e strada", en: "Safety & road", de: "Sicherheit & Straße", fr: "Sécurité et route", es: "Seguridad y carretera" },
    voci: [
      { n: "117", it: "Guardia di Finanza", en: "Guardia di Finanza (financial police)", de: "Guardia di Finanza (Finanzpolizei)", fr: "Guardia di Finanza (police financière)", es: "Guardia di Finanza (policía fiscal)", alt: "0909281508" },
      { n: "803116", it: "Soccorso stradale ACI", en: "ACI road assistance", de: "ACI Pannenhilfe", fr: "Dépannage ACI", es: "Asistencia en carretera ACI" },
      { n: "090717417", it: "Polizia stradale", en: "Traffic police", de: "Verkehrspolizei", fr: "Police de la route", es: "Policía de tráfico" },
      { n: "0909224530", it: "Vigili urbani", en: "Municipal police", de: "Stadtpolizei", fr: "Police municipale", es: "Policía municipal" },
      { n: "090360979", it: "Corpo forestale", en: "Forestry police", de: "Forstpolizei", fr: "Garde forestière", es: "Guardia forestal" }
    ] },
  { gruppo: { it: "Uffici pubblici", en: "Public offices", de: "Behörden", fr: "Services publics", es: "Oficinas públicas" },
    voci: [
      { n: "0909231111", it: "Comune di Milazzo", en: "Milazzo Town Hall", de: "Rathaus Milazzo", fr: "Mairie de Milazzo", es: "Ayuntamiento de Milazzo" },
      { n: "0909232017", it: "U.R.P. del Comune", en: "Town Hall information office", de: "Bürgerbüro der Stadt", fr: "Bureau d'information de la mairie", es: "Oficina de atención ciudadana" },
      { n: "0909231054", it: "Servizi sociali", en: "Social services", de: "Sozialamt", fr: "Services sociaux", es: "Servicios sociales" },
      { n: "0909281110", it: "Capitaneria di porto", en: "Harbour master", de: "Hafenbehörde", fr: "Capitainerie", es: "Capitanía marítima" },
      { n: "0909282010", it: "Agenzia delle Dogane", en: "Customs office", de: "Zollamt", fr: "Douanes", es: "Aduanas" },
      { n: "0909230211", it: "INAIL", en: "INAIL", de: "INAIL", fr: "INAIL", es: "INAIL" },
      { n: "0909230611", it: "INPS", en: "INPS", de: "INPS", fr: "INPS", es: "INPS" },
      { n: "0909296191", it: "Ufficio di collocamento", en: "Employment office", de: "Arbeitsamt", fr: "Bureau de l'emploi", es: "Oficina de empleo" }
    ] }
];
