import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Profile } from '../models/profile.model';
import { ProfileApi } from './profile-api';

@Injectable()
export class MockProfileApi extends ProfileApi {
  private profile: Profile = {
    id: '1',
    name: 'Андрей',
    level: 'Средний уровень',
    email: 'andrew@example.com',
    phone: '+7 999 123-45-67',
    about: 'Тренируюсь три раза в неделю, слежу за прогрессом и веду записи о занятиях.',
  };

  override getProfile(): Observable<Profile> {
    return of({ ...this.profile });
  }

  override updateProfile(data: Partial<Profile>): Observable<Profile> {
    this.profile = {
      ...this.profile,
      ...data,
    };

    return of({ ...this.profile });
  }
}
