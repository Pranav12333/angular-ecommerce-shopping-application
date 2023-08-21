import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ProductService } from 'src/app/services/product.service';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {

  addedProducts: any;
  index : number = 0;
  totalprice: number = 0;
  totalQuantity : number = 0;

  constructor(private productService: ProductService, private sanitizer: DomSanitizer,  private router: Router) { }
  ngOnInit() {
    this.fatchData();
  }

  fatchData() {
    this.productService.getAllProduct().subscribe(
      (res) => {
        this.addedProducts = res.reduce((accumulator, product) => {
          if (product.cart === 1) {
            product.quantity = 1;
            console.log(product.quantity);
            
            this.totalprice += product.price;
            accumulator.push(product);
            console.log(product.price);
            console.log(this.totalprice);
            
          }
          return accumulator;
        }, []);
        
        this.totalQuantity = this.addedProducts.length;
      }
    );
  }
  
  incrementValue(item: any, price: number) {
    if (item.quantity < 10) {
      item.quantity++;
      this.totalprice += price;
    }
  }

  decrementValue(item: any, price: number) {
    if (item.quantity > 1) {
      item.quantity--;
      this.totalprice -= price;
    }
  }

  deleteProducts(id: any) {
    const updatedData = { cart: 0 };
    this.productService.patchData(id, updatedData).subscribe(() => {
      this.fatchData();
      this.productService.compareData().subscribe((items) => {
        this.productService.updateTotalQuantity(items.length);
      });
    });
  }

  decodeImageBase64() {
    this.addedProducts.forEach((product: { image: string; }) => {
      const imageUrl = 'data:image/jpeg;base64,' + product.image;
    });
  }
}



