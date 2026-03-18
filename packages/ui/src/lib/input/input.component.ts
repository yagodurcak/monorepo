import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

export type InputSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'ds-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  label        = input<string>('');
  placeholder  = input<string>('');
  value        = input<string>('');
  disabled     = input<boolean>(false);
  error        = input<boolean>(false);
  errorMessage = input<string>('');
  size         = input<InputSize>('md');

  valueChange = output<string>();

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.valueChange.emit(target.value);
  }

  readonly inputId = `ds-input-${Math.random().toString(36).slice(2, 9)}`;
}
