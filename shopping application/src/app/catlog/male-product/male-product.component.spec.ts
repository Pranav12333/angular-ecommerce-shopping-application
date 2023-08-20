import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaleProductComponent } from './male-product.component';

describe('MaleProductComponent', () => {
  let component: MaleProductComponent;
  let fixture: ComponentFixture<MaleProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaleProductComponent]
    });
    fixture = TestBed.createComponent(MaleProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
