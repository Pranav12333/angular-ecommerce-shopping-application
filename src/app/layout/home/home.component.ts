import { Component, Input } from '@angular/core';
import { RupeeFormatPipe } from 'src/app/pipes/rupee-format.pipe';
import { ProductService } from 'src/app/services/product.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  allProduct: any[] = [];
  filteredProducts: any[] = [];
  showCarousel = true;
  showFilteredProducts = false;
  selectedPrice: { min: number; max: number } = { min: 1000, max: 5000 };
  test:any;

  constructor(private productService: ProductService, private sharedService: SharedService) {
    this.sharedService.showCarousel$.subscribe((show) => {
      this.showCarousel = show;
    });
    this.productService.filteredProducts$.subscribe((res) => {
      this.filteredProducts = res;
    });
  }

  ngOnInit() {
    this.getAllData().then((result) => { })
      .catch((error) => { });
  }


  getAllData(): Promise<any[]> {
    return new Promise<any[]>((resolve, reject) => {
      this.productService.getAllProduct().subscribe((res) => {
        // console.log(res,'res');
        this.test =res;
        console.log(this.test.allProduct);
        this.allProduct = this.test.allProduct;
        
        this.showFilteredProducts = false;
        this.productService.allProduct$.subscribe((res) => {
          this.showFilteredProducts = res;
        });
        resolve(res); // Resolve the promise with the result
      },
        (error) => {
          reject(error); // Reject the promise if an error occurs
        }
      );
    });
  }




  onPriceRangeChange(event: Event) {
    this.showFilteredProducts = true;
    const selectedPrice = (event.target as HTMLInputElement).valueAsNumber;
    this.selectedPrice = { ...this.selectedPrice, max: selectedPrice };
    this.filteredProducts = this.allProduct.filter((product: { price: number }) =>
      product.price >= this.selectedPrice.min && product.price <= this.selectedPrice.max
    );
  }
}


