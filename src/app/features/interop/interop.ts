import { Component, inject, signal } from '@angular/core';
import { TopicService } from '../../shared/services/topic.service';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';
import { TopicLayout } from '../../shared/components/topic-layout/topic-layout';
import { BehaviorSubject } from 'rxjs';
import { Button } from '../../shared/components/button/button';

@Component({
  imports: [AsyncPipe, TopicLayout, Button],
  selector: 'app-interop',
  styleUrl: './interop.scss',
  templateUrl: './interop.html',
})
export class Interop {
  private readonly topicsService = inject(TopicService);

  protected readonly topic = toSignal(this.topicsService.getTopic('interop'));

  readonly subjectCounter = new BehaviorSubject<number>(0);

  incrementSubject() {
    this.subjectCounter.next(this.subjectCounter.value + 1);
  }

  readonly signalCounter = signal(0);

  incrementSignal() {
    this.signalCounter.update((value) => value + 1);
  }

  readonly convertedSignal = toSignal(this.subjectCounter, {
    initialValue: 0,
  });

  readonly convertedObservable$ = toObservable(this.signalCounter);
}
