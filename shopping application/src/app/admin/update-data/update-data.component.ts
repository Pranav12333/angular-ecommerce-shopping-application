import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.scss']
})

export class UpdateDataComponent {
  productId: any;
  allData: any = [];
  selectedFile: File | null = null;
  selectedOptionMale: any;
  selectedOptionFemale: any;
  dataForm!: FormGroup;
  maleDropdown: boolean = true;
  femaleDropdown: boolean = true;
  mansWearDropdown: any;
  womensWearDropdown: any;

  constructor(private productService: ProductService, private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    let username = this.userService.getUsernameValue();
    if (username != 'Admin') {
      this.userService.clearUsername();
    }

    this.dataForm = new FormGroup({
      category: new FormControl('', Validators.required),
      gender: new FormControl(''),
      title: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      cart: new FormControl(0),
    });
    this.getDataById();
  }

  getDataById() {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.productService.getDataById(this.productId, this.allData).subscribe((res) => {

      this.allData = res;

      this.maleDropdown = this.allData.gender === "male";
      this.femaleDropdown = !this.maleDropdown;

      this.dataForm.patchValue({
        category: this.allData.category || '',
        gender: this.allData.gender || '',
        title: this.allData.title || '',
        image: this.allData.image || '',
        price: this.allData.price || '',
        description: this.allData.description || '',
        cart: this.allData.cart || '',
      })
      if (this.maleDropdown) {
        this.selectedOptionMale = this.allData.category || '';
      } else {
        this.selectedOptionFemale = this.allData.category || '';
      }
    })

    this.launchWearDropdown();

  }

  launchWearDropdown() {
    this.mansWearDropdownFun();
    this.womensWearDropdownFun();
  }
  mansWearDropdownFun() {
    this.productService.getMansWearDropdown().subscribe((res) => {
      this.mansWearDropdown = res;
    });
  }
  womensWearDropdownFun() {
    this.productService.getWomensWearDropdown().subscribe((res) => {
      this.womensWearDropdown = res;
    });
  }


  //image

  handleFileInput(event: any) {
    const file = event.target.files[0];
    this.selectedFile = file;
  }

  private getBase64(file: File): Promise <string | ArrayBuffer | null> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  upadateData(data: any) {
    if (this.selectedFile) {
      this.getBase64(this.selectedFile).then((base64String) => {
        data.image = base64String;
        this.productService.updateData(this.productId, data).subscribe(res => {
        });
      });
    }
    else {
      this.sendDataToUpdate(data);
    }
  }

  private sendDataToUpdate(data: any) {
    this.productService.updateData(this.productId, data).subscribe((res) => {
    });
  }
}
