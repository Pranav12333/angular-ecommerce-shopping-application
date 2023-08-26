import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FemaleProductComponent } from './female-product.component';

describe('FemaleProductComponent', () => {
  let component: FemaleProductComponent;
  let fixture: ComponentFixture<FemaleProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FemaleProductComponent]
    });
    fixture = TestBed.createComponent(FemaleProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
