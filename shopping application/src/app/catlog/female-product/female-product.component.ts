import { ReturnStatement } from '@angular/compiler';
import { Component } from '@angular/core';
import { generate } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-female-product',
  templateUrl: './female-product.component.html',
  styleUrls: ['./female-product.component.scss']
})
export class FemaleProductComponent {

  allProduct: any = [];
  object: any;
  selectedOptionFemale: any = "showAll";
  womensWearDropdown: any;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getFemaleData();
    this.womensWearDropdownFun();
  }

  getFemaleData() {
    this.productService.getAllProduct().subscribe((res) => {
      this.object = res;
      this.allProduct = this.object.filter((obj: any) => obj.gender === 'female');
    });
  }

  getFemaleFilteredData() {
    this.productService.getAllProduct().subscribe((res) => {
      this.object = res;
      if (this.selectedOptionFemale == "showAll") {
        this.allProduct = this.object.filter((obj: any) => obj.gender === 'female');
      }
      else {
        this.allProduct = this.object.filter((obj: any) => obj.category === this.selectedOptionFemale);
      }
    })
  }

  womensWearDropdownFun() {
    this.productService.getWomensWearDropdown().subscribe((res)=>{
      this.womensWearDropdown = res;
    })
  }
}
