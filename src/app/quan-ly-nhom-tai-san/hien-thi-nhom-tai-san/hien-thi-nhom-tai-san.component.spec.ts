import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HienThiNhomTaiSanComponent } from './hien-thi-nhom-tai-san.component';

describe('HienThiNhomTaiSanComponent', () => {
  let component: HienThiNhomTaiSanComponent;
  let fixture: ComponentFixture<HienThiNhomTaiSanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HienThiNhomTaiSanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HienThiNhomTaiSanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
