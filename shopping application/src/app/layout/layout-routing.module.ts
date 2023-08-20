import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { authGuardGuard } from '../guard/auth-guard.guard';
import { AllProductComponent } from '../catlog/all-product/all-product.component';
import { FemaleProductComponent } from '../catlog/female-product/female-product.component';
import { MaleProductComponent } from '../catlog/male-product/male-product.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    // canActivate: [authGuardGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
    // canActivate: [authGuardGuard]
  },
  {
    path: 'catlog/all-product',
    component: AllProductComponent,
    // canActivate: [authGuardGuard]
  },
  {
    path: 'catlog/male-product',
    component: MaleProductComponent,
    // canActivate: [authGuardGuard]
  },
  {
    path: 'catlog/female-product',
    component: FemaleProductComponent,
    // canActivate: [authGuardGuard]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
