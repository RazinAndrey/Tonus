import { inject, Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private readonly toastController = inject(ToastController);

  success(message: string): Promise<void> {
    return this.show(message, 'success');
  }

  info(message: string): Promise<void> {
    return this.show(message, 'primary');
  }

  error(message: string): Promise<void> {
    return this.show(message, 'danger');
  }

  private async show(message: string, color: 'success' | 'primary' | 'danger'): Promise<void> {
    const toast = await this.toastController.create({
      message,
      color,
      duration: 2500,
      position: 'bottom',
    });
    await toast.present();
  }
}
