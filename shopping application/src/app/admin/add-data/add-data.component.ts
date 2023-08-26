import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.scss']
})
export class AddDataComponent {

  maleDropdown: boolean = false;
  femaleDropdown: boolean = false;
  selectedOptionmale: any;
  selectedFile: File | null = null;
  dataForm: any;
  object: any;
  allProducts: any = [];
  mansWearDropdown: any;
  womensWearDropdown: any;


  constructor(
    private toastrService: ToastrService,
    private productService: ProductService,
    private adminService: AdminService,
    private router: Router
  ) { }

  ngOnInit() {
    this.dataForm = new FormGroup({
      category: new FormControl('', Validators.required),
      gender: new FormControl(''),
      title: new FormControl('', Validators.required),
      image: new FormControl(null, Validators.required),
      price: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      cart: new FormControl(0),
    });

    const storedMale = localStorage.getItem("maleDropdown");
    this.maleDropdown = storedMale === 'true';

    const storedFemale = localStorage.getItem("femaleDropdown");
    this.femaleDropdown = storedFemale === 'true';

    this.adminService.maleDropdownChange$.next(this.maleDropdown);
    this.adminService.femaleDropdownChange$.next(this.femaleDropdown);

    this.adminService.maleDropdownChange$.subscribe((value) => {
      this.maleDropdown = value;
      localStorage.setItem("maleDropdown", value.toString());
    });

    this.adminService.femaleDropdownChange$.subscribe((value) => {
      this.femaleDropdown = value;
      localStorage.setItem("femaleDropdown", value.toString());
    });

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


  // image

  handleFileInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement?.files && inputElement.files.length > 0) {
      this.selectedFile = inputElement.files[0];
      this.getBase64(this.selectedFile).then(base64Data => {
        this.dataForm.patchValue({
          image: base64Data
        });
      });
    }
  }

  private getBase64(file: File): Promise<string | ArrayBuffer | null> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }


  addData(data: any) {
    if (this.maleDropdown) {
      data.gender = "male";
    } else if (this.femaleDropdown) {
      data.gender = "female";
    }
    this.productService.postData(data).subscribe((res) => {
    });
  }

}
