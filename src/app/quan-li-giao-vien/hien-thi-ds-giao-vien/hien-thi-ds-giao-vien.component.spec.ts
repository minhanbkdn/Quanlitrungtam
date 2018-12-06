import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HienThiDsGiaoVienComponent } from './hien-thi-ds-giao-vien.component';

describe('HienThiDsGiaoVienComponent', () => {
  let component: HienThiDsGiaoVienComponent;
  let fixture: ComponentFixture<HienThiDsGiaoVienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HienThiDsGiaoVienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HienThiDsGiaoVienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
