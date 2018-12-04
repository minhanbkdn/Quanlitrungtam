import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongKeTaiSanComponent } from './thong-ke-tai-san.component';

describe('ThongKeTaiSanComponent', () => {
  let component: ThongKeTaiSanComponent;
  let fixture: ComponentFixture<ThongKeTaiSanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongKeTaiSanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongKeTaiSanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
