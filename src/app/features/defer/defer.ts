import { Component, inject } from '@angular/core';
import { TopicService } from '../../shared/services/topic.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { TopicLayout } from '../../shared/components/topic-layout/topic-layout';
import { DeferredChild } from './components/deferred-child/deferred-child';
import { Button } from '../../shared/components/button/button';

@Component({
  imports: [TopicLayout, DeferredChild, Button],
  selector: 'app-defer',
  styleUrl: './defer.scss',
  templateUrl: './defer.html',
})
export class Defer {
  private readonly topicsService = inject(TopicService);

  protected readonly topic = toSignal(this.topicsService.getTopic('defer'));
}
