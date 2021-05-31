import { TestBed } from '@angular/core/testing';

import { StarsWarService } from './stars-war.service';

describe('StarsWarService', () => {
  let service: StarsWarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarsWarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
