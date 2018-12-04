import { TestBed } from '@angular/core/testing';

import { NhomTaiSanService } from './nhom-tai-san.service';

describe('NhomTaiSanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NhomTaiSanService = TestBed.get(NhomTaiSanService);
    expect(service).toBeTruthy();
  });
});
