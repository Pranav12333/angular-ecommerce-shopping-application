import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserReviewComponent } from './user-review/user-review.component';
import { AllProductComponent } from '../catlog/all-product/all-product.component';


const routes: Routes = [
  {
    path: 'user-review/:id',
    component: UserReviewComponent
  },
  { 
    path: 'all-product' ,
    component: AllProductComponent 
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
