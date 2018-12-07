import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachPhanQuyenComponent } from './danh-sach-phan-quyen.component';

describe('DanhSachPhanQuyenComponent', () => {
  let component: DanhSachPhanQuyenComponent;
  let fixture: ComponentFixture<DanhSachPhanQuyenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhSachPhanQuyenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachPhanQuyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
