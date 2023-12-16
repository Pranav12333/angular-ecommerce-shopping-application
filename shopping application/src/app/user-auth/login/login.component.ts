import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ToasterService } from 'src/app/services/toaster.service';

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
  @Output() triggerFunctionEvent: EventEmitter<void> = new EventEmitter<void>();


  constructor(private toasterService: ToasterService,
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
    this.triggerFunctionEvent.emit();
 
    if (this.isLoggingIn) {
      // If login is already in progress, return to avoid multiple calls
      return;
    }

    this.isLoggingIn = true; // Set the flag to indicate login is in progress

    this.username = data.username;
    this.password = data.password;

    this.userService.validateUserCredentials(this.username, this.password).subscribe((isValid: boolean) => {

      if (this.username === "Admin" && this.password === "admin@123") {
        localStorage.setItem("username", this.username);
        this.userService.setUsername(this.username);
        this.toasterService.logInSuccessToaster();
        this.router.navigate(['admin/show']);
      } else if (isValid) {
        localStorage.setItem("username", this.username);
        this.userService.setUsername(this.username);
        this.toasterService.logInSuccessToaster();
        this.router.navigate(['/layout/home']);
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

