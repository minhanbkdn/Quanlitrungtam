import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeXuatComponent } from './de-xuat.component';

describe('DeXuatComponent', () => {
  let component: DeXuatComponent;
  let fixture: ComponentFixture<DeXuatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeXuatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeXuatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
