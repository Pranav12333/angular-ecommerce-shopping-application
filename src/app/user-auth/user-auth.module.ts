import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAuthRoutingModule } from './user-auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import{ ReactiveFormsModule } from '@angular/forms'
import { SharedModule } from "../shared/shared.module";
import { MatInputModule } from '@angular/material/input';


@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        CommonModule,
        UserAuthRoutingModule,
        ReactiveFormsModule,
        SharedModule,
        MatInputModule
    ]
})
export class UserAuthModule { }
