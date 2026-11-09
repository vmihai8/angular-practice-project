import { Service, signal } from '@angular/core';

@Service()
export class CounterService {
  readonly count = signal(0);

  increment() {
    this.count.update((value) => value + 1);
  }
}
