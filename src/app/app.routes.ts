import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    data: { titleKey: 'page.login' },
    loadComponent: () => import('./features/auth/login.page').then((m) => m.LoginPage),
  },
  {
    path: '',
    loadComponent: () =>
      import('./shared/layouts/main-layout/main-layout.component').then(
        (m) => m.MainLayoutComponent,
      ),
    children: [
      {
        path: 'dashboard',
        data: { titleKey: 'nav.dashboard', subtitleKey: 'page.dashboardSubtitle' },
        loadComponent: () =>
          import('./features/dashboard/dashboard.page').then((m) => m.DashboardPage),
      },
      {
        path: 'trainings',
        data: { titleKey: 'nav.trainings', subtitleKey: 'page.trainingsSubtitle' },
        loadComponent: () =>
          import('./features/trainings/trainings.page').then((m) => m.TrainingsPage),
      },
      {
        path: 'trainings/training-form',
        data: { titleKey: 'page.createTraining' },
        loadComponent: () =>
          import('./features/trainings/training-form/training-form.component').then(
            (c) => c.TrainingFormComponent,
          ),
      },
      {
        path: 'trainings/training-form/:conferenceId',
        data: { titleKey: 'page.editTraining' },
        loadComponent: () =>
          import('./features/trainings/training-form/training-form.component').then(
            (c) => c.TrainingFormComponent,
          ),
      },
      {
        path: 'calendar',
        data: { titleKey: 'nav.calendar', subtitleKey: 'page.calendarSubtitle' },
        loadComponent: () =>
          import('./features/calendar/calendar.page').then((m) => m.CalendarPage),
      },
      {
        path: 'users',
        data: { titleKey: 'nav.users' },
        loadComponent: () => import('./features/users/users.page').then((m) => m.UsersPage),
      },
      {
        path: 'settings',
        data: { titleKey: 'nav.settings', subtitleKey: 'page.settingsSubtitle' },
        loadComponent: () =>
          import('./features/settings/settings.page').then((m) => m.SettingsPage),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./features/profile/profile.routes').then((m) => m.PROFILE_ROUTES),
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
