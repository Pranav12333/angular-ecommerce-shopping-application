import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from './layout/layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './layout/footer/footer.component';
import { ToastrModule } from 'ngx-toastr';
import { UserService } from './services/user.service';
import { SharedModule } from "./shared/shared.module";
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker'; 
import { LoaderService } from './services/loader.service';


@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        LayoutModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        ToastrModule.forRoot(),
        SharedModule,
        BsDatepickerModule.forRoot(),
  
       
    ]
})
export class AppModule { }
