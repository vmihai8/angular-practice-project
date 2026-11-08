import { Component, computed, effect, inject, signal } from '@angular/core';
import { TopicService } from '../../shared/services/topic.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { TopicLayout } from '../../shared/components/topic-layout/topic-layout';
import { Button } from '../../shared/components/button/button';

@Component({
  imports: [TopicLayout, Button],
  selector: 'app-signals',
  styleUrl: './signals.scss',
  templateUrl: './signals.html',
})
export class Signals {
  private readonly topicsService = inject(TopicService);

  protected readonly topic = toSignal(this.topicsService.getTopic('signals'));

  protected readonly counterClicked = signal<boolean>(false);
  protected readonly counter = signal<number>(0);
  protected readonly doubleCounter = computed(() => {
    return this.counter() * 2;
  });

  constructor() {
    effect(() => {
      if (this.counter()) {
        this.counterClicked.set(true);
      }
    });
  }

  count() {
    this.counter.update((c) => c + 1);
  }
}
