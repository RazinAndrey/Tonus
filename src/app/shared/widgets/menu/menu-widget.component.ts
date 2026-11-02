import { Component } from '@angular/core';
import { IonItem, IonLabel, IonList } from '@ionic/angular/standalone';

@Component({
  selector: 'app-menu-widget',
  imports: [IonList, IonItem, IonLabel],
  templateUrl: './menu-widget.component.html',
})
export class MenuWidgetComponent {}
