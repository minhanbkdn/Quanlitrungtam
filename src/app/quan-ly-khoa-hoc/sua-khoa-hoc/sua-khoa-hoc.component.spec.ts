import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuaKhoaHocComponent } from './sua-khoa-hoc.component';

describe('SuaKhoaHocComponent', () => {
  let component: SuaKhoaHocComponent;
  let fixture: ComponentFixture<SuaKhoaHocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuaKhoaHocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuaKhoaHocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
