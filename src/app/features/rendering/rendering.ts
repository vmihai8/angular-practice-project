import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  Component,
  DoCheck,
  inject,
  OnChanges,
  OnDestroy,
  OnInit,
  signal,
  SimpleChanges,
} from '@angular/core';
import { TopicLayout } from '../../shared/components/topic-layout/topic-layout';
import { TopicService } from '../../shared/services/topic.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  imports: [TopicLayout],
  selector: 'app-rendering',
  styleUrl: './rendering.scss',
  templateUrl: './rendering.html',
})
export class Rendering
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    OnDestroy
{
  private readonly topicsService = inject(TopicService);

  protected readonly topic = toSignal(this.topicsService.getTopic('rendering'));
  protected readonly lifecycleLogs = signal<string[]>([]);
  protected readonly displayText = signal<boolean>(true);

  constructor() {
    this.updateLogs('constructor');
  }

  ngAfterContentChecked(): void {
    this.updateLogs('ngAfterContentChecked');
  }

  ngAfterContentInit(): void {
    this.updateLogs('ngAfterContentInit');
  }

  ngAfterViewChecked(): void {
    this.updateLogs('ngAfterViewChecked');
  }

  ngDoCheck(): void {
    this.updateLogs('ngDoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateLogs('ngOnChanges');
  }

  ngOnDestroy(): void {
    this.updateLogs('ngOnDestroy');
  }

  ngOnInit(): void {
    this.updateLogs('ngOnInit');
  }

  updateLogs(log: string): void {
    this.lifecycleLogs.update((logs) => [...logs, log]);
  }
}
