import { TestBed } from '@angular/core/testing';

import { RapidapiService } from './rapidapi.service';

describe('RapidapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RapidapiService = TestBed.get(RapidapiService);
    expect(service).toBeTruthy();
  });
});
