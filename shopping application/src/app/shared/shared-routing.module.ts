import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserReviewComponent } from './user-review/user-review.component';
import { AllProductComponent } from '../catlog/all-product/all-product.component';
import { PaymentComponent } from './payment/payment.component';
import { CanDeactivateGuard } from '../guard/can-deactivate.guard';
import { authGuardGuard } from '../guard/auth-guard.guard';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {
    path: 'user-review/:id',
    component: UserReviewComponent,
    canActivate : [authGuardGuard]
  },
  { 
    path: 'all-product' ,
    component: AllProductComponent,
    canActivate : [authGuardGuard]
  },
  {
    path: 'payment/:id',
    component: PaymentComponent,
    // canActivate : [authGuardGuard],
    canDeactivate : [CanDeactivateGuard]
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
