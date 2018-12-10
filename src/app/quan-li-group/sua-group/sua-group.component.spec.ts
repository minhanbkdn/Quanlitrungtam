import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuaGroupComponent } from './sua-group.component';

describe('SuaGroupComponent', () => {
  let component: SuaGroupComponent;
  let fixture: ComponentFixture<SuaGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuaGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuaGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
