import { inject, Injectable, signal, Signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LoginResponse } from './auth.models';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly apiUrl = 'https://dummyjson.com/auth';

  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);

  readonly isAuthenticated = signal(false);

  login(username: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, { username, password }).pipe(
      tap((response: LoginResponse) => localStorage.setItem('authToken', response.accessToken)),
      tap(() => this.isAuthenticated.set(true))
    );
  }

  logout() {
    localStorage.removeItem('authToken');
    this.isAuthenticated.set(false);
    this.router.navigate(['/login']);
  }
}
