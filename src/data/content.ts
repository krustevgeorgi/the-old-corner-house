export type Lang = "en" | "bg" | "ru";

export const supportedLanguages: Lang[] = ["en", "bg", "ru"];

export const languageNames: Record<Lang, string> = {
  en: "English",
  bg: "Български",
  ru: "Русский",
};

export const languageFlags: Record<Lang, string> = {
  en: "🇬🇧",
  bg: "🇧🇬",
  ru: "🇷🇺",
};

export interface EntryStep {
  title: string;
  instruction: string;
  images: string[];
  tip?: string;
}

export interface WelcomeContent {
  title: string;
  intro: string;
  wifiLabel: string;
  wifiValue: string;
  passLabel: string;
  passValue: string;
  phoneLabel: string;
  phoneValue: string;
  emergencyLabel: string;
  emergencyValue: string;
  locationLabel: string;
  locationValue: string;
  locationMapUrl: string;
  entryTitle: string;
  entryButtonLabel: string;
  entrySteps: EntryStep[];
  essentialsTitle: string;
}

export interface RulesContent {
  title: string;
  items: string[];
  closing: string;
}

export interface ApplianceItem {
  name: string;
  instruction: string;
}

export interface AppliancesContent {
  title: string;
  items: ApplianceItem[];
}

export interface BikeItem {
  name: string;
  instruction: string;
}

export interface BikesContent {
  title: string;
  intro: string;
  deposit: string;
  items: BikeItem[];
}

export interface Place {
  name: string;
  details: string;
  mapUrl: string;
  mapsLink?: string;
}

export interface Category {
  title: string;
  places: Place[];
}

export interface CityGuideContent {
  title: string;
  categories: Category[];
}

export interface TrailItem {
  name: string;
  distance: string;
  difficulty: string;
  duration: string;
  water: string;
  route: string;
  mapUrl: string;
}

export interface TrailsContent {
  title: string;
  note: string;
  items: TrailItem[];
}

export interface LangContent {
  welcome: WelcomeContent;
  rules: RulesContent;
  appliances: AppliancesContent;
  bikes: BikesContent;
  cityGuide: CityGuideContent;
  trails: TrailsContent;
}

export const guidebookContent: Record<Lang, LangContent> = {
  en: {
    welcome: {
      title: "Welcome to Velingrad!",
      intro: "We are thrilled to host you. Please use this guide to find everything you need for a comfortable stay and to discover the best of the spa capital of the Balkans.",
      wifiLabel: "Wi-Fi Network:",
      wifiValue: "The Old Corner House",
      passLabel: "Wi-Fi Password:",
      passValue: "the-old-corner-house-39",
      phoneLabel: "Host Phone Number:",
      phoneValue: "+359 87 9606986",
      emergencyLabel: "Emergency Number:",
      emergencyValue: "112",
      locationLabel: "Property Address:",
      locationValue: "кв. Лъджене, ul. \"Vincho Goranov\" 39",
      locationMapUrl: "https://maps.app.goo.gl/kYS4rwdpnPi2RzyeA?g_st=ic",
      essentialsTitle: "Essentials",
      entryTitle: "How to Enter the Property",
      entryButtonLabel: "Entry Instructions",
      entrySteps: [
        {
          title: "Find the House",
          instruction: "Look for the pinkish corner house. The address is кв. Лъджене, ul. \"Vincho Goranov\" 39.",
          images: ["/images/exterior.jpg"],
        },
        {
          title: "Open the Yard Door",
          instruction: "On the left side of the house you will see a metal yard door with the number 39 on it.",
          images: ["/images/yard door.jpg"],
        },
        {
          title: "Unlock the Door Latch",
          instruction: "Look under the door hatch — there is a sliding lock mechanism. Slide it to the right with your finger to unlock the door.",
          images: ["/images/yard door lock.jpg", "/images/yard door lock locked.jpg", "/images/yard door lock unlocked.jpg"],
          tip: "Slide left-to-right to unlock, right-to-left to lock.",
        },
        {
          title: "Find the Lockbox",
          instruction: "After entering the yard, look to your left. On the inner side of the fence pillar there is a black lockbox mounted on the wall.",
          images: ["/images/lockbox with cover.jpg"],
        },
        {
          title: "Open the Lockbox",
          instruction: "Flip open the protective cover to reveal the combination dials. Enter the code provided to you and pull the metal lid down to open.",
          images: ["/images/lockbox uncovered.jpg", "/images/lockbox unlocked.jpg"],
          tip: "After taking the keys, scramble the code and close the cover.",
        },
        {
          title: "Unlock the House Door",
          instruction: "Turn around — the brown wooden door directly behind you is the house entrance. Use one of the keys to unlock it.",
          images: ["/images/house door.jpg"],
        },
        {
          title: "Unlock the Apartment Door",
          instruction: "After entering, on your right-hand side you will see a lighter wooden door — this is the apartment door. Use the other key to unlock it.",
          images: ["/images/apartment door.jpg"],
        },
        {
          title: "When Leaving",
          instruction: "Please lock all doors when you leave. Important: to lock the house door, the lever must be lifted UP first, then turn the key to lock.",
          images: ["/images/house door lever lifted to lock.jpg"],
          tip: "Lift the handle up, then turn the key. Return the keys to the lockbox and scramble the code.",
        },
      ],
    },
    rules: {
      title: "House Rules",
      items: [
        "Strictly no smoking in the house.",
        "No shoes to be worn inside to avoid dirt marks and wear and tear.",
        "The front door must be locked each time you come and go.",
        "No food or eating in the bedrooms.",
        "No unregistered guests are allowed.",
        "Please do not dispose of wet wipes down the toilet.",
        "Please be respectful of cleanliness, tidiness, and noise. (Standard quiet hours are 2:00 PM – 4:00 PM and 10:00 PM – 8:00 AM).",
        "No parties or loud events.",
        "Please dispose of your trash in the designated outdoor bins.",
        "Remember to turn off the AC, appliances, and lights when you leave.",
      ],
      closing:
        "We have carefully furnished and equipped this space for your comfort. Please leave all items belonging to the apartment (including towels, decorations, and appliances) inside the property and do not take them home with you. Thank you, and have a pleasant stay!",
    },
    appliances: {
      title: "How to Use the Appliances",
      items: [
        {
          name: "Air Conditioning",
          instruction:
            "Use the remote on the wall to control the temperature. Please keep doors and windows closed when running the AC.",
        },
        {
          name: "TV",
          instruction:
            "Use the main remote to turn it on, and select the smart apps (Netflix, YouTube) from the home screen menu.",
        },
        {
          name: "Stove",
          instruction:
            "Turn the dial to the desired heat level. Please ensure the burner is completely turned off and cooled down after use.",
        },
      ],
    },
    bikes: {
      title: "Bicycle Rentals",
      intro: "We offer two fully serviced bicycles for our guests to explore the city!",
      deposit: "A refundable deposit of 50 BGN per bicycle is required. The deposit will be returned upon safe return of the bikes.",
      items: [
        {
          name: "How to Unlock",
          instruction: "The code for the bike lock is [Insert Code].",
        },
        {
          name: "Equipment",
          instruction: "You will find a tire pump located at [Insert Location].",
        },
        {
          name: "Rules",
          instruction:
            "Please lock the bikes securely whenever unattended, return them to their original spot, and ride safely!",
        },
      ],
    },
    cityGuide: {
      title: "Velingrad City Guide",
      categories: [
        {
          title: "Mineral Pools & Water Parks",
          places: [
            {
              name: "Vitosha Holiday Station",
              details: "1 km – 14 min walk – 7 min bike (Ideal for relaxation)",
              mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2963.3755852386553!2d23.995080876285527!3d42.035125855567756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ab65c78a71cc5d%3A0xd01ae0715c5800bc!2sVitosha!5e0!3m2!1sen!2sbg!4v1773920181196!5m2!1sen!2sbg",
              mapsLink: "https://www.google.com/maps/search/?api=1&query=42.035126,23.995081",
            },
            {
              name: "Elbrus Aquapark",
              details: "1.2 km – 17 min walk – 8 min bike (Ideal for kids)",
              mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2963.740119666668!2d23.976836176285264!3d42.027307156058825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ab65ea981f4b23%3A0xaee3272b32d56235!2z0KHQn9CQINCl0J7QotCV0Jsg0JXQm9CR0KDQo9Ch!5e0!3m2!1sen!2sbg!4v1773920205083!5m2!1sen!2sbg",
              mapsLink: "https://www.google.com/maps/search/?api=1&query=42.027307,23.976836",
            },
            {
              name: "Delfin Aquapark",
              details: "750 m – 10 min walk – 6 min bike (Ideal for kids)",
              mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2963.4302500374924!2d23.989976676285533!3d42.03395345564157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ab657a933621e1%3A0xaf76b248b7aa0d75!2z0JDQutCy0LDQv9Cw0YDQuiDQlNC10LvRhNC40L0!5e0!3m2!1sen!2sbg!4v1773920220392!5m2!1sen!2sbg",
              mapsLink: "https://www.google.com/maps/search/?api=1&query=42.033953,23.989977",
            },
            {
              name: "Oceana Beach Swimming Complex",
              details: "3.7 km – 51 min walk – 25 min bike",
              mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2964.902571211179!2d23.98128307628415!3d42.00236645762426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ab6535e448ff17%3A0x67c1ebeb168bc70f!2z0J7RgtC60YDQuNGCINC_0LvRg9Cy0LXQvSDQutC-0LzQv9C70LXQutGBICLQntC60LXQsNC90LjQsCDQkdC40LnRhyI!5e0!3m2!1sen!2sbg!4v1773920243656!5m2!1sen!2sbg",
              mapsLink: "https://www.google.com/maps/search/?api=1&query=42.002366,23.981283",
            },
          ],
        },
        {
          title: "Parks & City Walks",
          places: [
            {
              name: "City Center",
              details: "200 m – 3 min walk",
              mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2963.72888304634!2d23.986612288499575!3d42.02754818186309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ab657374b30fbb%3A0x79f6a967258e9042!2sCentral%20Fountain%20%22The%20Cup%22!5e0!3m2!1sen!2sbg!4v1773920273188!5m2!1sen!2sbg",
              mapsLink: "https://www.google.com/maps/search/?api=1&query=42.027548,23.986612",
            },
            {
              name: "Kleptuza Park & Lake",
              details: "3.4 km – 50 min walk – 20 min bike",
              mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.003913665004!2d23.978534476284!3d42.000191557760836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ab650c4ba55c57%3A0xe5d0e7f6899392b2!2sPark%20%22Kleptuza%22!5e0!3m2!1sen!2sbg!4v1773924402263!5m2!1sen!2sbg",
              mapsLink: "https://www.google.com/maps/search/?api=1&query=42.000192,23.978534",
            },
            {
              name: "Borov Park",
              details: "700 m – 10 min walk – 6 min bike",
              mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2963.72888304634!2d23.986612288499575!3d42.02754818186309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ab657b95a24eeb%3A0xa7722b5909340f3!2z0JHQvtGA0L7QsiDQv9Cw0YDQug!5e0!3m2!1sen!2sbg!4v1773920295055!5m2!1sen!2sbg",
              mapsLink: "https://www.google.com/maps/search/?api=1&query=42.027548,23.986612",
            },
            {
              name: "Velyova Banya Park",
              details: "900 m – 12 min walk – 7 min bike",
              mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1743.9832940233066!2d23.980373619196516!3d42.028749904373335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ab65c134af6897%3A0x3d3eda8e7fb7d6ca!2z0JLQtdC70YzQvtCy0LAg0LHQsNC90Y8!5e0!3m2!1sen!2sbg!4v1773920316604!5m2!1sen!2sbg",
              mapsLink: "https://www.google.com/maps/search/?api=1&query=42.028750,23.980374",
            },
          ],
        },
        {
          title: "Dining",
          places: [
            {
              name: "Restaurant Borov Park",
              details: "",
              mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1743.9832940233066!2d23.980373619196516!3d42.028749904373335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ab65679987f109%3A0x933b12b9157f94d4!2z0KDQtdGB0YLQvtGA0LDQvdGCICLQkdC-0YDQvtCyINCf0LDRgNC6Ig!5e0!3m2!1sen!2sbg!4v1773920336600!5m2!1sen!2sbg",
              mapsLink: "https://www.google.com/maps/search/?api=1&query=42.028750,23.980374",
            },
            {
              name: "Restaurant Paradise",
              details: "",
              mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2964.310875088254!2d23.98473787628472!3d42.015062956827464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ab642d36108925%3A0xe5d0b8bdf7d7aea5!2sParadise!5e0!3m2!1sen!2sbg!4v1773920357906!5m2!1sen!2sbg",
              mapsLink: "https://www.google.com/maps/search/?api=1&query=42.015063,23.984738",
            },
            {
              name: "Tavern (Mehana) Demeko",
              details: "",
              mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2963.203357832029!2d23.986125676285702!3d42.03881945533598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ab65d9e4c81303%3A0x6c312676687b254f!2sDemeko%20Tavern!5e0!3m2!1sen!2sbg!4v1773920376441!5m2!1sen!2sbg",
              mapsLink: "https://www.google.com/maps/search/?api=1&query=42.038819,23.986126",
            },
          ],
        },
        {
          title: "Nightlife",
          places: [
            {
              name: "Piano Bar Louis (Grand Hotel Velingrad)",
              details: "",
              mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2964.331257039775!2d23.982053676284625!3d42.014625656854896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ab652e4ae7c663%3A0xdabdbf51c26bce18!2sPiano%20Bar%20Louis%20Velingrad!5e0!3m2!1sen!2sbg!4v1773920400396!5m2!1sen!2sbg",
              mapsLink: "https://www.google.com/maps/search/?api=1&query=42.014626,23.982054",
            },
            {
              name: "Deja Vu Resto & Bar",
              details: "",
              mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2963.7832473287535!2d23.988874276285316!3d42.026382056116965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ab6564eab7e115%3A0x735a2f846c1c41bd!2sDeja%20Vu%20Resto%20%26%20Club!5e0!3m2!1sen!2sbg!4v1773920427701!5m2!1sen!2sbg",
              mapsLink: "https://www.google.com/maps/search/?api=1&query=42.026382,23.988874",
            },
            {
              name: "Club NOTO",
              details: "",
              mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2963.7832473287535!2d23.988874276285316!3d42.026382056116965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ab65f060a59e2b%3A0x7d54dc2e97ac312f!2sNOTO%20Night%20Club!5e0!3m2!1sen!2sbg!4v1773920446621!5m2!1sen!2sbg",
              mapsLink: "https://www.google.com/maps/search/?api=1&query=42.026382,23.988874",
            },
          ],
        },
        {
          title: "Pharmacies",
          places: [
            {
              name: "Mareski Pharmacy",
              details: "140 m – 2 min walk",
              mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d728.2022243059697!2d23.993193037386963!3d42.02769683062919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ab65c9344ef78b%3A0x828994a62117c1a8!2z0JDQv9GC0LXQutCwICLQnNCw0YDQtdGI0LrQuCI!5e0!3m2!1sen!2sbg!4v1773920473101!5m2!1sen!2sbg",
              mapsLink: "https://www.google.com/maps/search/?api=1&query=42.027697,23.993193",
            },
            {
              name: "Pazara Pharmacy",
              details: "350 m – 5 min walk",
              mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d728.2151667228684!2d23.993738716711192!3d42.026566953643865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ab65f7498508c5%3A0x450fbd914c21065f!2z0JDQn9Ci0JXQmtCQINCf0JDQl9CQ0KDQkA!5e0!3m2!1sen!2sbg!4v1773920489346!5m2!1sen!2sbg",
              mapsLink: "https://www.google.com/maps/search/?api=1&query=42.026567,23.993739",
            },
          ],
        },
      ],
    },
    trails: {
      title: "Eco-Trails & Hiking",
      note: "Note: Please keep in mind that the suggested routes are intended for walking or biking. For driving routes, please use Google Maps.",
      items: [
        {
          name: "Route 1: The Old Chark (Stariyat Chark)",
          distance: "4.40 km",
          difficulty: "1/3",
          duration: "Half-day",
          water: "Available at 'Stariyat Chark' area",
          route:
            "Nikolay Gyaurov Square and 'The Cup' Central Fountain, Khan Asparuh Pedestrian Blvd, Borov Park & Restaurant, St. George the Victorious Chapel, 'The Bar' rest area, 'The Little Streets' (Ulichkite) area, St. Nicholas Chapel, 'The Old Chark' area and drinking water.",
          mapUrl: "",
        },
        {
          name: "Route 2: Ostrets Peak & Sanctuary",
          distance: "8.1 km",
          difficulty: "2/3",
          duration: "Full-day",
          water:
            "At Maxi Park Hotel & Spa (Ensure you have enough for the round trip)",
          route:
            "Assumption of the Virgin Mary Church, Ossuary Memorial, SPA Club Bor, Vela Peeva Ossuary Memorial, Rest benches with city views + The Cross, Maxi Park Hotel & Spa, Drinking water, 'Voynishka Polyana' area, 'Hristova Polyana' area, Last rest spot (rocks), 'Vazova Polyana' area (Gazebo), Ostrets Sanctuary, Ostrets Peak.",
          mapUrl: "",
        },
      ],
    },
  },
  bg: {
    welcome: {
      title: "Добре дошли във Велинград!",
      intro: "Радваме се да ви посрещнем. Моля, използвайте този справочник, за да намерите всичко необходимо за комфортен престой и да откриете най-доброто от спа столицата на Балканите.",
      wifiLabel: "Wi-Fi Мрежа:",
      wifiValue: "The Old Corner House",
      passLabel: "Wi-Fi Парола:",
      passValue: "the-old-corner-house-39",
      phoneLabel: "Телефон на домакина:",
      phoneValue: "+359 87 9606986",
      emergencyLabel: "Спешни случаи:",
      emergencyValue: "112",
      locationLabel: "Адрес на имота:",
      locationValue: "кв. Лъджене, ул. \"Винчо Горанов\" 39",
      locationMapUrl: "https://maps.app.goo.gl/kYS4rwdpnPi2RzyeA?g_st=ic",
      essentialsTitle: "Основна информация",
      entryTitle: "Как да влезете в имота",
      entryButtonLabel: "Инструкции за вход",
      entrySteps: [
        {
          title: "Намерете къщата",
          instruction: "Потърсете розовата ъглова къща. Адресът е кв. Лъджене, ул. \"Винчо Горанов\" 39.",
          images: ["/images/exterior.jpg"],
        },
        {
          title: "Отворете дворната врата",
          instruction: "От лявата страна на къщата ще видите метална дворна врата с номер 39.",
          images: ["/images/yard door.jpg"],
        },
        {
          title: "Отключете ключалката",
          instruction: "Погледнете под капачето на вратата — там има плъзгащ се механизъм. Плъзнете го надясно с пръст, за да отключите вратата.",
          images: ["/images/yard door lock.jpg", "/images/yard door lock locked.jpg", "/images/yard door lock unlocked.jpg"],
          tip: "Наляво-надясно за отключване, надясно-наляво за заключване.",
        },
        {
          title: "Намерете кутията за ключове",
          instruction: "След като влезете в двора, погледнете наляво. На вътрешната страна на стълба на оградата има черна кутия за ключове.",
          images: ["/images/lockbox with cover.jpg"],
        },
        {
          title: "Отворете кутията за ключове",
          instruction: "Отворете защитния капак, за да разкриете цифровите дискове. Въведете предоставения ви код и издърпайте металния капак надолу.",
          images: ["/images/lockbox uncovered.jpg", "/images/lockbox unlocked.jpg"],
          tip: "След като вземете ключовете, разбъркайте кода и затворете капака.",
        },
        {
          title: "Отключете входната врата",
          instruction: "Обърнете се — кафявата дървена врата зад вас е входът на къщата. Използвайте единия ключ, за да я отключите.",
          images: ["/images/house door.jpg"],
        },
        {
          title: "Отключете вратата на апартамента",
          instruction: "След като влезете, от дясната ви страна ще видите по-светла дървена врата — това е вратата на апартамента. Отключете я с другия ключ.",
          images: ["/images/apartment door.jpg"],
        },
        {
          title: "При напускане",
          instruction: "Моля, заключете всички врати. Важно: за да заключите входната врата, дръжката трябва да се повдигне НАГОРЕ, след което завъртете ключа.",
          images: ["/images/house door lever lifted to lock.jpg"],
          tip: "Повдигнете дръжката нагоре, след което завъртете ключа. Върнете ключовете в кутията и разбъркайте кода.",
        },
      ],
    },
    rules: {
      title: "Правила на дома",
      items: [
        "Строго забранено е пушенето в апартамента.",
        "Моля, не носете обувки вътре, за да се избегнат следи от мръсотия и захабяване на пода.",
        "Външната врата трябва да се заключва при всяко влизане и излизане.",
        "Забранено е внасянето на храна и храненето в спалните.",
        "Не се допускат нерегистрирани гости.",
        "Моля, не изхвърляйте мокри кърпи в тоалетната.",
        "Моля, бъдете съобразителни относно чистотата, реда и шума. (Часовете за тишина са между 14:00 – 16:00 и 22:00 – 08:00 часа).",
        "Не се допускат партита и шумни събития.",
        "Моля, изхвърляйте боклука си в предназначените за това контейнери навън.",
        "Не забравяйте да изключвате климатика, уредите и осветлението, когато излизате.",
      ],
      closing:
        "Обзаведохме и оборудвахме това място с грижа за вашия комфорт. Моля, оставяйте всички вещи, принадлежащи на апартамента (включително кърпи, декорации и уреди), в имота и не ги взимайте със себе си. Благодарим ви и ви пожелаваме приятен престой!",
    },
    appliances: {
      title: "Инструкции за уредите",
      items: [
        {
          name: "Климатик",
          instruction:
            "Използвайте дистанционното на стената, за да регулирате температурата. Моля, дръжте вратите и прозорците затворени, докато климатикът работи.",
        },
        {
          name: "Телевизор",
          instruction:
            "Използвайте главното дистанционно, за да го включите и изберете смарт приложенията (Netflix, YouTube) от началното меню.",
        },
        {
          name: "Печка",
          instruction:
            "Завъртете ключа на желаната степен. Моля, уверете се, че котлонът е напълно изключен и изстинал след употреба.",
        },
      ],
    },
    bikes: {
      title: "Наем на велосипеди",
      intro: "Предлагаме два напълно обслужени велосипеда, с които нашите гости могат да разгледат града!",
      deposit: "Изисква се възстановим депозит от 50 лв. на велосипед. Депозитът ще бъде върнат при безопасното връщане на велосипедите.",
      items: [
        {
          name: "Как да отключите",
          instruction: "Кодът за катинара на велосипедите е [Въведете Код].",
        },
        {
          name: "Оборудване",
          instruction:
            "Може да намерите помпа за гуми на [Въведете Местоположение].",
        },
        {
          name: "Правила",
          instruction:
            "Моля, заключвайте велосипедите сигурно, когато ги оставяте без надзор, връщайте ги на първоначалното им място и карайте безопасно!",
        },
      ],
    },
    cityGuide: {
      title: "Градски пътеводител",
      categories: [
        {
          title: "Минерални басейни",
          places: [
            {
              name: "Почивна станция Витоша",
              details: "1 км – 14 мин пеш – 7 мин колело (идеално за почивка)",
              mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2963.3755852386553!2d23.995080876285527!3d42.035125855567756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ab65c78a71cc5d%3A0xd01ae0715c5800bc!2sVitosha!5e0!3m2!1sen!2sbg!4v1773920181196!5m2!1sen!2sbg",
              mapsLink: "https://www.google.com/maps/search/?api=1&query=42.035126,23.995081",
            },
            {
              name: "Аквапарк Елбрус",
              details: "1.2 км – 17 мин пеш – 8 мин колело (идеално за деца)",
              mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2963.740119666668!2d23.976836176285264!3d42.027307156058825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ab65ea981f4b23%3A0xaee3272b32d56235!2z0KHQn9CQINCl0J7QotCV0Jsg0JXQm9CR0KDQo9Ch!5e0!3m2!1sen!2sbg!4v1773920205083!5m2!1sen!2sbg",
              mapsLink: "https://www.google.com/maps/search/?api=1&query=42.027307,23.976836",
            },
            {
              name: "Аквапарк Делфин",
              details: "750 м – 10 мин пеш – 6 мин колело (идеално за деца)",
              mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2963.4302500374924!2d23.989976676285533!3d42.03395345564157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ab657a933621e1%3A0xaf76b248b7aa0d75!2z0JDQutCy0LDQv9Cw0YDQuiDQlNC10LvRhNC40L0!5e0!3m2!1sen!2sbg!4v1773920220392!5m2!1sen!2sbg",
              mapsLink: "https://www.google.com/maps/search/?api=1&query=42.033953,23.989977",
            },
            {
              name: "Плувен комплекс \u201cОкеана Бийч\u201d",
              details: "3.7 км – 51 мин пеш – 25 мин колело",
              mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2964.902571211179!2d23.98128307628415!3d42.00236645762426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ab6535e448ff17%3A0x67c1ebeb168bc70f!2z0J7RgtC60YDQuNGCINC_0LvRg9Cy0LXQvSDQutC-0LzQv9C70LXQutGBICLQntC60LXQsNC90LjQsCDQkdC40LnRhyI!5e0!3m2!1sen!2sbg!4v1773920243656!5m2!1sen!2sbg",
              mapsLink: "https://www.google.com/maps/search/?api=1&query=42.002366,23.981283",
            },
          ],
        },
        {
          title: "Паркове и места за разходка в града",
          places: [
            {
              name: "Център",
              details: "200 м – 3 мин пеш",
              mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2963.72888304634!2d23.986612288499575!3d42.02754818186309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ab657374b30fbb%3A0x79f6a967258e9042!2sCentral%20Fountain%20%22The%20Cup%22!5e0!3m2!1sen!2sbg!4v1773920273188!5m2!1sen!2sbg",
              mapsLink: "https://www.google.com/maps/search/?api=1&query=42.027548,23.986612",
            },
            {
              name: "Парк и Езеро Клептуза",
              details: "3.4 км – 50 мин пеш – 20 мин колело",
              mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.003913665004!2d23.978534476284!3d42.000191557760836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ab650c4ba55c57%3A0xe5d0e7f6899392b2!2sPark%20%22Kleptuza%22!5e0!3m2!1sen!2sbg!4v1773924402263!5m2!1sen!2sbg",
              mapsLink: "https://www.google.com/maps/search/?api=1&query=42.000192,23.978534",
            },
            {
              name: "Боров Парк",
              details: "700 м – 10 мин пеш – 6 мин колело",
              mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2963.72888304634!2d23.986612288499575!3d42.02754818186309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ab657b95a24eeb%3A0xa7722b5909340f3!2z0JHQvtGA0L7QsiDQv9Cw0YDQug!5e0!3m2!1sen!2sbg!4v1773920295055!5m2!1sen!2sbg",
              mapsLink: "https://www.google.com/maps/search/?api=1&query=42.027548,23.986612",
            },
            {
              name: "Парк Вельова Баня",
              details: "900 м – 12 мин пеш – 7 мин колело",
              mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1743.9832940233066!2d23.980373619196516!3d42.028749904373335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ab65c134af6897%3A0x3d3eda8e7fb7d6ca!2z0JLQtdC70YzQvtCy0LAg0LHQsNC90Y8!5e0!3m2!1sen!2sbg!4v1773920316604!5m2!1sen!2sbg",
              mapsLink: "https://www.google.com/maps/search/?api=1&query=42.028750,23.980374",
            },
          ],
        },
        {
          title: "Места за хапване",
          places: [
            {
              name: "Ресторант Боров Парк",
              details: "",
              mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1743.9832940233066!2d23.980373619196516!3d42.028749904373335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ab65679987f109%3A0x933b12b9157f94d4!2z0KDQtdGB0YLQvtGA0LDQvdGCICLQkdC-0YDQvtCyINCf0LDRgNC6Ig!5e0!3m2!1sen!2sbg!4v1773920336600!5m2!1sen!2sbg",
              mapsLink: "https://www.google.com/maps/search/?api=1&query=42.028750,23.980374",
            },
            {
              name: "Ресторант Парадайз",
              details: "",
              mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2964.310875088254!2d23.98473787628472!3d42.015062956827464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ab642d36108925%3A0xe5d0b8bdf7d7aea5!2sParadise!5e0!3m2!1sen!2sbg!4v1773920357906!5m2!1sen!2sbg",
              mapsLink: "https://www.google.com/maps/search/?api=1&query=42.015063,23.984738",
            },
            {
              name: "Механа Демеко",
              details: "",
              mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2963.203357832029!2d23.986125676285702!3d42.03881945533598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ab65d9e4c81303%3A0x6c312676687b254f!2sDemeko%20Tavern!5e0!3m2!1sen!2sbg!4v1773920376441!5m2!1sen!2sbg",
              mapsLink: "https://www.google.com/maps/search/?api=1&query=42.038819,23.986126",
            },
          ],
        },
        {
          title: "Нощен живот",
          places: [
            {
              name: "Пиано Бар Лоуис (Гранд Хотел Велинград)",
              details: "",
              mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2964.331257039775!2d23.982053676284625!3d42.014625656854896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ab652e4ae7c663%3A0xdabdbf51c26bce18!2sPiano%20Bar%20Louis%20Velingrad!5e0!3m2!1sen!2sbg!4v1773920400396!5m2!1sen!2sbg",
              mapsLink: "https://www.google.com/maps/search/?api=1&query=42.014626,23.982054",
            },
            {
              name: "Deja Vu Resto & Bar",
              details: "",
              mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2963.7832473287535!2d23.988874276285316!3d42.026382056116965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ab6564eab7e115%3A0x735a2f846c1c41bd!2sDeja%20Vu%20Resto%20%26%20Club!5e0!3m2!1sen!2sbg!4v1773920427701!5m2!1sen!2sbg",
              mapsLink: "https://www.google.com/maps/search/?api=1&query=42.026382,23.988874",
            },
            {
              name: "Club NOTO",
              details: "",
              mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2963.7832473287535!2d23.988874276285316!3d42.026382056116965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ab65f060a59e2b%3A0x7d54dc2e97ac312f!2sNOTO%20Night%20Club!5e0!3m2!1sen!2sbg!4v1773920446621!5m2!1sen!2sbg",
              mapsLink: "https://www.google.com/maps/search/?api=1&query=42.026382,23.988874",
            },
          ],
        },
        {
          title: "Аптеки",
          places: [
            {
              name: "Аптека Марешки",
              details: "140 м – 2 мин пеш",
              mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d728.2022243059697!2d23.993193037386963!3d42.02769683062919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ab65c9344ef78b%3A0x828994a62117c1a8!2z0JDQv9GC0LXQutCwICLQnNCw0YDQtdGI0LrQuCI!5e0!3m2!1sen!2sbg!4v1773920473101!5m2!1sen!2sbg",
              mapsLink: "https://www.google.com/maps/search/?api=1&query=42.027697,23.993193",
            },
            {
              name: "Аптека Пазара",
              details: "350 м – 5 мин пеш",
              mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d728.2151667228684!2d23.993738716711192!3d42.026566953643865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ab65f7498508c5%3A0x450fbd914c21065f!2z0JDQn9Ci0JXQmtCQINCf0JDQl9CQ0KDQkA!5e0!3m2!1sen!2sbg!4v1773920489346!5m2!1sen!2sbg",
              mapsLink: "https://www.google.com/maps/search/?api=1&query=42.026567,23.993739",
            },
          ],
        },
      ],
    },
    trails: {
      title: "ЕКО Пътеки",
      note: "Моля, имайте предвид, че предложените маршрути са съобразени с цел разходка пеш или с колело. За автомобилни маршрути моля използвайте Гугъл мапс.",
      items: [
        {
          name: "Маршрут 1: Старият чарк",
          distance: "4.40 км",
          difficulty: "1/3",
          duration: "Полудневна",
          water: "На местност \u201cСтарият Чарк\u201d",
          route:
            "Площад Николай Гяуров и Централен Фонтан \u201cЧашата\u201d, Пешеходен бул. Хан Аспарух, Парк и Ресторант Боров Парк, Параклис \u201cСвети Георги Победоносец\u201d, Място за отдих \u201cБарът\u201d, Местност \u201cУличките\u201d, Параклис \u201cСвети Никола\u201d, Местност \u201cСтария Чарк\u201d и Питейна Вода.",
          mapUrl: "",
        },
        {
          name: "Маршрут 2: Връх и Светилище \u201cОстрец\u201d",
          distance: "8.1 км",
          difficulty: "2/3",
          duration: "Целодневна",
          water:
            "На Макси Парк Хотел и СПА (подсигурете се, че имате достатъчно за отиване и връщане)",
          route:
            "Храм Успение Богородично, Мемориал Костница, СПА Клуб Бор, Мемориал - костница на Вела Пеева, Пейки за почивка и гледка към града + Кръст, Макси Парк Хотел и СПА, Питейна вода, Местност \u201cВойнишка Поляна\u201d, Местност \u201cХристова Поляна\u201d, Последно място (скали), Местност \u201cВазова Поляна\u201d (Беседка), Светилище \u201cОстрец\u201d, Връх \u201cОстрец\u201d.",
          mapUrl: "",
        },
      ],
    },
  },
  ru: {
    welcome: {
      title: "Добро пожаловать в Велинград!",
      intro: "Мы рады приветствовать вас. Пожалуйста, используйте это руководство, чтобы найти все необходимое для комфортного проживания и открыть для себя лучшее в спа-столице Балкан.",
      wifiLabel: "Сеть Wi-Fi:",
      wifiValue: "The Old Corner House",
      passLabel: "Пароль Wi-Fi:",
      passValue: "the-old-corner-house-39",
      phoneLabel: "Телефон хозяина:",
      phoneValue: "+359 87 9606986",
      emergencyLabel: "Экстренные службы:",
      emergencyValue: "112",
      locationLabel: "Адрес объекта:",
      locationValue: "кв. Лъджене, ул. \"Винчо Горанов\" 39",
      locationMapUrl: "https://maps.app.goo.gl/kYS4rwdpnPi2RzyeA?g_st=ic",
      essentialsTitle: "Основная информация",
      entryTitle: "Как попасть в квартиру",
      entryButtonLabel: "Инструкции по входу",
      entrySteps: [
        {
          title: "Найдите дом",
          instruction: "Ищите розовый угловой дом. Адрес: кв. Лъджене, ул. \"Винчо Горанов\" 39.",
          images: ["/images/exterior.jpg"],
        },
        {
          title: "Откройте дворовую калитку",
          instruction: "С левой стороны дома вы увидите металлическую калитку с номером 39.",
          images: ["/images/yard door.jpg"],
        },
        {
          title: "Разблокируйте засов",
          instruction: "Загляните под крышку калитки — там есть скользящий механизм замка. Сдвиньте его вправо пальцем, чтобы разблокировать.",
          images: ["/images/yard door lock.jpg", "/images/yard door lock locked.jpg", "/images/yard door lock unlocked.jpg"],
          tip: "Слева направо — разблокировать, справа налево — заблокировать.",
        },
        {
          title: "Найдите ключницу",
          instruction: "Войдя во двор, посмотрите налево. На внутренней стороне столба ограды установлена чёрная ключница.",
          images: ["/images/lockbox with cover.jpg"],
        },
        {
          title: "Откройте ключницу",
          instruction: "Откиньте защитную крышку, чтобы увидеть кодовые диски. Введите предоставленный вам код и потяните металлическую крышку вниз.",
          images: ["/images/lockbox uncovered.jpg", "/images/lockbox unlocked.jpg"],
          tip: "После извлечения ключей перемешайте код и закройте крышку.",
        },
        {
          title: "Откройте входную дверь",
          instruction: "Повернитесь — коричневая деревянная дверь прямо за вами является входом в дом. Используйте один из ключей.",
          images: ["/images/house door.jpg"],
        },
        {
          title: "Откройте дверь квартиры",
          instruction: "Войдя внутрь, справа вы увидите более светлую деревянную дверь — это дверь квартиры. Откройте её вторым ключом.",
          images: ["/images/apartment door.jpg"],
        },
        {
          title: "При выходе",
          instruction: "Пожалуйста, запирайте все двери при выходе. Важно: чтобы запереть входную дверь, ручку нужно поднять ВВЕРХ, затем повернуть ключ.",
          images: ["/images/house door lever lifted to lock.jpg"],
          tip: "Поднимите ручку вверх, затем поверните ключ. Верните ключи в ключницу и перемешайте код.",
        },
      ],
    },
    rules: {
      title: "Правила проживания",
      items: [
        "Курение в квартире строго запрещено.",
        "Пожалуйста, не ходите в обуви внутри, чтобы избежать появления грязных следов и износа покрытия.",
        "Входную дверь необходимо запирать каждый раз, когда вы уходите или возвращаетесь.",
        "Еда и прием пищи в спальнях запрещены.",
        "Пребывание незарегистрированных гостей не допускается.",
        "Пожалуйста, не бросайте влажные салфетки в унитаз.",
        "Пожалуйста, бережно относитесь к чистоте, порядку и соблюдайте тишину. (Часы тишины: с 14:00 до 16:00 и с 22:00 до 08:00).",
        "Проведение вечеринок и шумных мероприятий не допускается.",
        "Пожалуйста, выбрасывайте мусор в специально отведенные уличные контейнеры.",
        "Не забывайте выключать кондиционер, бытовые приборы и свет, когда уходите из квартиры.",
      ],
      closing:
        "Мы с заботой обустроили это место для вашего комфорта. Пожалуйста, оставляйте все вещи, принадлежащие квартире (включая полотенца, элементы декора и технику), внутри и не забирайте их с собой. Спасибо и желаем вам приятного отдыха!",
    },
    appliances: {
      title: "Инструкции по использованию техники",
      items: [
        {
          name: "Кондиционер",
          instruction:
            "Используйте пульт на стене для регулировки температуры. Пожалуйста, держите двери и окна закрытыми при включенном кондиционере.",
        },
        {
          name: "Телевизор",
          instruction:
            "Используйте главный пульт для включения и выбора смарт-приложений (Netflix, YouTube) в главном меню.",
        },
        {
          name: "Плита",
          instruction:
            "Поверните переключатель на нужный уровень нагрева. Пожалуйста, убедитесь, что конфорка полностью выключена и остыла после использования.",
        },
      ],
    },
    bikes: {
      title: "Аренда велосипедов",
      intro: "Мы предлагаем нашим гостям два полностью обслуженных велосипеда для прогулок по городу!",
      deposit: "Требуется возвратный залог в размере 50 BGN за велосипед. Залог будет возвращен при безопасном возврате велосипедов.",
      items: [
        {
          name: "Как разблокировать",
          instruction: "Код от замка для велосипедов — [Введите код].",
        },
        {
          name: "Оборудование",
          instruction: "Вы найдете насос для шин в [Введите место].",
        },
        {
          name: "Правила",
          instruction:
            "Пожалуйста, надежно запирайте велосипеды, если оставляете их без присмотра, возвращайте на прежнее место и катайтесь безопасно!",
        },
      ],
    },
    cityGuide: {
      title: "Городской путеводитель",
      categories: [
        {
          title: "Минеральные бассейны и аквапарки",
          places: [
            {
              name: "База отдыха \u2018Витоша\u2019",
              details: "1 км – 14 мин пешком – 7 мин на велосипеде (идеально для отдыха)",
              mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2963.3755852386553!2d23.995080876285527!3d42.035125855567756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ab65c78a71cc5d%3A0xd01ae0715c5800bc!2sVitosha!5e0!3m2!1sen!2sbg!4v1773920181196!5m2!1sen!2sbg",
              mapsLink: "https://www.google.com/maps/search/?api=1&query=42.035126,23.995081",
            },
            {
              name: "Аквапарк \u2018Эльбрус\u2019",
              details: "1.2 км – 17 мин пешком – 8 мин на велосипеде (идеально для детей)",
              mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2963.740119666668!2d23.976836176285264!3d42.027307156058825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ab65ea981f4b23%3A0xaee3272b32d56235!2z0KHQn9CQINCl0J7QotCV0Jsg0JXQm9CR0KDQo9Ch!5e0!3m2!1sen!2sbg!4v1773920205083!5m2!1sen!2sbg",
              mapsLink: "https://www.google.com/maps/search/?api=1&query=42.027307,23.976836",
            },
            {
              name: "Аквапарк \u2018Дельфин\u2019",
              details: "750 м – 10 мин пешком – 6 мин на велосипеде (идеально для детей)",
              mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2963.4302500374924!2d23.989976676285533!3d42.03395345564157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ab657a933621e1%3A0xaf76b248b7aa0d75!2z0JDQutCy0LDQv9Cw0YDQuiDQlNC10LvRhNC40L0!5e0!3m2!1sen!2sbg!4v1773920220392!5m2!1sen!2sbg",
              mapsLink: "https://www.google.com/maps/search/?api=1&query=42.033953,23.989977",
            },
            {
              name: "Плавательный комплекс \u2018Океана Бич\u2019",
              details: "3.7 км – 51 мин пешком – 25 мин на велосипеде",
              mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2964.902571211179!2d23.98128307628415!3d42.00236645762426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ab6535e448ff17%3A0x67c1ebeb168bc70f!2z0J7RgtC60YDQuNGCINC_0LvRg9Cy0LXQvSDQutC-0LzQv9C70LXQutGBICLQntC60LXQsNC90LjQsCDQkdC40LnRhyI!5e0!3m2!1sen!2sbg!4v1773920243656!5m2!1sen!2sbg",
              mapsLink: "https://www.google.com/maps/search/?api=1&query=42.002366,23.981283",
            },
          ],
        },
        {
          title: "Парки и места для прогулок в городе",
          places: [
            {
              name: "Центр",
              details: "200 м – 3 мин пешком",
              mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2963.72888304634!2d23.986612288499575!3d42.02754818186309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ab657374b30fbb%3A0x79f6a967258e9042!2sCentral%20Fountain%20%22The%20Cup%22!5e0!3m2!1sen!2sbg!4v1773920273188!5m2!1sen!2sbg",
              mapsLink: "https://www.google.com/maps/search/?api=1&query=42.027548,23.986612",
            },
            {
              name: "Парк и озеро Клептуза",
              details: "3.4 км – 50 мин пешком – 20 мин на велосипеде",
              mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.003913665004!2d23.978534476284!3d42.000191557760836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ab650c4ba55c57%3A0xe5d0e7f6899392b2!2sPark%20%22Kleptuza%22!5e0!3m2!1sen!2sbg!4v1773924402263!5m2!1sen!2sbg",
              mapsLink: "https://www.google.com/maps/search/?api=1&query=42.000192,23.978534",
            },
            {
              name: "Боров Парк",
              details: "700 м – 10 мин пешком – 6 мин на велосипеде",
              mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2963.72888304634!2d23.986612288499575!3d42.02754818186309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ab657b95a24eeb%3A0xa7722b5909340f3!2z0JHQvtGA0L7QsiDQv9Cw0YDQug!5e0!3m2!1sen!2sbg!4v1773920295055!5m2!1sen!2sbg",
              mapsLink: "https://www.google.com/maps/search/?api=1&query=42.027548,23.986612",
            },
            {
              name: "Парк Вельова Баня",
              details: "900 м – 12 мин пешком – 7 мин на велосипеде",
              mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1743.9832940233066!2d23.980373619196516!3d42.028749904373335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ab65c134af6897%3A0x3d3eda8e7fb7d6ca!2z0JLQtdC70YzQvtCy0LAg0LHQsNC90Y8!5e0!3m2!1sen!2sbg!4v1773920316604!5m2!1sen!2sbg",
              mapsLink: "https://www.google.com/maps/search/?api=1&query=42.028750,23.980374",
            },
          ],
        },
        {
          title: "Где поесть",
          places: [
            {
              name: "Ресторан \u2018Боров Парк\u2019",
              details: "",
              mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1743.9832940233066!2d23.980373619196516!3d42.028749904373335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ab65679987f109%3A0x933b12b9157f94d4!2z0KDQtdGB0YLQvtGA0LDQvdGCICLQkdC-0YDQvtCyINCf0LDRgNC6Ig!5e0!3m2!1sen!2sbg!4v1773920336600!5m2!1sen!2sbg",
              mapsLink: "https://www.google.com/maps/search/?api=1&query=42.028750,23.980374",
            },
            {
              name: "Ресторан \u2018Парадайз\u2019 (Paradise)",
              details: "",
              mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2964.310875088254!2d23.98473787628472!3d42.015062956827464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ab642d36108925%3A0xe5d0b8bdf7d7aea5!2sParadise!5e0!3m2!1sen!2sbg!4v1773920357906!5m2!1sen!2sbg",
              mapsLink: "https://www.google.com/maps/search/?api=1&query=42.015063,23.984738",
            },
            {
              name: "Механа (Таверна) \u2018Демеко\u2019",
              details: "",
              mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2963.203357832029!2d23.986125676285702!3d42.03881945533598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ab65d9e4c81303%3A0x6c312676687b254f!2sDemeko%20Tavern!5e0!3m2!1sen!2sbg!4v1773920376441!5m2!1sen!2sbg",
              mapsLink: "https://www.google.com/maps/search/?api=1&query=42.038819,23.986126",
            },
          ],
        },
        {
          title: "Ночная жизнь",
          places: [
            {
              name: "Пиано-бар \u2018Лоуис\u2019 (Louis) - Гранд Отель Велинград",
              details: "",
              mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2964.331257039775!2d23.982053676284625!3d42.014625656854896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ab652e4ae7c663%3A0xdabdbf51c26bce18!2sPiano%20Bar%20Louis%20Velingrad!5e0!3m2!1sen!2sbg!4v1773920400396!5m2!1sen!2sbg",
              mapsLink: "https://www.google.com/maps/search/?api=1&query=42.014626,23.982054",
            },
            {
              name: "Deja Vu Resto & Bar",
              details: "",
              mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2963.7832473287535!2d23.988874276285316!3d42.026382056116965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ab6564eab7e115%3A0x735a2f846c1c41bd!2sDeja%20Vu%20Resto%20%26%20Club!5e0!3m2!1sen!2sbg!4v1773920427701!5m2!1sen!2sbg",
              mapsLink: "https://www.google.com/maps/search/?api=1&query=42.026382,23.988874",
            },
            {
              name: "Club NOTO",
              details: "",
              mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2963.7832473287535!2d23.988874276285316!3d42.026382056116965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ab65f060a59e2b%3A0x7d54dc2e97ac312f!2sNOTO%20Night%20Club!5e0!3m2!1sen!2sbg!4v1773920446621!5m2!1sen!2sbg",
              mapsLink: "https://www.google.com/maps/search/?api=1&query=42.026382,23.988874",
            },
          ],
        },
        {
          title: "Аптеки",
          places: [
            {
              name: "Аптека \u2018Марешки\u2019",
              details: "140 м – 2 мин пешком",
              mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d728.2022243059697!2d23.993193037386963!3d42.02769683062919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ab65c9344ef78b%3A0x828994a62117c1a8!2z0JDQv9GC0LXQutCwICLQnNCw0YDQtdGI0LrQuCI!5e0!3m2!1sen!2sbg!4v1773920473101!5m2!1sen!2sbg",
              mapsLink: "https://www.google.com/maps/search/?api=1&query=42.027697,23.993193",
            },
            {
              name: "Аптека \u2018Пазара\u2019",
              details: "350 м – 5 мин пешком",
              mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d728.2151667228684!2d23.993738716711192!3d42.026566953643865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ab65f7498508c5%3A0x450fbd914c21065f!2z0JDQn9Ci0JXQmtCQINCf0JDQl9CQ0KDQkA!5e0!3m2!1sen!2sbg!4v1773920489346!5m2!1sen!2sbg",
              mapsLink: "https://www.google.com/maps/search/?api=1&query=42.026567,23.993739",
            },
          ],
        },
      ],
    },
    trails: {
      title: "Эко-тропы и пешеходные маршруты",
      note: "Примечание: Пожалуйста, обратите внимание, что предложенные маршруты предназначены для пеших или велосипедных прогулок. Для автомобильных маршрутов используйте Google Maps.",
      items: [
        {
          name: "Маршрут 1: Старый Чарк (Старият чарк)",
          distance: "4.40 км",
          difficulty: "1/3",
          duration: "Полдня",
          water: "В местности \u2018Старый Чарк\u2019",
          route:
            "Площадь Николая Гяурова и центральный фонтан \u2018Чаша\u2019, Пешеходный бульвар Хан Аспарух, Парк и ресторан \u2018Боров Парк\u2019, Часовня Святого Георгия Победоносца, Место для отдыха \u2018Бар\u2019, Местность \u2018Улочки\u2019 (Уличките), Часовня Святого Николая, Местность \u2018Старый Чарк\u2019 и питьевая вода.",
          mapUrl: "",
        },
        {
          name: "Маршрут 2: Вершина и Святилище \u2018Острец\u2019",
          distance: "8.1 км",
          difficulty: "2/3",
          duration: "Весь день",
          water:
            "У Maxi Park Hotel & Spa (убедитесь, что у вас достаточно воды туда и обратно)",
          route:
            "Храм Успения Пресвятой Богородицы, Мемориал-костница, SPA Club Bor, Мемориал-костница Велы Пеевой, Скамейки для отдыха с видом на город + Крест, Maxi Park Hotel & Spa, Питьевая вода, Местность \u2018Войнишка Поляна\u2019, Местность \u2018Христова Поляна\u2019, Последнее место для отдыха (скалы), Местность \u2018Вазова Поляна\u2019 (Беседка), Святилище \u2018Острец\u2019, Вершина \u2018Острец\u2019.",
          mapUrl: "",
        },
      ],
    },
  },
};

export const navLabels: Record<Lang, Record<string, string>> = {
  en: {
    home: "Home",
    photos: "Photos",
    rules: "Rules",
    appliances: "Appliances",
    bikes: "Bikes",
    "city-guide": "City Guide",
    trails: "Trails",
  },
  bg: {
    home: "Начало",
    photos: "Снимки",
    rules: "Правила",
    appliances: "Уреди",
    bikes: "Колела",
    "city-guide": "Градски Гид",
    trails: "Пътеки",
  },
  ru: {
    home: "Главная",
    photos: "Фото",
    rules: "Правила",
    appliances: "Техника",
    bikes: "Велосипеды",
    "city-guide": "Гид по городу",
    trails: "Тропы",
  },
};
