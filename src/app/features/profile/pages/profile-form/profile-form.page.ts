import { ChangeDetectionStrategy, Component, computed, effect, inject, OnInit, signal } from '@angular/core';
import { email, form, FormField, required, submit } from '@angular/forms/signals';
import { Router } from '@angular/router';
import { NotificationService } from '../../../../core/services/notification.service';
import { ProfileService } from '../../services/profile.service';
import { PageLayoutComponent } from '../../../../shared/layouts/page-layout/page-layout.component';
import { ButtonComponent } from '../../../../shared/ui/button/button.component';
import { InputComponent } from '../../../../shared/ui/input/input.component';
import { TextareaComponent } from '../../../../shared/ui/textarea/textarea.component';

interface ProfileFormData {
  name: string;
  level: string;
  email: string;
  phone: string;
  about: string;
}

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.page.html',
  styleUrls: ['./profile-form.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageLayoutComponent, FormField, ButtonComponent, InputComponent, TextareaComponent],
})
export class ProfileFormPage implements OnInit {
  readonly profileService = inject(ProfileService);
  private readonly router = inject(Router);
  private readonly notifications = inject(NotificationService);

  readonly formModel = signal<ProfileFormData>({
    name: '',
    level: '',
    email: '',
    phone: '',
    about: '',
  });
  readonly profileForm = form(this.formModel, (fieldPath) => {
    required(fieldPath.name, { message: 'Введите имя' });
    required(fieldPath.email, { message: 'Введите электронную почту' });
    email(fieldPath.email, { message: 'Некорректная электронная почта' });
  });
  readonly ready = signal(false);
  readonly saving = signal(false);

  readonly nameError = computed(() => {
    const field = this.profileForm.name();
    return field.touched() && field.invalid()
      ? field.errors().map((error) => error.message ?? '').join('. ')
      : '';
  });
  readonly emailError = computed(() => {
    const field = this.profileForm.email();
    return field.touched() && field.invalid()
      ? field.errors().map((error) => error.message ?? '').join('. ')
      : '';
  });

  constructor() {
    effect(() => {
      const profile = this.profileService.profile();
      if (!profile || this.ready()) return;

      this.formModel.set({
        name: profile.name,
        level: profile.level ?? '',
        email: profile.email,
        phone: profile.phone ?? '',
        about: profile.about ?? '',
      });
      this.ready.set(true);
    });
  }

  ngOnInit(): void {
    if (!this.profileService.profile()) {
      this.profileService.loadProfile();
    }
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.saving()) return;

    void submit(this.profileForm, async () => {
      this.saving.set(true);
      try {
        await this.profileService.updateProfile(this.formModel());
      } catch {
        await this.notifications.error('Не удалось сохранить профиль. Попробуйте ещё раз.');
        return;
      } finally {
        this.saving.set(false);
      }

      await this.notifications.success('Профиль сохранён');
      await this.router.navigateByUrl('/profile');
    });
  }
}
