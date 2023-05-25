import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaDettailComponent } from './pizza-dettail.component';

describe('PizzaDettailComponent', () => {
  let component: PizzaDettailComponent;
  let fixture: ComponentFixture<PizzaDettailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PizzaDettailComponent]
    });
    fixture = TestBed.createComponent(PizzaDettailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
