import { Component, inject } from '@angular/core';
import { TopicService } from '../../shared/services/topic.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Button } from '../../shared/components/button/button';
import { TopicLayout } from '../../shared/components/topic-layout/topic-layout';
import { Token } from '@angular/compiler';
import { PeopleService } from '../../core/http/people.service';
import { debounceTime, distinctUntilChanged, map, startWith, Subscription, switchMap } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Input } from '../../shared/components/input/input';
import { AsyncPipe } from '@angular/common';

@Component({
  imports: [TopicLayout, Input, AsyncPipe],
  selector: 'app-rxjs-search',
  styleUrl: './rxjs-search.scss',
  templateUrl: './rxjs-search.html',
})
export class RxjsSearch {
  private readonly topicsService = inject(TopicService);
  private readonly peopleService = inject(PeopleService);

  protected readonly topic = toSignal(this.topicsService.getTopic('rxjs-search'));
  protected readonly search = new FormControl('', { nonNullable: true });

  protected readonly people$ = this.search.valueChanges.pipe(
    startWith(''),
    debounceTime(300),
    distinctUntilChanged(),
    switchMap((search) =>
      this.peopleService
        .get()
        .pipe(
          map((people) =>
            people.filter((person) => person.name.toLowerCase().includes(search.toLowerCase()))
          )
        )
    )
  );
}
