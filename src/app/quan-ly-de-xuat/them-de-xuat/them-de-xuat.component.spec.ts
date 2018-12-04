import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemDeXuatComponent } from './them-de-xuat.component';

describe('ThemDeXuatComponent', () => {
  let component: ThemDeXuatComponent;
  let fixture: ComponentFixture<ThemDeXuatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemDeXuatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemDeXuatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
