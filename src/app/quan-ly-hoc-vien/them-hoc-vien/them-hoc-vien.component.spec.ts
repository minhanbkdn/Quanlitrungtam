import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemHocVienComponent } from './them-hoc-vien.component';

describe('ThemHocVienComponent', () => {
  let component: ThemHocVienComponent;
  let fixture: ComponentFixture<ThemHocVienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemHocVienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemHocVienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
