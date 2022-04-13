import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternativeButtonComponent } from './alternative-button.component';

describe('AlternativeButtonComponent', () => {
  let component: AlternativeButtonComponent;
  let fixture: ComponentFixture<AlternativeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlternativeButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlternativeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
