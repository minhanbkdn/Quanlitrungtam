import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuaHocVienComponent } from './sua-hoc-vien.component';

describe('SuaHocVienComponent', () => {
  let component: SuaHocVienComponent;
  let fixture: ComponentFixture<SuaHocVienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuaHocVienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuaHocVienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
