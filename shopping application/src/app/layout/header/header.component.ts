import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { ProductService } from 'src/app/services/product.service';
import { SharedService } from 'src/app/services/shared.service';
import { ToasterService } from 'src/app/services/toaster.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  username: any;
  maleDropdown: boolean = false;
  femaleDropdown: boolean = false;
  addProduct = false;
  showProduct = false;
  addToCart = true;
  selectedOption: number = 1;
  defaultSelected: number = 1;
  notselected: number = 0;
  showProductDropdown: any[] = [];
  addProductDropdown: any[] = [];
  totalQuantity: any;

  constructor(
    private router: Router, private userService: UserService,
    private productService: ProductService,
    private adminService: AdminService,
    private toasterService: ToasterService,
    private sharedService: SharedService) {

    this.userService.username$.subscribe((names) => {
      this.username = names;
      this.updateDropdowns();
    })
  }

  ngOnInit() {
    this.launchProductDropdown();
    this.productService.totalQuantity$.subscribe((quantity) => {
      this.totalQuantity = quantity;
    });
    this.updateTotalQuantity();
    this.username = localStorage.getItem('username');
  }

  filterProductsByTitle(event: Event) {
    this.productService.filterProductsByTitle(event);
  }

  hideSlider() {
    this.sharedService.setShowCarousel(false);
    this.productService.setAllProduct(true);
  }
  showSlider() {
    this.sharedService.setShowCarousel(true);
    this.productService.setAllProduct(false);
    // this.userService.clearUsername();
  }

  private updateTotalQuantity() {
    this.productService.compareData().subscribe((items) => {
      this.productService.updateTotalQuantity(items.length);
    });
  }

  launchProductDropdown() {
    this.AddProductDropdownFun();
    this.ShowProductDropdownFun();
  }

  ShowProductDropdownFun() {
    this.productService.getShowProductDropdown().subscribe((res) => {
      this.showProductDropdown = res;
    });
  }
  AddProductDropdownFun() {
    this.productService.getAddProductDropdown().subscribe((res) => {
      this.addProductDropdown = res;
    });
  }

  logout() {
    // this.loaderService.hideloader();
    this.userService.clearUsername();
    this.username = null;
    localStorage.removeItem('username')
    this.toasterService.logOutToaster();
  }

  navigateTo(event: any) {
    const route = event.target.value;
    if (route === 'add-male') {
      this.router.navigate(['/admin/add'], { queryParams: { gender: 'male' } });
      this.setMaleDropdown();
    } else if (route === 'add-female') {
      this.router.navigate(['/admin/add'], { queryParams: { gender: 'female' } });
      this.setFemaleDropdown();
    } else {
      this.router.navigate([route]);
    }
  }

  setMaleDropdown() {
    localStorage.setItem("maleDropdown", "true");
    this.adminService.maleDropdownChange$.next(true);
    this.adminService.femaleDropdownChange$.next(false);
  }

  setFemaleDropdown() {
    localStorage.setItem("femaleDropdown", "true");
    this.adminService.femaleDropdownChange$.next(true);
    this.adminService.maleDropdownChange$.next(false);
  }

  private updateDropdowns() {
    this.username = this.userService.getUsernameValue();
    this.username = localStorage.getItem('username');
    this.addProduct = this.username === "Admin";
    this.showProduct = this.username !== "Admin";
  }

}
