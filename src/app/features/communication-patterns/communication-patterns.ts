import { Component, inject, model, signal, viewChild } from '@angular/core';
import { TopicService } from '../../shared/services/topic.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { TopicLayout } from '../../shared/components/topic-layout/topic-layout';
import { CounterService } from './services/counter.service';
import { ChildComponent } from './components/child-component/child-component';
import { Button } from '../../shared/components/button/button';

@Component({
  imports: [TopicLayout, ChildComponent, Button],
  selector: 'app-communication-patterns',
  styleUrl: './communication-patterns.scss',
  templateUrl: './communication-patterns.html',
})
export class CommunicationPatterns {
  private readonly topicsService = inject(TopicService);

  protected readonly topic = toSignal(this.topicsService.getTopic('communication-patterns'));

  protected readonly counter = inject(CounterService);
  protected readonly checked = signal(false);
}
