import { Component, ElementRef, inject, model, viewChild } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  imports: [],
  selector: 'app-child-component',
  styleUrl: './child-component.scss',
  templateUrl: './child-component.html',
})
export class ChildComponent {
  readonly counter = inject(CounterService);
  readonly checked = model(false);
}
