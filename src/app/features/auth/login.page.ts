import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { email, form, FormField, required, submit } from '@angular/forms/signals';
import { IonContent, IonIcon } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { trophy } from 'ionicons/icons';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { TranslationKey } from '../../core/i18n/translations';
import { LanguageService } from '../../core/services/language.service';
import { CardLayoutComponent } from '../../shared/layouts/card-layout/card-layout.component';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { CheckboxComponent } from '../../shared/ui/checkbox/checkbox.component';
import { InputComponent } from '../../shared/ui/input/input.component';

interface LoginData {
  email: string;
  password: string;
  rememberMe: boolean;
}

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
  imports: [
    IonContent,
    IonIcon,
    FormField,
    CardLayoutComponent,
    ButtonComponent,
    CheckboxComponent,
    InputComponent,
    TranslatePipe,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPage {
  private readonly languageService = inject(LanguageService);
  readonly loginModel = signal<LoginData>({ email: '', password: '', rememberMe: false });

  loginForm = form(this.loginModel, (fieldPath) => {
    required(fieldPath.email, { message: 'validation.emailRequired' });
    email(fieldPath.email, { message: 'validation.emailInvalid' });
    required(fieldPath.password, { message: 'validation.passwordRequired' });
  });

  protected readonly emailError = computed(() => {
    const field = this.loginForm.email();
    return field.touched() && field.invalid()
      ? field
          .errors()
          .map((error) =>
            error.message ? this.languageService.translate(error.message as TranslationKey) : '',
          )
          .join('. ')
      : '';
  });

  protected readonly passwordError = computed(() => {
    const field = this.loginForm.password();
    return field.touched() && field.invalid()
      ? field
          .errors()
          .map((error) =>
            error.message ? this.languageService.translate(error.message as TranslationKey) : '',
          )
          .join('. ')
      : '';
  });

  constructor() {
    addIcons({ trophy });
  }

  onSubmit(event: Event) {
    event.preventDefault();
    submit(this.loginForm, async () => {
      const credentials = this.loginModel();
      console.log('Logging in with:', credentials);
    });
  }
}
