import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxUsageComponent } from './rx-usage.component';

describe('RxUsageComponent', () => {
  let component: RxUsageComponent;
  let fixture: ComponentFixture<RxUsageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxUsageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
