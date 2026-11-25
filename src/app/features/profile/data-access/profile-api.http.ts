import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../models/profile.model';
import { ProfileApi } from './profile-api';

@Injectable()
export class HttpProfileApi extends ProfileApi {
  private http = inject(HttpClient);

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>('/api/profile');
  }

  updateProfile(data: Partial<Profile>): Observable<Profile> {
    return this.http.patch<Profile>('/api/profile', data);
  }
}
