import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.scss']
})
export class ShowDataComponent {

  allData: any = [];

  constructor(
    private productService: ProductService,
    private userService: UserService,
    private adminService: AdminService,
    private router: Router
    ) { }

  ngOnInit() {
    this.getData(); 
  }

  getData() {
    this.productService.getAllProduct().subscribe((res) => {
      this.allData = res;
    });
  }

  deleteData(id: any) {
    this.productService.deleteData(id).subscribe((res) => {
      this.getData();
    })
  }
}
