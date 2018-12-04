import { TestBed } from '@angular/core/testing';

import { TaiSanService } from './tai-san.service';

describe('TaiSanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaiSanService = TestBed.get(TaiSanService);
    expect(service).toBeTruthy();
  });
});
