import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemNhomTaiSanComponent } from './them-nhom-tai-san.component';

describe('ThemNhomTaiSanComponent', () => {
  let component: ThemNhomTaiSanComponent;
  let fixture: ComponentFixture<ThemNhomTaiSanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemNhomTaiSanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemNhomTaiSanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
