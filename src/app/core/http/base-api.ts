import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export abstract class BaseApi<T> {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com';

  protected abstract readonly resource: string;

  private getUrl(id?: number): string {
    const url = `${this.baseUrl}/${this.resource}`;
    return id ? `${url}/${id}` : url;
  }

  get(): Observable<T[]> {
    return this.http.get<T[]>(this.getUrl());
  }
}
