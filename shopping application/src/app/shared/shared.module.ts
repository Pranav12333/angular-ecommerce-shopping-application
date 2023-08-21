import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { RupeeFormatPipe } from '../pipes/rupee-format.pipe';

@NgModule({
  declarations: [
    NotFoundComponent,
    RupeeFormatPipe
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    RupeeFormatPipe
  ]
})
export class SharedModule { }
