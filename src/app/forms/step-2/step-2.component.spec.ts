import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MivesForms } from './step-2.component';

describe('Step2Component', () => {
  let component: MivesForms;
  let fixture: ComponentFixture<MivesForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MivesForms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MivesForms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
