import { TestBed, inject } from '@angular/core/testing';

import { BlogserviceyService } from './blogservicey.service';

describe('BlogserviceyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogserviceyService]
    });
  });

  it('should be created', inject([BlogserviceyService], (service: BlogserviceyService) => {
    expect(service).toBeTruthy();
  }));
});
