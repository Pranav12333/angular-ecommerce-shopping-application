import { Component, importProvidersFrom } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.scss']
})
export class AllProductComponent {
  allProduct: any = [];
  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    this.productService.getAllProduct().subscribe((res) => {
      this.allProduct = res;
    })
  }
}
