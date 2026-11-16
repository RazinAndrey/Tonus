import {
  ChangeDetectionStrategy,
  Component,
  computed,
  forwardRef,
  input,
  signal,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { addIcons } from 'ionicons';
import { eyeOffOutline, eyeOutline } from 'ionicons/icons';
import { IonButton, IonIcon, IonInput } from '@ionic/angular';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  imports: [IonButton, IonIcon, IonInput],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent implements ControlValueAccessor {
  readonly label = input.required<string>();
  readonly type = input<'text' | 'email' | 'tel' | 'number' | 'password'>('text');
  readonly autocomplete = input<
    'off' | 'name' | 'email' | 'tel' | 'username' | 'current-password' | 'new-password'
  >('off');
  readonly errorText = input('');
  protected readonly value = signal('');
  protected readonly disabled = signal(false);
  protected readonly showPassword = signal(false);
  protected readonly resolvedType = computed(() =>
    this.type() === 'password' && this.showPassword() ? 'text' : this.type(),
  );

  private onChange: (value: string | number | null) => void = () => {};
  private onTouched: () => void = () => {};

  constructor() {
    addIcons({ eyeOutline, eyeOffOutline });
  }

  protected togglePasswordVisibility(): void {
    this.showPassword.update((visible) => !visible);
  }

  writeValue(value: string | number | null): void {
    this.value.set(value == null ? '' : String(value));
  }

  registerOnChange(fn: (value: string | number | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  protected onInput(value: string | number | null | undefined): void {
    const nextValue = value == null ? '' : String(value);
    this.value.set(nextValue);

    if (this.type() === 'number') {
      const numericValue = Number(nextValue);
      this.onChange(nextValue.trim() === '' || !Number.isFinite(numericValue) ? null : numericValue);
      return;
    }

    this.onChange(nextValue);
  }

  protected onBlur(): void {
    this.onTouched();
  }
}
