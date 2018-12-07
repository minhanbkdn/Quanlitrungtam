import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachKhoaHocComponent } from './danh-sach-khoa-hoc.component';

describe('DanhSachKhoaHocComponent', () => {
  let component: DanhSachKhoaHocComponent;
  let fixture: ComponentFixture<DanhSachKhoaHocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhSachKhoaHocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachKhoaHocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
