import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansDataComponent } from './plans-data.component';

describe('PlansDataComponent', () => {
  let component: PlansDataComponent;
  let fixture: ComponentFixture<PlansDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlansDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlansDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
