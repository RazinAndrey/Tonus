import { Observable } from 'rxjs';
import { Profile } from '../models/profile.model';

export abstract class ProfileApi {
  abstract getProfile(): Observable<Profile>;
  abstract updateProfile(data: Partial<Profile>): Observable<Profile>;
}
