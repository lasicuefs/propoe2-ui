import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhythmPatternForms } from './step-1.component';

describe('Step1Component', () => {
  let component: RhythmPatternForms;
  let fixture: ComponentFixture<RhythmPatternForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RhythmPatternForms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RhythmPatternForms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
