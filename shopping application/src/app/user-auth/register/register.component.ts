import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterService } from 'src/app/services/toaster.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  ngOnInit() { }

  constructor( private toasterService: ToasterService ,private userService: UserService, private router: Router) { }

  registrationData: any;
  showPassword = false;
  username: any;
  termsChecked = false;
  showError = false;
  logInFail: boolean = false;
  isRegistered: boolean = false;

  registerUserForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15), Validators.pattern("[A-Za-z]+")]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(3), Validators.maxLength(30),]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern(/^(?=.*[@#]).{7,}$/),]),
    confirmPassword: new FormControl('', [Validators.required]),
  },)

  toggleTerms() {
    this.termsChecked = !this.termsChecked;
  }
  getFormControl(controlName: string) {
    return this.registerUserForm.get(controlName);
  }
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  passwordsMatch() {
    const password = this.registerUserForm.get('password')?.value;
    const confirmPassword = this.registerUserForm.get('confirmPassword')?.value;
    this.showError = password !== confirmPassword;
  }

  registerUser(data: any) {
    if (this.isRegistered) {
         // If register is already in progress, return to avoid multiple calls
      return;
    }
    this.isRegistered = true; // Set the flag to indicate register is in progress

    this.username = data.username;

    this.userService.getRegistrationData().subscribe((res) => {
      this.registrationData = res;

      const isUserRegistered = this.registrationData.some(
        (item: any) => item.username === data.username
      );

      if (isUserRegistered) {
        // User is already registered
        this.logInFail = true;
      } else {
        // User is not registered, proceed with registration
        this.userService.postRegistrationData(data).subscribe((res) => {
          this.router.navigate(['./user-auth/login']);
          this.userService.setUsername(this.username);
          this.toasterService.registerSuccessToaster();
        });
      }
        // Finally, reset the flag to allow future register
      this.isRegistered= false
    }
    );
  }
}


