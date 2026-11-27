import { DOCUMENT, inject, Injectable, signal } from '@angular/core';

const STORAGE_KEY = 'tonus-theme';
type Theme = 'dark' | 'light';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  readonly theme = signal<Theme>(
    this.document.defaultView?.localStorage.getItem(STORAGE_KEY) === 'light' ? 'light' : 'dark',
  );

  constructor() {
    this.applyTheme(this.theme());
  }

  setTheme(theme: Theme): void {
    this.theme.set(theme);
    this.applyTheme(theme);
  }

  private applyTheme(theme: Theme): void {
    const root = this.document.documentElement;
    root.classList.toggle('ion-palette-dark', theme === 'dark');
    root.classList.toggle('app-theme-light', theme === 'light');
    this.document.defaultView?.localStorage.setItem(STORAGE_KEY, theme);
  }
}
