import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WOrderComponent } from './worder.component';

describe('WOrderComponent', () => {
  let component: WOrderComponent;
  let fixture: ComponentFixture<WOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
