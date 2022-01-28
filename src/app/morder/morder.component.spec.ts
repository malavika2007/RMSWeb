import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MOrderComponent } from './morder.component';

describe('MOrderComponent', () => {
  let component: MOrderComponent;
  let fixture: ComponentFixture<MOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
