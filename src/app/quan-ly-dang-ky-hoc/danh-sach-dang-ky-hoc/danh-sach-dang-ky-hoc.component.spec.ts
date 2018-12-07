import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachDangKyHocComponent } from './danh-sach-dang-ky-hoc.component';

describe('DanhSachDangKyHocComponent', () => {
  let component: DanhSachDangKyHocComponent;
  let fixture: ComponentFixture<DanhSachDangKyHocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhSachDangKyHocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachDangKyHocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
