import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-male-product',
  templateUrl: './male-product.component.html',
  styleUrls: ['./male-product.component.scss']
})
export class MaleProductComponent {

  object : any = [];
  allProduct : any = [];
  selectedOptionMale : any = "showAll";
  mansWearDropdown : any; 

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getMaleData();
    this.mansWearDropdownFun()
  }

  getMaleData() {
    this.productService.getAllProduct().subscribe((res) => {
      this.object = res;
      this.allProduct = this.object.filter((obj: any) => obj.gender === 'male')
    });
  }

  getMaleFilteredData(){
    this.productService.getAllProduct().subscribe((res)=>{
      this.object = res;
      if(this.selectedOptionMale == "showAll"){
        this.allProduct = this.object.filter((obj:any) => obj.gender === 'male');
      }
      else{
        this.allProduct = this.object.filter((obj:any) => obj.category === this.selectedOptionMale);
      }
    })
  }

  mansWearDropdownFun(){
    this.productService.getMansWearDropdown().subscribe((res)=>{
      this.mansWearDropdown = res;
    })
  }
}
