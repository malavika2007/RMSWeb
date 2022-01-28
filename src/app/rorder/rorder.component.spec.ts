import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ROrderComponent } from './rorder.component';

describe('ROrderComponent', () => {
  let component: ROrderComponent;
  let fixture: ComponentFixture<ROrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ROrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ROrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
