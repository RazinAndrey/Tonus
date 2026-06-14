import { DOCUMENT, effect, inject, Injectable, signal } from '@angular/core';

const STORAGE_KEY = 'tonus-theme';
const DARK_CLASS = 'ion-palette-dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private document = inject(DOCUMENT);
  readonly dark = signal<boolean>(localStorage.getItem(STORAGE_KEY) === 'dark');

  constructor() {
    effect(() => {
      const isDark = this.dark();
      this.document.documentElement.classList.toggle(DARK_CLASS, isDark);
      localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light');
    });
  }

  toggle(): void {
    this.dark.update((v) => !v);
  }
}
