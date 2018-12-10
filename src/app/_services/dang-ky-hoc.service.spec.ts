import { TestBed } from '@angular/core/testing';

import { DangKyHocService } from './dang-ky-hoc.service';

describe('DangKyHocService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DangKyHocService = TestBed.get(DangKyHocService);
    expect(service).toBeTruthy();
  });
});
