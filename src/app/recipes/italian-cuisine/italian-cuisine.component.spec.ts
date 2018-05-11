import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItalianCuisineComponent } from './italian-cuisine.component';

describe('ItalianCuisineComponent', () => {
  let component: ItalianCuisineComponent;
  let fixture: ComponentFixture<ItalianCuisineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItalianCuisineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItalianCuisineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
