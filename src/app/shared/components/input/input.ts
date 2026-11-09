import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-input',
  styleUrl: './input.scss',
  templateUrl: './input.html',
})
export class Input {
  readonly placeholder = input<string>('');
  readonly valueChange = output<string>();

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.valueChange.emit(value);
  }
}
