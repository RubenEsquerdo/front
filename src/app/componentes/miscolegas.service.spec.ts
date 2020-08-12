import { TestBed } from '@angular/core/testing';

import { MiscolegasService } from './miscolegas.service';

describe('MiscolegasService', () => {
  let service: MiscolegasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiscolegasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
