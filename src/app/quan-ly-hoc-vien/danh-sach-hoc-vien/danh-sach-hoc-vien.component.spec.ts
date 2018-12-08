import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachHocVienComponent } from './danh-sach-hoc-vien.component';

describe('DanhSachHocVienComponent', () => {
  let component: DanhSachHocVienComponent;
  let fixture: ComponentFixture<DanhSachHocVienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhSachHocVienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachHocVienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
