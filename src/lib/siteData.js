// Centralizovani podaci za sajt Lemon Logistics

export const CONTACT = {
  phone: "020/66-22-66",
  phoneHref: "tel:+38220662266",
  email: "office@lemongroup.me",
  website: "lemonlogistics.me",
  workingHours: "08:00–20:00, svakog dana",
  workingHoursShort: "08:00–20:00",
  location: "Podgorica, Crna Gora",
};

export const SOCIALS = [
  { label: "Instagram", icon: "Instagram", href: "https://www.instagram.com/lemonlogistics.me" },
  { label: "LinkedIn", icon: "Linkedin", href: "https://www.linkedin.com/company/lemon-logistics-me/" },
  { label: "Facebook", icon: "Facebook", href: "https://www.facebook.com/share/1R1EHXfVM8/" },
];

// Email adresa na koju kontakt forma šalje upite
export const CONTACT_FORM_EMAIL = "office@lemongroup.me";

export const LOGO = "/images/lemon-logistics-logo-white-yellow.svg";
export const HERO_IMAGE = "/images/lemon-logistics-hero.png";
export const WAREHOUSE_IMAGE = "/images/lemon-logistics-warehouse.png";
export const HIGHWAY_IMAGE = "/images/lemon-logistics-transport-01.png";
export const MOUNTAIN_IMAGE = "/images/lemon-logistics-transport-02.png";
export const KARGO_IMAGE = "/images/lemon-logistics-cargo.png";
export const INTERNATIONAL_IMAGE = "/images/medjunarodni.png";
export const CARGO_HANDLING_IMAGE = "/images/lemon-logistics-transport-03.png";
export const DISTRIBUTION_IMAGE = "/images/lemon-logistics-transport-04.png";
export const FLEET_IMAGE = "/images/lemon-logistics-truck.png";
export const GRILLE_IMAGE = "/images/lemon-logistics-transport-05.png";

export const SERVICES = [
  {
    id: "medjunarodni-transport",
    title: "Međunarodni transport",
    titleEn: "International transport",
    short: "Organizujemo međunarodni transport robe uz pažnju prema dokumentaciji, rokovima i koordinaciji na cijelom putu.",
    shortEn: "We organize international freight transport with attention to documentation, deadlines and coordination along the entire route.",
    description:
      "Međunarodni transport zahtijeva preciznu organizaciju, poznavanje procedura i stalnu koordinaciju. Pristupamo svakom prevozu planski, uz jasnu komunikaciju i praćenje tokom cijelog procesa.",
    descriptionEn:
      "International transport requires precise organization, knowledge of procedures and constant coordination. We approach every transport with a plan, clear communication and tracking throughout the entire process.",
    image: INTERNATIONAL_IMAGE,
    icon: "Globe",
    benefits: [
      "Koordinacija preko granice i dokumentacija",
      "Praćenje pošiljke tokom cijelog transporta",
      "Prilagođeno rješenje za svaki tip robe",
    ],
    benefitsEn: [
      "Cross-border coordination and documentation",
      "Shipment tracking throughout transport",
      "Tailored solution for every type of goods",
    ],
  },
  {
    id: "unutarasnji-transport",
    title: "Unutrašnji transport na teritoriji Crne Gore",
    titleEn: "Domestic transport in Montenegro",
    short: "Pouzdan prevoz robe na teritoriji Crne Gore, sa poznavanjem lokalnih relacija i uslova.",
    shortEn: "Reliable freight transport across Montenegro, with knowledge of local routes and conditions.",
    description:
      "Za prevoz unutar Crne Gore koristimo iskustvo i poznavanje lokalnih relacija. Organizujemo transport brzo, transparentno i u skladu sa dogovorenim rokovima.",
    descriptionEn:
      "For transport within Montenegro we use experience and knowledge of local routes. We organize transport quickly, transparently and in line with agreed deadlines.",
    image: MOUNTAIN_IMAGE,
    icon: "Truck",
    benefits: [
      "Poznavanje lokalnih relacija i uslova",
      "Fleksibilno organizovanje prevoza",
      "Poštovanje dogovorenih rokova",
    ],
    benefitsEn: [
      "Knowledge of local routes and conditions",
      "Flexible transport organization",
      "Respect for agreed deadlines",
    ],
  },
  {
    id: "skladistenje",
    title: "Skladištenje robe",
    titleEn: "Warehousing",
    short: "Sigurno skladištenje robe u kontrolisanim uslovima, uz preglednost i odgovorno rukovanje.",
    shortEn: "Secure goods storage under controlled conditions, with transparency and responsible handling.",
    description:
      "Skladištenje podrazumijeva kontrolisane uslove, jasnu evidenciju i odgovorno rukovanje robom tokom cijelog perioda skladištenja.",
    descriptionEn:
      "Warehousing involves controlled conditions, clear records and responsible handling of goods throughout the entire storage period.",
    image: WAREHOUSE_IMAGE,
    icon: "Warehouse",
    benefits: [
      "Kontrolisani uslovi skladištenja",
      "Jasna evidencija robe",
      "Sigurnost i odgovorno rukovanje",
    ],
    benefitsEn: [
      "Controlled storage conditions",
      "Clear goods records",
      "Security and responsible handling",
    ],
  },
  {
    id: "distribucija",
    title: "Distribucija robe",
    titleEn: "Distribution",
    short: "Organizacija isporuke robe do krajnjeg odredišta, sa preglednošću u svakom koraku.",
    shortEn: "Organizing goods delivery to the final destination, with transparency at every step.",
    description:
      "Distribucija zahtijeva koordinaciju više koraka i jasan plan isporuke. Organizujemo proces tako da roba stigne na vrijeme i u dogovorenom stanju.",
    descriptionEn:
      "Distribution requires coordination of multiple steps and a clear delivery plan. We organize the process so goods arrive on time and in agreed condition.",
    image: DISTRIBUTION_IMAGE,
    icon: "PackageCheck",
    benefits: [
      "Planirana ruta i redoslijed isporuke",
      "Koordinacija sa primaocima",
      "Preglednost u svakom koraku",
    ],
    benefitsEn: [
      "Planned route and delivery sequence",
      "Coordination with recipients",
      "Transparency at every step",
    ],
  },
  {
    id: "rukovanje",
    title: "Manipulacija robom",
    titleEn: "Cargo handling",
    short: "Pažljivo utovar, prenos i istovar robe uz poštovanje procedura sigurnosti.",
    shortEn: "Careful loading, transport and unloading of goods with respect for safety procedures.",
    description:
      "Svaki komad robe zahtijeva odgovarajući pristup pri rukovanju. Vodimo računa o sigurnosti, ispravnosti i procedurama tokom utovara, prenosa i istovara.",
    descriptionEn:
      "Every piece of goods requires an appropriate handling approach. We take care of safety, integrity and procedures during loading, transport and unloading.",
    image: CARGO_HANDLING_IMAGE,
    icon: "Boxes",
    benefits: [
      "Pažljiv utovar i istovar",
      "Poštovanje procedura sigurnosti",
      "Odgovarajuća oprema i alat",
    ],
    benefitsEn: [
      "Careful loading and unloading",
      "Respect for safety procedures",
      "Appropriate equipment and tools",
    ],
  },
  {
    id: "podrska",
    title: "Logistička podrška poslovnim korisnicima",
    titleEn: "Logistics support for businesses",
    short: "Kompletna organizacija logistike za firme kojima je potreban pouzdan partner u svakom koraku.",
    shortEn: "Complete logistics organization for companies that need a reliable partner at every step.",
    description:
      "Za poslovne korisnike preuzimamo kompletnu organizaciju logistike, obuhvatajući planiranje i realizaciju. Prilagođavamo se potrebama vašeg poslovanja i gradimo dugoročnu saradnju.",
    descriptionEn:
      "For business clients we take over complete logistics organization, covering planning and execution. We adapt to your business needs and build long-term cooperation.",
    image: GRILLE_IMAGE,
    icon: "Headset",
    benefits: [
      "Prilagođeno vašem poslovanju",
      "Jedna tačka kontakta za sve usluge",
      "Dugoročno i stabilno partnerstvo",
    ],
    benefitsEn: [
      "Tailored to your business",
      "Single point of contact for all services",
      "Long-term and stable partnership",
    ],
  },
];

export const VALUES = [
  {
    title: "Odgovoran pristup",
    titleEn: "Responsible approach",
    text: "Svaki dogovor shvatamo ozbiljno i preuzimamo odgovornost za njegovu realizaciju.",
    textEn: "We take every agreement seriously and take responsibility for its execution.",
    icon: "ShieldCheck",
  },
  {
    title: "Jasna komunikacija",
    titleEn: "Clear communication",
    text: "Partnere redovno informišemo o statusu svake isporuke.",
    textEn: "We regularly inform partners about the status of every delivery.",
    icon: "MessageSquare",
  },
  {
    title: "Pouzdana realizacija",
    titleEn: "Reliable execution",
    text: "Poštujemo rokove, ispunjavamo obećanja i gradimo povjerenje kroz dosljedan rad.",
    textEn: "We respect deadlines, keep promises and build trust through consistent work.",
    icon: "CheckCircle2",
  },
  {
    title: "Dugoročno partnerstvo",
    titleEn: "Long-term partnership",
    text: "Svaki transport posmatramo kao početak dugoročne saradnje.",
    textEn: "We see every transport as the beginning of a long-term cooperation.",
    icon: "Handshake",
  },
];

export const PROCESS_STEPS = [
  { number: "01", title: "Upit i analiza potreba", titleEn: "Inquiry and needs analysis", text: "Slušamo vaše zahtjeve i analiziramo šta je potrebno da bi transport prošao bez komplikacija.", textEn: "We listen to your requirements and analyze what's needed for transport to go without complications." },
  { number: "02", title: "Organizacija transporta", titleEn: "Transport organization", text: "Planiramo rutu, sredstvo i dinamiku, i dogovaramo sve detalje prije polaska.", textEn: "We plan the route, vehicle and timeline, and agree on all details before departure." },
  { number: "03", title: "Praćenje i komunikacija", titleEn: "Tracking and communication", text: "Tokom transporta održavamo kontakt i informišemo vas o statusu pošiljke.", textEn: "During transport we maintain contact and inform you about shipment status." },
  { number: "04", title: "Završetak isporuke", titleEn: "Delivery completion", text: "Roba stiže na odredište u dogovorenom roku, a mi zatvaramo proces sa izvještajem.", textEn: "Goods arrive at the destination within the agreed deadline, and we close the process with a report." },
];

export const COVERAGE_HUB = {
  name: "Podgorica",
  country: "Crna Gora",
  countryEn: "Montenegro",
  position: [42.4304, 19.2594],
};

export const COVERAGE_DESTINATIONS = [
  { name: "Beograd", country: "Srbija", countryEn: "Serbia", position: [44.7866, 20.4489] },
  { name: "Sarajevo", country: "BiH", countryEn: "Bosnia & Herzegovina", position: [43.8563, 18.4131] },
  { name: "Zagreb", country: "Hrvatska", countryEn: "Croatia", position: [45.8150, 15.9819] },
  { name: "Skopje", country: "Sjeverna Makedonija", countryEn: "North Macedonia", position: [41.9981, 21.4254] },
  { name: "Tirana", country: "Albanija", countryEn: "Albania", position: [41.3275, 19.8187] },
  { name: "Budimpešta", country: "Mađarska", countryEn: "Hungary", position: [47.4979, 19.0402] },
  { name: "Beč", country: "Austrija", countryEn: "Austria", position: [48.2082, 16.3738] },
  { name: "Milano", country: "Italija", countryEn: "Italy", position: [45.4642, 9.1900] },
  { name: "Minhen", country: "Njemačka", countryEn: "Germany", position: [48.1351, 11.5820] },
  { name: "Sofija", country: "Bugarska", countryEn: "Bulgaria", position: [42.6977, 23.3219] },
];

export const HOME_SERVICES = SERVICES.filter((service) =>
  ["medjunarodni-transport", "unutarasnji-transport", "skladistenje", "distribucija", "podrska"].includes(service.id)
);

export const NAV_LINKS = [
  { label: "Početna", path: "/" },
  { label: "O nama", path: "/o-nama" },
  { label: "Usluge", path: "/usluge" },
  { label: "Lemon Customer Support", path: "/customer-support" },
  { label: "Kontakt", path: "/kontakt" },
];
