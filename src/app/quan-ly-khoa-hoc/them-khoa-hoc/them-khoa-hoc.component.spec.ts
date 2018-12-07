import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemKhoaHocComponent } from './them-khoa-hoc.component';

describe('ThemKhoaHocComponent', () => {
  let component: ThemKhoaHocComponent;
  let fixture: ComponentFixture<ThemKhoaHocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemKhoaHocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemKhoaHocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
