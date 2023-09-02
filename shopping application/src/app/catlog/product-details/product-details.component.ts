import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { toArray } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  productId: any;
  productData: any;
  totalQuantity: any;
  reviewData: any;
  showFullDescription: boolean = false;

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.getProductDetailsById();
    this.getProductsToProceed();
    this.getProductReviewById();

    this.productService.totalQuantity$.subscribe((quantity) => {
      this.totalQuantity = quantity;
    });
  }
  toggleDescription() {
    this.showFullDescription = !this.showFullDescription;
  }

  
  private updateTotalQuantity() {
    this.productService.compareData().subscribe((items) => {
      this.productService.updateTotalQuantity(items.length);
    });
  }

  getProductDetailsById() {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.productService.getDataById(this.productId, this.productData).pipe(toArray()).subscribe((res) => {
      this.productData = res;
    })
  }

  getProductReviewById() {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.productService.getProductReview().subscribe((res) => {
      // Ensure res is an array, and then filter the reviews based on productReviewId
      if (Array.isArray(res)) {
        this.reviewData = res.filter((review: any) => review.productReviewId === this.productId);
      } else {
        // Handle the case where res is not an array (e.g., if the API returns a single object)
        this.reviewData = [];
      }
    });
  }

  adding() {
    if (this.productData && this.productData.length > 0) {
      const productToUpdate = this.productData[0];

      // Check if the product's cart property is already set to 1
      if (productToUpdate.cart === 1) {
        alert("Product is already exist in the cart.");
      }
      productToUpdate.cart = 1;
      this.productService.updateData(this.productId, productToUpdate).subscribe((res) => {
      }, (error) => {
        console.log(error);
      });
      this.updateTotalQuantity();
      this.productService.compareData().subscribe((items) => {
        this.productService.updateTotalQuantity(items.length);
      });
    }
  }
  
  getProductsToProceed() {
    this.productService.compareData().subscribe(products => {
    });
  }

  review() {
    this.router.navigate(['/user-review', this.productId]);
  }

  Payment(){
    this.router.navigate(['/payment',this.productId])
  }


}

