const PLACES = {
  bog: { name: "El Dorado airport, Bogotá", lat: 4.7021, lng: -74.1477, z: 13 },
  habitel: { name: "Habitel Select, by El Dorado", lat: 4.6882, lng: -74.1307, z: 14 },
  axm: { name: "El Edén airport, Armenia", lat: 4.4528, lng: -75.7664, z: 13 },
  salento: { name: "Salento, Plaza de Bolívar", lat: 4.6372, lng: -75.5698, z: 15 },
  cruz: { name: "Mirador Alto de la Cruz, Salento", lat: 4.6397, lng: -75.5665, z: 16 },
  cocora: { name: "Valle de Cocora", lat: 4.6379, lng: -75.4871, z: 13 },
  forest: { name: "Cloud forest above Cocora (approx.)", lat: 4.668, lng: -75.455, z: 12 },
  primavera: { name: "Finca La Primavera, about 3,700 m (approx.)", lat: 4.722, lng: -75.418, z: 12 },
  wetlands: { name: "Paramillo wetlands, about 4,200 m (approx.)", lat: 4.712, lng: -75.402, z: 13 },
  paramillo: { name: "Paramillo del Quindío, 4,750 m", lat: 4.7107, lng: -75.3925, z: 13 },
  argentina: { name: "Finca La Argentina", lat: 4.7301, lng: -75.4475, z: 13 },
  pei: { name: "Matecaña airport, Pereira", lat: 4.8125, lng: -75.7403, z: 14 },
  ceiba: { name: "Ayenda Ceiba Rooms, by Pereira airport (approx.)", lat: 4.809, lng: -75.734, z: 15 },
  eoh: { name: "Olaya Herrera airport, Medellín", lat: 6.22, lng: -75.589, z: 14 },
  mde: { name: "José María Córdova airport, Rionegro", lat: 6.1659, lng: -75.4239, z: 12 },
  poblado: { name: "El Poblado · Provenza, Medellín", lat: 6.2088, lng: -75.5655, z: 15 },
  casaparis: { name: "Casa París, Envigado", lat: 6.161, lng: -75.6035, z: 15 },
  inflexion: { name: "Parque Inflexión, El Poblado", lat: 6.1913, lng: -75.5776, z: 15 },
  montesacro: { name: "Cementerio Jardines Montesacro, Itagüí", lat: 6.1606, lng: -75.6247, z: 14 },
  santafe: { name: "Centro Comercial Santafé", lat: 6.1964, lng: -75.5742, z: 15 },
  memoria: { name: "Museo Casa de la Memoria", lat: 6.24593, lng: -75.55666, z: 15 },
  santaelena: { name: "Santa Elena coffee farms", lat: 6.2105, lng: -75.498, z: 13 },
  arvi: { name: "Parque Arví", lat: 6.2814, lng: -75.5027, z: 13 },
  comuna13: { name: "Comuna 13 escalators", lat: 6.2557, lng: -75.6088, z: 15 },
  ctgair: { name: "Rafael Núñez airport, Cartagena", lat: 10.4416, lng: -75.513, z: 14 },
  trinidad: { name: "Plaza de la Trinidad, Getsemaní", lat: 10.4206, lng: -75.5454, z: 16 },
  reloj: { name: "Torre del Reloj, Cartagena", lat: 10.423, lng: -75.5492, z: 16 },
  domingo: { name: "Plaza Santo Domingo, Cartagena", lat: 10.4243, lng: -75.552, z: 17 },
  baluarte: { name: "Baluarte de Santo Domingo, city walls", lat: 10.4246, lng: -75.554, z: 16 },
  felipe: { name: "Castillo San Felipe de Barajas", lat: 10.4227, lng: -75.5394, z: 16 },
  inquisicion: { name: "Palacio de la Inquisición", lat: 10.4232, lng: -75.5516, z: 17 },
  bovedas: { name: "Las Bóvedas, Cartagena", lat: 10.43, lng: -75.5465, z: 16 },
  taganga: { name: "Taganga", lat: 11.2684, lng: -74.1894, z: 15 },
  playagrande: { name: "Playa Grande, Taganga", lat: 11.2735, lng: -74.1975, z: 15 },
  dive: { name: "Dive sites off Tayrona (approx.)", lat: 11.29, lng: -74.205, z: 12 },
  santamarta: { name: "Santa Marta waterfront, Parque de los Novios", lat: 11.2422, lng: -74.2133, z: 15 },
  zaino: { name: "El Zaino gate, Tayrona", lat: 11.2808, lng: -73.9148, z: 14 },
  canaveral: { name: "Cañaveral trailhead, Tayrona", lat: 11.3053, lng: -73.9289, z: 14 },
  arrecifes: { name: "Arrecifes, Tayrona", lat: 11.3154, lng: -73.9491, z: 15 },
  piscina: { name: "La Piscina, Tayrona", lat: 11.3235, lng: -73.9585, z: 15 },
  cabo: { name: "Cabo San Juan, Tayrona", lat: 11.3326, lng: -73.9739, z: 15 },
  smr: { name: "Simón Bolívar airport, Santa Marta", lat: 11.1189, lng: -74.2312, z: 13 },
  oro: { name: "Museo del Oro, Bogotá", lat: 4.6018, lng: -74.0719, z: 16 },
  candelaria: { name: "Plaza de Bolívar, La Candelaria", lat: 4.5982, lng: -74.076, z: 16 },
  monserrate: { name: "Monserrate, Bogotá", lat: 4.6052, lng: -74.0555, z: 15 }
};

const WHEN = {
  now: "Book now",
  month: "About a month ahead",
  week: "A few days ahead",
  day: "On the day"
};

const GF = (from, to, date) =>
  `https://www.google.com/travel/flights?hl=en&curr=EUR&q=one%20way%20flights%20from%20${from}%20to%20${to}%20on%202026-12-${date}`;

const FARES = {
  bogaxm: GF("BOG", "AXM", "06"),
  peieoh: GF("PEI", "EOH", "10"),
  peimde: GF("PEI", "MDE", "10"),
  mdectg: GF("MDE", "CTG", "13"),
  smrbog: GF("SMR", "BOG", "18")
};

const MAPS = (q) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

const LINK = {
  checkmig: "https://www.migracioncolombia.gov.co/tramites-y-servicios/aplicativos/checkmig",
  habitel: "https://www.habitelhotels.com/select",
  salentoHotel: "https://www.elmiradordelcocora.com/",
  paramo: "https://paramotrek.com/en/tour/summit-paramillo-del-quindio/",
  montanas: "https://montanascolombianas.com/paramillo-of-quindio-3-days-2-nights/?lang=en",
  nevados: "https://www.parquesnacionales.gov.co/nuestros-parques/parque-nacional-natural-los-nevados/",
  ceiba: MAPS("Ayenda Ceiba Rooms Pereira"),
  clicBags: "https://clicair.co/clic-lnd/familias-tarifarias/",
  casaparis: "https://casaparis.com.co/pages/traje-de-hombre",
  casaparisContact: "https://casaparis.com.co/pages/contact",
  tonight: MAPS("Tonight alquiler de trajes Carrera 33 7-69 Medellin"),
  marquee: "https://marqueemedellin.com/",
  invitation: "https://lau-y-luisfer.my.canva.site/",
  coffee: "https://www.beyondcolombia.com/tours/coffee-tour-medellin-farm-santa-elena/",
  escobar: "https://www.guruwalk.com/es/a/medellin/v101499-tours-de-pablo-escobar-en-medellin",
  pobladoWalk: "https://www.guruwalk.com/walks/38407-the-great-poblado-free-tour-from-provenza-to-manila",
  comunaTour: "https://comuna13graffititour.com/guides/comuna-13-tour-cost/",
  arsenal: "https://booking.arsenalhotel.com/en/?skip_mobile=1",
  felipe: "https://fortificacionescartagena.com.co/es/planee-su-visita/castillo-de-san-felipe-de-barajas/",
  muhca: "https://muhca.gov.co/visita",
  marsol: "https://www.marsol.com.co/",
  taganga: MAPS("Taganga hotels"),
  poseidon: "https://poseidondivecenter.com/en/producto/2-tank-dive-fun-dives-night-dives-poseidon-dive-center-colombia/",
  oceano: MAPS("Oceano Scuba Dive Center Taganga"),
  tayronaFees: "https://parquetayrona.org/guides/fees-hours-closures/",
  tayronaDay: "https://parquetayrona.org/guides/tayrona-day-trip-from-santa-marta/",
  oro: "https://www.banrepcultural.org/bogota/museo-del-oro/programa-tu-visita"
};

const DAYS = {
  5: {
    cls: "bog", short: "Land", line: "Land 19:35 · airport hotel",
    region: "Saturday 5 December · Bogotá",
    title: "Land in Bogotá",
    sleep: "Habitel Select, 1 km from El Dorado",
    slots: [
      {
        t: "19:35", h: 19, e: 20, place: "bog",
        title: "Land at El Dorado",
        text: "International arrival. Immigration and bags usually take 30–60 minutes.",
        book: [
          ["now", "International flights into and out of Bogotá", "Landing 19:35 on the 5th, out on the 19th."],
          ["week", "Check-MIG entry form", "Free immigration pre-registration, 72 hours to 1 hour before landing. Officially optional, but airlines sometimes ask for it.", LINK.checkmig]
        ],
        tips: [
          "Take cash from an ATM in arrivals. Salento, the farms on the trek and Tayrona all run on cash.",
          "Buy a local SIM or eSIM here — data makes the taxis and maps much easier."
        ],
        links: [["Check-MIG", LINK.checkmig]]
      },
      {
        t: "20:30", h: 20, e: 21, place: "habitel",
        title: "Shuttle to Habitel Select",
        text: "The hotel runs a free airport shuttle every 30 minutes, day and night. The ride is about 3 minutes.",
        book: [["now", "Habitel Select, night of the 5th", "Closest hotel to the airport. The same shuttle takes you back at 03:45.", LINK.habitel]],
        tips: ["Ask at check-in which terminal door the 03:45 shuttle stops at, and whether breakfast to go is possible."],
        links: [["Habitel Select", LINK.habitel]]
      },
      {
        t: "21:00", h: 21, e: 22, place: "habitel",
        title: "Dinner and repack",
        text: "Dinner at the hotel, then repack: trek kit on top, city clothes and the wedding things at the bottom of the big bag.",
        tips: ["Alarm for 03:30."]
      },
      { t: "22:00", h: 22, e: 24, place: "habitel", title: "Sleep", sleep: true, text: "Short night." }
    ]
  },

  6: {
    cls: "salento", short: "Salento", line: "05:10 to Armenia · Salento · trek briefing",
    region: "Sunday 6 December · Salento",
    title: "Fly early, a day in Salento",
    sleep: "Salento",
    slots: [
      { t: "00:00", h: 0, e: 3, place: "habitel", title: "Sleep", sleep: true, text: "At Habitel Select." },
      {
        t: "03:30", h: 3, e: 4, place: "habitel",
        title: "Wake, shuttle to the terminal",
        text: "Check out and take the 03:45 hotel shuttle to El Dorado."
      },
      {
        t: "04:00", h: 4, e: 5, place: "bog",
        title: "Check in with Avianca",
        text: "Domestic departures at El Dorado. Drop bags and go through security; the flight boards around 04:40.",
        tips: ["Avianca Express flies small regional planes on this route. Keep cabin bags small."]
      },
      {
        t: "05:10–06:10", h: 5, e: 6, place: "bog", to: "axm",
        title: "Fly Bogotá → Armenia",
        text: "Avianca, operated by Avianca Express. About an hour, direct.",
        book: [["now", "Bogotá → Armenia, 05:10", "€72 in your search. Later options: 07:35–08:40, and 10:15–11:15 at €93.", FARES.bogaxm]],
        links: [["BOG → AXM fares", FARES.bogaxm]]
      },
      {
        t: "06:15", h: 6, e: 7, place: "axm", to: "salento",
        title: "Armenia airport → Salento",
        text: "Easiest is a taxi or private transfer straight to Salento: 50–60 minutes, about 95,000–120,000 COP for the car. The cheap way is a taxi to the Armenia bus terminal (about 25 minutes), then a buseta to Salento: every 20 minutes from about 05:30, 45–50 minutes, about 5,000–7,000 COP each.",
        book: [["week", "Transfer Armenia airport → Salento", "Pre-book it (your Salento hotel can send a driver), so someone is waiting at 06:10 on a Sunday."]],
        tips: ["Outside the cities taxis don’t use meters. Agree the fare before you get in."],
        links: [["Airport → Salento route", "https://www.google.com/maps/dir/?api=1&origin=Aeropuerto%20El%20Ed%C3%A9n%20Armenia&destination=Salento%20Quind%C3%ADo&travelmode=driving"]]
      },
      {
        t: "07:30", h: 7, e: 9, place: "salento",
        title: "Bags at the hotel, breakfast",
        text: "Drop the bags at the hotel and have breakfast on the plaza.",
        book: [["now", "Salento hotel, night of the 6th", "Ask for early check-in, and to store your big bags from the 7th until you pick them up on the evening of the 9th.", LINK.salentoHotel]],
        links: [["El Mirador del Cocora", LINK.salentoHotel]]
      },
      {
        t: "09:00", h: 9, e: 11, place: "salento",
        title: "Rest",
        text: "You were up at 03:30 and the trek starts tomorrow at 06:00. Sleep a little, or walk slowly around town — gentle walking at 1,900 m is good acclimatisation."
      },
      {
        t: "11:00", h: 11, e: 12, place: "salento",
        title: "Calle Real and the plaza",
        text: "Salento’s painted main street: balconies, craft shops, cafés.",
        see: ["Calle Real from the plaza to the steps up to the lookout.", "Café Jesús Martín for a coffee tasting."]
      },
      {
        t: "12:30", h: 12, e: 14, place: "salento",
        title: "Lunch: trout with patacón",
        text: "The local dish. El Rincón de Lucy does a cheap set lunch; Donde Laurita is a sit-down trout place."
      },
      {
        t: "14:00", h: 14, e: 16, place: "salento",
        title: "Trek briefing at Páramo Trek",
        text: "Páramo Trek asks everyone to come to their Salento office before 16:00 the day before. They check boots, warm and rain gear, settle payment and rent anything missing (first come, first served).",
        book: [["now", "Páramo Trek — Paramillo summit, 7–9 Dec", "3 days, 2 nights at Finca La Primavera. Includes guide, transport Salento ↔ Cocora, all meals, farm beds, insurance and poles. Listed summit treks run about 980,000–1,420,000 COP per person — ask them for the December price.", LINK.paramo]],
        tips: [
          "They ask for no alcohol the day before the trek.",
          "Bring: boots, rain jacket and trousers, warm layers for 4,750 m, hat, gloves, headlamp, sun cream, sunglasses, a 30 l+ daypack."
        ],
        links: [["Páramo Trek", LINK.paramo], ["Los Nevados park", LINK.nevados]]
      },
      {
        t: "16:00", h: 16, e: 17, place: "salento",
        title: "Cash, snacks, pack",
        text: "Take out cash for three days in the mountains and the taxi to Pereira on the 9th. Pack the trek bag; everything else stays at the hotel.",
        tips: ["Salento’s ATMs can run dry on busy holiday weekends. Arrive with cash from Bogotá to be safe."]
      },
      {
        t: "17:15", h: 17, e: 18, place: "cruz",
        title: "Sunset at Alto de la Cruz",
        text: "About 250 steps up from the end of Calle Real. Free, with a view over the valley toward Cocora. Sunset is around 17:50."
      },
      {
        t: "18:30", h: 18, e: 20, place: "salento",
        title: "Early dinner",
        text: "Something warm and simple, then back to the hotel."
      },
      { t: "21:00", h: 21, e: 24, place: "salento", title: "Sleep", sleep: true, text: "Meeting is at 06:00." }
    ]
  },

  7: {
    cls: "hike", short: "Trek 1", line: "Cocora → Finca La Primavera, 19 km",
    region: "Monday 7 December · Los Nevados",
    title: "Trek day 1: Cocora to La Primavera",
    sleep: "Finca La Primavera, about 3,700 m",
    slots: [
      { t: "00:00", h: 0, e: 5, place: "salento", title: "Sleep", sleep: true, text: "In Salento." },
      {
        t: "05:30", h: 5, e: 6, place: "salento",
        title: "Check out, leave the big bags",
        text: "Leave the big bags at the hotel until the evening of the 9th."
      },
      {
        t: "06:00", h: 6, e: 7, place: "salento",
        title: "Meet the guide, breakfast",
        text: "Páramo Trek office at 06:00, meet the guide, then a breakfast stop."
      },
      {
        t: "07:00", h: 7, e: 8, place: "cocora",
        title: "Jeep to Valle de Cocora",
        text: "A Willys jeep to the valley, about 30 minutes. You start walking at 2,390 m among the wax palms.",
        see: ["The wax palms — the national tree, up to 60 m tall, best in the low morning light."]
      },
      {
        t: "08:00", h: 8, e: 12, place: "forest",
        title: "Up through the cloud forest",
        text: "Climbing along the San José river through high Andean forest: mossy trees, streams and bromeliads.",
        tips: ["Mud is normal here. Gaiters or high boots help."]
      },
      {
        t: "12:30", h: 12, e: 13, place: "forest",
        title: "Lunch at a farm, 3,170 m",
        text: "A cooked lunch at a mountain farm."
      },
      {
        t: "13:30", h: 13, e: 16, place: "primavera",
        title: "Into the páramo, up to 3,800 m",
        text: "Sub-páramo, then the open páramo with the first frailejones. On a clear afternoon you see the glacier on Nevado del Tolima.",
        see: ["Frailejones — the furry-leaved páramo plants that only grow up here."]
      },
      {
        t: "16:30", h: 16, e: 18, place: "primavera",
        title: "Down to Finca La Primavera",
        text: "The last stretch goes slightly down to the farm, about 3,700 m. Dry clothes on, hot drinks by the wood stove."
      },
      {
        t: "18:00", h: 18, e: 20, place: "primavera",
        title: "Dinner, Noche de las Velitas",
        text: "A dinner cooked by the farm family. Tonight is Noche de las Velitas, when Colombians light candles at dusk — ask your hosts if they light any.",
        tips: ["Nights here drop close to freezing. Sleep in the warm layers."]
      },
      { t: "20:00", h: 20, e: 24, place: "primavera", title: "Sleep", sleep: true, text: "Summit day starts early." }
    ]
  },

  8: {
    cls: "hike", short: "Summit", line: "Paramillo del Quindío, 4,750 m · holiday",
    region: "Tuesday 8 December · Los Nevados · public holiday",
    title: "Trek day 2: the summit",
    sleep: "Finca La Primavera again",
    slots: [
      { t: "00:00", h: 0, e: 5, place: "primavera", title: "Sleep", sleep: true, text: "At La Primavera." },
      {
        t: "05:30", h: 5, e: 6, place: "primavera",
        title: "Breakfast",
        text: "Big breakfast. Today is about 19 km, out and back."
      },
      {
        t: "06:30", h: 6, e: 8, place: "primavera",
        title: "Through the frailejones",
        text: "Straight into the páramo with wide views of Nevado del Tolima."
      },
      {
        t: "08:30", h: 8, e: 9, place: "wetlands",
        title: "Paramillo wetlands, 4,200 m",
        text: "The wetlands where the Cárdenas river starts. The group sets up a base here and leaves extra weight behind."
      },
      {
        t: "09:30", h: 9, e: 11, place: "paramillo",
        title: "Climb to the crater",
        text: "About two hours up loose scree, as steep as 45° in places. The guide sets the pace and decides on the turnaround if the weather closes in.",
        tips: ["Use poles. Small steps, steady breathing.", "UV is strong at this altitude: sunglasses, sun cream, a cap."]
      },
      {
        t: "11:30", h: 11, e: 12, place: "paramillo",
        title: "Summit, 4,750 m",
        text: "The top of an extinct volcano that lost its glacier. On a clear day: Nevado de Santa Isabel, Nevado del Ruiz and Laguna del Otún.",
        see: ["Santa Isabel and Ruiz glaciers to the north.", "Nevado del Tolima to the south-east."]
      },
      {
        t: "12:00", h: 12, e: 17, place: "primavera",
        title: "Back down to La Primavera",
        text: "Down the scree, back past the wetlands and across the páramo. You usually reach the farm as the sun sets, around 17:30.",
        tips: ["A headache that gets worse, or nausea, means telling the guide and going down."]
      },
      {
        t: "18:00", h: 18, e: 20, place: "primavera",
        title: "Dinner at the farm",
        text: "It is the Inmaculada Concepción holiday down in the towns; up here it is soup and an early night."
      },
      { t: "20:00", h: 20, e: 24, place: "primavera", title: "Sleep", sleep: true, text: "Last night in the mountains." }
    ]
  },

  9: {
    cls: "hike", short: "Down", line: "Trek out to Salento · taxi to Pereira",
    region: "Wednesday 9 December · Salento → Pereira",
    title: "Trek day 3, then Pereira",
    sleep: "Ayenda Ceiba Rooms, by Pereira airport",
    slots: [
      { t: "00:00", h: 0, e: 5, place: "primavera", title: "Sleep", sleep: true, text: "At La Primavera." },
      {
        t: "05:30", h: 5, e: 6, place: "primavera",
        title: "Breakfast",
        text: "The longest walking day: about 20 km and 1,900 m of descent."
      },
      {
        t: "06:30", h: 6, e: 9, place: "primavera",
        title: "Up to 4,000 m, one last time",
        text: "A climb to the trip’s high point on this route, where the guide talks about the páramos and why they matter for Colombia’s water.",
        see: ["A last view back to Paramillo del Quindío."]
      },
      {
        t: "09:00", h: 9, e: 11, place: "argentina",
        title: "Long descent",
        text: "Down a different valley from the one you came up."
      },
      {
        t: "11:30", h: 11, e: 12, place: "argentina",
        title: "Hot soup at La Argentina",
        text: "The halfway stop, at Finca La Argentina."
      },
      {
        t: "12:00", h: 12, e: 16, place: "cocora",
        title: "Back through the forest to Cocora",
        text: "Down through the cloud forest to the wax palms where you started. Operators often stop at Acaime for the hummingbirds on this descent.",
        see: ["Acaime hummingbird reserve — usually included on day 3, no extra trip needed."]
      },
      {
        t: "16:30", h: 16, e: 17, place: "salento",
        title: "Transport to Salento",
        text: "Private transport back to town. Páramo Trek puts the return at about 18:00 — it can be earlier if the group is quick."
      },
      {
        t: "17:30", h: 17, e: 18, place: "salento",
        title: "Collect the bags, quick shower",
        text: "Pick up the big bags from the hotel. Ask in advance whether you can use a shower — some places do this for a small fee."
      },
      {
        t: "18:00", h: 18, e: 19, place: "salento",
        title: "Dinner in Salento",
        text: "Páramo Trek includes a celebration dinner at the end. Keep it short tonight."
      },
      {
        t: "19:00–20:15", h: 19, e: 20, place: "salento", to: "ceiba",
        title: "Taxi Salento → Pereira airport",
        text: "About an hour to 1h15. A taxi or private transfer is about 150,000–240,000 COP for the car. The Expreso Alcalá bus to Pereira terminal (about 1 hour, 11,000–14,000 COP) stops running at around 18:30–19:30, which is too tight after the trek.",
        book: [["week", "Taxi Salento → Pereira, 19:00", "Book through the Salento hotel or Páramo Trek. Agree the fare first."]],
        tips: ["After the August 2026 earthquake, Pereira airport reopened on 26 August with fewer flights. Check that tomorrow’s flight still runs a week before."],
        links: [["Salento → Pereira route", "https://www.google.com/maps/dir/?api=1&origin=Salento%20Quind%C3%ADo&destination=Aeropuerto%20Mateca%C3%B1a%20Pereira&travelmode=driving"]]
      },
      {
        t: "20:30", h: 20, e: 21, place: "ceiba",
        title: "Check in by the airport",
        text: "Ayenda Ceiba Rooms is about 1 km from the terminal, with a 24-hour front desk and a cheap hotel lift to the airport.",
        book: [["now", "Pereira airport hotel, night of the 9th", "Ayenda Ceiba Rooms (7.6 from about 490 reviews). Epic Suites, 5 minutes from the airport, is the alternative.", LINK.ceiba]],
        tips: ["Book the 05:15 lift to the airport at check-in.", "You will hear planes. Earplugs."],
        links: [["Ayenda Ceiba Rooms", LINK.ceiba]]
      },
      { t: "21:00", h: 21, e: 24, place: "ceiba", title: "Sleep", sleep: true, text: "Alarm 04:45." }
    ]
  },

  10: {
    cls: "med", short: "Medellín", line: "07:10 to Medellín · suit · Escobar tour · dinner",
    region: "Thursday 10 December · Medellín",
    title: "Medellín, the suit, Pablo Escobar tour",
    sleep: "El Poblado, Medellín",
    slots: [
      { t: "00:00", h: 0, e: 4, place: "ceiba", title: "Sleep", sleep: true, text: "By Pereira airport." },
      {
        t: "04:45", h: 4, e: 5, place: "ceiba",
        title: "Wake",
        text: "Quick breakfast if the hotel has one."
      },
      {
        t: "05:15", h: 5, e: 6, place: "pei",
        title: "To the airport, check in",
        text: "Clic suggests arriving two hours before with checked bags. The flight closes an hour before departure."
      },
      {
        t: "07:10–07:55", h: 7, e: 8, place: "pei", to: "eoh",
        title: "Fly Pereira → Medellín (Olaya Herrera)",
        text: "Clic Air direct, 45 minutes, €89 in your search. Olaya Herrera is inside the city, 15 minutes from El Poblado. The alternative is Avianca 05:55–06:45 to the main Rionegro airport, €73 — but that one lands 45–60 minutes out of town, with a flat taxi fare of 132,000 COP, and means getting up an hour earlier.",
        book: [
          ["now", "Pereira → Medellín, 07:10 Clic to Olaya Herrera", "Check the fare: the cheapest (Práctica) includes 5 kg cabin and 12 kg hold, Cercana 17 kg, Flexible 10 + 23 kg. Extra kilos cost about 13,200 COP + VAT each.", FARES.peieoh]
        ],
        links: [["PEI → EOH fares", FARES.peieoh], ["PEI → MDE fares", FARES.peimde], ["Clic fares and bags", LINK.clicBags]]
      },
      {
        t: "08:15", h: 8, e: 9, place: "poblado",
        title: "Taxi to El Poblado, breakfast",
        text: "About 15 minutes from Olaya Herrera. Drop the bags at the hotel, hand the trek clothes to a lavandería (same- or next-day), and have breakfast in Provenza.",
        book: [["now", "Medellín hotel, 10–13 Dec", "Three nights in El Poblado. Ask for early check-in on the 10th.", LINK.marquee]],
        links: [["Marquee Hotel", LINK.marquee], ["Click Clack", "https://www.clickclackhotel.com/"]]
      },
      {
        t: "10:00", h: 10, e: 11, place: "casaparis",
        title: "Pick up the suit at Casa París",
        text: "About 20 minutes by taxi to Envigado. Fittings are by appointment and take about an hour. Suits 195,000–390,000 COP, shoes 60,000–70,000 COP. Their own workshop does alterations.",
        book: [["now", "Suit appointment, Thu 10 Dec at 10:00", "WhatsApp +57 304 546 2180. Send measurements and the event date ahead, so the suit is pulled and only needs small changes. Return is Saturday the 12th.", LINK.casaparis]],
        tips: ["Rental shops often sell shirts rather than rent them. Bring a white shirt and tie, or buy them there.", "Ask when alterations will be ready — they close at 19:00 today."],
        links: [["Casa París suits", LINK.casaparis], ["Casa París contact", LINK.casaparisContact], ["Tonight, Provenza (backup)", LINK.tonight]]
      },
      {
        t: "11:30", h: 11, e: 13, place: "poblado",
        title: "Lunch in Provenza",
        text: "A few blocks of restaurants and cafés around Carrera 35."
      },
      {
        t: "13:00", h: 13, e: 17, place: "inflexion", to: "montesacro",
        title: "Pablo Escobar walking tour",
        text: "A 3–4 hour history tour, usually by van from El Poblado. Typical stops: Parque Inflexión (the old Mónaco building, now a memorial to the victims), then Cementerio Jardines Montesacro in Itagüí. English and Spanish tours run daily; book a day or two ahead. About €20–€40 each.",
        book: [["week", "Pablo Escobar tour, Thu 10 Dec at 13:00", "GuruWalk has several 3–4 h options. Pick one that starts from El Poblado after lunch, and that treats it as history — Parque Inflexión — rather than a souvenir museum.", LINK.escobar]],
        tips: [
          "Many people in Medellín dislike Pablo tourism. A good guide talks about the victims and the city’s later turnaround, not the myth.",
          "The Excel also listed The Great Poblado Free Tour (Provenza → Manila, 2.5 h, tips only, usually 16:00). That is a neighbourhood walk, not an Escobar tour — use it if you would rather skip Pablo.",
          "If the suit needs a second fitting, collect it after the tour; Casa París is open until 19:00."
        ],
        links: [["Pablo Escobar tours", LINK.escobar], ["Poblado free walk (alternative)", LINK.pobladoWalk], ["Parque Inflexión", MAPS("Parque Inflexion Medellin")]]
      },
      {
        t: "17:15", h: 17, e: 18, place: "casaparis",
        title: "Collect the altered suit (if needed)",
        text: "Only if the alterations weren’t ready this morning. Then back to the hotel to shower before dinner."
      },
      {
        t: "19:00", h: 19, e: 23, place: "poblado",
        title: "Pre-wedding dinner",
        text: "Time and place from the couple."
      },
      { t: "23:00", h: 23, e: 24, place: "poblado", title: "Sleep", sleep: true, text: "Wedding tomorrow." }
    ]
  },

  11: {
    cls: "wed", short: "Wedding", line: "The wedding",
    region: "Friday 11 December · Medellín",
    title: "The wedding",
    sleep: "El Poblado, Medellín",
    slots: [
      { t: "00:00", h: 0, e: 9, place: "poblado", title: "Sleep in", sleep: true, text: "Nothing in the morning." },
      {
        t: "09:30", h: 9, e: 11, place: "poblado",
        title: "Slow breakfast",
        text: "A long breakfast in Provenza."
      },
      {
        t: "11:00", h: 11, e: 12, place: "poblado",
        title: "Barber, last errands",
        text: "A shave or haircut at a barbería in El Poblado, if you want one. Gift or envelope ready.",
        book: [["now", "Wedding gift", "Check the invitation for a gift list or envelope (lluvia de sobres is common in Colombia).", LINK.invitation]]
      },
      {
        t: "13:00", h: 13, e: 14, place: "poblado",
        title: "Light lunch",
        text: "Keep it light — dinner will be late."
      },
      {
        t: "15:00", h: 15, e: 16, place: "poblado",
        title: "Get ready",
        text: "Suit on, ride booked.",
        book: [["week", "Rides to and from the venue", "Uber, DiDi, Cabify, or a taxi through the hotel. Plan the ride home before you go."]]
      },
      {
        t: "16:00 →", h: 16, e: 24, place: "poblado",
        title: "Wedding",
        text: "Venue, start time and dress code are in the invitation. Expect a long night with a lot of dancing.",
        links: [["Invitation", LINK.invitation]]
      }
    ]
  },

  12: {
    cls: "coffee", short: "Coffee", line: "Return the suit · coffee farm · Arví",
    region: "Saturday 12 December · Medellín",
    title: "Return the suit, coffee with friends",
    sleep: "El Poblado, Medellín",
    slots: [
      { t: "00:00", h: 0, e: 8, place: "poblado", title: "Wedding night, sleep", sleep: true, text: "Home whenever the party ends." },
      {
        t: "09:00", h: 9, e: 10, place: "casaparis",
        title: "Return the suit",
        text: "Casa París opens at 9:00 on Saturdays (until 18:00). Return the suit and shoes; check the return time when you pick up on the 10th."
      },
      {
        t: "10:00", h: 10, e: 15, place: "santaelena",
        title: "Coffee farm in Santa Elena",
        text: "With your friends if they drive — Santa Elena is 25–45 minutes above the city. Or the shared tour from El Poblado at 10:00: about 5 hours with transport, the bean-to-cup process, tasting and lunch, 250,000 COP.",
        book: [["month", "Coffee farm tour, Sat 12 Dec", "Only if you go without your friends. Leaves Wake Medellín (Carrera 35 #10B-66) at 10:00.", LINK.coffee]],
        tips: ["Santa Elena is cooler than the city. Bring a layer."],
        links: [["Santa Elena coffee tour", LINK.coffee]]
      },
      {
        t: "15:00", h: 15, e: 17, place: "arvi",
        title: "Parque Arví and the cable car down",
        text: "Forest trails and a small market at the cable-car station. Then Metrocable Line L down to Santo Domingo, Line K to Acevedo and the metro back.",
        book: [["day", "Arví cable car (Line L)", "26,700 COP for foreigners, Saturday 9:00–18:00."]],
        tips: ["Line L closes for maintenance some weeks. Check Metro de Medellín the day before."],
        links: [["Parque Arví", MAPS("Parque Arvi Medellin")]]
      },
      {
        t: "19:00", h: 19, e: 21, place: "poblado",
        title: "Dinner, pack",
        text: "Provenza, or Centro Comercial Santafé if you want a mall (from the Excel list). Pack tonight. Tomorrow you check out early for Comuna 13.",
        see: ["Santafé mall — large, easy taxi from El Poblado. Skip Plaza Botero; the Excel marked it as not really interesting."]
      },
      { t: "22:00", h: 22, e: 24, place: "poblado", title: "Sleep", sleep: true, text: "" }
    ]
  },

  13: {
    cls: "ctg", short: "Cartagena", line: "Comuna 13 · fly to Cartagena",
    region: "Sunday 13 December · Medellín → Cartagena",
    title: "Comuna 13, then the coast",
    sleep: "Getsemaní, Cartagena",
    slots: [
      { t: "00:00", h: 0, e: 7, place: "poblado", title: "Sleep", sleep: true, text: "" },
      {
        t: "08:00", h: 8, e: 9, place: "poblado",
        title: "Breakfast, check out",
        text: "Leave the bags at the hotel reception."
      },
      {
        t: "09:00", h: 9, e: 12, place: "comuna13",
        title: "Comuna 13",
        text: "Metro to San Javier (4,400 COP), then the outdoor escalators, murals and street dancers of a neighbourhood that turned itself around. A local guide tells the story behind the murals. The neighbourhood is free to walk.",
        book: [["week", "Comuna 13 guided tour, Sunday morning", "Shared tours about 35,000–60,000 COP or USD 14–28, about 3 hours.", LINK.comunaTour]],
        see: [
          "Casa de la Memoria (Parque Bicentenario) — the conflict museum from the Excel list. Only if you skip a long Comuna 13 tour and go via the centre; you have a flight this afternoon.",
          "Placita de Flórez — historic market in Centro. Same rule: only if you are already downtown."
        ],
        tips: ["Sundays are busy. The morning is calmer than the afternoon.", "Keep your phone in a front pocket in crowds.", "Cerro Tusa is a full day south of the city — it does not fit before the Cartagena flight."],
        links: [["Comuna 13 tours", LINK.comunaTour], ["Comuna 13 on Maps", MAPS("Escaleras Electricas Comuna 13 Medellin")], ["Casa de la Memoria", MAPS("Museo Casa de la Memoria Medellin")]]
      },
      {
        t: "12:30", h: 12, e: 13, place: "poblado",
        title: "Lunch, collect bags",
        text: "Back to El Poblado."
      },
      {
        t: "13:30", h: 13, e: 15, place: "mde",
        title: "Taxi to Rionegro airport",
        text: "45–60 minutes up the mountain, about 132,000 COP. Be there 1.5–2 hours before the flight."
      },
      {
        t: "~16:00", h: 16, e: 17, place: "mde", to: "ctgair",
        title: "Fly Medellín → Cartagena",
        text: "About 1h15, direct. Avianca, LATAM, Wingo and JetSMART all fly it — pick an afternoon flight.",
        book: [["now", "Medellín → Cartagena, Sun 13 Dec afternoon", "Fares move a lot in December.", FARES.mdectg]],
        links: [["MDE → CTG fares", FARES.mdectg]]
      },
      {
        t: "17:30", h: 17, e: 18, place: "trinidad",
        title: "Taxi to Getsemaní, check in",
        text: "15 minutes from the airport.",
        book: [["now", "Cartagena hotel, 13–15 Dec", "Getsemaní or the Walled City, both walkable. December is peak season.", LINK.arsenal]],
        links: [["Arsenal Hotel", LINK.arsenal]]
      },
      {
        t: "19:00", h: 19, e: 20, place: "trinidad",
        title: "Plaza de la Trinidad",
        text: "Getsemaní’s square in the evening: street food, music, everyone on the church steps."
      },
      {
        t: "20:00", h: 20, e: 22, place: "domingo",
        title: "Walled City at night",
        text: "In through the Torre del Reloj gate, then Plaza Santo Domingo with Botero’s reclining Gertrudis. Dinner in the old town.",
        tips: ["Restaurants on Plaza Santo Domingo charge more. Two streets over is cheaper."]
      },
      { t: "23:00", h: 23, e: 24, place: "trinidad", title: "Sleep", sleep: true, text: "" }
    ]
  },

  14: {
    cls: "ctg", short: "Old town", line: "San Felipe · walls · Getsemaní",
    region: "Monday 14 December · Cartagena",
    title: "Fort, walls, Getsemaní",
    sleep: "Getsemaní, Cartagena",
    slots: [
      { t: "00:00", h: 0, e: 6, place: "trinidad", title: "Sleep", sleep: true, text: "" },
      {
        t: "07:00", h: 7, e: 9, place: "felipe",
        title: "Castillo San Felipe",
        text: "The fort that was never taken: tunnels, ramparts and views over the old town. Opens 7:00, 38,000 COP, about 2 hours.",
        book: [["day", "Castillo San Felipe ticket", "At the gate, or online on the official site.", LINK.felipe]],
        tips: ["Go at opening. After 10:00 the heat on the ramparts is hard work."],
        links: [["San Felipe", LINK.felipe]]
      },
      {
        t: "09:30", h: 9, e: 10, place: "trinidad",
        title: "Breakfast in Getsemaní",
        text: "Juice, arepas, coffee."
      },
      {
        t: "10:30", h: 10, e: 12, place: "inquisicion",
        title: "Palacio de la Inquisición",
        text: "The city’s history museum on Plaza de Bolívar. Monday–Saturday 9:00–18:00.",
        links: [["Museo Histórico", LINK.muhca]]
      },
      {
        t: "12:00", h: 12, e: 15, place: "trinidad",
        title: "Lunch and siesta",
        text: "The hottest hours. Lunch, then back to the hotel or a pool."
      },
      {
        t: "15:30", h: 15, e: 16, place: "bovedas",
        title: "Las Bóvedas",
        text: "23 vaults built into the wall, now craft shops."
      },
      {
        t: "16:30", h: 16, e: 18, place: "baluarte",
        title: "Walk the walls to sunset",
        text: "Along the top of the walls to the Baluarte de Santo Domingo. Sunset is around 17:45. Free."
      },
      {
        t: "18:30", h: 18, e: 20, place: "trinidad",
        title: "Getsemaní murals",
        text: "Calle de la Sierpe and Calle de la Media Luna, then the Plaza de la Trinidad again."
      },
      {
        t: "20:00", h: 20, e: 22, place: "trinidad",
        title: "Dinner",
        text: "If you want a special dinner: Celele, a Caribbean tasting menu.",
        book: [["week", "Celele, Mon 14 Dec", "Reserve a few days ahead."]]
      },
      {
        t: "22:00", h: 22, e: 24, place: "trinidad", title: "Sleep", sleep: true, text: "",
        book: [["week", "Cartagena → Taganga transfer, Tue 15 Dec", "Easiest is a private transfer, door to door. The middle option is the MarSol shuttle: hourly 6:00–16:00, about 95,000 COP each, confirm hotel pickup. Cheapest is Berlinastur from its Marbella terminal: every 15 minutes, about 80,000 COP, tickets only at the station.", LINK.marsol]]
      }
    ]
  },

  15: {
    cls: "coast", short: "Taganga", line: "Road to Taganga · Santa Marta sunset",
    region: "Tuesday 15 December · Cartagena → Taganga",
    title: "Five hours along the coast",
    sleep: "Taganga",
    slots: [
      { t: "00:00", h: 0, e: 7, place: "trinidad", title: "Sleep", sleep: true, text: "" },
      {
        t: "08:00", h: 8, e: 9, place: "trinidad",
        title: "Breakfast, check out",
        text: "There is no direct flight to Santa Marta, so this leg is by road via Barranquilla."
      },
      {
        t: "09:00–14:30", h: 9, e: 14, place: "trinidad", to: "taganga",
        title: "Cartagena → Taganga by road",
        text: "About 5 hours. Leave in the morning to arrive in daylight.",
        tips: ["Keep valuables in the bag at your feet on shuttles."],
        links: [["Driving route", "https://www.google.com/maps/dir/?api=1&origin=Getsemani%2C%20Cartagena&destination=Taganga%2C%20Magdalena&travelmode=driving"], ["MarSol", LINK.marsol]]
      },
      {
        t: "14:30", h: 14, e: 16, place: "taganga",
        title: "Check in, the bay",
        text: "Taganga is small and walkable: the bay, the fishing boats, the dive shops.",
        book: [["now", "Taganga hotel, 15–18 Dec", "Three nights, close to the dive shops.", LINK.taganga]],
        links: [["Taganga hotels", LINK.taganga]]
      },
      {
        t: "16:30", h: 16, e: 18, place: "santamarta",
        title: "Santa Marta waterfront at sunset",
        text: "15 minutes by taxi. The Malecón, the cathedral and Parque de los Novios. Sunset around 17:40."
      },
      {
        t: "19:00", h: 19, e: 21, place: "santamarta",
        title: "Dinner around Parque de los Novios",
        text: "Then a taxi back to Taganga.",
        tips: ["Taganga is quiet after dark away from the seafront. Take a taxi back at night."]
      },
      {
        t: "21:30", h: 21, e: 24, place: "taganga", title: "Sleep", sleep: true, text: "",
        book: [["week", "Taxi to El Zaino for Thu 17 Dec, 06:00", "About 80,000–100,000 COP from Santa Marta or Taganga, 45–60 minutes."]]
      }
    ]
  },

  16: {
    cls: "coast", short: "Dive", line: "Two dives on the Tayrona coast",
    region: "Wednesday 16 December · Taganga",
    title: "Scuba on the Tayrona coast",
    sleep: "Taganga",
    slots: [
      { t: "00:00", h: 0, e: 7, place: "taganga", title: "Sleep", sleep: true, text: "" },
      {
        t: "07:30", h: 7, e: 8, place: "taganga",
        title: "Check in at the dive shop",
        text: "Paperwork, kit fitting, briefing. Poseidon is at Calle 18 #1-69 and opens at 7:00.",
        tips: ["Bring your certification card and logbook. If your last dive was long ago, ask for a refresher."]
      },
      {
        t: "08:00–13:00", h: 8, e: 13, place: "dive",
        title: "Two-tank boat dive",
        text: "Rocky reefs, coral, turtles, morays and big schools of fish along the edge of Tayrona park. Visibility often 10–12 m. You fly on the 18th, more than 24 hours after diving.",
        book: [["month", "Two-tank fun dive, Wed 16 Dec", "Poseidon: 430,000 COP with free nitrox, kit, computer and insurance (4.9 from about 930 reviews). Oceano Scuba is cheaper — a 2024 review paid 280,000 COP (4.9 from about 570 reviews).", LINK.poseidon]],
        tips: ["December wind can make the boat ride bumpy. Take seasickness tablets if you need them."],
        links: [["Poseidon", LINK.poseidon], ["Oceano Scuba", LINK.oceano]]
      },
      {
        t: "13:30", h: 13, e: 14, place: "taganga",
        title: "Lunch: fish on the bay",
        text: "Fried fish, coconut rice, patacones."
      },
      {
        t: "15:00", h: 15, e: 17, place: "playagrande",
        title: "Playa Grande",
        text: "A 20-minute walk over the headland, or a short boat ride from the bay."
      },
      {
        t: "17:30", h: 17, e: 18, place: "taganga",
        title: "Sunset on the bay",
        text: "From the seafront."
      },
      {
        t: "19:00", h: 19, e: 20, place: "taganga",
        title: "Early dinner",
        text: "Buy water and snacks for Tayrona tonight."
      },
      { t: "21:00", h: 21, e: 24, place: "taganga", title: "Sleep", sleep: true, text: "Alarm 05:30." }
    ]
  },

  17: {
    cls: "coast", short: "Tayrona", line: "Tayrona: Arrecifes, La Piscina, Cabo San Juan",
    region: "Thursday 17 December · Tayrona",
    title: "One full day in Tayrona",
    sleep: "Taganga",
    slots: [
      { t: "00:00", h: 0, e: 5, place: "taganga", title: "Sleep", sleep: true, text: "" },
      {
        t: "05:30", h: 5, e: 6, place: "taganga",
        title: "Wake, pack the day bag",
        text: "Passport, cash, water, swimwear, mosquito repellent, sun cream.",
        tips: ["Leave single-use plastic and alcohol behind — bags are checked at the gate."]
      },
      {
        t: "06:00", h: 6, e: 7, place: "taganga", to: "zaino",
        title: "Taxi to El Zaino",
        text: "45–60 minutes east along the coast road. The bus from Santa Marta market costs about 9,000 COP and takes an hour, every 15–20 minutes from 6:00."
      },
      {
        t: "07:00", h: 7, e: 8, place: "zaino",
        title: "Tickets at the gate",
        text: "Tickets are sold only at the gate on the day, until the daily limit is reached; there is no reservation. 96,500 COP each in high season (from 1 Dec), plus about 7,000 COP compulsory insurance. Cash and passport.",
        book: [["day", "Tayrona entry at the gate", "Be at El Zaino at 7:00. Paying online beforehand does not reserve a place.", LINK.tayronaFees]],
        links: [["Fees and hours", LINK.tayronaFees], ["One-day plan", LINK.tayronaDay]]
      },
      {
        t: "07:45", h: 7, e: 8, place: "canaveral",
        title: "Shuttle to Cañaveral",
        text: "About 5,000 COP each way to the trailhead."
      },
      {
        t: "08:00", h: 8, e: 9, place: "arrecifes",
        title: "Forest trail to Arrecifes",
        text: "Through the coastal forest — watch for monkeys. Arrecifes is the first big beach: strong currents, so no swimming here."
      },
      {
        t: "09:30", h: 9, e: 10, place: "piscina",
        title: "La Piscina",
        text: "A calm natural pool behind the rocks. Swim here."
      },
      {
        t: "10:30–14:00", h: 10, e: 14, place: "cabo",
        title: "Cabo San Juan",
        text: "The famous double bay and the hut on the rocks. Swim, lunch at the beach restaurant.",
        tips: ["Start back by 14:00–14:30. El Zaino closes the exit at 18:00 in high season, and the trails have no lights."]
      },
      {
        t: "14:00–16:30", h: 14, e: 16, place: "canaveral",
        title: "Walk back, out at El Zaino",
        text: "Same trail back, then the shuttle to the gate. Buses back to Santa Marta run until about 18:30."
      },
      {
        t: "17:30", h: 17, e: 19, place: "taganga",
        title: "Back in Taganga",
        text: "Shower, dinner by the bay."
      },
      { t: "21:00", h: 21, e: 24, place: "taganga", title: "Sleep", sleep: true, text: "" }
    ]
  },

  18: {
    cls: "bog", short: "To Bogotá", line: "Beach morning · fly to Bogotá",
    region: "Friday 18 December · Santa Marta → Bogotá",
    title: "Last flight inside Colombia",
    sleep: "Habitel Select, by El Dorado",
    slots: [
      { t: "00:00", h: 0, e: 7, place: "taganga", title: "Sleep", sleep: true, text: "" },
      {
        t: "08:00", h: 8, e: 9, place: "taganga",
        title: "Breakfast",
        text: "Slow morning."
      },
      {
        t: "09:00", h: 9, e: 11, place: "playagrande",
        title: "Last swim at Playa Grande",
        text: "Then pack the wet dive and beach things in a separate bag."
      },
      {
        t: "12:00", h: 12, e: 13, place: "taganga",
        title: "Check out, lunch",
        text: ""
      },
      {
        t: "13:00", h: 13, e: 14, place: "smr",
        title: "Taxi to Santa Marta airport",
        text: "Allow 45 minutes. The airport is south of the city.",
        book: [["week", "Taxi Taganga → Santa Marta airport", "Your hotel can book it."]]
      },
      {
        t: "~15:00", h: 15, e: 16, place: "smr", to: "bog",
        title: "Fly Santa Marta → Bogotá",
        text: "About 1h30, direct and frequent — usually the cheapest hop of the trip.",
        book: [["now", "Santa Marta → Bogotá, Fri 18 Dec afternoon", "", FARES.smrbog]],
        links: [["SMR → BOG fares", FARES.smrbog]]
      },
      {
        t: "17:00", h: 17, e: 18, place: "habitel",
        title: "Shuttle to Habitel Select",
        text: "Same hotel as the first night, same free shuttle.",
        book: [["now", "Habitel Select, night of the 18th", "", LINK.habitel]],
        tips: ["Bogotá will feel cold after the coast. Keep a jumper in the hand luggage."]
      },
      {
        t: "19:00", h: 19, e: 21, place: "habitel",
        title: "Dinner, repack for home",
        text: ""
      },
      { t: "22:00", h: 22, e: 24, place: "habitel", title: "Sleep", sleep: true, text: "" }
    ]
  },

  19: {
    cls: "bog", short: "Home", line: "Museo del Oro · fly home",
    region: "Saturday 19 December · Bogotá",
    title: "Bogotá, then home",
    sleep: "On the plane",
    slots: [
      { t: "00:00", h: 0, e: 7, place: "habitel", title: "Sleep", sleep: true, text: "" },
      {
        t: "08:00", h: 8, e: 9, place: "candelaria",
        title: "Taxi into the centre",
        text: "Leave the bags at the hotel. 30–45 minutes, about 35,000–45,000 COP."
      },
      {
        t: "09:00", h: 9, e: 11, place: "oro",
        title: "Museo del Oro",
        text: "The pre-Columbian gold museum. Saturday 9:00–19:00, 21,000 COP for foreigners, no booking needed.",
        links: [["Museo del Oro", LINK.oro]]
      },
      {
        t: "11:00", h: 11, e: 12, place: "candelaria",
        title: "La Candelaria",
        text: "The old town: Plaza de Bolívar, the cathedral, street art up the hill."
      },
      {
        t: "12:30", h: 12, e: 13, place: "candelaria",
        title: "Lunch: ajiaco",
        text: "Bogotá’s chicken and potato soup."
      },
      {
        t: "14:00", h: 14, e: 15, place: "monserrate",
        title: "Monserrate (optional)",
        text: "Cable car or funicular up to 3,150 m for the view over the city. Skip it if the flight is early."
      },
      {
        t: "16:00", h: 16, e: 17, place: "habitel",
        title: "Bags, airport",
        text: "Collect the bags. Be at the airport 3 hours before an international flight.",
        book: [["week", "Check-MIG exit form", "72 hours to 1 hour before the flight home.", LINK.checkmig]],
        tips: ["Keep some pesos for the taxi; change the rest before security."]
      },
      {
        t: "Evening", h: 19, e: 21, place: "bog",
        title: "Fly home",
        text: "Your international flight. The times here assume an evening departure — move the afternoon if it leaves earlier."
      }
    ]
  }
};

const ROUTE = [
  "bog", "axm", "salento", "cocora", "primavera", "paramillo", "primavera", "argentina", "cocora", "salento",
  "pei", "eoh", "poblado", "santaelena", "poblado", "mde", "ctgair", "trinidad", "taganga", "zaino", "cabo",
  "taganga", "smr", "bog"
];
