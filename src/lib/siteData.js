// Centralizovani podaci za sajt Lemon Logistics

export const CONTACT = {
  phone: "020/66-22-66",
  phoneHref: "tel:+38220662266",
  email: "info@lemonlogistic.com",
  website: "lemonlogistic.com",
  workingHours: "08:00–20:00, svakog dana",
  workingHoursShort: "08:00–20:00",
  location: "Podgorica, Crna Gora",
};

export const LOGO = "https://media.base44.com/images/public/6a6dcc80d09d780f67deaa90/63b1396b1_logo-bijeli-zuti.svg";
export const HERO_IMAGE = "https://media.base44.com/images/public/6a6dcc80d09d780f67deaa90/066521f61_heroimage.png";
export const WAREHOUSE_IMAGE = "https://media.base44.com/images/public/6a6dcc80d09d780f67deaa90/e03db8376_warehouse.png";
export const HIGHWAY_IMAGE = "https://media.base44.com/images/public/6a6dcc80d09d780f67deaa90/9286583ce_generated_fe0a129a.png";
export const MOUNTAIN_IMAGE = "https://media.base44.com/images/public/6a6dcc80d09d780f67deaa90/f11402b6c_generated_3e49e3ed.png";
export const KARGO_IMAGE = "https://media.base44.com/images/public/6a6dcc80d09d780f67deaa90/3ebfbd662_kargo.png";
export const CARGO_HANDLING_IMAGE = "https://media.base44.com/images/public/6a6dcc80d09d780f67deaa90/f795980d1_generated_5715ff5b.png";
export const DISTRIBUTION_IMAGE = "https://media.base44.com/images/public/6a6dcc80d09d780f67deaa90/bb02894e6_generated_06250e5d.png";
export const FLEET_IMAGE = "https://media.base44.com/images/public/6a6dcc80d09d780f67deaa90/e372ac267_truck1.png";
export const GRILLE_IMAGE = "https://media.base44.com/images/public/6a6dcc80d09d780f67deaa90/a0dc4bb20_generated_e7eb9fda.png";

export const SERVICES = [
  {
    id: "medjunarodni-transport",
    title: "Međunarodni transport",
    short: "Organizujemo međunarodni transport robe uz pažnju prema dokumentaciji, rokovima i koordinaciji na cijelom putu.",
    description:
      "Međunarodni transport zahtijeva preciznu organizaciju, poznavanje procedura i stalnu koordinaciju. Pristupamo svakom prevozu planski, uz jasnu komunikaciju i praćenje tokom cijelog procesa.",
    image: KARGO_IMAGE,
    icon: "Globe",
    benefits: [
      "Koordinacija preko granice i dokumentacija",
      "Praćenje pošiljke tokom cijelog transporta",
      "Prilagođeno rješenje za svaki tip robe",
    ],
  },
  {
    id: "unutarasnji-transport",
    title: "Unutrašnji transport na teritoriji Crne Gore",
    short: "Pouzdan prevoz robe na teritoriji Crne Gore, sa poznavanjem lokalnih relacija i uslova.",
    description:
      "Za prevoz unutar Crne Gore koristimo iskustvo i poznavanje lokalnih relacija. Organizujemo transport brzo, transparentno i u skladu sa dogovorenim rokovima.",
    image: MOUNTAIN_IMAGE,
    icon: "Truck",
    benefits: [
      "Poznavanje lokalnih relacija i uslova",
      "Fleksibilno organizovanje prevoza",
      "Poštovanje dogovorenih rokova",
    ],
  },
  {
    id: "skladistenje",
    title: "Skladištenje robe",
    short: "Sigurno skladištenje robe u kontrolisanim uslovima, uz preglednost i odgovorno rukovanje.",
    description:
      "Skladištenje je više od prostora za odlaganje. Obezbeđujemo kontrolisane uslove, jasnu evidenciju i odgovorno rukovanje robom tokom cijelog perioda skladištenja.",
    image: WAREHOUSE_IMAGE,
    icon: "Warehouse",
    benefits: [
      "Kontrolisani uslovi skladištenja",
      "Jasna evidencija robe",
      "Sigurnost i odgovorno rukovanje",
    ],
  },
  {
    id: "distribucija",
    title: "Distribucija robe",
    short: "Organizacija isporuke robe do krajnjeg odredišta, sa preglednošću u svakom koraku.",
    description:
      "Distribucija zahtijeva koordinaciju više koraka i jasan plan isporuke. Organizujemo proces tako da roba stigne na vrijeme i u dogovorenom stanju.",
    image: DISTRIBUTION_IMAGE,
    icon: "PackageCheck",
    benefits: [
      "Planirana ruta i redoslijed isporuke",
      "Koordinacija sa primaocima",
      "Preglednost u svakom koraku",
    ],
  },
  {
    id: "rukovanje",
    title: "Manipulacija robom",
    short: "Pažljivo utovar, prenos i istovar robe uz poštovanje procedura sigurnosti.",
    description:
      "Svaki komad robe zahtijeva odgovarajući pristup pri rukovanju. Vodimo računa o sigurnosti, ispravnosti i procedurama tokom utovara, prenosa i istovara.",
    image: CARGO_HANDLING_IMAGE,
    icon: "Boxes",
    benefits: [
      "Pažljiv utovar i istovar",
      "Poštovanje procedura sigurnosti",
      "Odgovarajuća oprema i alat",
    ],
  },
  {
    id: "podrska",
    title: "Logistička podrška poslovnim korisnicima",
    short: "Kompletna organizacija logistike za firme kojima je potreban pouzdan partner u svakom koraku.",
    description:
      "Za poslovne korisnike preuzimamo organizaciju logistike kao cjelinu — od planiranja do realizacije. Prilagođavamo se potrebama vašeg poslovanja i gradimo dugoročnu saradnju.",
    image: GRILLE_IMAGE,
    icon: "Headset",
    benefits: [
      "Prilagođeno vašem poslovanju",
      "Jedna tačka kontakta za sve usluge",
      "Dugoročno i stabilno partnerstvo",
    ],
  },
];

export const VALUES = [
  {
    title: "Odgovoran pristup",
    text: "Svaki dogovor shvatamo ozbiljno i preuzimamo odgovornost za njegovu realizaciju.",
    icon: "ShieldCheck",
  },
  {
    title: "Jasna komunikacija",
    text: "Partnere redovno informišemo o statusu svake isporuke.",
    icon: "MessageSquare",
  },
  {
    title: "Pouzdana realizacija",
    text: "Poštujemo rokove, ispunjavamo obećanja i gradimo povjerenje kroz dosljedan rad.",
    icon: "CheckCircle2",
  },
  {
    title: "Dugoročno partnerstvo",
    text: "Svaki transport posmatramo kao početak dugoročne saradnje.",
    icon: "Handshake",
  },
];

export const PROCESS_STEPS = [
  { number: "01", title: "Upit i analiza potreba", text: "Slušamo vaše zahtjeve i analiziramo šta je potrebno da bi transport prošao bez komplikacija." },
  { number: "02", title: "Organizacija transporta", text: "Planiramo rutu, sredstvo i dinamiku, i dogovaramo sve detalje prije polaska." },
  { number: "03", title: "Praćenje i komunikacija", text: "Tokom transporta održavamo kontakt i informišemo vas o statusu pošiljke." },
  { number: "04", title: "Završetak isporuke", text: "Roba stiže na odredište u dogovorenom roku, a mi zatvaramo proces sa izvještajem." },
];

export const COVERAGE_HUB = {
  name: "Podgorica",
  country: "Crna Gora",
  position: [42.4304, 19.2594],
};

export const COVERAGE_DESTINATIONS = [
  { name: "Beograd", country: "Srbija", position: [44.7866, 20.4489] },
  { name: "Sarajevo", country: "BiH", position: [43.8563, 18.4131] },
  { name: "Zagreb", country: "Hrvatska", position: [45.8150, 15.9819] },
  { name: "Skopje", country: "Sjeverna Makedonija", position: [41.9981, 21.4254] },
  { name: "Tirana", country: "Albanija", position: [41.3275, 19.8187] },
  { name: "Budimpešta", country: "Mađarska", position: [47.4979, 19.0402] },
  { name: "Beč", country: "Austrija", position: [48.2082, 16.3738] },
  { name: "Milano", country: "Italija", position: [45.4642, 9.1900] },
  { name: "Minhen", country: "Njemačka", position: [48.1351, 11.5820] },
  { name: "Sofija", country: "Bugarska", position: [42.6977, 23.3219] },
];

export const NAV_LINKS = [
  { label: "Početna", path: "/" },
  { label: "O nama", path: "/o-nama" },
  { label: "Usluge", path: "/usluge" },
  { label: "Lemon Customer Support", path: "/customer-support" },
  { label: "Kontakt", path: "/kontakt" },
];