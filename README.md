# Каталог сайтов-приглашений

Статичный клиентский каталог для GitHub Pages: категории, цены, превью, фильтры и ссылки на готовые сайты.

Основная цена для сайтов из каталога: `1500 ₽`.
Обычный срок разработки: `1–2 дня`.

## Как добавить новый сайт

Открой `script.js` и добавь новый объект в массив `sites`:

```js
{
  title: "Название шаблона",
  category: "Свадебные сайты",
  format: "Свадьба",
  mood: "Готовый шаблон",
  previewDesktop: "/sitemaker/templates/template13/picture.jpeg?v=240820",
  previewMobile: "/sitemaker/templates/template13/mpicture.webp?v=240820",
  url: "https://example.github.io/site/",
  description: "Короткое описание для клиента.",
  tags: ["свадьба", "классика", "анкета гостей"],
  palette: ["#ffffff", "#111111", "#e4d5be"],
}
```

Если готовой ссылки нет, оставь `url: ""`. В карточке появится пометка, что сайт пока в разработке, и кнопка будет вести к контактам.

## Контакты

Telegram: `https://t.me/ochkowinx`.
VK: `https://vk.ru/ochkowinx`.
MAX: `+7 952 320 90 36`.
