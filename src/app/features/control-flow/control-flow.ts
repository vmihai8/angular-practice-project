import { Component, inject } from '@angular/core';
import { TopicService } from '../../shared/services/topic.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { TopicLayout } from '../../shared/components/topic-layout/topic-layout';

@Component({
  imports: [TopicLayout],
  selector: 'app-control-flow',
  styleUrl: './control-flow.scss',
  templateUrl: './control-flow.html',
})
export class ControlFlow {
  private readonly topicsService = inject(TopicService);

  protected readonly topic = toSignal(this.topicsService.getTopic('control-flow'));
}
