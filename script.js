const wedwed = (path) => {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  if (path.startsWith("assets/") || path.startsWith("./")) return path;
  return `https://wedwed.ru${path}`;
};

const contactUrl = "#contacts";
const fallbackPreview = "assets/catalog/main-catalog.png";
const unavailableMessage = "Сайт пока что находится в разработке. Я могу сделать его под ваш праздник, но посмотреть этот вариант в каталоге пока не получится. Напишите мне в личные сообщения — я вышлю видео, как он выглядит.";
const loadMoreCount = 6;
const getInitialVisibleCount = () => 6;

const cardLabels = {
  "love is": "Новинка",
  "Зимняя сказка": "Новинка",
  "Дело в любви": "Новинка",
  "Лимонное настроение": "Новинка",
  "lilies": "Бестселлер",
  "Жемчужина": "Новинка",
  "Свадебный билет": "Популярный",
  "Сад нежности": "Популярный",
  "Сад огней": "Детальный дизайн",
  "Море": "Новинка",
  "Бархатный сентябрь": "Новинка",
  "letter": "Новинка",
  "Записка": "Новинка",
  "Тихая классика": "Бестселлер",
  "Ботанический сад": "Популярный",
  "Бордовая линия": "Детальный дизайн",
  "90-е": "Необычный дизайн",
  "В полете": "Необычный дизайн",
  "Love Letter": "Популярный",
  "Наша история": "Бестселлер",
  "Оливковый сад": "Популярный",
  "Чистая линия": "Лаконичный дизайн",
  "Свадебный вестник": "Необычный дизайн",
  "Тренд 2026": "Тренд 2026",
  "Шелк": "Новинка",
  "Любовь навсегда": "Новинка",
  "Золотая ботаника": "Новинка",
  "Легкость": "Новинка",
  "Золотой юбилей": "Популярный",
  "Noir Party": "Новинка",
};

const recommendedOrder = [
  "lilies",
  "Зимняя сказка",
  "Дело в любви",
  "Лимонное настроение",
  "Свадебный билет",
  "Море",
  "Тихая классика",
  "love is",
  "Сад огней",
  "Наша история",
  "Сад нежности",
  "Ботанический сад",
  "Жемчужина",
  "Бархатный сентябрь",
  "letter",
  "В полете",
  "Записка",
  "Love Letter",
  "Оливковый сад",
  "Чистая линия",
  "Бордовая линия",
  "90-е",
  "Свадебный вестник",
  "Тренд 2026",
  "Шелк",
  "Любовь навсегда",
  "Золотая ботаника",
  "Легкость",
  "Noir Party",
  "Золотой юбилей"
];

const sites = [
  {
    "title": "love is",
    "category": "Свадебные сайты",
    "format": "Свадьба",
    "mood": "Готовый шаблон",
    "coverImage": "assets/catalog/love-is-cover.jpg",
    "previewDesktop": "assets/catalog/love-is-cover.jpg",
    "previewMobile": "assets/catalog/love-is-cover.jpg",
    "url": "https://kvguliaeva.github.io/wedding_example9/",
    "description": "Современное свадебное приглашение с эмоциональной красной типографикой, полароидными фотографиями, таймингом, дресс-кодом, пожеланиями и анкетой гостей.",
    "price": "2000 ₽",
    "tags": [
      "свадьба",
      "красный",
      "готовый сайт"
    ],
    "palette": [
      "#fff8ec",
      "#d51016",
      "#181310",
      "#c89d86",
      "#ffffff"
    ]
  },
  {
    "title": "Лимонное настроение",
    "category": "Свадебные сайты",
    "format": "Свадьба",
    "mood": "Готовый шаблон",
    "coverImage": "assets/catalog/lemon-mood-cover.jpg",
    "previewDesktop": "assets/catalog/lemon-mood-cover.jpg",
    "previewMobile": "assets/catalog/lemon-mood-cover.jpg",
    "url": "https://kvguliaeva.github.io/wedding_lemon/",
    "description": "Солнечный свадебный сайт в средиземноморской эстетике: лимоны, синяя керамика, цветочные детали, тайминг, локация, дресс-код, анкета гостей и контакты.",
    "price": "2000 ₽",
    "tags": [
      "свадьба",
      "средиземноморье",
      "готовый сайт"
    ],
    "palette": [
      "#f7edc9",
      "#f2c530",
      "#2854a1",
      "#6d7b45",
      "#ffffff"
    ]
  },
  {
    "title": "lilies",
    "category": "Свадебные сайты",
    "format": "Свадьба",
    "mood": "Готовый шаблон",
    "coverImage": "assets/catalog/wedding-example6-lilies-cover.png",
    "previewDesktop": "assets/catalog/wedding-example6-lilies-cover.png",
    "previewMobile": "assets/catalog/wedding-example6-lilies-cover.png",
    "url": "https://kvguliaeva.github.io/lilies2/",
    "variants": [
      {
        "name": "Розовый",
        "url": "https://kvguliaeva.github.io/lilies2/",
        "color": "#eaa0b8",
        "textColor": "#7a3950"
      },
      {
        "name": "Оранжевый",
        "url": "https://kvguliaeva.github.io/wedding_artem_ksenia5/",
        "color": "#f0a45d",
        "textColor": "#5d3212"
      }
    ],
    "description": "Нежный свадебный сайт с лилиями, розовой каллиграфией и мягкой акварельной зеленью: приглашение, программа дня, дресс-код, локация, пожелания, ответы на вопросы и анкета гостей.",
    "price": "2500 ₽",
    "priceNote": "Стоимость выше из-за повышенной сложности реализации и большого количества декоративных деталей.",
    "tags": [
      "свадьба",
      "лилии",
      "готовый сайт"
    ],
    "palette": [
      "#fff6df",
      "#eaa0b8",
      "#8b9564",
      "#b98f68",
      "#ffffff"
    ]
  },
  {
    "title": "Жемчужина",
    "category": "Свадебные сайты",
    "format": "Свадьба",
    "mood": "Готовый шаблон",
    "coverImage": "assets/catalog/wedding-2-pearl-cover.png",
    "previewDesktop": "assets/catalog/wedding-2-pearl-cover.png",
    "previewMobile": "assets/catalog/wedding-2-pearl-cover.png",
    "url": "https://kvguliaeva.github.io/pearl/",
    "description": "Изысканный свадебный сайт в жемчужно-молочной эстетике: нежные ленты, перламутровые детали, расписание дня, локация, дресс-код, пожелания и анкета гостей.",
    "price": "2500 ₽",
    "priceNote": "Стоимость выше из-за повышенной сложности реализации и большого количества декоративных деталей.",
    "tags": [
      "свадьба",
      "жемчуг",
      "готовый сайт"
    ],
    "palette": [
      "#fbf7ee",
      "#d8c7ad",
      "#9b8a7f",
      "#7d93a8",
      "#ffffff"
    ]
  },
  {
    "title": "Свадебный билет",
    "category": "Свадебные сайты",
    "format": "Свадьба",
    "mood": "Готовый шаблон",
    "coverImage": "assets/catalog/wedding-example5-ticket-cover.png",
    "previewDesktop": "assets/catalog/wedding-example5-ticket-cover.png",
    "previewMobile": "assets/catalog/wedding-example5-ticket-cover.png",
    "url": "https://kvguliaeva.github.io/wedding_example5/",
    "description": "Элегантный свадебный сайт в эстетике билета и путешествия: темно-синяя палитра, календарь, тайминг, локация, дресс-код, пожелания и контакты гостей.",
    "price": "1500 ₽",
    "tags": [
      "свадьба",
      "билет",
      "готовый сайт"
    ],
    "palette": [
      "#081a33",
      "#ffffff",
      "#d8d0c4",
      "#0d0d0f",
      "#b21d22"
    ]
  },
  {
    "title": "Сад нежности",
    "category": "Свадебные сайты",
    "format": "Свадьба",
    "mood": "Готовый шаблон",
    "coverImage": "assets/catalog/ivan-sofia-cover.png",
    "previewDesktop": "assets/catalog/ivan-sofia-cover.png",
    "previewMobile": "assets/catalog/ivan-sofia-cover.png",
    "url": "https://letterwedding.github.io/wedding_ivan_sofia/",
    "description": "Нежный свадебный сайт в пастельной палитре: программа дня, дресс-код, пожелания гостям и анкета в одном красивом приглашении.",
    "price": "1500 ₽",
    "tags": [
      "свадьба",
      "пастель",
      "готовый сайт"
    ],
    "palette": [
      "#f5d2e6",
      "#eef6dd",
      "#f8eadb",
      "#ffffff",
      "#2f2525"
    ]
  },
  {
    "title": "Сад огней",
    "category": "Свадебные сайты",
    "format": "Свадьба",
    "mood": "Готовый шаблон",
    "coverImage": "assets/catalog/wedding-example3-garden-lights-cover.png",
    "previewDesktop": "assets/catalog/wedding-example3-garden-lights-cover.png",
    "previewMobile": "assets/catalog/wedding-example3-garden-lights-cover.png",
    "url": "https://kvguliaeva.github.io/wedding_example3/",
    "description": "Атмосферный свадебный сайт в глубокой зеленой палитре с ботаникой, огоньками и мягкой вечерней эстетикой: приглашение, локация, тайминг, дресс-код, пожелания, контакты и анкета гостей.",
    "price": "2000 ₽",
    "priceNote": "Стоимость выше из-за сложности реализации и декоративного оформления.",
    "tags": [
      "свадьба",
      "зелень",
      "готовый сайт"
    ],
    "palette": [
      "#263a25",
      "#f5efe4",
      "#d7c7aa",
      "#ffffff",
      "#111111"
    ]
  },
  {
    "title": "Море",
    "category": "Свадебные сайты",
    "format": "Свадьба",
    "mood": "Готовый шаблон",
    "coverImage": "assets/catalog/sea-wedding-cover.jpg",
    "previewDesktop": "assets/catalog/sea-wedding-cover.jpg",
    "previewMobile": "assets/catalog/sea-wedding-cover.jpg",
    "url": "https://kvguliaeva.github.io/examlpe/",
    "description": "Воздушный свадебный сайт в жемчужно-голубой эстетике: кружево, морские детали, тайминг, локация, дресс-код, контакты, анкета гостей и финальный экран.",
    "price": "2000 ₽",
    "tags": [
      "свадьба",
      "море",
      "готовый сайт"
    ],
    "palette": [
      "#f8f4eb",
      "#b9d1ef",
      "#8eafd8",
      "#d7c7ad",
      "#ffffff"
    ]
  },
  {
    "title": "Бархатный сентябрь",
    "category": "Свадебные сайты",
    "format": "Свадьба",
    "mood": "Готовый шаблон",
    "coverImage": "assets/catalog/velvet-september-cover.jpg",
    "previewDesktop": "assets/catalog/velvet-september-cover.jpg",
    "previewMobile": "assets/catalog/velvet-september-cover.jpg",
    "url": "https://kvguliaeva.github.io/wedding_aleksandr_milena/",
    "description": "Тёплый свадебный сайт в эстетике бархатного сентября: шоколадные оттенки, выразительная каллиграфия, локация, тайминг, дресс-код, пожелания, контакты и анкета гостей.",
    "price": "1500 ₽",
    "tags": [
      "свадьба",
      "осень",
      "готовый сайт"
    ],
    "palette": [
      "#ffffff",
      "#f0e6dc",
      "#bfa491",
      "#6b3b2c",
      "#40251f"
    ]
  },
  {
    "title": "letter",
    "category": "Свадебные сайты",
    "format": "Свадьба",
    "mood": "Готовый шаблон",
    "coverImage": "assets/catalog/letter-olive-cover.png",
    "previewDesktop": "assets/catalog/letter-olive-cover.png",
    "previewMobile": "assets/catalog/letter-olive-cover.png",
    "url": "https://kvguliaeva.github.io/letter2/",
    "description": "Стильный свадебный сайт в эстетике личного письма: оливковые акценты, выразительная типографика, место проведения, программа дня, дресс-код, пожелания, фотогалерея и анкета гостей.",
    "price": "2000 ₽",
    "priceNote": "Стоимость выше из-за детального оформления и большого количества декоративных элементов.",
    "tags": [
      "свадьба",
      "письмо",
      "готовый сайт"
    ],
    "palette": [
      "#ffffff",
      "#879874",
      "#66745a",
      "#d9d2c4",
      "#171717"
    ]
  },
  {
    "title": "Записка",
    "category": "Свадебные сайты",
    "format": "Свадьба",
    "mood": "Готовый шаблон",
    "coverImage": "assets/catalog/wedding-example4-note-cover.png",
    "previewDesktop": "assets/catalog/wedding-example4-note-cover.png",
    "previewMobile": "assets/catalog/wedding-example4-note-cover.png",
    "url": "https://kvguliaeva.github.io/wedding_example4/",
    "description": "Легкий свадебный сайт в стиле милой рукописной записки: синие акценты, скетчи, программа дня, дресс-код, таймер, пожелания, контакты и анкета гостей.",
    "price": "1500 ₽",
    "tags": [
      "свадьба",
      "скетчи",
      "готовый сайт"
    ],
    "palette": [
      "#ffffff",
      "#1555d9",
      "#f2eadf",
      "#111111",
      "#d4b894"
    ]
  },
  {
    "title": "Тихая классика",
    "category": "Свадебные сайты",
    "format": "Свадьба",
    "mood": "Готовый шаблон",
    "coverImage": "assets/catalog/aleksandra-nikita-cover.png",
    "previewDesktop": "assets/catalog/aleksandra-nikita-cover.png",
    "previewMobile": "assets/catalog/aleksandra-nikita-cover.png",
    "url": "https://letterwedding.github.io/wedding_aleksandra_nikita/",
    "description": "Сдержанный свадебный сайт в эстетике черно-белой классики: тайминг, локации, дресс-код, контакты, пожелания и анкета гостей. Есть версии в других цветах.",
    "price": "1500 ₽",
    "tags": [
      "свадьба",
      "классика",
      "3 цветовые версии"
    ],
    "palette": [
      "#f6f1ea",
      "#d8cec3",
      "#ffffff",
      "#111111",
      "#a80306"
    ],
    "variants": [
      {
        "name": "Классический",
        "url": "https://letterwedding.github.io/wedding_aleksandra_nikita/",
        "color": "#111111",
        "textColor": "#ffffff"
      },
      {
        "name": "Голубой",
        "url": "https://letterwedding.github.io/wedding_alia_rishat/",
        "color": "#c8d8e8",
        "textColor": "#283c4d"
      },
      {
        "name": "Розовый",
        "url": "https://letterwedding.github.io/wedding_roman_gulnara/",
        "color": "#f3c6d3",
        "textColor": "#73364d"
      }
    ]
  },
  {
    "title": "Ботанический сад",
    "category": "Свадебные сайты",
    "format": "Свадьба",
    "mood": "Готовый шаблон",
    "coverImage": "assets/catalog/anast-serg-cover.png",
    "previewDesktop": "assets/catalog/anast-serg-cover.png",
    "previewMobile": "assets/catalog/anast-serg-cover.png",
    "url": "https://letterwedding.github.io/wedding_anast_serg/",
    "description": "Светлый свадебный сайт с ботаническими деталями, мягкой зеленью, картой, программой дня, дресс-кодом и анкетой гостей. Есть версия в другом цвете.",
    "price": "1500 ₽",
    "tags": [
      "свадьба",
      "ботаника",
      "2 цветовые версии"
    ],
    "palette": [
      "#f6f1e6",
      "#cfe7b9",
      "#d8c5a8",
      "#ffffff",
      "#3d372d"
    ],
    "variants": [
      {
        "name": "Зеленый",
        "url": "https://letterwedding.github.io/wedding_anast_serg/",
        "color": "#cfe7b9",
        "textColor": "#314326"
      },
      {
        "name": "Розовый",
        "url": "https://letterwedding.github.io/wedding_andr_alisa/",
        "color": "#f0c6d1",
        "textColor": "#6f3847"
      }
    ]
  },
  {
    "title": "Бордовая линия",
    "category": "Свадебные сайты",
    "format": "Свадьба",
    "mood": "Готовый шаблон",
    "coverImage": "assets/catalog/lev-yana-cover.png",
    "previewDesktop": "assets/catalog/lev-yana-cover.png",
    "previewMobile": "assets/catalog/lev-yana-cover.png",
    "url": "https://letterwedding.github.io/wedding_lev_yana/",
    "description": "Элегантный свадебный сайт с бордовыми акцентами, конвертной эстетикой и тонкими линиями от руки: тайминг, дресс-код, контакты, локация и анкета гостей.",
    "price": "2000 ₽",
    "priceNote": "Стоимость выше из-за сложности реализации и декоративного оформления.",
    "tags": [
      "свадьба",
      "бордо",
      "готовый сайт"
    ],
    "palette": [
      "#f7efe6",
      "#a8332d",
      "#dac8b8",
      "#ffffff",
      "#2d2523"
    ]
  },
  {
    "title": "90-е",
    "category": "Свадебные сайты",
    "format": "Свадьба",
    "mood": "Готовый шаблон",
    "coverImage": "assets/catalog/elizav-dmitr-90s-cover.png",
    "previewDesktop": "assets/catalog/elizav-dmitr-90s-cover.png",
    "previewMobile": "assets/catalog/elizav-dmitr-90s-cover.png",
    "url": "https://letterwedding.github.io/wedding_elizav_dmitr/",
    "description": "Яркий свадебный сайт в стиле 90-х: кассеты, пленка, желто-красные акценты, программа дня, дресс-код, пожелания и анкета гостей в формате ностальгичной вечеринки.",
    "price": "2000 ₽",
    "priceNote": "Стоимость выше из-за сложности реализации и декоративного оформления.",
    "tags": [
      "свадьба",
      "ретро",
      "готовый сайт"
    ],
    "palette": [
      "#f3ead4",
      "#f4b327",
      "#c42118",
      "#1f1c18",
      "#ffffff"
    ]
  },
  {
    "title": "В полете",
    "category": "Свадебные сайты",
    "format": "Свадьба",
    "mood": "Готовый шаблон",
    "coverImage": "assets/catalog/anna-ilya-flight-cover.png",
    "previewDesktop": "assets/catalog/anna-ilya-flight-cover.png",
    "previewMobile": "assets/catalog/anna-ilya-flight-cover.png",
    "url": "https://letterwedding.github.io/wedding_anna_ilya/",
    "description": "Романтичный свадебный сайт с авиационной темой: посадочный талон, самолетики, нежные розовые акценты, тайминг, дресс-код, контакты и анкета гостей.",
    "price": "2000 ₽",
    "priceNote": "Стоимость выше из-за сложности реализации и декоративного оформления.",
    "tags": [
      "свадьба",
      "путешествие",
      "готовый сайт"
    ],
    "palette": [
      "#d7c5b2",
      "#f35c9d",
      "#f4d9d7",
      "#ffffff",
      "#3a302b"
    ]
  },
  {
    "title": "Love Letter",
    "category": "Свадебные сайты",
    "format": "Свадьба",
    "mood": "Готовый шаблон",
    "coverImage": "assets/catalog/stefan-victoria-love-cover.png",
    "previewDesktop": "assets/catalog/stefan-victoria-love-cover.png",
    "previewMobile": "assets/catalog/stefan-victoria-love-cover.png",
    "url": "https://letterwedding.github.io/wedding_stefan_victoria/",
    "description": "Романтичный свадебный сайт в розово-бордовой палитре с крупной типографикой LOVE, конвертами, локациями, таймингом, дресс-кодом и анкетой гостей.",
    "price": "1500 ₽",
    "tags": [
      "свадьба",
      "love",
      "готовый сайт"
    ],
    "palette": [
      "#f8cfd8",
      "#8e1110",
      "#f6e3dd",
      "#ffffff",
      "#3b1717"
    ]
  },
  {
    "title": "Наша история",
    "category": "Свадебные сайты",
    "format": "Свадьба",
    "mood": "Готовый шаблон",
    "coverImage": "assets/catalog/polina-arseniy-story-cover.png",
    "previewDesktop": "assets/catalog/polina-arseniy-story-cover.png",
    "previewMobile": "assets/catalog/polina-arseniy-story-cover.png",
    "url": "https://letterwedding.github.io/wedding_polina_arseniy/",
    "description": "Лаконичный свадебный сайт с акцентом на историю пары и фотогалерею: детали дня, локация, дресс-код, таймер, подтверждение присутствия и анкета гостей.",
    "price": "1500 ₽",
    "tags": [
      "свадьба",
      "фотоистория",
      "готовый сайт"
    ],
    "palette": [
      "#f7f4ef",
      "#c8b29b",
      "#8a6a55",
      "#ffffff",
      "#252321"
    ]
  },
  {
    "title": "Оливковый сад",
    "category": "Свадебные сайты",
    "format": "Свадьба",
    "mood": "Готовый шаблон",
    "coverImage": "assets/catalog/olga-andrey-olive-cover.png",
    "previewDesktop": "assets/catalog/olga-andrey-olive-cover.png",
    "previewMobile": "assets/catalog/olga-andrey-olive-cover.png",
    "url": "https://letterwedding.github.io/wedding_olga_andrey/",
    "description": "Спокойный свадебный сайт в оливковой палитре для камерного загородного праздника: программа дня, локация с картой, дресс-код, пожелания, музыка вечера и анкета гостей.",
    "price": "1500 ₽",
    "tags": [
      "свадьба",
      "олива",
      "готовый сайт"
    ],
    "palette": [
      "#f2efe6",
      "#5f6f2e",
      "#9d8a67",
      "#ffffff",
      "#1d1b16"
    ]
  },
  {
    "title": "Чистая линия",
    "category": "Свадебные сайты",
    "format": "Свадьба",
    "mood": "Готовый шаблон",
    "coverImage": "assets/catalog/kristina-konstantin-minimal-cover.png",
    "previewDesktop": "assets/catalog/kristina-konstantin-minimal-cover.png",
    "previewMobile": "assets/catalog/kristina-konstantin-minimal-cover.png",
    "url": "https://letterwedding.github.io/wedding_kristina_konstantin/",
    "description": "Минималистичный свадебный сайт в светлой монохромной эстетике: календарь, локация, тайминг, дресс-код, пожелания, анкета гостей и аккуратный финальный экран.",
    "price": "1500 ₽",
    "tags": [
      "свадьба",
      "минимализм",
      "готовый сайт"
    ],
    "palette": [
      "#f7f5f1",
      "#d9d5cd",
      "#a79f94",
      "#ffffff",
      "#171717"
    ]
  },
  {
    "title": "Свадебный вестник",
    "category": "Свадебные сайты",
    "format": "Свадьба",
    "mood": "Готовый шаблон",
    "coverImage": "assets/catalog/olga-roman-vestnik-cover.png",
    "previewDesktop": "assets/catalog/olga-roman-vestnik-cover.png",
    "previewMobile": "assets/catalog/olga-roman-vestnik-cover.png",
    "url": "https://letterwedding.github.io/wedding_olga_roman/",
    "description": "Свадебный сайт в стиле газетного выпуска: выразительная типографика, черно-белая верстка, место проведения, тайминг, дресс-код, пожелания и подробная анкета гостей.",
    "price": "1500 ₽",
    "tags": [
      "свадьба",
      "газета",
      "готовый сайт"
    ],
    "palette": [
      "#f4f1eb",
      "#b02b2b",
      "#d8d2c8",
      "#ffffff",
      "#111111"
    ]
  },
  {
    "title": "Тренд 2026",
    "category": "Свадебные сайты",
    "format": "Свадьба",
    "mood": "Готовый шаблон",
    "coverImage": "assets/catalog/semen-svetlana-contrast-cover.png",
    "previewDesktop": "assets/catalog/semen-svetlana-contrast-cover.png",
    "previewMobile": "assets/catalog/semen-svetlana-contrast-cover.png",
    "url": "https://letterwedding.github.io/wedding_semen_svetlana/",
    "variants": [
      {
        "name": "Классический",
        "url": "https://letterwedding.github.io/wedding_semen_svetlana/",
        "color": "#111111",
        "textColor": "#ffffff"
      },
      {
        "name": "Красный",
        "url": "https://letterwedding.github.io/wedding_polina_nikita/",
        "color": "#a51f2d",
        "textColor": "#ffffff"
      }
    ],
    "description": "Контрастный свадебный сайт в актуальной эстетике: строгая типографика, календарь, тайминг, дресс-код, пожелания, анкета гостей и финальный экран. Доступен в классическом и красном цветах.",
    "price": "1500 ₽",
    "tags": [
      "свадьба",
      "тренд 2026",
      "2 цветовые версии"
    ],
    "palette": [
      "#ffffff",
      "#111111",
      "#e8e1d6",
      "#d0c2b0",
      "#2f6b4f"
    ]
  },
  {
    "title": "Шелк",
    "category": "Свадебные сайты",
    "format": "Свадьба",
    "mood": "Готовый шаблон",
    "coverImage": "assets/catalog/silk-wedding-cover.png",
    "previewDesktop": "assets/catalog/silk-wedding-cover.png",
    "previewMobile": "assets/catalog/silk-wedding-cover.png",
    "url": "https://kvguliaeva.github.io/wedding_example7/",
    "description": "Воздушный свадебный сайт в молочно-бежевой эстетике шелка: приглашение, таймер, программа дня, локация с картой, дресс-код, подсказки гостям и подтверждение присутствия.",
    "price": "1500 ₽",
    "tags": [
      "свадьба",
      "шелк",
      "готовый сайт"
    ],
    "palette": [
      "#f8f4ec",
      "#e6d8c8",
      "#d8c7b5",
      "#dce2e5",
      "#4d4a46"
    ]
  },
  {
    "title": "Любовь навсегда",
    "category": "Свадебные сайты",
    "format": "Свадьба",
    "mood": "Готовый шаблон",
    "coverImage": "assets/catalog/aleksandr-lika-forever-cover.png",
    "previewDesktop": "assets/catalog/aleksandr-lika-forever-cover.png",
    "previewMobile": "assets/catalog/aleksandr-lika-forever-cover.png",
    "url": "https://letterwedding.github.io/wedding_aleksandr_lika/",
    "description": "Минималистичный свадебный сайт в черно-белой эстетике: выразительная типографика, таймер, программа дня, локации, дресс-код и подробная анкета гостей.",
    "price": "1500 ₽",
    "tags": [
      "свадьба",
      "минимализм",
      "готовый сайт"
    ],
    "palette": [
      "#ffffff",
      "#111111",
      "#d8cec3",
      "#a88372",
      "#f5f1eb"
    ]
  },
  {
    "title": "Золотая ботаника",
    "category": "Свадебные сайты",
    "format": "Свадьба",
    "mood": "Готовый шаблон",
    "coverImage": "assets/catalog/dmitriy-anastasia-golden-botanical-cover.png",
    "previewDesktop": "assets/catalog/dmitriy-anastasia-golden-botanical-cover.png",
    "previewMobile": "assets/catalog/dmitriy-anastasia-golden-botanical-cover.png",
    "url": "https://letterwedding.github.io/wedding_dmitriy_anastasia/",
    "description": "Нежный свадебный сайт с цветочной ботаникой и тонкими золотыми линиями: таймер, расписание, локации, карта, дресс-код и подробная анкета гостей.",
    "price": "1500 ₽",
    "tags": [
      "свадьба",
      "ботаника",
      "готовый сайт"
    ],
    "palette": [
      "#fffdf8",
      "#d8c2a4",
      "#93a98e",
      "#f1d9d6",
      "#6b513f"
    ]
  },
  {
    "title": "Зимняя сказка",
    "category": "Свадебные сайты",
    "format": "Свадьба",
    "mood": "Готовый шаблон",
    "coverImage": "assets/catalog/winter-fairytale-cover.jpg",
    "url": "https://kvguliaeva.github.io/zima/",
    "description": "Сайт-приглашение на зимнюю свадьбу в светлых сиреневых тонах.",
    "price": "2000 ₽",
    "tags": ["свадьба", "зима", "сиреневый", "готовый сайт"],
    "palette": ["#f7f4f9", "#ded5eb", "#a397cb", "#555172"]
  },
  {
    "title": "Дело в любви",
    "category": "Свадебные сайты",
    "format": "Свадьба",
    "mood": "Готовый шаблон",
    "coverImage": "assets/catalog/delo-v-lyubvi-cover.jpg",
    "url": "https://kvguliaeva.github.io/delo/",
    "description": "Свадебное приглашение в стиле досье: тёплые бумажные фактуры, печатная типографика и фотокарточки.",
    "price": "2000 ₽",
    "tags": ["свадьба", "досье", "ретро", "готовый сайт"],
    "palette": ["#f3ede0", "#d1ad8d", "#dfbb51", "#413b34"]
  },
  {
    "title": "Легкость",
    "category": "Взрослый день рождения",
    "format": "День рождения",
    "mood": "Готовый шаблон",
    "coverImage": "assets/catalog/birthday-lightness-cover.jpg",
    "url": "https://birthday-invitation.github.io/happybirthdayinna/",
    "description": "Сайт-приглашение на день рождения в нежных пудровых тонах.",
    "price": "1500 ₽",
    "tags": ["день рождения", "пудровый", "готовый сайт"],
    "palette": ["#f8f0e8", "#ecd0ca", "#d6b4aa", "#5e423b"]
  },
  {
    "title": "Золотой юбилей",
    "category": "Взрослый день рождения",
    "format": "Юбилей",
    "mood": "Готовый шаблон",
    "coverImage": "assets/catalog/sergey-50-birthday-cover.png",
    "previewDesktop": "assets/catalog/sergey-50-birthday-cover.png",
    "previewMobile": "assets/catalog/sergey-50-birthday-cover.png",
    "url": "https://kvguliaeva.github.io/happybirthdaysergey/",
    "description": "Статусный сайт-приглашение на взрослый день рождения или юбилей: темная палитра, золотые акценты, локация, дресс-код, программа дня, пожелания и анкета гостей.",
    "price": "1500 ₽",
    "tags": [
      "юбилей",
      "50 лет",
      "готовый сайт"
    ],
    "palette": [
      "#071d1c",
      "#d4a650",
      "#f4eadc",
      "#ffffff",
      "#0b0b0b"
    ]
  },
  {
    "title": "Noir Party",
    "category": "Взрослый день рождения",
    "format": "День рождения",
    "mood": "Готовый шаблон",
    "coverImage": "assets/catalog/adult-birthday-noir-cover.png",
    "previewDesktop": "assets/catalog/adult-birthday-noir-cover.png",
    "previewMobile": "assets/catalog/adult-birthday-noir-cover.png",
    "url": "https://kvguliaeva.github.io/happybirthdayshablon/",
    "description": "Стильный сайт-приглашение на взрослый день рождения в черно-бежевой fashion-эстетике: дата, локация, программа дня, дресс-код, пожелания, контакты и анкета гостей.",
    "price": "1500 ₽",
    "tags": [
      "день рождения",
      "fashion",
      "готовый сайт"
    ],
    "palette": [
      "#111111",
      "#d0ad91",
      "#f4eee5",
      "#ffffff",
      "#8d1c24"
    ]
  }
];

const state = {
  filter: "Свадебные сайты",
  sort: "recommended",
  visibleCount: getInitialVisibleCount(),
};

const grid = document.querySelector("#catalog-grid");
const emptyState = document.querySelector("#empty-state");
const filters = document.querySelector("#filters");
const totalCount = document.querySelector("#total-count");
const template = document.querySelector("#site-card-template");
const showMoreButton = document.querySelector("#show-more");
const variantModal = document.querySelector("#variant-modal");
const variantModalTitle = document.querySelector("#variant-modal-title");
const variantModalOptions = document.querySelector("#variant-modal-options");
const sortSelect = document.querySelector("#sort-select");
const resultCount = document.querySelector("#catalog-result-count");
const variantPanel = variantModal?.querySelector(".variant-modal-panel");
let variantOpener = null;
let modalBackground = [];

const categories = [
  { label: "Свадьба", value: "Свадебные сайты", icon: "01" },
  { label: "Детский праздник", value: "Детский день рождения", icon: "02" },
  { label: "День рождения", value: "Взрослый день рождения", icon: "03" },
  { label: "Другие события", value: "Другие праздники", icon: "04" },
];

function renderFilters() {
  filters.innerHTML = "";

  categories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "filter-button";
    button.innerHTML = `<span>${category.icon}</span>${category.label}`;
    button.dataset.category = category.value;
    button.classList.toggle("is-active", category.value === state.filter);
    button.setAttribute("aria-pressed", String(category.value === state.filter));
    button.setAttribute("aria-controls", "catalog-grid");
    button.addEventListener("click", () => {
      state.filter = category.value;
      state.visibleCount = getInitialVisibleCount();
      filters.querySelectorAll("button").forEach((filter) => {
        const active = filter.dataset.category === state.filter;
        filter.classList.toggle("is-active", active);
        filter.setAttribute("aria-pressed", String(active));
      });
      renderCards();
    });
    filters.append(button);
  });
}

function getFilteredSites() {
  const filtered = sites.filter((site) => site.category === state.filter);

  if (state.sort === "new") {
    return filtered.sort((a, b) => Number(getBadgeLabel(b) === "Новинка") - Number(getBadgeLabel(a) === "Новинка") || getRecommendedIndex(a) - getRecommendedIndex(b));
  }

  if (state.sort === "price-asc") {
    return filtered.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
  }

  if (state.sort === "price-desc") {
    return filtered.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
  }

  return filtered.sort((a, b) => getRecommendedIndex(a) - getRecommendedIndex(b));
}

function getBadgeLabel(site) {
  const label = cardLabels[site.title];
  if (label === "Бестселлер" || label === "Популярный" || label === "Новинка") return label;
  return "";
}

function getRecommendedIndex(site) {
  const index = recommendedOrder.indexOf(site.title);
  return index === -1 ? Number.MAX_SAFE_INTEGER : index;
}

function parsePrice(price = "") {
  return Number(String(price).replace(/\D/g, "")) || 0;
}

function formatPrice(price = "") {
  const value = parsePrice(price);
  if (!value) return price;
  const prefix = /^\s*от\b/i.test(price) ? "от " : "";
  return `${prefix}${new Intl.NumberFormat("ru-RU").format(value).replace(/\u00a0/g, " ")} ₽`;
}

function createSiteCard(site, index) {
  const node = template.content.firstElementChild.cloneNode(true);
  const mediaLink = node.querySelector(".site-card-media");
  const desktopPreview = node.querySelector(".catalog-preview-desktop");
  const mobilePreview = node.querySelector(".catalog-preview-mobile");
  const badge = node.querySelector(".badge");
  const titleLink = node.querySelector(".site-title-link");
  const title = node.querySelector("h3");
  const priceBlock = node.querySelector(".site-price");
  const priceValue = priceBlock?.querySelector("strong");
  const mainLink = node.querySelector(".link-main");
  const cardActions = node.querySelector(".card-actions");
  const devNote = node.querySelector(".dev-note");
  const isReady = Boolean(site.url);
  const actionLabel = isReady ? "Посмотреть вживую" : "Запросить видео";
  const actionDescription = `${actionLabel}: ${site.title}${isReady ? " (новая вкладка)" : ""}`;
  const hasCover = Boolean(site.coverImage);
  const desktopImage = site.coverImage || site.previewDesktop || fallbackPreview;
  const mobileImage = site.coverImage || site.previewMobile || site.previewDesktop || fallbackPreview;
  const badgeLabel = isReady ? getBadgeLabel(site) : "В разработке";

  node.classList.toggle("has-cover", hasCover);
  node.style.setProperty("--card-index", index);

  mediaLink.href = isReady ? site.url : contactUrl;
  mediaLink.setAttribute("aria-label", actionDescription);
  desktopPreview.style.backgroundImage = `url("${wedwed(desktopImage)}")`;
  mobilePreview.style.backgroundImage = `url("${wedwed(mobileImage)}")`;
  badge.textContent = badgeLabel;
  badge.hidden = !badgeLabel;
  titleLink.href = isReady ? site.url : contactUrl;
  title.textContent = site.title;

  if (site.price && priceBlock && priceValue) {
    priceBlock.hidden = false;
    priceValue.textContent = formatPrice(site.price);
  }

  mainLink.href = isReady ? site.url : contactUrl;
  mainLink.textContent = actionLabel;
  mainLink.setAttribute("aria-label", actionDescription);
  if (isReady) titleLink.setAttribute("aria-label", `${site.title} — демо в новой вкладке`);
  devNote.textContent = isReady ? "" : unavailableMessage;

  if (!isReady) {
    node.classList.add("is-unavailable");
    mediaLink.removeAttribute("target");
    mediaLink.removeAttribute("rel");
    mainLink.removeAttribute("target");
    mainLink.removeAttribute("rel");
    titleLink.removeAttribute("target");
    titleLink.removeAttribute("rel");
  }

  const variants = getVariants(site);

  if (variants.length > 1) {
    const variantButton = document.createElement("button");
    const label = document.createElement("span");
    const swatches = document.createElement("span");

    variantButton.type = "button";
    variantButton.className = "variant-link";
    variantButton.setAttribute("aria-label", `Выбрать цвет: ${site.title}, ${variants.length} ${getColorWord(variants.length)}`);
    variantButton.setAttribute("aria-haspopup", "dialog");
    variantButton.setAttribute("aria-controls", "variant-modal");
    label.className = "variant-link-label";
    label.textContent = `${variants.length} ${getColorWord(variants.length)}`;
    swatches.className = "variant-link-swatches";
    swatches.setAttribute("aria-hidden", "true");

    variants.forEach((variant) => {
      const swatch = document.createElement("span");
      swatch.style.setProperty("--swatch", variant.color || "#f3eadf");
      swatches.append(swatch);
    });

    variantButton.append(label, swatches);
    variantButton.addEventListener("click", () => openVariantModal(site, variants, variantButton));
    cardActions.append(variantButton);
  }

  return node;
}

function getColorWord(count) {
  const lastTwo = count % 100;
  const last = count % 10;
  if (lastTwo >= 11 && lastTwo <= 14) return "цветов";
  if (last === 1) return "цвет";
  if (last >= 2 && last <= 4) return "цвета";
  return "цветов";
}

function renderCards({ append = false } = {}) {
  const filteredSites = getFilteredSites();
  const renderedCount = append ? grid.childElementCount : 0;
  const visibleSites = filteredSites.slice(renderedCount, state.visibleCount);
  const fragment = document.createDocumentFragment();

  if (!append) grid.innerHTML = "";
  totalCount.textContent = String(sites.length).padStart(2, "0");
  document.querySelector("#collection-count").textContent = `${sites.length} ${getDesignWord(sites.length)}`;
  if (resultCount) {
    const activeCategory = categories.find((category) => category.value === state.filter);
    resultCount.textContent = `${activeCategory?.label || "Каталог"} · ${filteredSites.length} ${getDesignWord(filteredSites.length)}`;
  }
  emptyState.hidden = filteredSites.length !== 0;

  visibleSites.forEach((site, index) => fragment.append(createSiteCard(site, renderedCount + index)));

  grid.append(fragment);

  renderShowMore(filteredSites.length);
  updateDockState();
}

function getDesignWord(count) {
  const lastTwo = count % 100;
  const last = count % 10;
  if (lastTwo >= 11 && lastTwo <= 14) return "дизайнов";
  if (last === 1) return "дизайн";
  if (last >= 2 && last <= 4) return "дизайна";
  return "дизайнов";
}

function renderShowMore(total) {
  if (!showMoreButton) return;
  const hasMore = state.visibleCount < total;
  showMoreButton.hidden = !hasMore;
  showMoreButton.closest(".show-more-wrap").hidden = !hasMore;
  const remainingCount = Math.min(loadMoreCount, total - state.visibleCount);
  showMoreButton.textContent = hasMore ? `ПОКАЗАТЬ ЕЩЁ ${remainingCount} ${getDesignWord(remainingCount).toUpperCase()} ↓` : "";
}

function getVariants(site) {
  if (Array.isArray(site.variants) && site.variants.length) {
    return site.variants;
  }

  const fallbackUrls = site.variantUrls || (site.variantUrl ? [site.variantUrl] : []);
  if (!fallbackUrls.length) return [];

  return [
    {
      name: "Основной",
      url: site.url,
      color: site.palette?.[0] || "#ffffff",
      textColor: "#15100f",
    },
    ...fallbackUrls.map((url, index) => ({
      name: index === 0 ? "Другой цвет" : "Еще цвет",
      url,
      color: site.palette?.[index + 1] || "#f3eadf",
      textColor: "#15100f",
    })),
  ];
}

function openVariantModal(site, variants, opener) {
  if (!variantModal || !variantModalOptions || !variantModalTitle) return;

  variantModalTitle.textContent = site.title;
  variantModalOptions.innerHTML = "";

  variants.forEach((variant) => {
    const option = document.createElement("a");
    const swatch = document.createElement("span");
    const label = document.createElement("span");
    const arrow = document.createElement("span");

    option.className = "variant-option";
    option.href = variant.url;
    option.target = "_blank";
    option.rel = "noreferrer";
    option.setAttribute("aria-label", `${variant.name} — посмотреть демо ${site.title} (новая вкладка)`);
    option.style.setProperty("--variant-color", variant.color || "#f3eadf");
    swatch.className = "variant-option-swatch";
    label.className = "variant-option-label";
    label.textContent = variant.name;
    arrow.className = "variant-option-arrow";
    arrow.textContent = "↗";
    arrow.setAttribute("aria-hidden", "true");
    option.append(swatch, label, arrow);
    variantModalOptions.append(option);
  });

  variantOpener = opener || document.activeElement;
  modalBackground = Array.from(document.body.children)
    .filter((element) => element !== variantModal && element.tagName !== "SCRIPT")
    .map((element) => ({ element, inert: element.inert }));
  modalBackground.forEach(({ element }) => { element.inert = true; });
  variantModal.hidden = false;
  document.body.classList.add("is-modal-open");
  variantModal.querySelector(".variant-modal-close").focus({ preventScroll: true });
}

function closeVariantModal() {
  if (!variantModal) return;
  variantModal.hidden = true;
  document.body.classList.remove("is-modal-open");
  modalBackground.forEach(({ element, inert }) => { element.inert = inert; });
  modalBackground = [];
  if (variantOpener?.isConnected) variantOpener.focus({ preventScroll: true });
  variantOpener = null;
}

showMoreButton?.addEventListener("click", () => {
  const previousCount = grid.childElementCount;
  state.visibleCount += loadMoreCount;
  renderCards({ append: true });
  grid.children[previousCount]?.querySelector(".site-card-media").focus();
});

sortSelect?.addEventListener("change", (event) => {
  state.sort = event.target.value;
  state.visibleCount = getInitialVisibleCount();
  renderCards();
});

const dockLinks = Array.from(document.querySelectorAll(".mobile-dock a"));
const dockSections = dockLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const headerNav = document.querySelector(".nav");
const dock = document.querySelector(".mobile-dock");
const hero = document.querySelector(".hero");
let previousScrollY = window.scrollY;
let navigationFrame = 0;

function updateDockState() {
  if (variantModal && !variantModal.hidden) {
    navigationFrame = 0;
    return;
  }
  const marker = window.scrollY + window.innerHeight * 0.34;
  let activeSection = null;
  dockSections.forEach((section) => {
    if (section.getBoundingClientRect().top + window.scrollY <= marker) activeSection = section;
  });
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8) {
    activeSection = dockSections.at(-1);
  }
  dockLinks.forEach((link) => {
    const active = Boolean(activeSection && link.hash === `#${activeSection.id}`);
    link.classList.toggle("is-active", active);
    if (active) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
  headerNav.classList.toggle("is-scrolled", window.scrollY > 24);
  const mobile = window.matchMedia("(max-width: 720px)").matches;
  // On phones, reveal the header when scrolling up; the section dock stays accessible.
  if (!mobile || window.scrollY < 100) headerNav.classList.remove("is-hidden");
  else if (Math.abs(window.scrollY - previousScrollY) > 8 && !headerNav.contains(document.activeElement)) {
    headerNav.classList.toggle("is-hidden", window.scrollY > previousScrollY);
  }
  dock.hidden = !mobile && window.scrollY < hero.offsetHeight * .75;
  // Give card actions the whole touch area when they cross the floating dock.
  const dockRect = dock.getBoundingClientRect();
  const obstructing = !dock.hidden && !dock.contains(document.activeElement) &&
    Array.from(grid.querySelectorAll(".card-actions")).some((actions) => {
      const rect = actions.getBoundingClientRect();
      return rect.bottom > dockRect.top - 8 && rect.top < dockRect.bottom + 8 &&
        rect.right > dockRect.left && rect.left < dockRect.right;
    });
  dock.classList.toggle("is-obstructing", obstructing);
  dock.inert = obstructing;
  if (obstructing) dock.setAttribute("aria-hidden", "true");
  else dock.removeAttribute("aria-hidden");
  previousScrollY = window.scrollY;
  navigationFrame = 0;
}

window.addEventListener("scroll", () => {
  if (!navigationFrame) navigationFrame = requestAnimationFrame(updateDockState);
}, { passive: true });
window.addEventListener("resize", updateDockState);
headerNav.addEventListener("focusin", () => headerNav.classList.remove("is-hidden"));
dock.addEventListener("focusout", () => requestAnimationFrame(updateDockState));
updateDockState();

const revealItems = Array.from(document.querySelectorAll("[data-reveal]"));

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -8%" },
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

variantModal?.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-variants]")) {
    closeVariantModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (!variantModal || variantModal.hidden) return;
  if (event.key === "Escape") {
    event.preventDefault();
    closeVariantModal();
  } else if (event.key === "Tab") {
    const focusable = Array.from(variantPanel.querySelectorAll("a[href], button"));
    const first = focusable[0];
    const last = focusable.at(-1);
    if (event.shiftKey && (document.activeElement === first || document.activeElement === variantPanel)) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});

renderFilters();
renderCards();
