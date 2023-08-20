import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddDataComponent } from './add-data/add-data.component';
import { UpdateDataComponent } from './update-data/update-data.component';
import { ShowDataComponent } from './show-data/show-data.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddDataComponent,
    UpdateDataComponent,
    ShowDataComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
