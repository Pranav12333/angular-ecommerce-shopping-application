import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { RupeeFormatPipe } from '../pipes/rupee-format.pipe';
import { LoaderComponent } from './loader/loader.component';
import { UserReviewComponent } from './user-review/user-review.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NotFoundComponent,
    RupeeFormatPipe,
    LoaderComponent,
    UserReviewComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    RupeeFormatPipe,
    LoaderComponent
  ]
})
export class SharedModule { }
