  import { Component, OnInit } from '@angular/core';
  import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
  import { ProductService } from 'src/app/services/product.service';
  import { ActivatedRoute } from '@angular/router';

  @Component({
    selector: 'app-user-review',
    templateUrl: './user-review.component.html',
    styleUrls: ['./user-review.component.scss']
  })
  export class UserReviewComponent implements OnInit {
    reviewForm: FormGroup;
    productId: any;
    selectedRating: any;

    constructor(private productService: ProductService, private route: ActivatedRoute) {
      this.reviewForm = new FormGroup({
        userName: new FormControl('', [Validators.required]),
        reviewText: new FormControl('', [Validators.required]),
        rating:  new FormControl(0),  
        date: new FormControl(''),
        productReviewId: new FormControl(''),
      });
    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        this.productId = params['id'];
        console.log(this.productId);
      });
    }

    submitReview(data: any) {


      // Get the current date
      const currentDate = new Date().toISOString();

      // Set the date field and productReviewId in the form with the current date and procuct id
      this.reviewForm.get('date')?.setValue(currentDate);
      this.reviewForm.get('productReviewId')?.setValue(this.productId);

      // Now, submit the form
      this.productService.postProductReview(this.reviewForm?.value).subscribe((res) => {
      });

    }


  }
