import { Component, EventEmitter, OnInit } from '@angular/core';
import { SharedService } from './services/shared.service';
import { timer } from 'rxjs';
import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'e-commerce';
  

  constructor(private ngxUiLoaderService: NgxUiLoaderService) {  }

  ngOnInit() {  
  }


}
