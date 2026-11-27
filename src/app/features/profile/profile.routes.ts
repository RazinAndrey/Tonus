import { Routes } from '@angular/router';

export const PROFILE_ROUTES: Routes = [
  {
    path: '',
    data: { titleKey: 'nav.profile', subtitleKey: 'page.profileSubtitle' },
    loadComponent: () => import('./pages/profile/profile.page').then((m) => m.ProfilePage),
  },
  {
    path: 'edit',
    data: { titleKey: 'page.editProfile' },
    loadComponent: () =>
      import('./pages/profile-form/profile-form.page').then((m) => m.ProfileFormPage),
  },
];
