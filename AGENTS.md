# AGENTS.md

Guidance for AI agents working with the code in this repository.

## Commands

- Node.js — см. `engines` в `package.json` (`^22.22.3`, `^24.15.0` или `^26.0.0`) и `.nvmrc`; на старых версиях Angular CLI не запустится.
- `npm start` — dev server at http://localhost:4200 (serves with the `development` config)
- `npm run build` — production build, output to `www/` (the Capacitor `webDir`)
- `npm run watch` — rebuild on change using the `development` config
- `npm run lint` — ESLint over `src/**/*.ts` and `src/**/*.html`

## Architecture

Ionic 9 + Angular 22 app compiled to a web bundle and wrapped natively by Capacitor 8. There are no native platform folders (`android/`, `ios/`) yet — `npx cap add <platform>` generates them, and `npx cap sync` copies the `www/` build into them.

Key conventions that differ from a default Angular app:

- **Fully standalone, no NgModules.** The app bootstraps via `bootstrapApplication` in [src/main.ts](src/main.ts) with providers wired there (router with `PreloadAllModules`, `provideIonicAngular()`, and `IonicRouteStrategy` as the `RouteReuseStrategy`). New features are standalone components/pages, not modules.
- **Import Ionic components from `@ionic/angular`**, and list each one explicitly in the component's `imports` array (see [src/app/features/dashboard/dashboard.page.ts](src/app/features/dashboard/dashboard.page.ts)). In Ionic 9 the root export is the tree-shakeable standalone entry; there is no separate `/standalone` subpath anymore. Don't expect a global module to provide `IonContent` etc.
- **Routes are lazy-loaded with `loadComponent`** in [src/app/app.routes.ts](src/app/app.routes.ts), pointing at standalone page components.
- **Pages vs components.** Page classes are generated under their own folder via the `@ionic/angular-toolkit:page` schematic (`ng generate page <name>`) and use the `Page` suffix; the lint config allows both `Page` and `Component` suffixes. Component selectors must use the `app-` prefix.

## Styling

- Global styles: [src/global.scss](src/global.scss) — единственная точка входа из `angular.json`. Токены темы живут в [src/styles/variables.scss](src/styles/variables.scss), утилитарные классы — в [src/styles/utilities.scss](src/styles/utilities.scss); оба подключаются через `@use` в `global.scss`.
- Default style language is SCSS for generated components/pages.

## TypeScript

Strict mode is on with extra strictness: `noPropertyAccessFromIndexSignature`, `noImplicitReturns`, `noImplicitOverride`, and Angular `strictTemplates`. Expect template type-checking to be enforced.
