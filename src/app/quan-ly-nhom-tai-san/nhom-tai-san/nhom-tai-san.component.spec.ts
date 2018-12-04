import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NhomTaiSanComponent } from './nhom-tai-san.component';

describe('NhomTaiSanComponent', () => {
  let component: NhomTaiSanComponent;
  let fixture: ComponentFixture<NhomTaiSanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhomTaiSanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhomTaiSanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
