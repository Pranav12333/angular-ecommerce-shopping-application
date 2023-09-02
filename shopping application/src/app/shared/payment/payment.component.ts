import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  selectedDate: Date = new Date();
  formSubmitted = false;
  productId: any;
  data: any;
  paymentForm: any;

  constructor(private productService: ProductService, private route: ActivatedRoute, private formBuilder: FormBuilder) {
    this.productId = this.route.snapshot.paramMap.get('id');

    this.paymentForm = new FormGroup({
      title: new FormControl(''),
      category: new FormControl(''),
      price: new FormControl(''),
      cardNumber: new FormControl(''),
      cvv: new FormControl(''),
      expiryDate: new FormControl(''),
      billingAddress: new FormControl(''),
      termsCheck: new FormControl(false),
    });
  }

  canDeactivate(): boolean {
    if (this.formSubmitted) { return true }
    else { return window.confirm('Are you sure you want to leave this page without submitting the form?') }
  }

  ngOnInit() {
    this.productService.getDataById(this.productId, this.data).subscribe((res) => {
      this.data = res;
      // Set the initial form values here
      this.paymentForm.setValue({
        title: this.data.title,
        category: this.data.category,
        price: this.data.price,
        cardNumber: (''),
        cvv: (''),
        expiryDate: (''),
        billingAddress: (''),
        termsCheck: (false),
      });
    });
  }

  submitPayment() {
    this.formSubmitted = true;
    console.log(this.paymentForm.value);

  }

}


