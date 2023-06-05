# Green-Api-Test
Тестовое задание в компанию green-api


**Основной стэк:**

- Typescript
- React
- Redux-Toolkit
- React-Router-Dom

**Структура:** 

Выбрал простую модульную архитектура

- Pages;
- Modules;
- Components;
- UI - (чистые функции, без какой либо функциональности, логики);

Остальные директории:

- Utils лежит вспомогающие функции;
- Routers - лежат приватные и публичные роуты;
- Services - основная логика redux
- hoc - компоненты наив. порядка(RequireAuth - проверяет авторизован ли юзер)
- assets - картинки, svg

## Скачать проект 
```
git clone git@github.com:Azat-BOSS/Green-Api-Test.git
```
или скачать .zip 
## Скачать все зависимости
```
npm install
```
## Запустить проект
```
npm run dev
```
## Netlify
[https://main--gregarious-moonbeam-b991d4.netlify.app/#/auth](https://main--gregarious-moonbeam-b991d4.netlify.app/#/auth)

