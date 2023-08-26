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

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.getProductDetailsById();
    this.getProductsToProceed();

    this.productService.totalQuantity$.subscribe((quantity) => {
      this.totalQuantity = quantity;
    });
    this.showReviewFun();
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
    this.router.navigate(['/user-review',this.productId]);
  }

  showReviewFun() {
    this.productService.getProductReview().subscribe((res) => {
      this.reviewData = res;
    })
  }


}

