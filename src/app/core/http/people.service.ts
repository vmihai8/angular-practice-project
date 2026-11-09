import { Injectable } from '@angular/core';
import { BaseApi } from './base-api';

export interface Person {
  id: number;
  name: string;
  email: string;
}

@Injectable({ providedIn: 'root' })
export class PeopleService extends BaseApi<Person> {
  protected readonly resource = 'users';
}
