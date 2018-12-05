import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuaGiaoVienComponent } from './sua-giao-vien.component';

describe('SuaGiaoVienComponent', () => {
  let component: SuaGiaoVienComponent;
  let fixture: ComponentFixture<SuaGiaoVienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuaGiaoVienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuaGiaoVienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
