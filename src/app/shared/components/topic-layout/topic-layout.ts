import { Component, input } from '@angular/core';
import { Topic } from '../../models/topic';

@Component({
  imports: [],
  selector: 'app-topic-layout',
  styleUrl: './topic-layout.scss',
  templateUrl: './topic-layout.html',
})
export class TopicLayout {
  readonly topic = input.required<Topic>();
}
