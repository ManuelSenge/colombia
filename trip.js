const PLACES = {
  bog: { name: "Bogotá", lat: 4.651, lng: -74.083, z: 11 },
  salento: { name: "Salento", lat: 4.6374, lng: -75.5706, z: 12 },
  santaelena: { name: "Santa Elena coffee farms", lat: 6.212, lng: -75.5, z: 12 },
  cocora: { name: "Valle de Cocora", lat: 4.642, lng: -75.489, z: 12 },
  playa: { name: "High farm, about 3,700 m", lat: 4.69, lng: -75.44, z: 12 },
  paramillo: { name: "Paramillo del Quindío", lat: 4.713, lng: -75.385, z: 11 },
  med: { name: "Medellín · El Poblado", lat: 6.2088, lng: -75.5674, z: 12 },
  ctg: { name: "Cartagena · Getsemaní", lat: 10.422, lng: -75.547, z: 13 },
  taganga: { name: "Taganga", lat: 11.267, lng: -74.193, z: 12 },
  tayrona: { name: "Tayrona", lat: 11.316, lng: -74.028, z: 11 },
  smr: { name: "Santa Marta airport", lat: 11.12, lng: -74.231, z: 11 }
};

const WHEN = {
  now: "Book now",
  month: "About a month ahead",
  week: "A few days ahead",
  day: "On the day"
};

const FARES = {
  bogaxm: "https://www.google.com/travel/flights?hl=en&curr=EUR&q=one%20way%20flights%20from%20BOG%20to%20AXM%20on%202026-12-06",
  axmmde: "https://www.google.com/travel/flights?hl=en&curr=EUR&q=one%20way%20flights%20from%20AXM%20to%20MDE%20on%202026-12-09",
  mdectg: "https://www.google.com/travel/flights?hl=en&curr=EUR&q=one%20way%20flights%20from%20MDE%20to%20CTG%20on%202026-12-13",
  smrbog: "https://www.google.com/travel/flights?hl=en&curr=EUR&q=one%20way%20flights%20from%20SMR%20to%20BOG%20on%202026-12-18"
};

const MAPS = (q) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

const CHECKMIG = "https://www.migracioncolombia.gov.co/tramites-y-servicios/aplicativos/checkmig";

const DAYS = {
  5: {
    cls: "bog", short: "Land", place: "bog",
    region: "Saturday · Bogotá",
    title: "Land in the evening",
    where: "Sleep in Bogotá",
    body: [
      "International flight into El Dorado in the evening. Taxi to the hotel, dinner nearby, early night. Tomorrow starts with a flight."
    ],
    see: [
      "Nothing planned tonight. Bogotá sits at 2,600 m, which is a good first step toward the trek altitude.",
      "If you land early and have energy: dinner in Zona G or Quinta Camacho, both a short walk from Hotel Coco."
    ],
    book: [
      ["now", "International flights into and out of Bogotá", "Round trip BOG, in on the 5th and out on the 19th."],
      ["now", "Hotel for one night", "Hotel Coco in Chapinero if tomorrow’s flight is after 8:00. An airport hotel if it is earlier.", "https://booking.hotelcoco.com.co/"],
      ["week", "Check-MIG entry form", "Free immigration pre-registration, 72 hours to 1 hour before landing. Officially optional, but airlines sometimes ask for it.", CHECKMIG]
    ],
    tips: [
      "Official taxis: Taxi Imperial rank, lane 1, between doors 8 and 10. About 35,000–45,000 COP to Chapinero, plus 3,800 COP at night.",
      "Take cash from an airport ATM. The Cocora jeeps, farm gates and Tayrona all want cash."
    ],
    links: [
      ["Hotel Coco", "https://booking.hotelcoco.com.co/"],
      ["Airport hotels", MAPS("hotels near El Dorado airport Bogota")],
      ["Check-MIG", CHECKMIG]
    ]
  },
  6: {
    cls: "hike", short: "Trek 1", place: "cocora",
    region: "Sunday · Valle de Cocora",
    title: "Fly, then start walking",
    where: "Overnight on a mountain farm, about 2,900–3,400 m",
    body: [
      "Earliest Sunday flight Bogotá → Armenia, about an hour, then a taxi to Salento, about an hour. Trek day 1 starts late morning, after the flight. The operator has to agree to that late start."
    ],
    see: [
      "Willys jeep from Salento into Valle de Cocora.",
      "The wax palms — the national tree and the tallest palms in the world, up to 60 m.",
      "Cloud forest along the river canyon, then up to a farm such as La Argentina. Dinner with the family who run it."
    ],
    book: [
      ["now", "3-day Paramillo trek", "Listed at about 980,000–1,420,000 COP per person, cheaper in bigger groups. Usually includes guide, jeep, farm beds, meals, insurance and park entry. Some charge foreigners the 43,000 COP Los Nevados fee on top. Ask for a late-morning Sunday start before you pay the 30–50% deposit.", "https://sawa.travel/en/tour/paramillo-del-quindio-3-days/"],
      ["now", "Bogotá → Armenia flight", "Avianca’s 06:25 often skips Sundays. Compare LATAM and JetSMART.", FARES.bogaxm],
      ["week", "Armenia airport → Salento taxi", "About 55,000–120,000 COP, an hour. Ask the trek operator to send one."]
    ],
    tips: [
      "Leave the big bags at your Salento hotel for the 8th. Carry only trek kit.",
      "Pack: rain jacket, fleece, warm hat and gloves (nights near freezing), broken-in boots, headlamp, sun cream, cash.",
      "Operators usually brief and check gear the afternoon before. Arrange it by phone, or meet the guide on arrival."
    ],
    links: [
      ["BOG → AXM fares", FARES.bogaxm],
      ["SAWA 3-day trek", "https://sawa.travel/en/tour/paramillo-del-quindio-3-days/"],
      ["Montañas Colombianas", "https://montanascolombianas.com/paramillo-of-quindio-3-days-2-nights/?lang=en"]
    ]
  },
  7: {
    cls: "hike", short: "Summit", place: "paramillo",
    region: "Monday · Los Nevados",
    title: "Paramillo del Quindío",
    where: "Up to 4,750 m, sleep near 3,600–3,700 m",
    body: [
      "The long day, around 10 hours. Páramo and wetlands, then the old volcano if the weather holds. The guide decides on the turnaround."
    ],
    see: [
      "Frailejones — the furry páramo plants that only grow up here.",
      "The Quindío wetlands at about 4,200 m, where the Quindío river starts.",
      "From the summit on a clear morning: Nevado del Tolima, Santa Isabel and Ruiz.",
      "Evening at La Primavera farm. It is also Noche de las Velitas, when Colombians light candles at dusk."
    ],
    book: [
      ["day", "Nothing extra", "Meals, beds and the park permit are in the trek price. Carry your passport for the park registration."]
    ],
    tips: [
      "The last stretch is loose scree, up to 45° in places. Use poles.",
      "UV is strong at this altitude: sunglasses, sun cream, a cap.",
      "Drink often, walk slowly. Headache or nausea that gets worse means going down."
    ],
    links: [
      ["Páramo Trek itinerary", "https://paramotrek.com/en/tour/summit-paramillo-del-quindio/"],
      ["Los Nevados park", "https://www.parquesnacionales.gov.co/nuestros-parques/parque-nacional-natural-los-nevados/"]
    ]
  },
  8: {
    cls: "hike", short: "Down", place: "salento",
    region: "Tuesday · back to Salento · public holiday",
    title: "Long descent",
    where: "Sleep in Salento",
    body: [
      "Down a different canyon, six to seven hours, back to Cocora and a jeep to town. Today is the Inmaculada Concepción public holiday, so Salento will be full of Colombian visitors."
    ],
    see: [
      "Estrella de Agua farm and a hot agua de panela.",
      "Acaime, the hummingbird house — feeders and a dozen species up close.",
      "The wax palms again, from the valley floor.",
      "Evening, if the legs allow: Calle Real and trout with patacón at Donde Laurita or El Rincón de Lucy."
    ],
    book: [
      ["now", "Salento hotel for tonight", "Public holiday, so book early. Ask them to keep your bags from the 6th.", "https://www.elmiradordelcocora.com/"],
      ["week", "Taxi to Armenia airport for tomorrow", "About an hour. The hotel can arrange it."]
    ],
    tips: [
      "Tonight is a rest night. Tomorrow’s flight is the afternoon one, so a slow breakfast is fine."
    ],
    links: [
      ["El Mirador del Cocora", "https://www.elmiradordelcocora.com/"],
      ["Salento plaza", MAPS("Plaza de Bolivar Salento")]
    ]
  },
  9: {
    cls: "med", short: "Medellín", place: "med",
    region: "Wednesday · Medellín",
    title: "Land, then the suit",
    where: "El Poblado",
    body: [
      "Salento → Armenia airport, then Avianca to Medellín around 15:20. It lands at Rionegro about an hour later, 45–60 minutes above the city. Suit fitting at about 18:00, then an easy dinner."
    ],
    see: [
      "Suit fitting at Casa París (Envigado) or Tonight (Provenza). Both close at 19:00.",
      "Dinner in Provenza, a few blocks of restaurants and bars around Carrera 35.",
      "The December Christmas lights along the river (Parques del Río, 18:00–24:00) if they run this year. As of late October, EPM had not confirmed the 2026 lights because of El Niño and the power supply."
    ],
    book: [
      ["now", "Armenia → Medellín flight", "Avianca only, one small plane a day. Check the baggage allowance.", FARES.axmmde],
      ["now", "Suit fitting at about 18:00", "Casa París WhatsApp +57 304 546 2180, suits 195,000–390,000 COP. Send measurements ahead and ask for alterations ready by the morning of the 10th.", "https://casaparis.com.co/pages/traje-de-hombre"],
      ["now", "Medellín hotel, 9–13 Dec", "El Poblado is the easy base.", "https://marqueemedellin.com/"]
    ],
    tips: [
      "Airport taxi: official white taxis outside arrivals, flat 132,000 COP to El Poblado. The Combuses bus is about 20,000 COP per person.",
      "Rental shops often sell shirts rather than rent them. Bring a white shirt and tie, or buy them there.",
      "Use Uber, DiDi or Cabify, or ask the hotel to call a taxi, rather than hailing one in the street at night."
    ],
    links: [
      ["AXM → MDE fares", FARES.axmmde],
      ["Casa París suits", "https://casaparis.com.co/pages/traje-de-hombre"],
      ["Tonight, Provenza", MAPS("Tonight alquiler de trajes Carrera 33 7-69 Medellin")],
      ["Marquee Hotel", "https://marqueemedellin.com/"]
    ]
  },
  10: {
    cls: "wed", short: "Wedding", place: "med",
    region: "Thursday · Medellín",
    title: "The wedding",
    where: "Keep the whole day free",
    body: [
      "Collect the altered suit in the morning if it was not ready last night. Nothing else goes on this day. Venue, time and dress code are in the invitation."
    ],
    see: [
      "The wedding."
    ],
    book: [
      ["week", "Rides to and from the venue", "Ride app or a taxi through the hotel. Plan the ride home before you go."],
      ["now", "Gift", "Check the invitation site for a gift list or envelope (lluvia de sobres is common in Colombia).", "https://lau-y-luisfer.my.canva.site/"]
    ],
    tips: [
      "Expect a late night with a lot of dancing.",
      "The suit goes back tomorrow. Check the return time when you collect it."
    ],
    links: [
      ["Invitation", "https://lau-y-luisfer.my.canva.site/"]
    ]
  },
  11: {
    cls: "med", short: "City", place: "med",
    region: "Friday · Medellín",
    title: "Comuna 13, then Provenza",
    where: "Out from El Poblado",
    body: [
      "Late start after the wedding. Return the suit, then the west side of the city for Comuna 13, and back to El Poblado for the evening."
    ],
    see: [
      "Comuna 13: the outdoor escalators, murals and street dancers. Metro to San Javier station. The neighbourhood and escalators are free.",
      "Casa de la Memoria, the museum of the armed conflict. Free, Friday 9:00–18:00.",
      "Provenza → Manila free walking tour if you want the El Poblado story from a local."
    ],
    book: [
      ["week", "Comuna 13 guided tour", "Shared tours about 35,000–60,000 COP or USD 14–28 and about 3 hours. A local guide adds the story behind the murals.", "https://comuna13graffititour.com/guides/comuna-13-tour-cost/"],
      ["week", "Free walking tour slot", "Reserve on GuruWalk. You pay a tip at the end.", "https://www.guruwalk.com/walks/38407-the-great-poblado-free-tour-from-provenza-to-manila"],
      ["day", "Metro ticket", "About 4,400 COP per ride, bought at the station."]
    ],
    tips: [
      "Comuna 13 is calmer in the morning and busy after midday.",
      "Keep your phone in a front pocket in crowds."
    ],
    links: [
      ["Comuna 13", MAPS("Escaleras Electricas Comuna 13 Medellin")],
      ["Casa de la Memoria", MAPS("Museo Casa de la Memoria Medellin")],
      ["Walking tour", "https://www.guruwalk.com/walks/38407-the-great-poblado-free-tour-from-provenza-to-manila"]
    ]
  },
  12: {
    cls: "coffee", short: "Coffee", place: "santaelena",
    region: "Saturday · Santa Elena",
    title: "Coffee farm with your friends",
    where: "Hills above Medellín, back for dinner",
    body: [
      "Santa Elena is 25–45 minutes above the city, so the coffee farm fits in a day. If your friends drive, ask them about a farm they know. Pack tonight — Cartagena is tomorrow."
    ],
    see: [
      "Coffee farm: picking, the bean-to-cup process, tasting and lunch.",
      "Parque Arví next door: forest trails and a market at the cable-car station.",
      "Cable car down over the city: Line L to Santo Domingo, then Line K to Acevedo.",
      "Placita de Flórez, the old market hall, if there is time on the way back."
    ],
    book: [
      ["month", "Coffee farm tour", "Shared tour 250,000 COP, daily at 10:00 from El Poblado, about 5 hours with transport and lunch. Or go with your friends.", "https://www.beyondcolombia.com/tours/coffee-tour-medellin-farm-santa-elena/"],
      ["day", "Arví cable car (Line L)", "26,700 COP for foreigners, Saturday 9:00–18:00. Trails in the park 30,000 COP."]
    ],
    tips: [
      "Santa Elena is cooler than the city. Bring a layer.",
      "Line L closes for maintenance some weeks. Check Metro de Medellín the day before."
    ],
    links: [
      ["Santa Elena coffee tour", "https://www.beyondcolombia.com/tours/coffee-tour-medellin-farm-santa-elena/"],
      ["Parque Arví", MAPS("Parque Arvi Medellin")],
      ["Placita de Flórez", MAPS("Placita de Florez Medellin")]
    ]
  },
  13: {
    cls: "ctg", short: "Cartagena", place: "ctg",
    region: "Sunday · Cartagena",
    title: "Fly to the coast",
    where: "Getsemaní",
    body: [
      "Morning direct Medellín → Cartagena, about 1h15. The airport is 15 minutes from Getsemaní. The afternoon is the Walled City, then sunset on the walls."
    ],
    see: [
      "Torre del Reloj, the main gate, and Plaza de los Coches behind it.",
      "Plaza Santo Domingo with Botero’s reclining Gertrudis, and the shaded Plaza de Bolívar.",
      "Sunset from the walls — the Baluarte de Santo Domingo or the quieter stretch toward Las Bóvedas. Free.",
      "After 19:00, Plaza de la Trinidad in Getsemaní: street food, music, everyone on the church steps."
    ],
    book: [
      ["now", "Medellín → Cartagena flight", "Morning departure. Avianca, LATAM, Wingo and JetSMART all fly it.", FARES.mdectg],
      ["now", "Cartagena hotel, 13–15 Dec", "Getsemaní or the Walled City, both walkable. December is peak season.", "https://booking.arsenalhotel.com/en/?skip_mobile=1"],
      ["week", "Dinner, if you want a special one", "Celele (Caribbean tasting menu) needs a reservation days ahead."]
    ],
    tips: [
      "It is above 30 °C. Plan the walking for late afternoon and evening, and siesta in the middle of the day.",
      "Restaurants on Plaza Santo Domingo charge more. Two streets over is cheaper."
    ],
    links: [
      ["MDE → CTG fares", FARES.mdectg],
      ["Arsenal Hotel", "https://booking.arsenalhotel.com/en/?skip_mobile=1"],
      ["Walled City", MAPS("Ciudad Amurallada Cartagena")]
    ]
  },
  14: {
    cls: "ctg", short: "Old town", place: "ctg",
    region: "Monday · Cartagena",
    title: "Fort, walls, Getsemaní",
    where: "Still in Cartagena",
    body: [
      "Castillo San Felipe at opening while it is cool, a museum at midday, then murals and dinner in Getsemaní. Scuba waits for Taganga on the 16th."
    ],
    see: [
      "Castillo San Felipe de Barajas — the fort that was never taken. Tunnels and views over the old town. 7:00–18:00, 38,000 COP, allow 2 hours.",
      "Palacio de la Inquisición / Museo Histórico on Plaza de Bolívar, Monday–Saturday 9:00–18:00.",
      "Las Bóvedas, 23 vaults in the wall, now craft shops.",
      "Getsemaní murals on Calle de la Sierpe and Calle de la Media Luna."
    ],
    book: [
      ["day", "Castillo San Felipe ticket", "At the gate, or online on the official fortifications site.", "https://fortificacionescartagena.com.co/es/planee-su-visita/castillo-de-san-felipe-de-barajas/"]
    ],
    tips: [
      "Go to San Felipe at 7:00 — after 10:00 the heat on the ramparts is hard work.",
      "Optional extra: a sunset boat in the bay from Muelle de los Pegasos."
    ],
    links: [
      ["San Felipe", "https://fortificacionescartagena.com.co/es/planee-su-visita/castillo-de-san-felipe-de-barajas/"],
      ["Museo Histórico", "https://muhca.gov.co/visita"],
      ["Getsemaní", MAPS("Getsemani Cartagena")]
    ]
  },
  15: {
    cls: "coast", short: "Taganga", place: "taganga",
    region: "Tuesday · Santa Marta and Taganga",
    title: "Five hours on the coast road",
    where: "Sleep in Taganga",
    body: [
      "There is no direct flight between Cartagena and Santa Marta, so this leg is by road via Barranquilla, about five hours. Leave in the morning to arrive in daylight."
    ],
    see: [
      "Santa Marta waterfront at sunset: the Malecón, the cathedral and Parque de los Novios.",
      "Taganga’s bay and the fishing boats. The village is small and walkable."
    ],
    book: [
      ["week", "Cartagena → Taganga transport", "Easiest: a private transfer, door to door, price on request. Middle: MarSol shuttle, hourly 6:00–16:00, about 95,000 COP, confirm hotel pickup. Cheapest: Berlinastur from its Marbella terminal, every 15 minutes, about 80,000 COP, tickets only at the station.", "https://www.marsol.com.co/"],
      ["now", "Taganga hotel, 15–18 Dec", "Three nights. Close to the dive shops.", MAPS("Taganga hotels")]
    ],
    tips: [
      "Keep valuables in the bag by your feet on shuttles.",
      "Taganga is quiet after dark away from the seafront. Take a taxi back from Santa Marta at night."
    ],
    links: [
      ["Driving route", "https://www.google.com/maps/dir/?api=1&origin=Getsemani%2C%20Cartagena&destination=Taganga%2C%20Magdalena&travelmode=driving"],
      ["MarSol", "https://www.marsol.com.co/"],
      ["Taganga hotels", MAPS("Taganga hotels")]
    ]
  },
  16: {
    cls: "coast", short: "Dive", place: "taganga",
    region: "Wednesday · Taganga",
    title: "Scuba on the Tayrona coast",
    where: "Boats from the bay, half a day",
    body: [
      "Two tanks at reef sites along the edge of Tayrona park. Back by early afternoon, then the beach and dinner in the village. You fly on the 18th, which leaves well over 24 hours after diving."
    ],
    see: [
      "Rocky reefs, coral, turtles, morays and big schools of fish. Visibility is often around 10–12 m.",
      "Afternoon: Playa Grande, a short boat or a 20-minute walk over the headland."
    ],
    book: [
      ["month", "Two-tank fun dive", "Poseidon: 430,000 COP with free nitrox, kit, computer and insurance (4.9 from about 930 Tripadvisor reviews). Oceano Scuba is cheaper — a 2024 review paid 280,000 COP (4.9 from about 570 reviews). December is busy.", "https://poseidondivecenter.com/en/producto/2-tank-dive-fun-dives-night-dives-poseidon-dive-center-colombia/"]
    ],
    tips: [
      "Bring your certification card and logbook. If your last dive was long ago, ask for a refresher.",
      "December winds can make the boat ride bumpy. Take seasickness tablets if you need them."
    ],
    links: [
      ["Poseidon Dive Center", "https://poseidondivecenter.com/en/producto/2-tank-dive-fun-dives-night-dives-poseidon-dive-center-colombia/"],
      ["Oceano Scuba", MAPS("Oceano Scuba Dive Center Taganga")],
      ["Dive shops", MAPS("scuba diving Taganga")]
    ]
  },
  17: {
    cls: "coast", short: "Tayrona", place: "tayrona",
    region: "Thursday · Tayrona",
    title: "One full park day",
    where: "Back in Taganga at night",
    body: [
      "Early start: be at the El Zaino gate at 7:00. Walk through the forest past Arrecifes and La Piscina to Cabo San Juan, swim, eat, and start back by 14:00–14:30."
    ],
    see: [
      "Arrecifes — the first big beach. Strong currents, so no swimming here.",
      "La Piscina — a calm natural pool behind the rocks. Swim here.",
      "Cabo San Juan — the famous double bay and the hut on the rocks. Lunch at the beach restaurant.",
      "Harder option: in at Calabazo (gate 6:00–13:00) via Pueblito, 4–5 hours of stone steps, out at El Zaino."
    ],
    book: [
      ["day", "Park entry at the gate", "Tickets are sold only on the day, until the daily limit is reached — there is no reservation. 96,500 COP each (December is high season), plus about 7,000 COP compulsory insurance. Paying online beforehand does not reserve a spot.", "https://parquetayrona.org/guides/fees-hours-closures/"],
      ["week", "Taxi to El Zaino", "About 80,000–100,000 COP from Santa Marta, 45–60 minutes. Book for about 6:00. The bus from Santa Marta market is about 9,000 COP."]
    ],
    tips: [
      "Bring passport, cash (no ATMs, card readers often fail), water, swimwear, mosquito repellent.",
      "Leave single-use plastic and alcohol behind — bags are checked at the gate.",
      "El Zaino: last entry 15:00, out by 18:00 in high season. The trails have no lights.",
      "Shuttle from El Zaino to the Cañaveral trailhead about 5,000 COP each way.",
      "Boats from Taganga to Cabo San Juan take 40 minutes but the sea is rough in December."
    ],
    links: [
      ["Fees and hours", "https://parquetayrona.org/guides/fees-hours-closures/"],
      ["One-day plan", "https://parquetayrona.org/guides/tayrona-day-trip-from-santa-marta/"],
      ["El Zaino gate", MAPS("El Zaino Parque Tayrona")]
    ]
  },
  18: {
    cls: "bog", short: "To Bogotá", place: "smr",
    region: "Friday · Santa Marta → Bogotá",
    title: "Last flight inside Colombia",
    where: "Sleep by El Dorado",
    body: [
      "A slow morning on the beach, then an afternoon direct Santa Marta → Bogotá, about 1h30. Sleep near the airport."
    ],
    see: [
      "Last swim in Taganga bay or at Playa Grande.",
      "Pack wet dive and beach gear in a separate bag."
    ],
    book: [
      ["now", "Santa Marta → Bogotá flight", "Afternoon. Frequent directs, usually the cheapest hop of the trip.", FARES.smrbog],
      ["now", "Airport hotel in Bogotá", "One night, short ride to the terminal tomorrow.", MAPS("hotels near El Dorado airport Bogota")],
      ["week", "Taxi Taganga → Santa Marta airport", "Allow 45 minutes. The airport is south of the city."]
    ],
    tips: [
      "Bogotá will feel cold after the coast. Keep a jumper in the hand luggage."
    ],
    links: [
      ["SMR → BOG fares", FARES.smrbog],
      ["Airport hotels", MAPS("hotels near El Dorado airport Bogota")]
    ]
  },
  19: {
    cls: "bog", short: "Home", place: "bog",
    region: "Saturday · Bogotá",
    title: "Fly home",
    where: "El Dorado",
    body: [
      "International departure from Bogotá, the same airport you landed at on the 5th. If the flight is in the evening, there is time for the centre."
    ],
    see: [
      "Museo del Oro — the pre-Columbian gold museum. Saturday 9:00–19:00, 21,000 COP for foreigners, no booking.",
      "La Candelaria, the old town: Plaza de Bolívar and the street art.",
      "Monserrate by cable car or funicular for the view over the city."
    ],
    book: [
      ["week", "Check-MIG exit form", "72 hours to 1 hour before the flight.", CHECKMIG],
      ["day", "Taxi to the airport", "About 35,000–45,000 COP from the centre or Chapinero. Be there 3 hours before an international flight."]
    ],
    tips: [
      "Store bags at the hotel or airport if you go into town.",
      "Keep some pesos for the taxi. Change the rest before security."
    ],
    links: [
      ["Museo del Oro", "https://www.banrepcultural.org/bogota/museo-del-oro/programa-tu-visita"],
      ["El Dorado", MAPS("El Dorado International Airport")],
      ["Check-MIG", CHECKMIG]
    ]
  }
};

const HIKES = {
  "3": {
    chip: "6–8 Dec",
    lede: "Land in Bogotá on the evening of the 5th. Fly to Salento the next morning and walk for three days from Valle de Cocora to Paramillo del Quindío. Land in Medellín on the afternoon of the 9th, fit the suit that evening and keep the 10th for the wedding. Coffee with friends near Medellín, then Cartagena, Taganga and Tayrona. Home from Bogotá on the 19th.",
    note: "<strong>3-day summit.</strong> The walk starts late on Sunday the 6th, after the Bogotá flight, and the guide has to accept that. Summit day is the 7th. You sleep in Salento on the 8th, then take the afternoon Armenia → Medellín flight on the 9th, the day before the wedding.",
    flight: "Earliest Sunday direct. Avianca’s 06:25 often does not run on Sundays, so check LATAM and JetSMART too. You need to be in Salento late morning to start walking.",
    route: ["bog", "salento", "cocora", "paramillo", "salento", "med", "santaelena", "med", "ctg", "taganga", "tayrona", "smr", "bog"]
  },
  "2": {
    chip: "7–8 Dec",
    lede: "Land in Bogotá on the evening of the 5th. Fly to Salento on the 6th and walk for two days into the páramo and back. Land in Medellín on the afternoon of the 9th, fit the suit that evening and keep the 10th for the wedding. Coffee with friends near Medellín, then Cartagena, Taganga and Tayrona. Home from Bogotá on the 19th.",
    note: "<strong>2-day páramo.</strong> Use this if the guide will not start late on Sunday. The 6th is Salento and the trek briefing. Monday and Tuesday go up to about 4,000 m and back to town. Every summit trip found is three days, because the 4,750 m push and the walk out are separate days. You still sleep in Salento on the 8th and fly to Medellín on the afternoon of the 9th.",
    flight: "A mid-morning Sunday direct is enough. Avianca’s 06:25 often skips Sundays. The taxi to Salento is about an hour, and operators want you at the briefing that afternoon.",
    route: ["bog", "salento", "cocora", "playa", "salento", "med", "santaelena", "med", "ctg", "taganga", "tayrona", "smr", "bog"],
    days: {
      5: {
        ...DAYS[5],
        book: [
          ["now", "International flights into and out of Bogotá", "Round trip BOG, in on the 5th and out on the 19th."],
          ["now", "Hotel for one night", "Hotel Coco in Chapinero — tomorrow’s flight can be mid-morning.", "https://booking.hotelcoco.com.co/"],
              ["week", "Check-MIG entry form", "Free immigration pre-registration, 72 hours to 1 hour before landing. Officially optional, but airlines sometimes ask for it.", CHECKMIG]
        ]
      },
      6: {
        cls: "bog", short: "Salento", place: "salento",
        region: "Sunday · Salento",
        title: "Fly in, briefing, early night",
        where: "Sleep in Salento",
        body: [
          "Mid-morning flight Bogotá → Armenia and a taxi to Salento, about an hour. Afternoon briefing and gear check with the trek operator, then the town."
        ],
        see: [
          "Calle Real, the painted main street, with craft shops and cafés.",
          "Mirador Alto de la Cruz, about 250 steps up from the end of Calle Real. Go half an hour before sunset.",
          "Trout with patacón at Donde Laurita or El Rincón de Lucy.",
          "Tejo at Cancha de Tejo Los Amigos — throw a metal puck at gunpowder packets. Keep it to one round; the walk starts at 6:00."
        ],
        book: [
          ["now", "2-day páramo trek", "Andígena or Cocoratours (Páramo de Romerales, from 900,000 COP). Turns around at about 4,000 m.", "https://andigena.com/activities/paramo/"],
          ["now", "Salento hotel for the 6th and the 8th", "The 8th is a public holiday — book early. Leave the big bags there during the trek.", "https://www.elmiradordelcocora.com/"],
          ["now", "Bogotá → Armenia flight", "Mid-morning is enough.", FARES.bogaxm],
          ["week", "Armenia airport → Salento taxi", "About 55,000–120,000 COP, an hour."]
        ],
        tips: [
          "Rent what is missing at the briefing: poles, rain poncho, warm layers.",
          "Take cash out in Salento. Jeeps and farm gates are cash only."
        ],
        links: [
          ["BOG → AXM fares", FARES.bogaxm],
          ["Andígena 2-day", "https://andigena.com/activities/paramo/"],
          ["Salento plaza", MAPS("Plaza de Bolivar Salento")]
        ]
      },
      7: {
        cls: "hike", short: "Trek 1", place: "playa",
        region: "Monday · toward Los Nevados",
        title: "Up to the high farm",
        where: "Sleep around 3,700 m",
        body: [
          "Early jeep from the Salento plaza into Valle de Cocora, then about 18 km and eight hours through cloud forest and páramo to a farm such as La Playa."
        ],
        see: [
          "The wax palms in Cocora at the start.",
          "Estrella de Agua at about 3,100 m — lunch stop in the cloud forest.",
          "Páramo de Romerales and the first frailejones.",
          "Evening at the farm. It is Noche de las Velitas, when Colombians light candles at dusk."
        ],
        book: [
          ["day", "Nothing extra", "Meals, beds and park entry are in the trek price. Carry your passport."]
        ],
        tips: [
          "Expect rain at some point. Pack the sleeping layers in a dry bag.",
          "Nights near the farm can drop close to freezing."
        ],
        links: [
          ["Andígena 2-day", "https://andigena.com/activities/paramo/"],
          ["Los Nevados park", "https://www.parquesnacionales.gov.co/nuestros-parques/parque-nacional-natural-los-nevados/"]
        ]
      },
      8: {
        cls: "hike", short: "Down", place: "salento",
        region: "Tuesday · back to Salento · public holiday",
        title: "Back down to Salento",
        where: "Sleep in Salento",
        body: [
          "Breakfast at the farm, then the long walk down to Valle de Cocora and a jeep to Salento, in town by mid-afternoon. Today is the Inmaculada Concepción public holiday, so Salento will be busy."
        ],
        see: [
          "The palms again on the way out.",
          "A late lunch on the plaza, then a slow evening on Calle Real."
        ],
        book: [
          ["week", "Taxi to Armenia airport for tomorrow", "About an hour. The hotel can arrange it."]
        ],
        tips: [
          "Tomorrow’s flight is around 15:20, so the morning is free."
        ],
        links: [
          ["El Mirador del Cocora", "https://www.elmiradordelcocora.com/"],
          ["AXM → MDE fares", FARES.axmmde]
        ]
      }
    }
  }
};

HIKES["3"].days = { 5: DAYS[5], 6: DAYS[6], 7: DAYS[7], 8: DAYS[8] };
