# LANGAME

## :fire: Особенности

- проект запускается на 3000 порту
- всего в проекте две страницы:
- Главная страница - http://localhost:3000
- Страница регистрации - http://localhost:3000/register

- используется библиотека [React](https://ru.react.js.org/)-
- используется [react-router-dom](https://reactrouter.com/en/main/start/tutorial) для навигации
- используется [Ant Design](https://ant.design) для стилизации

## :hammer_and_wrench: Установка

- установите [NodeJS](https://nodejs.org/en/)
- установите глобально:
  - [Yarn](https://yarnpkg.com/getting-started): `npm i -g yarn`
- скачайте архив со сборкой по адресу https://github.com/serg310583/Langame-test

- распакуйте архив в папку на локальном диске
- перейдите в терминале в папку со сборкой
- введите `yarn install`
- чтобы начать работу, введите команду: `yarn dev` (режим разработки)
- чтобы собрать проект, введите команду `yarn build` (режим сборки)

Если вы всё сделали правильно, у вас должен открыться браузер с локальным сервером.

## :open_file_folder: Файловая структура

```
main
├── public
│   └── assets
│       ├── fonts│
│       └── img
├── src
│   ├── layout  
│   ├── components│  
│   ├── pages
│   ├── route
│   ├── UI
│   └── style
      ├── App.jsx
      ├── App.module.scss
      ├── customTheme.js
      ├── ErrorPage.jsx
      ├── main.jsx
├── .gitignore
├── .eslintrc.cjs
├── vite.config.js
├── package.json
├── yarn.lock
└── README.md
```

- Корень папки:
  - `.eslintrc.cjs` — настройки ESLint
  - `.gitignore` – запрет на отслеживание файлов Git'ом
  - `index.html` — основной файл html - точка входа в приложение
  - `package.json` — список зависимостей
  - `vite.config.js` — файл конфигурации vite
  - `yarn.lock` — дерево всех зависимостей с версиями
- Папка `src` - используется во время разработки:
  - шрифты: `public/assets/fonts`
  - изображения: `public/assets/img`
  - основыне переиспользуемые компоненты : `src/components`
  - страницы приложения : `src/pages`
  - стили, переменные для стилей, миксины : `src/style`
  - настройки маршрутизации : `src/route`

### Сторонние библиотеки

- все сторонние библиотеки устанавливаются в папку `node_modules`
  - для их загрузки воспользуйтеcь командой `yarn add package_name` (например, `yarn add jquery`)

## :envelope: Контакты

По всем вопросам пишите в [Telegram Сергею](https://t.me/Sergey310583)
