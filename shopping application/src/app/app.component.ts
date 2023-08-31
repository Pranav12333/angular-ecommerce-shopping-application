import { Component, EventEmitter, OnInit } from '@angular/core';
import { SharedService } from './services/shared.service';
import { timer } from 'rxjs';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'e-commerce';
  ngxUiLoaderConfig = {
    bgsColor: 'red',             // Background spinner color
    bgsOpacity: 1.0,             // Background spinner opacity
    bgsSize: 60,                 // Background spinner size
    bgsType: 'ball-spin-anticlockwise', // Background spinner type
    fgsColor: 'red',            // Foreground spinner color
    fgsSize: 60,                 // Foreground spinner size
    fgsType: 'ball-spin-anticlockwise', // Foreground spinner type
    text: 'Loading...',           // Text displayed while loading
    textColor: '#FFFFFF',        // Text color
    overlayColor: 'rgba(40, 40, 40, 0.8)', // Overlay color
    overlayBorderRadius: '0',    // Overlay border radius
  };

  constructor(private ngxUiLoaderService: NgxUiLoaderService) {  }

  ngOnInit() {  
    
    this.ngxUiLoaderService.stop();
    this.ngxUiLoaderService.stopBackground("do-background-things");
    this.ngxUiLoaderService.stopLoader("loader-01");
  }


}
