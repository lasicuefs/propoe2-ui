import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoemPage } from './poem.component';

describe('PoemComponent', () => {
  let component: PoemPage;
  let fixture: ComponentFixture<PoemPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoemPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
