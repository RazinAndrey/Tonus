import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./shared/layouts/main-layout/main-layout.component').then(
        (m) => m.MainLayoutComponent,
      ),
    children: [
      {
        path: 'dashboard',
        title: 'Главная',
        loadComponent: () =>
          import('./features/dashboard/dashboard.page').then((m) => m.DashboardPage),
      },
      {
        path: 'trainings',
        title: 'Тренировки',
        loadComponent: () =>
          import('./features/trainings/trainings.page').then((m) => m.TrainingsPage),
      },
      {
        path: 'trainings/training-form',
        title: 'Создать тренировку',
        loadComponent: () =>
          import('./features/trainings/training-form/training-form.component').then(
            (c) => c.TrainingFormComponent,
          ),
      },
      {
        path: 'trainings/training-form/:conferenceId',
        title: 'Редактировать тренировку',
        loadComponent: () =>
          import('./features/trainings/training-form/training-form.component').then(
            (c) => c.TrainingFormComponent,
          ),
      },
      {
        path: 'calendar',
        title: 'Календарь',
        loadComponent: () =>
          import('./features/calendar/calendar.page').then((m) => m.CalendarPage),
      },
      {
        path: 'users',
        title: 'Пользователи',
        loadComponent: () => import('./features/users/users.page').then((m) => m.UsersPage),
      },
      {
        path: 'settings',
        title: 'Настройки',
        loadComponent: () =>
          import('./features/settings/settings.page').then((m) => m.SettingsPage),
      },
      {
        path: 'profile',
        title: 'Профиль',
        loadComponent: () => import('./features/profile/profile.page').then((m) => m.ProfilePage),
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
