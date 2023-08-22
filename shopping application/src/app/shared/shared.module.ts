import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { RupeeFormatPipe } from '../pipes/rupee-format.pipe';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    RupeeFormatPipe,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    RupeeFormatPipe,
    LoaderComponent
  ]
})
export class SharedModule { }
