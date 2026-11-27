import { inject, Injectable, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ProfileApi } from '../data-access/profile-api';
import { Profile } from '../models/profile.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private readonly api = inject(ProfileApi);

  private readonly _profile = signal<Profile | null>(null);
  private readonly _loading = signal(false);
  private readonly _loadError = signal<unknown | null>(null);

  readonly profile = this._profile.asReadonly();
  readonly loading = this._loading.asReadonly();
  readonly loadError = this._loadError.asReadonly();

  async loadProfile(): Promise<void> {
    if (this._loading()) return;

    this._loading.set(true);
    this._loadError.set(null);

    try {
      this._profile.set(await firstValueFrom(this.api.getProfile()));
    } catch (error) {
      this._loadError.set(error);
    } finally {
      this._loading.set(false);
    }
  }

  async updateProfile(data: Partial<Profile>): Promise<void> {
    const profile = await firstValueFrom(this.api.updateProfile(data));
    this._profile.set(profile);
  }
}
