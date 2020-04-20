import { TestBed } from '@angular/core/testing';

import { MessangeService } from './messange.service';

describe('MessangeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessangeService = TestBed.get(MessangeService);
    expect(service).toBeTruthy();
  });
});
