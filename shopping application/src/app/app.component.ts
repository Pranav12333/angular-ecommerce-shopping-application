import { Component, OnInit } from '@angular/core';
import { LoaderService } from './services/loader.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'e-commerce';
  isLoading = false;
  constructor(private loaderService: LoaderService) { }

  // ngOnInit() {
  //   this.loaderService.loadingSubject.subscribe((res) => {
  //     if (res) {
  //       this.isLoading = true;
  //     } else {
  //       this.isLoading = false;
  //     }
  //     console.log(this.isLoading);
  //   });
  // }
  ngOnInit() {
    this.loaderService.loadingSubject.subscribe((res) => {
      if (res) {
        this.isLoading = true;

        // Automatically hide the loader after a custom duration (e.g., 3 seconds)
        timer(3000).subscribe(() => {
          // this.loaderService.hideloader();
        });
      } else {
        // this.isLoading = false;
      }
    });
  }
}
