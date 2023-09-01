import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router  } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  selectedDate: Date = new Date();
  formSubmitted = false;

  canDeactivate(): boolean {
    if (this.formSubmitted) {
      return true;
    } else {
      return window.confirm('Are you sure you want to leave this page without submitting the form?');
    }
  }

  submitPayment() {
    this.formSubmitted = true;
  }
}
