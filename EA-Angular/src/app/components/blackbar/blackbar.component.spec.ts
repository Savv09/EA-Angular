import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackbarComponent } from './blackbar.component';

describe('BlackbarComponent', () => {
  let component: BlackbarComponent;
  let fixture: ComponentFixture<BlackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlackbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
