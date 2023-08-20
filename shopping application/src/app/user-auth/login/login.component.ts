import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private toastrService: ToastrService, private userService: UserService, private router: Router) { }

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
    this.username = data.username;
    this.password = data.password;

    this.userService.validateUserCredentials(this.username, this.password).subscribe((isValid: boolean) => {
      if(this.username == "Admin" && this.password == "admin@123") {
        this.router.navigate(['admin/show']);
        // localStorage.setItem("username", this.username);
        // this.userService.names.next(this.username);
        this.userService.setUsername(this.username);
        this.toastrService.success('Logged in successfully as Admin!',)
      }
      else if (isValid) {
        this.router.navigate(['/layout/home']);
        localStorage.setItem("username", this.username);
        // this.userService.names.next(this.username);

        this.userService.setUsername(this.username);
        this.toastrService.success('Logged in successfully!', 'Success');
      } 
      else {
        this.logInFail = true;
        this.toastrService.error("invalid username")
      }
    });
  }
}

