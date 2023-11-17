import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductComponent } from './all-product/all-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FemaleProductComponent } from './female-product/female-product.component';
import { MaleProductComponent } from './male-product/male-product.component';
import { authGuardGuard } from '../guard/auth-guard.guard';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';


const routes: Routes = [
  {
    path: 'all-product', component: AllProductComponent,
    // canActivate: [authGuardGuard]
  },
  {
    path: 'female-product', component: FemaleProductComponent,
    // canActivate: [authGuardGuard]
  },
  {
    path: 'male-product', component: MaleProductComponent,
    // canActivate: [authGuardGuard]
  },
  {
    path: 'product-details/:id', component: ProductDetailsComponent,
    // canActivate: [authGuardGuard]
  },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  {
    path: 'add-to-cart', component: AddToCartComponent,
    // canActivate: [authGuardGuard]
  },
  {
    path: 'my-order', component : MyOrdersComponent,
    // canActivate: [authGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatlogRoutingModule { }
