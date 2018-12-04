import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemTaiSanComponent } from './them-tai-san.component';

describe('ThemTaiSanComponent', () => {
  let component: ThemTaiSanComponent;
  let fixture: ComponentFixture<ThemTaiSanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemTaiSanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemTaiSanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
