import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsDone } from './what-is-done';

describe('WhatIsDone', () => {
  let component: WhatIsDone;
  let fixture: ComponentFixture<WhatIsDone>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatIsDone]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatIsDone);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
