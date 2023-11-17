import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDataComponent } from './add-data/add-data.component';
import { ShowDataComponent } from './show-data/show-data.component';
import { UpdateDataComponent } from './update-data/update-data.component';
import { authGuardGuard } from '../guard/auth-guard.guard';
import { ProductDetailsComponent } from '../catlog/product-details/product-details.component';

const routes: Routes = [
  {
    path:'show',
    component:ShowDataComponent,
    // canActivate:[authGuardGuard]
  },
  {
    path:'add',
    component:AddDataComponent,
    // canActivate:[authGuardGuard]
  },

  {
    path:'product-details/:id',
    component:ProductDetailsComponent,
    // canActivate:[authGuardGuard]
  },
  {
    path:'update/:id',
    component:UpdateDataComponent,
    // canActivate:[authGuardGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
