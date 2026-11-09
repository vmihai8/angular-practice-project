import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { Interop } from './interop';
import { TopicService } from '../../shared/services/topic.service';

describe('Interop', () => {
  let component: Interop;
  let fixture: ComponentFixture<Interop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Interop],
      providers: [
        {
          provide: TopicService,
          useValue: {
            getTopic: jest.fn().mockReturnValue(of(null)),
          },
        },
      ],
    })
      .overrideComponent(Interop, {
        set: { template: '' },
      })
      .compileComponents();

    fixture = TestBed.createComponent(Interop);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment BehaviorSubject counter', () => {
    expect(component.subjectCounter.value).toBe(0);

    component.incrementSubject();

    expect(component.subjectCounter.value).toBe(1);
  });

  it('should increment Signal counter', () => {
    expect(component.signalCounter()).toBe(0);

    component.incrementSignal();

    expect(component.signalCounter()).toBe(1);
  });

  it('should convert BehaviorSubject to Signal', () => {
    expect(component.convertedSignal()).toBe(0);

    component.incrementSubject();

    expect(component.convertedSignal()).toBe(1);
  });

  it('should convert Signal to Observable', async () => {
    const values: number[] = [];

    const subscription = component.convertedObservable$.subscribe((value) => values.push(value));

    try {
      await fixture.whenStable();

      expect(values).toEqual([0]);

      component.incrementSignal();

      await fixture.whenStable();

      expect(values).toEqual([0, 1]);
    } finally {
      subscription.unsubscribe();
    }
  });
});
