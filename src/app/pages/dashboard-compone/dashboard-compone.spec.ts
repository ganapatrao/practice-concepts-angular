import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCompone } from './dashboard-compone';

describe('DashboardCompone', () => {
  let component: DashboardCompone;
  let fixture: ComponentFixture<DashboardCompone>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardCompone]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardCompone);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
