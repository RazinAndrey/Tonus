import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IonAvatar } from '@ionic/angular';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { InputComponent } from '../../shared/ui/input/input.component';
import { SelectComponent, SelectOption } from '../../shared/ui/select/select.component';
import { TextareaComponent } from '../../shared/ui/textarea/textarea.component';
import { CardLayoutComponent } from '../../shared/layouts/card-layout/card-layout.component';
import { PageLayoutComponent } from '../../shared/layouts/page-layout/page-layout.component';

interface ProfileData {
  name: string;
  email: string;
  phone: string;
  level: string | null;
  description: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
  imports: [
    PageLayoutComponent,
    CardLayoutComponent,
    ReactiveFormsModule,
    IonAvatar,
    InputComponent,
    TextareaComponent,
    SelectComponent,
    ButtonComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilePage {
  readonly levels: readonly SelectOption[] = [
    { value: 'beginner', label: 'Начальный' },
    { value: 'intermediate', label: 'Средний' },
    { value: 'advanced', label: 'Продвинутый' },
  ];

  readonly profileForm = new FormGroup({
    name: new FormControl('Андрей', { nonNullable: true }),
    email: new FormControl('', { nonNullable: true }),
    phone: new FormControl('', { nonNullable: true }),
    level: new FormControl<string | null>(null),
    description: new FormControl('', { nonNullable: true }),
  });

  protected readonly isEditing = signal(false);

  private snapshot: ProfileData | null = null;

  protected get displayName(): string {
    return this.profileForm.controls.name.value.trim() || 'Не указано';
  }

  protected get displayEmail(): string {
    return this.profileForm.controls.email.value.trim() || 'Не указано';
  }

  protected get displayPhone(): string {
    return this.profileForm.controls.phone.value.trim() || 'Не указано';
  }

  protected get displayLevel(): string {
    const level = this.profileForm.controls.level.value;
    return this.levels.find((option) => option.value === level)?.label ?? 'Не указано';
  }

  protected get displayDescription(): string {
    return this.profileForm.controls.description.value.trim() || 'Не указано';
  }

  protected startEdit(): void {
    this.snapshot = this.profileForm.getRawValue();
    this.isEditing.set(true);
  }

  protected cancelEdit(): void {
    if (this.snapshot) {
      this.profileForm.reset(this.snapshot);
    }

    this.isEditing.set(false);
  }

  protected save(): void {
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      return;
    }

    this.profileForm.markAsPristine();
    this.snapshot = null;
    this.isEditing.set(false);
  }
}
