import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./shared/layouts/main-layout.component').then((m) => m.MainLayoutComponent),
    // children: [
    //   {
    //     path: 'home',
    //     loadComponent: () => import('./features/home/home.page').then((m) => m.HomePage),
    //   },
    //   {
    //     path: 'settings',
    //     loadComponent: () =>
    //       import('./features/settings/settings.page').then((m) => m.SettingsPage),
    //   },
    //   {
    //     path: '',
    //     redirectTo: 'home',
    //     pathMatch: 'full',
    //   },
    // ],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
