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
  isLoading = false;
  ngxUiLoaderConfig = {
    bgsColor: 'white',             // Background spinner color
    bgsOpacity: 0.5,             // Background spinner opacity
    bgsSize: 60,                 // Background spinner size
    bgsType: 'ball-spin-anticlockwise', // Background spinner type
    fgsColor: 'white',            // Foreground spinner color
    fgsSize: 60,                 // Foreground spinner size
    fgsType: 'ball-spin-anticlockwise', // Foreground spinner type
    text: 'Loading...',           // Text displayed while loading
    textColor: '#FFFFFF',        // Text color
    overlayColor: 'rgba(40, 40, 40, 0.8)', // Overlay color
    overlayBorderRadius: '0',    // Overlay border radius
  };

  showLoaderEvent: EventEmitter<any> = new EventEmitter();

  constructor(private ngxLoader: NgxUiLoaderService) { }

  ngOnInit() {
    this.showLoaderEvent.subscribe(() => {
      this.showLoader(); // Call showLoader function when the event is emitted
    });
  }



 
  showLoader() {
    
    this.ngxLoader.start(); // Show the loader
  }

  hideLoader() {
    this.ngxLoader.stop(); // Hide the loader
  }
}
