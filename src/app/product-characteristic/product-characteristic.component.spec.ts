import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCharacteristicComponent } from './product-characteristic.component';

describe('ProductCharacteristicComponent', () => {
  let component: ProductCharacteristicComponent;
  let fixture: ComponentFixture<ProductCharacteristicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCharacteristicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCharacteristicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
