import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HairdresserProfileComponent } from './hairdresser-profile.component';

describe('HairdresserProfileComponent', () => {
  let component: HairdresserProfileComponent;
  let fixture: ComponentFixture<HairdresserProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HairdresserProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HairdresserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
