import { inject, Injectable, signal, Signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LoginResponse } from './auth.models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly apiUrl = 'https://dummyjson.com/auth';

  private readonly http = inject(HttpClient);

  readonly isAuthenticated = signal(false);
  readonly authToken = signal<string | null>(null);

  login(username: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, {username, password})
      .pipe(
        tap((response: LoginResponse) => this.authToken.set(response.accessToken)),
        tap(() => this.isAuthenticated.set(true))
      );
  }

  logout() {
    this.isAuthenticated.set(false);
  }

}
