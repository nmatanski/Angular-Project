import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpanishCuisineComponent } from './spanish-cuisine.component';

describe('SpanishCuisineComponent', () => {
  let component: SpanishCuisineComponent;
  let fixture: ComponentFixture<SpanishCuisineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpanishCuisineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpanishCuisineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
