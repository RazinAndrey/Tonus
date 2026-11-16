import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonButton, IonRouterLink } from '@ionic/angular';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  imports: [IonButton, IonRouterLink, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  readonly type = input<'button' | 'submit' | 'reset'>('button');
  readonly disabled = input(false);
  readonly expand = input<'block' | 'full' | undefined>(undefined);
  readonly size = input<'28px' | '36px' | '44px' | '52px' | '60px'>('44px');
  readonly fill = input<'solid' | 'outline' | 'clear'>('solid');
  readonly color = input<'amber' | 'mint' | 'rose' | 'sky'>('mint');
  readonly routerLink = input<string | null>(null);
}
