import { ChangeDetectionStrategy, Component, forwardRef, input, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonSelect, IonSelectOption } from '@ionic/angular';

export type SelectValue = string | number;

export interface SelectOption {
  value: SelectValue;
  label: string;
  disabled?: boolean;
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  imports: [IonSelect, IonSelectOption],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent implements ControlValueAccessor {
  readonly label = input.required<string>();
  readonly options = input.required<readonly SelectOption[]>();
  readonly placeholder = input('Выберите значение');
  protected readonly value = signal<SelectValue | null>(null);
  protected readonly disabled = signal(false);

  private onChange: (value: SelectValue | null) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: SelectValue | null): void {
    this.value.set(value ?? null);
  }

  registerOnChange(fn: (value: SelectValue | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  protected onSelect(value: SelectValue | null | undefined): void {
    const nextValue = value ?? null;
    this.value.set(nextValue);
    this.onChange(nextValue);
  }

  protected onBlur(): void {
    this.onTouched();
  }
}
