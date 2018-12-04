import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HienThiTaiSanComponent } from './hien-thi-tai-san.component';

describe('HienThiTaiSanComponent', () => {
  let component: HienThiTaiSanComponent;
  let fixture: ComponentFixture<HienThiTaiSanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HienThiTaiSanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HienThiTaiSanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
