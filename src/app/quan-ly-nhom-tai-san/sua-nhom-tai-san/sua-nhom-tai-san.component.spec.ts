import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuaNhomTaiSanComponent } from './sua-nhom-tai-san.component';

describe('SuaNhomTaiSanComponent', () => {
  let component: SuaNhomTaiSanComponent;
  let fixture: ComponentFixture<SuaNhomTaiSanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuaNhomTaiSanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuaNhomTaiSanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
