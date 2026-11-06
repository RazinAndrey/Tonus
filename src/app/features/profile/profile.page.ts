import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PageLayoutComponent } from '../../shared/layouts/page-layout/page-layout.component';
import { CardLayoutComponent } from '../../shared/layouts/card-layout/card-layout.component';
import { InputComponent } from '../../shared/ui/input/input.component';
import { TextareaComponent } from '../../shared/ui/textarea/textarea.component';
import { SelectComponent, SelectOption } from '../../shared/ui/select/select.component';
import { ButtonComponent } from '../../shared/ui/button/button.component';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
  imports: [
    PageLayoutComponent,
    CardLayoutComponent,
    InputComponent,
    ReactiveFormsModule,
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
  });
}
