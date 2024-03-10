import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatlogRoutingModule } from './catlog-routing.module';
import { AllProductComponent } from './all-product/all-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FemaleProductComponent } from './female-product/female-product.component';
import { MaleProductComponent } from './male-product/male-product.component';
import { FormsModule } from '@angular/forms';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { SharedModule } from '../shared/shared.module';
import { MyOrdersComponent } from './my-orders/my-orders.component';


@NgModule({
  declarations: [
    AllProductComponent,
    ProductDetailsComponent,
    FemaleProductComponent,
    MaleProductComponent,
    ContactUsComponent,
    AboutUsComponent,
    AddToCartComponent,
    MyOrdersComponent,
    
  ],
  imports: [
    CommonModule,
    CatlogRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class CatlogModule { }
