import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Topic, Topics } from '../models/topic';
import { map, Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TopicService {
  private readonly http = inject(HttpClient);

  private readonly topics$ = this.http.get<Topics>('/data/topics.json').pipe(shareReplay(1));

  getTopic(route: string): Observable<Topic | undefined> {
    return this.topics$.pipe(map((topics) => topics[route]));
  }
}
