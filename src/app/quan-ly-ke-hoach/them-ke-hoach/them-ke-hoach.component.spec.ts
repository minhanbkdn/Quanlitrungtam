import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemKeHoachComponent } from './them-ke-hoach.component';

describe('ThemKeHoachComponent', () => {
  let component: ThemKeHoachComponent;
  let fixture: ComponentFixture<ThemKeHoachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemKeHoachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemKeHoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
