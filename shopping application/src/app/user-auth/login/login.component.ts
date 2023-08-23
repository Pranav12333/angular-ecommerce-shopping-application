import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ToasterService } from 'src/app/services/toaster.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  registrationData: any;
  username: any;
  password: any;
  showPassword: any;
  logInFail: boolean = false;
  toastr: any;
  isLoggingIn: boolean = false;

  constructor(private toasterService: ToasterService,
    private loaderService: LoaderService,
    private userService: UserService,
    private router: Router) { }

  ngOnInit() { }

  loginUserForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern(/^(?=.*[@#]).{6,}$/)])
  })
  getFormControl(controlName: string) {
    return this.loginUserForm.get(controlName);
  }
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
  loginUser(data: any) {
    if (this.isLoggingIn) {
      // If login is already in progress, return to avoid multiple calls
      return;
    }

    this.isLoggingIn = true; // Set the flag to indicate login is in progress

    this.username = data.username;
    this.password = data.password;
    this.loaderService.showloader();

    this.userService.validateUserCredentials(this.username, this.password).subscribe(
      (isValid: boolean) => {
        if (this.username === "Admin" && this.password === "admin@123") {
          this.router.navigate(['admin/show']);
          localStorage.setItem("username", this.username);
          this.userService.setUsername(this.username);
          this.toasterService.logInSuccessToaster();

          this.loaderService.showloader();
          // Simulate login request to the server
          new Promise<void>((resolve, reject) => {
            setTimeout(() => {
              // Successful login logic
              this.loaderService.hideloader(); // Hide loader when login is complete
              resolve();
            }, 3000); // Simulate a 2-second login request
          });
        } else if (isValid) {
          this.router.navigate(['/layout/home']);
          localStorage.setItem("username", this.username);
          this.userService.setUsername(this.username);
          this.toasterService.logInSuccessToaster();
        } else {
          this.logInFail = true;
          this.toasterService.loginFailToaster();
        }
        // Finally, reset the flag to allow future logins
        this.isLoggingIn = false;
      },
      (error) => {
        // Handle errors if needed and reset the flag
        this.isLoggingIn = false;
      }
    );
  }
}

