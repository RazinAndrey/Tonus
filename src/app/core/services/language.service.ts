import { DOCUMENT, computed, inject, Injectable, signal } from '@angular/core';
import { translations, TranslationKey } from '../i18n/translations';

const STORAGE_KEY = 'tonus-language';

export type Language = 'ru' | 'en';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly document = inject(DOCUMENT);
  private readonly selectedLanguage = signal<Language>(
    this.document.defaultView?.localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'ru',
  );

  readonly language = this.selectedLanguage.asReadonly();
  readonly locale = computed(() => (this.language() === 'ru' ? 'ru-RU' : 'en-US'));

  constructor() {
    this.document.documentElement.lang = this.language();
  }

  setLanguage(language: Language): void {
    this.selectedLanguage.set(language);
    this.document.documentElement.lang = language;
    this.document.defaultView?.localStorage.setItem(STORAGE_KEY, language);
  }

  translate(key: TranslationKey): string {
    return translations[this.language()][key];
  }
}
