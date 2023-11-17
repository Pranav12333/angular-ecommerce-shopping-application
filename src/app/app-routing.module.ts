import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { HomeComponent } from './layout/home/home.component';

const routes: Routes = [
  
  {
    path: 'user-auth',
    loadChildren: () => import('./user-auth/user-auth.module').then(u => u.UserAuthModule)
  },

  {
    path: 'layout',
    loadChildren: () => import('./layout/layout.module').then(l => l.LayoutModule),
  },
  {
    path: 'catlog',
    loadChildren: () => import('./catlog/catlog.module').then(c => c.CatlogModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(a => a.AdminModule)
  },
  // {
  //   path: '**',
  //   redirectTo: '/not-found'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
