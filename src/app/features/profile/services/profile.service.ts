import { DestroyRef, inject, Injectable, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { finalize, firstValueFrom } from 'rxjs';
import { ProfileApi } from '../data-access/profile-api';
import { Profile } from '../models/profile.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private api = inject(ProfileApi);
  private destroyRef = inject(DestroyRef);

  readonly profile = signal<Profile | null>(null);
  readonly loading = signal<boolean>(false);
  readonly error = signal<unknown | null>(null);

  loadProfile(): void {
    this.loading.set(true);
    this.error.set(null);

    this.api
      .getProfile()
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => this.loading.set(false)),
      )
      .subscribe({
        next: (profile) => this.profile.set(profile),
        error: (error) => this.error.set(error),
      });
  }

  async updateProfile(data: Partial<Profile>): Promise<void> {
    this.error.set(null);

    try {
      const profile = await firstValueFrom(
        this.api.updateProfile(data).pipe(takeUntilDestroyed(this.destroyRef)),
      );
      this.profile.set(profile);
    } catch (error) {
      this.error.set(error);
      throw error;
    }
  }
}
