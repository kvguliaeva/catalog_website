const wedwed = (path) => {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  if (path.startsWith("assets/") || path.startsWith("./")) return path;
  return `https://wedwed.ru${path}`;
};

const contactUrl = "#contacts";
const fallbackPreview = "assets/catalog/main-catalog.png";
const unavailableMessage = "Сайт пока что находится в разработке. Я могу сделать его под ваш праздник, но посмотреть этот вариант в каталоге пока не получится. Напишите мне в личные сообщения — я вышлю видео, как он выглядит.";
const perPage = 6;

const cardLabels = {
  "lilies": "Новинка",
  "Жемчужина": "Новинка",
  "Свадебный билет": "Популярный",
  "Сад нежности": "Популярный",
  "Сад огней": "Детальный дизайн",
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
  "Золотой юбилей": "Популярный",
  "Noir Party": "Новинка",
};

const recommendedOrder = [
  "lilies",
  "Свадебный билет",
  "Сад нежности",
  "Жемчужина",
  "Тихая классика",
  "Записка",
  "Сад огней",
  "Ботанический сад",
  "Love Letter",
  "Наша история",
  "Оливковый сад",
  "Чистая линия",
  "Бордовая линия",
  "В полете",
  "90-е",
  "Свадебный вестник",
  "Тренд 2026",
  "Noir Party",
  "Золотой юбилей",
];

const sites = [
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
    "description": "Нежный свадебный сайт с лилиями, розовой каллиграфией и мягкой акварельной зеленью: приглашение, программа дня, дресс-код, локация, пожелания, FAQ и анкета гостей.",
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
    "url": "https://kvguliaeva.github.io/wedding_2/",
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
    "description": "Контрастный свадебный сайт в актуальной черно-белой эстетике: строгая типографика, календарь, тайминг, дресс-код, пожелания, анкета гостей и финальный экран.",
    "price": "1500 ₽",
    "tags": [
      "свадьба",
      "тренд 2026",
      "готовый сайт"
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
  visibleCount: perPage,
};

const grid = document.querySelector("#catalog-grid");
const emptyState = document.querySelector("#empty-state");
const filters = document.querySelector("#filters");
const totalCount = document.querySelector("#total-count");
const template = document.querySelector("#site-card-template");
const showMoreButton = document.querySelector("#show-more");
const moreTemplates = document.querySelector("#more-templates");
const variantModal = document.querySelector("#variant-modal");
const variantModalTitle = document.querySelector("#variant-modal-title");
const variantModalOptions = document.querySelector("#variant-modal-options");
const sortSelect = document.querySelector("#sort-select");
const resultCount = document.querySelector("#catalog-result-count");

const categories = [
  { label: "Свадьба", value: "Свадебные сайты", icon: "💍" },
  { label: "Детский ДР", value: "Детский день рождения", icon: "🎈" },
  { label: "Взрослый ДР", value: "Взрослый день рождения", icon: "🎂" },
  { label: "Другие", value: "Другие праздники", icon: "🎁" },
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
    button.addEventListener("click", () => {
      state.filter = category.value;
      state.visibleCount = perPage;
      renderFilters();
      renderCards();
    });
    filters.append(button);
  });
}

function getFilteredSites() {
  const filtered = sites.filter((site) => site.category === state.filter);

  if (state.sort === "new") {
    return filtered.sort((a, b) => Number(cardLabels[b.title] === "Новинка") - Number(cardLabels[a.title] === "Новинка"));
  }

  if (state.sort === "price-asc") {
    return filtered.sort((a, b) => parseInt(a.price, 10) - parseInt(b.price, 10));
  }

  if (state.sort === "price-desc") {
    return filtered.sort((a, b) => parseInt(b.price, 10) - parseInt(a.price, 10));
  }

  return filtered.sort((a, b) => recommendedOrder.indexOf(a.title) - recommendedOrder.indexOf(b.title));
}

function renderCards() {
  const filteredSites = getFilteredSites();
  const visibleSites = filteredSites.slice(0, state.visibleCount);
  grid.innerHTML = "";
  totalCount.textContent = String(sites.length).padStart(2, "0");
  if (resultCount) {
    resultCount.textContent = `${filteredSites.length} ${getDesignWord(filteredSites.length)}`;
  }
  emptyState.hidden = true;

  visibleSites.forEach((site, index) => {
    const node = template.content.firstElementChild.cloneNode(true);
    const mediaLink = node.querySelector(".site-card-media");
    const desktopPreview = node.querySelector(".catalog-preview-desktop");
    const mobilePreview = node.querySelector(".catalog-preview-mobile");
    const badge = node.querySelector(".badge");
    const category = node.querySelector(".category");
    const title = node.querySelector("h3");
    const description = node.querySelector(".description");
    const priceBlock = node.querySelector(".site-price");
    const priceValue = priceBlock?.querySelector("strong");
    const priceNote = node.querySelector(".price-note");
    const mainLink = node.querySelector(".link-main");
    const copyButton = node.querySelector(".copy-link");
    const cardActions = node.querySelector(".card-actions");
    const devNote = node.querySelector(".dev-note");
    const isReady = Boolean(site.url);
    const hasCover = Boolean(site.coverImage);
    const desktopImage = site.coverImage || site.previewDesktop || fallbackPreview;
    const mobileImage = site.coverImage || site.previewMobile || site.previewDesktop || fallbackPreview;

    node.classList.toggle("has-cover", hasCover);
    node.style.setProperty("--card-index", index);

    mediaLink.href = isReady ? site.url : contactUrl;
    desktopPreview.style.backgroundImage = `url("${wedwed(desktopImage)}")`;
    mobilePreview.style.backgroundImage = `url("${wedwed(mobileImage)}")`;
    badge.textContent = isReady ? cardLabels[site.title] || site.mood : "В разработке";
    category.textContent = site.category;
    title.textContent = site.title;
    description.textContent = site.description;

    if (site.price && priceBlock && priceValue && priceNote) {
      priceBlock.hidden = false;
      priceValue.textContent = site.price;
      priceNote.textContent = site.priceNote || "";
      priceNote.hidden = !site.priceNote;
    }

    mainLink.href = isReady ? site.url : contactUrl;
    mainLink.textContent = isReady ? "Открыть сайт" : "Запросить видео";
    copyButton.textContent = isReady ? "Скопировать ссылку" : "Написать мне";
    devNote.textContent = isReady ? "" : unavailableMessage;

    if (!isReady) {
      node.classList.add("is-unavailable");
      mediaLink.removeAttribute("target");
      mediaLink.removeAttribute("rel");
      mainLink.removeAttribute("target");
      mainLink.removeAttribute("rel");
      copyButton.hidden = true;
    }

    if (isReady) {
      copyButton.addEventListener("click", async () => {
        const absoluteUrl = new URL(site.url, window.location.href).href;
        await copyText(absoluteUrl);
        copyButton.textContent = "Ссылка скопирована";
        copyButton.classList.add("is-copied");
        setTimeout(() => {
          copyButton.textContent = "Скопировать ссылку";
          copyButton.classList.remove("is-copied");
        }, 1800);
      });
    }

    const variants = getVariants(site);

    if (variants.length > 1) {
      const variantButton = document.createElement("button");
      variantButton.type = "button";
      variantButton.className = "variant-link";
      variantButton.textContent = "Цветовые варианты";
      variantButton.addEventListener("click", () => openVariantModal(site, variants));
      cardActions.append(variantButton);
    }

    grid.append(node);
  });

  renderShowMore(filteredSites.length);
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
  showMoreButton.textContent = hasMore ? `Показать еще ${Math.min(perPage, total - state.visibleCount)}` : "";
  if (moreTemplates) {
    moreTemplates.hidden = hasMore;
  }
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

function openVariantModal(site, variants) {
  if (!variantModal || !variantModalOptions || !variantModalTitle) return;

  variantModalTitle.textContent = site.title;
  variantModalOptions.innerHTML = "";

  variants.forEach((variant) => {
    const option = document.createElement("a");
    option.className = "variant-option";
    option.href = variant.url;
    option.target = "_blank";
    option.rel = "noreferrer";
    option.textContent = variant.name;
    option.style.backgroundColor = variant.color;
    option.style.color = variant.textColor || "#15100f";
    variantModalOptions.append(option);
  });

  variantModal.hidden = false;
  document.body.classList.add("is-modal-open");
}

function closeVariantModal() {
  if (!variantModal) return;
  variantModal.hidden = true;
  document.body.classList.remove("is-modal-open");
}

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const input = document.createElement("textarea");
  input.value = text;
  input.setAttribute("readonly", "");
  input.style.position = "fixed";
  input.style.opacity = "0";
  document.body.append(input);
  input.select();
  document.execCommand("copy");
  input.remove();
}

showMoreButton?.addEventListener("click", () => {
  state.visibleCount += perPage;
  renderCards();
});

sortSelect?.addEventListener("change", (event) => {
  state.sort = event.target.value;
  state.visibleCount = perPage;
  renderCards();
});

const dockLinks = Array.from(document.querySelectorAll(".mobile-dock a"));
const dockSections = dockLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

function updateDockState() {
  const marker = window.scrollY + window.innerHeight * 0.34;
  let activeSection = null;

  dockSections.forEach((section) => {
    if (section.offsetTop <= marker) activeSection = section;
  });

  dockLinks.forEach((link) => {
    link.classList.toggle("is-active", activeSection && link.getAttribute("href") === `#${activeSection.id}`);
  });
}

window.addEventListener("scroll", updateDockState, { passive: true });
window.addEventListener("resize", updateDockState);
updateDockState();

variantModal?.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-variants]")) {
    closeVariantModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && variantModal && !variantModal.hidden) {
    closeVariantModal();
  }
});

renderFilters();
renderCards();
