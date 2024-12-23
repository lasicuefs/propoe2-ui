import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StanzaPattern as StanzaPatternComponent } from './stanza-pattern.component';

describe('StanzaPatternComponent', () => {
  let component: StanzaPatternComponent;
  let fixture: ComponentFixture<StanzaPatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StanzaPatternComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StanzaPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
