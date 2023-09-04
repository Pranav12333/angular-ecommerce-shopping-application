import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-user-review',
  templateUrl: './user-review.component.html',
  styleUrls: ['./user-review.component.scss']
})
export class UserReviewComponent implements OnInit {
  
  reviewForm: FormGroup;
  productId: any;
  selectedRating = 0;
  stars: number[] = [1, 2, 3, 4, 5];


  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) {
    this.reviewForm = new FormGroup({
      userName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15), Validators.pattern("^[A-Za-z ]+$")]),
      reviewText: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(400)]),   
      date: new FormControl(''),
      productReviewId: new FormControl(null),
      ratingValue: new FormControl(null)
    });
    
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      // Set the productId in the form control
      this.reviewForm.get('productReviewId')?.setValue(this.productId);
    });
  }

  getFormControl(controlName: string) {
    return this.reviewForm.get(controlName);
  }

  setRating(rating: number) {
    this.selectedRating = rating;
  }

  submitReview(data: any) { 
    // Get the current date
    const currentDate = new Date().toISOString();

    // Set the date field and productReviewId in the form with the current date and procuct id
    this.reviewForm.get('date')?.setValue(currentDate);

    // Now, submit the form
    this.productService.postProductReview(this.reviewForm?.value).subscribe((res) => {
    });

    this.router.navigate(['/all-product'])

  }


}
