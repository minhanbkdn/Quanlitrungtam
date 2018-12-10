import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HienThiGroupComponent } from './hien-thi-group.component';

describe('HienThiGroupComponent', () => {
  let component: HienThiGroupComponent;
  let fixture: ComponentFixture<HienThiGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HienThiGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HienThiGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
