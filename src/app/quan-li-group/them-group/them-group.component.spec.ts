import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemGroupComponent } from './them-group.component';

describe('ThemGroupComponent', () => {
  let component: ThemGroupComponent;
  let fixture: ComponentFixture<ThemGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
