import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuaNguoiDungComponent } from './sua-nguoi-dung.component';

describe('SuaNguoiDungComponent', () => {
  let component: SuaNguoiDungComponent;
  let fixture: ComponentFixture<SuaNguoiDungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuaNguoiDungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuaNguoiDungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
