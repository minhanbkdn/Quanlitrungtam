import { TestBed } from '@angular/core/testing';

import { KhoahocService } from './khoahoc.service';

describe('KhoahocService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KhoahocService = TestBed.get(KhoahocService);
    expect(service).toBeTruthy();
  });
});
