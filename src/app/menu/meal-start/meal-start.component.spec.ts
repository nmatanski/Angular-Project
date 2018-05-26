import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealStartComponent } from './meal-start.component';

describe('MealStartComponent', () => {
  let component: MealStartComponent;
  let fixture: ComponentFixture<MealStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
