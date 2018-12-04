import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HienThiKeHoachComponent } from './hien-thi-ke-hoach.component';

describe('HienThiKeHoachComponent', () => {
  let component: HienThiKeHoachComponent;
  let fixture: ComponentFixture<HienThiKeHoachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HienThiKeHoachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HienThiKeHoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
