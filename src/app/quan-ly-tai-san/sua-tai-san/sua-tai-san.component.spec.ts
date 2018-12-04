import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuaTaiSanComponent } from './sua-tai-san.component';

describe('SuaTaiSanComponent', () => {
  let component: SuaTaiSanComponent;
  let fixture: ComponentFixture<SuaTaiSanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuaTaiSanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuaTaiSanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
