export type Lang = "en" | "bg" | "ru";

export const supportedLanguages: Lang[] = ["en", "bg", "ru"];

export const languageNames: Record<Lang, string> = {
  en: "English",
  bg: "Български",
  ru: "Русский",
};

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
  items: BikeItem[];
}

export interface Place {
  name: string;
  details: string;
  mapUrl: string;
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
      wifiValue: "[Insert Network Name]",
      passLabel: "Wi-Fi Password:",
      passValue: "[Insert Password]",
      phoneLabel: "Host Phone Number:",
      phoneValue: "[Insert Your Number]",
      emergencyLabel: "Emergency Number:",
      emergencyValue: "112",
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
              mapUrl: "",
            },
            {
              name: "Elbrus Aquapark",
              details: "1.2 km – 17 min walk – 8 min bike (Ideal for kids)",
              mapUrl: "",
            },
            {
              name: "Delfin Aquapark",
              details: "750 m – 10 min walk – 6 min bike (Ideal for kids)",
              mapUrl: "",
            },
            {
              name: "Oceana Beach Swimming Complex",
              details: "3.7 km – 51 min walk – 25 min bike",
              mapUrl: "",
            },
          ],
        },
        {
          title: "Parks & City Walks",
          places: [
            { name: "City Center", details: "200 m – 3 min walk", mapUrl: "" },
            {
              name: "Kleptuza Park & Lake",
              details: "3.4 km – 50 min walk – 20 min bike",
              mapUrl: "",
            },
            {
              name: "Borov Park",
              details: "700 m – 10 min walk – 6 min bike",
              mapUrl: "",
            },
            {
              name: "Velyova Banya Park",
              details: "900 m – 12 min walk – 7 min bike",
              mapUrl: "",
            },
          ],
        },
        {
          title: "Dining",
          places: [
            { name: "Restaurant Borov Park", details: "", mapUrl: "" },
            { name: "Restaurant Paradise", details: "", mapUrl: "" },
            { name: "Tavern (Mehana) Demeko", details: "", mapUrl: "" },
          ],
        },
        {
          title: "Nightlife",
          places: [
            {
              name: "Piano Bar Louis (Grand Hotel Velingrad)",
              details: "",
              mapUrl: "",
            },
            { name: "Deja Vu Resto & Bar", details: "", mapUrl: "" },
            { name: "Club NOTO", details: "", mapUrl: "" },
          ],
        },
        {
          title: "Pharmacies",
          places: [
            {
              name: "Mareski Pharmacy",
              details: "140 m – 2 min walk",
              mapUrl: "",
            },
            {
              name: "Pazara Pharmacy",
              details: "350 m – 5 min walk",
              mapUrl: "",
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
      wifiValue: "[Въведете Име на Мрежата]",
      passLabel: "Wi-Fi Парола:",
      passValue: "[Въведете Парола]",
      phoneLabel: "Телефон на домакина:",
      phoneValue: "[Въведете Вашия Номер]",
      emergencyLabel: "Спешни случаи:",
      emergencyValue: "112",
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
              mapUrl: "",
            },
            {
              name: "Аквапарк Елбрус",
              details:
                "1.2 км – 17 мин пеш – 8 мин колело (идеално за деца)",
              mapUrl: "",
            },
            {
              name: "Аквапарк Делфин",
              details:
                "750 м – 10 мин пеш – 6 мин колело (идеално за деца)",
              mapUrl: "",
            },
            {
              name: "Плувен комплекс \u201cОкеана Бийч\u201d",
              details: "3.7 км – 51 мин пеш – 25 мин колело",
              mapUrl: "",
            },
          ],
        },
        {
          title: "Паркове и места за разходка в града",
          places: [
            { name: "Център", details: "200 м – 3 мин пеш", mapUrl: "" },
            {
              name: "Парк и Езеро Клептуза",
              details: "3.4 км – 50 мин пеш – 20 мин колело",
              mapUrl: "",
            },
            {
              name: "Боров Парк",
              details: "700 м – 10 мин пеш – 6 мин колело",
              mapUrl: "",
            },
            {
              name: "Парк Вельова Баня",
              details: "900 м – 12 мин пеш – 7 мин колело",
              mapUrl: "",
            },
          ],
        },
        {
          title: "Места за хапване",
          places: [
            { name: "Ресторант Боров Парк", details: "", mapUrl: "" },
            { name: "Ресторант Парадайз", details: "", mapUrl: "" },
            { name: "Механа Демеко", details: "", mapUrl: "" },
          ],
        },
        {
          title: "Нощен живот",
          places: [
            {
              name: "Пиано Бар Лоуис (Гранд Хотел Велинград)",
              details: "",
              mapUrl: "",
            },
            { name: "Deja Vu Resto & Bar", details: "", mapUrl: "" },
            { name: "Club NOTO", details: "", mapUrl: "" },
          ],
        },
        {
          title: "Аптеки",
          places: [
            {
              name: "Аптека Марешки",
              details: "140 м – 2 мин пеш",
              mapUrl: "",
            },
            {
              name: "Аптека Пазара",
              details: "350 м – 5 мин пеш",
              mapUrl: "",
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
      wifiValue: "[Введите имя сети]",
      passLabel: "Пароль Wi-Fi:",
      passValue: "[Введите пароль]",
      phoneLabel: "Телефон хозяина:",
      phoneValue: "[Введите ваш номер]",
      emergencyLabel: "Экстренные службы:",
      emergencyValue: "112",
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
              details:
                "1 км – 14 мин пешком – 7 мин на велосипеде (идеально для отдыха)",
              mapUrl: "",
            },
            {
              name: "Аквапарк \u2018Эльбрус\u2019",
              details:
                "1.2 км – 17 мин пешком – 8 мин на велосипеде (идеально для детей)",
              mapUrl: "",
            },
            {
              name: "Аквапарк \u2018Дельфин\u2019",
              details:
                "750 м – 10 мин пешком – 6 мин на велосипеде (идеально для детей)",
              mapUrl: "",
            },
            {
              name: "Плавательный комплекс \u2018Океана Бич\u2019",
              details: "3.7 км – 51 мин пешком – 25 мин на велосипеде",
              mapUrl: "",
            },
          ],
        },
        {
          title: "Парки и места для прогулок в городе",
          places: [
            { name: "Центр", details: "200 м – 3 мин пешком", mapUrl: "" },
            {
              name: "Парк и озеро Клептуза",
              details: "3.4 км – 50 мин пешком – 20 мин на велосипеде",
              mapUrl: "",
            },
            {
              name: "Боров Парк",
              details: "700 м – 10 мин пешком – 6 мин на велосипеде",
              mapUrl: "",
            },
            {
              name: "Парк Вельова Баня",
              details: "900 м – 12 мин пешком – 7 мин на велосипеде",
              mapUrl: "",
            },
          ],
        },
        {
          title: "Где поесть",
          places: [
            { name: "Ресторан \u2018Боров Парк\u2019", details: "", mapUrl: "" },
            {
              name: "Ресторан \u2018Парадайз\u2019 (Paradise)",
              details: "",
              mapUrl: "",
            },
            {
              name: "Механа (Таверна) \u2018Демеко\u2019",
              details: "",
              mapUrl: "",
            },
          ],
        },
        {
          title: "Ночная жизнь",
          places: [
            {
              name: "Пиано-бар \u2018Лоуис\u2019 (Louis) - Гранд Отель Велинград",
              details: "",
              mapUrl: "",
            },
            { name: "Deja Vu Resto & Bar", details: "", mapUrl: "" },
            { name: "Club NOTO", details: "", mapUrl: "" },
          ],
        },
        {
          title: "Аптеки",
          places: [
            {
              name: "Аптека \u2018Марешки\u2019",
              details: "140 м – 2 мин пешком",
              mapUrl: "",
            },
            {
              name: "Аптека \u2018Пазара\u2019",
              details: "350 м – 5 мин пешком",
              mapUrl: "",
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
    rules: "Rules",
    appliances: "Appliances",
    bikes: "Bikes",
    "city-guide": "City Guide",
    trails: "Trails",
  },
  bg: {
    home: "Начало",
    rules: "Правила",
    appliances: "Уреди",
    bikes: "Колела",
    "city-guide": "Градски Гид",
    trails: "Пътеки",
  },
  ru: {
    home: "Главная",
    rules: "Правила",
    appliances: "Техника",
    bikes: "Велосипеды",
    "city-guide": "Гид по городу",
    trails: "Тропы",
  },
};
