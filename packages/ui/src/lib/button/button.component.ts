import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Estilo visual del botón (Fill = relleno, Outline = borde, Text = enlace) */
export type ButtonVariant = 'fill' | 'outline' | 'text';

/** Color semántico del botón */
export type ButtonColor = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'outline';

/** Tamaño del botón */
export type ButtonSize = 'lg' | 'sm';

@Component({
  selector: 'ds-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'ds-button-host' },
})
export class ButtonComponent {
  variant = input<ButtonVariant>('fill');
  color   = input<ButtonColor>('primary');
  size    = input<ButtonSize>('lg');
  disabled = input<boolean>(false);

  clicked = output<MouseEvent>();

  onClick(event: MouseEvent): void {
    if (!this.disabled()) {
      this.clicked.emit(event);
    }
  }
}
