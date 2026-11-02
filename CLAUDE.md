# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm start` — dev server at http://localhost:4200 (serves with the `development` config)
- `npm run build` — production build, output to `www/` (the Capacitor `webDir`)
- `npm run watch` — rebuild on change using the `development` config
- `npm run lint` — ESLint over `src/**/*.ts` and `src/**/*.html`

## Architecture

Ionic 8 + Angular 20 app compiled to a web bundle and wrapped natively by Capacitor 8. There are no native platform folders (`android/`, `ios/`) yet — `npx cap add <platform>` generates them, and `npx cap sync` copies the `www/` build into them.

Key conventions that differ from a default Angular app:

- **Fully standalone, no NgModules.** The app bootstraps via `bootstrapApplication` in [src/main.ts](src/main.ts) with providers wired there (router with `PreloadAllModules`, `provideIonicAngular()`, and `IonicRouteStrategy` as the `RouteReuseStrategy`). New features are standalone components/pages, not modules.
- **Import Ionic components from `@ionic/angular/standalone`**, and list each one explicitly in the component's `imports` array (see [src/app/home/home.page.ts](src/app/home/home.page.ts)). This is the tree-shakeable entry point — do not import from `@ionic/angular`, and don't expect a global module to provide `IonContent` etc.
- **Routes are lazy-loaded with `loadComponent`** in [src/app/app.routes.ts](src/app/app.routes.ts), pointing at standalone page components.
- **Pages vs components.** Page classes are generated under their own folder via the `@ionic/angular-toolkit:page` schematic (`ng generate page <name>`) and use the `Page` suffix; the lint config allows both `Page` and `Component` suffixes. Component selectors must use the `app-` prefix.

## Styling

- Global styles: [src/global.scss](src/global.scss); Ionic theme tokens/CSS variables: [src/theme/variables.scss](src/theme/variables.scss). Both are registered as global styles in `angular.json`.
- Default style language is SCSS for generated components/pages.

## TypeScript

Strict mode is on with extra strictness: `noPropertyAccessFromIndexSignature`, `noImplicitReturns`, `noImplicitOverride`, and Angular `strictTemplates`. Expect template type-checking to be enforced.
