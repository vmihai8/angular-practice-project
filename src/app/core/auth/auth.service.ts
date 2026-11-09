import { computed, inject, Injectable, signal, Signal } from '@angular/core';
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
  private readonly token = signal<string | null>(localStorage.getItem('authToken'));

  readonly isAuthenticated = computed(() => !!this.token());

  login(username: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, { username, password }).pipe(
      tap((response) => {
        localStorage.setItem('authToken', response.accessToken);
        this.token.set(response.accessToken);
      })
    );
  }

  logout() {
    localStorage.removeItem('authToken');
    this.token.set(null);
    this.router.navigate(['/login']);
  }

  getToken() {
    return localStorage.getItem('authToken');
  }
}
