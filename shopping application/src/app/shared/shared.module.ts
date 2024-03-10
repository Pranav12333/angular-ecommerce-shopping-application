import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { RupeeFormatPipe } from '../pipes/rupee-format.pipe';
import { LoaderComponent } from './loader/loader.component';
import { UserReviewComponent } from './user-review/user-review.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { RatingModule } from 'primeng/rating';
import { PaymentComponent } from './payment/payment.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NotFoundComponent,
    RupeeFormatPipe,
    LoaderComponent,
    UserReviewComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    // RatingModule
  ],
  exports: [
    RupeeFormatPipe,
    LoaderComponent
  ]
})
export class SharedModule { }
