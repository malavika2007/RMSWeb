import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCmpComponent } from './base-cmp.component';

describe('BaseCmpComponent', () => {
  let component: BaseCmpComponent;
  let fixture: ComponentFixture<BaseCmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseCmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
