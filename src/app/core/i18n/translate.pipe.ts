import { inject, Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { TranslationKey } from './translations';

@Pipe({ name: 't', pure: false })
export class TranslatePipe implements PipeTransform {
  private readonly languageService = inject(LanguageService);

  transform(key: TranslationKey): string {
    return this.languageService.translate(key);
  }
}
