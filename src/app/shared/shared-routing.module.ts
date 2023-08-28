import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserReviewComponent } from './user-review/user-review.component';
import { AllProductComponent } from '../catlog/all-product/all-product.component';
import { PaymentComponent } from './payment/payment.component';


const routes: Routes = [
  {
    path: 'user-review/:id',
    component: UserReviewComponent
  },
  { 
    path: 'all-product' ,
    component: AllProductComponent 
  },
  {
    path: 'payment',
    component: PaymentComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
