import { TestBed } from '@angular/core/testing';

import { KeHoachService } from './ke-hoach.service';

describe('KeHoachService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KeHoachService = TestBed.get(KeHoachService);
    expect(service).toBeTruthy();
  });
});
