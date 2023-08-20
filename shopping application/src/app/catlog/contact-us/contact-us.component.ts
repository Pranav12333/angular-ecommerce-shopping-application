import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  showProductDropdown: any[] = [];
  

  constructor(private productService:ProductService){}

  ngOnInit(){
    this.ShowProductDropdownFun();
  }

  ShowProductDropdownFun() {
    this.productService.getShowProductDropdown().subscribe((res) => {
      this.showProductDropdown = res;
    });
  }

  
}
