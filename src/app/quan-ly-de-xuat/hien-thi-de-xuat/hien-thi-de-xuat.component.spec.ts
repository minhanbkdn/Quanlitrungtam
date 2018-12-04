import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HienThiDeXuatComponent } from './hien-thi-de-xuat.component';

describe('HienThiDeXuatComponent', () => {
  let component: HienThiDeXuatComponent;
  let fixture: ComponentFixture<HienThiDeXuatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HienThiDeXuatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HienThiDeXuatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
