import { TestBed, inject } from '@angular/core/testing';

import { ItalianCuisineService } from './italian-cuisine.service';

describe('ItalianCuisineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItalianCuisineService]
    });
  });

  it('should be created', inject([ItalianCuisineService], (service: ItalianCuisineService) => {
    expect(service).toBeTruthy();
  }));
});
