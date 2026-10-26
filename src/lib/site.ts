import postsJson from "@/data/posts.json";

export const venue = {
  name: "Ohana's",
  legalName: "Ohana's Venue & Function Hire",
  tagline: "Wirral's Perfect Wedding & Event Venue",
  short:
    "Boutique private venue hire in Bebington for weddings, parties, baby showers, christenings, wakes and events.",
  description:
    "Ohana's offers boutique venue hire on the Wirral for weddings, parties, baby showers and events. Stylish, flexible space in Bebington, with easy reach of Birkenhead, Port Sunlight, Hoylake and West Kirby.",
  phoneDisplay: "07575 324285",
  phoneTel: "+447575324285",
  email: "office@ohanavenue.com",
  whatsapp: "https://wa.me/447575324285",
  instagram: "https://www.instagram.com/ohanavenuehire/",
  instagramHandle: "@ohanavenuehire",
  facebook: "https://www.facebook.com/profile.php?id=61573983901472",
  address: {
    street: "2c Bromborough Road",
    locality: "Bebington",
    region: "Wirral",
    postalCode: "CH63 7RE",
    country: "United Kingdom",
    countryCode: "GB",
  },
  geo: { latitude: 53.3500552, longitude: -3.0026059 },
  capacity: 80,
  areasServed: [
    "Bebington",
    "Birkenhead",
    "Port Sunlight",
    "Bromborough",
    "Higher Bebington",
    "Hoylake",
    "West Kirby",
    "Wallasey",
    "Liverpool",
    "Wirral",
    "Merseyside",
  ],
} as const;

export const addressLine = `${venue.address.street}, ${venue.address.locality}, ${venue.address.region} ${venue.address.postalCode}`;

export const mapEmbed = `https://maps.google.com/maps?q=${venue.geo.latitude},${venue.geo.longitude}&z=16&output=embed`;
export const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressLine)}`;

export type Photo = { src: string; alt: string };

export const photos = {
  logo: "/media/508e9f34eeb54cc9.png",
  logoLight: "/media/e589e6be2df34a43.png",
  hero: "/media/0cefdefa921944c2.jpg",
  candles: "/media/07f1e065a55c4b96.jpg",
  tables: "/media/004951fbb7a74063.jpg",
  sign: "/media/a710ebee70cc412a.jpg",
  gardenish: "/media/191f6ae2d436463d.jpg",
  room: "/media/3264ea9061df4324.jpg",
  night: "/media/c859789bcef342b6.jpg",
  party: "/media/362edf343d42434b.jpg",
  baby: "/media/8ad2878ac6c64a6d.jpg",
  reveal: "/media/5d117041dee743fa.jpg",
  wake: "/media/0d0084d39b6e4d51.jpg",
  project: "/media/212fdba4a6b44031.jpg",
  blackTie: "/media/19b787fbb6bf40c5.jpg",
  detail: "/media/7024bc57e12640d9.jpg",
} as const;

export type NavItem = { to: string; label: string };

export const primaryNav: NavItem[] = [
  { to: "/weddings", label: "Weddings" },
  { to: "/parties", label: "Parties" },
  { to: "/whats-on", label: "What's on" },
  { to: "/gallery", label: "Gallery" },
  { to: "/journal", label: "Journal" },
];

export const allNav: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/packages", label: "Venue Hire Packages" },
  { to: "/parties", label: "Party Packages" },
  { to: "/christenings", label: "Christenings" },
  { to: "/weddings", label: "Wedding Packages" },
  { to: "/gender-reveals", label: "Gender Reveals" },
  { to: "/wakes", label: "Wakes" },
  { to: "/gallery", label: "Gallery" },
  { to: "/book", label: "Book a Consultation" },
  { to: "/contact", label: "Contact" },
  { to: "/whats-on", label: "Party Nights & Events" },
  { to: "/about", label: "About" },
  { to: "/baby-showers", label: "Baby Showers" },
  { to: "/journal", label: "News & Blog" },
  { to: "/past-projects", label: "Past Projects" },
];

export type Package = { name: string; hire?: string; items: string[] };

export type Occasion = {
  path: string;
  label: string;
  kicker: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  intro: string;
  hero: string;
  heroAlt: string;
  images: Photo[];
  video?: { src: string; poster: string; label: string };
  packages: Package[];
  footnotes?: string[];
  includes?: { title: string; body: string }[];
  extras?: { title: string; body: string }[];
  event: string;
};

const sharedIncludes = [
  {
    title: "Luxury décor",
    body: "High-end venue dressing by professionals, styled to the celebration rather than a one-size room set.",
  },
  {
    title: "High-end lighting",
    body: "Intelligent sound and lighting, including the option of a white LED dance floor.",
  },
  {
    title: "A proper bar",
    body: "A wide selection of drinks, including cocktails, served by professional and friendly staff.",
  },
];

export const occasions: Occasion[] = [
  {
    path: "/parties",
    label: "Party packages",
    kicker: "Birthdays & occasions",
    title: "Party packages",
    seoTitle: "Party Packages | Ohana's Venue Bebington",
    seoDescription:
      "Party packages at Ohana's venue hire, Bebington, Wirral. Birthdays, engagements and private celebrations with décor, catering and an LED dance floor.",
    intro:
      "Discover our party packages below, from birthdays to engagements. They are designed so the celebration is a memory that lasts — main room, conservatory and garden, dressed and hosted for you.",
    hero: photos.party,
    heroAlt: "Styled party tables at Ohana's venue in Bebington",
    images: [
      { src: "/media/0c87cb12d2314e4a.jpg", alt: "Party styling at Ohana's, Bebington" },
      { src: "/media/6c5db56c63264ec8.jpg", alt: "Celebration layout in the Ohana's function room" },
      { src: "/media/6f74629a85ea499a.jpg", alt: "Evening party at Ohana's venue" },
      { src: "/media/7f20c86f056047b6.jpg", alt: "Tables dressed for a private party at Ohana's" },
      { src: "/media/815284d2120e4bce.jpg", alt: "Balloon and centrepiece styling at Ohana's" },
      { src: "/media/fe6045fac41d4b31.jpg", alt: "Guests' celebration at Ohana's Bebington" },
    ],
    packages: [
      {
        name: "All-in package",
        hire: "Main room, conservatory and garden · 6pm until 12am",
        items: [
          "Tables and chairs",
          "Table linen",
          "Chair dressing",
          "Centrepieces",
          "Light-up numbers with balloons in your colour theme",
          "Welcome drinks on arrival",
          "LED dance floor",
          "Hot and cold buffet with two hot options for up to 80 guests",
          "DJ / disco",
        ],
      },
      {
        name: "Essential package",
        hire: "Main room, conservatory and garden · 6pm until 12am",
        items: [
          "Tables and chairs",
          "Table linen",
          "Chair dressing",
          "Centrepieces",
          "Light-up numbers with balloons in your colour theme",
          "Welcome drinks on arrival",
          "LED dance floor",
          "Burgers or pizza with chips for up to 80 guests",
        ],
      },
      {
        name: "Silver package",
        hire: "Main room and conservatory",
        items: [
          "Tables and chairs",
          "Table linen",
          "Chair dressing",
          "Centrepieces",
          "Light-up numbers with balloons in your colour theme",
          "LED dance floor",
        ],
      },
      {
        name: "Silver package premium",
        hire: "Adds the garden",
        items: [
          "Tables and chairs",
          "Table linen",
          "Chair dressing",
          "Centrepieces",
          "Light-up numbers or letters with balloons in your colour theme",
          "LED dance floor",
          "Use of the garden",
        ],
      },
      {
        name: "Bronze package",
        hire: "Main room and conservatory · 6pm until 12am",
        items: ["Tables and chairs", "Table linen", "Centrepieces"],
      },
      {
        name: "Bronze package premium",
        hire: "6pm until 12am",
        items: [
          "Tables and chairs",
          "Table linen",
          "Centrepieces",
          "Use of the garden",
          "LED dance floor",
        ],
      },
    ],
    includes: sharedIncludes,
    event: "Birthday / occasion",
  },
  {
    path: "/weddings",
    label: "Weddings",
    kicker: "Weddings on the Wirral",
    title: "Wedding packages",
    seoTitle: "Wedding Packages | Ohana's Venue Bebington",
    seoDescription:
      "Weddings at Ohana's venue hire, Bebington, Wirral. Twilight and full-day packages with a coordinator, garden, catering and styling.",
    intro:
      "Discover our wedding packages below. We offer twilight packages and full-day packages. Exclusive hire, a wedding coordinator, and a family-run team so the day feels like the best gathering you have ever been to.",
    hero: photos.hero,
    heroAlt: "Black-tie tables with white florals at Ohana's wedding venue, Bebington",
    images: [
      { src: photos.tables, alt: "All-white floral wedding tables at Ohana's" },
      { src: photos.candles, alt: "Candlelit place settings at an Ohana's wedding" },
      { src: photos.blackTie, alt: "Black-tie wedding styling at Ohana's venue" },
      { src: "/media/230a198880d64d65.jpg", alt: "Wedding reception details at Ohana's Bebington" },
      { src: "/media/a3ef5c77949d40cd.jpg", alt: "Wedding flowers at Ohana's" },
      { src: "/media/c6e86b8279084f21.jpg", alt: "Couple's celebration at Ohana's venue" },
    ],
    video: {
      src: "/video/wedding.mp4",
      poster: "/video/wedding.jpg",
      label: "Wedding film from Ohana's, Bebington",
    },
    packages: [
      {
        name: "Exclusive package",
        hire: "Main room, conservatory and garden · exclusive hire from 12pm",
        items: [
          "Wedding coordinator",
          "Sit-down three-course meal",
          "Wine on the tables",
          "Tables and chairs",
          "Table linen",
          "Chair dressing",
          "Centrepieces",
          "Light-up letters",
          "Post box",
          "Cake stand",
          "Wedding monogram",
          "Welcome drinks on arrival",
          "LED dance floor",
        ],
      },
      {
        name: "Day to night package",
        hire: "Main room, conservatory and garden · 2pm until 12am",
        items: [
          "Wedding coordinator",
          "Tables and chairs",
          "Table linen",
          "Chair dressing",
          "Centrepieces",
          "Light-up LOVE letters",
          "Roaming food for day guests",
          "Hot and cold buffet for up to 80 guests",
          "Welcome drink on arrival",
          "Post box",
          "Cake stand",
          "Wedding monogram",
          "LED dance floor",
          "DJ / disco",
        ],
      },
      {
        name: "Gold twilight package",
        hire: "Main room, conservatory and garden · 6pm until 12am",
        items: [
          "Wedding coordinator",
          "Tables and chairs",
          "Table linen",
          "Chair dressing",
          "Centrepieces",
          "Light-up LOVE letters",
          "Hot and cold buffet for up to 80 guests",
          "Welcome drink on arrival",
          "Cake stand",
          "Post box",
          "Wedding monogram",
          "LED dance floor",
          "DJ / disco",
        ],
      },
      {
        name: "Twilight package",
        hire: "Main room and conservatory · 6pm until 12am",
        items: [
          "Wedding coordinator",
          "Tables and chairs",
          "Table linen",
          "Hot and cold buffet for up to 80 guests",
          "Welcome drink on arrival",
          "Cake stand",
          "LED dance floor",
        ],
      },
    ],
    extras: [
      {
        title: "Magic mirror",
        body: "Capture memories. Comes with props and a USB of all the photos.",
      },
      {
        title: "Shot wall",
        body: "A choice of shots for guests, at a corkage fee.",
      },
      {
        title: "Welcome sign",
        body: "A featured welcome sign for guests on entry.",
      },
      {
        title: "DJ / disco",
        body: "Our resident DJ keeps the dance floor full and coordinates the night.",
      },
      {
        title: "LED dance floor",
        body: "Add a white LED dance floor for the party.",
      },
      {
        title: "Audio phone",
        body: "Guests leave a message on our retro recording phone — something you can keep.",
      },
    ],
    footnotes: [
      "When you book your day with Ohana's, you are not left waiting for an answer. The team is on hand seven days a week to talk through the details.",
    ],
    event: "Wedding",
  },
  {
    path: "/christenings",
    label: "Christenings",
    kicker: "Christenings",
    title: "Christening packages",
    seoTitle: "Christenings | Ohana's Venue Bebington",
    seoDescription:
      "Christening packages at Ohana's venue hire, Bebington, Wirral. Décor, food and entertainment for a family celebration.",
    intro:
      "Below are packages that fit a traditional christening celebration. Our all-in approach covers décor, food and entertainment so the family can be in the room, not running the room.",
    hero: "/media/e5b52e816f4c4d60.jpg",
    heroAlt: "Family celebration styling at Ohana's, Bebington",
    images: [
      { src: "/media/cf08769c022d4a72.jpg", alt: "Christening table styling at Ohana's" },
      { src: "/media/a8a82e9a95fe4cff.jpg", alt: "Celebration details at Ohana's venue" },
      { src: "/media/9b010f5e41254e95.jpg", alt: "Dressed function room at Ohana's" },
    ],
    video: {
      src: "/video/christening.mp4",
      poster: "/video/christening.jpg",
      label: "Christening film from Ohana's",
    },
    packages: [
      {
        name: "Gold package",
        hire: "Main room, conservatory and garden · all-day hire",
        items: [
          "Tables and chairs",
          "Table linen",
          "Chair dressing",
          "Centrepieces",
          "Light-up cross and welcome easel with balloons in your colour theme",
          "LED dance floor",
          "A food package of your choice",
          "DJ / disco",
        ],
      },
      {
        name: "Silver package",
        hire: "Main room and conservatory · all-day hire",
        items: [
          "Tables and chairs",
          "Table linen",
          "Chair dressing",
          "Centrepieces",
          "Light-up cross with balloons in your colour theme",
          "LED dance floor",
        ],
      },
      {
        name: "Bronze package",
        hire: "Main room and conservatory · all-day hire",
        items: ["Tables and chairs", "Table linen"],
      },
    ],
    footnotes: ["Balloon upgrades are available on request."],
    event: "Christening",
  },
  {
    path: "/baby-showers",
    label: "Baby showers",
    kicker: "Baby showers",
    title: "Baby shower packages",
    seoTitle: "Baby Showers | Ohana's Venue Bebington",
    seoDescription: "Baby shower packages at Ohana's venue hire, Bebington, Wirral.",
    intro:
      "Below are packages that fit a traditional baby shower. Add afternoon tea at £19.95 per person, or £24.95 per person with a glass of prosecco.",
    hero: photos.baby,
    heroAlt: "Pastel baby shower styling at Ohana's, Bebington",
    images: [
      { src: "/media/25791c10941e4310.jpg", alt: "Baby shower tables at Ohana's" },
      { src: "/media/48960d481c5845ad.jpg", alt: "Baby shower décor at Ohana's venue" },
      { src: "/media/6ac4ee6843d141f2.jpg", alt: "Celebration styling for a baby shower at Ohana's" },
      { src: "/media/77fbd27dcb59493a.jpg", alt: "Details from a baby shower at Ohana's Bebington" },
      { src: "/media/d404da9c4f0f40ef.jpg", alt: "Light and linen at an Ohana's baby shower" },
    ],
    packages: [
      {
        name: "Gold package",
        hire: "Main room, conservatory and garden · all-day hire",
        items: [
          "Tables and chairs",
          "Table linen",
          "Chair dressing",
          "Centrepieces",
          "Light-up BABY letters",
          "Welcome easel with balloon garland",
          "Welcome drinks on arrival",
          "LED dance floor",
          "Hot and cold buffet",
        ],
      },
      {
        name: "Silver package",
        hire: "Main room and conservatory · all-day hire",
        items: [
          "Tables and chairs",
          "Table linen",
          "Chair dressing",
          "Centrepieces",
          "Light-up BABY letters",
          "LED dance floor",
        ],
      },
      {
        name: "Bronze package",
        hire: "Main room and conservatory · all-day hire",
        items: ["Tables and chairs", "Table linen"],
      },
    ],
    footnotes: [
      "Afternoon tea can be added at £19.95 per person, or £24.95 per person with a glass of prosecco.",
    ],
    event: "Baby shower",
  },
  {
    path: "/gender-reveals",
    label: "Gender reveals",
    kicker: "Gender reveals",
    title: "Gender reveals",
    seoTitle: "Gender Reveals | Ohana's Venue Bebington",
    seoDescription:
      "Gender reveal packages at Ohana's venue hire, Bebington, Wirral, with décor, cannons and food.",
    intro:
      "Gender reveal events are becoming bigger and better. We can look after the food, the décor and the effect for the moment itself.",
    hero: photos.reveal,
    heroAlt: "Gender reveal celebration at Ohana's venue, Bebington",
    images: [
      { src: "/media/408b29eeb4c04ac1.jpg", alt: "Celebration setup at Ohana's for a reveal" },
      { src: "/media/87f061e2fbeb48e1.png", alt: "Ohana's gender reveal graphic" },
    ],
    video: {
      src: "/video/gender.mp4",
      poster: "/video/gender.jpg",
      label: "Gender reveal film from Ohana's",
    },
    packages: [
      {
        name: "Essential package",
        hire: "Inside, small courtyard and garden · all-day hire",
        items: [
          "Tables and chairs",
          "Table linen",
          "Chair dressing",
          "Centrepieces",
          "Gender reveal display",
          "Gender reveal button with cannons",
          "Welcome drinks on arrival",
          "LED dance floor",
          "A food package of your choice",
        ],
      },
      {
        name: "Silver package",
        hire: "Inside and courtyard · 12pm to 4pm",
        items: [
          "Tables and chairs",
          "Table linen",
          "Chair dressing",
          "Centrepieces",
          "Gender reveal display",
          "Gender reveal button with cannons",
        ],
      },
      {
        name: "Bronze package",
        hire: "Inside and courtyard · 12pm to 4pm",
        items: ["Tables and chairs", "Table linen"],
      },
    ],
    event: "Gender reveal",
  },
  {
    path: "/wakes",
    label: "Wakes",
    kicker: "Wakes & celebrations of life",
    title: "Funerals, wakes and celebrations of life",
    seoTitle: "Wakes | Ohana's Venue Bebington",
    seoDescription:
      "Luxury venue hire for wakes in Bebington. A private, comfortable room with flexible catering. Venue hire can be included when you choose a food package.",
    intro:
      "Saying goodbye to someone you love deserves a space that feels warm, not clinical. At Ohana's in Bebington we offer a private, comfortable setting for wakes and memorial gatherings — somewhere family and friends can share stories away from the formality of the day itself.",
    hero: photos.wake,
    heroAlt: "Quiet, dressed tables for a gathering at Ohana's, Bebington",
    images: [
      { src: "/media/408b29eeb4c04ac1.jpg", alt: "A calm room set for a gathering at Ohana's" },
      { src: photos.candles, alt: "Candlelit tables at Ohana's venue" },
    ],
    video: {
      src: "/video/wakes.mp4",
      poster: "/video/wakes.jpg",
      label: "A look at the room at Ohana's",
    },
    packages: [
      {
        name: "All-in package",
        hire: "Inside, small courtyard and garden",
        items: [
          "Tables and chairs",
          "Table linen",
          "Chair dressing",
          "Centrepieces",
          "Welcome drinks on arrival",
          "Tea and coffee station",
          "Hot and cold buffet with two hot options for up to 80 guests",
        ],
      },
      {
        name: "Essential package",
        hire: "Inside, small courtyard and garden",
        items: [
          "Tables and chairs",
          "Table linen",
          "Chair dressing",
          "Centrepieces",
          "Welcome drinks on arrival",
          "Tea and coffee station",
        ],
      },
      {
        name: "Silver package",
        hire: "Inside and courtyard",
        items: [
          "Tables and chairs",
          "Table linen",
          "Chair dressing",
          "Centrepieces",
        ],
      },
      {
        name: "Bronze package",
        hire: "Inside and courtyard",
        items: ["Tables and chairs", "Table linen"],
      },
    ],
    footnotes: [
      "The team understands this is a difficult time and will take the pressure off wherever they can — from a simple tea and coffee service to a full buffet, with timings that work around the service.",
      "If you would like to talk through arrangements, we are happy to have a sensitive, no-obligation conversation.",
    ],
    event: "Wake / celebration of life",
  },
];

export function occasionByPath(path: string) {
  return occasions.find((item) => item.path === path);
}

export const consultations = [
  "Wedding",
  "Engagement",
  "Birthday",
  "Baby shower",
  "Wake",
  "Conference / meeting",
] as const;

export const nights = [
  {
    name: "Bonkers Halloween Bingo",
    when: "Friday 30 October 2026 · 7pm",
    detail:
      "Over 18s. Bingo and food, mad prizes, a stocked bar and DJ Beddie. £28 per person. The original site was on last call for tickets.",
    option: "Bonkers Halloween Bingo: 30th October 2026",
  },
  {
    name: "Gimmie Gimmie Festive Party Night",
    when: "Friday 4 December 2026",
    detail: "A Christmas party night at Ohana's. Numbers are taken on the booking form.",
    option: "Gimmie Gimmie Festive Party Night: 4th December 2026",
  },
  {
    name: "Christmas Bonkers Bingo",
    when: "Saturday 5 December 2026",
    detail: "Festive bingo night. Book spaces on the form below.",
    option: "Christmas Bonkers Bingo: 5th December 2026",
  },
  {
    name: "Oh Ho Ohana's Bingo",
    when: "Saturday 12 December 2026",
    detail:
      "The Christmas party night returns after last year's sell-out. High-energy bingo, a DJ, and a festive carvery.",
    option: "Oh Ho Ohanas Bingo: 12th December 2026",
  },
];

export const projects = [
  {
    title: "Oliver's 21st",
    body: "When Oliver's 21st fell on the 4th of July, an American-themed bash was the only way to celebrate. Custom cut-out props, bespoke centrepieces, balloon displays and an all-American buffet. He took the all-in package.",
    image: "/media/212fdba4a6b44031.jpg",
    alt: "Themed 21st birthday styling at Ohana's",
  },
  {
    title: "Dave's 70th",
    body: "A night of pure nostalgia — the 1980s, for one night only. Retro centrepieces, neon chair styling and funky balloons. Dave took the all-in package.",
    image: "/media/758b9fd16b664438.jpg",
    alt: "Milestone birthday at Ohana's venue",
  },
  {
    title: "Gary & John's engagement",
    body: "A striking black and white theme, full of timeless elegance. Ohana's helped bring a sophisticated engagement celebration together.",
    image: "/media/bc01cd2d0d444afc.jpg",
    alt: "Black and white engagement styling at Ohana's",
  },
  {
    title: "Wedding of Melissa & Lewis",
    body: "An exclusive space with a garden was top of the list, with dressing and entertainment taken care of in one place. The twilight package became a glamorous black-tie affair.",
    image: photos.hero,
    alt: "Black-tie wedding at Ohana's with white florals",
  },
  {
    title: "Frankie's 18th",
    body: "A western and country obsession took centre stage. The in-house florist made hoedown centrepieces and cowboy-themed balloons, finished with custom cut-out props.",
    image: "/media/e5b52e816f4c4d60.jpg",
    alt: "Themed 18th birthday at Ohana's",
  },
  {
    title: "Georgia's baby shower",
    body: "An elegant pastel shower on the top package: bespoke centrepieces, large light-up BABY letters, a white LED dance floor, linen, a welcome drink and afternoon tea.",
    image: photos.baby,
    alt: "Pastel baby shower at Ohana's",
  },
];

export type Post = {
  slug: string;
  title: string;
  date: string;
  niceDate: string;
  excerpt: string;
};

export const posts = postsJson as Post[];

export function postBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export const faqs = [
  {
    q: "Where is Ohana's?",
    a: "2c Bromborough Road, Bebington, Wirral, CH63 7RE. It sits on the Wirral Peninsula, close to Port Sunlight and Birkenhead, and is straightforward to reach from Hoylake, West Kirby, Wallasey and Liverpool.",
  },
  {
    q: "How many guests can you host?",
    a: "Packages are written for up to 80 guests, with a standing-friendly layout across the main room, conservatory and garden. Tell us your numbers and we will confirm the right room plan.",
  },
  {
    q: "What can we celebrate?",
    a: "Weddings, birthdays, engagements, christenings, baby showers, gender reveals, wakes and celebrations of life, party nights, and smaller corporate gatherings or conferences.",
  },
  {
    q: "Is the venue private?",
    a: "Yes. Ohana's is private hire, not a club. You have the space, the bar and the team for your event — you are not sharing the room with a public night.",
  },
  {
    q: "How do we book?",
    a: "Send an enquiry by the form, WhatsApp on 07575 324285, or email office@ohanavenue.com. A viewing or one-hour consultation is not confirmed until we email you back. Package prices are confirmed against your date, numbers and food.",
  },
  {
    q: "Do you style the room?",
    a: "Yes. Packages include linen, chair dressing and centrepieces, and the team styles themes — from black tie and all-white florals to cowgirl 18ths and Titanic engagements. Balloon and letter upgrades are available.",
  },
];

export const spaces = [
  {
    name: "Main room",
    body: "The heart of the hire. A dressed function room for speeches, dining and dancing, with lighting and a bar.",
  },
  {
    name: "Conservatory",
    body: "Extra seating and a lighter room that opens the party out, included on most silver and gold layouts.",
  },
  {
    name: "Garden & courtyard",
    body: "A private garden and small courtyard for photographs, welcome drinks and summer celebrations. Premium and all-in hires include it.",
  },
];

export function venueJsonLd(origin = "") {
  const url = origin || undefined;
  const image = origin ? `${origin}${photos.hero}` : photos.hero;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["EventVenue", "LocalBusiness"],
        "@id": `${origin}/#venue`,
        name: venue.name,
        alternateName: venue.legalName,
        description: venue.description,
        url,
        image,
        telephone: venue.phoneTel,
        email: venue.email,
        priceRange: "££",
        currenciesAccepted: "GBP",
        maximumAttendeeCapacity: venue.capacity,
        publicAccess: false,
        address: {
          "@type": "PostalAddress",
          streetAddress: venue.address.street,
          addressLocality: venue.address.locality,
          addressRegion: venue.address.region,
          postalCode: venue.address.postalCode,
          addressCountry: venue.address.countryCode,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: venue.geo.latitude,
          longitude: venue.geo.longitude,
        },
        hasMap: mapLink,
        areaServed: venue.areasServed.map((name) => ({ "@type": "Place", name })),
        sameAs: [venue.instagram, venue.facebook],
        slogan: venue.tagline,
      },
      {
        "@type": "WebSite",
        "@id": `${origin}/#website`,
        name: "Ohana's Venue Bebington",
        url,
        inLanguage: "en-GB",
        publisher: { "@id": `${origin}/#venue` },
      },
    ],
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function breadcrumbJsonLd(origin: string, crumbs: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: origin ? `${origin}${crumb.path}` : crumb.path,
    })),
  };
}

export const publicPaths = [
  "/",
  "/about",
  "/packages",
  "/parties",
  "/weddings",
  "/christenings",
  "/baby-showers",
  "/gender-reveals",
  "/wakes",
  "/gallery",
  "/whats-on",
  "/past-projects",
  "/journal",
  "/book",
  "/contact",
  ...posts.map((post) => `/journal/${post.slug}`),
];
